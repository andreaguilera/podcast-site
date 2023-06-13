import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../images/banner.png'

const HeaderContainer = styled.header`
  background-color: #f3f3f3;
  background-image: url(${backgroundImg});
  background-size: auto;
  color: #fff;
  height: 250px;
  padding: 16px;
  text-align: center;
`;

const Menu = styled.nav`
  background-color: black;
  padding: 8px;
  display: flex;
  gap: 150px;
  align-items: center;
  justify-content: center;
`;

const MenuItem = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: none;
  }
`;


const Header: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <header>
        </header>
      </HeaderContainer>
      <Menu>
        <MenuItem href="/">Início</MenuItem>
        <MenuItem href="/contato">Contato</MenuItem>
        <MenuItem href="/apoio">Apoie o Projeto</MenuItem>
      </Menu>
    </>
  );
};

export default Header;
