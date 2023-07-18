import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectMovie } from "../features/movie.js/movieSlice";

function Movies() {
  const movieList = useSelector((state) => state.movie.movies);
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        { movieList && movieList.map(movie => 
          <Wrap key= {movie.doc}>
            <img  src= { movie.backgroundImage } alt=""/>
          </Wrap>
          )}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0px, 1fr));
  padding: 30px 0 25px;
  gap: 25px;
`;
const Wrap = styled.div`
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.8);
  }
`;
