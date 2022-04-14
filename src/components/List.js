import React from "react";

const List = (props) => {
    let arrayList = props.dataType.map((element, index) => {
        return (
        <div key={index}>
            <h4>{`Description: ${element.description}`}</h4>
            <h5>{`Amount: ${element.amount}`}</h5>
            <h5>{`Date: ${element.date}`}</h5>
            <p>---------------------------------------</p>
        </div>
        );
    });
    return arrayList;
};

export default List;