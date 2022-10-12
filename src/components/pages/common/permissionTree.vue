<template>
   <div id='v_slider'>
        <div v-if="IsInput" class="ipt">
            <el-input placeholder="请输入菜单名称"
                    suffix-icon="el-icon-search" 
                    size="medium"
                    v-model="filterText"
                    @change="filterChange">
            </el-input>
        </div>
        <div class="tree">
            <el-tree v-bind:data="treeData"
             :check-strictly = checktype
             :show-checkbox="IsCheckBox"
              node-key="id"
             :props="defaultProps"
             ref="tree"
             :expand-on-click-node="IsExpand"
             :check-on-click-node="IsCheckOn"
             @node-click="handleNodeClick();"
             @check="handleNodeClick();"             
             default-expand-all
             highlight-current
             :filter-node-method="filterNode"
            >
        </el-tree>    
        </div>   
   </div>     
</template>
<script>
export default {
    name:'v_slider',
    props:{
        IsCheckBox:{//是否显示复选框
            type: Boolean,
            default: true
        },
        IsInput: {//是否显示搜索框
            type: Boolean,
            default: true
        },
        CheckData:{//选中的站点 egg:[{ sStation: 'SS4201051' }]
            type: Array,
            default:()=>[]
        }, 
    },
    data(){
        return {
            checktype:true,
            active: 0,
            IsExpand: false,
            filterText: '', // 搜索框（左树子表）的值
            AllCheckNode: [],
            AllCheckNodeTmp: [],
            SingeId: 0,
            IsCheckOn: true,
            onClick: function (e) { },//树节点点击时回调 
            defaultProps: {
                id: "id",
                label: 'nodeName',
                children: 'children',
            },
            treeData: [],//树组件 数据源
            
        }
    },
    mounted() {
        this.InitTreeSStation();
    },
    watch: {
      CheckData() {
        this.setCheckedNodes();
      }
    },
    methods: {
        InitTreeSStation(){            
          this.$http({
            method: 'GET',
            url: this.api+'/api/Yw_Sys_Menu/GetPermissionTree'
           }).then(res => {
              if(res.status==200){        
                  debugger;
                this.treeData=res.data.data
                this.setCheckedNodes();
             }
          }).catch(error => {
            console.log(error);
          });
        },

        filterNode: function (value, data, node) {//过滤树节点方法
                if (!value) return true;
                return data.nodeName.indexOf(value) !== -1;
        },
        filterChange: function () {//触发过滤树节点事件
            // 这里每当输入的数据有变化就触发原生的过滤节点这个函数
            this.$refs.tree.filter(this.filterText.trim());
        },
        handleNodeClick(data,node,self) {//共三个参IsCheckOn数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点
           this.checktype=false;  
          // var id=this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys());     
            var id=this.$refs.tree.getCheckedNodes(false,true);
            this.$emit('checkedNodes', id);
        },
        setCheckedNodes() {//设置树节点选中
            this.checktype=true;
            this.$nextTick(()=>{
                this.$refs.tree.setCheckedNodes(this.CheckData);
                
           })                
        },
    },
    components: {

    }
}
</script>
<style scoped>
  /* #slider{height: cacl(100% - 60px);background: #ccc;} */
.ipt{height: 40px;}
.el-input{width: 240px;position:absolute;top:2px;left:2px;z-index: 9;}

</style>