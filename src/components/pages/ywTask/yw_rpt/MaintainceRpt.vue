<template>
    <el-container>
        <el-header>
            <div class="topbar">
                <el-button
                size="small"
                class="el-button--iconButton"
                @click="handleReturn"
                >返回</el-button>
            </div>
            <div class="topbar2">
                <el-button
                size="small"
                type="primary"
                id="btnExportPDF"
                class="el-button--iconButton"
                @click="handleExportPDF"
                >导出Word</el-button>
            </div>
            <div class="head" v-if="isShow">
                <rateCascaderCommon :defaultProp='prop' @selectOptionEvent='selectOptionEvent' :ReportCode='rptType' :TaskCode='TaskNo' :isRefresh='isRefresh'></rateCascaderCommon>
            </div>
        </el-header>

        <el-main id="exportPDF">
            <div class="content_head">
                <!--<router-link to="/index/MaintainceRpt/aa">a表单</router-link>
                <router-link to="/index/MaintainceRpt/bb">b表单</router-link>-->
                <rptHeader :rptName='rptName' :headerData='taskData'></rptHeader>
            </div>
            <div class="content">
                <!-- 三级路由 显示路由下的子路由视图 如果路由名称和当前页面的名称不对应则不显示。-->
                <router-view :formData='formData' :btnType='btnType' @formSubmit='formSubmit' @formSava='formSava' @reSet='reSet'></router-view>
            </div>
            <div class="photos beizhu" v-if="isShowrateUpload">
                <rateUpload :Ismultiple='true' :BusinessId='TaskNo' :BusinessType='reportCode' :SStation='SStation' :CreatedBy='CreatedBy' :limit='limit' @uploadSuccess='uploadSuccess'>                   
                </rateUpload>
                <div class="el-upload__tip" slot="tip">（当前所填表单最多只能上传{{this.limit}}张照片）</div>
            </div>
            <div class="image beizhu" style="position: relative;" >
                <span v-for="(g,index) in files" :key="index">
                    <el-image  style="margin:2px;width: 100px; height: 100px;border:1px solid #ccc;" :src="g.imgArr" :preview-src-list="imgArr"></el-image>
                    <i style="position: relative;right: 27px;bottom: 87px;border-radius: 2px;background: red;color: yellow;cursor: pointer;" class="el-icon-delete" @click="deleteImg(g.fileGUID,g.fileURL)"  v-if="isShowPicWall"></i>
                </span>                
            </div>
            
            <div class="foot">
                <rptFooter :footerData='taskData' @rpt_sava='rpt_sava' @rpt_submit='rpt_submit' @rpt_success='rpt_success' @rpt_refuse='rpt_refuse'></rptFooter>
            </div>
        </el-main>
    </el-container>
</template>
<script>
import rptHeader from './rpt_header';
import rptFooter from './rpt_footer';
import rateUpload from '../../common/rateRptUpload';
import rateCascaderCommon from '../../common/rateCascaderCommon';

