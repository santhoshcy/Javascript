function inLine(arr,item)
{
    arr.unshift(item);        //Similar to push but adds element to first index of array

}
var arr=[1,2,3,4,5];

console.log(arr);
inLine(arr,0);
console.log(arr);
