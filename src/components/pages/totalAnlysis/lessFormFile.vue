<template>
    <div id="v_deviceOnlineInfo">
        <el-container style="height: calc(100vh - 105px); border: 1px solid #eee">
            <el-aside width="250px">
                <treeSStation  :IsCheckBox='true' @checkedNodes="getSearchStations"></treeSStation>
            </el-aside>
            <el-container>
                <el-header>              
                    <div class="search">
                        <el-form :inline="true" class="demo-form-inline">
                            <!-- <el-form-item label="站点：" prop="chooseStationIds">
                                <rateCascader :checkStrictly='true' :selectOption='queryparam.chooseStationIds' @selectOptionEvent="selectOptionEvent"></rateCascader>
                            </el-form-item> -->
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
                                {{queryparam}}
                                <el-button type="primary" icon="el-icon-search"  @click="getList();">查询</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-header>
                <el-main id="exportWord">
                    {{files}}
                    <div class="image" style="position: relative;">
                        <span v-for="(g,index) in files" :key="index">
                            {{g.businessId}}
                            {{g.reportName}}
                            {{g.sStationName}}
                            {{g.createdTime}}
                            <el-image  style="margin:2px;width: 100px; height: 100px;border:1px solid #ccc;" :src="g.imgArr" :preview-src-list="imgArr"></el-image>
                            <br/>
                        </span>                
                    </div>
                 
                    {{imgArr}}
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import treeSStation from '../common/treeSStation'
import rateCascader from '../common/rateCascader' //引入rateCascader组件

export default {
    name:'v_deviceOnlineInfo',
    data() {
      return {  
        files:[],
        imgArr:[],
        CheckData:[],// [{sStation:'SS4301051'},{sStation:'SS4301051'}]
        fileListuplod:[],//上传的文件列表
        queryparam:{
            Month:'2021-08',
            chooseStationIds:'SS4201051',
        },
      } //return ending
    },
    components:{
        treeSStation,
        rateCascader,
    },
    computed:{},
    created(){},
    mounted() {
        // this.getList();
    },
    watch:{
        queryparam: {
            handler: function() {
                // this.getList();
            },
         deep: true
        }
    },
    methods:{  
        getList(taskNo,reportCode){
            var self =this;
            this.$http({
                method: 'GET',        
                url: self.api + '/api/Common/GetFileByMonth?date='+self.queryparam.Month +'&sstation='+self.queryparam.chooseStationIds
            }).then(res => {
                self.files =res.data.data;
                self.$nextTick(()=>{
                    self.getFlieStream();
                });
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