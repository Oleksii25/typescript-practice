import { Navigation } from "./components";
import { TodosPage, BlogPage, AboutPage } from "./pages";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/todos/:todoId?">
          <TodosPage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/blog">
          <BlogPage />
        </Route>
        <Redirect to="/todos" />
      </Switch>
    </div>
  );
}

export default App;
