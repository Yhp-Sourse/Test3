<template>
    <div id="v_deviceOnlineInfo">
        <el-container style="height: calc(100vh - 105px); border: 1px solid #eee">
            <!-- <el-aside width="250px">
                <treeSStation  :IsCheckBox='true' @checkedNodes="getSearchStations"></treeSStation>
            </el-aside> -->
            <el-container>
                <el-header>              
                    <div class="search">
                        <el-form :inline="true" class="demo-form-inline">
                            <el-form-item label="站点：" prop="chooseStationIds">
                                <rateCascader :checkStrictly='false' :selectOption='queryparam.chooseStationIds' @selectOptionEvent="selectOptionEvent"></rateCascader>
                            </el-form-item>
                            <el-form-item label="月份：">
                                <el-date-picker
                                    v-model="queryparam.Month"
                                    type="month"   
                                    :clearable=false                                          
                                    value-format="yyyy-MM"
                                    placeholder="请选择日期">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item class="btn">
                                <!-- {{queryparam}} -->
                                <!-- <el-button type="primary" icon="el-icon-search"  v-has="'ExportFormOfOneKey_handleSearch'" @click="getList();">查询</el-button>
                                <el-button type="primary" icon="el-icon-download" v-has="'ExportFormOfOneKey_handleExport'"  @click="handleExportWord();">导出</el-button> -->
                            </el-form-item>
                        </el-form>
                    </div>
                    <!-- <div class="tools"></div> -->
                </el-header>
                
                <el-main id="exportWord" v-if="queryparam.chooseStationIds!=null && queryparam.chooseStationIds!='' && queryparam.Month!=null && queryparam.Month!=''">
                    <div v-for="(item,index) in upfileArr" :key="index" >
                        <h3 v-text="index=='week1'?'第1周':''"></h3>
                        <h3 v-text="index=='week2'?'第2周':''"></h3>
                        <h3 v-text="index=='week3'?'第3周':''"></h3>
                        <h3 v-text="index=='week4'?'第4周':''"></h3>
                        <h3 v-text="index=='week5'?'第5周':''"></h3>
                        <h3 v-text="index=='month'?'月':''"></h3>
                        <h3 v-text="index=='towMonth'?'两月':''"></h3>
                        <h3 v-text="index=='quarter'?'季度':''"></h3>
                        <h3 v-text="index=='halfYear'?'半年':''"></h3>
                        <h3 v-text="index=='oneyear'?'年':''"></h3>
                        <h3 v-text="index=='other'?'其他':''"></h3>
                        <span v-for="(w,i) in item" :key="i" style="display: inline-block;">
                            <ExportFormUpload :filelist='w.isUpload?w.name:""' :formType='index' :isUpload='w.isUpload' :title='w.name' :CreatedTime='queryparam.Month' :BusinessType='w.reportCode' :BusinessId='w.week+w.reportCode' :SStation='queryparam.chooseStationIds' @uploadSuccess="uploadSuccess"  @handleuplodRemove="handleuplodRemove"/>
                        </span>
                    </div>
                   <!-- <ExportFormUpload :filelist='w.isUpload?[{name:w.name}]:[]' :limit="1" :Ismultiple="false" :BusinessId="modifyProblemForm.TaskChildNo" :BusinessType="39" @uploadSuccess="uploadSuccess"/> -->
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import treeSStation from '../common/treeSStation'
import rateCascader from '../common/rateCascader' //引入rateCascader组件
import ExportFormUpload from '../common/ExportFormUpload' //引入ExportFormUpload组件


