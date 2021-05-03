import React, {useState, useEffect} from 'react'

function SortingVisualizer() {

    const [values, setValues] = useState([]);
    const [timesRan, setTimesRan] = useState(0);
    const [swaps, setSwaps] = useState(0);
    const [size, setSize] = useState(100);
    const [speed, setSpeed] = useState(100);

    const generateValues = (rSize = size) => {
        let output = [];
        for(let i = 0; i < rSize; i++){
            let temp_value = Math.floor(Math.random() * 1000) + 1;
            output.push({
                value: temp_value,
                working: false
            })
        }
        setValues(output);
    };

    const updateSize = e => {
        setSize(e.target.value)
    }
    
    const updateSpeed = e => {
        setSpeed(e.target.value)
    }

    const sortAlgorithmBubbleSort = async() => {
        let copy_values = [...values];
        let temp_ran = 0;
        let swaps_done = 0;
        for(var i = 0; i < copy_values.length; i++){
            temp_ran++
            for(var j = 0; j < ( copy_values.length - i -1 ); j++){ 
                temp_ran++
                if(copy_values[j].value > copy_values[j+1].value){
                    var temp = copy_values[j].value
                    copy_values[j].value = copy_values[j + 1].value
                    copy_values[j].working = true
                    copy_values[j+1].value = temp
                    copy_values[j+1].working = true
                    swaps_done++
                    setTimesRan(temp_ran)
                    setSwaps(swaps_done)
                }
                await new Promise(r => setTimeout(r, speed)).then(() => {
                    setValues([...copy_values])
                })
                copy_values[j+1].working = false;
                copy_values[j].working = false;
            }
          }
    }
    
    const sortAlgorithmInsertionSort = async() => {  
        let copy = [...values]
        let n = copy.length
        let i, j, key
        let loops_ran = 0
        for (i = 1; i < n; i++){
            loops_ran++ 
            key = copy[i].value; 
            j = i - 1;
            copy[i].working = true;
            while(j >= 0 && copy[j].value > key){ 
                loops_ran++
                copy[j + 1].value = copy[j].value; 
                j = j - 1; 
            } 
            copy[j + 1].working = true;
            copy[j + 1].value = key;
            setTimesRan(loops_ran)
            await new Promise(r => setTimeout(r, speed)).then(() => {
                setValues([...copy])
            })
            copy[i].working = false;
            copy[j + 1].working = false;
        } 
    }

    const sortAlgorithmSelectionSort = async() => {  
        let copy = [...values]
        let times_ran = 0
        for (var i = 0; i < copy.length - 1; i++){
            var min = i;
            times_ran++
            for (var j = i + 1; j < copy.length; j++){ 
                times_ran++
                if (copy[j].value < copy[min].value){ 
                    min = j; 
                }
            }
            if (min !== i){
                var tmp = copy[i].value;
                copy[i].value = copy[min].value;
                copy[i].working = true;
                copy[min].value = tmp;
                copy[min].working = true;
            }
            setTimesRan(times_ran)
            await new Promise(r => setTimeout(r, speed)).then(() => {
                setValues([...copy])
            })
            copy[i].working = false;
            copy[min].working = false;
        }
    }

    const heapify = (arr, n, i) => {
        let largest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;

        if(l < n && arr[largest].value < arr[l].value){
            largest = l;
        }
        if(r < n && arr[largest].value < arr[r].value){
            largest = r;
        }
        if(largest !== i){
            var temp = arr[i]
            arr[i] = arr[largest];
            arr[largest] = temp;
            heapify(arr, n, largest)
        }
    }

    const heapSort = () => {
        let arr = [...values];
        let n = arr.length;

        for(var i = n / 2 -1; i >= 0; i-- ){
            heapify(arr, n, i);
        }

        for(var j = n - 1; i > 0; j--){
            var temp = arr[0];
            arr[0] = arr[j];
            arr[j] = temp;

            heapify(arr, j, 0);
        }

    }


    useEffect(() => {
        generateValues(size);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [size])

    return (
        <div>
            <nav className="bg-gray-500 p-6 flex justify-between">
                <div>
                    <button className="bg-blue-400 px-4 py-2 rounded-lg shadow mx-1" onClick={() => sortAlgorithmBubbleSort()}>Bubble Sort</button>
                    <button className="bg-blue-400 px-4 py-2 rounded-lg shadow mx-1" onClick={() => sortAlgorithmInsertionSort()}>Insertion Sort</button>
                    <button className="bg-blue-400 px-4 py-2 rounded-lg shadow mx-1" onClick={() => sortAlgorithmSelectionSort()}>Selection Sort</button>
                    <button className="bg-blue-400 px-4 py-2 rounded-lg shadow mx-1" onClick={() => console.log(heapSort())}>Heap Sort</button>
                    <button className="bg-blue-400 px-4 py-2 rounded-lg shadow mx-1" onClick={() => generateValues()}>New Values</button>
                </div>
                <div className="flex">
                    <div className="flex flex-col mx-1">
                    <label for="size">Set Size {size}</label>
                    <input onChange={updateSize} id="size" type="range" min="10" step="5" max="300"></input>
                    </div>
                    <div className="flex flex-col mx-1">
                    <label for="speed">Set Speed {speed}ms</label>
                    <input onChange={updateSpeed} id="speed" type="range" min="0" step="5" max="300"></input>
                    </div>
                </div>
                <div className="px-4">
                    <h3 className="font-bold">Loops ran: {timesRan}</h3>
                    <h3 className="font-bold">Swaps: {swaps}</h3>
                </div>
            </nav>
            <div className="flex justify-center items-center">
                <div className="flex">
                {values.map((value, idx) => (
                    <div key={idx} style={{height: `${value.value / 2}px`, width: "10px"}} className={`${value.working ? 'bg-red-500' : 'bg-blue-500'} hover:bg-blue-600 hover:shadow`}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SortingVisualizer
