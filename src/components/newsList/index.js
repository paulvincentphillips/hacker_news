import React from "react";
import { GridContainer, RowContainer, Pagination, TitleContainer, MiscInfoContainer } from "./styles/newsList";

const NewsGrid = ({ ...restProps }) => {
  return <GridContainer {...restProps} />;
};

NewsGrid.NewsItemRow = ({ children, ...restProps }) => {
  return <RowContainer {...restProps}>{children}</RowContainer>;
};

NewsGrid.Title = ({ children, ...restProps }) => {
  return <TitleContainer {...restProps}>{children}</TitleContainer>;
};

NewsGrid.MiscInfo = ({ children, ...restProps }) => {
  return <MiscInfoContainer {...restProps}>{children}</MiscInfoContainer>;
};

NewsGrid.Pagination = ({ children, ...restProps }) => {
  return <Pagination {...restProps}>{children}</Pagination>;
};

export default NewsGrid;
