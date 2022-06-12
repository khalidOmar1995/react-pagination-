import React from "react";

function pageList({myData,handelPagination,activePage}){
    let myArr = Math.ceil(myData.length / 10)
    myArr= Array.from(Array(myArr).keys())
    let List = myArr.map((i) => {
        return (
            <>
                <li className={activePage == i + 1 ? 'active' : ''} onClick={()=>handelPagination(i)} key={i}>{i + 1}</li>
            </>
        )
    })
    return (
        <div className="pageList">
            <ul>
                {List}
            </ul>
        </div>
    );
}

export default pageList;
