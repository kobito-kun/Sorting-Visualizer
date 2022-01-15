const sortAlgorithmInsertionSort = async(values, setValues, setTimesRan, speed) => {  
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

export default sortAlgorithmInsertionSort;