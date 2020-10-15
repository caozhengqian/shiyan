import  {table1} from "./data.js"
const timeOut = 2000;//所有接口延迟时间
const fetchOk = true;//所有接口正确返回？
export function getTableData (params){
        console.info("请求参数==>:",params);
        return  new Promise((resolve, reject) => {
            try{
                if(fetchOk){
                    setTimeout(()=>{
                        resolve({code:'200',data:table1});
                    },2000 || timeOut)
                }else{
                    setTimeout(()=>{
                        resolve({code:'503',msg:"失败！"});
                    },2000 || timeOut)
                }
            } catch (error) {
                reject(error)
            }
        });
}
