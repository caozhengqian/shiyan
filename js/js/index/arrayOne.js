var arr=[1,2,2,3,4,4,4]
var reslut = Array.from(new Set(arr))
console.info(reslut);

       var arr1 = [{a:1,b:2,c:3,a:1}]
       var reslut1 = Array.from(new Set(arr1));
       console.info(reslut1)

var arr2 = [{a:1},{a:1},{b:2},{c:3}]
var reslut2 = Array.from(new Set(arr2));
console.info(reslut2)