<template>
    <div>
        <el-container style="height: calc(100vh - 102px); border: 1px solid #eee">
            <el-aside width="250px">
                <treeSStation @checkedNodes="getList" @checkedNodes2="checkSStation"></treeSStation>
            </el-aside>
            
            <el-container>
                <el-header>
                    <div class="search">
                        <el-form :inline="true" class="demo-form-inline" >
                            <!-- <el-form-item label="运维单位：">
                                <rate-select
                                    v-model="rateSelect.model"
                                    :url='rateSelect.selectUrl'
                                    :urlParams="rateSelect.urlParams"
                                    :multiple="false"
                                    placeholder="全部"
                                    :optionKeys="rateSelect.optionKeys"
                                    :showLabels="rateSelect.showLabels"
                                    :disables="rateSelect.disables"
                                    @change="selectChange"
                                >
                                </rate-select>
                            </el-form-item> -->
                            <el-form-item label="日期选择：">
                                <el-date-picker
                                    v-model="queryparam.MarkMonth"
                                    type="month"
                                    placeholder="选择日期"
                                    format="yyyy 年 MM 月"
                                    value-format="yyyy-MM"
                                    align="right"
                                >
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item class="btn">
                                <el-button type="primary" v-has="'TwoRate_handleGenerate'" icon="el-icon-check"   @click="geneTwoRate();">生成两率</el-button>
                                <el-button type="primary" v-has="'TwoRate_handleSearch'" icon="el-icon-search" @click="getList();">查询</el-button>
                                <el-button type="primary" icon="el-icon-download"  v-has="'TwoRate_handleExport'" @click="download();">导出</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="tools">
                       
                    </div>
                </el-header>
                
                <el-main>
                    <rate-table :list="list"
                        @handleSelectionChange="handleSelectionChange"
                        @sizeChange="getSizeChange"
                        @currentPage="getCurrentPage"
                        :options="options"
                        :columns="columns"
                        :operates="operates"
                        :pageShow="page.pageShow"
                        :total="page.total"
                    ></rate-table>
                </el-main>
            </el-container>
        </el-container>


        <div>
            <el-dialog
                title="日期选择"
                :visible.sync="dialogVisible"
                width="50%"
                >
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="mini">
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="开始日期：">
                                <el-date-picker
                                    v-model="queryparam.Start"
                                    type="date"
                                    placeholder="选择开始日期"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy-MM-dd"
                                    align="right"
                                >
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                           <el-form-item label="结束日期：">
                                <el-date-picker
                                    v-model="queryparam.End"
                                    type="date"
                                    placeholder="选择结束日期"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy-MM-dd"
                                    align="right"
                                >
                                </el-date-picker>
                                
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="9">&nbsp;</el-col>
                        <el-col :span="6">
                            <div> 
                               <el-form-item>
                                    <el-button  v-has="'ywCar_handleSubmit'" type="primary" @click="submitForm('ruleForm')">生成两率</el-button>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="9">&nbsp;</el-col>
                    </el-row>
                </el-form>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import treeSStation from '../common/treeSStation' //引入treeSStation组件
import rateTable  from '../common/rateTable'    //引入rateTable组件
import rateCascader from '../common/rateCascader' //引入rateCascader组件
import rateSelect from '../common/rateSelect';


