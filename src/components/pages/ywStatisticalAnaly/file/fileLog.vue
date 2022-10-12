<template>
    <div id="v_ywArrivalRecord">
        <el-container style="height: calc(100vh - 102px); border: 1px solid #eee">
            <el-container>
                <el-header>
                    <div class="search">
                        <el-form :inline="true" class="demo-form-inline" >
                            <el-form-item label="日期：">
                                <el-date-picker v-model="queryparam.startDate" type="date" placeholder="选择开始日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></el-date-picker>
                            </el-form-item>
                            <el-form-item label="-">
                                <el-date-picker v-model="queryparam.endDate" type="date" placeholder="选择结束日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></el-date-picker>
                            </el-form-item>
                            <el-form-item class="btn">
                                <el-button type="primary" icon="el-icon-search" @click="getList();">查询</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="tools">
                    </div>
                </el-header>
                
                <el-main>
                    <el-table
                        v-loading="listLoading"
                        :data="list"
                        :element-loading-text="elementLoadingText"
                        @selection-change="setSelectRows"
                    >
                    <el-table-column show-overflow-tooltip type="selection"></el-table-column>
                    <el-table-column
                        show-overflow-tooltip
                        label="序号"
                        type="index"
                        width="50"
                        align="center"
                    ></el-table-column>
                    <el-table-column
                        show-overflow-tooltip
                        prop="id"
                        label=""
                        align="center"
                        v-if="false"
                    ></el-table-column>
                    <el-table-column
                        show-overflow-tooltip
                        prop="fileName"
                        label="文档名称"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        show-overflow-tooltip
                        prop="createDate"
                        label="操作时间"
                        align="center"
                    ></el-table-column>
                    <el-table-column
                        show-overflow-tooltip
                        prop="contents"
                        label="操作内容"
                        align="center"
                    ></el-table-column>
                    <el-table-column
                        show-overflow-tooltip
                        prop="createName"
                        label="操作人"
                        align="center"
                    ></el-table-column>
                    </el-table>
                    <el-pagination
                        background
                        :current-page="page.pageNo"
                        :page-size="page.pageSize"
                        :layout="layout"
                        :total="page.total"
                        @size-change="getSizeChange"
                        @current-change="getCurrentPage"
                    ></el-pagination>
                </el-main>
            </el-container>
        </el-container>

    </div>
</template>
<script>

export default {
    data(){
        return{
            queryparam:{
                startDate:'',
                endDate:'',
            },
            BusinessType:"0",
            BusinessId:1,//0：文件夹  1：文件
            limit:1,
            Ismultiple:false,
            isFolder:false,
            isUpload:false,
            selectRows:[],
            list: null,
            listLoading: true,
            layout: 'total, sizes, prev, pager, next, jumper',
            elementLoadingText: '正在加载...',
            page: {
                //关于页码的相关参数
                pageShow: true, //是否显示
                total: 0, //总条数
                pageSize: 10, //每页条数
                pageNo: 1, //第几页
            },
            FileName:'',//wenjianjia



        }
    },
    components:{
       
    },
    created(){},
    mounted() {
        this.getList();//调用获取列表页的方法
    },
    methods:{
        //查询
        getList(){
            var self = this;  
            this.$http({
                method: 'GET',
                url: this.api+'/api/Common/GetFileManageLogPageBySearch?pageSize=' + self.page.pageSize + '&pageIndex=' + self.page.pageNo+'&startDate='+self.queryparam.startDate+'&endDate='+self.queryparam.endDate
            }).then(res => {
                if(res.status==200){
                    self.list=res.data.data;
                    self.page.total = res.data.total;
                    self.listLoading=false;
                }
          }).catch(error => {
            console.log(error);
          });
        }, 
        setSelectRows(val) {
            this.selectRows = val;
        },
        getSizeChange(val) {
            //table组件发射的方法 用于改变每页数据量
            this.page.pageSize = val
            //这下面需要重新调用 获取列表页的函数
            this.getList()
        },
        getCurrentPage(val) {
            //table组件发射的方法  用于改变当前所在页码
            this.page.pageNo = val
            //这下面需要重新调用 获取列表页的函数
            this.getList()
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
.el-aside {color: #333;}
.el-header{height: 100px !important;}
.el-header .search{box-sizing: border-box;border-bottom: 1px solid #eee;text-align: left;}
.el-header .search .btn{position: absolute;right: 12px;top: 2px;}
.el-header .tools{height: 40px;border: 1px solid #ccc;background: #F5F5F5;line-height: 35px;text-align: right;padding: 0px 5px;}
.el-main{height: calc(100vh - 336px);}
.el-cascader,.el-cascader--medium{width: 100%;height: 28px;line-height: 28px;}
.el-date-editor,.el-input {width: 100%;}
</style>