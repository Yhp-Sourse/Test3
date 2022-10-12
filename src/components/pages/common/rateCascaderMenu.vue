<template>
    <div id="v_Cascader">
        <el-cascader v-model="selectOption"
             :options="listOption"
             :props="defaultProp"
             size="medium"
             :change-on-select="checkStrictly"
             @change='change'
             placeholder="请选择">
        </el-cascader>
    </div>    
</template>
<script>
export default {
    name:'v_Cascader',
    props:{
        selectOption:'',
        checkStrictly:false
    },
    data(){
        return{
            // selectOption:'',
            listOption:[],
            defaultProp: {
                value: "menu_id",
                label: 'menu_name',
                children: 'children',
                expandTrigger: "hover",
                emitPath: false//在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值
            },
        }
    },
    computed: {
    },
    mounted(){
        this.initRateCascader();//初始化rateCascader组件
    },
    methods:{
        change(){
            this.$emit('selectOptionEvent', this.selectOption);
        },
        initRateCascader(){
            this.listOption=JSON.parse(sessionStorage.getItem('treeMenuData'));
        },
    }
}
</script>
<style scoped>
.el-cascader,.el-cascader--medium{width: 100%;height: 28px;line-height: 28px;}
</style>