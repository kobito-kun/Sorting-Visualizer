const sortAlgorithmHeapSort = (values, setValues, setTimesRan, setSwaps, speed) => {
    let arr = [...values]
    let times_ran = 0;
    let swaps_ran = 0;

    const buildMaxHeap = (arr) => {
        let i = Math.floor(arr.length / 2 - 1);
        while (i >= 0) {
            heapify(arr, i, arr.length);
            i -= 1;
            times_ran++
            setTimesRan(times_ran)
        }
    }

    const heapify = (heap, i, max) => {
        let index;
        let leftChild;
        let rightChild;
        while (i < max) {
            index = i;
            leftChild = 2 * i + 1;
            rightChild = leftChild + 1;
            if (leftChild < max && heap[leftChild].value > heap[index].value) {
                index = leftChild;
            }
            if (rightChild < max && heap[rightChild].value > heap[index].value) {
                index = rightChild;
            }
            if (index === i) {
                return;
            }
            times_ran++
            setTimesRan(times_ran)            
            heap[index].working = true;
            swap(heap, i, index);
            heap[index].working = false;
            i = index;
        }
    }

    const swap = async (arr, firstItemIndex, lastItemIndex) => {
        const temp = arr[firstItemIndex].value;
        arr[firstItemIndex].value = arr[lastItemIndex].value;
        arr[lastItemIndex].value = temp;
        arr[firstItemIndex].working = true;
        arr[lastItemIndex].working = true;
        await new Promise(r => setTimeout(r, speed)).then(() => {
            setValues([...arr])
        })
        arr[firstItemIndex].working = false;
        arr[lastItemIndex].working = false;        
        times_ran++
        setTimesRan(times_ran)
        swaps_ran++
        setSwaps(swaps_ran)
    }

    const heapSort = async (arr) => {    
    buildMaxHeap(arr);
    await new Promise(r => setTimeout(r, speed)).then(() => {
        setValues([...arr])
    })
    let lastElement = arr.length - 1;
    while (lastElement > 0) {
        swap(arr, 0, lastElement);
        heapify(arr, 0, lastElement);
        lastElement -= 1;
        times_ran++
        setTimesRan(times_ran)        
        await new Promise(r => setTimeout(r, speed)).then(() => {
            setValues([...arr])
        })
        }    
    }
    heapSort(arr);
} 

export default sortAlgorithmHeapSort;