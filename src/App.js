import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ArticleList from './pages/ArticleList';
import Article from './pages/Article';
import Navbar from './pages/Navbar';
import NotFound from './pages/NotFound';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/articles-list" component={ArticleList} />
            <Route path="/article/:name" component={Article} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
