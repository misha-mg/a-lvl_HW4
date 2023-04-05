// import "../App.css";
import React from "react";


export function CompRowCells(props) {
    return(
        <>
            <td>{props.comp.id}</td>
            <td>{props.comp.cpu}</td>
            <td>{props.comp.location}</td>
            <td>{props.comp.RAM}</td>
            <td>{props.comp.drivers.type}</td>
            <td>{props.comp.drivers.size}</td>
            <td>
                <button className="button" onClick={() => props.buy()}>BUY</button>
                <button className="button" onClick={() => props.delete(props.comp.id)}>DELETE</button>

            </td>
        </>
    )
}