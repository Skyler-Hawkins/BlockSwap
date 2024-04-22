import NavBar from "@/components/NavBar";
import styled from "styled-components";
export default function about() {
    // Add your code here
    return (
      <>
      <NavBar/>
      <Background/>
      <MainContainer>
      <TitleBanner>Frequently Asked Questions</TitleBanner>

      <QAContainer>
        <QuestionBanner>
          What is BlockSwap?
        </QuestionBanner>
        <DescriptionText>
          BlockSwap is a cryptocurrency exchange service that provides a secure method of transfer between coins.
        </DescriptionText>
        <ThinLine/>
      </QAContainer>

      <QAContainer>
        <QuestionBanner>
          How do I use it?
        </QuestionBanner>
        <DescriptionText>
          To create a new liquidity pool, provide liquidity, swap tokens, or vote on governance proposals, 
          head over to the Uniswap Interface and connect a Web3 wallet. Remember, each transaction on Ethereum costs Ether (ETH).
        </DescriptionText>
        <ThinLine/>
      </QAContainer>

      <QAContainer>
        <QuestionBanner>
          How does the protocol work?
        </QuestionBanner>
        <DescriptionText>
          *Copy of UNISWAPs description* 
          <br/> <br/>
          Uniswap is an automated market maker. In practical terms, it is a collection of smart contracts that define a standard way to create liquidity pools, provide liquidity, and swap assets.
          Each liquidity pool contains two assets. 
          <br/> <br/>
          The pools keep track of aggregate liquidity reserves and the pre-defined pricing strategies set by liquidity providers. Reserves and prices are updated automatically every time someone trades.  
          <br/> <br/>
          There is no central order book, no third-party custody, and no private order matching engine.
          Because reserves are automatically rebalanced after each trade, a Uniswap pool can always be used to buy or sell a token — unlike traditional exchanges, traders do not need to match with individual counterparties to complete a trade
        </DescriptionText>
        <ThinLine/>
      </QAContainer>
      </MainContainer>
      </>
    );
}


//Format Should be:
/*
TITLE OF QUESTION -----
 smaller text explaining answer
 -----tiny thin line to seperate-----
REPEAT


*/
// Left-aligned container with a title and a description

const QAContainer = styled.div`
display: flex;
flex-direction: column;
align-items: left;
// Space out content using margin
margin-left: 30px;
margin-right: 30px;

`

const TitleBanner = styled.div`
  font-size: 32px;
  font-weight: 800;
  margin-left: 30px;
  

  margin-bottom: 50px;
`;

const QuestionBanner = styled.div`
  font-size: 24px;
  margin-bottom: 25px;
`;

const DescriptionText = styled.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 25px;
`;

const ThinLine = styled.div`
  width: 100%; // Full width of the screen
  height: .5px; // Thin line
  background-color:  rgba(255, 255, 255, 0.6); // grey color
`;


const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  // background-image: url('cryptobackground.png');
  background-size: 100% 100%;

  // background-color: rgba(17, 24, 39);
  background-position: center;
  filter: blur(5px);
  z-index: -1;
  background-clip: padding-box;
  `;

const MainContainer = styled.div`
  width: 100%;
  height: 96vh;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  align-items: left;
  justify-content: space-between;
  color: white;
  background-color: rgb(40, 40, 40);  
  font-family: 'Inter', sans-serif;
  font-weight: 100;
  position: relative;

`;