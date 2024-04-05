import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
        /* <CryptoContainer>
            <CryptoImage src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"/>
            <CryptoName>BTC</CryptoName>
        </CryptoContainer> */

export default function CryptoSelect() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCoin, setSelectedCoin] = useState("Select a coin");
    const [coinimgurl, setCoinimgurl] = useState("/MyFavicon.png");
    const HandleClick = (coinName, coinTicker) => {
        let coinimgurl = "https://cryptologos.cc/logos/" + coinName + "-" + coinTicker + "-logo.png";
        setSelectedCoin((coinTicker.toUpperCase()));
        setCoinimgurl(coinimgurl);
        
    }

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
                            <Token onClick={() => HandleClick('bitcoin', 'btc')}>Bitcoin <CryptoImageModal src = "https://cryptologos.cc/logos/bitcoin-btc-logo.png"/></Token>
                            <Token onClick={() => HandleClick('ethereum', 'eth')}>Ethereum <CryptoImageModal src = "https://cryptologos.cc/logos/ethereum-eth-logo.png"/></Token>
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
    font-size: 32px;
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
    background-color: rgb(40, 40, 40);  
    width: 250px;
    height: 370px;
    padding: 20px;
    border-radius: 10px;
    position: relative;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
`;

const Token = styled.div`
    cursor: pointer;
    margin-bottom: 20px;
    // margin: 10px 0;
    display: flex;
    width: 50%;
    padding: 3px;
    align-items: center;
    border-radius: 10px;
    font-size: 25px;
    justify-content: center;
    //margin: 10px;
    border: 1px solid white;
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





