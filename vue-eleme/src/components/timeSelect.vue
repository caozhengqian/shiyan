<template>
  <div class="hello">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="下拉选择" prop="selectV">
        <el-time-select
          v-model="ruleForm.selectV"
          :picker-options="{
            start: '08:30',
            step: '02:00',
            end: '18:30'
          }"
          placeholder="选择时间"
        >
        </el-time-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "timeSelect",
  props: {},
  data() {
    return {
      ruleForm: {
        selectV: ""
      },
      rules: {
        selectV: [
          { required: true, message: "请选择下拉框", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.info(this.ruleForm);
        if (valid) {
            console.log("ok submit!!");
        } else {
          console.log("error");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped></style>
