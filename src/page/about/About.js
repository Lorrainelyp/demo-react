import React, { Component } from 'react';

class About extends Component {

  render() {
    return (
      <div>
        <h3>关于我们</h3>

      </div>
    );
  }

  componentDidMount() {
    console.log("About渲染完毕")
  }

}

export default About