export default {
    name:'v_deviceOnlineInfo',
    data() {
      return {  
        //运维单位绑定下拉框信息 
        CheckData:[],// [{sStation:'SS4301051'},{sStation:'SS4301051'}]
        fileListuplod:[],//上传的文件列表
        queryparam:{
            Month:'2021-11',
            chooseStationIds:'',
        },
        upfileArr:{
            week1:[{week:1,name:'环境空气质量自动监测子站日常巡检记录',reportCode:'010101',isUpload:false},{week:1,name:'SO<sub>2</sub>分析仪运行状况检查记录表',reportCode:'010102',isUpload:false},{week:1,name:'NO<sub>x</sub>分析仪运行状况检查记录表',reportCode:'010103',isUpload:false},{week:1,name:'O<sub>3</sub>分析仪运行状况检查记录表',reportCode:'010104',isUpload:false},{week:1,name:'CO分析仪运行状况检查记录表',reportCode:'010105',isUpload:false},{week:1,name:'颗粒物分析仪PM<sub>10</sub>运行状况检查记录表',reportCode:'010106',isUpload:false},{week:1,name:'颗粒物分析仪PM<sub>2.5</sub>运行状况检查记录表',reportCode:'010107',isUpload:false},{week:1,name:'其他仪器、设备运行状况检查记录',reportCode:'010108',isUpload:false}],
            week2:[{week:2,name:'环境空气质量自动监测子站日常巡检记录',reportCode:'010101',isUpload:false},{week:2,name:'SO<sub>2</sub>分析仪运行状况检查记录表',reportCode:'010102',isUpload:false},{week:2,name:'NO<sub>x</sub>分析仪运行状况检查记录表',reportCode:'010103',isUpload:false},{week:2,name:'O<sub>3</sub>分析仪运行状况检查记录表',reportCode:'010104',isUpload:false},{week:2,name:'CO分析仪运行状况检查记录表',reportCode:'010105',isUpload:false},{week:2,name:'颗粒物分析仪PM<sub>10</sub>运行状况检查记录表',reportCode:'010106',isUpload:false},{week:2,name:'颗粒物分析仪PM<sub>2.5</sub>运行状况检查记录表',reportCode:'010107',isUpload:false},{week:2,name:'其他仪器、设备运行状况检查记录',reportCode:'010108',isUpload:false}],
            week3:[{week:3,name:'环境空气质量自动监测子站日常巡检记录',reportCode:'010101',isUpload:false},{week:3,name:'SO<sub>2</sub>分析仪运行状况检查记录表',reportCode:'010102',isUpload:false},{week:3,name:'NO<sub>x</sub>分析仪运行状况检查记录表',reportCode:'010103',isUpload:false},{week:3,name:'O<sub>3</sub>分析仪运行状况检查记录表',reportCode:'010104',isUpload:false},{week:3,name:'CO分析仪运行状况检查记录表',reportCode:'010105',isUpload:false},{week:3,name:'颗粒物分析仪PM<sub>10</sub>运行状况检查记录表',reportCode:'010106',isUpload:false},{week:3,name:'颗粒物分析仪PM<sub>2.5</sub>运行状况检查记录表',reportCode:'010107',isUpload:false},{week:3,name:'其他仪器、设备运行状况检查记录',reportCode:'010108',isUpload:false}],
            week4:[{week:4,name:'环境空气质量自动监测子站日常巡检记录',reportCode:'010101',isUpload:false},{week:4,name:'SO<sub>2</sub>分析仪运行状况检查记录表',reportCode:'010102',isUpload:false},{week:4,name:'NO<sub>x</sub>分析仪运行状况检查记录表',reportCode:'010103',isUpload:false},{week:4,name:'O<sub>3</sub>分析仪运行状况检查记录表',reportCode:'010104',isUpload:false},{week:4,name:'CO分析仪运行状况检查记录表',reportCode:'010105',isUpload:false},{week:4,name:'颗粒物分析仪PM<sub>10</sub>运行状况检查记录表',reportCode:'010106',isUpload:false},{week:4,name:'颗粒物分析仪PM<sub>2.5</sub>运行状况检查记录表',reportCode:'010107',isUpload:false},{week:4,name:'其他仪器、设备运行状况检查记录',reportCode:'010108',isUpload:false}],
            week5:[{week:5,name:'环境空气质量自动监测子站日常巡检记录',reportCode:'010101',isUpload:false},{week:5,name:'SO<sub>2</sub>分析仪运行状况检查记录表',reportCode:'010102',isUpload:false},{week:5,name:'NO<sub>x</sub>分析仪运行状况检查记录表',reportCode:'010103',isUpload:false},{week:5,name:'O<sub>3</sub>分析仪运行状况检查记录表',reportCode:'010104',isUpload:false},{week:5,name:'CO分析仪运行状况检查记录表',reportCode:'010105',isUpload:false},{week:5,name:'颗粒物分析仪PM<sub>10</sub>运行状况检查记录表',reportCode:'010106',isUpload:false},{week:5,name:'颗粒物分析仪PM<sub>2.5</sub>运行状况检查记录表',reportCode:'010107',isUpload:false},{week:5,name:'其他仪器、设备运行状况检查记录',reportCode:'010108',isUpload:false}],
            month:[{isUpload:false,week:6,name:'颗粒物PM<sub>2.5</sub>监测仪流量测试与校准记录',reportCode:'010201'},{isUpload:false,week:6,name:'环境空气质量监测系统仪器维护记录',reportCode:'010202'},{isUpload:false,week:6,name:'标气使用与更换记录',reportCode:'010203'},{isUpload:false,week:6,name:'异常情况应急处置记录表',reportCode:'010204'},{isUpload:false,week:6,name:'颗粒物PM<sub>10</sub>监测仪流量测试与校准记录',reportCode:'010205'},{isUpload:false,week:6,name:'气体分析仪和动态校准仪流量检查记录',reportCode:'010206'},{isUpload:false,week:6,name:'PM<sub>10</sub>分析仪温湿度、气压和时钟检查校准',reportCode:'010207'},{isUpload:false,week:6,name:'PM<sub>2.5</sub>分析仪温湿度、气压和时钟检查校准',reportCode:'010208'}],
            towMonth:[{isUpload:false,week:7,name:'PM<sub>10</sub>分析仪温湿度、气压和时钟检查校准',reportCode:'010207'},{isUpload:false,week:7,name:'PM<sub>2.5</sub>分析仪温湿度、气压和时钟检查校准',reportCode:'010208'}],
            quarter:[{isUpload:false,week:8,name:'SO<sub>2</sub>分析仪多点校准记录',reportCode:'020101'},{isUpload:false,week:8,name:'NO<sub>x</sub>分析仪多点校准记录',reportCode:'020102'},{isUpload:false,week:8,name:'CO分析仪多点校准记录',reportCode:'020103'},{isUpload:false,week:8,name:'O<sub>3</sub>分析仪多点校准记录',reportCode:'020104'},{isUpload:false,week:8,name:'SO<sub>2</sub>分析仪精密度审核记录',reportCode:'020105'},{isUpload:false,week:8,name:'NO<sub>x</sub>分析仪精密度审核记录',reportCode:'020106'},{isUpload:false,week:8,name:'CO分析仪精密度审核记录',reportCode:'020107'},{isUpload:false,week:8,name:'O<sub>3</sub>分析仪精密度审核记录',reportCode:'020108'},{isUpload:false,week:8,name:'β射线法颗粒物PM<sub>2.5</sub>自动监测分析仪检查记录',reportCode:'020109'},{isUpload:false,week:8,name:'β射线法颗粒物PM<sub>10</sub>自动监测分析仪检查记录',reportCode:'020110'},{isUpload:false,week:8,name:'微量振荡天平法颗粒物PM<sub>10</sub>监测仪环境温度和压力校准表',reportCode:'020111'},{isUpload:false,week:8,name:'微量振荡天平法颗粒物PM<sub>2.5</sub>监测仪环境温度和压力校准表',reportCode:'020112'},{isUpload:false,week:8,name:'臭氧校准仪（工作标准）量值传递记录表',reportCode:'020113'}],
            halfYear:[{isUpload:false,week:9,name:'多气体动态校准仪校准检查记录表',reportCode:'020201'},{isUpload:false,week:9,name:'氮氧化物分析仪钼/碳炉转化率记录表',reportCode:'020202'},{isUpload:false,week:9,name:'环境空气质量监测系统维护记录',reportCode:'020204'}],
            oneyear:[{isUpload:false,week:10,name:'量值溯源与传递记录',reportCode:'020301'},{isUpload:false,week:10,name:'SO<sub>2</sub>分析仪准确度审核记录表',reportCode:'020302'},{isUpload:false,week:10,name:'NO<sub>x</sub>分析仪准确度审核记录表',reportCode:'020303'},{isUpload:false,week:10,name:'CO分析仪准确度审核记录表',reportCode:'020304'},{isUpload:false,week:10,name:'O<sub>3</sub>分析仪准确度审核记录表',reportCode:'020305'},{isUpload:false,week:10,name:'微量振荡天平法颗粒物PM<sub>10</sub>监测仪质量传感器校准表',reportCode:'020306'},{isUpload:false,week:10,name:'微量振荡天平法颗粒物PM<sub>2.5</sub>监测仪质量传感器校准表',reportCode:'020307'},{isUpload:false,week:10,name:'能见度监测系统维护记录',reportCode:'020308'},{isUpload:false,week:10,name:'颗粒物手工比对采样记录表',reportCode:'020309'},{isUpload:false,week:10,name:'颗粒物（PM<sub>10</sub>）手工比对记录表',reportCode:'020310'},{isUpload:false,week:10,name:'颗粒物（PM<sub>2.5</sub>）手工比对记录表',reportCode:'020311'},{isUpload:false,week:10,name:'空气自动监测仪器维护维修记录表',reportCode:'020312'},{isUpload:false,week:10,name:'环境空气质量自动监测仪器备机更换记录',reportCode:'020313'},{isUpload:false,week:10,name:'环境空气质量自动监测仪器耗品备件更换记录',reportCode:'020314'},{isUpload:false,week:10,name:'环境空气质量自动监测系统站点详细情况表',reportCode:'020315'}],
            other:[{isUpload:false,week:11,name:'环境空气质量自动监测仪器备机更换记录',reportCode:'020701'},{isUpload:false,week:11,name:'空气自动监测仪器维护维修记录表',reportCode:'020702'},{isUpload:false,week:11,name:'异常情况应急处置记录表',reportCode:'020703'}],
        },
      } //return ending
    },
    components:{
        treeSStation,
        rateCascader,
        ExportFormUpload,
    },
    computed:{},
    created(){},
    mounted() {
        this.getList();
    },
    methods:{    
        getList(){
            var self=this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Upload/GetExportFormUpload?CreatedTime=' + self.queryparam.Month + '&SStation='+self.queryparam.chooseStationIds
            }).then(res => {debugger
                if(res.data.code==200){
                    //第1周
                    self.upfileArr.week1.forEach((item1,i)=>{
                        if(res.data.list!=null && res.data.list.length>0){
                            res.data.list.forEach((item,index)=>{
                                if("1"+item1.reportCode==item.businessId){
                                    item1.isUpload=true;
                                } 
                            });
                        }else{
                            item1.isUpload=false;
                        }
                    });
                    //第2周
                    self.upfileArr.week2.forEach((item1,i)=>{
                        if(res.data.list!=null && res.data.list.length>0){
                            res.data.list.forEach((item,index)=>{
                                if("2"+item1.reportCode==item.businessId){
                                    item1.isUpload=true;
                                } 
                            });
                        }else{
                            item1.isUpload=false;
                        }
                    });
                    //第3周
                    self.upfileArr.week3.forEach((item1,i)=>{
                        if(res.data.list!=null && res.data.list.length>0){
                            res.data.list.forEach((item,index)=>{
                                if("3"+item1.reportCode==item.businessId){
                                    item1.isUpload=true;
                                } 
                            });
                        }else{
                            item1.isUpload=false;
                        }
                    });
                    //第4周
                    self.upfileArr.week4.forEach((item1,i)=>{
                        if(res.data.list!=null && res.data.list.length>0){
                            res.data.list.forEach((item,index)=>{
                                if("4"+item1.reportCode==item.businessId){
                                    item1.isUpload=true;
                                } 
                            });
                        }else{
                            item1.isUpload=false;
                        }
                    });
                    //第5周
                    self.upfileArr.week5.forEach((item1,i)=>{
                        if(res.data.list!=null && res.data.list.length>0){
                            res.data.list.forEach((item,index)=>{
                                if("5"+item1.reportCode==item.businessId){
                                    item1.isUpload=true;
                                } 
                            });
                        }else{
                            item1.isUpload=false;
                        }
                    });
                    //月
                    self.upfileArr.month.forEach((item1,i)=>{
                        if(res.data.list!=null && res.data.list.length>0){
                            res.data.list.forEach((item,index)=>{
                                if("6"+item1.reportCode==item.businessId){
                                    item1.isUpload=true;
                                } 
                            });
                        }else{
                            item1.isUpload=false;
                        }
                    });
                    //两月
                    self.upfileArr.towMonth.forEach((item1,i)=>{
                        if(res.data.list!=null && res.data.list.length>0){
                            res.data.list.forEach((item,index)=>{
                                if("7"+item1.reportCode==item.businessId){
                                    item1.isUpload=true;
                                } 
                            });
                        }else{
                            item1.isUpload=false;
                        }
                    });
                    //季
                    self.upfileArr.quarter.forEach((item1,i)=>{
                        if(res.data.list!=null && res.data.list.length>0){
                            res.data.list.forEach((item,index)=>{
                                if("8"+item1.reportCode==item.businessId){
                                    item1.isUpload=true;
                                } 
                            });
                        }else{
                            item1.isUpload=false;
                        }
                    });
                    //半年
                    self.upfileArr.halfYear.forEach((item1,i)=>{
                        if(res.data.list!=null && res.data.list.length>0){
                            res.data.list.forEach((item,index)=>{
                                if("9"+item1.reportCode==item.businessId){
                                    item1.isUpload=true;
                                } 
                            });
                        }else{
                            item1.isUpload=false;
                        }
                    });
                    //年
                    self.upfileArr.oneyear.forEach((item1,i)=>{
                        if(res.data.list!=null && res.data.list.length>0){
                            res.data.list.forEach((item,index)=>{
                                if("10"+item1.reportCode==item.businessId){
                                    item1.isUpload=true;
                                } 
                            });
                        }else{
                            item1.isUpload=false;
                        }
                    });
                    //其他（应急）
                    self.upfileArr.other.forEach((item1,i)=>{
                        if(res.data.list!=null && res.data.list.length>0){
                            res.data.list.forEach((item,index)=>{
                                if("11"+item1.reportCode==item.businessId){
                                    item1.isUpload=true;
                                } 
                            });
                        }else{
                            item1.isUpload=false;
                        }
                    });

                  
                }
          }).catch(error => {
            console.log(error);
          });
        },    
        getSearchStations(obj){
            var self = this;
            var configIds='';
            if(obj!=null)
            {  
               obj.forEach(o=>{                   
                    configIds += o.sStation +',';
               });     
               self.queryparam.chooseStationIds =configIds;    
            }         
        },
        //下拉框改变赋值
        selectOptionEvent(val){
            debugger
            this.queryparam.chooseStationIds=val;
        },
        uploadSuccess(file){
            this.getList();
            debugger
            if(!file.fileName){
                this.$message.warning("已经上传过了！");
            }
        },
        handleuplodRemove(obj){
            debugger
            // SStation,BusinessId,CreatedTime
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Common/DeleteFile?CreatedTime=' + obj.CreatedTime + '&SStation='+obj.SStation +'&BusinessId='+obj.BusinessId
            }).then(res => {
                this.getList();
            }).catch(error => {
                console.log(error);
            });
        },
    },
}
</script>
<style scoped>
#v_deviceOnlineInfo{color:black;}
::-webkit-scrollbar{width: 7px;height: 7px;background-color: #F5F5F5;}
  /*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);border-radius: 10px;background-color: #F5F5F5;}
  /*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb{border-radius: 10px;box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);background-color: #c8c8c8;}
.el-aside {color: #333;}
.el-header{height: 100px !important;}
.el-header .search{box-sizing: border-box;border-bottom: 1px solid #eee;text-align: left;}
.el-header .search .btn{position: absolute;right: 12px;top: 2px;}
.el-header .tools{height: 40px;border: 1px solid #ccc;background: #F5F5F5;line-height: 35px;text-align: right;padding: 0px 5px;}
.el-main{height: calc(100vh - 356px);}
.btn {
    display: inline-block;
    margin-right: 10%;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}
.btn-default {
    color: #333;
    background-color: #fff;
    border-color: #ccc;
}
</style>