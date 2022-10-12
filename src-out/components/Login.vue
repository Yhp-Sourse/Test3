<template>
  <div class="Login">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="rules"
      label-width="80px"
      class="login-box"
    >
      <h3 class="login-title">欢迎登录</h3>
      <!-- <div align="center">
              <el-image
              style="width: 60px; height: 60px;border-radius:50%;"
              src='/src/assets/register/profile.jpg'
              fit="contain"></el-image>
          </div> -->
      <el-form-item label="账号" prop="userName">
        <!-- <i class="el-icon-user"></i> -->
        <el-input
          type="text"
          placeholder="请输入账号"
          v-model:value="loginForm.userName"
        />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model:value="loginForm.password"
        />
      </el-form-item>
      <el-form-item label="验证码" style="margin-left: 0px" prop="code">
        <div class="el-row" span="24">
          <div class="el-col el-col-16">
            <el-input
              type="text"
              maxlength="4"
              placeholder="请输入验证码"
              prefix-icon=""
              v-model:value="loginForm.code"
              clearable
              autocomplete="off"
              ref="code"
            ></el-input>
          </div>
          <div class="el-col el-col-8">
            <div class="login-code">
              <span class="login-code-img" @click="onLoginCodeClick">{{
                loginCode
              }}</span>
            </div>
          </div>
        </div>
      </el-form-item>
      <!--<el-form-item>
              <el-checkbox v-model="loginForm.rememberMe">记住密码</el-checkbox>
          </el-form-item>-->

      <el-form-item>
        <el-button type="primary" v-on:click="login('loginForm')"
          >登录</el-button
        >
      </el-form-item>
    </el-form>

    <template>
      <div class="footer">
        <p>
          发布单位：湖北省生态环境监测中心站&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;技术支持：武汉天虹环保产业股份有限公司&nbsp;武汉雷特科技有限公司
        </p>
        <p>浏览器请选择IE8以上、360浏览器(极速模式)、火狐浏览器</p>
      </div>
    </template>
    <el-dialog title="温馨提示" v-model:visible="dialogVisible" width="30%">
      <span>请检查用户名密或码或验证码是否输入正确！</span>
      <template v-slot:footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import md5 from 'blueimp-md5'
export default {
  name: 'Login',
  data() {
    // 验证码验证
    const validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else if (value !== this.loginCode) {
        callback(new Error('验证码输入错误'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        userName: '',
        password: '',
        code: '',
        rememberMe: true,
      },
      loginCode: null,
      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        userName: [
          { required: true, message: '账号不可为空', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '密码不可为空', trigger: 'blur' },
        ],
        code: [
          { validator: validateCode, trigger: 'blur' },
          { required: true, message: '密码不可为空', trigger: 'blur' },
        ],
      },

      // 对话框显示和隐藏
      dialogVisible: false,
    }
  },
  mounted() {
    this.init()
    //this.getdata()
    //this.getRememberMe();
  },
  methods: {
    //初始化 `验证码`
    init() {
      this.onLoginCodeClick()
    },
    // 初始化 `验证码`
    onLoginCodeClick() {
      this.loginCode = Math.random().toString(36).substr(-4)
    },
    login(formName) {
      const Qs = require('qs')
      let _this = this
      // _this.loginForm = {
      //     userName: _this.loginForm.userName,
      //      password: md5(_this.loginForm.password).toUpperCase(),
      //     rememberMe: _this.loginForm.rememberMe
      //  };
      // 为表单绑定验证功能
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http({
            headers: {
              deviceCode: 'A95ZEF1-47B5-AC90BF3',
            },
            method: 'post',
            url: _this.api + '/api/Login/Login',
            data: _this.Qs.stringify(_this.loginForm),
          })
            .then((res) => {
              if (res.data.code == '200') {
                sessionStorage.setItem(
                  'currentUserName',
                  res.data.user.userName
                )
                sessionStorage.setItem('currentUserId', res.data.user.userId)
                sessionStorage.setItem('Authorization', res.data.user.sessionId)
                //添加角色信息存到sessionStorage
                sessionStorage.setItem('roleType', res.data.user.userType)
                //  if(_this.loginForm.rememberMe){
                //      localStorage.setItem("rememberMe",Qs.stringify(_this.loginForm));
                //  }else{
                //     localStorage.setItem("rememberMe","");
                //  }
                _this.$router.push('/index')
              } else {
                _this.$message({
                  message: res.data.result,
                  type: 'error',
                })
              }
            })
            .catch((error) => {
              _this.$message({
                message: '请检查账号密码是否正确！',
                type: 'warning',
              })
              console.log(error)
            })
        } else {
          // this.dialogVisible = true;
          return false
        }
      })
    },
    getRememberMe() {
      const qs = require('qs')
      if (localStorage.getItem('rememberMe')) {
        var str = localStorage.getItem('rememberMe')
        var usrInfo = qs.parse(str)
        this.loginForm.userName = usrInfo.userName
        this.loginForm.password = usrInfo.password
      }
    },
    getdata() {
      const qs = require('qs')
      var _this = this
      this.$http
        .get(this.api + 'userList')
        .then(function (response) {
          var data = qs.parse(response.data).data.recordset
          _this.user = data
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        .finally(function () {
          // always executed
        })
    },
  },
}
</script>

<style scoped>
.Login {
  height: 100vh;
  background: url(../assets/Images/hb_bj2.jpg);
}
.login-box {
  background: #fff;
  border: 1px solid #dcdfe6;
  width: 350px;
  position: absolute;
  left: calc(50% - 211px);
  top: calc(50% - 170px);
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}
.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
.el-button--primary {
  margin-left: calc(50% - 80px) !important;
}
.footer {
  position: fixed;
  left: calc(50% - 290px);
  bottom: 10px;
  color: #fff;
}
.footer p:nth-child(2) {
  text-align: center;
}
.login-code {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 0 0 10px;
}
.login-code-img {
  width: 100px;
  height: 38px;
  background-color: #fdfdfd;
  border: 1px solid #dcdfe6;
  color: #333;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 5px;
  line-height: 38px;
  text-indent: 5px;
  text-align: center;
  cursor: pointer;
  transition: all ease 0.2s;
}
.login-code-img :hover {
  border-color: #c0c4cc;
  transition: all ease 0.2s;
}
</style>
