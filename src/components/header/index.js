import React from "react";
import { Container, Title, ButtonContainer, ButtonLink } from "./styles/header";

const Header = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
}

Header.Title = ({ children, ...restProps }) => {
    return (
        <Title id="pageTitle"{...restProps}>{children}</Title>
    );
}

Header.ButtonContainer = ({ ...restProps}) => {
    return <ButtonContainer {...restProps}/>
};

Header.ButtonLink = ({ id, children, ...restProps }) => {
  return <ButtonLink id={id} {...restProps}>{children}</ButtonLink>;
};

export default Header;