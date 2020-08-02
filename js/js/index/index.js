       abc()   //打印abc
       function abc() {
           console.info(this);
           console.info('abc');

       }

       abcd()  //abcd is not defined,必须要放在方法下面
       abcd = ()=>{
           console.info("a",this);
           console.info('abcd')
       }
