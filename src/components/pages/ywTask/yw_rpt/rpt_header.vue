<template>
    <div>
        <div class="head">
            <h2 id="rptTitle" v-html="rptTitle"></h2> 
            城市：<el-tag type="success">{{headerData.city}}</el-tag>
            站点名称：<el-tag type="success">{{headerData.sStationName}}</el-tag>
            运维公司：<el-tag type="success">{{headerData.unitName}}</el-tag>
        </div>
    
        <div style="color:red;" class="beizhu">
           <p> 注:运维表单所有的项必填，没有的填写“/”</p>
           <p> 先做”O3校准仪（工作标准）量值传递记录表（每季度）“在做“O3多点校准记录表（每季度）”</p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        rptName:{
            type:String,
            default:"环境空气质量自动监测子站日常巡检记录"
        },
        headerData:{}
    },
    data(){
        return {
            TaskNo:'',
            firstButtonType:'',
            rptTitle:''
        }
    },
    mounted() {
        this.getParam();
    },
    watch:{
        rptName(){
            if (this.rptName) {
				this.rptTitle=this.rptName;
			}
        }
    },
    methods:{
        getParam() {
            var self = this;
            const data = self.getUrlKey("obj");
            if(data!=null){
                self.TaskNo = JSON.parse(data).taskNo;
                self.firstButtonType = JSON.parse(data).firstButtonType;
            }
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
            this.$emit("closeCurrentPage", "运维表单1"); //调用closeCurrentPage方法注意；两点1：第二个参数必须是string，2：长度必须大于等于4
            var obj = {taskNo:this.TaskNo,firstButtonType:this.firstButtonType};
            this.$emit("jump", {
                param: "任务编辑",
                path: "/index/ywTaskDisplay?obj="+JSON.stringify(obj),
                isjump: true,
            });
        },
    }
}
</script>
<style scoped>
    div.topbar {
        position: fixed;
        top: 100px;
        left: 250px;
        margin: 10px;
        z-index: 66;
    }
    .head {
        text-align: center;
        margin-top: 10px;
    }

        .head div {
            font-family: 宋体;
            font-size: 14px;
            padding: 10px 10px 10px 0;
        }

            .head div span {
                display: inline-block;
                width: 170px;
            }
              .rpthead{
               font-weight:bold;
               font-size: 18px;
            }
</style>
