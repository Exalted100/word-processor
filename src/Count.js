import React from "react"

const Count = ({words}) => {
    function mode(array) {
        if(array.length == 0)
            return null;
        var modeMap = {};
        var maxEl = array[0], maxCount = 1;
        for(var i = 0; i < array.length; i++)
        {
            var el = array[i];
            if(modeMap[el] == null)
                modeMap[el] = 1;
            else
                modeMap[el]++;  
            if(modeMap[el] > maxCount)
            {
                maxEl = el;
                maxCount = modeMap[el];
            }
        }
        return `${maxEl} (${maxCount} times)`;
    }
    
    return (
        <div style={{border: "2px solid black", marginTop: "3rem", padding: "0.5rem"}}>
            <h3>Word count</h3>
            <p>{words.length} characters</p>
            <p>{words.split(" ").length} words</p>
            <p>{words.split(".").length} sentences</p>
            <p>Most used word: {mode(words.split(/\W+/))}</p>
        </div>
    )
}

export default Count