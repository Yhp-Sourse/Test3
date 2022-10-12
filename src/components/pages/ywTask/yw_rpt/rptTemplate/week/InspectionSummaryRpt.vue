<template>
    <div>
        <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="mini">
            <table class="rpt">
            <tbody>
            <tr >
              <td colspan="4">
                <div style="float:left;margin:5px 10px; " >
                   巡检时间：
                   <el-date-picker v-model="ruleForm.yj_1" type="date" value-format="yyyy-MM-dd"  placeholder="选择时间" :clearable=false></el-date-picker>
                    &nbsp; &nbsp; &nbsp; 
                    <!-- 巡检结束时间：
                   <el-date-picker v-model="ruleForm.yj_2" type="date" value-format="yyyy-MM-dd"  placeholder="选择时间" :clearable=false></el-date-picker> -->
                </div>
              </td>
            </tr>

            <tr>
                <td>序号</td>
                <td class="center">巡查内容</td>
                <td>正    常 <br/>"√"</td>
                <td>异    常 <br/>"√"</td>
            </tr>

            <tr>
                <td></td>
                <td style="font-weight: bold"  class="center">站房外部及周边</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td class="sort">01</td>
                <td>点位周围环境变化情况</td>
                <td><input type="radio" v-model="ruleForm.Zc1" name="Zc1" value="1" checked="checked" id="E_Zc1" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zc1" name="Zc1" value="0" id="E_Zc1" style="height: 30px;"></td>
            </tr>
            <tr>
                <td class="sort">02</td>
                <td>点位周围安全隐患</td>
                <td><input type="radio" v-model="ruleForm.Zc2" name="Zc2" value="1" checked="checked" id="E_Zc2" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zc2" name="Zc2" value="0" id="E_Zc2" style="height: 30px;"></td>
            </tr>
            <tr>
                <td class="sort">03</td>
                <td>点位周围道路、供电线路、通讯线路、给排水设施完好或损坏状况</td>
                <td><input type="radio" v-model="ruleForm.Zc3" name="Zc3" value="1" checked="checked" id="E_Zc3" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zc3" name="Zc3" value="0" id="E_Zc3" style="height: 30px;"></td>
            </tr>
            <tr>
                <td class="sort">04</td>
                <td>站房外围的防护栏、隔离带有无损坏情况</td>
                <td><input type="radio" v-model="ruleForm.Zc4" name="Zc4" value="1" checked="checked" id="E_Zc4" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zc4" name="Zc4" value="0" id="E_Zc4" style="height: 30px;"></td>
            </tr> 
            <tr>
                <td class="sort">05</td>
                <td>视频监控、城市摄影系统是否正常</td>
                <td><input type="radio" v-model="ruleForm.Zc5" name="Zc5" value="1" checked="checked" id="E_Zc5" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zc5" name="Zc5" value="0" id="E_Zc5" style="height: 30px;"></td>
            </tr>
            <tr>
                <td class="sort">06</td>
                <td>周围树木是否需要修剪</td>
                <td><input type="radio" v-model="ruleForm.Zc6" name="Zc6" value="1" checked="checked" id="E_Zc6" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zc6" name="Zc6" value="0" id="E_Zc6" style="height: 30px;"></td>
            </tr>
            <tr>
                <td class="sort">07</td>
                <td>站房防雷接地是否完好</td>
                <td><input type="radio" v-model="ruleForm.Zc7" name="Zc7" value="1" checked="checked" id="E_Zc7" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zc7" name="Zc7" value="0" id="E_Zc7" style="height: 30px;"></td>
            </tr>
            <tr>
                <td class="sort">08</td>
                <td>站房屋顶是否完好，有无漏雨</td>
                <td><input type="radio" v-model="ruleForm.Zc8" name="Zc8" value="1" checked="checked" id="E_Zc8" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zc8" name="Zc8" value="0" id="E_Zc8" style="height: 30px;"></td>
            </tr>
            <tr>
                <td></td>
                <td style="font-weight: bold" class="center">站房内部</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td class="sort">01</td>
                <td>站房内部的供电、通讯是否畅通;线路、管路是否规整;</td>
                <td><input type="radio" v-model="ruleForm.Zn1" name="Zn1" value="1" checked="checked" id="E_Zn1" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zn1" name="Zn1" value="0" id="E_Zn1" style="height: 30px;"></td>
            </tr>
            <tr>
                <td class="sort">02</td>
                <td>检查空调压缩机和空压机排水、供暖设施、室内外空调机工作是否正常；室内空调有无漏水、滤网是否清洁；</td>
                <td><input type="radio" v-model="ruleForm.Zn2" name="Zn2" value="1" checked="checked" id="E_Zn2" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zn2" name="Zn2" value="0" id="E_Zn2" style="height: 30px;"></td>
            </tr>
            <tr>
                <td class="sort">03</td>
                <td>站房内有无气泵产生的异常噪声、有无异常气味，气态废气是否排除室外；</td>
                <td><input type="radio" v-model="ruleForm.Zn3" name="Zn3" value="1" checked="checked" id="E_Zn3" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zn3" name="Zn3" value="0" id="E_Zn3" style="height: 30px;"></td>
            </tr>
            <tr>
                <td class="sort">04</td>
                <td>站房内部消防、照明、强弱电和接地是否正常</td>
                <td><input type="radio" v-model="ruleForm.Zn4" name="Zn4" value="1" checked="checked" id="E_Zn4" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zn4" name="Zn4" value="0" id="E_Zn4" style="height: 30px;"></td>
            </tr>
            <tr>
                <td class="sort">05</td>
                <td>站房内温度25±5℃、相对湿度保持在80%RH以下，是否符合要求</td>
                <td><input type="radio" v-model="ruleForm.Zn5" name="Zn5" value="1" checked="checked" id="E_Zn5" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zn5" name="Zn5" value="0" id="E_Zn5" style="height: 30px;"></td>
            </tr> 
            <tr>
                <td class="sort">06</td>
                <td>站房排风扇、气体采样总管采样风机、仪器散热风机工作是否正常</td>
                <td><input type="radio" v-model="ruleForm.Zn6" name="Zn6" value="1" checked="checked" id="E_Zn6" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zn6" name="Zn6" value="0" id="E_Zn6" style="height: 30px;"></td>
            </tr>
            <tr>
                <td class="sort">07</td>
                <td>气体采样总管温控仪温度是否控制在在30-50℃，总管及支管是否干净，有无因室外温差产生冷凝水，支管是否有保温套管，长度是否在3米以内；</td>
                <td><input type="radio" v-model="ruleForm.Zn7" name="Zn7" value="1" checked="checked" id="E_Zn7" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zn7" name="Zn7" value="0" id="E_Zn7" style="height: 30px;"></td>
            </tr>
            <tr>
                <td class="sort">08</td>
                <td>稳压电源参数是否正常;各电源插头、线板工作是否正常；</td>
                <td><input type="radio" v-model="ruleForm.Zn8" name="Zn8" value="1" checked="checked" id="E_Zn8" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zn8" name="Zn8" value="0" id="E_Zn8" style="height: 30px;"></td>
            </tr>
            <!-- <tr>
                <td class="sort">09</td>
                <td>各电源插头、线板工作是否正常</td>
                <td><input type="radio" v-model="ruleForm.Zn9" name="Zn9" value="1" checked="checked" id="E_Zn9" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zn9" name="Zn9" value="0" id="E_Zn9" style="height: 30px;"></td>
            </tr> -->
            <tr>
                <td class="sort">09</td>
                <td>检查颗粒物采样头、切割器是否清洁、及时清洗，清理雨水瓶积水、杂物；</td>
                <td><input type="radio" v-model="ruleForm.Zn10" name="Zn10" value="1" checked="checked" id="E_Zn10" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zn10" name="Zn10" value="0" id="E_Zn10" style="height: 30px;"></td>
            </tr>
            <tr>
                <td class="sort">10</td>
                <td>检查/更换干燥剂,蓝色剩1/3~1/4时及时更换；</td>
                <td><input type="radio" v-model="ruleForm.Zn12" name="Zn12" value="1" checked="checked" id="E_Zn12" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zn12" name="Zn12" value="0" id="E_Zn12" style="height: 30px;"></td>
            </tr>
            
            <tr>
                <td class="sort">11</td>
                <td>检查钢瓶气减压阀压力指示情况;检查灭火器压力指针是否在绿色区域；</td>
                <td><input type="radio" v-model="ruleForm.Zn13" name="Zn13" value="1" checked="checked" id="E_Zn13" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zn13" name="Zn13" value="0" id="E_Zn13" style="height: 30px;"></td>
            </tr>
            <tr>
                <td class="sort">12</td>
                <td>检查颗粒物采样斑点是否分布均匀、圆滑完整、无毛刺穿孔、拖尾等；</td>
                <td><input type="radio" v-model="ruleForm.Zn11" name="Zn11" value="1" checked="checked" id="E_Zn11" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zn11" name="Zn11" value="0" id="E_Zn11" style="height: 30px;"></td>
            </tr>
            <tr>
                <td class="sort">13</td>
                <td>检查颗粒物采样纸带是否用尽或滤膜负载是否超过60%，及时更换</td>
                <td><input type="radio" v-model="ruleForm.Zn14" name="Zn14" value="1" checked="checked" id="E_Zn14" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zn14" name="Zn14" value="0" id="E_Zn14" style="height: 30px;"></td>
            </tr>
            <tr>
                <td class="sort">14</td>
                <td>检查振荡天平法仪器气水分离器是否有积水，必要时进行清理</td>
                <td><input type="radio" v-model="ruleForm.Zn15" name="Zn15" value="1" checked="checked" id="E_Zn15" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zn15" name="Zn15" value="0" id="E_Zn15" style="height: 30px;"></td>
            </tr>
            <tr>
                <td class="sort">15</td>
                <td>站房内外环境卫生是否清洁，站房地面、机柜是否干净，有无明显灰尘；物品摆放是否整齐，有无和本监测站无关的设备及杂物，如纸箱和废旧钢瓶气等，及时清理;</td>
                <td><input type="radio" v-model="ruleForm.Zn16" name="Zn16" value="1" checked="checked" id="E_Zn16" style="height: 30px;"></td>
                <td><input type="radio" v-model="ruleForm.Zn16" name="Zn16" value="0" id="E_Zn16" style="height: 30px;"></td>
            </tr>
            <tr>
                <td colspan="4" style="text-align: left">
                    异常情况及处理说明：
                    <textarea id="E_Remarks" v-model="ruleForm.remark" name="Remarks" style="width: 99%; height: 50px; margin-top: 5px"></textarea>
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
                "Zc1": "1",
                "Zc2": "1",
                "Zc3": "1",
                "Zc4": "1",
                "Zc5": "1",
                "Zc6": "1",
                "Zc7": "1",
                "Zc8": "1",
                "Zn1": "1",
                "Zn2": "1",
                "Zn3": "1",
                "Zn4": "1",
                "Zn5": "1",
                "Zn6": "1",
                "Zn7": "1",
                "Zn8": "1",
                "Zn9": "1",
                "Zn10": "1",
                "Zn11": "1",
                "Zn12": "1",
                "Zn13": "1",
                "Zn14": "1",
                "Zn15": "1",
                "Zn16": "1",
                "remark": "",
                "yj_1": "",
                "yj_2": "",
                "InspectionSTime": "",
                "InspectionETime": "",
            },
        }
    },
    
    watch:{
        btnType(val,oldVal){
            if(val=='保存'){
                this.$emit("formSava",JSON.stringify(this.ruleForm));
            }
            if(val=='提交'){
                this.$emit("formSubmit",JSON.stringify(this.ruleForm));
            }
        },
        formData(val,oldVal){
            if(val.content!=null){
                this.ruleForm=JSON.parse(val.content);
            }
        }
    },
    created(){
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

        getRptContent() {
            var data='{';
            var fele=formDIRR.elements;
            for(var i=0;i<fele.length;i++){
                var e=fele[i];
                debugger
                if(e.type=="radio" && e.checked){
                    data+='"' + e.id + '":"' + e.value + '",'
                }
                if(e.type=="textarea" && e.value!=""){
                    data+='"' + e.id + '":"' + e.value + '",'
                }
            }
            data=data.substring(0,data.length-2);//去掉最后一个逗号
            data +='}';
            this.dataContent= data;
        }
    },
}
</script>
<style scoped>
    #DailyInspectionRecordRpt {
        width: 90%;
        margin: 10px auto;
    }

    table {
        font-size: 16px;
        width: 100%;
        border-collapse:collapse;
        border:1px solid black;
    }

    #DailyInspectionRecordRpt h2 {
        text-align: center;
        margin-bottom: 10px;
    }

    .center{
        text-align: center !important;
    }

    .rpt {
        text-align: center;
        border: 0.5px solid #AAAAAA;
    }

        .rpt tr td {
            border-top: 0.5px solid #AAAAAA;
            border-right: 0.5px solid #AAAAAA;
            padding: 5px;
        }

            .rpt tr td:first-child {
                width: 40px;
            }

            .rpt tr td:nth-child(2) {
                text-align: left;
                width: 75%;
            }

    input[type=text], .easyui-datetimebox {
        width: 150px;
    }

    button {
        width: 150px;
    }

    .height30 {
        height: 30px !important;
    }
</style>