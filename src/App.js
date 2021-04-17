import React, { useState } from "react"
import Convert from "./Convert"
import Typing from "./Typing"
import Count from "./Count"
import "./App.css"

const App = () => {
    
    function titleCase(str) {
        let strLowerCase = str.toLowerCase();
        let wordArr = strLowerCase.split(" ").map(function(currentValue) {
            return currentValue[0].toUpperCase() + currentValue.substring(1);
        });

        return wordArr.join(" ");
    }

    function sentenceCase(theString) {
        var newString = theString.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
      return newString;
    }

    const [words, setWords] = useState("")
    const [caseType, setCaseType] = useState("")

    const onTextareaChange = (event) => {
        setWords(event.target.value)
    }

    const onRadioChange = (event) => {
        setCaseType(event.target.value)

        switch (event.target.value) {
            case "sentenceCase":
              setWords(sentenceCase(words))
              break;
            case "titleCase":
              setWords(titleCase(words))
              break;
            case "lowerCase":
              setWords(words.toLowerCase())
              break;
            case "upperCase":
              setWords(words.toUpperCase())
              break;
            default:
          }
    }
    
    return (
        <div style={{margin: "0 1rem"}}>
            <h1>Word Processor</h1>
            <Convert onRadioChange={onRadioChange} />

            <div className="float">
                <Count words={words} />
            </div>

            <div className="non-float">
                <Typing onTextareaChange={onTextareaChange} words={words} />
            </div>
        </div>
    )
}

export default App