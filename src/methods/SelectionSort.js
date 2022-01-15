const sortAlgorithmSelectionSort = async(values, setValues, setTimesRan, speed) => {  
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

export default sortAlgorithmSelectionSort;