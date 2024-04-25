import React from 'react'
import styled, {keyframes} from 'styled-components'
import link from 'next/link'
import {ConnectWallet} from '@thirdweb-dev/react'




const NavBar = () => {
    // ADD in a button for the fitquest logo that links to the index.js file (homepage)
  return (
    <Container>
    <Holder>
    
      <LogoBox>
          <NavElementImage> 
              <NavHomeButton> <StyledLink href="/"><ImgContainerLogo><img src="Untitled.png" alt="" /> </ImgContainerLogo></StyledLink> </NavHomeButton>
              
          </NavElementImage>
      </LogoBox>
      
      <NavButtonHolder>
          <NavElement>
              <StyledLink href="/">Home</StyledLink>
          </NavElement>

          <NavElement>
              <StyledLink href="/about">FAQ</StyledLink>
          </NavElement>
          <NavElement>
              <StyledLink href="/swap">Swap</StyledLink>
          </NavElement>
          <NavElement>
              <StyledLink href="/">Explore</StyledLink>
          </NavElement> 
          <NavElementConnect>Connect Wallet</NavElementConnect>
          {/* <ConnectWallet
            // client={clien?t}
            // wallets={wallets}
            theme={"dark"}
            connectModal={{ size: "wide" }}
            btnTitle = "Connect ze Wallet"

          /> */}
        
      </NavButtonHolder>
    </Holder>
    </Container>
  )
}
const ImgContainerLogo = styled.div`
  // display: inline-block;
  // color: white;
`;

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #1F2937;
  border-top: 1px solid #364357;
  border-bottom: 1px solid #364357;
`;


const NavHomeButton = styled.div`
  all: unset;
  // padding: 1.5vw;
  font-size: 3.5vw;
  display: inline-block;
  line-height: 1;
`;

const NavElementImage = styled.button`
  transform: scale(.08);
  display: inline-block;
  width: 10%;
  height: 20%;
  // transition: all 0.2s ease-in;
  // position: relative;
  // overflow: hidden;
  // z-index: 1;
  // color: #090909;
  // padding: 0.7em 1.7em;
  // cursor: pointer;
  // font-size: 18px;
  // border-radius: 50%;
  // padding: .3em;
  // background: #e8e8e8;
  // border: 1px solid #e8e8e8;
  border: none;
  background: none;
//   box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;

`;






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
const NavElement = styled.button`
  display: inline-block;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  color: #090909;
  padding: .6vw;
  margin: 1vw;
  width: auto; // Adjust this value to fit your needs
  cursor: pointer;
  font-size: 14px;
  border-radius: 0.5em;
  background-color: inherit;
  color: grey;
  border: none;

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
const NavElementConnect = styled(ConnectWallet)`
  // width: 150%;
  // height: 90%;
  display: flex;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  color: #090909;
  padding: .6vw;
  padding-left: .1vw;
  margin: 1vw;
  width: auto; // Adjust this value to fit your needs
  cursor: pointer;
  font-size: 14px;
  border-radius: 0.5em;
  background-color: inherit;
  color: grey;
  border: none;
  

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


const Holder = styled.div`
    display:flex;
    // width: 50%;
    width: 100%;
    background-color: #1A1B1F; 
    height: 50px;

    
    justify-content: space-between;
   
`
const LogoBox = styled.div`
    // font-size: 4.5vw;
    // font-weight: bold;
    width: 20%;

    
`

const NavButtonHolder = styled.div`
display:flex;
// justify-content: space-between;
// justify-content: space-evenly;
align-items: center;
gap: 2vw;
// width: 60%
`

// const NavElement = styled.button`
// padding: 1.5vw;
// font-size: 2.5vw;
// background-color: #e3e3da;
// border: none;
// cursor: pointer;
// transition: 0.3s ease all;

// border-radius: 0.5vw;

// &:hover{
//     background-color: green;
// }

// `






export default NavBar