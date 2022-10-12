<template>
    <div id="v_Cascader">
        <el-cascader 
            v-model="selectOption1"
            :options="listOption"
            :props="defaultProp"
            size="medium"
            :change-on-select="checkStrictly"
            @change='change'
            placeholder="请选择表单进行切换">
        </el-cascader>
    </div>    
</template>
<script>
export default {
    name:'v_Cascader',
    props:{
        TaskCode:'',
        isRefresh:false,
        checkStrictly:false,
        ReportCode:'',
        selectOption:'',
        defaultProp:{
            type:Object,
            default:()=>{
                value: "id";
                label: 'text';
                children: 'children';
                expandTrigger: "hover";
                emitPath: false//在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值
            }
        },
    },
    data(){
        return{
            selectOption1:'',
            listOption:[],
        }
    },
    watch:{
        selectOption(){
            if (this.selectOption) {
				this.selectOption1=this.selectOption;
			}
        },
        isRefresh(oldVal,newVal){
            this.initRateCascader();
            this.isRefresh=false;
        }
    },
    computed: {},
    mounted(){
        this.initRateCascader();//初始化rateCascader组件
    },
    methods:{
        change(){
            this.$emit('selectOptionEvent', this.selectOption1);
        },
        initRateCascader(){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_Rpt/GetYw_RptType?TaskCode='+self.TaskCode+'&ReportCode='+self.ReportCode
            }).then(res => {
                if(res.status==200){
                    self.listOption=JSON.parse(res.data.data);
                }
            }).catch(error => {
                    console.log(error);
            });
        },
    }
}
</script>
<style scoped>
.el-cascader,.el-cascader--medium{width: 100%;height: 28px;line-height: 28px;}



</style>