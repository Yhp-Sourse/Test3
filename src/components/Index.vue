<template>
  <div id="v_Index">
    <el-container style="height: 100%;">
        <el-header>
            <rate-header @parentFn="openSlider"></rate-header>
        </el-header>
        <el-container>
            <el-aside width="auto" style="border-right: 1px solid #dcd8d8;max-width:250px;">
                <rate-aside @parentFn="appendToTabs" ref="slider"></rate-aside>
            </el-aside>
            <el-main>
                <rateContentmain ref="tab"></rateContentmain>
            </el-main>
            <!-- <el-aside width="250px" style="border-right: 1px solid #dcd8d8;">
                
            </el-aside> -->
        </el-container>
    </el-container>
  </div>
</template>

<script>
  import rateHeader from './layout/header'
  import rateAside from './layout/slider'
  import rateContentmain from './layout/contentMain'

  import Oidc from "oidc-client";
  var config = {
    authority: "http://localhost:5000",
    client_id: "js",
    redirect_uri: "http://localhost:5003/CallBack",
    response_type: "id_token token",
    scope: "openid profile api1",
    post_logout_redirect_uri: "http://localhost:5003/"
  };
  var mgr = new Oidc.UserManager(config);

  export default {
    name: 'v_Index',
    data() {
      return {
        
      };
    },
    watch:{
      $route(to,from){
        this.$refs.tab.addTab({param:to.meta.title});
      }
    },
    beforeCreate(){

    },
    mounted() {
      var that=this;
      mgr.getUser().then(function(user) {
        if (user) {
          // this.res = ("User logged in", user.profile);
          that.res = ("User logged in", user.profile);
        } else {
          that.res = ("User not logged in");
        }
      });
    },
    methods: {
        openSlider(obj){
            this.$refs.slider.showMenu(obj);
        },
        appendToTabs({param}){
            //console.log('参数',param)
            debugger
            this.$refs.tab.addTab({param});
        },
 
    },
    components: {
      rateHeader,rateAside,rateContentmain
    }

  }
</script>

<style scoped>
#v_Index{height: 100%;}
.el-main{padding: 0;}
section:nth-child(1){height: 100%;}
section:nth-child(2){height: 100%}
.el-header, .el-footer {background-color:#062d91;color: #fff;line-height: 60px;}
.el-aside,.el-main {background-color: #fff;text-align: center;height: 100%;}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar{width: 7px;height: 7px;background-color: #F5F5F5;}
  /*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);border-radius: 10px;background-color: #F5F5F5;}
  /*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb{border-radius: 10px;box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);background-color: #c8c8c8;}



</style>