export default {
    data(){
        return {
           timer:null,
            //查询选择的状态
           chooseStatus:'',
          //查询选择的任务类型
           chooseTaskCategory:'', 
           //查询选择的站点
           chooseStationIds:'',
           chooseStartTime:'',
           chooseEndTime:'',
            imgArr:[],//运维照片
            files:[],
            status:'',
            isShow:true,
            isShowrateUpload:true,
            isShowPicWall:true,
            TaskNo:'',
            secondButtonType:'',   //运维表单table按钮点击
            firstButtonType:'',  //运维任务table按钮点击
            rptType:'',
            isRefresh:false,//是否重新刷新级联数据
            reportCode:'',//默认加载第一个
            rptName:'',
            id:0,
            taskData:{},
            btnType:'',
            formData:{},
            optType:1,
            SStation:'', //用于记录是哪个站点的
            CreatedBy:'', //由谁创建的
            limit:0, //图片个数
            taskStatus:'',
            prop:{
                value: "id",
                label: 'text',
                children: 'children',
                expandTrigger: "hover",
                emitPath: false
            },
        }
    },
    components:{
        rateCascaderCommon,rptHeader,rptFooter,rateUpload
    },
    watch:{
       reportCode(val,oldVal){
          this.btnType="";
          this.selectOptionEvent(this.reportCode);
       }
    },
    created(){
         this.getParam();
    },
    mounted() {
    },
     beforeDestroy() {
      clearInterval(this.timer);
    },
    methods:{
       //获取图片全路径
        getFileFullPath(taskNo,reportCode){
            var self =this;
            this.$http({
            method: 'GET',        
            url: self.api + '/api/Common/GetFileFullPathByIdAndReport?id='+taskNo+'&reportCode='+ reportCode
            }).then(res => {
                self.files =res.data.data;
                self.getFlieStream();
            }).catch(error => {
                console.log(error);
            }); 
        },
        uploadSuccess(img){//图片上传成功
          this.timer = setTimeout(()=>{
            this.getFileFullPath(this.TaskNo,this.reportCode);
          }, 3000);//等待上传完成3秒之后显示图片
           //  this.$emit("closeCurrentPage", "运维表单"); //调用closeCurrentPage方法注意；两点1：第二个参数必须是string，2：长度必须大于等于4
          //   var obj = {taskNo:this.TaskNo,secondButtonType:this.secondButtonType,rptCode:this.reportCode, rptType:this.rptType,chooseTaskCategory:this.chooseTaskCategory,chooseStatus:this.chooseStatus, chooseStationIds:this.chooseStationIds,  firstButtonType:this.firstButtonType,status:this.status,chooseStartTime:this.chooseStartTime,chooseEndTime:this.chooseEndTime};
          //  this.$emit('jump',{param:'运维表单',path:'/MaintainceRpt?obj='+JSON.stringify(obj),isjump:true});
        },
        //图片删除
        deleteImg(fileGUID,fileURL){
            var self=this;
            this.$confirm('确认删除吗？').then(function () {
                self.$http({
                    method: 'GET',
                    url: self.api+'/api/Upload/DeleteByFileGUID?FileGUID=' + fileGUID + '&FileURL='+ fileURL
                }).then(res => {
                    if(res.data.code==200){
                        self.$message({
                            message: res.data.message,
                            type: res.data.type,
                        });
                        for(var i=self.files.length-1;i>=0;i--){
                            if(self.files[i].fileGUID == fileGUID){
                                self.files.splice(i,1);
                            }
                        }
                    }
                })
                }).catch(function () {
            });
        },

        //pdf
        handleExportPDF(){
            var self=this;
            var exportMain = $("#exportPDF").clone();
                exportMain.find("input").each(function() {
                    if ($(this).attr("type") != "hidden") {
                        if ($(this).attr("type") == "radio") {
                            if ($(this).is(":checked")) {
                                $(this).after("√");
                            }
                        } else {
                            var html = $(this).val();
                            $(this).after("<lable>" + html + "</lable>");
                        }
                    }
                    $(this).remove();
                });
                exportMain.find("button").each(function() {
                    $(this).remove();
                });
                exportMain.find(".el-input").each(function(i,item) {
                    var html = item.innerText;
                    $(this).after("<lable>" + html + "</lable>");
                    $(this).remove();
                });
                
                exportMain.find(".beizhu").each(function() {
                    $(this).remove();
                });
                
                exportMain.find("textarea").each(function() {
                    if ($(this).attr("type") != "hidden") {
                        var html = $(this).val();
                        $(this).after("<lable>" + html + "</lable>");
                    }
                    $(this).remove();
                });
                exportMain.wordExport(self.rptName.replace(/<[^>]+>/g,""));
        },
         
        //依据表单reportcode和任务编号获取图片



        //获取具体表单数据
        getRptToFirst(val,TaskNo){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_Rpt/GetRptToFirst?ReportCode='+val+'&TaskCode='+ TaskNo
            }).then(res => {
                if(res.data.code==200){
                    self.files=[]; //清空数组
                    self.limit =res.data.photoNumber;
                    //如果是查看，审核，图片上传功能影藏。编辑,添加影藏
                    if(self.secondButtonType=='detail'||self.secondButtonType=='judge'){
                          self.isShowrateUpload=false;
                          self.isShowPicWall=false;
                    }else{
                         //如果当前表单上传文件数量为0，则影藏上传文件筐
                        if(self.limit==0){
                             self.isShowrateUpload=false;   
                        }else{
                            self.isShowrateUpload=true;   
                        }
                    } 
                    if(res.data.data!=null){
                        self.formData=res.data.data;
                        self.status=res.data.data.status;           
                    }
                      //获取图片
                    this.getFileFullPath(this.TaskNo,val);
                }
            }).catch(error => {
                console.log(error);
            });
        },

        getFlieStream(){
            var self=this;
            self.files.forEach(item => {
                this.$http({
                    method: 'GET',
                    responseType:'blob',
                    url: self.api + '/api/Common/GetFlieStream?partialPath='+item.fileURL
                }).then(res => {
                    let cc= window.URL.createObjectURL(res.data)
                    self.imgArr.push(cc);
                    item.imgArr=cc;
                }).catch(error => {
                    console.log(error);
                });
            });
        },

        //读取参数 
        getParam() {
            var self = this;
            const data = self.getUrlKey("obj");
            self.TaskNo = JSON.parse(data).taskNo;
            self.secondButtonType = JSON.parse(data).secondButtonType;
            self.firstButtonType = JSON.parse(data).firstButtonType;
            self.rptType = JSON.parse(data).rptType;
            self.status = JSON.parse(data).status;
            //任务页面带过来的查询条件
            self.chooseStatus=JSON.parse(data).chooseStatus;
            self.chooseTaskCategory= JSON.parse(data).chooseTaskCategory;
            self.chooseStationIds = JSON.parse(data).chooseStationIds;
            self.chooseStartTime=JSON.parse(data).chooseStartTime;
            self.chooseEndTime=JSON.parse(data).chooseEndTime;
            //获取报表类型的第一个表单
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_Rpt/GetReptFormFirst?reportType='+self.rptType
                }).then(res => {
                if(res.data.code==200){ 
                   if(self.secondButtonType=='add'){
                        self.reportCode=res.data.data.reportCode;
                   }                   
                   else if(self.secondButtonType=='edit'){
                        //编辑--不可以切换表
                        self.id = JSON.parse(data).id;
                        self.reportCode=JSON.parse(data).rptCode;
                        self.optType=2;
                        self.isShow=false;
                    }else if(self.secondButtonType=='detail'){
                         //查看
                        self.id = JSON.parse(data).id;
                        self.reportCode=JSON.parse(data).rptCode;
                    }else if(self.secondButtonType=='judge'){
                        //审核
                        self.id = JSON.parse(data).id;
                        self.reportCode=JSON.parse(data).rptCode;
                        //新增 审核也不需要切换表
                        self.optType=2;
                        self.isShow=false;
                    }           
               }
               //依据表单类型判定需要上传多少张照片
               if(self.rptType!='1'){
                    self.limit =res.data.data.photosNumber
               }
               else
               {
                   self.isShowrateUpload=false;          
               }
             }).catch(error => {
                console.log(error);
            });                      
        },

        getUrlKey(name) {
            return (
                decodeURIComponent(
                (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
                    location.href
                ) || [, ""])[1].replace(/\+/g, "%20")
                ) || null
            );
        },

        handleReturn() {
            this.$emit("closeCurrentPage", "运维表单"); //调用closeCurrentPage方法注意；两点1：第二个参数必须是string，2：长度必须大于等于4
            var obj = {taskNo:this.TaskNo,secondButtonType:this.secondButtonType,firstButtonType:this.firstButtonType,taskStatus:this.chooseStatus,chooseStationIds:this.chooseStationIds, taskCategoryId:this.chooseTaskCategory,chooseStartTime:this.chooseStartTime,chooseEndTime:this.chooseEndTime};
            this.$emit("jump", {
                param: "任务编辑",
                path: "/index/ywTaskDisplay?obj="+JSON.stringify(obj),
                isjump: true,
            });
        },
        
        //表单切换
        selectOptionEvent(val){
            var self = this;
            self.reportCode=val;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_Rpt/GetToFirst?ReportCode='+val+'&TaskNo='+this.TaskNo
            }).then(res => {
                if(res.data.code==200){   
                   self.rptName=res.data.data.name;
                   self.taskData=res.data.task;
                   //添加站点
                   self.SStation =res.data.task.sStation;
                   //添加创建人
                   self.CreatedBy = res.data.task.dealerId;                
                   //跳转路由
                   self.$router.push({ path: res.data.data.routePath });
                   self.getRptToFirst(val,this.TaskNo);//加载数据
                }
            }).catch(error => {
                console.log(error);
            });
        },

        rpt_sava(obj){
            this.btnType="保存";
        },

        rpt_submit(obj){
            this.btnType="提交";
        },

        //审核通过
        rpt_success(data){
            var self = this; 
            this.$confirm('确认审核通过？').then(function () {
                self.judugePass(data.isFinished);
               }).catch(function () {
            });
            // if(self.status!='1'){
            //         self.$message({
            //           message: "此表单已经审核过了!",
            //           type: "warning",
            //         });
            // }else{     
            //     this.$confirm('确认审核通过？').then(function () {
            //         self.judugePass(data.isFinished);
            //        }).catch(function () {
            //     });
            // }
        },
              
        //审核通过详细方法
        judugePass(IsFinished){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_Rpt/JudgeTask?taskNo='+self.TaskNo+'&remark='+IsFinished+'&status=2&reportCode='+self.reportCode
            }).then(res => {
                if(res.status==200){
                    self.$message({
                      message: res.data.message,
                      type: res.data.type,
                    });
                    //返回审核状态
                    self.status='2';
                    self.isRefresh=true;//刷新级联数据，
                    //添加了这个就返回了，去掉的话，就可以自由切换
                    if(self.optType!=1 || 1==1)
                    {             
                       self.handleReturn();   
                    }    
                }
          }).catch(error => {
            console.log(error);
          });
        },
        

        //审核不通过详细方法
        judugeUnPass(IsFinished){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_Rpt/JudgeTask?taskNo='+self.TaskNo+'&remark='+IsFinished+'&status=3&reportCode='+self.reportCode
            }).then(res => {
                if(res.status==200){
                    self.$message({
                      message: res.data.message,
                      type: res.data.type,
                    });
                    //返回审核状态
                    self.status='3';
                    self.isRefresh=true;//刷新级联数据，
                    //添加了这个就返回了，去掉的话，就可以自由切换
                    if(self.optType!=1 || 1==1)
                    {             
                       self.handleReturn();   
                    }     
                }
          }).catch(error => {
            console.log(error);
          });
        },

       

        //审核不通过
        rpt_refuse(data){
            var self = this;  
            this.$confirm('确认审核不通过？').then(function () {
                self.judugeUnPass(data.isFinished);
               }).catch(function () {
            });
            // if(self.status!='1'){
            //     self.$message({
            //           message: "此表单已经审核过了!",
            //           type: "warning",
            //         });
            // }else{
            //     this.$confirm('确认审核不通过？').then(function () {
            //         self.judugeUnPass(data.isFinished);
            //        }).catch(function () {
            //     });
            // }
        },
        //重置表单
        reSet(obj){
            this.btnType='';
        },
        //保存
        formSava(obj){
            debugger
            var self = this;
            this.$http({
                headers: {
                  deviceCode: "A95ZEF1-47B5-AC90BF3",
                },
                method: 'POST',
                url: self.api + "/api/Yw_Rpt/SubmitYw_Rpt",
                data: self.Qs.stringify({
                    Id:self.id,
                    OptType:self.optType,
                    SStation:self.taskData.sStation,
                    Unit_ID:self.taskData.unitId,
                    AuditeUsr:self.taskData.nextAuditerName,
                    Review:self.taskData.nextAuditerName,
                    PlanDealTime:self.taskData.planDealTime,
                    TaskCategoryId:self.taskData.taskCategoryId,
                    Content:obj,
                    ReportCode:self.reportCode,
                    Status:0,
                    TaskCode:self.TaskNo,
                })
            }).then(res => {
                if(res.data.code==200){
                    self.$message({
                      message: res.data.message,
                      type: res.data.type,
                    });  
                    this.btnType='';  
                    this.isRefresh=true;//刷新级联数据，
                    // if(self.optType!=1)
                    // {             
                    //     self.handleReturn();   
                    // }                                      
                }
            }).catch(error => {
                console.log(error);
            });
        },
         
        //确认
        formSubmit(obj){
            var self = this;
            this.$http({
                headers: {
                  deviceCode: "A95ZEF1-47B5-AC90BF3",
                },
                method: 'POST',
                url: self.api + "/api/Yw_Rpt/SubmitYw_Rpt",
                data: self.Qs.stringify({
                    Id:self.id,
                    OptType:self.optType,
                    SStation:self.taskData.sStation,
                    Unit_ID:self.taskData.unitId,
                    AuditeUsr:self.taskData.nextAuditerName,
                    Review:self.taskData.nextAuditerName,
                    PlanDealTime:self.taskData.planDealTime,
                    TaskCategoryId:self.taskData.taskCategoryId,
                    Content:obj,
                    ReportCode:self.reportCode,
                    Status:1,
                    TaskCode:self.TaskNo,
                })
                }).then(res => {
                if(res.data.code==200){
                    self.$message({
                      message: res.data.message,
                      type: res.data.type,
                    });
                    //清空按钮值
                    this.btnType='';  
                    this.isRefresh=true;//刷新级联数据，
                    // if(self.optType!=1)
                    // {
                    //     self.handleReturn();                       
                    // }
                }
            }).catch(error => {
                console.log(error);
            });
        },
    }
}
</script>
<style scoped>
::-webkit-scrollbar{width: 7px;height: 7px;background-color: #F5F5F5;}
  /*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);border-radius: 10px;background-color: #F5F5F5;}
  /*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb{border-radius: 10px;box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);background-color: #c8c8c8;}
.el-main{height: calc(100vh - 162px);}
div.topbar {position: fixed;top: 100px;left: 250px;margin: 10px;z-index: 66;}
div.topbar2 {position: fixed;top: 100px;right:100px;margin: 10px;z-index: 67;}
.head{margin: 10px 100px; width: 300px;height: 40px;}
.content{margin-top: 20px;}
</style>



