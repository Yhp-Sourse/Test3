<template>
  <div id="v_deviceSparePartInfo">
    <el-container style="height: calc(100vh - 102px); border: 1px solid #eee;">
      <!-- <el-aside width="250px">
        <treeSStation @checkedNodes="getList"></treeSStation>
      </el-aside> -->
      <el-container>
        <el-header>
          <div class="search">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item label="配件名称">
                <el-input v-model="queryparam.QName" placeholder="配件名称"></el-input>
              </el-form-item>
              <el-form-item label="状态">
                <el-select
                    v-model="queryparam.Status"
                    placeholder="全部"
                    clearable 
                    style="width: 100%;"
                  >
                    <el-option
                      v-for="(item, index) in StatusType"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="领用人">
                <el-input v-model="queryparam.LYR" placeholder="领用人"></el-input>
              </el-form-item>
              <el-form-item class="btn">
                <el-button type="primary" v-has="'DevSpare_handleSearch'" icon="el-icon-search"  @click="getList();">查询</el-button>
                <el-button type="primary" icon="el-icon-download"   @click="downloadBeiJi();">导出</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="tools">
            <el-button
              size="small"
              class="el-button--iconButton"
              icon="el-icon-plus"
              v-has="'DevSpare_handleAdd'"
              style="text-overflow: initial;"
              @click="handleAdd"
            >添加</el-button>
          </div>
        </el-header>
        <el-main>
          <rate-table
            :list="list"
            @handleSelectionChange="handleSelectionChange"
            @handleCellClick="handleCellClick"
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
      
      <el-dialog title="备品备件" :visible.sync="dialogVisible" width="60%">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-row>
            <el-col :span="12">
               <div>
                  <el-form-item label="区域：" prop="City">
                  <el-select
                    v-model="ruleForm.City"
                    placeholder="请选择"
                    style="width: 100%;"
                  >
                    <el-option
                      v-for="(item, index) in ruleForm.QCityNameOptions"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                  <el-form-item label="厂家名称：" prop="FacId">
                  <el-select
                    v-model="ruleForm.FacId"
                    placeholder="请选择"
                    style="width: 100%;"
                  >
                    <el-option
                      v-for="(item, index) in ruleForm.QFacNameOptions"
                      :key="index"
                      :label="item.name"
                      :value="item.id"
                    ></el-option>
                  </el-select>
                </el-form-item>
             
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div>
                 <el-form-item label="监测参数：" prop="Param">
                  <el-select v-model="ruleForm.Param" placeholder="不限"
                    @change="getModel(ruleForm.FacId,ruleForm.Param)"
                   style="width: 100%;">
                    <el-option
                      v-for="(item, index) in ruleForm.QParamOptions"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="配件名称：" prop="Name">
                  <el-input v-model="ruleForm.Name" autocomplete="off"></el-input>
                  <!-- <el-select v-model="ruleForm.Name" placeholder="请选择" 
                   @change="getmodellis(ruleForm.Name)"
                  style="width: 100%;">
                    <el-option
                      v-for="(item, index) in ruleForm.QDeviceIdOptions"
                      :key="index"
                      :label="item.name"
                      :value="item.id"
                    ></el-option>
                  </el-select> -->
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
                 <div>
                <el-form-item label="设备型号：" prop="Model">
                    <el-input v-model="ruleForm.Model" autocomplete="off"></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="唯一识别码:" prop="DeviceUniqueCode">
                  <el-input v-model="ruleForm.DeviceUniqueCode" autocomplete="off"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="生产日期:" prop="ProductionDate">
                  <el-date-picker v-model="ruleForm.ProductionDate" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                  <el-form-item label="领用人:" prop="LYR">
                    <el-input v-model="ruleForm.LYR" autocomplete="off"></el-input>
                </el-form-item>
          
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="入库日期:" prop="ProductionDate">
                  <el-date-picker v-model="ruleForm.ProductionDate" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                  <el-form-item label="出库日期:" prop="ProcurementDateEnd">
                  <el-date-picker v-model="ruleForm.ProcurementDateEnd" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
          
              </div>
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="12">
                     <div>
                <el-form-item label="子站编码:" prop="DeviceCode">
                  <el-input v-model="ruleForm.DeviceCode" autocomplete="off"></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
           <el-form-item label="是否备案:" prop="IsKeepRecord">
                    <el-radio-group v-model="ruleForm.IsKeepRecord">
                       <el-radio :label="1">是</el-radio>
                       <el-radio :label="0">否</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div>
                  <el-form-item label="运维单位：" prop="UnitId">
                  <el-select v-model="ruleForm.UnitId" placeholder="请选择" style="width: 100%;">
                    <el-option
                      v-for="(item, index) in ruleForm.QYwUnitOptions"
                      :key="index"
                      :label="item.unitName"
                      :value="item.unitId"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div>
                <el-form-item label="设备描述：" prop="Description">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容"
                    v-model="ruleForm.Description"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
            <el-row>
            <el-col :span="12">
              <div>
                <el-form-item v-show="true" label="检验单：" prop="FileName">
                  <rateUpload
                    :limit="1"
                    :Ismultiple="false"
                    :BusinessId="ruleForm.Id"
                    :BusinessType="16"
                    @uploadSuccess="uploadSuccess"
                  ></rateUpload>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12" v-show="false">
              <div>
                <el-form-item v-show="false" label="：" prop>
                  <el-input v-model="ruleForm.Status" autocomplete="off"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
       <el-dialog title="备品备件审核" :visible.sync="dialogVisibleCheck" width="50%">
        <el-form
          :model="check"
          status-icon
          :rules="rules"
          ref="check"
          label-width="100px"
          class="demo-check"
        >
        <el-form-item label="审核结果:" prop="Results">
                    <el-radio-group v-model="check.Results">
                       <el-radio :label="1">通过</el-radio>
                       <el-radio :label="0">不通过</el-radio>
                    </el-radio-group>
                </el-form-item>
                  <el-form-item label="审核意见" prop="Reasons">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容"
                    v-model="check.Reasons"
                  ></el-input>
                </el-form-item>
                 <el-form-item>
            <el-button type="primary" @click="saveForm('check')">保存</el-button>
          </el-form-item>
                 </el-form>
          </el-dialog>

      <el-dialog title="备品备件是否使用" :visible.sync="dialogVisibleisUsed" width="50%">
        <el-form
          :model="used"
          status-icon
          :rules="rules"
          ref="used"
          label-width="100px"
          class="demo-check"
        >
          <el-form-item label="是否使用:" prop="Results">
              <el-radio-group v-model="used.Results">
                <el-radio :label="1">未使用</el-radio>
                <el-radio :label="2">使用中</el-radio>
                <el-radio :label="3">待使用</el-radio>
              </el-radio-group>
          </el-form-item>
                  
          <el-form-item>
            <el-button type="primary" @click="saveForm2('used')">保存</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import treeSStation from "../common/treeSStation";
