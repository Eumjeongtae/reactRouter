import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Video(){
  const [text,setText] = useState('')
  const navigate = useNavigate();

  const handleChange= (event)=>{
    let {value} = event.target
    setText(value)
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    setText('');
    navigate(`/video/${text}`);
    //text 파라미터를 /video/{text} 전손
  }
  return(
    <>
      <div>Video page~!~!~!</div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="videoId" placeholder="video Id : " value={text} onChange={handleChange} />
      </form>
    </>
  );
}