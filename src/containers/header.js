import React from "react";
import Header from "../components/header/index";

export const HeaderContainer = () => {
  return (
    <Header>
      <Header.Title alt="hacker_news">
        Hacker News
      </Header.Title>
      <Header.ButtonContainer>
        <>
          <Header.ButtonLink id={"topPostsBtn"} to={"/"}>Top Posts</Header.ButtonLink>
          <Header.ButtonLink id={"newPostsBtn"} to={"/newposts"}>New Posts</Header.ButtonLink>
        </>
      </Header.ButtonContainer>
    </Header>
  );
};
