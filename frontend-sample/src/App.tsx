import React, {useRef, useState} from 'react';
import './App.css';
import CardBox from "./components/CardBox/CardBox";
import CardFilter from "./components/CardFilter/CardFilter";


function App() {
    const [filter, setFilter] = useState(['Rick', 'Morty']);
    const [openFilter, setOpenFilter] = useState(false);
    const boxId = useRef(1);
    const onFiltered = (filter: string[]) => {
        setOpenFilter(false);
        if (filter.length === 0)
            filter = [''];
        setFilter(filter)
        boxId.current = boxId.current + 1;
    }

    return (
        <>
            <div className="filter" onClick={() => {
                setOpenFilter(!openFilter)
            }}>
                <div className="filterText">{
                    (filter[0] === "") ? "Click To Filter" : filter.map((f: string, index) => {
                        return index === filter.length - 1 ? f : f + " and ";
                    })
                }</div>
                <img src={"/images/filter.svg"} className="filterIcon" alt=""/>
            </div>
            <CardBox key={boxId.current} filter={filter}/>
            {openFilter &&
                <CardFilter filter={filter} onClose={onFiltered}/>
            }
        </>
    );
}

export default App;