export default {
    data() {
      return {
        rateSelect:{
            model: '',
            selectUrl:this.api+'/api/Yw_Unit/GetAllUnit',
		    urlParams: JSON.stringify({}),
            optionKeys: JSON.stringify({
                value: 'unitId',
                label: 'unitName'
            }),
            showLabels: 'unitName',
            disables: '',
        },
        dialogVisible: false,
        ruleForm: {
            
        },
        rules: {
           
        },
        dialogVisible:false,
        queryparam:{
            MarkMonth:this.getNowTime(),  //日期,
            Start:'',
            End:'',
            SStation:[],
            UnitId:''
        },
        page:{   //关于页码的相关参数
          pageShow:true,  //是否显示
          total:0,        //总条数
          pageSize:10,    //每页条数
          pageNo:1,       //第几页
        },
        handleSelection:[],  //checkbox选中行
        list:[],// table数据
        options: {  // table样式参数
          stripe: true, // 是否为斑马纹 table
          loading: true, // 是否添加表格loading加载动画
          highlightCurrentRow: true, // 是否支持当前行高亮显示
          mutiSelect: true, // 是否支持列表项选中功能
        }, // table 的参数结束
        columns: [
          {prop: 'unitName',label: '运维单位',align: 'center',isShow:true},//formatter重构//return `返回参数`
          {prop: 'city',label: '城市',align: 'center',isShow:true},
          {prop: 'sStationName',label: '站点名称',align: 'center',isShow:true,width:150},
          {prop: 'markMonth',label: '月份',align: 'center',isShow:true},
          {prop: 'phRate',label: '数据捕获率(%)',align: 'center',isShow:true},//formatter重构//return `返回参数`
          {prop: 'qPhRate',label: '数据捕获率(去停电%)',align: 'center',isShow:true,width:200},
          {prop: 'zkRate',label: '质控合格率(%)',align: 'center',isShow:true,width:200},
          {prop: 'qZkRate',label: '质控合格率(去停电%)',align: 'center',isShow:true,width:200},
          {prop: 'wxts',label: '无效天数',align: 'center',isShow:true},
          {prop: 'qwxts',label: '去停电无效天数',align: 'center',isShow:true},
          {prop: 'score',label: '分数',align: 'center',isShow:true},//formatter重构//return `返回参数`
        ],// 需要展示的列
        operates: {   //操作栏
          width:200,      
          fixed: 'right',
          list: []
        }, // 列操作按钮
      } //return ending
    },
    methods:{
        //处理默认选中当前日期
	    getNowTime() {
	       var now = new Date();
	       var year = now.getFullYear(); //得到年份
	       var month = now.getMonth(); //得到月份
	       var date = now.getDate(); //得到日期
	       var hour =" 00:00:00"; //默认时分秒 如果传给后台的格式为年月日时分秒，就需要加这个，如若不需要，此行可忽略
	       month = month + 1;
	       month = month.toString().padStart(2, "0");
	       date = date.toString().padStart(2, "0");
        //    var defaultDate = `${year}-${month}-${date}${hour}`;
           var defaultDate = `${year}-${month}`;
	       return defaultDate;
	       this.$set(this.queryparam, "MarkMonth", defaultDate);
	    },
        filterDate(t) {
            const date = new Date(t);
            const y = date.getFullYear();
            const M = (date.getMonth() + 1).toString().padStart(2, 0);
            const d = date.getDate().toString().padStart(2, 0);
            const h = date.getHours().toString().padStart(2, 0);
            const mm = date.getMinutes().toString().padStart(2, 0);
            const s = date.getSeconds().toString().padStart(2, 0);
            return y + '-' + M + '-' + d + ' ' + h + ':' + mm + ':' + s;
        },
        selectChange(val, valObj) {
            this.model = val;
            this.queryparam.UnitId=val;
			// console.log("valObj=>", valObj);
		},
        handleSelectionChange (val) { //checkbox选中的数据val 是选中行的所有数组
            this.handleSelection=val;
        },
        getSizeChange(val){  //table组件发射的方法 用于改变每页数据量
            this.page.pageSize=val;
            //这下面需要重新调用 获取列表页的函数
            this.getList();
 
        },
        getCurrentPage(val){  //table组件发射的方法  用于改变当前所在页码
            this.page.pageNo=val;
            //这下面需要重新调用 获取列表页的函数
            this.getList();
        },
        getList(obj){
            var self = this;
            self.options.loading=true;
            var staionId='';
            if(obj!=null)
            {  
               obj.forEach(o=>{
                   staionId += o.sStation +',';
               });            
            }  
            this.$http({
                method: 'GET',
                url: this.api+'/api/Jx/GetList?pagesize=' + self.page.pageSize + '&pageindex=' + self.page.pageNo+ '&UnitId=' + self.queryparam.UnitId+ '&Start=' + self.queryparam.Start+ '&End=' + self.queryparam.End + '&MarkMonth=' + self.queryparam.MarkMonth +'&SStations=' + staionId
            }).then(res => {
                if(res.status==200){
                    self.list=res.data.data;
                    self.page.total = res.data.count;
                    self.options.loading=false;
                }
          }).catch(error => {
            console.log(error);
          });
        },  
        getToFirst(id){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_Unit/GetToFirst?unitId=' + id
            }).then(res => {
                if(res.status==200){
                    if(res.data.data!=null){
                        self.ruleForm.UnitId=res.data.data.unitId;
                        self.ruleForm.UnitName=res.data.data.unitName;
                        self.ruleForm.SortOrder=res.data.data.sortOrder;
                        self.ruleForm.Description=res.data.data.description;
                    }else{
                        self.ruleForm.UnitId="";
                        self.ruleForm.UnitName="";
                        self.ruleForm.SortOrder="";
                        self.ruleForm.Description="";
                    }
                    
                }
          }).catch(error => {
            console.log(error);
          });
        },
        selectOptionEvent(val){
            this.ruleForm.SStation=val;
        },
        selectSStation(){
            this.$refs.cascader.selectSStation(this.ruleForm.SStation);
        },
        checkSStation(obj){
            var self=this;
            self.queryparam.SStation=[];
            if (obj!=null && obj.length>0) {
                obj.forEach(item => {
                    if(item.sStation.indexOf("999")==-1){
                        self.queryparam.SStation.push(""+item.sStation+",");
                    }
                    
                });
            }
        },


        submitForm(formName) {
            var self=this;
            if (self.queryparam.SStation==null || self.queryparam.SStation.length<=0) {
                self.$message.warning("请选择站点！");
                return false;
            }
            if (self.queryparam.Start == null || self.queryparam.Start == "") {
                self.$message.warning("请选择开始时间！");
                return false;
            }
            if (self.queryparam.End == null || self.queryparam.End == "") {
                self.$message.warning("请选择结束时间！");
                return false;
            }
            var sstation="";
            self.queryparam.SStation.forEach(item => {
                sstation+=item;
            });
            var data = {
                End: self.queryparam.End,
                Start: self.queryparam.Start,
                SStation: sstation.substring(0,sstation.length-1),
            };
            self.dialogVisible=false;
            self.options.loading=true;
            this.$http({
                headers: {
                    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
                },
                method: 'POST',
                url: this.api+'/api/Jx/GenerateTwoRate',
                data:self.Qs.stringify(data)
            }).then(res => {
                if(res.status==200){
                    self.checkSStation(null);//清空站点树选中的站点
                    self.getList(null);//清空站点树选中的站点
                    self.$message({
                        message: res.data.message,
                        type: res.data.type  //warning,success,info,error
                    });
                    self.options.loading=false;
                }
                
            }).catch(error => {
                console.log(error);
            });
        },
        //调用数据管理平台无效天数
        getDataMarWXTS(){
            var self=this;
            debugger
            var data={
                choiceType:'ST06',
                beingTime:self.queryparam.Start,
                endTime:self.queryparam.End
            }
            this.$http({
                headers: {'deviceCode': 'A95ZEF1-47B5-AC90BF3'},
                method: 'POST',
                url: 'http://59.172.208.250:9400/AirPulish/PublishData.asmx?op=SkConcandEGRate',
                data:self.Qs.stringify(data)
            }).then(res => {
                debugger
                console.log(res);
                
            }).catch(error => {
                console.log(error);
            });
        },
        geneTwoRate(){
            var self=this;
             self.dialogVisible=true;
        },
        //下载时间
        downLoadDate(){       
            const date = new Date();
            const y =date.getFullYear();
            const M = (date.getMonth()+1).toString().padStart(2,0);
            const d = date.getDate().toString().padStart(2, 0);
            const h = date.getHours().toString().padStart(2, 0);
            const mm = date.getMinutes().toString().padStart(2, 0);
            const s = date.getSeconds().toString().padStart(2, 0);
            return y  + M +  + d  + h  + mm + s;
        },
        //导出
        download(obj){
            var self = this;
            this.$http({
                method: 'GET',
                responseType: 'blob', // 表明返回服务器返回的数据类型
                url: this.api+'/api/Jx/GetTwoRateListDownLoad?pagesize=' + self.page.pageSize + '&pageindex=' + self.page.pageNo+ '&UnitId=' + self.queryparam.UnitId + '&MarkMonth=' + self.queryparam.MarkMonth  +'&SStations=' + self.queryparam.chooseStationIds
            }).then(res => {
                if(res.status==200){              
                let blob = new Blob([res.data], {type: 'application/vnd.ms-excel' })
                let  downTime= self.downLoadDate();
                const fileName = downTime +'-两率统计.xls';
                const elink = document.createElement('a');
                elink.download = fileName;
                elink.style.display = 'none';
                elink.href = URL.createObjectURL(blob);
                document.body.appendChild(elink);
                elink.click();
                URL.revokeObjectURL(elink.href); // 释放URL 对象
                document.body.removeChild(elink);
                }
          }).catch(error => {
            console.log(error);
          });
        }      
    },
    components:{
        treeSStation,rateTable,rateCascader,rateSelect
    },
    mounted() {
        this.getList();//调用获取列表页的方法
    },
}
</script>
<style scoped>
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
.el-main{height: calc(100vh - 336px);}
.el-cascader,.el-cascader--medium{width: 100%;height: 28px;line-height: 28px;}
.el-date-editor,.el-input {width: 100%;}
</style>