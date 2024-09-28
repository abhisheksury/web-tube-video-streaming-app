
import React from 'react'
import styled from 'styled-components'
import { CloseRounded, CloudUpload, DarkModeRounded, FavoriteRounded, HomeRounded, LightModeRounded, LogoutRounded, SearchRounded } from '@mui/icons-material';
import LogoImage from "../images/dark-Tv.png";
import { Link } from 'react-router-dom';
import '../components/Sidebar'

const MenuContainer = styled.div`
flex : 0.5;
flex-direction : column;
height: 100vh;
display: flex;
background-color:${({ theme }) => theme.bg};
color : ${({ theme }) => theme.text_primary};

@media (max-width: 1100px;){
  position: fixed;
  z-index : 1000;
  width : 100%;
  max-width : 250px;
  left : ${({menuOpen})=>(menuOpen? "0" : "-100%")}
}
`;
const Logo = styled.div`
width : 100%;
color : ${({ theme }) => theme.primary};
display : flex;
align-items : center;
justify-content : center;
gap : 6px;
font-weight : bold;
font-size : 20px;
margin : 16px 0px;
`;

const Elements = styled.div`
padding : 4px 16px;
display : flex;
gap : 12px;
flex-direction : row;
justify-content : flex-start;
align-items : center;
cursor : pointer;
color : ${({ theme }) => theme.text_secondary};
&:hover {
  background-color : ${({ theme }) => theme.primary};
};
`;
const NavText = styled.div``;
const Close = styled.div``;
const Image = styled.img`
width: 25px;
`;

const HR = styled.div`
width: 100%;
height: 1px;
background-color: ${({ theme }) => theme.text_secondary};
margin: 10px 0px
`;

const Flex = styled.div`
display : flex;
flex-direction : row;
align-items : center;
justify-content : center;
`;


const Sidebar = ({
  menuOpen,
  setMenuOpen,
  setDarkmode,
  darkMode
}) => {

  
const menuItems = [

  {
    link: "/",
    name: "Dashboard",
    icon: <HomeRounded/>
  },

  {
    link: "/search",
    name: "Search",
    icon: <SearchRounded/>
  },

  {
    link: "/fav",
    name: "Favourites",
    icon: <FavoriteRounded/>
  },

]

  const button =[

    
  {
    fun: () => console.log("uplaod"),
    name: "Upload",
    icon: <CloudUpload/>
  },

  {
    fun: () => setDarkmode(!darkMode),
    name: darkMode ? "Light Mode" : "Dark Mode",
    icon: darkMode ? <LightModeRounded/> : <DarkModeRounded/>,
  },

  {
    fun: () => console.log("Log out/ Login Function"),
    name: "Log out",
    icon: <LogoutRounded/>
  },

]



  return (
    <div className={`${menuOpen? "active": "notactive"}`}>
       <MenuContainer>

        <Flex>
        <Logo>
          <Image src = {LogoImage}/>
          Video TV
        </Logo>
         <Close>
            <CloseRounded/>
         </Close>
        </Flex>
        {menuItems.map((item, index) => (
        <Link to={item.link} key={index} style={{textDecoration: "none"}}>
        <Elements>
          {item.icon} {/* Dynamic icon from item object */}
         <NavText>{item.name}</NavText> {/* Dynamic name from item object */}
        </Elements>
        </Link>
        ))}

        <HR />

        {button.map((item) => (
        
        <Elements onClick={item.fun}>
         {item.icon} {/* Dynamic icon from item object */}
        <NavText>{item.name}</NavText> {/* Dynamic name from item object */}
        </Elements>
          ))}



       </MenuContainer>
    </div>
  )
}

export default Sidebar