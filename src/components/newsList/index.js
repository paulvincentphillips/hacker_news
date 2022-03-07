import React from "react";
import { GridContainer, RowContainer, Pagination, TitleContainer, MiscInfoContainer } from "./styles/newsList";

const NewsGrid = ({ ...restProps }) => {
  return <GridContainer id="gridContainer" {...restProps} />;
};

NewsGrid.NewsItemRow = ({ children, ...restProps }) => {
  return <RowContainer {...restProps}>{children}</RowContainer>;
};

NewsGrid.Title = ({ children, ...restProps }) => {
  return <TitleContainer className="newsItemTitle" {...restProps}>{children}</TitleContainer>;
};

NewsGrid.MiscInfo = ({ children, ...restProps }) => {
  return <MiscInfoContainer className="newsItemInfo" {...restProps}>{children}</MiscInfoContainer>;
};

NewsGrid.Pagination = ({ children, ...restProps }) => {
  return <Pagination {...restProps}>{children}</Pagination>;
};

export default NewsGrid;
