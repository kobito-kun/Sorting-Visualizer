import React, {useState, useEffect} from 'react'

function SortingVisualizer() {

    const [values, setValues] = useState([]);

    const generateValues = () => {
        let output = [];
        for(let i = 0; i < 100; i++){
            let temp_value = Math.floor(Math.random() * 1000) + 1;
            output.push(temp_value)
        }
        setValues(output);
    };

    const sortAlgorithmBubbleSort = async() => {
        let copy_values = [...values];
        for(var i = 0; i < copy_values.length; i++){
            for(var j = 0; j < ( copy_values.length - i -1 ); j++){ 
                if(copy_values[j] > copy_values[j+1]){
                    var temp = copy_values[j]
                    copy_values[j] = copy_values[j + 1]
                    copy_values[j+1] = temp
                }
                console.log("Gonna sleep")
                await new Promise(r => setTimeout(r, 500));
                setValues(copy_values)
            }
          }
    }

    useEffect(() => {
        generateValues();
    }, [])

    return (
        <div className="flex justify-center items-center">
            <button onClick={() => sortAlgorithmBubbleSort()}>Sort</button>
            <button onClick={() => generateValues()}>New Values</button>
            <div className="flex">
            {values.map((value, idx) => (
                <div key={idx} style={{height: `${value / 2}px`, width: "10px"}} className="bg-blue-500"></div>
            ))}
            </div>
        </div>
    )
}

export default SortingVisualizer