import rateTable from "../common/rateTable"; //引入table组件
import rateCascader from "../common/rateCascader"; //引入rateCascader组件
import rateUpload from "../common/rateUpload"; //引入rateCascader组件
export default {
  name: "v_deviceSparePartInfo",
  data() {
    return {
       check: {
        Results: 1,
        Reasons:"",
        Id: "",
      },
      used: {
        Results: 1,
        Reasons:"确认备品备件状态是否使用",
        Id: "",
      },
      dialogVisibleCheck:false,
      dialogVisibleisUsed:false,
      dialogVisible: false,
      StatusType:[
        {
            value: 1,
            label: "未使用",
          },
          {
            value: 2,
            label: "使用中",
          },
          {
            value: 3,
            label: "待使用",
          },
      ],
      ruleForm: {
        DeviceCode:"",
        IsKeepRecord: 1,
        FileName: "",
        FileUrl: "",
        Base64: "",
        Name:"",
        Id: "",
        City: "",
        SStation: "",
        Param: "",
        FacId: "",
        Model: "",
        ShelfTime: "",
        ProductionDate: "",
        ProcurementDate:"",
        ProcurementDateEnd:'',
        LYR:'',
        DeviceUniqueCode: "",
        Description: "",
        QModelOptions: [],
        QDeviceIdOptions:[],
        QFacNameOptions: [],
        UnitId: "",
        QYwUnitOptions: [],
        City: "",
        OptType:1,

        QCityNameOptions:[
          {
            value: "",
            label: "请选择",
          },
          {
            value: "鄂东北",
            label: "鄂东北",
          },
          {
            value: "鄂东南",
            label: "鄂东南",
          },
          {
            value: "鄂中南",
            label: "鄂中南",
          },
          {
            value: "鄂西南",
            label: "鄂西南",
          },
          {
            value: "鄂西北",
            label: "鄂西北",
          },
        ],
        QCityNameOptions_bak:
        [
          {
            value: "",
            label: "请选择",
          },
          {
            value: "SS4201999",
            label: "武汉",
          },
          {
            value: "SS4202999",
            label: "黄石",
          },
          {
            value: "SS4203999",
            label: "十堰",
          },
          {
            value: "SS4205999",
            label: "宜昌",
          },
          {
            value: "SS4206999",
            label: "襄阳",
          },
          {
            value: "SS4207999",
            label: "鄂州",
          },
          {
            value: "SS4208999",
            label: "荆门",
          },
           {
            value: "SS4209999",
            label: "孝感",
          },
           {
            value: "SS4210999",
            label: "荆州",
          },
           {
            value: "SS4211999",
            label: "黄冈",
          },
           {
            value: "SS4212999",
            label: "咸宁",
          },
           {
            value: "SS4213999",
            label: "随州",
          },
           {
            value: "SS4228999",
            label: "恩施",
          },
           {
            value: "SS4294999",
            label: "仙桃",
          },
           {
            value: "SS4295999",
            label: "潜江",
          },
           {
            value: "SS4296999",
            label: "天门",
          },
           {
            value: "SS4297999",
            label: "神农架",
          },

        ],
        QParamOptions: [
          {
            value: "",
            label: "请选择",
          },
          {
            value: "SO2",
            label: "SO2",
          },
          {
            value: "NOx",
            label: "NOx",
          },
          {
            value: "CO",
            label: "CO",
          },
          {
            value: "PM2.5",
            label: "PM2.5",
          },
          {
            value: "PM10",
            label: "PM10",
          },
          {
            value: "PM2.5，PM10",
            label: "PM10-2.5",
          },
          {
            value: "QX",
            label: "QX",
          },
          {
            value: "O3",
            label: "O3",
          },
          {
            value: "零气发生器",
            label: "零气发生器",
          },
           {
            value: "动态校准仪",
            label: "动态校准仪",
          },


        ],
      },
      rules: {
        City: [
          { required: true, message: "请选择城市", trigger: "blur" },
        ],
        FacId: [{ required: true, message: "请选择厂家名称", trigger: "blur" }],
        Param: [{ required: true, message: "请选择监测参数", trigger: "blur" }],
        Name: [{ required: true, message: "请输入设备名称", trigger: "blur" }],
        Model: [{ required: true, message: "请输入设备型号", trigger: "blur" }],
      //  DeviceUniqueCode: [{ required: true, message: "请输入唯一识别码", trigger: "blur" }],
        ProductionDate: [{ required: true, message: "请选择生产日期", trigger: "blur" }],
        ProcurementDate: [{ required: true, message: "请选择采购日期", trigger: "blur" }],
        DeviceCode: [{ required: false, message: "请输入子站编码", trigger: "blur" }],
        FileName: [{ required: true, message: "请上传检验单", trigger: "change" }],
      },
      queryparam: {
        QName: "",
        Status:"",
        LYR:""
      },
      listview: [], //详情页数据
      page: {
        //关于页码的相关参数
        pageShow: true, //是否显示
        total: 0, //总条数
        pageSize: 10, //每页条数
        pageNo: 1, //第几页
      },
      handleSelection: [], //checkbox选中行
      list: [], // table数据
      options: {
        // table样式参数
        stripe: true, // 是否为斑马纹 table
        loading: true, // 是否添加表格loading加载动画
        highlightCurrentRow: true, // 是否支持当前行高亮显示
        mutiSelect: true, // 是否支持列表项选中功能
      }, // table 的参数结束
      columns: [
        {
          prop: "city",
          label: "区域",
          width: 180,
          align: "center",
          isShow: false,
        },
          {
          prop: "warehouse",
          label: "所在仓库",
          width: 180,
          align: "center",
          isShow: true,
        },
        {
          prop: "unitName",
          label: "运维单位",
          width: 180,
          align: "center",
          isShow: true,
        },
        {
          prop: "facName",
          label: "设备厂家",
          width: 120,
          align: "center",
          isShow: true,
        },
        {
          prop: "name",
          label: "配件名称",
          width: 150,
          align: "center",
          isShow: true,
        },
        {
          prop: "deviceUniQueCode",
          label: "唯一识别码（出厂编号）",
          width: 200,
          align: "center",
          isShow: false,
        },
        {
          prop: "model",
          label: "设备型号",
          width: 100,
          align: "center",
          isShow: true,
        },
        {
          prop: "param",
          label: "监测参数",
          width: 100,
          align: "center",
          isShow: true,
        },
        {
          prop: "Show_ProcurementDate",
          label: "入库日期",
          width: 100,
          align: "center",
          isShow: true,
        },
        {
          prop: "show_ProcurementDateEnd",
          label: "出库日期",
          width: 100,
          align: "center",
          isShow: true,
        },
        {
          prop: "lyr",
          label: "领用人",
          width: 100,
          align: "center",
          isShow: true,
        },
        {
          prop: "show_Status",
          label: "状态",
          width: 80,
          align: "center",
          isShow: true,
        },
        {
          prop: "fileName",
          label: "附件",
          width: 120,
          align: "center",
          isShow: true,
            formatter: (row, column, cellValue) => {
                // if(row.fileName==null){
                //     return '<button style="border-radius: 3px;color: #FFF;background-color: #409EFF;border-color:#409EFF;" type="button" @click="handleEdit();">上传</button>';
                // }else{
                //     return '<img style="height: 22px;" title="点击下载" src="'+row.base64+'">';
                // }
                return '<a style="color:blue;">'+row.fileName+'</a>';
              }
        },
        {
          prop: "show_IsKeepRecord",
          label: "是否备案",
          width: 180,
          align: "center",
          isShow: true,
        },
         {
          prop: "show_IsTemporary",
          label: "是否临时设备",
          width: 180,
          align: "center",
          isShow: true,
        },
      
        {
          prop: "description",
          label: "设备描述",
          width: 120,
          align: "center",
          isShow: true,
        },
         {
          prop: "show_ProductionDate",
          label: "生产日期（出厂日期）",
          width: 180,
          align: "center",
          isShow: false,
        },
         {
          prop: "show_ProcurementDate",
          label: "采购日期",
          width: 120,
          align: "center",
          isShow: false,
        },
        {
          prop: "show_DeviceAreaLeadersAduit",
          label: "备机入库状态",
          width: 120,
          align: "center",
          isShow: true,
        },
        {
          prop: "reason",
          label: "审核原因",
          width: 120,
          align: "center",
          isShow: true,
        },
         {
          prop: "auditor",
          label: "审核人",
          width: 120,
          align: "center",
          isShow: true,
        },
         {
          prop: "show_AuditTime",
          label: "审核时间",
          width: 120,
          align: "center",
          isShow: true,
        },
      ], // 需要展示的列
      operates: {
        //操作栏
        width: 250,
        fixed: "right",
        list: [
          {
            id: "0",
            label: "确认",
            bgColortype: "success",
            show: true, //是否显示按钮
            className: "success", //样式类名
            hasbutton:'DevFac_handleEdit',
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              this.handleSure(index, row);
            },
          },
          {
            id: "1",
            label: "入库",
            bgColortype: "success",
            show: true, //是否显示按钮
            className: "success", //样式类名
            hasbutton:'DevFac_handleEdit',
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              this.handleEdit(index, row);
            },
          },
          {
            id: "1",
            label: "出库",
            bgColortype: "success",
            show: true, //是否显示按钮
            className: "success", //样式类名
            hasbutton:'DevFac_handleEdit',
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              this.handleEdit(index, row);
            },
          },
          {
            id: "2",
            label: "删除",
            show: true,
            bgColortype: "danger",
            className: "searchAll",
            hasbutton:'DevSpare_handleMultiplDel',
            disabled: false,
            method: (index, row) => {
              this.handledel(index, row);
            },
          },
           {
            id: "1",
            label: "审核",
            bgColortype: "warning",
            show: false, //是否显示按钮
            className: "searchAll", //样式类名
            hasbutton:'DevSpare_handleCheck',
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              this.handleCheck(index, row);
            },
          },
        ],
      }, // 列操作按钮
    }; //return ending
  },
  methods: {
      downLoad(imgUrl) {
            var codeIMG1 = ''+imgUrl+'';
            var a = document.createElement('a')
            var event = new MouseEvent("click"); // 创建一个单击事件
            a.download = name || 'pic'
            // 设置图片地址
            a.href = codeIMG1;
            // a.click();
            a.dispatchEvent(event);
        },
      saveForm(formName) {
        const Qs = require("qs");
        this.$refs[formName].validate((valid) => {
        if (valid) {
          var self = this;
          this.$http({
            headers: {
              deviceCode: "A95ZEF1-47B5-AC90BF3",
            },
            method: "post",
            url:
              self.api +
              "/api/Yw_DeviceSparePartInfo/DeviceSparePartInfo_AreaLeadersCheck",
            data:Qs.stringify(self.check),
          })
            .then((res) => {
              console.log(res);
              if (res.status == 200) {
                self.dialogVisibleCheck = !self.dialogVisibleCheck;
                self.getList();
                self.$message({
                  message: res.data.message,
                  type: res.data.type, //warning,success,info,error
                });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          return false;
        }
      });
    },
    saveForm2(formName) {
        const Qs = require("qs");
        this.$refs[formName].validate((valid) => {
        if (valid) {
          var self = this;
          this.$http({
            headers: {
              deviceCode: "A95ZEF1-47B5-AC90BF3",
            },
            method: "post",
            url:
              self.api +
              "/api/Yw_DeviceSparePartInfo/DeviceSparePartInfo_Used",
            data:Qs.stringify(self.used),
          })
            .then((res) => {
              console.log(res);
              if (res.status == 200) {
                self.dialogVisibleisUsed = !self.dialogVisibleisUsed;
                self.getList();
                self.$message({
                  message: res.data.message,
                  type: res.data.type, //warning,success,info,error
                });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          return false;
        }
      });
    },
    submitForm(formName) {
      const Qs = require("qs");
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var self = this;
          this.$http({
            headers: {
              deviceCode: "A95ZEF1-47B5-AC90BF3",
            },
            method: "post",
            url:
              self.api +
              "/api/Yw_DeviceSparePartInfo/DeviceSparePartInfo_Save",
            data: Qs.stringify(self.ruleForm),
          })
            .then((res) => {
              console.log(res);
              if (res.status == 200) {
                self.dialogVisible = !self.dialogVisible;
                self.getList();
                self.$message({
                  message: res.data.message,
                  type: res.data.type, //warning,success,info,error
                });
              }
            })
            .catch((error) => {
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
    uploadSuccess(file) {
      this.ruleForm.FileName = file.fileName;
      this.ruleForm.FileUrl = file.fileUrl;
    },
    handleAdd() {
      this.ruleForm.OptType=1;
      var self = this;
      if (self.ruleForm.Id != "") {
        self.resetForm("ruleForm"); //重置表单
        self.ruleForm.Id = ""; //如果上一行代码执行没有效果，则强制设置主键【id】为''。
      }
      self.dialogVisible = !self.dialogVisible;
    },
    handleEdit(index, row) {
      this.ruleForm.OptType=2;
      //操作栏编辑按钮
      var self = this;
      this.getToFirst(row.id);
      self.dialogVisible = !self.dialogVisible;
    },
    handleCheck(index, row) {
        var self = this;
        self.check.Id = row.id;
        self.dialogVisibleCheck = !self.dialogVisibleCheck;

     },
    handleSure(index, row){
        var self = this;
        self.used.Id = row.id;
        self.dialogVisibleisUsed = !self.dialogVisibleisUsed;
    },
    handledel(index, row) {
      //操作栏删除按钮
      var self = this;
      this.$confirm("确认删除？")
        .then(function () {
          self.Singelmultipl(row.id);
        })
        .catch(function () {});
    },
    Singelmultipl(id) {
      var self = this;
      this.$http({
        method: "GET",
        url:
          self.api +
          "/api/Yw_DeviceSparePartInfo/DeviceSparePartInfomultipl?Id=" +
          id,
      })
        .then((res) => {
          if (res.status == 200) {
            self.getList();
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
      handleCellClick(obj){//单元格单击事件处理函数
            switch(obj.column.label){
                case "附件":
                  this.commonDownLoad(obj.row.fileName,obj.row.fileUrl);
                    // if(obj.row.base64!=null && obj.row.base64.length>0){
                    //     this.downLoad(obj.row.base64);
                    // }else{
                    //     this.handleEdit("",obj.row);
                    // }
                    break;
                default : break;
            }
            
        },
        commonDownLoad(fileName,path){
            var self = this;
            this.$http({
                method: 'GET',
                url: self.api+'/api/DownLoad/commonGetDownLoadPath?partialPath='+path
            }).then(res => {
                if(res.data.code==200){
                     location.href = self.api + '/api/DownLoad/commonDownLoad?fileName='+fileName+'&path='+res.data.data;        
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
          "/api/Yw_DeviceSparePartInfo/DeviceSparePart_FindByPage?pagesize=" +
          self.page.pageSize +
          "&pageindex=" +
          self.page.pageNo +
          "&Name=" +self.queryparam.QName+
          "&Status=" +self.queryparam.Status+
          "&LYR=" +self.queryparam.LYR,
      })
        .then((res) => {
          if (res.status == 200) {
            self.list = res.data.data;
            self.page.total = res.data.count;
            self.options.loading=false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getFacName() {
      var self = this;
      this.$forceUpdate()
      this.$http({
        method: "GET",
        url: this.api + "/api/Yw_DeviceHostLibraryInfo/Get_DeviceFacInfo",
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm.QFacNameOptions = res.data.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getModel(FacId, param) {
      debugger;
      var self = this;
      this.$http({
        method: "GET",
        url:
          this.api +
          "/api/Yw_DeviceHostLibraryInfo/Get_DeviceHostLibraryInfoModel?Param=" +
          param +
          "&FacId=" +
          FacId,
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm.QDeviceIdOptions = res.data.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

      getmodellis(id) {
      var self = this;
      this.$http({
        method: "GET",
        url:
          this.api +
          "/api/Yw_DeviceSparePartInfo/Get_DeviceModel?id=" +id,
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm.Model = res.data.data[0].model;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getYwUnit() {
      var self = this;
      this.$http({
        method: "GET",
        url: this.api + "/api/Yw_DeviceHostLibraryInfo/Get_YwUnitModel",
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm.QYwUnitOptions = res.data.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getToFirst(id) {
      var self = this;
      this.$http({
        method: "GET",
        url:
          this.api +
          "/api/Yw_DeviceSparePartInfo/Get_DeviceSparePartInfo?Id=" +
          id,
      })
        .then((res) => {
          if (res.status == 200) {
            debugger;
            self.ruleForm.Id = res.data.data.id;
            self.ruleForm.City = res.data.data.city;
            self.ruleForm.FacId = res.data.data.facId;
            self.ruleForm.Param = res.data.data.param;
            self.getModel(self.ruleForm.FacId,self.ruleForm.Param);
            self.ruleForm.Name =parseInt(res.data.data.name);
            self.ruleForm.Model = res.data.data.model;
            self.ruleForm.DeviceUniqueCode = res.data.data.deviceUniqueCode;
            self.ruleForm.ProductionDate= res.data.data.productionDate;
            self.ruleForm.ProcurementDate = res.data.data.procurementDate;
            self.ruleForm.DeviceCode = res.data.data.deviceCode;
            self.ruleForm.IsKeepRecord = res.data.data.isKeepRecord;
            self.ruleForm.UnitId = res.data.data.unitId.toString();
            self.ruleForm.Description = res.data.data.description;
            self.ruleForm.FileName=res.data.data.fileName;
            self.ruleForm.FileUrl=res.data.data.fileUrl;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    selectOptionEvent(val) {
      this.ruleForm.SStation = val;
    },
    selectSStation() {
      this.$refs.cascader.selectSStation(this.ruleForm.SStation);
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
    downloadBeiJi(obj){
            var self = this;
            this.$http({
                method: 'GET',
                responseType: 'blob', // 表明返回服务器返回的数据类型
                url:  this.api +
          "/api/Yw_DeviceSparePartInfo/DeviceSparePart_FindByPageDownLoad?pagesize=" +
          self.page.pageSize +
          "&pageindex=" +
          self.page.pageNo +
          "&Name=" +
          self.queryparam.QName,
            }).then(res => {
                if(res.status==200){              
    let blob = new Blob([res.data], {type: 'application/vnd.ms-excel' })
    let  downTime= self.downLoadDate();
    const fileName = downTime + '-备品备件.xls';
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
    rateTable,
    rateCascader,
    rateUpload,
  },
  created() {
    //调用获取列表页的方法
  },
  mounted() {
    this.getList(); //调用获取列表页的方法
    this.getFacName();
    this.getYwUnit();
  },
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