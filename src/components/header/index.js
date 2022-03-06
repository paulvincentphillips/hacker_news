import React from "react";
import { Container, Title, ButtonContainer, ButtonLink } from "./styles/header";

const Header = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
}

Header.Title = ({ children, ...restProps }) => {
    return (
        <Title {...restProps}>{children}</Title>
    );
}

Header.ButtonContainer = ({ ...restProps}) => {
    return <ButtonContainer {...restProps}/>
};

Header.ButtonLink = ({ children, ...restProps }) => {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

export default Header;