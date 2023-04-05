import React, { useState } from "react";
import { CompRowCells } from "./comp-row-cells";


export function CopmRow(props) {
    const [bought, setBought] = useState(false);


    const handleBought = () => {
        setBought(!bought);
        console.log(props.comp.id);
    };
    
      
    return(
        <>
            <tr 
            key={props.comp.id}
            className={bought ? 'element bought' : "element"}
            >
                <CompRowCells delete={props.delete} comp={props.comp} buy={handleBought}/>
            </tr>
        </>
    )

}