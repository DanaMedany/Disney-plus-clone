/* eslint-disable no-unreachable */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { selectName, selectPhoto, selectEmail, setUserData, setLogOut } from "../features/user/userSlice";
import {useSelector, useDispatch} from "react-redux";
import {auth, provider, signInWithPopup} from '../firebase'
import { useNavigate } from "react-router-dom";



function Header() {
  const userName = useSelector(selectName);
  const userPhoto = useSelector(selectPhoto);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(navigate)


  const [show, setShow] = useState(false)
  

  useEffect(()=> {
    auth.onAuthStateChanged(async (user)=> {
      if (user) {
        dispatch(setUserData({
          email: user.email,
          name:  user.displayName,
          photo: user.photoURL,
        }))
      }
    })
  }, [])

  const singIn = () => {
      signInWithPopup(auth, provider).then((result)=> {
        const user = result.user;
        dispatch(setUserData({
          name:  user.displayName,
          email: user.email,
          photo: user.photoURL,
        }))
        navigate("/")
      }).catch(err => console.error(err))
  }

  const signOut = () => {
    auth.signOut().then(()=>dispatch(setLogOut()))
    navigate("/login")

  }

  const showLogOut = () => {
    setShow(perState => !perState)
  }


  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!userName ? 
      (<Container>  
        <LoginButton onClick={singIn}>Login</LoginButton>
      </Container>) : (
        <>
          <NavItems>
            <a href="#">
              <img src="/images/home-icon.svg" alt="" />
              <span>Home</span>
            </a>
            <a href="#">
              <img src="/images/search-icon.svg" alt="" />
              <span>Search</span>
            </a>
            <a href="">
              <img src="/images/watchlist-icon.svg" alt="" />
              <span>WatchList</span>
            </a>
            <a href="">
              <img src="/images/original-icon.svg" alt="" />
              <span>original</span>
            </a>
            <a href="">
              <img src="/images/movie-icon.svg" alt="" />
              <span>Movies</span>
            </a>
            <a href="">
              <img src="/images/Series-icon.svg" alt="" />
              <span>Series</span>
            </a>
          </NavItems>
          <PortfolioImage onClick={showLogOut} src="/images/Screenshot 2023-05-21 203044.png" />
          <LogOut style={{display:  show ? 'block' : 'none' }} onClick={signOut}>Logout</LogOut>
          
        </>
      )}

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
  overflow-x: hidden;
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
        content: "";
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
      span:after {
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
  position: relative;
`;

const LoginButton = styled.button`
  border: 2px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  cursor: pointer;
  transition: all 250ms ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`

const LogOut = styled(LoginButton)`
  position: absolute;
  right: 0;
  top: 50px;
  }
`