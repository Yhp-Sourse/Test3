<template>
  <div id="v_deviceFactoryInfo">
    <el-container style="height: calc(100vh - 136px); border: 1px solid #eee">
      <!-- <el-aside width="250px">
                <treeSStation @checkedNodes="getList"></treeSStation>
      </el-aside>-->
      <el-container>
        <el-header>
          <div class="search">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item label="厂家名称">
                <el-input v-model="queryparam.QName" placeholder="厂家名称"></el-input>
              </el-form-item>
              <el-form-item class="btn">
                <el-button type="primary" v-has="'DevFac_handleSearch'" icon="el-icon-search"  @click="getList();">查询</el-button>
                <el-button type="primary" icon="el-icon-download"   @click="download();">导出</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="tools">
            <el-button
              size="small"
              class="el-button--iconButton"
              icon="el-icon-plus"
              v-has="'DevFac_handleAdd'"
              style="text-overflow: initial;"
              @click="handleAdd"
            >添加</el-button>
            <el-button
              size="small"
              class="el-button--iconButton"
              icon="el-icon-delete"
              v-has="'DevFac_handleMultiplDel'"
              style="text-overflow: initial;"
              @click="handleMultiplDel"
            >删除</el-button>
          </div>
        </el-header>

        <el-main>
          <rate-table
            :list="list"
            @handleSelectionChange="handleSelectionChange"
            @sizeChange="getSizeChange"
            @currentPage="getCurrentPage"
            :options="options"
            :columns="columns"
            :operates="operates"
            :pageShow="page.pageShow"
            :total="page.total"
          ></rate-table>
        </el-main>
      </el-container>
    </el-container>

    <div>
      <el-dialog title="编辑" :visible.sync="dialogVisible" width="50%">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="厂家名称" prop="Name">
            <el-input v-model="ruleForm.Name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="厂家描述" prop="Description">
            <el-input v-model="ruleForm.Description" autocomplete="off"></el-input>
          </el-form-item>
          <!-- <el-form-item label="排序" prop="SortOrder">
                        <el-input v-model="ruleForm.SortOrder" autocomplete="off"></el-input>
          </el-form-item>-->
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import treeSStation from "../common/treeSStation";
import rateTable from "../common/rateTable"; //引入table组件

