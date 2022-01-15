import React, {useState, useEffect} from 'react'

// Importing Methods
import BubbleSort from '../methods/BubbleSort';
import InsertionSort from '../methods/InsertionSort';
import SelectionSort from '../methods/SelectionSort';
import HeapSort from '../methods/HeapSort';

function SortingVisualizer() {

    const [values, setValues] = useState([]);
    const [timesRan, setTimesRan] = useState(0);
    const [swaps, setSwaps] = useState(0);
    const [size, setSize] = useState(Number(window.innerWidth) / 10 - 5);
    const [speed, setSpeed] = useState(100);
    const [animations, setAnimations] = useState(true);
    const [locked, setLocked] = useState(false);

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

    const sortAlgorithmBubbleSort = async() => {
        setLocked(true)
        await BubbleSort(values, setValues, setTimesRan, setSwaps, speed);
        setLocked(false)
    }
    
    const sortAlgorithmInsertionSort = async() => {
        setLocked(true)
        await InsertionSort(values, setValues, setTimesRan, speed);
        setLocked(false)
    }

    const sortAlgorithmSelectionSort = async() => {
        setLocked(true)
        await SelectionSort(values, setValues, setTimesRan, speed);
        setLocked(false)
    }

    const sortAlgorithmHeapSort = async() => {
        setLocked(true)
        await HeapSort(values, setValues, setTimesRan, setSwaps, speed);
        setLocked(false)
    }

    useEffect(() => {
        generateValues(size);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [size])

    return (
        <div>
            <div className="bg-gray-600 w-full h-6 flex justify-center items-center text-white font-bold">
                <a href="https://github.com/kobito-kun/Sorting-Visualizer"><i className="fab fa-github"></i> Kobi at Github</a>
            </div>
            <nav className="bg-gray-500 p-6 flex flex-col lg:flex-row lg:justify-between">
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    <button disabled={locked} className={`font-bold text-gray-600 shadow ${locked ? "bg-gray-300 cursor-default" :"bg-blue-400"} lg:w-auto w-full px-4 py-2 rounded-lg shadow m-1`} onClick={() => sortAlgorithmBubbleSort()}>Bubble Sort</button>
                    <button disabled={locked} className={`font-bold text-gray-600 shadow ${locked ? "bg-gray-300 cursor-default" :"bg-blue-400"} lg:w-auto w-full px-4 py-2 rounded-lg shadow m-1`} onClick={() => sortAlgorithmInsertionSort()}>Insertion Sort</button>
                    <button disabled={locked} className={`font-bold text-gray-600 shadow ${locked ? "bg-gray-300 cursor-default" :"bg-blue-400"} lg:w-auto w-full px-4 py-2 rounded-lg shadow m-1`} onClick={() => sortAlgorithmSelectionSort()}>Selection Sort</button>
                    <button disabled={locked} className={`font-bold text-gray-600 shadow ${locked ? "bg-gray-300 cursor-default" :"bg-blue-400"} lg:w-auto w-full px-4 py-2 rounded-lg shadow m-1`} onClick={() => sortAlgorithmHeapSort()}>Heap Sort</button>
                    <button disabled={locked} className={`font-bold text-gray-600 shadow ${locked ? "bg-gray-300 cursor-default" :"bg-blue-400"} lg:w-auto w-full px-4 py-2 rounded-lg shadow m-1`} onClick={() => generateValues()}>New Values</button>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex flex-col mx-1">
                        <label for="animations">Animations?</label>
                        <input disabled={locked} type="checkbox" id="animations" className="block mx-auto" onChange={() => setAnimations(!animations)} checked={animations} />
                    </div>
                    <div className="flex flex-col mx-1">
                    <label for="size">Set Size {size}</label>
                    <input disabled={locked} onChange={(e) => setSize(e.target.value)} id="size" type="range" min="10" step="5" max={Number(window.innerWidth) / 10 - 5}></input>
                    </div>
                    <div className="flex flex-col mx-1">
                    <label for="speed">Set Speed {speed}ms</label>
                    <input disabled={locked}  onChange={(e) => setSpeed(e.target.value)} id="speed" type="range" min="0" step="5" max="300"></input>
                    </div>
                </div>
                <div className="px-4 lg:block flex justify-between">
                    <h3 className="font-bold">Loops ran: {timesRan}</h3>
                    <h3 className="font-bold">Swaps: {swaps}</h3>
                </div>
            </nav>
            <div className="flex justify-center items-center" style={{overflowX: 'hidden'}}>
                <div className="flex">
                {values.map((value, idx) => (
                    <div key={idx} style={{height: `${value.value / 2}px`, width: "10px"}} className={`${value.working ? 'bg-red-500' : 'bg-blue-500'} ${animations ? 'duration-200' : ''} hover:bg-blue-600 hover:shadow`}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SortingVisualizer
