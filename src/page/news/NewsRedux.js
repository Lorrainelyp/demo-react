//reducer
var newsinit={
  list:[
    {id:1,title:"a",content:"aaaaaaaaaaaaaaaa"},
    {id:2,title:"b",content:"bbbbbbbbbbb"},
    {id:3,title:"c",content:"cccccccccccccc"},
    {id:4,title:"d",content:"ddddddddddddd"},
    {id:5,title:"e",content:"eeeeeeeeeeee"}
  ]
};

function NewsRedux(state = newsinit, action) {
  switch (action.type) {
    case "SORT_REVERSE":
      //倒叙显示
      var arr=state.list;
      var arr2=[];
      for(var i=arr.length-1;i>=0;i--){
        arr2.push(arr[i])
      }
      return Object.assign({},state,{list:arr2})
    default:
      return state
  }
}

export default NewsRedux