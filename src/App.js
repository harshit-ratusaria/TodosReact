import logo from './logo.svg';
import './App.css';
import Header from "./Mycomponents/Header";
import {Todo} from "./Mycomponents/Todo";
import {Todos} from "./Mycomponents/Todos";
import {Footer} from "./Mycomponents/Footer";
import React, {useState}  from 'react';
function App() {
  const onDelete=(todo)=>{
    console.log("I am ondelete",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo; 
    }))
  }
  let myvariable=345;
  const[todos,setTodos]=useState([
    {
      sno:1,
      title:"go to market",
      desc:"you need to got to done the job1"
    },
    {
      sno:2,
      title:"go to mall",
      desc:"you need to got to done the job2"
    },
    {
      sno:3,
      title:"go to ghat",
      desc:"you need to got to done the job3"
    }
  ])
  return (
    <>
    <Header title="mytodoslist"/>
    <Todos todos={todos} onDelete={onDelete}/>
    
    <Footer/>
    </>
  );
}

export default App;
