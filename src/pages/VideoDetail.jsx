import React from "react";
import { useParams } from "react-router";

export default function VideoDetail(){
  const {videoId} = useParams();
  console.log(videoId);
  return(
    <>
      <div>VideoDetail</div>
      <div>video Id : {videoId}</div>
    </>
  );
}