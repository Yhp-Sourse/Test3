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
                <td>点位名称</td>
                <td><el-form-item label="" prop="DWname">
            <input v-model="ruleForm.DWname"  type="text" id="DWname" style="height: 30px;">
        </el-form-item></td>
                <td>审核日期</td>
                <td><el-form-item label="" prop="SDateTime">
            <el-date-picker v-model="ruleForm.SDateTime" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            </tr>
            <tr>
                <td>仪器型号及编号</td>
                <td><el-form-item label="" prop="id_code">
            <input v-model="ruleForm.id_code"  type="text" id="id_code" style="height: 30px;">
        </el-form-item></td>
                <td>室内温/湿度</td>
                <td><el-form-item label="" prop="id_wdsd">
            <input v-model="ruleForm.id_wdsd"  type="text" id="id_wdsd" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>审核时间</td>
                <td><el-form-item label="" prop="id_time">
                    <input v-model="ruleForm.id_time"  type="text" id="id_time" style="height: 30px;">
            <!-- <el-time-picker v-model="ruleForm.id_time"   format="HH:mm" value-format="HH:mm"  placeholder="选择时间" id="id_time"></el-time-picker> -->
        </el-form-item></td>
                <td>标气编号/浓度</td>
                <td><el-form-item label="" prop="id_nd">
            <input v-model="ruleForm.id_nd"  type="text" id="id_nd" style="height: 30px;">
        </el-form-item></td>
            </tr>
        </tbody></table>
        <table class="rpt">
            <tbody><tr>
                <td>审核过程</td>
                <td>10%F.S</td>
                <td>20%F.S</td>
                <td>40%F.S</td>
                <td>60%F.S.</td>
                <td>80%F.S.</td>
            </tr>
            <tr>
                <td>标准值（<span class="types">ppb</span>）</td>
                <td><el-form-item label="" prop="id_1">
            <input v-model="ruleForm.id_1"  type="text" id="id_1" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="id_2">
            <input v-model="ruleForm.id_2"  type="text" id="id_2" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="id_3">
            <input v-model="ruleForm.id_3"  type="text" id="id_3" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="id_4">
            <input v-model="ruleForm.id_4"  type="text" id="id_4" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="id_5">
            <input v-model="ruleForm.id_5"  type="text" id="id_5" style="height: 30px;">
        </el-form-item></td>
            </tr>

            <tr>
                <td>仪器响应值（<span class="types">ppb</span>）</td>
                <td><el-form-item label="" prop="id_6">
            <input v-model="ruleForm.id_6"  type="text" id="id_6" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="id_7">
            <input v-model="ruleForm.id_7"  type="text" id="id_7" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="id_8">
            <input v-model="ruleForm.id_8"  type="text" id="id_8" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="id_9">
            <input v-model="ruleForm.id_9"  type="text" id="id_9" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="id_10">
            <input v-model="ruleForm.id_10"  type="text" id="id_10" style="height: 30px;">
        </el-form-item></td>
            </tr>
           <tr>
                <td>仪器平均相对误差（%）</td>
                <td colspan="5"><el-form-item label="" prop="id_19">
            <input v-model="ruleForm.id_19"  type="text" id="id_19" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <!-- <tr>
                <td>仪器百分误差（%）</td>
                <td><input v-model="ruleForm.id_11"  type="text" id="id_11" style="height: 30px;"></td>
                <td><input v-model="ruleForm.id_12"  type="text" id="id_12" style="height: 30px;"></td>
                <td><input v-model="ruleForm.id_13"  type="text" id="id_13" style="height: 30px;"></td>
                <td><input v-model="ruleForm.id_14"  type="text" id="id_14" style="height: 30px;"></td>
                <td><input v-model="ruleForm.id_15"  type="text" id="id_15" style="height: 30px;"></td>
            </tr> -->
        </tbody></table>
        <table class="rpt" style="border-bottom: 0.5px solid #AAAAAA;">
            <tbody><tr>
                <td>多点校准曲线</td>
                <td>相关系数r</td>
                <td><el-form-item label="" prop="id_16">
            <input v-model="ruleForm.id_16"  type="text" id="id_16" style="height: 30px;">
        </el-form-item></td>
                <td>斜率a</td>
                <td><el-form-item label="" prop="id_17">
            <input v-model="ruleForm.id_17"  type="text" id="id_17" style="height: 30px;">
        </el-form-item></td>
                <td>截距b</td>
                <td><el-form-item label="" prop="id_18">
            <input v-model="ruleForm.id_18"  type="text" id="id_18" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>审核结果</td>
                <td colspan="6">
                    <!-- <span>仪器示值的平均相对误差：</span>
                    <input v-model="ruleForm.id_19"  type="text" id="id_19" style="height: 30px;">
                    <br/> -->
                    <el-form-item label="" prop="id_he">
                        <input v-model="ruleForm.id_he"  name="pass" type="radio" id="id_he" value="1" checked="checked" style="width:20px;height: 15px;">合格
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input v-model="ruleForm.id_he"  type="radio" name="pass" id="id_bhg" value="0" style="width:20px;height: 15px;">不合格
                    </el-form-item>
                </td>
            </tr>
            <tr>
                <td>备注</td>
                <td colspan="6" style="text-align:left;">
                    1.准确度审核时，仪器示值的平均相对误差应≤5%；<br>
                    2.仪器准确度测试，通入仪器用满量程10%、20%、40%、60%和80%的标气，
                    计算相关系数、斜率和截距。满足相关系数（r）＞0.999；0.95≤斜率（a）
                    ≤1.05；截距（b）＜满量程±1%。
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
                "DWname": "",
                "SDateTime": "",
                "id_code": "",
                "id_wdsd": "",
                "id_time": "",
                "id_nd": "",
                "id_1": "",
                "id_2": "",
                "id_3": "",
                "id_4": "",
                "id_5": "",
                "id_6": "",
                "id_7": "",
                "id_8": "",
                "id_9": "",
                "id_10": "",
                "id_11": "",
                "id_12": "",
                "id_13": "",
                "id_14": "",
                "id_15": "",
                "id_16": "",
                "id_17": "",
                "id_18": "",
                "id_19": "",
                "id_he": "",
                "id_bhg": "",
                "yj_1": "",
                "yj_2": "",
            },
          rules: {
            yj_1: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            yj_2: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DWname: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            SDateTime: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_code:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_wdsd:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_time:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_nd:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_1: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_2: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_3: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_4: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_5: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_6: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_7: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_8: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_9: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_10:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_11:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_12:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_13:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_14:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_15:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_16:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_17:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_18:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_19:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_he:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_bhg: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }]
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
         var currentDate =`${dyear}-${dmonth}-${ddate}`;

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