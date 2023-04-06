import "../App.css";
import React, { useState } from "react";

export function CompHeader(props) {

  const [direction, setDirection] = useState('ASC')

  const handleClickFactory = (column) => {
    return () => {

      let newDirection = direction === "DESC" ? "ASC" : "DESC";
      setDirection(newDirection)

      props.sort(column, direction);
      console.log(column);
    };
  };

    return(

         <th key={props.header} onClick={handleClickFactory(props.header)}>
          {props.header}
        </th>

       
    );
}