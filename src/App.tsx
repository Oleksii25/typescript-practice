import { Navigation } from "./components";
import { HomePage, BlogPage, AboutPage } from "./pages";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/blog">
          <BlogPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
