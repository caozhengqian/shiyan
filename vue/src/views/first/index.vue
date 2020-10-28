/* eslint-disable vue/no-use-v-if-with-v-for */
<template>
  <div class="First">

      <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" >
          <el-row type="flex" align="middle">
              <el-col :span="6"  v-for="(domain, index) in dynamicValidateForm.domains" :key="index">
                <div v-if="domain.isShow == true" >
                  <el-form-item
                         v-if="domain.type == 'input'"
                         :ref="domain.en"
                          :label="domain.name"
                          :key="domain.key"
                          :prop="'domains.' + index + '.value'"
                          :rules="{
                              required: domain.isReq, message: domain.name+'不能为空', trigger: 'blur'
                           }"
                  >
                      <el-input v-model="domain.value"  :disabled="!domain.isEnabled"></el-input>
                  </el-form-item>
                  <el-form-item
                         v-if="domain.type == 'radio'"
                         ref="domain.en"
                          :label="domain.name"
                          :key="domain.key"
                          :prop="'domains.' + index + '.value'"
                          :rules="{
                              required: domain.isReq, message: domain.name+'不能为空', trigger: 'blur'
                           }"
                  >
                          <el-select v-model="domain.value" placeholder="请你选择"
                                     @change="_autoSelect(domain,index)"
                                     clearable>
                              <el-option v-for="(v,k) in domain.values"
                                          :label="v.label"
                                          :value="v.value"
                                          :key="k"
                              >
                              </el-option>
                          </el-select>
                  </el-form-item>
            </div>
              </el-col>
          </el-row>
          <el-row type="flex" align="middle">
              <el-col :span="6">
                  <el-form-item>
                  <el-button type="primary" @click="submitForm1('dynamicValidateForm')">提交</el-button>
                  <el-button @click="resetForm1('dynamicValidateForm')">重置</el-button>
                  </el-form-item>
              </el-col>

          </el-row>
      </el-form>

  </div>

</template>

<script>

import { products as pros } from './products'
export default {
  name: 'First',

  data() {
    return {
      pros,
      dynamicValidateForm: {
        domains: []
      }
    }
  },

  created() {
    this.dynamicValidateForm.domains = pros.data
  },

  methods: {
    _autoSelect(obj, index) {
      let value = obj.value
      obj.values.map((v, k) => {
        if (v.value === value) { // 选中的
          v.wTrue.map((v1, k1) => {
            this.dynamicValidateForm.domains.map((v2, k2) => {
              if (v2.en === v1) {
                let o = this.dynamicValidateForm.domains[k2]
                o.value = ''// 清空值
                o.isEnabled = true// 放开置灰
                if (o.req === true) { // 如果是必输
                  o.isReq = true// 设置为必输
                } else {
                  o.isReq = false// 取消必输
                }
              }
            })
          })
          v.wFalse.map((v1, k1) => { // 循环需要置灰列表
            this.dynamicValidateForm.domains.map((v2, k2) => {
              if (v2.en === v1) {
                let o = this.dynamicValidateForm.domains[k2]
                o.value = ''// 清空值
                o.isEnabled = false// 置灰
                o.isReq = false// 取消必输
                console.info(this.$refs[v1])
                this.$refs[v1][0].clearValidate()
              }
            })
          })
        }
      })
    },
    submitForm1(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.info(this.dynamicValidateForm.domains)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm1(formName) {
      this.$refs[formName].resetFields()
    }

  }

}
</script>

