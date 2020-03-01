import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Func from './components/first.js';
//-----------2-29------------------------
// const time = '2月29日'  
// const div = (<div className='box'><h2>今天是:{time} JSX初体验</h2></div>)

//-----------3-01------------------------
// const isloaded =false
// if else 下的

// const loading = ()=> {
//   if(isloaded){
//     return <div>加载完毕！！！</div>
//   }else {
//     return <div>加载中。。。</div>
//   }
// }

//三元表达式

// const loadinga = isloaded? <div>加载完毕！！！</div> : <div>加载中。。。</div>

// //循环输出数组项
// const subjects = [
//                   {id: 1, name: '高数'},   
//                   {id: 2, name: '毛概'}, 
//                   {id: 3, name: '马原'}, 
//                   {id: 4, name: '近代史'}, 
//                   {id: 5, name: '思修'}
//                   ]
// const list = (   <ul className = "ullist"> {subjects.map(item => <li>{item.name}</li>)}   </ul> ) 

// const div = (<div className='box'>{loading()}</div>)
// const div = (<div className='box'>{loadinga}</div>)
// const div = (<div className='box'><h2>必修公共基础课</h2>{list}</div>)

class Clsc extends Component {

    render() {
       return (<h2>去往西天取真经</h2>) 
    }
}


const div = (<div className='box'><Func/><Clsc/></div>)

ReactDOM.render(div, document.getElementById('root'));
