import Head from "next/head";
import Image from "next/image";
import { keyframes } from "styled-components";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import React from "react";
import styled from "styled-components";

import NavBar from "@/components/NavBar";

// const inter = Inter({ subsets: ["latin"] });

const Home = () =>  {
  return (
    <TotalParent>
      <Head>
        <title>BLOCKSWAP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Background/>
      <MainContainer>
        
      <TitleBanner>BLOCKSWAP PROTOCOL </TitleBanner>
      <DescriptionText>
        Join the emergeing movement of DeFi now!
        Access thousands of tokens and vote, all from your coin wallet.


      </DescriptionText>
      <LaunchButton>
        <StyledLink href="/swap">Launch App</StyledLink>
      </LaunchButton>
      <br/>
      <DescriptionText>
        Diversify your crypto portolio with our easy to use swap platform.
      

      </DescriptionText>
      <br/><br/><br/><br/><br/><br/>
      <SmallDescriptionText>
        
        

      </SmallDescriptionText>

      </MainContainer>

    </TotalParent>
  );
}

const StyledImage = styled.img`

`;

const TotalParent = styled.div`
overflow-x: hidden;
overflow-y: hidden;
position: relative;
height: 100vh;
`
const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;
const Background = styled.div`
position: absolute;
top: 0;
left: 0;
width: 120%;
margin-left: -10%;
margin-right: -10%;
// margin-top: -10%;
// margin-bottom: -10%;
height: 140vh;
background-image: url('polkadots.avif');
background-size: 100% 100%;

// background-color: rgba(17, 24, 39);
background-position: center;
filter: blur(20px);
z-index: -1;
overflow-x: hidden;
overflow-y: hidden;
`

const MainContainer = styled.div`
  width: 100%;
  height: 96vh;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  align-items: left;
  justify-content: center;
  color: white;
  background-color: rgba(17, 24, 39, 0.5); // Add transparency to see the blurred background
  font-family: 'Inter', sans-serif;
  font-weight: 100;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;

`;


const TitleBanner = styled.div`
width: 98%;
margin-left: 2vw;
font-size: 48px;
text-align: left;
margin-bottom: 20px;
`;

const DescriptionText = styled.div`
width: 98%;
margin-left: 2vw;
text-align: left;
font-size: 22px;
// padding: 20px;
margin-bottom: 20px;
`;


const SmallDescriptionText = styled.div`
width: 98%;
margin-left: 2vw;
text-align: left;
font-size: 12px;
// padding: 20px;
margin-bottom: 20px;
color: grey;
display: flex;
flex-direction: column;
align-items: center;

`;


// NOT USED ATM, KEEP COMMENTED OUT
// const LaunchButton = styled.div`
// background-color: #C31068;
// border: 1px solid white;
// border-radius: 8px;
// color: white;
// font-size: 18px;
// font-family: 'Inter', sans-serif;
// padding: 5px;
// margin-left: 2vw;
// font-weight: 100;
// //removing the default button styles
// width: 96px;
// cursor: pointer;
// transition: all 0.3s ease;
// align-content: center;
// justify-content: center;
// margin-bottom: 20px;
// `



const moveBg = keyframes`
  0% {
    background-position: 31% 0%;
  }

  50% {
    background-position: 70% 100%;
  }

  100% {
    background-position: 31% 0%;
  }
`;
const LaunchButton = styled.button`
  display: inline-block;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  color: #090909;
  padding: .6vw;
  margin: 1vw;
  width: 20%; // Adjust this value to fit your needs
  height: 7%;
  cursor: pointer;
  font-size: 14px;
  border-radius: 0.5em;
  background-color: inherit;
  color: grey;
  border: none;
  color: white;
  font-size: 18px;
  font-family: 'Inter', sans-serif;

  :hover{
    color: white;
  }

  --border-color: linear-gradient(-45deg, #ffae00, #7e03aa, #00fffb);
  --border-width: 0.125em;
  --curve-size: 0.5em;
  --blur: 30px;
  --bg: #080312;
  --color: #afffff;
  // text-transform: uppercase;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.6);
  clip-path: polygon(
    0% var(--curve-size),
    var(--curve-size) 0,
    100% 0,
    100% calc(100% - var(--curve-size)),
    calc(100% - var(--curve-size)) 100%,
    0 100%
  );

  &::after,
  &::before {
    content: "";
    position: absolute;
    inset: 0;
  }

  &::before {
    background: var(--border-color);
    background-size: 300% 300%;
    animation: ${moveBg} 5s ease infinite;
    z-index: -2;
  }

  &::after {
    background: var(--bg);
    z-index: -1;
    clip-path: polygon(
      var(--border-width) calc(var(--curve-size) + var(--border-width) * 0.5),
      calc(var(--curve-size) + var(--border-width) * 0.5) var(--border-width),
      calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width)) calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
      calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)) calc(100% - var(--border-width)),
      var(--border-width) calc(100% - var(--border-width))
    );
    transition: clip-path 500ms;
  }

  &:hover::after,
  &:focus::after {
    clip-path: polygon(
      calc(100% - var(--border-width)) calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
      calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width)) calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
      calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)) calc(100% - var(--border-width)),
      calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)) calc(100% - var(--border-width))
    );
    transition: 200ms;
  }
`;

export default Home;