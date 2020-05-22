<template>
  <div class="hello">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

  <el-form-item label="是否已婚" prop="radio">
    <el-radio-group v-model="ruleForm.radio">
      <el-radio label="0">未婚</el-radio>
      <el-radio label="1">已婚</el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
export default {
  name: 'radio',
  props: {
    msg: String
  },
  data() {
      return {
        ruleForm: {
            radio: '',
        },
        rules: {
            radio: [
            { required: true, message: '请选择一个单选框', trigger: 'change' }
          ],
        }
      };
    },
    methods: {
         submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('选择了'+this.ruleForm.radio);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style scoped>

</style>
