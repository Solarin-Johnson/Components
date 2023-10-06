import { useState } from "react";
import './style.scss'

function Input() {
    const[input, setInput] = useState('')
    const[resized, setResized] = useState(false)
    const[moved, isMoved] = useState('placeholder')
    
    const inputText = (e) => {
        setInput(e.target.value)
    }
    const resize = ()=> {
        if(resized){
            isMoved('')
            setResized(true)
        } else {
            isMoved(`resize`)
        }
    }
    const check = ()=> {
        setResized(false)
        isMoved('')
    }
    return(
        <label onClick={resize} className="container">
            <input value={input} onChange={inputText} onBlur={check} type="text" />
            <span id="placeholder" onClick={resize} className={moved} >Text</span>
        </label>
    )
}

export default Input