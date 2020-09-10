<template>
    <div>
        <Test/>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="活动名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input  v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动时间" required>
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="'活动名称'是否必输" prop="delivery">
                <el-switch v-model="ruleForm.delivery " @change="_cRule"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>

<script>
    //import { mapState } from "vuex";
    import Test from "./test";
    export default {
        components: {
            Test
        },
        name: 'FormTo',
        props: {
            //  msg: String
        },
        computed: {
            // ...mapState(["activityData"])
        },
        data() {
            var vCheckPass = (rule, value, callback) => {
                if(this.vCheck.checkPass){//需要校验
                    const res = this.$validate.test(value);
                    if(res.isOk == false){//校验失败
                        callback(new Error(res.msg));
                    }else{
                        callback();
                    }
                    // if (value === '12') {
                    //     callback(new Error('不能输入12'));
                    // } else if(!value){
                    //     callback(new Error('不能为空'));
                    // }else{
                    //     if (this.ruleForm.checkPass !== '') {
                    //         this.$refs.ruleForm.validateField('checkPass');
                    //     }
                    //     callback();
                    // }
                }else{
                    // callback(new Error('不需要输入'));
                    callback();
                }

            };
            return {
                ruleForm: {
                    name: '',
                    checkPass:'',//密码
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: true,
                    type: [],
                    resource: '',
                    desc: ''
                },
                vCheck:{
                    checkPass:true
                },
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: vCheckPass,required: true, trigger: 'change' },
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
                }
            }
        },
        created() {

        },
        methods: {
            //_cRule
            _cRule(e){
                console.info("e=",e)
                if(e){
                    this.rules.name[0].required = true;//活动名称必输

                    this.rules.checkPass[0].required = true;//密码必输
                    this.vCheck.checkPass  = true //密码必输
                }else{
                    this.rules.name[0].required = false;//活动名称非必输

                    this.rules.checkPass[0].required = false;//密码非必输
                    this.vCheck.checkPass  = false //密码非必输
                }
            },
            //全部校验
            submitForm(formName) {
                console.info(this.ruleForm);
                //全部校验
                this.$refs[formName].validate((valid) => {
                    console.info("校验的结果=",valid)
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });

                //部分校验
                // let arr = ['name']
                // this.$refs[formName].validateField(arr,(err) => {
                //     if (err) {
                //         console.info("表单错误",err);
                //         alert(err)
                //         return false;
                //     } else {
                //        let res = this.ruleForm;
                //         alert(res)
                //     }
                // });
            },

            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }

    }
</script>

<style lang="less" scoped>

</style>
