import { useState } from "react";
import  styled  from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme} from "./utils/Theme";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";

const Container = styled.div`
 display : flex;
 background: ${({ theme }) => theme.bg};
 width : 100%;
 height : 100vh;

`;

const Frame = styled.div`
display: flex;
flex-direction: column;
flex: 3;
`;

function App() {

  //hooks
  const [darkMode, setDarkmode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);

  return (

    <ThemeProvider theme={ darkMode ? darkTheme : lightTheme } > 
    <BrowserRouter>
     <Container>
      <Sidebar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} setDarkmode = {setDarkmode} darkMode = {darkMode} />
       
       <Frame>hello video streams</Frame>
        
     </Container>
    </BrowserRouter>
      
    </ThemeProvider>
 
  );
}

export default App;
