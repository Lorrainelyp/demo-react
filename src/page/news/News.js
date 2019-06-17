import React, { Component } from 'react';

class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id:1,title:"a",con:"caaaaaaaaaaaaaaaa"},
        {id:2,title:"b",con:"bbbbbbbbbbb"},
        {id:3,title:"c",con:"cccccccccccccc"},
        {id:4,title:"d",con:"ddddddddddddd"},
        {id:5,title:"e",con:"eeeeeeeeeeee"}
      ]
    };
  }

  render() {
    return (
      <div>
        <h3>新闻页面</h3>
        <ul>
          {
            this.state.list.map(function(item){
              return <li key={item.id}>
                <a>{item.title}</a>
                <span>{item.con}</span>
              </li>
            })
          }
        </ul>
      </div>
    );
  }

  componentDidMount() {
    console.log("News渲染完毕")
  }

}

export default News