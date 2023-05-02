import React from "react";
import Reactfrom, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

function QuestionList({mydata, delQuestion, updatedQuestion}) {

  const dispData = mydata.map((val)=>{
    return <QuestionItem question ={val} delQuestion={delQuestion} updatedQuestion={updatedQuestion}/>
  })
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
      <ul>
        {dispData}
      </ul>
    </section>
  );
}}
export default QuestionList;