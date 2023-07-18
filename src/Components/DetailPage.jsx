import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase";
import { doc, getDoc } from "firebase/firestore";

function DetailPage() {
  const docData = useParams();
  const id = docData.doc;

  const [movieList, setMovieList] = useState();

  useEffect(() => {
    const list = doc(db, "movies", id);
    const movie = getDoc(list);
    movie.then((snapshot) => {
      if (snapshot.exists) {
        setMovieList(snapshot.data());
      } else {
      }
    });
  }, []);
  console.log(movieList);

  return (
    <Container>
      {movieList && (
        <>
          <BackgroundImage>
            <img src={movieList.backgroundImage} alt="" />
          </BackgroundImage>
          <ImageTitle>
            <h1>{ movieList.title }</h1>
          </ImageTitle>
          <Controls>
            <PlayButtons>
              <img src="/images/play-icon-black.png" />
              <span>Play</span>
            </PlayButtons>
            <TrailerButtons>
              <img src="/images/play-icon-white.png" />
              <span>Trailer</span>
            </TrailerButtons>
            <PlusButtons>
              <span> + </span>
            </PlusButtons>
            <GroupButtons>
              <img src="/images/group-icon.png" />
            </GroupButtons>
          </Controls>
          <SubTitle>
            { movieList.subtitle }
          </SubTitle>
          <Description>
            { movieList.description }
          </Description>
        </>
      )}
    </Container>
  );
}

export default DetailPage;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const BackgroundImage = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  margin-top: 60px;

  h1 {
    color: white;
    text-transform: uppercase;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

const PlayButtons = styled.button`
  background-color: rgb(249, 249, 249);
  margin-right: 20px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  letter-spacing: 1.8px;
  text-transform: uppercase;

  &:hover {
    background-color: rgb(198, 198, 198);
  }

`;
const TrailerButtons = styled(PlayButtons)`
  background-color: rgb(0, 0, 0, 0.3);
  color: rgb(249, 249, 249);
  border: 1px solid rgb(249, 249, 249);
`;
const PlusButtons = styled.button`
  border-radius: 50%;
  width: 44px;
  height: 44px;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:  rgb(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 20px;
  
  span {
    font-size: 30px;
    color: white;
  }

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;
const GroupButtons = styled(PlusButtons)`
  background-color: rgb(0, 0, 0);

`;

const SubTitle = styled.div`
  color: white;
  margin-top: 30px;

`;
const Description = styled.div`
  color: white;
  margin-top: 30px;
  max-width: 700px;

`;
