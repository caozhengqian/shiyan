<template>
  <div class="First">
       <el-button @click="_click">新增产品</el-button>
      <p v-for="(v,k) in products" :key="k" style="margin-left: 30px;color:red">
        *{{ v.name }}
      </p>
      <p style="margin-top: 50px"></p>
      <div>
          下面都是生成出来的
      </div>
      <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" >
          <el-row type="flex" align="middle">
              <el-col :span="6"  v-for="(domain, index) in dynamicValidateForm.domains" v-if="domain.isShow == true">
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

    <el-dialog title="产品元素配置新增" :visible.sync="show">
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-truck"></i> 零担</span>
          <el-form ref="formL" :model="formL" label-width="80px" size="mini">
            <el-row type="flex" align="middle">
              <el-col :span="10" >
                <el-form-item label="产品名称">
                  <el-input
                          v-model="formL.proName"
                          placeholder="请输入产品名称"
                  />
                </el-form-item>
              </el-col>
            </el-row>
              <el-row type="flex" align="middle">
                  <el-form-item label="优惠折扣：">
                      <el-checkbox-group v-model="formL.disType">
                          <el-col :span="6"  v-for="(v,k) in disType"  :key="k">
                              <el-checkbox
                                      :label="v"
                                      name="disType"/>
                          </el-col>

                      </el-checkbox-group>
                  </el-form-item>
              </el-row>
              <el-row type="flex" align="middle">
                  <el-col :span="24" >产品折扣配置</el-col>
              </el-row>
              <el-row type="flex" align="middle">
                  <el-form-item label="运费类：">
                      <el-checkbox-group v-model="formL.freight">
                          <el-col :span="6"  v-for="(v,k) in freight"  :key="k">
                              <el-checkbox
                                      :label="v"
                                      name="freight"/>
                          </el-col>
                      </el-checkbox-group>
                  </el-form-item>
              </el-row>
              <el-row type="flex" align="middle">
                  <el-form-item label="增值类：">
                      <el-checkbox-group v-model="formL.increment">
                          <el-col :span="6"  v-for="(v,k) in increment"  :key="k">
                              <el-checkbox
                                      :label="v"
                                      name="increment"/>
                          </el-col>
                      </el-checkbox-group>
                  </el-form-item>
              </el-row>
              <el-row type="flex" align="middle">
                  <el-form-item label="事后折基数：">
                      <el-checkbox-group v-model="formL.after">
                          <el-col :span="6"  v-for="(v,k) in after"  :key="k">
                              <el-checkbox
                                      :label="v"
                                      name="after"/>
                          </el-col>
                      </el-checkbox-group>
                  </el-form-item>
              </el-row>
              <el-row>
                  <el-form-item label="价格版本" required>
                      <el-col :span="12">
                          <el-form-item prop="date1">
                              <el-date-picker type="datetime" placeholder="选择日期" v-model="formL.pirceEdition" style="width: 100%;"/>
                          </el-form-item>
                      </el-col>
                  </el-form-item>
              </el-row>
              <el-button type="primary" @click="submitForm('formL')">提交</el-button>
              <el-button @click="resetForm('formL')">重置</el-button>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="消息中心">
          <span slot="label"><i class="el-icon-bicycle"></i> 快递</span>
          快递
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>

</template>

<script>
// import { mapState } from "vuex";
// import All from "./comLife/All";
import {products as pros} from "./products"
export default {
  name: 'First',
  components: {
    //       :prop="'dynamicValidateForm.domains' + k + '.value'"
  },
  props: {
    //  msg: String
  },
  data() {
    return {
        pros,
        dynamicValidateForm: {
            domains: [],
        },


        products: [{'name':'重客入户'},{'name':'360快递'}],//产品列表
        show:false,//显示弹窗，true显示，false隐藏
        disType:['价格折扣','事后阶梯折','月发越送','运费梯度折'],//优惠类型
        freight:['精准卡航运费折扣','精准汽运运费折扣','重泡比基数','精准卡航首重折扣','精准卡航续重折扣','精准卡航续重最低费率','精准汽运首重折扣','精准汽运续重折扣','精准卡航续重最低费率1'],//运费类型
        increment:['三日退折扣','即日退折扣','保价费率折扣','包装费折扣','签收单原件返回折扣','接货费折扣','送货费折扣','零担返货费折扣','进仓派送费折扣','送货上楼折扣','大件上楼折扣','超重货操作折扣','是否单独报价'],//增值
        after:['零担事后折基数合并'],//事后折基数
        pirceEdition:"",
        formL: {
            proName:'',//输入的产品名称
            disType: [], // 优惠类型
            freight:[],//运费类型
            increment: [],//增值
            after: [],//事后折基数
            pirceEdition:"",//价格版本
        },

    }
  },
  computed: {
    // ...mapState(["activityData"])
  },
  created() {
      console.info("asdfasdfas",pros);
      pros.data.map((v,k)=>{
          // v.value="";
          // v.key=Date.now();
      })
      console.info("ppp",pros)
      this.dynamicValidateForm.domains = pros.data;
      console.info(this.dynamicValidateForm.domains)
  },
    mounted(){

    },
    updated(){

    },
  methods: {
      _autoSelect(obj,index) {
          let value = obj.value;
          obj.values.map((v,k)=>{
              if(v.value == value){//选中的
                  console.info("选中的",value)
                  v.wTrue.map((v1,k1)=>{
                      this.dynamicValidateForm.domains.map((v2,k2)=>{
                          console.info("放开置灰项",v1)
                          if(v2.en == v1){
                              let o = this.dynamicValidateForm.domains[k2]
                              o.value=""//清空值
                              o.isEnabled=true;//放开置灰
                              if(o.req == true){//如果是必输
                                  o.isReq = true//设置为必输
                              }else{
                                  o.isReq = false//取消必输
                              }
                          }
                      })
                  })
                  v.wFalse.map((v1,k1)=>{//循环需要置灰列表
                      this.dynamicValidateForm.domains.map((v2,k2)=>{
                          if(v2.en == v1){
                              let o = this.dynamicValidateForm.domains[k2]
                              o.value=""//清空值
                              o.isEnabled=false;//置灰
                              o.isReq = false//取消必输
                              console.info(this.$refs[v1])
                              this.$refs[v1][0].clearValidate()
                          }
                      })
                  })

              }

          })
    },
      _click() {
          this.show = true;
    },
      submitForm(){
          console.info(this.formL)
      },
      resetForm(formName){
          this.$refs[formName].resetFields();
      },
      submitForm1(formName) {
          this.$refs[formName].validate((valid) => {
              if (valid) {
                  console.info(this.dynamicValidateForm.domains)
              } else {
                  console.log('error submit!!');
                  return false;
              }
          });
      },
      resetForm1(formName) {
          this.$refs[formName].resetFields();
      },

  }

}
</script>

<style lang="less" scoped>
    .First {
        /deep/ .el-form-item__label{
            padding:0;
        }
    }
</style>
