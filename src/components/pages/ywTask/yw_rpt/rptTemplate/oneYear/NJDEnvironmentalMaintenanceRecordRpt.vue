<template>
    <div>
        <el-form id="ASEmergency" :model="ruleForm" :rules="rules" ref="Form" :label-position="top" >
         <div style="float:left;margin:15px 45px; " >
             <el-row>
              <el-col :span="11">
                <el-form-item label="巡检时间：" prop="yj_1">
                  <el-date-picker v-model="ruleForm.yj_1" type="date" value-format="yyyy-MM-dd"  placeholder="选择时间" :clearable=false></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="2">
                  &nbsp; &nbsp; &nbsp;
              </el-col>
              <el-col :span="11">
                  <!-- <el-form-item label="巡检结束时间：" prop="yj_2">
                    <el-date-picker v-model="ruleForm.yj_2" type="date" value-format="yyyy-MM-dd"  placeholder="选择时间" :clearable=false></el-date-picker>
                  </el-form-item> -->
              </el-col>
          </el-row>
        </div>
        <table class="rpt">
            <tbody><tr>
                <td>仪器型号</td>
                <td><el-form-item label="" prop="Mo1">
            <input v-model="ruleForm.Mo1"  type="text" id="Mo1" style="height: 30px;">
        </el-form-item></td>
                <td>仪器编号</td>
                <td><el-form-item label="" prop="Mo2">
            <input v-model="ruleForm.Mo2"  type="text" id="Mo2" style="height: 30px;">
        </el-form-item></td>
                <td>校准日期</td>
                <td><el-form-item label="" prop="SDateTime">
            <el-date-picker v-model="ruleForm.SDateTime" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"   placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            </tr>
            <tr>
                <td>环境条件</td>
                <td class="tem" colspan="5">
                    温度（℃）:<el-form-item label="" prop="Mt1">
            <input v-model="ruleForm.Mt1"  type="text" id="Mt1" style="width:10%;height: 30px;">
        </el-form-item>
                    湿度（%）：<el-form-item label="" prop="Mt2">
            <input v-model="ruleForm.Mt2"  type="text" id="Mt2" style="width:10%;height: 30px;">
        </el-form-item>
                    大气压（Pa）：<el-form-item label="" prop="Mt3">
            <input v-model="ruleForm.Mt3"  type="text" id="Mt3" style="width:10%;height: 30px;"> 
        </el-form-item>
                    当前能见度值：<el-form-item label="" prop="Mt4">
            <input v-model="ruleForm.Mt4"  type="text" id="Mt4" style="width:10%;height: 30px;"> 
        </el-form-item>
                    其他：<el-form-item label="" prop="Mt5">
            <input v-model="ruleForm.Mt5"  type="text" id="Mt5" style="width:10%;height: 30px;">
        </el-form-item> </td>
            </tr><br/>
            <tr>
                <td rowspan="2">校验所用设备</td>
                <td>校准板型号</td>
                <td colspan="2">消光系数</td>
                <td colspan="2">不确定度</td>
            </tr>
            <tr>
                <td><el-form-item label="" prop="Mo3">
            <input v-model="ruleForm.Mo3"  type="text" id="Mo3" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="Mo4">
            <input v-model="ruleForm.Mo4"  type="text" id="Mo4" style="height: 30px;">
        </el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="Mo5">
            <input v-model="ruleForm.Mo5"  type="text" id="Mo5" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td rowspan="4">校准膜校验</td>
                <td>内容</td>
                <td>校验结果</td>
                <td>校准要求</td>
                <td>误差要求</td>
                <td>是否合格</td>
            </tr>
            <tr>
                <td>零点</td>
                <td><el-form-item label="" prop="Mo6">
            <input v-model="ruleForm.Mo6"  type="text" id="Mo6" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="Mo7">
            <input v-model="ruleForm.Mo7"  type="text" id="Mo7" style="height: 30px;">
        </el-form-item></td>
                <td rowspan="2">≤±10%</td>
                <td><el-form-item label="" prop="Mo8">
            <input v-model="ruleForm.Mo8"  type="text" id="Mo8" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>标点</td>
                <td><el-form-item label="" prop="Mo9">
           <input v-model="ruleForm.Mo9"  type="text" id="Mo9" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="Mo10">
            <input v-model="ruleForm.Mo10"  type="text" id="Mo10" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="Mo11">
            <input v-model="ruleForm.Mo11"  type="text" id="Mo11" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>允许偏差</td>
                <td colspan="4">≤±2%</td>
            </tr>
            <tr>
                <td>校验结论</td>
                <td colspan="5"><el-form-item label="" prop="Mo12">
            <input v-model="ruleForm.Mo12"  type="text" id="Mo12" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>备注</td>
                <td colspan="5"><el-form-item label="" prop="Mo13">
            <input v-model="ruleForm.Mo13"  type="text" id="Mo13" style="height: 30px;">
        </el-form-item></td>

            </tr>
            <tr>
                <td colspan="6" style="text-align:left;">注：如当前能见度小于10KM，或恶劣气象条件时，则视为不具备校准条件。</td>
            </tr>
        </tbody></table>
    </el-form>
    </div>
