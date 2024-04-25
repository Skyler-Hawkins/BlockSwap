import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
        /* <CryptoContainer>
            <CryptoImage src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"/>
            <CryptoName>BTC</CryptoName>
        </CryptoContainer> */

export default function CryptoSelect({ id, isOpen, setIsOpen, selectedCoin, setSelectedCoin, coinimgurl, setCoinimgurl, HandleClick }) {
    // const [isOpen, setIsOpen] = useState(false);
    // const [selectedCoin, setSelectedCoin] = useState("Select a coin");
    // const [coinimgurl, setCoinimgurl] = useState("/MyFavicon.png");
    // const HandleClick = (coinName, coinTicker) => {
    //     let coinimgurl = "https://cryptologos.cc/logos/" + coinName + "-" + coinTicker + "-logo.png";
    //     setSelectedCoin((coinTicker.toUpperCase()));
    //     setCoinimgurl(coinimgurl);
        
    // }

    return (
        <MainContainer>
            <CryptoContainer onClick={() => setIsOpen(true)}>
                <CryptoImage src={coinimgurl}/>
                <CryptoName>{selectedCoin}</CryptoName>
            </CryptoContainer>
            {isOpen && (
                <Modal>
                    <ModalContent>
                        <CloseButton onClick={() => setIsOpen(false)}>X</CloseButton>


                        <ModalTitle>SELECT TOKEN</ModalTitle>
                        <ModalText>
                            {/* <Token tabIndex="0" onClick={() => HandleClick('bitcoin', 'btc')}>BTC <CryptoImageModal src = "https://cryptologos.cc/logos/bitcoin-btc-logo.png"/></Token> */}
                            <Token tabIndex="0" onClick={() => HandleClick('ethereum', 'eth', id)}>ETH <CryptoImageModal src = "https://cryptologos.cc/logos/ethereum-eth-logo.png"/></Token>
                            <Token tabIndex="0" onClick={() => HandleClick('bnb', 'bnb', id)}>BNB <CryptoImageModal src = "https://cryptologos.cc/logos/bnb-bnb-logo.png"/></Token>

                            {/* Add more tokens as needed */}
                        </ModalText>
                        <br/>
                    </ModalContent>
                </Modal>
            )}
        </MainContainer>
    );
}

const MainContainer = styled.div``;

const CryptoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    background-color: purple;
    color: white;
    border-radius: 10px; // Adjust as needed
    width: 100%; // Fill the width of the parent container
    height: 100%; // Fill the height of the parent container
    justify-content: center; // Center the content horizontally
    text-align: center; // Center the text
    padding: 3px; // Adjust as needed
    border: 1px solid white; // Adjust as needed

    &:hover {
        box-shadow: 0px 0.1em 0.2em rgb(45 35 66 / 40%), 0px 0.4em 0.7em -0.1em rgb(45 35 66 / 30%), inset 0px -0.1em 0px white;
        transform: translateY(-0.1em);
    }

`;

const CryptoImage = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 34px;
`;
const CryptoImageModal = styled.img`
    width: 25px;
    height: 25px;
    // margin-right: 20px;
    margin-left: 10px;
`;

const CryptoName = styled.div`
// color: black;
    margin-right: 5px;
    font-family: 'Basel', sans-serif;
    font-weight: 485;
    font-size: 17px;
    align-items: center;
`;

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ModalTitle = styled.div`
    font-size: 28px;
    color: white;
    font-weight: 800;
`
const ModalText= styled.div`
    font-size: 22px;
    color: white;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


const ModalContent = styled.div`
    background-color: rgba(17, 24, 39);
    width: 250px;
    height: 370px;
    
    padding: 20px;
    border-radius: 10px;
    position: relative;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid white;
    font-family: 'Basel', sans-serif;

`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: border-color 0.3s ease-in-out;
    padding: 2px;
    &:hover {
        border: 1px solid white;
        border-radius: 2px;
    }

    cursor: pointer;
    
`;

const Token = styled.div`
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  width: 50%;
  padding: 3px;
  align-items: center;
  border-radius: 10px;
  font-size: 25px;
  justify-content: center;
  border: 1px solid white;
  transition: box-shadow 0.1s ease-in-out; // Add this line

  &:hover {
    box-shadow: 0px 0px 7px 2px rgba(255, 255, 255, 0.4); // Add this line
    background-color: purple;

}
  &:active{
    background-color: purple;
  
  }
  &:focus {
    background-color: purple;
    outline: none; // Add this line to remove the default focus outline
  }
`;
// This will be a dropdown menu that will allow the user to select the cryptocurrency they want to receive.
// The dropdown menu will have a list of cryptocurrencies that the user can choose from.


// const MainContainer = styled.div`
// `
// const CryptoContainer = styled.div`
// display: flex;
// flex-direction: row;
// align-items: center;
// `

// const CryptoImage = styled.img`
// width: 30px;
// height: 30px;
// margin-right: 40px;

// `

// const CryptoName = styled.div`
// `





