import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';

import Login from './page/login/Login.js';
import Home from './page/home/Home.js';
import About from './page/about/About.js';
import News from './page/news/News.js';
import My from './page/my/My.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <Link to="/">登录</Link>
          </li>
          <li>
            <Link to="/Home">主页</Link>
          </li>
          <li>
            <Link to="/About">关于我们</Link>
          </li>
          <li>
            <Link to="/News">新闻页面</Link>
          </li>
          <li>
            <Link to="/My">我的</Link>
          </li>
        </ul>
        <div>
          <Route exact path="/" component={Login}/>
          <Route exact path="/Home" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/News" component={News}/>
          <Route path="/My" component={My}/>
        </div>
      </div>
    );
  }
}

export default App;
