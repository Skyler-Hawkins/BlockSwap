import NavBar from "@/components/NavBar";
import styled from "styled-components";
export default function about() {
    // Add your code here
    return (
      <>
      <NavBar/>
      <MainContainer>
        WHY US

      </MainContainer>
      </>
    );
}


const MainContainer = styled.div`
  width: 100%;
  height: 92vh;
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

`;