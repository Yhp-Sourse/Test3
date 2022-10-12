<template>
    <el-container style="height: calc(100vh - 105px); border: 1px solid #eee">
        <!-- <el-aside width="300px">
            {{list}}
        </el-aside> -->
        
        <el-container>
            <el-header>
                <div class="fly-panel detail-box">
                     <h1>{{list.queTitle}}</h1> 
                     <div class="fly-detail-info"> 
                        <span class="layui-badge" style="background-color: #5FB878;">{{list.stateName}}</span>
                        <span class="fly-list-nums">
                            <span>{{list.usrName}}</span>
                            <span>{{list.show_SDateTime}}</span>
                            <a href="#comment" @click="show_Comment=!show_Comment"><i class="el-icon-chat-dot-round" title="回复"></i></a>
                        </span> 
                    </div> 
                    <div class="detail-body layui-text photos"> 
                        {{list.content}}
                    </div>
                    <div class="image">
                        <el-image v-for="(f,index) in imgArr" :key="index" style="margin:2px;width: 100px; height: 100px" :src="f" :preview-src-list="imgArr"></el-image>
                    </div>
                </div>
            </el-header>

            <el-main>
                <hr/> 回帖
                <div class="fly-panel detail-box" v-for='(item,index) in list.huifu' :key='index'>
                    <h1>{{item.replyName}}</h1> 
                    <div class="fly-detail-info"> 
                        <span class="layui-badge" style="background-color: #5FB878;"></span>
                        <span class="fly-list-nums2">
                            <span>{{item.show_ReplyTime}}</span>
                        </span> 
                        <span class="fly-list-nums">
                            <span style="color:#5FB878">{{item.satisfaction}}</span>
                            <a v-if="list.stateName=='处理中'" @click='useCheck(item.id)'><i class="el-icon-s-check" title="采纳"></i></a>
                        </span>
                    </div> 
                    <div class="detail-body layui-text photos"> 
                        {{item.replyContent}}
                    </div>
                </div>
                
                <div id='comment' v-show="show_Comment">
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="mini">
                        <el-row>
                            <el-col :span="20">
                                <el-form-item label="" prop="Content">
                                    <el-input  type="textarea" :rows="6" v-model="ruleForm.ReplyContent" autocomplete="off"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-button class="comment" type="primary" @click="submitForm('ruleForm')">回复</el-button>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
            </el-main>

            <!-- <el-footer>
                
            </el-footer> -->
        </el-container>
        <!-- <el-aside width="300px">
            
        </el-aside> -->
        
    </el-container>


    
</template>
<script>
import treeSStation from '../common/treeSStation' //引入treeSStation组件
import rateTable  from '../common/rateTable'    //引入rateTable组件
import rateCascader from '../common/rateCascader' //引入rateCascader组件
import rateSelect from '../common/rateSelect';
import rateUpload from '../common/rateUpload' //引入rateCascader组件

