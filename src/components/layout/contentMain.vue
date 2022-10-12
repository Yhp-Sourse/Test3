<template>
    <div id="v_Tabs">
        <el-tabs v-model="editableTabsValue"  type="card"  @tab-remove="removeTab" @tab-click="linkRouter">
          <el-tab-pane
              v-for="(item) in editableTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
              :closable="item.close"
          >
              <!-- 首页高德地图组件 -->
              <!-- <Map style="border-radius: 1px;margin: -15px 10px 0px 10px;" ></Map> -->
              <component @jump='addTab' :is="item.component"></component>
              
              <!-- 二级路由 显示home路由下的子路由视图 如果路由名称和当前页面的名称不对应则不显示。-->
              <router-view @jump='addTab' @closeCurrentPage='removeTab'></router-view>
          </el-tab-pane>
        </el-tabs>
    </div>
    
</template>
<script>
  import map from '../pages/common/map'
  
  export default {
    name: 'v_Tabs',
    data() {
      return {
        editableTabsValue: '1',
        editableTabs: [{
          title: '首页',
          name: '1',
          content: '',
          component:map,
        }],
        tabIndex: 1
      }
    },
    mounted(){
      //console.log(this.$route);//路由信息
    },
    computed: {
      
    },
    methods: {
      jump(obj){
        debugger
        this.$router.push({ path: '/index/ywUnit' });
      },
      addTab(targetName) {
        debugger
        if(targetName.isjump){
           this.$router.push({ path: targetName.path});
        }
        var exist = false;
        for (var i = 0; i < this.editableTabs.length; i++) {
          if (targetName.param === this.editableTabs[i].title) {
            exist = true;
            // this.editableTabsValue=i;
            this.editableTabsValue=this.editableTabs[i].name;
            return;
          }
        }
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: targetName.param,
          name: newTabName,
          content: targetName.param,
          editable:'',
          close:'closable'
        });
        this.editableTabsValue = newTabName;
      },
      removeTab(targetName) {
        debugger
        if(typeof targetName =="string" && targetName.length>=4){}
        this.editableTabs.forEach(item => {
            if(item.title===targetName){targetName=item.name;}
        });
        let tabs = this.editableTabs;
        var editTabTile="";
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                editTabTile=nextTab.title;
                activeName = nextTab.name;
              }
            }
          });
        }
        // this.$router.go(-1);
        this.$router.options.routes.forEach(item => {//遍历全局所有路由。并找到当前路由信息并跳转该路由。
        // this.$alert(item.name);
        // this.$alert(editTabTile);
            if(item.name==editTabTile){
                this.$router.push({ path: item.path });
                return;
            }else{
              // this.$router.push({ path: "http://localhost:8080/#/sys_usr" });
            }
        });
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      },
      //跳转路由并且设置当前活跃的标签
      linkRouter(currentTab) {
        this.$router.options.routes.forEach(item => {//遍历全局所有路由。并找到当前路由信息并跳转该路由。
            // if(item.name==currentTab.label){
            //     this.$router.push({ path: item.path });
            //     return;
            // }
            //tabs标题改为meta.title中取2022-09-01
            if(item.meta.title==currentTab.label){
                this.$router.push({ path: item.path });
                return;
            }
        });
        // this.editableTabsValue = currentTab.name;
      }
    },
    components:{
       
    }

  }
</script>
<style scoped>
/* #v_Tabs[data-v-bdda1ea4] {
    width: 84% !important;
    float: right;
    position: absolute;
    top: 0px;
    right: 0px;
} */
 /* .el-tabs--card>.el-tabs__header .el-tabs__item .el-icon-close:nth-child(1) span{
     display: none !important;
} */
.el-tabs__item .el-icon-close:before {
    -webkit-transform: scale(.9);
    transform: scale(.9);
    display: none !important;
}
/* .el-tabs__item.is-closable {
    display: none !important;
} */
#v_Tabs{height: 100%;}
#v_Tabs .el-tabs{height: 100%;}
</style>