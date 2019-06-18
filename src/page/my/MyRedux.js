//reducer
var myContent={
  list:[]
};

function MyRedux(state = myContent, action) {
  switch (action.type) {
    case "FETCH_MYCONTENT":
      //获取后台数据
      var listArr = action.list;
      return Object.assign({},state,{list:listArr});
    default:
      return state
  }
}

export default MyRedux