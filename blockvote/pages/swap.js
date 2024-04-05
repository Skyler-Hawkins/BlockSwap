import NavBar from "@/components/NavBar";
import styled from "styled-components";
import CryptoSelect from "@/components/CryptoSelect";
import { useState } from 'react';

function Swap (){
    // Add your code here
    const [hasConnectedWallet, setHasConnectedWallet] = useState(false); 
    const handleSwap = () => {
      // Here, also handling the user has not connected their wallet
      if(hasConnectedWallet == false){
        
      }
      else {
        // Here, handling the user has connected their wallet
      }

    }
    return (
      <TotalParent>
      <NavBar />
      <Background/>
      <MainContainer>
        <TitleContainer>SWAP ANYTIME, ANYWHERE</TitleContainer>
        <SwapContainer>
          <YourToken>
            <TokenSubdivider>
              <TextField>You Pay</TextField>
              <InputField placeholder="0"></InputField>
              <br />
            </TokenSubdivider>
            <SelectToken> 
              <CryptoSelect/> 
            </SelectToken>

          </YourToken>
          {/* <TokenSelectBox>Select Token</TokenSelectBox> */}
          <TokenToReceive>
            <TokenSubdivider>
              <TextField>You receive</TextField>
              <InputField placeholder="0"></InputField>
              <br />
            </TokenSubdivider>
            <SelectToken> 
              <CryptoSelect/> 
            </SelectToken>
          </TokenToReceive>

          <ConnectWallet onClick = {() => handleSwap()}>Connect Wallet</ConnectWallet>

        </SwapContainer>
        <div style={{ height: "100px" }}></div>
      </MainContainer>
      </TotalParent>
    );
}

const TotalParent = styled.div`
overflow-x: hidden;

overflow-y: hidden;
position: relative;
`
const MainContainer = styled.div`
  width: 100%;
  height: 96vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-color: rgba(17, 24, 39);
  // backdrop-filter: blur(5px);
  color: white;

  font-size: 1rem;
  overflow-x: hidden;
  overflow-y: hidden;


  position: relative;

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


const TitleContainer = styled.div`
font-size: 2rem;
margin-bottom: 50px;
`
const SwapContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 10px;
  // background-color: rgba(17, 24, 39);
  padding: 4px;
`;
///////////// STUFF FOR 'YOUR TOKEN' //////////////////////

//plan: On click of this button, a menu pops up with a list of choices, temp will be just empty coins
const YourToken = styled.div`
  width: 100%;
  height: 15vh;
  border: 1px solid #000;
  margin-bottom: 2px;
  border-radius: 10px;
  background-color: rgba(17, 24, 39);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

`;

const TokenSubdivider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Add this line
  width: 70%;
  margin-bottom: 10px;
  padding-left: 3px;
`;
const SelectToken = styled.div`
width: 30%;
display: flex; // Add this line
justify-content: center; // Add this line
align-items: center; // Add this line
height: 40%;
margin-right: 12px;
border-radius: 8px;
border: none;
// background-color: black;

`

const TextField = styled.div`
font-size: 1em;
letter-spacing: -.4px;
color: rgb(155, 155, 155);
margin-top: 5px;
font-family: 'Basel', sans-serif;
font-weight: 500;


`
const InputField = styled.input`
  margin-top: 10px;
  width: 50%;
  border: none;
  border-radius: 5px; // Add this line
  color: grey; // Add this line
  background-color: inherit; // Add this line
  font-size: 20px;
`;
// NOW whithin the token panel, there is a text that says 'you pay' in the top left corner, a button that says 'select token'
// in the middle-right side, and an input field that says 0, and will eventually describe how much of the token you want to swap


const TokenSelectBox = styled.button`
  width: 100%;
  height: 50px;
  border: 1px solid #000;
  margin-bottom: 10px;
`;


///////////////////////////////////////////////////////////

const TokenToReceive = styled.div`
width: 100%;
height: 15vh;
border: 1px solid #000;
margin-bottom: 2px;
border-radius: 10px;
background-color: rgba(17, 24, 39);

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

`;



const ConnectWallet = styled.button`
  width: 100%;
  height: 7vh;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: #311C31;
  color: #F476FA;
  font-family: 'Basel', sans-serif;
  font-weight: 550;
  font-size: 1.2em;
  &:hover {
    background-color: #411D41; // Slightly lighter color for highlight effect
  }
`;

export default Swap;
