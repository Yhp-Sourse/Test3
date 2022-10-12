<template>
  <div id="v_ywPowercut">
    <el-container style="height: calc(100vh - 102px); border: 1px solid #eee">
      <el-aside width="250px">
        <treeSStation @checkedNodes="getSearchStations"></treeSStation>
      </el-aside>

      <el-container>
        <el-header>
          <div class="search">
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item label="状态" v-if="false">
                <el-select
                  v-model:value="queryparam.QState"
                  placeholder="不限"
                  style="width: 100%"
                >
                  <el-option
                    v-for="(item, index) in queryparam.QStateOptions"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="停电时间：">
                <el-date-picker
                  v-model:value="queryparam.startDate"
                  type="date"
                  placeholder="选择开始日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="-">
                <el-date-picker
                  v-model:value="queryparam.endDate"
                  type="date"
                  placeholder="选择结束日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                ></el-date-picker>
              </el-form-item>
              <el-form-item class="btn">
                <el-button
                  type="primary"
                  v-has="'ywPowercut_handleSearch'"
                  icon="el-icon-search"
                  @click="getList()"
                  >查询</el-button
                >
                <el-button
                  type="primary"
                  icon="el-icon-download"
                  v-has="'ywPowercut_handleExport'"
                  @click="download()"
                  >导出</el-button
                >
              </el-form-item>
            </el-form>
          </div>
          <div class="tools">
            <el-button
              size="small"
              class="el-button--iconButton"
              icon="el-icon-plus"
              style="text-overflow: initial"
              @click="handleAdd"
              >添加</el-button
            >
            <el-button
              size="small"
              class="el-button--iconButton"
              icon="el-icon-delete"
              style="text-overflow: initial"
              @click="handleMultiplDel"
              >删除</el-button
            >
            <!-- <el-button
                size="small"
                class="el-button--iconButton"
                icon="el-icon-back"
                style="text-overflow: initial;"
                @click="handleCancel"
              >撤回</el-button> -->
          </div>
        </el-header>

        <el-main>
          <!-- <rate-table
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
            ></rate-table> -->

          <el-table
            :data="list"
            @selection-change="handleSelectionChange"
            style="width: 100%"
          >
            <el-table-column
              show-overflow-tooltip
              type="selection"
            ></el-table-column>
            <el-table-column prop="sStationName" label="站点名称" width="150">
            </el-table-column>
            <el-table-column
              prop="show_BlackoutTime"
              label="停电时间"
              width="150"
            >
            </el-table-column>
            <el-table-column
              prop="invalidHour"
              label="无效小时数据时间"
              width="150"
            >
            </el-table-column>
            <el-table-column
              prop="show_BlackoutHour"
              label="停电时长(分钟)"
              width="150"
            >
            </el-table-column>
            <el-table-column align="center" label="PM10">
              <el-table-column
                prop="show_Stime_PM10"
                label="开始时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_Etime_PM10"
                label="结束时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_WdStime_PM10"
                label="稳定开始时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_WdEtime_PM10"
                label="结束时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_WdHours_PM10"
                label="稳定时长（小时）"
                width="120"
              >
              </el-table-column>
            </el-table-column>
            <el-table-column align="center" label="PM25">
              <el-table-column
                prop="show_Stime_PM25"
                label="开始时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_Etime_PM25"
                label="结束时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_WdStime_PM25"
                label="稳定开始时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_WdEtime_PM25"
                label="结束时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_WdHours_PM25"
                label="稳定时长（小时）"
                width="120"
              >
              </el-table-column>
            </el-table-column>
            <el-table-column align="center" label="SO2">
              <el-table-column
                prop="show_Stime_SO2"
                label="开始时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_Etime_SO2"
                label="结束时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_WdStime_SO2"
                label="稳定开始时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_WdEtime_SO2"
                label="结束时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_WdHours_SO2"
                label="稳定时长（小时）"
                width="120"
              >
              </el-table-column>
            </el-table-column>
            <el-table-column align="center" label="NO2">
              <el-table-column
                prop="show_Stime_NO2"
                label="开始时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_Etime_NO2"
                label="结束时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_WdStime_NO2"
                label="稳定开始时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_WdEtime_NO2"
                label="结束时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_WdHours_NO2"
                label="稳定时长（小时）"
                width="120"
              >
              </el-table-column>
            </el-table-column>
            <el-table-column align="center" label="CO">
              <el-table-column
                prop="show_Stime_CO"
                label="开始时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_Etime_CO"
                label="结束时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_WdStime_CO"
                label="稳定开始时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_WdEtime_CO"
                label="结束时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_WdHours_CO"
                label="稳定时长（小时）"
                width="120"
              >
              </el-table-column>
            </el-table-column>
            <el-table-column align="center" label="O3">
              <el-table-column
                prop="show_Stime_O3"
                label="开始时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_Etime_O3"
                label="结束时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_WdStime_O3"
                label="稳定开始时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_WdEtime_O3"
                label="结束时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="show_WdHours_O3"
                label="稳定时长（小时）"
                width="120"
              >
              </el-table-column>
            </el-table-column>
            <el-table-column prop="remarks" label="备注" width="150">
            </el-table-column>
            <el-table-column prop="show_CreateTime" label="日期" width="150">
            </el-table-column>
            <el-table-column prop="createBy" label="创建人" width="150">
            </el-table-column>
            <el-table-column
              align="center"
              show-overflow-tooltip
              fixed="right"
              label="操作"
              width="100"
            >
              <template v-slot="scope">
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="编辑"
                  placement="top"
                >
                  <el-link
                    type="primary"
                    @click="handleEdit(scope.row, scope.row)"
                    >编辑</el-link
                  >
                </el-tooltip>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            background
            :current-page="page.pageNo"
            :page-size="page.pageSize"
            :layout="layout"
            :total="page.total"
            @size-change="getSizeChange"
            @current-change="getCurrentPage"
          ></el-pagination>
        </el-main>
      </el-container>
    </el-container>

    <!--停电记录-->
    <div>
      <el-dialog title="停电记录" v-model:visible="dialogVisible" width="70%">
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
                <el-form-item v-show="false" label="站点名称：" prop="Id">
                  <el-input
                    v-model:value="ruleForm.Id"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item label="站点名称:" prop="SStation">
                  <rateCascader
                    :selectOption="ruleForm.SStation"
                    @selectOptionEvent="selectOptionEvent"
                  ></rateCascader>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="无效小时:" prop="InvalidHour">
                  <el-input
                    v-model:value="ruleForm.InvalidHour"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="停电时间:" prop="StartTime">
                  <el-date-picker
                    v-model:value="ruleForm.StartTime"
                    type="datetime"
                    placeholder="选择日期"
                  ></el-date-picker>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="结束时间:" prop="EndTime">
                  <el-date-picker
                    v-model:value="ruleForm.EndTime"
                    type="datetime"
                    placeholder="选择日期"
                  ></el-date-picker>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <!--<el-row>
              <el-col :span="12">
                <div>
                  <el-form-item label="停电类别:" prop="BlackoutType">
                    <el-select v-model="ruleForm.BlackoutType" placeholder="不限" style="width: 100%;">
                      <el-option
                        v-for="(item, index) in QBlackoutTypeOptions"
                        :key="index"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </el-col>
            </el-row>-->
          <el-row>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column
                prop="Param"
                label="参数"
                width="100"
              ></el-table-column>
              <el-table-column
                prop="Startdate"
                label="停电开始时间"
                width="280"
              >
                <template v-slot="scope">
                  <el-date-picker
                    v-model:value="scope.row.Startdate"
                    type="datetime"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    placeholder="选择日期"
                  ></el-date-picker>
                </template>
              </el-table-column>
              <el-table-column prop="Enddate" label="停电结束时间" width="280">
                <template v-slot="scope">
                  <el-date-picker
                    v-model:value="scope.row.Enddate"
                    type="datetime"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    placeholder="选择日期"
                  ></el-date-picker>
                </template>
              </el-table-column>
              <el-table-column
                prop="Startdate"
                label="稳定开始时间"
                width="280"
              >
                <template v-slot="scope">
                  <el-date-picker
                    v-model:value="scope.row.WDStartdate"
                    type="datetime"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    placeholder="选择日期"
                  ></el-date-picker>
                </template>
              </el-table-column>
              <el-table-column prop="Enddate" label="稳定结束时间" width="280">
                <template v-slot="scope">
                  <el-date-picker
                    v-model:value="scope.row.WDEnddate"
                    type="datetime"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    placeholder="选择日期"
                  ></el-date-picker>
                </template>
              </el-table-column>
            </el-table>
          </el-row>

          <el-row>
            <el-col :span="12">
              <div>
                <el-form-item label="备注：" prop="Remarks">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4 }"
                    placeholder="请输入内容"
                    v-model:value="ruleForm.Remarks"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <el-row v-show="ruleForm.Id > 0">
            <el-col :span="12">
              <div>
                <el-form-item label="停电材料：" prop="Id">
                  <rateUpload
                    :limit="1"
                    :Ismultiple="false"
                    :BusinessId="ruleForm.Id"
                    :BusinessType="17"
                    @uploadSuccess="uploadSuccess"
                  ></rateUpload>
                </el-form-item>
              </div>
            </el-col>
          </el-row>

          <el-form-item>
            <el-button
              v-if="!isMenusave"
              type="primary"
              @click="submitForm('ruleForm', '1')"
              >保存</el-button
            >
            <!--<el-button v-if="!isMenuActive" type="primary" @click="submitForm('ruleForm','2')">提交</el-button>-->
            <el-button
              v-if="!isMenucheck"
              type="primary"
              @click="ShowCheck('ruleForm', '4')"
              >审核</el-button
            >
            <!--<el-button v-if="!isMenureset" @click="resetForm('ruleForm')">重置</el-button>-->
          </el-form-item>
        </el-form>
      </el-dialog>

      <el-dialog
        title="停电记录审核"
        v-model:visible="dialogVisibleCheck"
        width="50%"
      >
        <el-form
          :model="check"
          status-icon
          :rules="rules"
          ref="check"
          label-width="100px"
          class="demo-check"
        >
          <el-form-item label="审核结果:" prop="Results">
            <el-radio-group v-model:value="check.Result">
              <el-radio :label="1">通过</el-radio>
              <el-radio :label="0">不通过</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="审核意见" prop="Reasons">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4 }"
              placeholder="请输入内容"
              v-model:value="check.Reason"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="saveForm('check')"
              >确定</el-button
            >
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import treeSStation from '../common/treeSStation' //引入treeSStation组件
import rateTable from '../common/rateTable' //引入rateTable组件
import rateCascader from '../common/rateCascader' //引入rateCascader组件
import rateSelect from '../common/rateSelect'
import rateUpload from '../common/rateUpload' //引入rateCascader组件

