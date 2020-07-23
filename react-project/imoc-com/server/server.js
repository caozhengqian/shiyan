const express = require('express');
const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/imooc';
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
});
// 类似于mysql的表 mongo里有文档、字段的概念，
const User = mongoose.model('user', new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}));
// User.create({
// 	user:'xiaohua',
// 	age:12
// },function(err, doc){
// 	if (!err) {
// 		console.log(doc)
// 	}else{
// 		console.log(err)
// 	}
// })
const app = express();
app.get('/',function (req,res) {
    res.send('<h1>进入express</h1>')
});
app.get('/data',function(req,res){
    User.findOne({user:'xiaohua'},function(err,doc){
        res.json(doc)
    })
})

app.listen(9003,function () {

})

