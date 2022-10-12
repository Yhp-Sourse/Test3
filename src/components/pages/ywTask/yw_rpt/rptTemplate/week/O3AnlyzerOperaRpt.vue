<template>
    <div>
    <el-form id="ASEmergency" :model="ruleForm" :rules="rules" ref="Form" :label-position="top" >
        <table id="tb2" style="">
            <tbody>
            <tr >
                <td style="width: 200px;">
                    巡检时间：
                </td>     
                <td colspan="2">
                    <el-form-item label="" prop="yj_1">
                       <el-date-picker v-model="ruleForm.yj_1" type="date" value-format="yyyy-MM-dd"  placeholder="选择时间" :clearable=false></el-date-picker>
                   </el-form-item>
                </td>
                
                <!-- <td style="width: 200px;">
                    巡检结束时间：
                </td>
                <td colspan="2">
                    <el-form-item label="" prop="yj_2">
                       <el-date-picker v-model="ruleForm.yj_2" type="date" value-format="yyyy-MM-dd"  placeholder="选择时间" :clearable=false></el-date-picker>
                    </el-form-item>
                </td>                  -->
             </tr>



            <tr>
                <td style="width: 200px;"><span id="td_1">仪器型号</span></td>
                <td colspan="2"><el-form-item label="" prop="rc_1"><input type="text" v-model="ruleForm.rc_1" style="height: 30px;"></el-form-item></td>
                <td colspan="2"><span id="td_2">校准日期</span></td>
                <td><el-form-item label="" prop="sdateTime"><el-date-picker v-model="ruleForm.sdateTime" type="date" value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker></el-form-item></td>
            </tr>
            <tr>
                <td><span id="td_3">仪器编号</span></td>
                <td colspan="2"><el-form-item label="" prop="rc_3"><input type="text" value="" id="rc_3" v-model="ruleForm.rc_3" style="height: 30px;"></el-form-item></td>
                <td colspan="2"><span id="td_4">使用满量程（PPM）</span></td>
                <td><el-form-item label="" prop="rc_4"><input type="text" value="" id="rc_4" v-model="ruleForm.rc_4" style="height: 30px;"></el-form-item></td>
            </tr>
            <tr>
                <td><span id="td_5">标气瓶编号</span></td>
                <td colspan="2"><el-form-item label="" prop="rc_5"><input type="text" value="" id="rc_5" v-model="ruleForm.rc_5"  style="height: 30px;"></el-form-item></td>
                <td rowspan="2" colspan="2"><span id="td_6">标气瓶浓度（PPM）</span></td>
                <td rowspan="2"><el-form-item label="" prop="rc_6"><input type="text" value="" id="rc_6" v-model="ruleForm.rc_6"  style="height: 30px;"></el-form-item></td>
            </tr>
            <tr>
                <td><span id="td_7">标气瓶压力（MPa）</span></td>
                <td colspan="2"><el-form-item label="" prop="rc_7"><input type="text" value="" id="rc_7" @blur='checkKeydown("rc_7",1)' v-model="ruleForm.rc_7"  style="height: 30px;"></el-form-item></td>
            </tr>
            <tr>
                <td rowspan="2"><span id="td_8">校准点</span></td>
                <td rowspan="2"><span id="td_9">开始时间</span></td>
                <td rowspan="2"><span id="td_10">结束时间</span></td>
                <td rowspan="2"><span id="td_11">标准浓度（PPM）</span></td>
            </tr>
            <tr>
                <td><span id="td_14">响应浓度（PPM）</span></td>
                <td><span id="td_15">校准后浓度（PPM）</span></td>
            </tr>
            <tr>
                <td><span id="td_16">零点</span></td>
                <td><el-form-item label="" prop="rc_8"><el-time-picker v-model="ruleForm.rc_8"  format="HH:mm" value-format="HH:mm" placeholder="选择时间" id="rc_8" ></el-time-picker></el-form-item></td>
                <td><el-form-item label="" prop="rc_9"><el-time-picker v-model="ruleForm.rc_9"   format="HH:mm" value-format="HH:mm"  placeholder="选择时间" id="rc_9"></el-time-picker></el-form-item></td>
                <td><el-form-item label="" prop="rc_10"><input v-model="ruleForm.rc_10"  id="rc_10" type="text" value="" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="rc_11"><input v-model="ruleForm.rc_11" @blur='checkKeydown("rc_11",3)' id="rc_11" type="text" value="" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="rc_12"><input v-model="ruleForm.rc_12"  id="rc_12" type="text" value="" style="height: 30px;"></el-form-item></td>
            </tr>
            <tr>
                <td><span id="td_17">满量程的80%</span></td>
                <td><el-form-item label="" prop="rc_13"><el-time-picker v-model="ruleForm.rc_13" value-format="HH:mm" format="HH:mm"  placeholder="选择时间" id="rc_13"></el-time-picker></el-form-item></td>
                <td><el-form-item label="" prop="rc_14"><el-time-picker v-model="ruleForm.rc_14" value-format="HH:mm" format="HH:mm" placeholder="选择时间" d="rc_14"></el-time-picker></el-form-item></td>
                <td><el-form-item label="" prop="rc_15"><input v-model="ruleForm.rc_15"  id="rc_15" type="text" value="" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="rc_16"><input v-model="ruleForm.rc_16" @blur='checkKeydown("rc_16",3)' id="rc_16" type="text" value="" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="rc_17"><input v-model="ruleForm.rc_17"  id="rc_17" type="text" value="" style="height: 30px;"></el-form-item></td>
            </tr>
            <tr>
                <td><span id="td_18">零点漂移（PPM）</span></td>
                <td colspan="5"><el-form-item label="" prop="rc_18"><input id="rc_18" @blur='checkKeydown("rc_18",3)' v-model="ruleForm.rc_18"  type="text" value="" style="height: 30px;"></el-form-item></td>
            </tr>
            <tr>
                <td><span id="td_19">跨度漂移（%）</span></td>
                <td colspan="5"><el-form-item label="" prop="rc_19"><input id="rc_19" @blur='checkKeydown("rc_19",2)' v-model="ruleForm.rc_19"  type="text" value="" style="height: 30px;"></el-form-item></td>
            </tr>
            <tr>
                <td><span id="td_20">检查项目</span></td>
                <td colspan="2"><span id="td_21">参考范围</span></td>
                <td><span id="td_22">检查值</span></td>
                <td colspan="2"><span id="td_23">异常时处理记录</span></td>
            </tr>
            <!-- start -->
            <tr>
                <td><span id="td_24">测量信号(测量电压)</span></td>
                <td colspan="2"><span id="td_25">2500～4800 mv(API)，1～4v(聚光)，2000～10000 mv(天虹)，300-3000mv（新先河）</span></td>
                <td><el-form-item label="" prop="rc_20"><input id="rc_20" type="text"  v-model="ruleForm.rc_20" value="" style="height: 30px;"></el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="rc_21"><input id="rc_21" v-model="ruleForm.rc_21"  type="text" value="" style="height: 30px;"></el-form-item></td>
            </tr>

            <tr>
                <td><span id="td_26">参比信号(参比电压)</span></td>
                <td colspan="2"><span id="td_27">2500～4800 mv(API)，1～4v(聚光)，2000～10000 mv(天虹)，300-3000mv（新先河）</span></td>
                <td><el-form-item label="" prop="rc_22"><input id="rc_22" type="text" v-model="ruleForm.rc_22"  value="" style="height: 30px;"></el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="rc_23"><input id="rc_23" v-model="ruleForm.rc_23"  type="text" value="" style="height: 30px;"></el-form-item></td>
            </tr>
            <tr>
                <td><span id="td_28">参比测</span></td>
                <td colspan="2"><span id="td_29">1.1～1.3(API)，1.1～1.3(聚光)，1.1-1.25（新先河），1.1-1.3（天虹）</span></td>
                <td><el-form-item label="" prop="rc_24"><input id="rc_24" type="text" v-model="ruleForm.rc_24"  value="" style="height: 30px;"></el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="rc_25"><input id="rc_25" v-model="ruleForm.rc_25"  type="text" value="" style="height: 30px;"></el-form-item></td>
            </tr>
            <tr>
                <td><span id="td_30">采样压力(样气压力)</span></td>
                <td colspan="2"><span id="td_31">环境压力±2In-Hg-A(API)，400～800 TORR(EC)，7～15PSIA(聚光)，250～1000mmHg(赛默飞)，50～105 kPa(天虹)，50-102Kpa（新先河）</span></td>
                <td><el-form-item label="" prop="rc_26"><input id="rc_26" type="text" v-model="ruleForm.rc_26"  value="" style="height: 30px;"></el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="rc_27"><input id="rc_27" v-model="ruleForm.rc_27"  type="text" value="" style="height: 30px;"></el-form-item></td>
            </tr>
            <tr>
                <td><span id="td_32">采样流量(试样流量/样气)</span></td>
                <td colspan="2"><span id="td_33">800±10% ml/min(API)，0.5～1.1 LPM(EC)，720～880SCCM(聚光)，0.350～1.500L/min(赛默飞)，400～1500ml/min(天虹)，1000±100ml/min（新先河）</span></td>
                <td><el-form-item label="" prop="rc_28"><input id="rc_28" type="text" v-model="ruleForm.rc_28"  value="" style="height: 30px;"></el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="rc_29"><input id="rc_29" v-model="ruleForm.rc_29"  type="text" value="" style="height: 30px;"></el-form-item></td>
            </tr>
            <tr>
                <td><span id="td_34">样品温度</span></td>
                <td colspan="2"><span id="td_35">48±4℃(API)，15～55℃(聚光)，8～47℃(赛默飞)48±1℃（新先河）</span></td>
                <td><el-form-item label="" prop="rc_30"><input id="rc_30" type="text" v-model="ruleForm.rc_30"  value="" style="height: 30px;"></el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="rc_31"><input id="rc_31" v-model="ruleForm.rc_31"  type="text" value="" style="height: 30px;"></el-form-item></td>
            </tr>
            <tr>
                <td><span id="td_36">光室温度(光学室温度/反应室温度)</span></td>
                <td colspan="2"><span id="td_37">48±2℃(API)，47～49℃(聚光)，380～500mV(ESA)，40～52℃(赛默飞)，35～55℃(天虹)，48±1℃（新先河）</span></td>
                <td><el-form-item label="" prop="rc_32"><input id="rc_32" type="text" v-model="ruleForm.rc_32"  value="" style="height: 30px;"></el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="rc_33"><input id="rc_33" v-model="ruleForm.rc_33"  type="text" value="" style="height: 30px;"></el-form-item></td>
            </tr>
            <tr id="tr8" style="display: table-row;">
                <td><span id="td_38">相关轮温度(GFC轮温度/调制盘温度)</span></td>
                <td colspan="2"><span id="td_39">68±2℃(API)，66～70℃(聚光)，68±10℃（新先河），35～65℃(天虹)</span></td>
                <td><el-form-item label="" prop="rc_34"><input id="rc_34" type="text" v-model="ruleForm.rc_34"  value="" style="height: 30px;"></el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="rc_35"><input id="rc_35" v-model="ruleForm.rc_35"  type="text" value="" style="height: 30px;"></el-form-item></td>
            </tr>
            <tr id="tr9" style="display: table-row;">
                <td><span id="td_40">斜率(Slope)</span></td>
                <td colspan="2"><span id="td_41">1±0.3(API)，0.85～1.15(聚光)，0.500～2.000(赛默飞)，0.5～2(天虹),0.7-1.3（新先河）</span></td>
                <td><el-form-item label="" prop="rc_36"><input id="rc_36" type="text" v-model="ruleForm.rc_36"  value="" style="height: 30px;"></el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="rc_37"><input id="rc_37" v-model="ruleForm.rc_37"  type="text" value="" style="height: 30px;"></el-form-item></td>
            </tr>
            <tr id="tr10" style="display: table-row;">
                <td><span id="td_42">截距(Offset)</span></td>
                <td colspan="2"><span id="td_43">0±0.3PPM(API)，-200～500(聚光)，＞-10.75(赛默飞)，-5 ～5 ppm(天虹)，-6.0-6.0umol/mol(新先河)</span></td>
                <td><el-form-item label="" prop="rc_38"><input id="rc_38" type="text" v-model="ruleForm.rc_38"  value="" style="height: 30px;"></el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="rc_39"><input id="rc_39" v-model="ruleForm.rc_39"  type="text" value="" style="height: 30px;"></el-form-item></td>
            </tr>


            <!-- end -->
            <tr>
                <td><span id="td_50">是否更换滤膜</span></td>
                <td colspan="2"><el-form-item label="" prop="rc_50"><input id="rc_50" v-model="ruleForm.rc_50"  type="text" value="" style="height: 30px;"></el-form-item></td>
                <td><el-form-item label="" prop="rc_51"><input id="rc_51" type="text" v-model="ruleForm.rc_51"  value="" style="height: 30px;"></el-form-item></td>
                <td colspan="2"><el-form-item label="" prop="rc_52"><input id="rc_52" v-model="ruleForm.rc_52"  type="text" value="" style="height: 30px;"></el-form-item></td>
            </tr>
            <tr>
                <td><span id="td_51">备注</span></td>
                <td colspan="5"><el-form-item label="" prop="rc_53"><input id="rc_53" v-model="ruleForm.rc_53"  type="text" value="" style="height: 30px;"></el-form-item></td>
            </tr>
        </tbody></table>
     </el-form>
    </div>
