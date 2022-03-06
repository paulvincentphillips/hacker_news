import React from "react";
import { HeaderContainer } from "../containers/header";
import { NewsListContainer } from "../containers/news";
import { TOP_POSTS_PATH } from "../constants/api";

const TopPosts = () => {
  return (
    <>
      <HeaderContainer />
      <NewsListContainer path={TOP_POSTS_PATH}/>
    </>
  );
};

export default TopPosts;