import logo from './logo.svg';
import './App.css';
import Header from "./Mycomponents/Header";
import {Todo} from "./Mycomponents/Todo";
import {Todos} from "./Mycomponents/Todos";
import {Footer} from "./Mycomponents/Footer";
import {About} from "./Mycomponents/About";
import {AddTodos} from "./Mycomponents/AddTodos";
import React, {useState}  from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const onDelete=(todo)=>{
    console.log("I am ondelete",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo; 
    }));
  }
  let myvariable=345;
  const addTodos=(title,desc)=>{
    console.log("adding this todo",title,desc)
    let sno=todos[todos.length-1].sno+1;
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }
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
    <Router>
    <Header title="mytodoslist"/>
    <Routes>
          <Route path="/" element={
              <>
                <Todos todos={todos} onDelete={onDelete} />
                <AddTodos addTodos={addTodos} />
              </>
            }/>
          
          <Route path="/about" element={<About/>}/>

        </Routes>
    
    <Footer/>
    </Router>
    </>
  );
}

export default App;
