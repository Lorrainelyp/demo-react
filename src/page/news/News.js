import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

function mapStateToProps(state) {
  return {
    list:state.NewsRedux.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sortreverse:function () {
      dispatch({type:'SORT_REVERSE'})
    },
    fetchNewsList:function () {
      // 模拟ajax
      setTimeout(()=>{
        let list = [
          {id:1,title:"a",content:"aaaaaaaaaaaaaaaa"},
          {id:2,title:"b",content:"bbbbbbbbbbb"},
          {id:3,title:"c",content:"cccccccccccccc"},
          {id:4,title:"d",content:"ddddddddddddd"},
          {id:5,title:"e",content:"eeeeeeeeeeee"}
        ];
        dispatch({
          type: 'FETCH_NEWSLIST',
          list:list
        })
      },0)
    }
  };
}

class News extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>新闻页面</h3>
        <ul>
          {
            this.props.list.map((item,i)=>
            <li key={item.id}>
              <a>{item.title}</a>
              <span>{item.content}</span>
            </li>
            )
          }
        </ul>
        <button onClick={this.sortreverse.bind(this)}>倒序显示</button>
        <Link to="/About">
          <div>点击跳转到关于我们</div>
        </Link>
      </div>
    );
  }

  sortreverse(){
    this.props.sortreverse();
  }
  fetchNewsList(){
    this.props.fetchNewsList();
  }

  componentWillMount() {
    this.fetchNewsList();
  }

  componentDidMount() {
    console.log("News渲染完毕")
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(News);
