<template>
   <div id='v_slider'>
        <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> -->
        <el-menu :default-openeds='["200","3","4","5","6","2020082116471091274"]' router class="el-menu-vertical-demo" id="QWE"  :unique-opened='isunique' :collapse="isCollapse" @select="handleSelect">        
            <el-submenu v-for='first in menuData' :index='first.menu_id' :key='first.menu_id'>
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{first.menu_name}}</span>
                </template>
                <template v-if="isSubmenu">
                    <el-submenu v-for='second in first.children' :index='second.menu_url' :key='second.menu_id'>
                        <span slot="title">{{second.menu_name}}</span>
                        <el-menu-item v-for='third in second.children'  :index='third.menu_url' :key='third.menu_id'>{{third.menu_name}}</el-menu-item> 
                    </el-submenu> 
                </template>  
                <template v-else>
                     <el-menu-item v-for='second in first.children'  :index='second.menu_url' :key='second.menu_id'>{{second.menu_name}}</el-menu-item> 
                </template>  

            </el-submenu>
        </el-menu> 
        <div class="box"><i :class="iconClass" @click="hide"></i></div>                  
   </div>     
</template>
<script>
export default {
    name:'v_slider',
    data(){
        return {

            iconClass:'el-icon-d-arrow-left',
            isSHow:true,
            isCollapse: true,
            isunique: true,
            isSubmenu:false,
            menuData: [],
            treeMenu:[]
        }
    },
    mounted() {
        this.InitSecondMenu();
    },
    methods: {
        InitSecondMenu(){
            var self=this;
            var Enumerable = require('linq');
            var data=JSON.parse(sessionStorage.getItem('menuData'));
            var menuData_cache=JSON.parse(sessionStorage.getItem('menuData'));
            if (!(typeof menuData_cache == "string" && JSON.parse(menuData_cache) != null)) {
                this.$http({
                    method: 'GET',
                    url: this.api+'/api/Yw_Sys_Menu/GetMainMenu?usrId='+sessionStorage.getItem("currentUserId")
                }).then(res => {
                    if(res.status==200){
                        sessionStorage.setItem("menuData",JSON.stringify(res.data.data));
                        data=JSON.parse(sessionStorage.getItem('menuData'));
                        var first=Enumerable.from(data).where("p=>p.menu_level==1").toArray();//一级菜单
                        var second=Enumerable.from(data).where("p=>p.menu_level==2").toArray();//二级菜单
                        var third=Enumerable.from(data).where("p=>p.menu_level==3").toArray();//三级菜单
                        third.forEach(second => {
                            second.children=Enumerable.from(data).where("p=>p.menu_pid=="+second.menu_id +"&p.menu_type==1").orderBy("p=>p.menu_order").toArray();//将三级菜单挂载在二级菜单下
                        });
                        second.forEach(first => {
                            first.children=Enumerable.from(data).where("p=>p.menu_pid=="+first.menu_id +"&p.menu_type==1").orderBy("p=>p.menu_order").toArray();//将二级菜单挂载在一级菜单下
                        });
                        first.forEach(first => {
                            first.children=Enumerable.from(data).where("p=>p.menu_pid=="+first.menu_id +"&p.menu_type==1").orderBy("p=>p.menu_order").toArray();//将一级菜单挂载在this.menuData下
                        });
                        self.treeMenu=first;
                        // self.menuData=Enumerable.from(first).where("p=>p.menu_id=='200'").toArray();
                        self.isCollapse=false;
                        sessionStorage.setItem("treeMenuData",JSON.stringify(self.treeMenu));
                        self.showMenu({param:["200"]});//200代表第一个运维管理菜单
                    }
                }).catch(error => {
                    console.log(error);
                });
            }else{
                var first=Enumerable.from(data).where("p=>p.menu_level==1").toArray();//一级菜单
                var second=Enumerable.from(data).where("p=>p.menu_level==2").toArray();//二级菜单
                var third=Enumerable.from(data).where("p=>p.menu_level==3").toArray();//三级菜单
                third.forEach(second => {
                    second.children=Enumerable.from(data).where("p=>p.menu_pid=="+second.menu_id).orderBy("p=>p.menu_order").toArray();//将三级菜单挂载在二级菜单下
                });
                second.forEach(first => {
                    first.children=Enumerable.from(data).where("p=>p.menu_pid=="+first.menu_id).orderBy("p=>p.menu_order").toArray();//将二级菜单挂载在一级菜单下
                });
                first.forEach(first => {
                    first.children=Enumerable.from(data).where("p=>p.menu_pid=="+first.menu_id).orderBy("p=>p.menu_order").toArray();//将一级菜单挂载在this.menuData下
                });
                this.treeMenu=first;
                this.menuData=Enumerable.from(first).where("p=>p.menu_id==1").toArray();
                this.isCollapse=false;
                this.showMenu({param:["200"]});//200代表第一个运维管理菜单
            }
            
        },
        showMenu(obj){
            var self=this;
            var Enumerable = require('linq');
            this.menuData=Enumerable.from(this.treeMenu).where("p=>p.menu_id=="+obj.param[0]).orderBy("x=>x.menu_order").toArray();
            this.menuData.forEach(item=>{
                item.children.forEach(i=>{
                    if(i.children!=null&&i.children.length>0){
                        self.isSubmenu=true;return;
                    }else{
                        self.isSubmenu=false;return;
                    }
                })
            })
            this.isCollapse=false;
        },
        handleSelect(key, keyPath) {//子组件的方法名，随便取
            this.$router.options.routes.forEach(item => {//遍历全局所有路由。并找到当前路由信息并跳转该路由。
                if(item.path==key){
                    // this.$emit('parentFn',{param:item.name});
                    this.$emit('parentFn',{param:item.meta.title});////tabs标题改为meta.title中取2022-09-01
                    return;
                }
            });
        },
        hide(){
            this.isSHow=!this.isSHow;
            var aside=document.querySelector('.el-aside');
            if(!this.isSHow){
                this.iconClass='el-icon-d-arrow-right';
                aside.style.width="20px";
                this.isCollapse=true;
            }else{
                this.iconClass='el-icon-d-arrow-left';
                aside.style.width="250px";
                 this.isCollapse=false;
            }
            
        }
    },
    components: {

    }
}
</script>
<style scoped>
#v_slider{position: relative;}
  /* #slider{height: cacl(100% - 60px);background: #ccc;} */
.el-menu-vertical-demo:not(.el-menu--collapse) {box-sizing:border-box;width: 249px;min-height: 400px;}
.el-menu {text-align: left;}
.el-menu-item{padding-left: 80px !important;}
.box:hover i{background: #fff;color:lightskyblue;}
.box{font-size:20px;color:darkslateblue;background:#fff;position:absolute;right: 0px;top: calc(50vh - 70px);z-index: 9;}

</style>