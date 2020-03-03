import React,{Component} from 'react';

class Cc extends Component{
   onmove (){
     alert('让你移你就移？？！！')
   }
    onenter (e,a,b){
     alert('让你移你就移？？！！'+a+b)
     console.log(e)
   }

 render(){
  return(<div><h1 className='title2'>坦克和飞机</h1>
  <button onClick={()=>{
    alert('您想成为英雄还是狗熊')
  }}>英雄和狗熊</button>
  <p onMouseMove={this.onmove}>你移上来个试试！！</p>
  <p onMouseEnter = {(e)=>{this.onenter(e,777,888)}}>事件对象---测试用例</p>
  </div>) 
  }
}
export default Cc;