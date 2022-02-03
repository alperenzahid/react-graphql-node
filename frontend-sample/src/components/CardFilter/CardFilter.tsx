import './CardFilter.css'
import {useState} from "react";
import Options, {OPTION_TYPE} from "./Options";

export default function CardFilter({filter=[''], onClose = ()=>{}}
                                       : { filter: string[], onClose: Function }){
    const initialOptions = new Options(filter)
    const [options, _setOptions] = useState<Options>(initialOptions)
    const setOptions = (optionType: OPTION_TYPE) => {
        const temp = options.getCloned(optionType);
        _setOptions(temp)
    }

    const onExit = ()=>{
        const calculatedFilter = [];
        for (const [key, value] of Object.entries(options)) {
            if(value){
                calculatedFilter.push(key);
            }
        }
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
                        Object.values(OPTION_TYPE).map((option: OPTION_TYPE)=>{
                            const selectLogo = options[option] ? "full" : "free";
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