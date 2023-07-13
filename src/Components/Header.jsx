/* eslint-disable no-unreachable */
import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavItems>
        <a href="">
          <img src="/images/home-icon.svg" />
          <span>Home</span>
        </a>
        <a href="">
          <img src="/images/search-icon.svg" />
          <span>Search</span>
        </a>
        <a href="">
          <img src="/images/watchlist-icon.svg" />
          <span>WatchList</span>
        </a>
        <a href="">
          <img src="/images/original-icon.svg" />
          <span>original</span>
        </a>
        <a href="">
          <img src="/images/movie-icon.svg" />
          <span>Movies</span>
        </a>
        <a href="">
          <img src="/images/Series-icon.svg" />
          <span>Series</span>
        </a>
      </NavItems>
      <PortfolioImage src="/images/Screenshot 2023-05-21 203044.png" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavItems = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 13px;

      img {
      width: 20px;
      }

        span {
        color: white;
        text-transform: uppercase;
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;

          &:after {
            content:'';
            height: 2px;
            background-color: white;
            position: absolute;
            bottom: -6px;
            left: 0;
            right: 0;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
            opacity: 0;
          }
      }
      &:hover {
        span:after{
          transform: scaleX(1);
          opacity: 1;
        }
      }
  }

  @media (width: 768px) {
    NavItems {
      display: none;
    }
  }
`;

const PortfolioImage = styled.img`
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
