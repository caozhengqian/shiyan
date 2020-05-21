<template>
  <div class="hello">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="多选框组件名称" prop="checkedcities">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <!--<div style="margin: 15px 0;"></div>-->
          <el-checkbox-group
                  v-model="ruleForm.checkedcities"
                  @change="handleCheckedCitiesChange"
          >
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
      </el-form-item>
      <el-form-item label="多选框组件名称" prop="type">
        <!--<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>-->
        <!--<div style="margin: 15px 0;"></div>-->
        <el-checkbox-group
          v-model="ruleForm.type"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox label="美食/餐厅线上活动" name="ss"></el-checkbox>
          <el-checkbox label="地推活动" name="ss"></el-checkbox>
          <el-checkbox label="线下主题活动" name="ss"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="ss"></el-checkbox>
        </el-checkbox-group>
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
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  name: "checkbox",
  props: {
    msg: String
  },
  data() {
    return {
      checkAll: false,
      cities: cityOptions,
      isIndeterminate: true,
      ruleForm: {
        checkedcities: [],
        type: []
      },
      rules: {
          checkedcities: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个多选框",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    handleCheckAllChange(val) {
      console.info("val-->", val);
      this.ruleForm.checkedcities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.info(this.ruleForm);
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
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
