let array = [1,2,3,4,5 ];

console.log(array.forEach(double));

function double(element, index, array_com){
    array_com[index] = element * 2;
    console.log(array_com)
}
