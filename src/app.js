import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { GlobalStyles } from "./global-styles";
import { TopPosts, NewPosts} from "./pages";
import "normalize.css";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route exact path={ROUTES.TOP_POSTS} element={<TopPosts />} />
          <Route exact path={ROUTES.NEW_POSTS} element={<NewPosts />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
