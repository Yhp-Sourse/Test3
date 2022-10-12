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

        <table id="topTable" style="border-bottom: none">
            <tbody><tr>
                <td>仪器型号</td>
                <td><el-form-item label="" prop="DeviceName">
            <input v-model="ruleForm.DeviceName"  type="text" id="DeviceName" style="height: 30px;">
        </el-form-item></td>
                <td>检查日期</td>
                <td><el-form-item label="" prop="SDateTime">
            <el-date-picker v-model="ruleForm.SDateTime" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            </tr>
            <tr>
                <td>仪器编号</td>
                <td><el-form-item label="" prop="DeviceNo">
            <input v-model="ruleForm.DeviceNo"  type="text" id="DeviceNo" style="height: 30px;">
        </el-form-item></td>
                <td id="tduse">使用量程（ppb）</td>
                <td><el-form-item label="" prop="UseRange">
            <input v-model="ruleForm.UseRange"  type="text" id="UseRange" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td id="td1">标气瓶编号及有效期</td>
                <td><el-form-item label="" prop="AirbottleNovalidity">
            <input v-model="ruleForm.AirbottleNovalidity"  type="text" id="AirbottleNovalidity" style="height: 30px;">
        </el-form-item></td>
                <td id="td2">标气浓度（ppm）</td>
                <td><el-form-item label="" prop="AirConcentration">
            <input v-model="ruleForm.AirConcentration"  type="text" id="AirConcentration" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>校准器型号/编号</td>
                <td><el-form-item label="" prop="CorretModelNo">
            <input v-model="ruleForm.CorretModelNo"  type="text" id="CorretModelNo" style="height: 30px;">
        </el-form-item></td>
                <td>零气源型号/编号</td>
                <td><el-form-item label="" prop="LqyModelNo">
            <input v-model="ruleForm.LqyModelNo"  type="text" id="LqyModelNo" style="height: 30px;">
        </el-form-item></td>
            </tr>
        </tbody></table>

        <table id="middleTable" style="border-bottom: none">
            <tbody><tr>
                <td rowspan="2">校准点（%）</td>
                <td rowspan="2">开始时间</td>
                <td rowspan="2">结束时间</td>
                <td rowspan="2">标准值（ppb）</td>
                <td colspan="3">仪器响应浓度（ppb）</td>
            </tr>
            <tr>
                <td>响应值</td>
                <td>备用记录1</td>
                <td>备用记录2</td>
            </tr>
            <tr>
                <td>零点</td>
                <td>
                    <el-form-item label="" prop="StartTime1">
            <el-time-picker v-model="ruleForm.StartTime1" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="StartTime1"></el-time-picker>
        </el-form-item>
                </td>
                <td>
                    <el-form-item label="" prop="EndTime1">
            <el-time-picker v-model="ruleForm.EndTime1" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="EndTime1"></el-time-picker> 
        </el-form-item>
                </td>
                <td><el-form-item label="" prop="AnC1">
            <input v-model="ruleForm.AnC1"  type="text" id="AnC1" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC2">
            <input v-model="ruleForm.AnC2"  type="text" id="AnC2" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC3">
            <input v-model="ruleForm.AnC3"  type="text" id="AnC3" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC4">
            <input v-model="ruleForm.AnC4"  type="text" id="AnC4" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>满量程的 10%</td>
                <td>
                    <el-form-item label="" prop="StartTime2">
           <el-time-picker v-model="ruleForm.StartTime2" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="StartTime2"></el-time-picker>
        </el-form-item>
                </td>
                <td>
                    <el-form-item label="" prop="EndTime2">
           <el-time-picker v-model="ruleForm.EndTime2" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="EndTime2"></el-time-picker>
        </el-form-item>
                </td>
                <td><el-form-item label="" prop="AnC5">
            <input v-model="ruleForm.AnC5"  type="text" id="AnC5" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC6">
            <input v-model="ruleForm.AnC6"  type="text" id="AnC6" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC7">
            <input v-model="ruleForm.AnC7"  type="text" id="AnC7" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC8">
            <input v-model="ruleForm.AnC8"  type="text" id="AnC8" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>满量程的 20%</td>
                <td><el-form-item label="" prop="StartTime3">
            <el-time-picker v-model="ruleForm.StartTime3" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="StartTime3"></el-time-picker> 
        </el-form-item>
                    
                </td>
                <td><el-form-item label="" prop="EndTime3">
            <el-time-picker v-model="ruleForm.EndTime3" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="EndTime3"></el-time-picker>
        </el-form-item>
                  
                </td>
                <td><el-form-item label="" prop="AnC9">
            <input v-model="ruleForm.AnC9"  type="text" id="AnC9" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC10">
            <input v-model="ruleForm.AnC10"  type="text" id="AnC10" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC11">
            <input v-model="ruleForm.AnC11"  type="text" id="AnC11" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC12">
            <input v-model="ruleForm.AnC12"  type="text" id="AnC12" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>满量程的 40%</td>
                <td>               
                   <el-form-item label="" prop="StartTime4">
            <el-time-picker v-model="ruleForm.StartTime4" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="StartTime4"></el-time-picker>
        </el-form-item> 
                </td>
                <td> <el-form-item label="" prop="EndTime4">
            <el-time-picker v-model="ruleForm.EndTime4" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="EndTime4"></el-time-picker>
        </el-form-item>                   
                   
                </td>
                <td><el-form-item label="" prop="AnC13">
            <input v-model="ruleForm.AnC13"  type="text" id="AnC13" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC14">
            <input v-model="ruleForm.AnC14"  type="text" id="AnC14" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC15">
            <input v-model="ruleForm.AnC15"  type="text" id="AnC15" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC16">
            <input v-model="ruleForm.AnC16"  type="text" id="AnC16" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>满量程的 60%</td>
                <td>
                    <el-form-item label="" prop="StartTime5">
            <el-time-picker v-model="ruleForm.StartTime5" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="StartTime5"></el-time-picker>  
        </el-form-item>  
                </td>
                <td><el-form-item label="" prop="EndTime5">
            <el-time-picker v-model="ruleForm.EndTime5" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="EndTime5"></el-time-picker> 
        </el-form-item>
                    
                </td>
                <td><el-form-item label="" prop="AnC17">
            <input v-model="ruleForm.AnC17"  type="text" id="AnC17" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC18">
            <input v-model="ruleForm.AnC18"  type="text" id="AnC18" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC19">
            <input v-model="ruleForm.AnC19"  type="text" id="AnC19" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC20">
            <input v-model="ruleForm.AnC20"  type="text" id="AnC20" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>满量程的 80%</td>
                <td><el-form-item label="" prop="StartTime6">
             <el-time-picker v-model="ruleForm.StartTime6" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="StartTime6"></el-time-picker> 
        </el-form-item>
                        
                </td>
                <td><el-form-item label="" prop="EndTime6">
            <el-time-picker v-model="ruleForm.EndTime6" value-format="HH:mm" format="HH:mm" placeholder="选择时间" id="EndTime6"></el-time-picker>
        </el-form-item>
                      
                </td>
                <td><el-form-item label="" prop="AnC21">
            <input v-model="ruleForm.AnC21"  type="text" id="AnC21" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC22">
            <input v-model="ruleForm.AnC22"  type="text" id="AnC22" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC23">
            <input v-model="ruleForm.AnC23"  type="text" id="AnC23" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="AnC24">
            <input v-model="ruleForm.AnC24"  type="text" id="AnC24" style="height: 30px;">
        </el-form-item></td>
            </tr>
        </tbody></table>
        <table id="bottomTable">
            <tbody><tr>
                <td>多点线性校准结果</td>
                <td>斜率a：<el-form-item label="" prop="Slope">
            <input v-model="ruleForm.Slope"  type="text" id="Slope" style="height: 30px;">
        </el-form-item></td>
                <td>截距b：<el-form-item label="" prop="Intercept">
            <input v-model="ruleForm.Intercept"  type="text" id="Intercept" style="height: 30px;">
        </el-form-item></td>
                <td>相关系数r：<el-form-item label="" prop="Coefficient">
            <input v-model="ruleForm.Coefficient"  type="text" id="Coefficient" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>

                <td colspan="4" style="text-align: left;">
                    注 1：对所获校准曲线的检验指标应符合以下要求：相关系数（r）&gt;0.999；0.95≤斜率（a）≤1.05；截距（b）≤满量程±1%；<br/>
                    注 2：若其中任何一项不满足指标要求，则需对监测分析仪器重新进行调整后，再次进行多点校 准，直至取得满意的结果。
                </td>
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
                "DeviceName": "",
                "SDateTime": "",
                "DeviceNo": "",
                "UseRange": "",
                "AirbottleNovalidity": "",
                "AirConcentration": "",
                "CorretModelNo": "",
                "LqyModelNo": "",
                "StartTime1": "",
                "EndTime1": "",
                "AnC1": "",
                "AnC2": "",
                "AnC3": "",
                "AnC4": "",
                "StartTime2": "",
                "EndTime2": "",
                "AnC5": "",
                "AnC6": "",
                "AnC7": "",
                "AnC8": "",
                "StartTime3": "",
                "EndTime3": "",
                "AnC9": "",
                "AnC10": "",
                "AnC11": "",
                "AnC12": "",
                "StartTime4": "",
                "EndTime4": "",
                "AnC13": "",
                "AnC14": "",
                "AnC15": "",
                "AnC16": "",
                "StartTime5": "",
                "EndTime5": "",
                "AnC17": "",
                "AnC18": "",
                "AnC19": "",
                "AnC20": "",
                "StartTime6": "",
                "EndTime6": "",
                "AnC21": "",
                "AnC22": "",
                "AnC23": "",
                "AnC24": "",
                "Slope": "",
                "Intercept": "",
                "Coefficient": "",
                "yj_1": "",
                "yj_2": "",
            },
          rules: {
            yj_1: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            yj_2: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceName: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            SDateTime: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceNo: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            UseRange: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AirbottleNovalidity: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AirConcentration: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            CorretModelNo: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            LqyModelNo: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            StartTime1: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            EndTime1: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC1: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC2: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC3: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC4: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            StartTime2: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            EndTime2: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC5: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC6: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC7: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC8: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            StartTime3: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            EndTime3: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC9: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC10:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC11:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC12:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            StartTime4: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            EndTime4: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC13: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC14: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC15: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC16: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            StartTime5: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            EndTime5: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC17: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC18: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC19: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC20: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            StartTime6: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            EndTime6: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC21: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC22: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC23: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            AnC24: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            Slope: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            Intercept: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            Coefficient: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }]
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