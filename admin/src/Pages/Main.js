import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import AdminIndex from "./AdminIndex";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";
function Main() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/AdminIndex/" exact component={AdminIndex} />
      <Route path="/AdminIndex/add/" exact component={AddArticle} />
      <Route path="/AdminIndex/list/" exact component={ArticleList} />
      <Route path="/AdminIndex/add/:id" exact component={AddArticle} />
    </Router>
  );
}
export default Main;
