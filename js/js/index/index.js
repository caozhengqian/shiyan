      new abc(); //打印abc，new后this指向abc{}
      abc();//this指向定义的对象内
       function abc() {
           console.info(this);
           console.info('abc');

       }

       //abcd(); //abcd is not defined,必须要放在方法下面
       abcd = ()=>{
           console.info("a",this);
           console.info('abcd')
       };
      let c = new  abcd();
