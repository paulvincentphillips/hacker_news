import React from "react";
import { HeaderContainer } from "../containers/header";
import { NewsListContainer } from "../containers/news";
import { NEW_POSTS_PATH } from "../constants/api";

const NewPosts = () => {
  return (
    <>
      <HeaderContainer />
      <NewsListContainer path={NEW_POSTS_PATH}/>
    </>
  );
};

export default NewPosts;