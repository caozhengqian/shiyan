<template>
  <div>
      <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
          <el-form-item
                  prop="email"
                  label="邮箱"
                  :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
          >
              <el-input v-model="dynamicValidateForm.email"></el-input>
          </el-form-item>
          <el-form-item
                  v-for="(domain, index) in dynamicValidateForm.domains"
                  :label="'域名' + index"
                  :key="domain.key"
                  :prop="'domains.' + index + '.value'"
                  :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
          >
              <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="submitForm1('dynamicValidateForm')">提交</el-button>
              <el-button @click="addDomain">新增域名</el-button>
              <el-button @click="resetForm1('dynamicValidateForm')">重置</el-button>
          </el-form-item>
      </el-form>
      <p>----------------------------------------------------------------------------------------------------------</p>
    <Test />
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input v-model="ruleForm.checkPass" autocomplete="off" />
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker v-model="ruleForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker v-model="ruleForm.date2" placeholder="选择时间" style="width: 100%;" />
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="'活动名称'是否必输" prop="delivery">
        <el-switch v-model="ruleForm.delivery " @change="_cRule" />
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type" />
          <el-checkbox label="地推活动" name="type" />
          <el-checkbox label="线下主题活动" name="type" />
          <el-checkbox label="单纯品牌曝光" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助" />
          <el-radio label="线下场地免费" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input v-model="ruleForm.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

  </div>

</template>

<script>
// import { mapState } from "vuex";
import Test from './test'
export default {
  name: 'FormTo',
  components: {
    Test
  },
  props: {
    //  msg: String
  },
  data() {
    var vCheckPass = (rule, value, callback) => {
      if (this.vCheck.checkPass) { // 需要校验
        const res = this.$validate.test(value)
        if (res.isOk === false) { // 校验失败
          callback(new Error(res.msg))
        } else {
          callback()
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
      } else {
        // callback(new Error('不需要输入'));
        callback()
      }
    }
    return {
        dynamicValidateForm: {
            domains: [{
                value: ''
            }],
            email: ''
        },
      ruleForm: {
        name: '',
        checkPass: '', // 密码
        region: '',
        date1: '',
        date2: '',
        delivery: true,
        type: [],
        resource: '',
        desc: ''
      },
      vCheck: {
        checkPass: true
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        checkPass: [
          { validator: vCheckPass, required: true, trigger: 'change' }
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
  computed: {
    // ...mapState(["activityData"])
  },
  created() {

  },
  methods: {
    // _cRule
    _cRule(e) {
      console.info('e=', e)
      if (e) {
        this.rules.name[0].required = true// 活动名称必输

        this.rules.checkPass[0].required = true// 密码必输
        this.vCheck.checkPass = true // 密码必输
      } else {
        this.rules.name[0].required = false// 活动名称非必输

        this.rules.checkPass[0].required = false// 密码非必输
        this.vCheck.checkPass = false // 密码非必输
      }
    },
    // 全部校验
    submitForm(formName) {
      console.info(this.ruleForm)
      // 全部校验
      this.$refs[formName].validate((valid) => {
        console.info('校验的结果=', valid)
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })

      // 部分校验
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
      this.$refs[formName].resetFields()
    },

      submitForm1(formName) {
          this.$refs[formName].validate((valid) => {
              if (valid) {
                  alert('submit!');
              } else {
                  console.log('error submit!!');
                  return false;
              }
          });
      },
      resetForm1(formName) {
          this.$refs[formName].resetFields();
      },
      removeDomain(item) {
          var index = this.dynamicValidateForm.domains.indexOf(item)
          if (index !== -1) {
              this.dynamicValidateForm.domains.splice(index, 1)
          }
      },
      addDomain() {
          this.dynamicValidateForm.domains.push({
              value: '',
              key: Date.now()
          });
          console.info(JSON.stringify(this.dynamicValidateForm.domains) )
      }


  }

}
</script>

<style lang="less" scoped>

</style>
