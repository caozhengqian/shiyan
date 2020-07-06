function sortNumber(a,b)
{
   return a - b
}

var arr = new Array(6)
arr[0] = 10
arr[1] = 5
arr[2] = 40
arr[3] = 25
arr[4] = 1000
arr[5] = 1
arr[6] = 1
console.info(arr);
console.info(arr.sort(sortNumber));
console.info(arr);