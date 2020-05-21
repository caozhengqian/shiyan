<template>
  <div class="hello">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="日期选择框" prop="dateV">
        <el-date-picker
                v-model="ruleForm.dateV"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
        </el-date-picker>
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
  name: "datePicker",
  props: {},
  data() {
    return {
      ruleForm: {
          dateV: ""

      },
      rules: {
          dateV: [
          { required: true, message: "请选择日期选择框", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.info(this.ruleForm.dateV);
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
