import React from 'react'
import  {useState}  from 'react';
export const AddTodos = (props) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description cannot be blank")
        }
        props.addTodos(title,desc);
    }
  return (
    <div className="container"><form onSubmit={submit}>
        <h3>Add a Todo</h3>
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} 
      class="form-control" id="title" aria-describedby="emailHelp"/>
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="desc" class="form-label">Description</label>
      <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} 
      class="form-control" id="desc"/>
    </div>
    
    <button type="submit" class="btn btn-sm btn-success">Add Todo</button>
  </form></div>
  )
}
