<template>
    <div>
        <el-form id="ASEmergency" :model="ruleForm" :rules="rules" ref="Form" :label-position="top" >
         <div style="float:left;margin:10px 40px; " >
            <el-row>
                <el-col :span="11">
                    <el-form-item label="巡检时间：" prop="yj_1">
                    <el-date-picker v-model="ruleForm.yj_1" type="date" value-format="yyyy-MM-dd" placeholder="选择时间" :clearable=false></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="2">
                    &nbsp; &nbsp; &nbsp;
                </el-col>
                <el-col :span="11">
                    <!-- <el-form-item label="巡检结束时间：" prop="yj_2">
                        <el-date-picker v-model="ruleForm.yj_2" type="date" value-format="yyyy-MM-dd" placeholder="选择时间" :clearable=false></el-date-picker>
                    </el-form-item> -->
                </el-col>
            </el-row>
        </div>

        <table class="rpt">
            <tbody><tr>
                <td colspan="5">颗粒物监测仪资料</td>
            </tr>
            <tr>
                <td rowspan="2">仪器型号</td>
                <td rowspan="2">出厂编号</td>
                <td rowspan="2">监测项目</td>
                <td colspan="2">校准日期</td>
            </tr>
            <tr>
                <td>上一次</td>
                <td>下一次</td>
            </tr>
            <tr>
                <td><el-form-item label="" prop="id_1">
            <input v-model="ruleForm.id_1"  type="text" id="id_1" style="height: 30px;">
        </el-form-item></td>
                <td><el-form-item label="" prop="id_2">
            <input v-model="ruleForm.id_2"  type="text" id="id_2" style="height: 30px;">
        </el-form-item></td>
                <td><label id="param">PM<sub>10</sub></label></td>
                <td><el-form-item label="" prop="id_3">
            <el-date-picker v-model="ruleForm.id_3" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
                <td><el-form-item label="" prop="id_4">
            <el-date-picker v-model="ruleForm.id_4" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            </tr>
        </tbody></table>
        <table class="rpt" style="border-bottom: 0.5px solid #AAAAAA;">
            <tbody><tr>
                <td>输入滤纸重量，M（g）（K<sub>0</sub> 确认显示屏）</td>
                <td><el-form-item label="" prop="id_5">
            <input v-model="ruleForm.id_5"  type="text" id="id_5" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>没有滤纸的震荡频率，f<sub>o</sub>（赫兹）（K<sub>0</sub> 确认显示屏）</td>
                <td><el-form-item label="" prop="id_6">
            <input v-model="ruleForm.id_6"  type="text" id="id_6" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>带有滤纸的震荡频率，f<sub>1</sub>（赫兹）（K<sub>0</sub> 确认显示屏）</td>
                <td><el-form-item label="" prop="id_7">
            <input v-model="ruleForm.id_7"  type="text" id="id_7" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>天平的初始校准常数，K<sub>0</sub></td>
                <td><el-form-item label="" prop="id_8">
            <input v-model="ruleForm.id_8"  type="text" id="id_8" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>计算出的天平校准常数，K<sub>0</sub>'（K<sub>0</sub> 确认显示屏）</td>
                <td><el-form-item label="" prop="id_9">
            <input v-model="ruleForm.id_9"  type="text" id="id_9" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>校准常数的误差，（K<sub>0</sub>'-K<sub>0</sub>）/K<sub>0</sub>×100%（应≤2.5%）</td>
                <td><el-form-item label="" prop="id_10">
            <input v-model="ruleForm.id_10"  type="text" id="id_10" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>注：校准常数计算公式为：K'<sub>0</sub>=M/(1/f<sub>1</sub><sup>2</sup>-1/f<sub>0</sub><sup>2</sup>)</td>
                <td><el-form-item label="" prop="id_11">
            <input v-model="ruleForm.id_11"  type="text" id="id_11" style="height: 30px;">
        </el-form-item></td>
            </tr>
            <tr>
                <td>备注：</td>
                <td><el-form-item label="" prop="id_12">
            <input v-model="ruleForm.id_12"  type="text" id="id_12" style="height: 30px;">
        </el-form-item></td>
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
                "Calibrationer": "",
                "id_wd": "",
                "id_rh": "",
                "SDateTime": "",
                "id_begin": "",
                "id_end": "",
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
                "yj_1": "",
                "yj_2": "",
            },
          rules: {
            yj_1: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            yj_2: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            Calibrationer: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_wd: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_rh: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            SDateTime: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_begin: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_end: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
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
            id_12:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }]
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
        //  this.getNowTime();
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