</template>
<script>
import changeNumber2 from '../../../../../../assets/JS/changeNumber2.js'


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
                "rc_1": "",
                "sdateTime": "",
                "rc_3": "",
                "rc_4": "",
                "rc_5": "",
                "rc_6": "",
                "rc_7": "",
                "rc_8": "",
                "rc_9": "",
                "rc_10": "0",
                "rc_11": "",
                "rc_12": "",
                "rc_13": "",
                "rc_14": "",
                "rc_15": "40",
                "rc_16": "",
                "rc_17": "",
                "rc_18": "",
                "rc_19": "",
                "rc_20": "",
                "rc_21": "",
                "rc_22": "",
                "rc_23": "",
                "rc_24": "",
                "rc_25": "",
                "rc_26": "",
                "rc_27": "",
                "rc_28": "",
                "rc_29": "",
                "rc_30": "",
                "rc_31": "",
                "rc_32": "",
                "rc_33": "",
                "rc_34": "",
                "rc_35": "",
                "rc_36": "",
                "rc_37": "",
                "rc_38": "",
                "rc_39": "",
                "rc_50": "",
                "rc_51": "",
                "rc_52": "",
                "rc_53": "",
                "yj_1": "",
                "yj_2": "",
            },

            rules: {
                 "rc_1": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "sdateTime": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_3": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_4": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_5": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_6": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_7": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_8": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_9": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_10":[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_11": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_12": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_13": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_14": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_15": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_16": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_17": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_18": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_19": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_20": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_21": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_22": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_23": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_24": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_25": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_26": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_27": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_28": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_29": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_30": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_31": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_32": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_33": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_34": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_35": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_36": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_37": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_38": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_39": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_50": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_51": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_52": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "rc_53": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "yj_1": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
                "yj_2": [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
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
          this.ruleForm.sdateTime=val;
        },
        btnType(val, oldVal) {
          this.$refs["Form"].validate((valid) => {
              debugger;
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
        checkKeydown(key,bl){
            this.ruleForm[key] = changeNumber2(this.ruleForm[key],bl);
        },
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
         this.$set(this.ruleForm, "sdateTime", currentDate);
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