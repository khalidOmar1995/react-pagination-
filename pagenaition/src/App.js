import React from "react";
import paginationData from "./paginationData";
import PageList from "./pageList";
import { useState } from "react";


function App() {
  const [getData , setGetFata] = useState(0)
  const [offsetData , setoffsetData] = useState(10)
  const [activePage , setActivePage] = useState(1)
  
  let myData = paginationData.map((data,i) => {
    if(i >= getData && i < offsetData){
      return (
        <>
          <h1 key={i}>{data.title}</h1>
          <p>{data.paragraph}</p>
        </>
      )
    }
  })
  let handelPagination = (num)=>{
    let pageNum = num * 10
    setGetFata(pageNum)
    setoffsetData(pageNum + 10)
    setActivePage(num + 1)
  }
  return (
    <div className="App">
      {myData}
      <PageList activePage={activePage} handelPagination={handelPagination} myData={myData}/>
    </div>
  );
}

export default App;
