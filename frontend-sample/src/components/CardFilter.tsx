import './CardFilter.css'
import {useState} from "react";

export default function CardFilter({filter=[''], onClose = ()=>{}}: any){
    const allOptions = ["Rick", "Morty"];
    const optionsInit : any = {
        "Rick": !!filter.find((f:string)=>f==="Rick"),
        "Morty": !!filter.find((f:string)=>f==="Morty"),
    };


    const [options, _setOptions] = useState(optionsInit)
    const setOptions = (option: string) => {
        const temp = {...options};
        temp[option] = !temp[option];
        _setOptions(temp)
    }

    const onExit = ()=>{
        const calculatedFilter = [];
        for (const [key, value] of Object.entries(options)) {
            if(value){
                calculatedFilter.push(key);
            }
        }
        console.log("Calculated Filter: ",calculatedFilter);
        onClose(calculatedFilter)
    }
    return (
        <>
            <div className="cfBack" onClick={onExit}/>
            <div className="cardFilterBox">
                <div className="cfHeader">
                    <span className="cfHeaderText">Filter</span>
                    <img className="cfClose" src={"/images/close.svg"} alt="" height="24px" width="24px" onClick={onExit}/>
                </div>
                <div>
                    {
                        allOptions.map((option)=>{
                            //console.log("Filter: ", filter)
                            const selectLogo = options[option] ? "full" : "free";
                            //console.log("Select Logo", selectLogo)
                            return <div className="cfOption"  key={option} onClick={()=>{
                                setOptions(option);
                            }
                            }>
                                <div className="cfOptionItem" style={{left:'16px'}}>{option}</div>
                                <img src={`/images/select/${selectLogo}.svg`} alt="" className="cfOptionItem" style={{position: "absolute", right:'16px'}}/>
                            </div>
                        })
                    }
                </div>
            </div></>
    )
}