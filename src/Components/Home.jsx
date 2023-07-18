import React, { useEffect } from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setMovie } from "../features/movie.js/movieSlice";

function Home() {
  const Dispatch = useDispatch();

  useEffect(() => {
    const moviesList = collection(db, "movies");
    const docsData = getDocs(moviesList);
    docsData
      .then((snapshot) => {
        const movie = snapshot.docs.map((doc) => {
          return { doc: doc.id, ...doc.data() };
        });
        Dispatch(setMovie(movie));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  color: white;
  overflow-x: hidden;

  &:after {
    content: "";
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
  }
`;
