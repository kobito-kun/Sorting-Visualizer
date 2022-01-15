const sortAlgorithmBubbleSort = async(values, setValues, setTimesRan, setSwaps, speed) => {
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

export default sortAlgorithmBubbleSort;