function lastElement(arr, n){
    if (n == null){
        console.log(arr[arr.length - 1]);
    }else if(n > arr.length){
        console.log(arr)
    }
    else{
        let res = arr.slice(arr.length - n);
        console.log(res);
    }
}


lastElement([2, 6, 0, -2, 4]);
lastElement([2, 6, 0, -2, 4],3);
lastElement([2, 6, 0, -2, 4],6);
