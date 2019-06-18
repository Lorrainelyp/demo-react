//reducer
var aboutContent={
  list:[]
};

function AboutRedux(state = aboutContent, action) {
  switch (action.type) {
    case "FETCH_ABOUTCONTENT":
      //获取后台数据
      var listArr = action.list;
      return Object.assign({},state,{list:listArr});
    default:
      return state
  }
}

export default AboutRedux