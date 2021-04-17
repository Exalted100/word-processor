import React from "react"

const Convert = ({onRadioChange}) => {
    
    return (
        <div style={{border: "2px solid black", marginTop: "3rem", padding: "0.5rem"}} onChange={onRadioChange}>
            <h4>Convert input to:</h4>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <div>
                    <input type="radio" id="sentenceCase" name="textCase" value="sentenceCase" />
                    <label for="sentenceCase">Sentence case</label>
                </div>

                <div>
                    <input type="radio" id="titleCase" name="textCase" value="titleCase" />
                    <label for="titleCase">Title Case</label>
                </div>

                <div>
                    <input type="radio" id="lowerCase" name="textCase" value="lowerCase" />
                    <label for="lowerCase">lower case</label>
                </div>

                <div>
                    <input type="radio" id="upperCase" name="textCase" value="upperCase" />
                    <label for="upperCase">UPPER CASE</label>
                </div>
            </div>
        </div>
    )
}

export default Convert