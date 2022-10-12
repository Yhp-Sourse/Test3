<template>
    <div>
     <el-form id="ASEmergency" :model="ruleForm" :rules="rules" ref="Form" :label-position="top" >

        <div style="float:left;margin:5px 40px; ">
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
            <tbody>          
            <tr>
                <td>仪器名称</td>
                <td>仪器型号</td>
                <td>运行状况及处置情况</td>
            </tr>
            <tr>
                <td>气象五参数</td>
                <td><el-form-item label="" prop="QCtype"><input type="text" id="QCtype" v-model="ruleForm.QCtype"  style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="QCdetail"><textarea rows="5" id="QCdetail" v-model="ruleForm.QCdetail" ></textarea></el-form-item></td>
            </tr>
            <tr>
                <td>能见度仪器</td>
                <td><el-form-item label="" prop="NYtype"><input type="text" id="NYtype" v-model="ruleForm.NYtype"  style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="NYdetail"><textarea rows="5" id="NYdetail" v-model="ruleForm.NYdetail" ></textarea></el-form-item></td>
            </tr>
            <tr>
                <td>城市摄影系统</td>
                <td><el-form-item label="" prop="CStype"><input type="text" id="CStype" v-model="ruleForm.CStype"  style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="CSdetail"><textarea rows="5" id="CSdetail" v-model="ruleForm.CSdetail" ></textarea></el-form-item></td>
            </tr>
            <tr>
                <td>数采系统软硬件（含直联网）</td>
                <td><el-form-item label="" prop="SCtype"><input type="text" id="SCtype" v-model="ruleForm.SCtype"  style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="SCdetail"><textarea rows="5" id="SCdetail" v-model="ruleForm.SCdetail" ></textarea></el-form-item></td>
            </tr>
            <tr>
                <td>稳压电源</td>
                <td><el-form-item label="" prop="WYtype"><input type="text" id="WYtype" v-model="ruleForm.WYtype"  style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="WYdetail"><textarea rows="5" id="WYdetail" v-model="ruleForm.WYdetail" ></textarea></el-form-item></td>
            </tr>
            <tr>
                <td>空调</td>
                <td><el-form-item label="" prop="KTtype"><input type="text" id="KTtype"  v-model="ruleForm.KTtype" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="KTdetail"><textarea rows="5" id="KTdetail" v-model="ruleForm.KTdetail" ></textarea></el-form-item></td>
            </tr>
            <tr>
                <td>VPN设备</td>
                <td><el-form-item label="" prop="VDtype"><input type="text" id="VDtype"  v-model="ruleForm.VDtype" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="VDdetail"><textarea rows="5" id="VDdetail" v-model="ruleForm.VDdetail" ></textarea></el-form-item></td>
            </tr>
            <tr>
                <td>监控系统</td>
                <td><el-form-item label="" prop="JKtype"><input type="text" id="JKtype" v-model="ruleForm.JKtype"  style="height: 30px;"></el-form-item></td>
                <td>  回放上次到本次巡检期间的监控录像，查看有无异常情况
                    <br/>正常：口
                    <br/>异常：<el-form-item label="" prop="JKdetail"><textarea rows="5" id="JKdetail" v-model="ruleForm.JKdetail" style="border:none;border-bottom: 1px solid;"></textarea></el-form-item></td>
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
                "QCtype": "",
                "QCdetail": "",
                "NYtype": "",
                "NYdetail": "",
                "CStype": "",
                "CSdetail": "",
                "SCtype": "",
                "SCdetail": "",
                "WYtype": "",
                "WYdetail": "",
                "JKtype": "",
                "JKdetail": "",
                "KTtype": "",
                "KTdetail": "",
                "VDtype": "",
                "VDdetail": "",
                "yj_1": "",
                "yj_2": "",
            },

            rules: {
                "QCtype":  [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "QCdetail":  [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "NYtype":  [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "NYdetail":  [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "CStype":  [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "CSdetail":  [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "SCtype":  [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "SCdetail":  [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "WYtype":  [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "WYdetail":  [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "JKtype":  [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "JKdetail":  [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "KTtype":  [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "KTdetail":  [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "VDtype":  [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "VDdetail":  [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "yj_1":  [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "yj_2":  [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            },
        }
    },
    // computed: {
    //     formSubmitData: function () {
    //         return this.$emit("formSubmit",this.Qs.stringify(this.ruleForm));
    //     }
    // },
    watch:{
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