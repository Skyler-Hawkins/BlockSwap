import NavBar from "@/components/NavBar";
import styled from "styled-components";
import CryptoSelect from "@/components/CryptoSelect";
import { useState, useEffect, useRef } from 'react';
// import {useStorage, useSigner, Web3Button} from '@thirdweb-dev/react';
import { ConnectWallet } from "@thirdweb-dev/react";
import MockWBNBABI from "@/contracts/abi/MockWBNBABI.json";
import MockWETHABI from "@/contracts/abi/MockWETHABI.json";
import BlockSwapABI from "@/contracts/abi/BlockSwapABI.json";
import {useAddress} from "@thirdweb-dev/react";
import web3 from 'web3';
import {ethers} from 'ethers';
import {useSigner} from '@thirdweb-dev/react';
// import {QueryClient, QueryClientProvider} from 'react-query';
// import {Web3Button} from '@thirdweb-dev/react';


function Swap (){
  const signer = useSigner();
  const [errorMessage, setErrorMessage] = useState("Any Swap Issues Display Here");
    // Add your code here
    // FROM CRYPTOSELECT.JS /////////////////////////////////////////////////////////////////
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    // const [selectedCoin, setSelectedCoin] = useState("Select a coin");
    const [selectedCoin1, setSelectedCoin1] = useState("Select a coin");
    const [selectedCoin2, setSelectedCoin2] = useState("Select a coin");
    
    const [coinimgurl1, setCoinimgurl1] = useState("/MyFavicon.png");
    const [coinimgurl2, setCoinimgurl2] = useState("/MyFavicon.png");

    const [coinSent, setCoinSent] = useState('0');
    const [coinReceived, setCoinReceived] = useState('0');

    const BNBContract = new ethers.Contract('0x4f8EB94683dFF01b7A45f02936B32841E433701e', MockWBNBABI);
    const BNBContractWithSigner = BNBContract.connect(signer);
    console.log("BNBContractWithSigner: " + BNBContractWithSigner)
    const ETHContract = new ethers.Contract('0x37390173dca0784f76a46564cf66cb0fea35ae82', MockWETHABI);
    const ETHContractWithSigner = ETHContract.connect(signer);
    const BlockSwapContract = new ethers.Contract('0x91b3E9aD5e6F5ac39d958A7Dff32DE0c7E029B86',BlockSwapABI);
    const BlockSwapContractWithSigner = BlockSwapContract.connect(signer);

    // Also Need to pull wallet address from the connect wallet button
    // to do: deploy contracts on actual BNB testnet
    // then, give the above commented out contract declarations the actual addresses of the deployed contracts
    // then fix up the if statements below to accurately call the functions. 


    
    useEffect (() => {
      // when this changes, change the coinReceived value
      if(BlockSwapContractWithSigner && signer && ETHContractWithSigner && BNBContractWithSigner && coinSent && selectedCoin1 == 'BNB' && selectedCoin2 == 'ETH'){
        swapBNBToETH();
        setCoinReceived();
      console.log("coinReveived: " + coinReceived)
    }
    }, [coinSent]);
    useEffect (() => {
      // when this changes, change the coinReceived value
      console.log("coinSent: " + coinSent)
      console.log("selectedCoin1: " + selectedCoin1)
      console.log("selectedCoin2: " + selectedCoin2)
      console.log("BNBContractWithSigner: " + BNBContractWithSigner)
      console.log("ETHContractWithSigner: " + ETHContractWithSigner)
      console.log("BlockSwapContractWithSigner: " + BlockSwapContractWithSigner)
      console.log("signer: " + signer)

      if(BlockSwapContractWithSigner && signer && ETHContractWithSigner && BNBContractWithSigner && coinSent && selectedCoin1 == 'ETH' && selectedCoin2 == 'BNB'){
        swapETHToBNB();
        setCoinReceived();
      console.log("coinReveived: " + coinReceived)
    }
    }, [coinSent]);


    const displayErrorMessage = (message) => {
      setErrorMessage(message);
    }


    const pullText = (event) => {
      setCoinSent(event.target.value);
      console.log("input value: "+ coinSent);
    };
    
    const HandleClick = (coinName, coinTicker, id) => {
      console.log("passed paremeters: " + coinName + " " + coinTicker + " " + id); 
        if(id == '1'){
          let coinimgurl = "https://cryptologos.cc/logos/" + coinName + "-" + coinTicker + "-logo.png";

          setSelectedCoin1((coinTicker.toUpperCase()));
          setCoinimgurl1(coinimgurl);
        }
        else{
          let coinimgurl = "https://cryptologos.cc/logos/" + coinName + "-" + coinTicker + "-logo.png";
          setSelectedCoin2((coinTicker.toUpperCase()));
          setCoinimgurl2(coinimgurl);

        }
        
    }
    ///////////////////////////////////////////////////////////////////////////////////////////
  const swapBNBToETH = async () => {
    // Here I will do a hypothetical calculation to show how much BNB 
    // the user will receive. Need to get totalLiquidity of BNB and ETH, then do the internal calculation.
    if(BlockSwapContractWithSigner){
      console.log("coinSent: " + coinSent)
      const totalBNBLiquidity = await BlockSwapContractWithSigner.totalLiquidityBNB();
      console.log("totalBNBLiquidity: " + totalBNBLiquidity);
      const totalETHLiquidity = await BlockSwapContractWithSigner.totalLiquidityETH();
      console.log("totalETHLiquidity: " + totalETHLiquidity);

      const amountBNB = parseInt(coinSent);
  
      const x = totalBNBLiquidity;
      const y = totalETHLiquidity;
      const dx = amountBNB;
      const k = x * y;
      const newReserveBNB = x + dx;
      const newReserveETH = k / newReserveBNB;
      const dy = y - newReserveETH;
  
      console.log("Hypothetical conversion below:");
      console.log("Amount BNB: " + amountBNB);
      console.log("Amount ETH: " + dy);
  
      setCoinReceived(dy);
    }
    else{
      console.log("BlockSwapContract not found")
    }    
  }
  const swapETHToBNB = async () => {
    // Here I will do a hypothetical calculation to show how much ETH 
    // the user will receive. Need to get totalLiquidity of BNB and ETH, then do the internal calculation.
    console.log("coinSent: " + coinSent)
    const totalBNBLiquidity = await BlockSwapContractWithSigner.totalLiquidityBNB();
    const totalETHLiquidity = await BlockSwapContractWithSigner.totalLiquidityETH();
    const amountETH = parseInt(coinSent);


    const x = totalBNBLiquidity;
    const y = totalETHLiquidity;
    const dy = amountETH;
    const k = x * y;
    const newReserveETH = y + dy;
    const newReserveBNB = k / newReserveETH;
    const dx = x - newReserveBNB;

    console.log("Hypothetical conversion:");
    console.log("Amount ETH: " + amountETH);
    console.log("Amount BNB: " + dx);
    setCoinReceived(dx);
  }
 


const handleSwap = async () => {
  const address = await signer.getAddress();

  // Need to add .approve calls for the two tokens at the current address
  // Here, also handling the user has not connected their wallet


  // if allowance is less than needed
  if(BlockSwapContractWithSigner){





  
  const totalBNBLiquidity = await BlockSwapContractWithSigner.totalLiquidityBNB();
  const totalETHLiquidity = await BlockSwapContractWithSigner.totalLiquidityETH();

  const bnballowance = await BNBContractWithSigner.allowance(address, '0x91b3E9aD5e6F5ac39d958A7Dff32DE0c7E029B86');
  const ethallowance = await ETHContractWithSigner.allowance(address, '0x91b3E9aD5e6F5ac39d958A7Dff32DE0c7E029B86');


  console.log("BNB allowance: " + bnballowance);
  console.log("ETH allowance: " + ethallowance);
  if(bnballowance < parseInt(coinSent)){
    BNBContractWithSigner.approve(address, parseInt(coinSent));
  }
  if(ethallowance < parseInt(coinSent))
  {
    ETHContractWithSigner.approve(address, parseInt(coinSent));
  }

  // Minting the wallet my token just so that anyone can swap it
  await BNBContractWithSigner.mint(parseInt(coinSent),address);
  await ETHContractWithSigner.mint(parseInt(coinSent),address);
  


  if(selectedCoin1 == "Select a coin" || selectedCoin2 == "Select a coin"){
    console.log("Please select a coin to swap")
    // alert("Please select a coin to swap");
  }
  else{
    // find which direction the person is swapping in
    if (selectedCoin1 == selectedCoin2){
      console.log("You cannot swap the same token with itself")
    }
    else{
      if(selectedCoin1 == 'ETH'){
        // checking if valid amount send
        if(coinSent > totalETHLiquidity ){
          setErrorMessage("Sorry, the pool has less than your sent amount of ETH");
        }
      }
      if(selectedCoin1 == 'BNB'){
        // checking if valid amount send
        if(coinSent > totalBNBLiquidity ){
          setErrorMessage("Sorry, the pool has less than your sent amount of BNB");
        }
      }
      
      // all conditions satisfied. Now we can ATTEMPT to swap the tokens
      // would need to read contract to make sure we have valid conditions for swap in THAT regard too, to be done
      // later
      // *****HERE GOES THE ABOVE DESCRIBED STUFF*****
      //
      // *****HERE GOES THE ABOVE DESCRIBED STUFF*****
      // After checking that set the direction of the swap
      if (selectedCoin1 == 'ETH' && selectedCoin2 == 'BNB'){
        // Swap ETH to BNB
        // This is where the contract call would go
        console.log("Swapping ETH to BNB")
        console.log("amount of coin sent: " + coinSent)
        console.log("address: " + address)
        try {
          await BlockSwapContractWithSigner.swapETHForBNB(address, parseInt(coinSent));
          displayErrorMessage("Token Swap Successful");
        } catch (error) {
          console.error("An error occurred while swapping ETH for BNB:", error);
          if (error.data && error.data.message) {
            console.error("Error message: ", error.data.message);
            // Display the error message to the user
            // Replace 'displayErrorMessage' with your function to display the error message to the user
            displayErrorMessage(error.data.message);
          }
        }
      }
      else if (selectedCoin1 == 'BNB' && selectedCoin2 == 'ETH'){
        // Swap BNB to ETH
        // This is where the contract call would go
        console.log("Swapping BNB to ETH")
        console.log("amount of coin sent: " + coinSent)
        console.log("address: " + address)
        try {
          await BlockSwapContractWithSigner.swapBNBForETH(address, parseInt(coinSent));
          displayErrorMessage("Token Swap Successful");
        } catch (error) {
          console.error("An error occurred while swapping BNB for ETH:", error);
          if (error.data && error.data.message) {
            console.error("Error message: ", error.data.message);
            // Display the error message to the user
            // Replace 'displayErrorMessage' with your function to display the error message to the user
            displayErrorMessage(error.data.message);
          }
        }
      }
    }
  }
}
}
    const [coinReceivedValue, setCoinReceivedValue] = useState('null');

    useEffect(() => {
      const fetchCoinReceived = async () => {
        const result = await coinReceived;
        setCoinReceivedValue(result);
      };

      fetchCoinReceived();
    }, [coinReceived]);

    return (
      <TotalParent>
      {/* <QueryClientProvider client = {queryClient}> */}
      <NavBar />
      <Background/>
      <MainContainer>
        <TitleContainer>SWAP ANYTIME, ANYWHERE</TitleContainer>
        <SwapContainer>
          <YourToken>
            <TokenSubdivider>
              <TextField>You Pay</TextField>
              <InputField value = {coinSent} onChange = {pullText} placeholder="0"></InputField>
              <br />
            </TokenSubdivider>
            <SelectToken> 
              <CryptoSelect 
                  id = '1'
                  isOpen={isOpen1} 
                  setIsOpen={setIsOpen1} 
                  selectedCoin={selectedCoin1} 
                  setSelectedCoin={setSelectedCoin1} 
                  coinimgurl={coinimgurl1} 
                  setCoinimgurl={setCoinimgurl1} 
                  HandleClick={HandleClick} />
            </SelectToken>

          </YourToken>
          {/* <TokenSelectBox>Select Token</TokenSelectBox> */}
          <TokenToReceive>
            <TokenSubdivider>
              <TextField>You receive</TextField>
              <ReceiveField  placeholder = "here"> {coinReceivedValue} </ReceiveField>
              <br />
            </TokenSubdivider>
            <SelectToken> 
              <CryptoSelect 
                id = '2'
                isOpen={isOpen2} 
                setIsOpen={setIsOpen2} 
                selectedCoin={selectedCoin2} 
                setSelectedCoin={setSelectedCoin2} 
                coinimgurl={coinimgurl2} 
                setCoinimgurl={setCoinimgurl2} 
                HandleClick={HandleClick} />
              </SelectToken>
          </TokenToReceive>

          <SwapTokens onClick = { async () => {
            await handleSwap();
            }}>Swap!</SwapTokens>
          {/* <Web3Button 
          contractAddress = "0x91b3E9aD5e6F5ac39d958A7Dff32DE0c7E029B86"
          action ={async (contract ) =>{
            await handleSwap(contract);
            
          }}
          ></Web3Button> */}
          {/* <ConnectWallet/> */}
        </SwapContainer>
        <div style={{ height: "100px" }}></div>
        <ErrorBox> {errorMessage} </ErrorBox>
      </MainContainer>
      {/* </QueryClientProvider>  */}
      </TotalParent>
    );
}

const ErrorBox = styled.div`
padding: 10px;
border: 1px solid white;
border-radius: 10px;

`
const TotalParent = styled.div`
overflow-x: hidden;
overflow-y: hidden;
position: relative;
height: 100vh;
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
  padding: 5px;
  border: none;
  border-radius: 5px; // Add this line
  color: grey; // Add this line
  background-color: inherit; // Add this line
  font-size: 20px;
  &:hover {
    box-shadow: 0 0 5px white; // Add this line
  }

  
`;
const ReceiveField = styled.div`
  margin-top: 10px;
  width: 50%;
  height: 20px;
  padding: 5px;
  border: none;
  border-radius: 5px; // Add this line
  color: grey; // Add this line
  background-color: inherit; // Add this line
  font-size: 20px;
  &:hover {
    box-shadow: 0 0 5px white; // Add this line
  }

  
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


const SwapTokens = styled.button`
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
    cursor: pointer;
  }
`;

const ConnectWalletButton = styled(ConnectWallet)`
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
