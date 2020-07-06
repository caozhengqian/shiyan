setTimeout(function () {
   console.info(1)
},0)
new Promise(function executor(resolve){
   console.info(2);
   for(var i=0;i<10000;i++){
       i==9999 && resolve();
   }
   console.info(3);
}).then(()=>{
   console.info(4);
})
console.info(5)
//2 3 5 4 1