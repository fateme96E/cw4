// function lastElement(arr, n){
//     if (n == null){
//         console.log(arr[arr.length - 1]);
//     }else if(n > arr.length){
//         console.log(arr)
//     }
//     else{
//         let res = arr.slice(arr.length - n);
//         console.log(res);
//     }
// }


// lastElement([2, 6, 0, -2, 4]);
// lastElement([2, 6, 0, -2, 4],3);
// lastElement([2, 6, 0, -2, 4],6);


// function joinElements(arr){
//     let res = arr.join(',');
//     console.log(`" ${res} "`);

//     let res2 = arr.join('+');
//     console.log(`" ${res2} "`);
// }
// joinElements(["Red", "Green", "White", "Black"]);



// function printArr(arr){
//     for (let i = 0; i < arr.length; i++){
//         console.log(`"row ${i}" \n`);fit
//         for (let j = 0; j < arr[i].length; j++){
//             console.log(`" ${arr[i][j]} " \n`);
//         }
//     }
// }
// printArr([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]);

//2nd solution:
function printArrWithMap(arr){
    arr.map(function(item, index ) {
        console.log(`"row ${index}" \n`)
        console.log(`"${item}" \n`)});

}
printArrWithMap([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]);
