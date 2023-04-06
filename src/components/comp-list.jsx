import "../App.css";
import { CompHeader } from "./comp-headers";
import { CopmRow } from "./comp-columns";
import { BuyPortalElement } from "./buy-portal/buy-portal.jsx"
import React, { useState, useRef, useEffect } from "react";


const mockComputers = [
    {id: 1, cpu: 'AMD', location: 'LONDON', RAM: 32, drivers: {type: 'HDD', size: 512}},
    {id: 2, cpu: 'INTEL', location: 'LONDON', RAM: 32, drivers: {type: 'HDD', size: 512}},
    {id: 3, cpu: 'INTEL', location: 'NEW YORK', RAM: 64, drivers: {type: 'SDD', size: 512}},
    {id: 4, cpu: 'AMD', location: 'NEW YORK', RAM: 32, drivers: {type: 'SDD', size: 512}},
    {id: 5, cpu: 'AMD', location: 'NEW YORK', RAM: 32, drivers: {type: 'SDD', size: 512}},
    {id: 6, cpu: 'AMD', location: 'NEW YORK', RAM: 64, drivers: {type: 'SDD', size: 1024}},
  ];

  const headers = ["id", "cpu", "location", "RAM", "drivers type", "drivers size", "optional"];
  const searchHeaders = ["id", "cpu", "location", "RAM"];

  export function CompList() {
    const [comp, setComp] = useState(mockComputers);
    const [filteredComp, setFilteredComp] = useState(comp);
    const [remove, setRemove] = useState('');
    const [count, setCount] = useState(0)
  
    const handleSort = (column, direction) => {
      const newComp = [...filteredComp].sort(
        (a, b) => {
          if(direction === "DESC") {
            if (typeof a === "number") return a[column] - b[column];
            return a[column] > b[column] ? 1 : -1;
          } else if (direction === "ASC"){
            if (typeof a === "number") return b[column] - a[column];
            return a[column] > b[column] ? -1 : 1;
          }
        
      }
      );
      setFilteredComp(newComp);
    };
    

    const buttonDelete = (answer) => {
      setRemove(answer)
      document.getElementById('portalBuy').style.display = "none";
    }

    const handleDelete = (id) => {
      setCount(id);
      document.getElementById('portalBuy').style.display = "block";
      setRemove(false)
    };

    useEffect(() => {
      if(remove) {
        const newArr = filteredComp.filter(el => +el.id !== +count);
        setFilteredComp(newArr);
        console.log(remove);
      } else if (!remove) {
        console.log(remove);
      }
    }, [remove],);



    const inputFilter = useRef(null)

    const handleFilter = (e) => {

      const searchString = inputFilter.current.value;
      const newComp = comp.filter((el) => {
        for (const column of searchHeaders) {
          const searchEl = "" + el[column];
          if(searchEl.toLowerCase().includes(searchString.toLowerCase())) return true;
        }

        return false;
      });

      setFilteredComp(newComp);
    }
  
    return (

      <>
      <BuyPortalElement delete={buttonDelete}/>
      <span className="sort">
        <label className="label-sort" htmlFor="sort">Sort</label>
        <input className="input-sort" ref={inputFilter} type="text"  id="sort" onChange={handleFilter}/>
      </span>
     
      <table>
          <thead>
            <tr>

            {headers.map((el) => (
                <CompHeader key={el} sort={handleSort} header={el}/>
            ))}
              
            </tr>
            
          </thead>
          
        <tbody>
          {filteredComp.map((el) => {
            return <CopmRow delete={handleDelete} comp={el} key={comp.indexOf(el)}/>
          })}
        </tbody>
      </table>
      </>
        
    );
  }