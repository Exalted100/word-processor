import React from "react"

const Typing = ({words, onTextareaChange}) => {
    
    return (
        <div style={{border: "2px solid black", padding: "0.5rem", paddingBottom: "0", marginTop: "3rem"}}>
            <textarea onChange={onTextareaChange} value={words} placeholder="start typing" style={{resize: "vertical", border: "none", width: "100%", minHeight: "8rem", outline: "none"}} />
        </div>
    )
}

export default Typing