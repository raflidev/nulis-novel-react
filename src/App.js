import React, { useEffect } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  useLocation,
  withRouter,
} from 'react-router-dom'

import "./App.css";

import Home from "./views/Home";
import Daftar from "./views/Daftar";
import Masuk from "./views/Masuk";
import Comingsoon from "./views/Comingsoon";
import NovelPage from "./views/NovelPage";
import ChapterPage from "./views/ChapterPage";
import BlogPage from "./views/BlogPage";

function App() {
  function _ScrollToTop(props) {
    const { pathname } = useLocation()
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])
    return props.children
  }
  const ScrollToTop = withRouter(_ScrollToTop)
  return (
    <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/daftar" exact component={Daftar} />
        <Route path="/masuk" exact component={Masuk} />
        <Route path="/novel" exact component={NovelPage} />
        <Route path="/novel/chapter/1" exact component={ChapterPage} />
        <Route path="/blog/1" exact component={BlogPage} />
        <Route exact component={Comingsoon} />
      </Switch>

      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