</template>
<script>
export default {
    props:{
        formData: Object,
        btnType: String,
    },
    components:{},
    data(){
        return{
            dataContent:'',
            ruleForm:{
                 "InspectionSTime": "",
                "InspectionETime": "",
                "Mo1": "",
                "Mo2": "",
                "SDateTime": "",
                "Mt1": "",
                "Mt2": "",
                "Mt3": "",
                "Mt4": "",
                "Mt5": "",
                "Mo3": "",
                "Mo4": "",
                "Mo5": "",
                "Mo6": "",
                "Mo7": "",
                "Mo8": "",
                "Mo9": "",
                "Mo10": "",
                "Mo11": "",
                "Mo12": "",
                "Mo13": "",
                "yj_1": "",
                "yj_2": "",
            },
          rules: {
            yj_1: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            yj_2: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            Mo1: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            Mo2: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            SDateTime: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            Mt1: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            Mt2: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            Mt3: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            Mt4: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            Mt5: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            Mo3: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            Mo4: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            Mo5: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            Mo6: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            Mo7: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            Mo8: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            Mo9: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            Mo10:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            Mo11:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            Mo12:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            Mo13:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
          },
        }
    },
    // computed: {
    //     formSubmitData: function () {
    //         return this.$emit("formSubmit",this.Qs.stringify(this.ruleForm));
    //     }
    // },
    watch:{
        'ruleForm.yj_1'(val,oldval){//键路径必须加上引号
          this.ruleForm.SDateTime=val;
        },
        btnType(val, oldVal) {
          this.$refs["Form"].validate((valid) => {
                if (valid) {
                    if (val == "保存") {
                      this.$emit("formSava", JSON.stringify(this.ruleForm));
                    }
                    if (val == "提交") {
                      this.$emit("formSubmit", JSON.stringify(this.ruleForm));
                    }
                }else {
                    this.$emit("reSet", "");
                    return false;
                }
          });
        },
        formData(val,oldVal){
            if(val.content!=null){
                this.ruleForm=JSON.parse(val.content);
              
            }
        }
    },
    mounted(){
      //this.getNowTime();
    },
    methods:{
          //初始化时间
       getNowTime() {
         var d = new Date();
         var dyear = d.getFullYear(); //得到年份
         var dmonth = d.getMonth(); //得到月份
         dmonth = dmonth + 1;
         dmonth = dmonth.toString().padStart(2, "0");
         var dTime= d.getTime();
         var dhour = d.getHours();
         dhour = dhour.toString().padStart(2, "0");   
         var dminutes = d.getMinutes();
         dminutes = dminutes.toString().padStart(2, "0");   
         var dseconds=d.getSeconds();
         dseconds = dseconds.toString().padStart(2, "0"); 
         var ddate = d.getDate(); //得到日期       
         ddate = ddate.toString().padStart(2, "0");     
         var dbeforedefaultDate = `${dyear}-${dmonth}-${ddate} ${dhour}:${dminutes}:${dseconds}`;
          var currentDate =  `${dyear}-${dmonth}-${ddate}`;

         //1个小时后
         var myDate =new Date();
         var myDateyear = myDate.getFullYear(); //得到年份
         var myDatemonth = myDate.getMonth(); //得到月份
         myDatemonth = myDatemonth + 1;
         myDatemonth = myDatemonth.toString().padStart(2, "0");
         var myDateTime= myDate.getTime();
         var hour = myDate.getHours()+1;
         hour = hour.toString().padStart(2, "0");   
         var minutes = myDate.getMinutes();
         minutes = minutes.toString().padStart(2, "0");   
         var seconds=myDate.getSeconds();
         seconds = seconds.toString().padStart(2, "0"); 
         var myDatedate = myDate.getDate(); //得到日期       
         myDatedate = myDatedate.toString().padStart(2, "0");     
         var afteOneHourDate = `${myDateyear}-${myDatemonth}-${myDatedate} ${hour}:${minutes}:${seconds}`;
         //运维任务统计
         this.$set(this.ruleForm, "yj_1", dbeforedefaultDate);     
         this.$set(this.ruleForm, "yj_2", afteOneHourDate);
         this.$set(this.ruleForm, "SDateTime", currentDate);
        },
    },
}
</script>
<style scoped>
    #main, table {
        width: 95%;
        margin: 10px auto;
        border-left: 1px solid #AAAAAA;
        border-bottom: 1px solid #AAAAAA;
    }

    #main {
        border: none;
    }

    td {
        border-top: 1px solid #AAAAAA;
        border-right: 1px solid #AAAAAA;
    }

    #tb1 tr td {
        padding: 5px;
        width: 24%;
        text-align: center;
    }

    #tb2 tr td {
        padding: 5px;
        width: 16%;
        text-align: center;
    }

    tr td input {
        width: 96%;
        margin: 2px;
    }

    .height30 {
        height: 30px !important;
    }
</style>