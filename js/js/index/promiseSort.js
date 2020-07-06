const promise = new Promise((resolve,reject)=>{
   console.log(1)
   resolve()
   console.log(2)
})
promise.then(()=>{
   console.info(3)
})
aa()
console.info(4)
function aa() {
   console.info('aa')
}