export default {
    data() {
      return {
        list:{},
        imgArr:[],
        files:[],
        show_Comment:false,
        ruleForm:{
            QueId:'',
            ReplyContent:''
        },
        rules: {
            ReplyContent:[{ required: true, message: '必填项', trigger: 'blur' }],
        },
      } 
    },
    methods:{
        getparm() {
            const data = this.getUrlKey("obj");
            this.ruleForm.QueId = JSON.parse(data).QueId;
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
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    var self = this;
                    this.$http({
                        headers: {
                            'deviceCode': 'A95ZEF1-47B5-AC90BF3'
                        },
                        method: 'post',
                        url: self.api+'/api/BBS/SubmitComment',
                        data:self.Qs.stringify(self.ruleForm)
                    }).then(res => {
                        if(res.status==200){
                            self.getList();
                            self.$message({
                                message: res.data.message,
                                type: res.data.type  //warning,success,info,error
                            });
                            self.ruleForm.ReplyContent="";
                        }
                    }).catch(error => {
                        console.log(error);
                    });
                    } else {
                        return false;
                    }
            });
        },
        useCheck(id){
            var self = this;
            this.$confirm('是否采纳？').then(()=>{
                self.$http({
                    method: 'GET',
                    url: this.api+'/api/BBS/UseCheck?Id='+id+'&QueId='+self.ruleForm.QueId
                }).then(res => {
                    if(res.status==200){
                        self.getList();
                        self.$message({
                            message: res.data.message,
                            type: res.data.type  //warning,success,info,error
                        });
                    }
                }).catch(error => {
                    console.log(error);
                });
            }).catch(function () {                
            });           
        },
        getList(){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/BBS/GetViewToList?QueId='+this.ruleForm.QueId
            }).then(res => {
                if(res.status==200){
                    self.list=res.data.data;
                    self.files=res.data.data.files;
                    self.getFlieStream();
                }
            }).catch(error => {
                console.log(error);
            });
        },
        getFlieStream(){
            // partialPath='/Upload/Koala.jpg';
            var self=this;
            self.files.forEach(item => {
                this.$http({
                    method: 'GET',
                    responseType:'blob',
                    url: self.api + '/api/BBS/GetFlieStream?partialPath='+item.fileURL
                }).then(res => {                  
                    self.imgArr.push(window.URL.createObjectURL(res.data));
                }).catch(error => {
                    console.log(error);
                });
            });
        }
    },
    components:{
        treeSStation,rateTable,rateCascader,rateSelect,rateUpload
    },
    created(){
        this.getparm();//获取链接的参数
    },
    mounted() {
        this.getList();
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
.el-header{height: 250px !important;background: #F5F5F5;}
.el-header .search{box-sizing: border-box;border-bottom: 1px solid #eee;text-align: left;}
.el-header .search .btn{position: absolute;right: 12px;top: 2px;}
.el-header .tools{height: 40px;border: 1px solid #ccc;background: #F5F5F5;line-height: 35px;text-align: right;padding: 0px 5px;}
.el-main{height: calc(100vh - 250px);background: #f2f2f2;}
/* .el-footer{height: 120px !important;} */
.el-cascader,.el-cascader--medium{width: 100%;height: 28px;line-height: 28px;}
.el-date-editor,.el-input {width: 100%;}

.detail-box {
    text-align: left;
    padding: 20px;
}
.fly-panel {
    margin-bottom: 15px;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
}
.detail h1 {
    font-size: 24px;
    line-height: 36px;
}
.fly-detail-info {
    position: relative;
    margin: 10px 0 15px;
}
.layui-badge {
    height: 20px;
    line-height: 20px;
    border-radius: 2px;
}
.layui-badge, .layui-badge-dot, .layui-badge-rim {
    position: relative;
    display: inline-block;
    padding: 0 6px;
    font-size: 12px;
    /* text-align: center; */
    background-color: #FF5722;
    color: #fff;
    border-radius: 2px;
}
.fly-detail-info .fly-list-nums {
    top: -3px;
    font-size: 16px;
}
.fly-list-nums {
    position: absolute;
    right: 0;
    top: 0;
    padding-right: 0!important;
}
.fly-list-nums2 {
    position: absolute;
    left: 0;
    top: 0;
    padding-left: 15px!important;
}
a {
    color: #333;
    text-decoration: none;
}
.fly-detail-admin {
    padding-top: 10px;
    text-align: right;
    border-top: 1px dotted #EAEAEA;
    background-color: #f8f8f8;
}
.layui-btn-container .layui-btn {
    margin-right: 10px;
    margin-bottom: 10px;
}

.detail-body {
    margin: 20px 0 0;
    /* min-height: 306px; */
    line-height: 26px;
    font-size: 16px;
    color: #333;
    word-wrap: break-word;
}

.comment{
    width: 120px;
    height: 120px;
}
</style>