export default {
  name: "v_deviceFactoryInfo",
  data() {
    return {
      dialogVisible: false,
      ruleForm: {
        Id: "",
        Name: "",
        Description: ""
        //SortOrder:'',
      },
      rules: {
        Name: [{ required: true, message: "请输入厂家名称", trigger: "blur" }],
        Description: [
          { required: true, message: "请输入厂家描述", trigger: "blur" }
        ]
        //SortOrder: [{ required: true, message: '请输入排序', trigger: 'blur' }],
      },
      queryparam: {
        QName: ""
      },
      listview: [], //详情页数据
      page: {
        //关于页码的相关参数
        pageShow: true, //是否显示
        total: 0, //总条数
        pageSize: 10, //每页条数
        pageNo: 1 //第几页
      },
      handleSelection: [], //checkbox选中行
      list: [], // table数据
      options: {
        // table样式参数
        stripe: true, // 是否为斑马纹 table
        loading: true, // 是否添加表格loading加载动画
        highlightCurrentRow: true, // 是否支持当前行高亮显示
        mutiSelect: true // 是否支持列表项选中功能
      }, // table 的参数结束
      columns: [
        { prop: "id", label: "序号", align: "center", isShow: true },
        { prop: "name", label: "厂家名称", align: "center", isShow: true },
        {
          prop: "description",
          label: "厂家描述",
          align: "center",
          isShow: true
        }
      ], // 需要展示的列
      operates: {
        //操作栏
        width: 200,
        fixed: "right",
        list: [
          {
            id: "1",
            label: "编辑",
            bgColortype: "success",
            show: true, //是否显示按钮
            className: "success", //样式类名
            hasbutton:'DevFac_handleEdit',
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              this.handleEdit(index, row);
            }
          },
          {
            id: "2",
            label: "删除",
            show: true,
            bgColortype: "danger",
            className: "searchAll",
            hasbutton:'DevFac_handleMultiplDel',
            disabled: false,
            method: (index, row) => {
              this.handledel(index, row);
            }
          }
        ]
      } // 列操作按钮
    }; //return ending
  },
  methods: {
    submitForm(formName) {
      const Qs = require("qs");
      this.$refs[formName].validate(valid => {
        if (valid) {
          var self = this;
          debugger;
          this.$http({
            headers: {
              deviceCode: "A95ZEF1-47B5-AC90BF3"
            },
            method: "post",
            url: self.api + "/api/Yw_DeviceFactoryInfo/DeviceFactoryInfoSubmit",
            data: Qs.stringify(self.ruleForm)
          })
            .then(res => {
              console.log(res);
              if (res.status == 200) {
                self.dialogVisible = !self.dialogVisible;
                self.getList();
                self.$message({
                  message: res.data.message,
                  type: res.data.type //warning,success,info,error
                });
              }
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleMultiplDel() {
      var self = this;
      var ids = "";
      if (this.handleSelection == "") {
        self.$message({
          message: "请选择要删除的数据！",
          type: "warning" //success,warning,info,error
        });
        return;
      }

      this.handleSelection.forEach((item, index) => {
        if (index != self.handleSelection.length - 1) {
          ids += item.id + ",";
        } else {
          ids += item.id;
        }
      });
      this.$confirm("确认删除？")
        .then(function() {
          self.handlemultipl(ids);
        })
        .catch(function() {});
    },
     handlemultipl(ids){
            var self = this;
            this.$http({
                method: 'GET',
                url: self.api+'/api/Yw_DeviceFactoryInfo/DeviceFactoryDelmultipl?ids='+ids
            }).then(res => {
                if(res.status==200){
                    self.getList();
                    self.$message({
                        message: res.data.message,
                        type: res.data.type  //warning,success,info,error
                    });
                }
            }).catch(error => {
                console.log(error);
            });
        },
    handleSelectionChange(val) {
      //checkbox选中的数据val 是选中行的所有数组
      this.handleSelection = val;
    },
    getSizeChange(val) {
      //table组件发射的方法 用于改变每页数据量
      this.page.pageSize = val;
      //这下面需要重新调用 获取列表页的函数
      this.getList();
    },
    getCurrentPage(val) {
      //table组件发射的方法  用于改变当前所在页码
      this.page.pageNo = val;
      //这下面需要重新调用 获取列表页的函数
      this.getList();
    },
    handleAdd() {
      var self = this;
      if (self.ruleForm.Id != "") {
        self.resetForm("ruleForm"); //重置表单
        self.ruleForm.Id = ""; //如果上一行代码执行没有效果，则强制设置主键【id】为''。
      }
      self.dialogVisible = !self.dialogVisible;
    },
    handleEdit(index, row) {
      //操作栏编辑按钮
      var self = this;
      this.getToFirst(row.id);
      self.dialogVisible = !self.dialogVisible;
    },
    handledel(index, row) {  //操作栏删除按钮
            var self=this;
            this.$confirm('确认删除？').then(function () {
                self.DeviceFactorymultipl(row.id);
            }).catch(function () {
                
            });
        },

       DeviceFactorymultipl(id){
            debugger
            var self = this;
            this.$http({
                method: 'GET',
                url: self.api+'/api/Yw_DeviceFactoryInfo/DeviceFactorymultipl?Id='+id
            }).then(res => {
                if(res.status==200){
                    self.getList();
                    self.$message({
                        message: res.data.message,
                        type: res.data.type  //warning,success,info,error
                    });
                }
            }).catch(error => {
                console.log(error);
            });
        },
    getList(obj) {
      var self = this;
      this.$http({
        method: "GET",
        url:
          this.api +
          "/api/Yw_DeviceFactoryInfo/DeviceFactoryInfo_FindByPage?pagesize=" +
          self.page.pageSize +
          "&pageindex=" +
          self.page.pageNo +
          "&Name=" +
          self.queryparam.QName
      })
        .then(res => {
          if (res.status == 200) {
            self.list = res.data.data;
            self.page.total = res.data.count;
            self.options.loading=false;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    getToFirst(Id) {
      var self = this;
      this.$http({
        method: "GET",
        url:
          this.api + "/api/Yw_DeviceFactoryInfo/Get_DeviceFactoryInfo?Id=" + Id
      })
        .then(res => {
          if (res.status == 200) {
            self.ruleForm.Id = res.data.data.id;
            self.ruleForm.Name = res.data.data.name;
            self.ruleForm.Description = res.data.data.description;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

      //下载时间
    downLoadDate(){       
            const date = new Date();
            const y =date.getFullYear();
            const M = (date.getMonth()+1).toString().padStart(2,0);
            const d = date.getDate().toString().padStart(2, 0);
            const h = date.getHours().toString().padStart(2, 0);
            const mm = date.getMinutes().toString().padStart(2, 0);
            const s = date.getSeconds().toString().padStart(2, 0);
            return y  + M +  + d  + h  + mm + s;
    },

    //导出
    download(obj){
            var self = this;
            this.$http({
                method: 'GET',
                responseType: 'blob', // 表明返回服务器返回的数据类型
                url:   this.api +
          "/api/Yw_DeviceFactoryInfo/DeviceFactoryInfo_FindByPageDownLoad?pagesize=" +
          self.page.pageSize +
          "&pageindex=" +
          self.page.pageNo +
          "&Name=" +
          self.queryparam.QName
            }).then(res => {
                if(res.status==200){              
    let blob = new Blob([res.data], {type: 'application/vnd.ms-excel' })
    let  downTime= self.downLoadDate();
    const fileName = downTime + '-设备厂家.xls';
    const elink = document.createElement('a');
    elink.download = fileName;
    elink.style.display = 'none';
    elink.href = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    URL.revokeObjectURL(elink.href); // 释放URL 对象
    document.body.removeChild(elink);
                }
          }).catch(error => {
            console.log(error);
          });
   },


  },
  components: {
    treeSStation,
    rateTable
  },
  created() {
    //调用获取列表页的方法
  },
  mounted() {
    this.getList(); //调用获取列表页的方法
  }
};
</script>
<style scoped>
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  background-color: #f5f5f5;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #c8c8c8;
}
.el-aside {
  color: #333;
}
.el-header {
  height: 100px !important;
}
.el-header .search {
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  text-align: left;
}
.el-header .search .btn {
  position: absolute;
  right: 12px;
  top: 2px;
}
.el-header .tools {
  height: 40px;
  border: 1px solid #ccc;
  background: #f5f5f5;
  line-height: 35px;
  text-align: right;
  padding: 0px 5px;
}
.el-main {
  height: calc(100vh - 336px);
}
/* .el-footer {height: 50px;text-align: left;}
.el-footer .el-pagination{margin: 14px 0;} */
</style>