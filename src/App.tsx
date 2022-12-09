import "./App.css";
import styled from "styled-components";

const Main = styled.div`
  background-color: #202020;
  color: #fff;
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

const Subtext = styled.p`
  font-size: 0.85rem;
  font-weight: 300;
  max-width: 50%;
  color: #aaa;
  margin-top: 1rem;
`;

function App() {
  return (
    <>
      <Main>
        <FlexCol>
          <Heading>Welcome to my SWC Playground</Heading>
          <Paragraph>
            Here, i am experimenting using Reacts new SWC Compiler.
          </Paragraph>
          <Subtext>
            by the way, i am working on a new portfolio using this compiler.
            Just hang tight, it should be realeased by 2023!
          </Subtext>
        </FlexCol>
      </Main>
    </>
  );
}

export default App;
