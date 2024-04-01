import NavBar from "@/components/NavBar";
import styled from "styled-components";

export default function swap (){
    // Add your code here
    return (
      <MainContainer>
        <TitleContainer>SWAP ANYTIME, ANYWHERE</TitleContainer>
       <SwapContainer>
          <YourToken>
            <TokenSubdivider>
              <TextField>You Pay</TextField>
              <InputField placeholder="0"></InputField>
              <br/>
            </TokenSubdivider>
            <SelectToken text = "stuff"/>

          </YourToken>
          {/* <TokenSelectBox>Select Token</TokenSelectBox> */}
          <TokenToReceive>
            <TokenSubdivider>
              <TextField>You receive</TextField>
              <InputField placeholder="0"></InputField>
              <br/>
            </TokenSubdivider>
            <SelectToken text = "stuff"/>
          </TokenToReceive>

          <ConnectWallet>Connect Wallet</ConnectWallet>

       </SwapContainer>
       <div style={{height: "100px"}}></div>
       </MainContainer>
    );
}
const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: grey;
  background-color: rgba(17, 24, 39);
  backdrop-filter: blur(5px);

`;

const TitleContainer = styled.div`
font-size: 2rem;
margin-bottom: 50px;
`
const SwapContainer = styled.div`
  width: 34%;
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
  height: 80px;
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
height: 20%;
margin-right: 3px;
border-radius: 8px;
border: none;
background-color: black;

`

const TextField = styled.div`
font-size: 12px;
letter-spacing: -.4px;
color: white;
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
height: 80px;
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
  height: 40px;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: #311C31;
  color: #F476FA;
`;


