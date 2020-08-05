       for(let i = 0; i < 5; i++){
          setTimeout(function () {
              console.info("i=",i);//0，1，2，3，4
              console.info(new Date())
          },3000)};
       for(var j = 0; j < 5; j++){
           setTimeout(function () {
               console.info("j=",j);//都是5
               console.info(new Date())
           },3000)};
       console.info("aaaaaaa1");
       console.info(i);
       console.info("aaaaaaa2");//上面报错，这里不走了。