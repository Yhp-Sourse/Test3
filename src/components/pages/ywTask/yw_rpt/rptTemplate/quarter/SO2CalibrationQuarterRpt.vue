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
      <table id="topTable">     
        <tr>
          <td colspan="2">点位名称</td>
          <td><el-form-item label="" prop="rc_1">
            <input v-model="ruleForm.rc_1"  type="text" id="rc_1" style="height: 30px" />
        </el-form-item></td>
          <td colspan="2">审核日期</td>
          <td colspan="2"><el-form-item label="" prop="rc_2">
            <el-date-picker v-model="ruleForm.rc_2" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
        </tr>

        <tr>
          <td colspan="2">仪器型号及编号</td>
          <td><el-form-item label="" prop="rc_3">
            <input v-model="ruleForm.rc_3"  type="text" id="rc_3" style="height: 30px" />
        </el-form-item></td>
          <td colspan="2">室内温/湿度</td>
          <td colspan="2"><el-form-item label="" prop="rc_4">
            <input v-model="ruleForm.rc_4"  type="text" id="rc_4" style="height: 30px" />
        </el-form-item></td>
        </tr>
         
        <tr>
          <td colspan="2">审核时间</td>
          <td>
             <el-form-item label="" prop="rc_5">
              <input v-model="ruleForm.rc_5"  type="text" id="rc_5" style="height: 30px" />
              <!-- <el-time-picker v-model="ruleForm.rc_5"   format="HH:mm" value-format="HH:mm"  placeholder="选择时间" id="rc_5"></el-time-picker> -->
        </el-form-item>
          </td>
          <td colspan="2">标气编号/浓度</td>
          <td colspan="2"><el-form-item label="" prop="rc_6">
            <input v-model="ruleForm.rc_6"  type="text" id="rc_6" style="height: 30px" />
        </el-form-item></td>
        </tr>
      
        <tr>
          <td>通入仪器标气浓度</td>
          <td colspan="6"><el-form-item label="" prop="rc_7">
            <input v-model="ruleForm.rc_7"  type="text" id="rc_7" style="height: 30px" readonly/>
        </el-form-item></td>
        </tr>
         
        <tr>
            <td>仪器响应值(ppb)</td>
            <td><el-form-item label="" prop="rc_8">
            <input v-model="ruleForm.rc_8"  type="text" id="rc_8" style="height: 30px;">
        </el-form-item></td>
            <td><el-form-item label="" prop="rc_9">
            <input v-model="ruleForm.rc_9"  type="text" id="rc_9" style="height: 30px;">
        </el-form-item></td>
            <td><el-form-item label="" prop="rc_10">
            <input v-model="ruleForm.rc_10"  type="text" id="rc_10" style="height: 30px;">
        </el-form-item></td>
            <td><el-form-item label="" prop="rc_11">
            <input v-model="ruleForm.rc_11"  type="text" id="rc_11" style="height: 30px;">
        </el-form-item></td>
            <td><el-form-item label="" prop="rc_12">
            <input v-model="ruleForm.rc_12"  type="text" id="rc_12" style="height: 30px;">
        </el-form-item></td>
            <td><el-form-item label="" prop="rc_13">
            <input v-model="ruleForm.rc_13"  type="text" id="rc_13" style="height: 30px;">
        </el-form-item></td>
        </tr>
      
        <tr>
          <td>相对标准偏差（%）</td>
          <td colspan="6"><el-form-item label="" prop="rc_14">
            <input v-model="ruleForm.rc_14"  type="text" id="rc_14" style="height: 30px" />
        </el-form-item></td>
        </tr>

        <tr>
          <td>审核结果</td>  
           <td colspan="3"><el-form-item label="" prop="rc_15">
            <input v-model="ruleForm.rc_15"  type="radio" name="Consistency" value="1" id="rc_15" checked="checked" style="width:10%;height: 15px;">合格
        </el-form-item></td>
          <td colspan="3"><el-form-item label="" prop="rc_15">
            <input v-model="ruleForm.rc_15"  type="radio" name="Consistency" value="0" id="rc_16" style="width:10%;height: 15px;">不合格
        </el-form-item></td>        
        </tr>

        <tr>
          <td>备注</td>
          <td colspan="6" style="text-align:left;">
            1.精密度审核时，仪器示值的相对标准偏差应≤5%;<br/>
            2.仪器精密度审核时，现场仪器通入零气，待仪器示值达到零点附近时，通入仪器满量程20%的标气，待仪器读数稳定后，记录仪器示值，重复上述测试操作至少6次以上，计算出该仪器示值的相对标准偏差，来确定仪器的精密度。
          </td>
        </tr>

      </table>
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
                "rc_1": "",
                "rc_2": "",
                "rc_3": "",
                "rc_4": "",
                "rc_5": "",
                "rc_6": "",
                "rc_7": "20%F.S",
                "rc_8": "",
                "rc_9": "",
                "rc_10": "",
                "rc_11": "",
                "rc_12": "",
                "rc_13": "",
                "rc_14": "",
                "rc_15": "",
                "rc_16": "",
                "yj_1": "",
                "yj_2": "",
                "rc_05":"",
            },
          rules: {
            yj_1: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            yj_2: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_1: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_2: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_3: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_4: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_5: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_6: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_7: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_8: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_9: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_10:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_11:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_12:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_13:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_14:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_15:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_16:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_05:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
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
          this.ruleForm.rc_2=val;
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
          this.$set(this.ruleForm, "rc_2", currentDate);
        },
    },
}
</script>
<style scoped>
#main,
table {
  width: 95%;
  margin: 10px auto;
  border-left: 1px solid #aaaaaa;
  border-bottom: 1px solid #aaaaaa;
}

#main {
  border: none;
}

td {
  border-top: 1px solid #aaaaaa;
  border-right: 1px solid #aaaaaa;
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