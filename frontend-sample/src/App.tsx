import React, {useState} from 'react';
import './App.css';
import CardBox from "./components/CardBox";
import CardFilter from "./components/CardFilter";


function App() {

  const [filter, setFilter] = useState(['Rick','Morty']);
  const [openFilter, setOpenFilter] = useState(false);
  const [page, setPage] = useState(1);

  return (
    <>
      <div className="filter" onClick={()=>{
          setOpenFilter(!openFilter)
      }}>
        <div className="filterText">{
            (filter[0] === "") ? "Click To Filter" :  filter.map((f: string, index)=> {
               return index === filter.length - 1 ? f : f + " and ";
           })
        }</div>
        <img src={"/images/filter.svg"} className="filterIcon" alt=""/>
      </div>
      <CardBox filter={filter} page={page} />
        {
            openFilter && <CardFilter filter={filter} onClose={(filter: string[])=>{
                setOpenFilter(false);
                if(filter.length === 0)
                    filter = [''];
                setFilter(filter)
            }} />
        }  
    </>
  );
}

export default App;
