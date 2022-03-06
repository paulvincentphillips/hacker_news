import styled from "styled-components/macro";
import ReactPaginate from "react-paginate";

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  margin: auto;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 85px;
  align-items: center;
  justify-content: center;
  width: 50%;
  border-top: 2px solid white;
  border-right: 2px solid white;
  border-left: 2px solid white;
  :last-of-type {
    border-bottom: 2px solid white;
    margin-bottom: 10px;
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: bold;
  text-align: center; 
  width: 75%;
  
  :hover{
    cursor: pointer;
    color: #ff6600;
  }
`;

export const MiscInfoContainer = styled.div`
  color: #cccccc;
  font-size: 14px;
`;

export const Pagination = styled(ReactPaginate)`
  list-style: none;
  display: flex;
  justify-conent: center;
  margin-bottom: 30px;
  margin-top: 20px;
  padding: 0;
  a {
    padding: 10px;
    margin: 8px;
    border-radius: 4px;
    border: 1px solid hsl(0, 0%, 80%);
    cursor: pointer;
  }
  a:hover {
    background-color: #ff6600;
  }
  .paginationActive a {
    background-color: #ff6600;
  }
  .paginationDisabled a:hover {
    background-color: transparent;
    cursor: default;
  }
`;
