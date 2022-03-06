import React, { useState, useEffect } from "react";
import NewsGrid from "../components/newsList";
import { BASE_URL } from "../constants/api";

export const NewsListContainer = ({ path }) => {
  const [postIds, setPostsIds] = useState([]);
  const [newsPosts, setNewsPosts] = useState([]);
  const [newsCount, setNewsCount] = useState(0);

  const newsItemsPerPage = 20;
  let pageCount = Math.ceil(newsCount / newsItemsPerPage);

  //change page number, move slice parameters for id slice,
  //get new set of stories
  const changePage = ({ selected }) => {
    const beginSlice = selected * newsItemsPerPage;
    const endSlice = beginSlice + newsItemsPerPage;
    getStories(postIds, beginSlice, endSlice);
    window.scrollTo(0, 0);
  };

  //fetch ids for top posts/ new posts
  const getIds = async (path, beginSlice, endSlice) => {
    try {
      const response = await fetch(`${BASE_URL}${path}`);
      const ids = await response.json();

      setPostsIds(ids);
      setNewsCount(ids.length);

      //after fetching ids, get first page of stories
      getStories(ids, beginSlice, endSlice);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getStory = async (storyId) => {
    const response = await fetch(`${BASE_URL}/item/${storyId}.json`);
    const story = await response.json();
    return story;
  };

  const getStories = async (ids, beginSlice, endSlice) => {
    //take first 20 ids and make requests to get stories
    try {
      const stories = await Promise.all(
        ids.slice(beginSlice, endSlice).map((storyId) => getStory(storyId))
      );

      //if posts not in state, push to array and set new state
      //this will save posts and reduce number of requests when
      //navigating to previously visited pages
      setNewsPosts(stories);
    } catch (error) {
      console.error(error.message);
    }
  };

  //when page mounts, fetch ids for stories
  useEffect(() => {
    getIds(path, 0, newsItemsPerPage);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const convertUnixTimeStamp = (timestamp) => {
    // Format unix timestamp into something more human readable
    
    // multiplied by 1000 so that the argument is in milliseconds, not seconds
    const date = new Date(timestamp * 1000);
    const split = date.toString().split(" ");
    const newDate = split.slice(0, 5)
    return newDate.join(" ");
  };

  return (
    <>
      <NewsGrid>
        {newsPosts.map((newsItem) => {
          return (
            <NewsGrid.NewsItemRow key={newsItem.id}>
              <NewsGrid.Title>{newsItem.title}</NewsGrid.Title>
              <NewsGrid.MiscInfo>
                {`${newsItem.score} points | posted by ${
                  newsItem.by
                } on ${convertUnixTimeStamp(newsItem.time)} | comments: ${
                  newsItem.descendants
                }`}
              </NewsGrid.MiscInfo>
            </NewsGrid.NewsItemRow>
          );
        })}
        <NewsGrid.Pagination
          pageCount={pageCount}
          onPageChange={changePage}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </NewsGrid>
    </>
  );
};
