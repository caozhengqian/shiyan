import  {_products} from "./data.js"
const timeOut = 2000;//所有接口延迟时间
const fetchOk = true;//所有接口正确返回？
export default {

  getProducts (cb) {
    setTimeout(() => cb(_products), 1000)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.webdriver)
        ? cb()
        : errorCb()
    }, 100)
  },
    newProducts (params){
        console.info("req==>:",params);
        return  new Promise((resolve, reject) => {
            try{
                if(fetchOk){
                    setTimeout(()=>{
                        resolve({code:'200',_products});
                    },timeOut)
                }else{
                    setTimeout(()=>{
                        resolve({code:'503',msg:"失败！"});
                    },timeOut)
                }
            } catch (error) {
                reject(error)
            }



        });
    }
}