export default {
  name: 'v_ywPowercut',
  data() {
    return {
      check: {
        Result: 1,
        Reason: '',
        Id: '',
      },
      showedit: true,
      dialogVisibleCheck: false,
      tableData: [
        {
          Param: 'PM10',
          Startdate: '',
          Enddate: '',
          WDStartdate: '',
          WDEnddate: '',
        },
        {
          Param: 'PM2.5',
          Startdate: '',
          Enddate: '',
          WDStartdate: '',
          WDEnddate: '',
        },
        {
          Param: 'SO2',
          Startdate: '',
          Enddate: '',
          WDStartdate: '',
          WDEnddate: '',
        },
        {
          Param: 'NO2',
          Startdate: '',
          Enddate: '',
          WDStartdate: '',
          WDEnddate: '',
        },
        {
          Param: 'CO',
          Startdate: '',
          Enddate: '',
          WDStartdate: '',
          WDEnddate: '',
        },
        {
          Param: 'O3',
          Startdate: '',
          Enddate: '',
          WDStartdate: '',
          WDEnddate: '',
        },
      ],
      isMenuActive: true,
      isMenucheck: true,
      isMenusave: true,
      isMenureset: true,
      dialogVisible: false,
      ruleForm: {
        FileName: '',
        FileUrl: '',
        Base64: '',
        Remarks: '',
        EndTime: '',
        StartTime: '',
        InvalidHour: '',
        Id: '',
        SStation: '',
        BlackoutType: '',
        State: '',
        OptType: 1,
      },
      QBlackoutTypeOptions: [
        {
          value: '0',
          label: '计划内',
        },
        {
          value: '1',
          label: '保障停电',
        },
        {
          value: '2',
          label: '自然灾害',
        },
        {
          value: '3',
          label: '运维故障',
        },
      ],
      rules: {
        SStation: [
          { required: true, message: '请选择站点名称:', trigger: 'blur' },
        ],
        InvalidHour: [
          { required: true, message: '请输入无效小时', trigger: 'blur' },
        ],
        StartTime: [
          { required: true, message: '请选择开始时间', trigger: 'blur' },
        ],
        EndTime: [
          { required: true, message: '请选择结束时间', trigger: 'blur' },
        ],
        BlackoutType: [
          { required: true, message: '请选择停电类别', trigger: 'blur' },
        ],
      },
      queryparam: {
        QState: '',
        startDate: '',
        endDate: '',
        chooseStationIds: '',
        QStateOptions: [
          {
            value: '',
            label: '全部',
          },
          {
            value: '1',
            label: '待提交',
          },
          {
            value: '2',
            label: '待审核',
          },
          {
            value: '4',
            label: '已生效',
          },
        ],
      },
      layout: 'total, sizes, prev, pager, next, jumper',
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
          prop: 'show_State',
          label: '状态',
          width: 100,
          align: 'center',
          isShow: false,
        }, //formatter重构//return `返回参数`
        {
          prop: 'city',
          label: '城市',
          align: 'center',
          isShow: false,
          width: 100,
        },
        {
          prop: 'townName',
          label: '区县',
          width: 100,
          align: 'center',
          isShow: false,
        },
        {
          prop: 'sStationName',
          label: '站点名称',
          align: 'center',
          width: 120,
          isShow: true,
        },
        {
          prop: 'show_BlackoutTime',
          label: '停电时间',
          width: 300,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'invalidHour',
          label: '无效小时(小时)',
          width: 100,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'show_BlackoutHour',
          label: '停电时长(分钟)',
          width: 160,
          align: 'center',
          isShow: true,
        },
        // {
        //    prop: "show_BlackoutType",
        //    label: "停电类别",
        //    width: 100,
        //    align: "center",
        //    isShow: true,
        //  },
        // {
        //  prop: "fileName",
        //  label: "停电材料",
        //  width: 120,
        //  align: "center",
        //  isShow: false,
        //    formatter: (row, column, cellValue) => {
        //        if(row.fileName){
        //            return '<a style="color:blue;">'+row.fileName+'</a>';
        //        }else{
        //            return '';
        //        }
        //      }
        // },
        {
          prop: 'reason',
          label: '审核意见',
          width: 120,
          align: 'center',
          isShow: false,
        },
        {
          prop: 'show_CreateTime',
          label: '创建日期',
          width: 120,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'createBy',
          label: '创建人',
          width: 120,
          align: 'center',
          isShow: true,
        },
      ], // 需要展示的列
      operates: {
        //操作栏
        width: 200,
        fixed: 'right',
        list: [
          {
            id: '1',
            label: '编辑',
            bgColortype: 'success',
            hasbutton: 'ywPowercut_handleEdit',
            show: true, //是否显示按钮
            className: 'success', //样式类名
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              if (row.state == 2) {
                this.$message({
                  message: '待审核状态不能编辑!',
                  type: 'warning',
                })
                return false
              }
              if (row.state == 4) {
                this.$message({
                  message: '已生效状态不能编辑!',
                  type: 'warning',
                })
                return false
              }
              this.handleEdit(index, row)
            },
          },
          {
            id: '2',
            label: '删除',
            show: true,
            bgColortype: 'danger',
            hasbutton: 'ywPowercut_handleMultiplDel',
            className: 'searchAll',
            disabled: false,
            method: (index, row) => {
              if (row.state == 2) {
                this.$message({
                  message: '待审核状态不能删除!',
                  type: 'warning',
                })
                return false
              }
              if (row.state == 4) {
                this.$message({
                  message: '已生效状态不能删除!',
                  type: 'warning',
                })
                return false
              }
              this.handledel(index, row)
            },
          },
          {
            id: '3',
            label: '查看',
            bgColortype: 'info',
            show: true, //是否显示按钮
            className: 'searchAll', //样式类名
            hasbutton: 'ywPowercut_handleDetail',
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              this.handleShow(index, row)
            },
          },
          {
            id: '4',
            label: '审核',
            bgColortype: 'warning',
            show: false, //是否显示按钮
            className: 'searchAll', //样式类名
            hasbutton: 'ywPowercut_handleCheck',
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              if (row.state == 1) {
                this.$message({
                  message: '待提交状态不能审核!',
                  type: 'warning',
                })
                return false
              }
              if (row.state == 4) {
                this.$message({
                  message: '已生效状态不能审核!',
                  type: 'warning',
                })
                return false
              }
              this.handleCheck(index, row)
            },
          },
        ],
      }, // 列操作按钮
    } //return ending
  },
  methods: {
    getSearchStations(obj) {
      var self = this
      var configIds = ''
      if (obj != null) {
        obj.forEach((o) => {
          configIds += o.sStation + ','
        })
        self.queryparam.chooseStationIds = configIds
      }
    },

    filterDate(t) {
      const date = new Date(t)
      const y = date.getFullYear()
      const M = (date.getMonth() + 1).toString().padStart(2, 0)
      const d = date.getDate().toString().padStart(2, 0)
      const h = date.getHours().toString().padStart(2, 0)
      const mm = date.getMinutes().toString().padStart(2, 0)
      const s = date.getSeconds().toString().padStart(2, 0)
      return y + '-' + M + '-' + d + ' ' + h + ':' + mm + ':' + s
    },

    selectChange(val, valObj) {
      this.model = val
      this.queryparam.UnitId = val
      // console.log("valObj=>", valObj);
    },

    //提交
    submitForm(formName, StateID) {
      const Qs = require('qs')
      var self = this
      if (this.tableData[0].Startdate > this.tableData[0].Enddate) {
        self.$message({
          message: 'PM10停电开始时间不能比停电结束时间大!',
          type: 'warning',
        })
        return
      }
      if (this.tableData[1].Startdate > this.tableData[1].Enddate) {
        self.$message({
          message: 'PM25停电开始时间不能比停电结束时间大!',
          type: 'warning',
        })
        return
      }
      if (this.tableData[2].Startdate > this.tableData[2].Enddate) {
        self.$message({
          message: 'SO2停电开始时间不能比停电结束时间大!',
          type: 'warning',
        })
        return
      }
      if (this.tableData[3].Startdate > this.tableData[3].Enddate) {
        self.$message({
          message: 'NO2停电开始时间不能比停电结束时间大!',
          type: 'warning',
        })
        return
      }
      if (this.tableData[4].Startdate > this.tableData[4].Enddate) {
        self.$message({
          message: 'CO停电开始时间不能比停电结束时间大!',
          type: 'warning',
        })
        return
      }
      if (this.tableData[5].Startdate > this.tableData[5].Enddate) {
        self.$message({
          message: 'O3停电开始时间不能比停电结束时间大!',
          type: 'warning',
        })
        return
      }
      //稳定
      if (this.tableData[0].WDStartdate > this.tableData[0].WDEnddate) {
        self.$message({
          message: 'PM10稳定开始时间不能比稳定结束时间大!',
          type: 'warning',
        })
        return
      }
      if (this.tableData[1].WDStartdate > this.tableData[1].WDEnddate) {
        self.$message({
          message: 'PM25稳定开始时间不能比稳定结束时间大!',
          type: 'warning',
        })
        return
      }
      if (this.tableData[2].WDStartdate > this.tableData[2].WDEnddate) {
        self.$message({
          message: 'SO2稳定开始时间不能比稳定结束时间大!',
          type: 'warning',
        })
        return
      }
      if (this.tableData[3].WDStartdate > this.tableData[3].WDEnddate) {
        self.$message({
          message: 'NO2稳定开始时间不能比稳定结束时间大!',
          type: 'warning',
        })
        return
      }
      if (this.tableData[4].WDStartdate > this.tableData[4].WDEnddate) {
        self.$message({
          message: 'CO稳定开始时间不能比稳定结束时间大!',
          type: 'warning',
        })
        return
      }
      if (this.tableData[5].WDStartdate > this.tableData[5].WDEnddate) {
        self.$message({
          message: 'O3稳定开始时间不能比稳定结束时间大!',
          type: 'warning',
        })
        return
      }
      var jsonStr = JSON.stringify(this.tableData)
      self.ruleForm.State = StateID
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http({
            headers: {
              deviceCode: 'A95ZEF1-47B5-AC90BF3',
            },
            method: 'post',
            url:
              self.api +
              '/api/Yw_Powercut/OutageRecordInfoSubmit?jsonStr=' +
              jsonStr,
            data: Qs.stringify(self.ruleForm),
          })
            .then((res) => {
              if (res.status == 200) {
                self.dialogVisible = !self.dialogVisible
                self.getList()
                //清空表单
                self.resetForm('ruleForm')

                self.ruleForm.SStation = ''

                self.$message({
                  message: res.data.message,
                  type: res.data.type, //warning,success,info,error
                })
              }
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          return false
        }
      })
    },

    uploadSuccess(file) {
      this.ruleForm.FileName = file.fileName
      this.ruleForm.FileUrl = file.fileUrl
    },
    resetForm(formName) {
      this.$nextTick(() => {
        this.$refs[formName].resetFields()
      })
    },

    //多条数据删除
    handleMultiplDel() {
      var self = this
      var ids = ''
      if (this.handleSelection == '') {
        self.$message({
          message: '请选择要删除的数据！',
          type: 'warning', //success,warning,info,error
        })
        return
      }

      this.handleSelection.forEach((item, index) => {
        if (item.state == '2') {
          self.$message({
            message: '待审核的数据无法删除！',
            type: 'warning', //success,warning,info,error
          })
          return
        }
        if (item.state == '4') {
          self.$message({
            message: '已生效的数据无法删除！',
            type: 'warning', //success,warning,info,error
          })
          return
        }
        if (index != self.handleSelection.length - 1) {
          ids += item.id + ','
        } else {
          ids += item.id
        }
      })
      this.$confirm('确认删除？')
        .then(function () {
          self.handlemultipl(ids)
        })
        .catch(function () {})
    },
    handleCancel() {
      var self = this
      var ids = ''
      if (this.handleSelection == '') {
        self.$message({
          message: '请选择要撤回的数据！',
          type: 'warning', //success,warning,info,error
        })
        return
      }

      this.handleSelection.forEach((item, index) => {
        if (index != self.handleSelection.length - 1) {
          ids += item.id + ','
        } else {
          ids += item.id
        }
      })
      this.$confirm('确认撤回？')
        .then(function () {
          self.handlecanle(ids)
        })
        .catch(function () {})
    },
    handlecanle(ids) {
      var self = this
      this.$http({
        method: 'GET',
        url: self.api + '/api/Yw_Powercut/OutageRecord_BatchCancel?ids=' + ids,
      })
        .then((res) => {
          if (res.status == 200) {
            self.getList()
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //多条数据删除实现
    handlemultipl(ids) {
      var self = this
      this.$http({
        method: 'GET',
        url: self.api + '/api/Yw_Powercut/OutageRecordDelmultipl?ids=' + ids,
      })
        .then((res) => {
          if (res.status == 200) {
            self.getList()
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    //单条删除实现方法
    Singelmultipl(id) {
      var self = this
      this.$http({
        method: 'GET',
        url: self.api + '/api/Yw_Powercut/OutageRecordmultipl?Id=' + id,
      })
        .then((res) => {
          if (res.status == 200) {
            self.getList()
            self.$message({
              message: res.data.message,
              type: res.data.type, //warning,success,info,error
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    handleSelectionChange(val) {
      //checkbox选中的数据val 是选中行的所有数组
      this.handleSelection = val
    },
    getSizeChange(val) {
      //table组件发射的方法 用于改变每页数据量
      this.page.pageSize = val
      //这下面需要重新调用 获取列表页的函数
      this.getList()
    },
    getCurrentPage(val) {
      //table组件发射的方法  用于改变当前所在页码
      this.page.pageNo = val
      //这下面需要重新调用 获取列表页的函数
      this.getList()
    },

    //添加停电记录
    handleAdd() {
      this.ruleForm.OptType = 1
      var self = this
      if (self.ruleForm.Id != '') {
        self.resetForm('ruleForm') //重置表单
        self.ruleForm.Id = '' //如果上一行代码执行没有效果，则强制设置主键【id】为''。
      }
      self.isMenusave = false
      self.isMenuActive = true
      self.isMenucheck = true
      self.isMenureset = false
      self.dialogVisible = !self.dialogVisible
    },

    //编辑停电记录
    handleEdit(index, row) {
      this.ruleForm.OptType = 2
      //操作栏编辑按钮
      var self = this
      this.getToFirst(row.id)
      self.dialogVisible = !self.dialogVisible
      self.isMenusave = false
      self.isMenuActive = false
      self.isMenucheck = true
      self.isMenureset = false
    },
    handleCellClick(obj) {
      //单元格单击事件处理函数
      switch (obj.column.label) {
        case '停电材料':
          if (obj.row.fileName) {
            this.commonDownLoad(obj.row.fileName, obj.row.fileUrl)
          }
          // if(obj.row.base64!=null && obj.row.base64.length>0){
          //     this.downLoad(obj.row.base64);
          // }else{
          //     this.handleEdit("",obj.row);
          // }
          break
        default:
          break
      }
    },
    commonDownLoad(fileName, path) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          self.api + '/api/DownLoad/commonGetDownLoadPath?partialPath=' + path,
      })
        .then((res) => {
          if (res.data.code == 200) {
            location.href =
              self.api +
              '/api/DownLoad/commonDownLoad?fileName=' +
              fileName +
              '&path=' +
              res.data.data
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    handleShow(index, row) {
      //操作栏编辑按钮
      var self = this
      this.getToFirst(row.id)
      self.dialogVisible = !self.dialogVisible
      self.isMenusave = true
      self.isMenuActive = true
      self.isMenucheck = true
      self.isMenureset = true
    },
    handleCheck(index, row) {
      //操作栏编辑按钮
      var self = this
      this.getToFirst(row.id)
      self.dialogVisible = !self.dialogVisible
      self.isMenusave = true
      self.isMenuActive = true
      self.isMenucheck = false
      self.isMenureset = true
    },
    ShowCheck() {
      var self = this
      self.check.Id = self.ruleForm.Id
      self.dialogVisibleCheck = !self.dialogVisibleCheck
    },

    //删除数据
    handledel(index, row) {
      //操作栏删除按钮
      var self = this
      this.$confirm('确认删除？')
        .then(function () {
          self.Singelmultipl(row.id)
        })
        .catch(function () {})
    },

    saveForm(formName) {
      const Qs = require('qs')
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var self = this
          this.$http({
            headers: {
              deviceCode: 'A95ZEF1-47B5-AC90BF3',
            },
            method: 'post',
            url: self.api + '/api/Yw_Powercut/OutageRecord_Audit',
            data: Qs.stringify(self.check),
          })
            .then((res) => {
              console.log(res)
              if (res.status == 200) {
                self.dialogVisibleCheck = !self.dialogVisibleCheck
                self.dialogVisible = !self.dialogVisible
                self.getList()
                self.$message({
                  message: res.data.message,
                  type: res.data.type, //warning,success,info,error
                })
              }
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          return false
        }
      })
    },
    getList(obj) {
      var self = this
      //判断开始时间和结束时间
      if (self.queryparam.startDate > self.queryparam.endDate) {
        self.$message({
          message: '开始时间不能大于结束时间!',
          type: 'warning',
        })
        return
      }
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/Yw_Powercut/OutageRecord_FindByPage?pagesize=' +
          self.page.pageSize +
          '&pageindex=' +
          self.page.pageNo +
          '&State=' +
          self.queryparam.QState +
          '&StartDate=' +
          self.queryparam.startDate +
          '&EndDate=' +
          self.queryparam.endDate +
          '&SStation=' +
          self.queryparam.chooseStationIds,
      })
        .then((res) => {
          if (res.status == 200) {
            self.list = res.data.data
            self.page.total = res.data.count
            self.options.loading = false
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getToFirst(id) {
      var self = this
      this.$http({
        method: 'GET',
        url: this.api + '/api/Yw_Powercut/Get_OutageRecord?Id=' + id,
      })
        .then((res) => {
          if (res.status == 200) {
            self.ruleForm.FileName = res.data.data[0].fileName
            self.ruleForm.FileUrl = res.data.data[0].fileUrl
            self.ruleForm.Base64 = res.data.data[0].base64
            self.ruleForm.Remarks = res.data.data[0].remarks
            self.ruleForm.InvalidHour = res.data.data[0].invalidHour
            self.ruleForm.Id = res.data.data[0].id
            self.ruleForm.StartTime = res.data.data[0].show_StartTime
            self.ruleForm.EndTime = res.data.data[0].show_EndTime
            self.ruleForm.SStation = res.data.data[0].sStation
            self.ruleForm.BlackoutType = res.data.data[0].blackoutType
            self.tableData = [
              {
                Param: 'PM10',
                Startdate: res.data.data[0].show_Stime_PM10,
                Enddate: res.data.data[0].show_Etime_PM10,
                WDStartdate: res.data.data[0].show_WdStime_PM10,
                WDEnddate: res.data.data[0].show_WdEtime_PM10,
              },
              {
                Param: 'PM2.5',
                Startdate: res.data.data[0].show_Stime_PM25,
                Enddate: res.data.data[0].show_Etime_PM25,
                WDStartdate: res.data.data[0].show_WdStime_PM25,
                WDEnddate: res.data.data[0].show_WdEtime_PM25,
              },
              {
                Param: 'SO2',
                Startdate: res.data.data[0].show_Stime_SO2,
                Enddate: res.data.data[0].show_Etime_SO2,
                WDStartdate: res.data.data[0].show_WdStime_SO2,
                WDEnddate: res.data.data[0].show_WdEtime_SO2,
              },
              {
                Param: 'NO2',
                Startdate: res.data.data[0].show_Stime_NO2,
                Enddate: res.data.data[0].show_Etime_NO2,
                WDStartdate: res.data.data[0].show_WdStime_NO2,
                WDEnddate: res.data.data[0].show_WdEtime_NO2,
              },
              {
                Param: 'CO',
                Startdate: res.data.data[0].show_Stime_CO,
                Enddate: res.data.data[0].show_Etime_CO,
                WDStartdate: res.data.data[0].show_WdStime_CO,
                WDEnddate: res.data.data[0].show_WdEtime_CO,
              },
              {
                Param: 'O3',
                Startdate: res.data.data[0].show_Stime_O3,
                Enddate: res.data.data[0].show_Etime_O3,
                WDStartdate: res.data.data[0].show_WdStime_O3,
                WDEnddate: res.data.data[0].show_WdEtime_O3,
              },
            ]
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    selectOptionEvent(val) {
      this.ruleForm.SStation = val
    },
    selectSStation() {
      this.$refs.cascader.selectSStation(this.ruleForm.SStation)
    },

    //下载时间
    downLoadDate() {
      const date = new Date()
      const y = date.getFullYear()
      const M = (date.getMonth() + 1).toString().padStart(2, 0)
      const d = date.getDate().toString().padStart(2, 0)
      const h = date.getHours().toString().padStart(2, 0)
      const mm = date.getMinutes().toString().padStart(2, 0)
      const s = date.getSeconds().toString().padStart(2, 0)
      return y + M + +d + h + mm + s
    },

    //导出
    download(obj) {
      var self = this
      this.$http({
        method: 'GET',
        responseType: 'blob', // 表明返回服务器返回的数据类型
        url:
          this.api +
          '/api/Yw_Powercut/OutageRecordDownLoad?pagesize=' +
          self.page.pageSize +
          '&pageindex=' +
          self.page.pageNo +
          '&State=' +
          self.queryparam.QState +
          '&StartDate=' +
          self.queryparam.startDate +
          '&EndDate=' +
          self.queryparam.endDate +
          '&SStation=' +
          self.queryparam.chooseStationIds,
      })
        .then((res) => {
          if (res.status == 200) {
            let blob = new Blob([res.data], {
              type: 'application/vnd.ms-excel',
            })
            let downTime = self.downLoadDate()
            const fileName = downTime + '-停电记录.xls'
            const elink = document.createElement('a')
            elink.download = fileName
            elink.style.display = 'none'
            elink.href = URL.createObjectURL(blob)
            document.body.appendChild(elink)
            elink.click()
            URL.revokeObjectURL(elink.href) // 释放URL 对象
            document.body.removeChild(elink)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  components: {
    treeSStation,
    rateTable,
    rateCascader,
    rateSelect,
    rateUpload,
  },
  mounted() {
    this.getList() //调用获取列表页的方法
  },
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  background-color: #f5f5f5;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}
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
.el-cascader,
.el-cascader--medium {
  width: 100%;
  height: 28px;
  line-height: 28px;
}
.el-date-editor,
.el-input {
  width: 100%;
}
</style>
