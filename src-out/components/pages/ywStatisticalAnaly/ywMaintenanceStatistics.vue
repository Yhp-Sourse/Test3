<template>
  <el-tabs type="border-card">
    <el-tab-pane label="站点运维任务完成统计">
      <el-container style="height: calc(100vh - 145px); border: 1px solid #eee">
        <el-container>
          <el-header>
            <div class="search">
              <el-form :inline="true" class="demo-form-inline" size="mini">
                <el-form-item label="任务状态：">
                  <el-select
                    v-model:value="queryparam.StatisticsType"
                    placeholder="请选择任务类型"
                    style="width: 100%"
                  >
                    <el-option
                      v-for="(item, index) in this.StatisticsTypeOptions"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="查询日期：">
                  <el-date-picker
                    v-model:value="queryparam.StartDate"
                    type="date"
                    :clearable="false"
                    value-format="yyyy-MM-dd"
                    placeholder="选择日期时间"
                    align="right"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="-">
                  <el-date-picker
                    v-model:value="queryparam.EndDate"
                    type="date"
                    :clearable="false"
                    value-format="yyyy-MM-dd"
                    placeholder="选择日期时间"
                    align="right"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item class="btn">
                  <el-button
                    size="small"
                    type="primary"
                    icon="el-icon-search"
                    @click="getList()"
                    >查询</el-button
                  >
                </el-form-item>
              </el-form>
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
    </el-tab-pane>

    <el-tab-pane label="第四方检查统计">
      <el-container style="height: calc(100vh - 145px); border: 1px solid #eee">
        <el-container>
          <el-header>
            <div class="search">
              <el-form :inline="true" class="demo-form-inline" size="mini">
                <el-form-item label="查询季度：">
                  <rateQuarterSelect :getValue="selectStartValue">
                  </rateQuarterSelect>
                </el-form-item>
                <el-form-item label="-">
                  <rateQuarterSelect
                    :getValue="selectEndValue"
                  ></rateQuarterSelect>
                </el-form-item>

                <el-form-item class="btn">
                  <el-button
                    size="small"
                    icon="el-icon-search"
                    type="primary"
                    @click="getList_Repair()"
                    >查询</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
          </el-header>

          <el-main>
            <rate-table
              :list="list_Repair"
              @handleSelectionChange="handleSelectionChange_Repair"
              @sizeChange="getSizeChange_Repair"
              @currentPage="getCurrentPage_Repair"
              @handleCellClick="handleCellClick"
              :options="options_Repair"
              :columns="columns_Repair"
              :operates="operates_Repair"
              :pageShow="page_Repair.pageShow"
              :total="page_Repair.total"
            ></rate-table>
          </el-main>
        </el-container>
      </el-container>
    </el-tab-pane>

    <!--<el-tab-pane label="质控统计">
              <el-container style="height: calc(100vh - 145px); border: 1px solid #eee">
                  <el-container>
                      <el-header>
                          <div class="search">
                                  <el-form :inline="true" class="demo-form-inline" size="mini">
                                      <el-form-item label="查询日期：">
                                          <el-date-picker
                                              v-model="queryparam_Scrap.StartDate"
                                              type="date"
                                              :clearable=false
                                              value-format="yyyy-MM-dd"
                                              placeholder="选择日期时间"
                                              align="right"
                                          >
                                          </el-date-picker>
                                      </el-form-item>
                                       <el-form-item label="-">
                                           <el-date-picker
                                              v-model="queryparam_Scrap.EndDate"
                                              type="date"
                                              :clearable=false
                                              value-format="yyyy-MM-dd"
                                              placeholder="选择日期时间"
                                              align="right"
                                          >
                                          </el-date-picker>
                                      </el-form-item>                                   
                                      <el-form-item class="btn">
                                          <el-button size="small" type="primary" @click="getList_Scrap();">查询</el-button>
                                      </el-form-item>
                                  </el-form>
                              </div>
                      </el-header>
                
                      <el-main>
                          <rate-table :list="list_Scrap"
                             @handleSelectionChange="handleSelectionChange_Scrap"
                             @sizeChange="getSizeChange_Scrap"
                             @currentPage="getCurrentPage_Scrap"
                             :options="options_Scrap"
                             :columns="columns_Scrap"
                             :operates="operates_Scrap"
                             :pageShow="page_Scrap.pageShow"
                             :total="page_Scrap.total"
                          ></rate-table>
                      </el-main>
                  </el-container>
              </el-container>   
          </el-tab-pane>-->

    <el-tab-pane label="报警统计">
      <el-container style="height: calc(100vh - 145px); border: 1px solid #eee">
        <el-container>
          <el-header>
            <div class="search">
              <el-form :inline="true" class="demo-form-inline" size="mini">
                <el-form-item label="查询日期：">
                  <el-date-picker
                    v-model:value="queryparam_Alarm.StartDate"
                    type="date"
                    :clearable="false"
                    value-format="yyyy-MM-dd"
                    placeholder="选择日期时间"
                    align="right"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="-">
                  <el-date-picker
                    v-model:value="queryparam_Alarm.EndDate"
                    type="date"
                    :clearable="false"
                    value-format="yyyy-MM-dd"
                    placeholder="选择日期时间"
                    align="right"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item class="btn">
                  <el-button
                    size="small"
                    icon="el-icon-search"
                    type="primary"
                    @click="getList_Alarm()"
                    >查询</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
          </el-header>

          <el-main>
            <rate-table
              :list="list_Alarm"
              @handleSelectionChange="handleSelectionChange_Alarm"
              @sizeChange="getSizeChange_Alarm"
              @currentPage="getCurrentPage_Alarm"
              :options="options_Alarm"
              :columns="columns_Alarm"
              :operates="operates_Alarm"
              :pageShow="page_Alarm.pageShow"
              :total="page_Alarm.total"
            ></rate-table>
          </el-main>
        </el-container>
      </el-container>
    </el-tab-pane>

    <el-tab-pane label="备机使用统计">
      <el-container style="height: calc(100vh - 145px); border: 1px solid #eee">
        <el-container>
          <el-header>
            <div class="search">
              <el-form :inline="true" class="demo-form-inline" size="mini">
                <el-form-item label="查询日期：">
                  <el-date-picker
                    v-model:value="queryparam_BeiJi.StartDate"
                    type="date"
                    :clearable="false"
                    value-format="yyyy-MM-dd"
                    placeholder="选择日期时间"
                    align="right"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="-">
                  <el-date-picker
                    v-model:value="queryparam_BeiJi.EndDate"
                    type="date"
                    :clearable="false"
                    value-format="yyyy-MM-dd"
                    placeholder="选择日期时间"
                    align="right"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item class="btn">
                  <el-button
                    size="small"
                    icon="el-icon-search"
                    type="primary"
                    @click="getList_BeiJi()"
                    >查询</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
          </el-header>

          <el-main>
            <rate-table
              :list="list_BeiJi"
              @handleSelectionChange="handleSelectionChange_BeiJi"
              @sizeChange="getSizeChange_BeiJi"
              @currentPage="getCurrentPage_BeiJi"
              :options="options_BeiJi"
              :columns="columns_BeiJi"
              :operates="operates_BeiJi"
              :pageShow="page_BeiJi.pageShow"
              :total="page_BeiJi.total"
            ></rate-table>
          </el-main>
        </el-container>
      </el-container>
    </el-tab-pane>

    <el-tab-pane label="运维任务类别统计">
      <el-container style="height: calc(100vh - 145px); border: 1px solid #eee">
        <el-container>
          <el-header>
            <div class="search">
              <el-form :inline="true" class="demo-form-inline" size="mini">
                <el-form-item label="查询日期：">
                  <el-date-picker
                    v-model:value="queryparam_Maintentance.StartDate"
                    type="date"
                    :clearable="false"
                    value-format="yyyy-MM-dd"
                    placeholder="选择日期时间"
                    align="right"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="-">
                  <el-date-picker
                    v-model:value="queryparam_Maintentance.EndDate"
                    type="date"
                    :clearable="false"
                    value-format="yyyy-MM-dd"
                    placeholder="选择日期时间"
                    align="right"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item class="btn">
                  <el-button
                    size="small"
                    icon="el-icon-search"
                    type="primary"
                    @click="getList_Maintentance()"
                    >查询</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
          </el-header>

          <el-main>
            <rate-table
              :list="list_Maintentance"
              @handleSelectionChange="handleSelectionChange_Maintentance"
              @sizeChange="getSizeChange_Maintentance"
              @currentPage="getCurrentPage_Maintentance"
              :options="options_Maintentance"
              :columns="columns_Maintentance"
              :operates="operates_Maintentance"
              :pageShow="page_Maintentance.pageShow"
              :total="page_Maintentance.total"
            ></rate-table>
          </el-main>
        </el-container>
      </el-container>
    </el-tab-pane>

    <el-tab-pane label="运维工作">
      <el-container style="height: calc(100vh - 145px); border: 1px solid #eee">
        <el-container>
          <el-header>
            <div class="search">
              <el-form :inline="true" class="demo-form-inline" size="mini">
                <el-form-item label="查询日期：">
                  <el-date-picker
                    v-model:value="queryparam_YwWorkAndZhiKong.StartDate"
                    type="date"
                    :clearable="false"
                    value-format="yyyy-MM-dd"
                    placeholder="选择日期时间"
                    align="right"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="-">
                  <el-date-picker
                    v-model:value="queryparam_YwWorkAndZhiKong.EndDate"
                    type="date"
                    :clearable="false"
                    value-format="yyyy-MM-dd"
                    placeholder="选择日期时间"
                    align="right"
                  >
                  </el-date-picker>
                </el-form-item>

                <el-form-item label="城市：">
                  <rate-select
                    v-model:value="rateSelectUnit.model"
                    :url="rateSelectUnit.selectUrl"
                    :urlParams="rateSelectUnit.urlParams"
                    :multiple="false"
                    placeholder="全部"
                    :optionKeys="rateSelectUnit.optionKeys"
                    :showLabels="rateSelectUnit.showLabels"
                    :disables="rateSelectUnit.disables"
                    @change="selectChangeUnit"
                  >
                  </rate-select>
                </el-form-item>

                <el-form-item class="btn">
                  <el-button
                    size="small"
                    icon="el-icon-search"
                    type="primary"
                    @click="getList_YwWorkAndZhiKong()"
                    >查询</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
          </el-header>

          <el-main>
            <rate-table
              :list="list_YwWorkAndZhiKong"
              @handleSelectionChange="handleSelectionChange_YwWorkAndZhiKong"
              @sizeChange="getSizeChange_YwWorkAndZhiKong"
              @currentPage="getCurrentPage_YwWorkAndZhiKong"
              :options="options_YwWorkAndZhiKong"
              :columns="columns_YwWorkAndZhiKong"
              :operates="operates_YwWorkAndZhiKong"
              :pageShow="page_YwWorkAndZhiKong.pageShow"
              :total="page_YwWorkAndZhiKong.total"
            ></rate-table>
          </el-main>
        </el-container>
      </el-container>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
import treeSStation from '../common/treeSStation'
import rateTable from '../common/rateTable' //引入table组件
import rateSelect from '../common/rateSelect'
import rateCascader from '../common/rateCascader' //引入rateCascader组件
import rateUpload from '../common/rateUpload' //引入rateCascader组件
import rateQuarterSelect from '../common/rateQuarterSelect' //引入rateCascader组件

export default {
  name: 'devUseRecord',
  data() {
    return {
      //类型
      StatisticsTypeOptions: [
        {
          value: 'all',
          label: '全部',
        },
        {
          value: 'already',
          label: '已做',
        },
        {
          value: 'not',
          label: '未做',
        },
      ],

      rateSelectUnit: {
        model: '',
        selectUrl: this.api + '/api/TreeSStation/GetCityNameFromSStation',
        urlParams: JSON.stringify({}),
        optionKeys: JSON.stringify({
          value: 'text',
          label: 'text',
        }),
        showLabels: 'text',
        disables: '',
      },

      rateSPSelect: {}, //备机信息
      page: {
        //关于页码的相关参数
        pageShow: true, //是否显示分页
        total: 0, //总条数
        pageSize: 10, //每页条数
        pageNo: 1, //第几页
      },
      handleSelection: [], //checkbox选中行
      list: [],
      options: {
        // table样式参数
        stripe: true, // 是否为斑马纹 table
        loading: true, // 是否添加表格loading加载动画
        highlightCurrentRow: true, // 是否支持当前行高亮显示
        mutiSelect: false, // 是否支持列表项选中功能
      }, // table 的参数结束
      columns: [
        {
          prop: 'sStationName',
          label: '站点名称',
          align: 'center',
          isShow: true,
        },
        { prop: 'city', label: '城市', align: 'center', isShow: true },
        { prop: 'unitName', label: '运维单位', align: 'center', isShow: true },
        {
          prop: 'status',
          label: '状态',
          width: 110,
          align: 'center',
          isShow: true,
        },
      ], // 需要展示的列
      operates: {
        //操作栏
        width: 280,
        fixed: 'right',
        list: [],
      },

      queryparam: {
        StatisticsType: 'all',
        StartDate: '',
        EndDate: '',
      },

      queryparam_Repair: {
        StartDate: '',
        EndDate: '',
      },
      queryparam_Scrap: {
        StartDate: '',
        EndDate: '',
      },

      queryparam_Alarm: {
        StartDate: '',
        EndDate: '',
      },

      queryparam_BeiJi: {
        StartDate: '',
        EndDate: '',
      },

      queryparam_Maintentance: {
        StartDate: '',
        EndDate: '',
      },

      queryparam_YwWorkAndZhiKong: {
        StartDate: '',
        EndDate: '',
        City: '',
      },

      //第二个tabs标签
      page_Repair: {
        //关于页码的相关参数
        pageShow: true, //是否显示分页
        total: 0, //总条数
        pageSize: 10, //每页条数
        pageNo: 1, //第几页
      },
      page_Scrap: {
        //关于页码的相关参数
        pageShow: true, //是否显示分页
        total: 0, //总条数
        pageSize: 10, //每页条数
        pageNo: 1, //第几页
      },

      page_Alarm: {
        //关于页码的相关参数
        pageShow: true, //是否显示分页
        total: 0, //总条数
        pageSize: 10, //每页条数
        pageNo: 1, //第几页
      },
      page_BeiJi: {
        //关于页码的相关参数
        pageShow: true, //是否显示分页
        total: 0, //总条数
        pageSize: 10, //每页条数
        pageNo: 1, //第几页
      },
      page_Maintentance: {
        //关于页码的相关参数
        pageShow: true, //是否显示分页
        total: 0, //总条数
        pageSize: 10, //每页条数
        pageNo: 1, //第几页
      },
      page_YwWorkAndZhiKong: {
        //关于页码的相关参数
        pageShow: true, //是否显示分页
        total: 0, //总条数
        pageSize: 10, //每页条数
        pageNo: 1, //第几页
      },

      handleSelection_Repair: [], //checkbox选中行
      handleSelection_Scrap: [], //checkbox选中行
      handleSelection_Alarm: [],
      handleSelection_BeiJi: [],
      handleSelection_Maintentance: [],
      handleSelection_YwWorkAndZhiKong: [],

      list_Repair: [],
      list_Scrap: [],
      list_Alarm: [],
      list_BeiJi: [],
      list_Maintentance: [],
      list_YwWorkAndZhiKong: [],

      options_Repair: {
        // table样式参数
        stripe: true, // 是否为斑马纹 table
        loading: false, // 是否添加表格loading加载动画
        highlightCurrentRow: true, // 是否支持当前行高亮显示
        mutiSelect: false, // 是否支持列表项选中功能
      }, // table 的参数结束
      options_Scrap: {
        // table样式参数
        stripe: true, // 是否为斑马纹 table
        loading: false, // 是否添加表格loading加载动画
        highlightCurrentRow: true, // 是否支持当前行高亮显示
        mutiSelect: false, // 是否支持列表项选中功能
      }, // table 的参数结束
      options_Alarm: {
        // table样式参数
        stripe: true, // 是否为斑马纹 table
        loading: false, // 是否添加表格loading加载动画
        highlightCurrentRow: true, // 是否支持当前行高亮显示
        mutiSelect: false, // 是否支持列表项选中功能
      }, // table 的参数结束
      options_BeiJi: {
        // table样式参数
        stripe: true, // 是否为斑马纹 table
        loading: false, // 是否添加表格loading加载动画
        highlightCurrentRow: true, // 是否支持当前行高亮显示
        mutiSelect: false, // 是否支持列表项选中功能
      }, // table 的参数结束
      options_Maintentance: {
        // table样式参数
        stripe: true, // 是否为斑马纹 table
        loading: false, // 是否添加表格loading加载动画
        highlightCurrentRow: true, // 是否支持当前行高亮显示
        mutiSelect: false, // 是否支持列表项选中功能
      }, // table 的参数结束
      options_YwWorkAndZhiKong: {
        // table样式参数
        stripe: true, // 是否为斑马纹 table
        loading: false, // 是否添加表格loading加载动画
        highlightCurrentRow: true, // 是否支持当前行高亮显示
        mutiSelect: false, // 是否支持列表项选中功能
      }, // table 的参数结束

      columns_Repair: [
        { prop: 'city', label: '城市', align: 'center', isShow: true },
        { prop: 'shouldNum', label: '站点数', align: 'center', isShow: true },
        {
          prop: 'completeNum',
          label: '已检查站点数',
          align: 'center',
          isShow: true,
          width: 150,
          formatter: (row, column, cellValue) => {
            return '<a style="color:blue;"> ' + row.completeNum + ' </a>'
          },
        },
        {
          prop: 'noCompleteNum',
          label: '未检查站点数',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'formulateNum',
          label: '已制定检查任务点位数',
          align: 'center',
          isShow: true,
          formatter: (row, column, cellValue) => {
            return '<a style="color:blue;"> ' + row.formulateNum + ' </a>'
          },
        },
        {
          prop: 'noFormulateNum',
          label: '未制定检查任务点位数',
          align: 'center',
          isShow: true,
        },
      ], // 需要展示的列
      columns_Scrap: [
        {
          prop: 'city',
          label: '城市',
          align: 'center',
          width: 150,
          isShow: true,
        },
        { prop: 'sStationName', label: '站点', align: 'center', isShow: true },
        {
          prop: 'unitName',
          label: '运维单位',
          width: 110,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'qualityNum',
          label: '软件质控次数',
          align: 'center',
          isShow: true,
        },
      ], // 需要展示的列
      columns_Alarm: [
        { prop: 'city', label: '城市', align: 'center', isShow: true },
        { prop: 'sStationName', label: '站点', align: 'center', isShow: true },
        { prop: 'zj', label: '合计报警', align: 'center', isShow: true },
        { prop: 'yw', label: '任务消息', align: 'center', isShow: false },
        { prop: 'bj', label: '报警提醒', align: 'center', isShow: false },
        { prop: 'lx', label: '离线', align: 'center', isShow: true },
        { prop: 'cx', label: '备机超期', align: 'center', isShow: true },
        { prop: 'rw', label: '运维任务提醒', align: 'center', isShow: false },
        { prop: 'shtx', label: '审核提醒', align: 'center', isShow: false },
        { prop: 'szjc', label: '市站检查提醒', align: 'center', isShow: false },
        {
          prop: 'stateOver',
          label: '状态量超限',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'stateChange',
          label: '状态量数值变更提醒',
          align: 'center',
          isShow: false,
        },
        {
          prop: 'stateApply',
          label: '状态量配置申请提醒',
          align: 'center',
          isShow: false,
        },
        {
          prop: 'devIn',
          label: '仪器设备接入',
          align: 'center',
          isShow: false,
        },
        {
          prop: 'ycsj',
          label: '数据连续3小时不变',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'csx',
          label: '数据连续倒挂5小时',
          align: 'center',
          isShow: true,
        },
        { prop: 'tb', label: '小时数据突变', align: 'center', isShow: true },
        { prop: 'qt', label: '其他', align: 'center', isShow: false },
      ], // 需要展示的列
      columns_BeiJi: [
        {
          prop: 'city',
          label: '城市',
          align: 'center',
          width: 150,
          isShow: true,
        },
        { prop: 'sStationName', label: '站点', align: 'center', isShow: true },
        {
          prop: 'replaceNum',
          label: '更换备机次数',
          width: 110,
          align: 'center',
          isShow: true,
        },
        {
          prop: 'overdueUseNum',
          label: '超期使用次数',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'maxUseDay',
          label: '最大使用天数',
          align: 'center',
          isShow: true,
        },
      ], // 需要展示的列
      columns_Maintentance: [
        {
          prop: 'city',
          label: '城市',
          align: 'center',
          width: 150,
          isShow: true,
        },
        { prop: 'townName', label: '县市', align: 'center', isShow: true },
        {
          prop: 'sStationName',
          label: '站点名称',
          width: 110,
          align: 'center',
          isShow: true,
        },
        { prop: 'unitName', label: '运维单位', align: 'center', isShow: true },
        { prop: 'total', label: '合计', align: 'center', isShow: true },
        { prop: 'weekNum', label: '周任务', align: 'center', isShow: true },
        { prop: 'monthNum', label: '月度任务', align: 'center', isShow: true },
        {
          prop: 'towMonthNum',
          label: '两月任务',
          align: 'center',
          isShow: true,
        },
        { prop: 'jiduNum', label: '季度', align: 'center', isShow: true },
        { prop: 'halfYearNum', label: '半年', align: 'center', isShow: true },
        { prop: 'fullYearNum', label: '年度', align: 'center', isShow: true },
      ], // 需要展示的列

      columns_YwWorkAndZhiKong: [
        {
          prop: 'city',
          label: '城市',
          align: 'center',
          width: 100,
          isShow: true,
        },
        {
          prop: 'sStationName',
          label: '站点名称',
          width: 110,
          align: 'center',
          isShow: true,
        },
        { prop: 'unitName', label: '运维单位', align: 'center', isShow: true },
        {
          prop: 'planDealTime',
          label: '本次运维时间',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'lastPlanDealTime',
          label: '上次运维时间',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'aA',
          label: '距离上次运维时长(天)',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'noCompletedContent',
          label: '待完成内容',
          align: 'center',
          width: 300,
          isShow: true,
        },
        {
          prop: 'taskContent',
          label: '已完成内容',
          align: 'center',
          width: 300,
          isShow: true,
        },
        {
          prop: 'isYwChart',
          label: '是否有运维数据曲线',
          align: 'center',
          isShow: false,
        },
        {
          prop: 'isQualified',
          label: '运维结果是否合格',
          align: 'center',
          isShow: false,
        },
        {
          prop: 'alarmResolve',
          label: '报警处理情况',
          align: 'center',
          isShow: false,
        },
        {
          prop: 'haveProblem',
          label: '存在的问题',
          align: 'center',
          isShow: false,
        },
      ], // 需要展示的列

      operates_Repair: {
        //操作栏
        width: 150,
        fixed: 'right',
        list: [],
      },
      operates_Scrap: {
        //操作栏
        width: 150,
        fixed: 'right',
        list: [],
      },
      operates_Alarm: {
        //操作栏
        width: 150,
        fixed: 'right',
        list: [],
      },
      operates_BeiJi: {
        //操作栏
        width: 150,
        fixed: 'right',
        list: [],
      },
      operates_Maintentance: {
        //操作栏
        width: 150,
        fixed: 'right',
        list: [],
      },
      operates_YwWorkAndZhiKong: {
        //操作栏
        width: 150,
        fixed: 'right',
        list: [],
      },
    }
  },
  methods: {
    //下拉框的值
    selectChangeUnit(val, valObj) {
      this.model = val
      this.queryparam_YwWorkAndZhiKong.City = val
    },

    //市站检查统计
    handleCellClick(obj) {
      //单元格单击事件处理函数
      var self = this
      switch (obj.column.label) {
        case '已检查站点数':
          $emit(this, 'jump', {
            param: '第四方检查任务',
            path: '/index/ywFourthInspectionTask',
            isjump: true,
          })
          break
        case '已制定点位数':
          $emit(this, 'jump', {
            param: '第四方检查任务',
            path: '/index/ywFourthInspectionTask',
            isjump: true,
          })
          break
        default:
          break
      }
    },

    //季度初始化
    selectStartValue(val) {
      var self = this
      self.queryparam_Repair.StartDate = val
    },

    selectEndValue(val) {
      var self = this
      self.queryparam_Repair.EndDate = val
    },

    //初始化时间
    getNowTime() {
      var now = new Date()
      var year = now.getFullYear() //得到年份
      var month = now.getMonth() //得到月份
      var date = now.getDate() //得到日期
      month = month + 1
      month = month.toString().padStart(2, '0')
      date = date.toString().padStart(2, '0')
      var defaultDate = `${year}-${month}-${date}`
      //7天前日期
      var myDate = new Date()
      myDate.setDate(myDate.getDate() - 7)
      var myDateyear = myDate.getFullYear() //得到年份
      var myDatemonth = myDate.getMonth() //得到月份
      var myDatedate = myDate.getDate() //得到日期
      myDatemonth = myDatemonth + 1
      myDatemonth = myDatemonth.toString().padStart(2, '0')
      myDatedate = myDatedate.toString().padStart(2, '0')
      var beforedefaultDate = `${myDateyear}-${myDatemonth}-${myDatedate}`

      //运维任务统计
      this.queryparam['StartDate'] = beforedefaultDate
      this.queryparam['EndDate'] = defaultDate

      //系统统计
      this.queryparam_Scrap['StartDate'] = beforedefaultDate
      this.queryparam_Scrap['EndDate'] = defaultDate

      //报警统计
      this.queryparam_Alarm['StartDate'] = beforedefaultDate
      this.queryparam_Alarm['EndDate'] = defaultDate

      //备机使用统计
      this.queryparam_BeiJi['StartDate'] = beforedefaultDate
      this.queryparam_BeiJi['EndDate'] = defaultDate

      //运维统计报告
      this.queryparam_Maintentance['StartDate'] = beforedefaultDate
      this.queryparam_Maintentance['EndDate'] = defaultDate

      //运维工作和质控报告
      this.queryparam_YwWorkAndZhiKong['StartDate'] = beforedefaultDate
      this.queryparam_YwWorkAndZhiKong['EndDate'] = defaultDate
    },

    handleSelectionChange(val) {
      //checkbox选中的数据val 是选中行的所有数组
      this.handleSelection = val
    },
    handleSelectionChange_Repair(val) {
      //checkbox选中的数据val 是选中行的所有数组
      this.handleSelection_Repair = val
    },
    handleSelectionChange_Scrap(val) {
      //checkbox选中的数据val 是选中行的所有数组
      this.handleSelection_Scrap = val
    },
    handleSelectionChange_Alarm(val) {
      this.handleSelection_Alarm = val
    },
    handleSelectionChange_BeiJi(val) {
      this.handleSelection_BeiJi = val
    },
    handleSelectionChange_Maintentance(val) {
      this.handleSelection_Maintentance = val
    },
    handleSelectionChange_YwWorkAndZhiKong(val) {
      this.handleSelection_YwWorkAndZhiKong = val
    },

    getSizeChange(val) {
      //table组件发射的方法 用于改变每页数据量
      this.page.pageSize = val
      //这下面需要重新调用 获取列表页的函数
      this.getList()
    },
    getSizeChange_Repair(val) {
      //table组件发射的方法 用于改变每页数据量
      this.page_Repair.pageSize = val
      //这下面需要重新调用 获取列表页的函数
      this.getList_Repair()
    },
    getSizeChange_Scrap(val) {
      //table组件发射的方法 用于改变每页数据量
      this.page_Scrap.pageSize = val
      //这下面需要重新调用 获取列表页的函数
      this.getList_Scrap()
    },
    getSizeChange_Alarm(val) {
      this.page_Alarm.pageSize = val
      //这下面需要重新调用 获取列表页的函数
      this.getList_Alarm()
    },
    getSizeChange_BeiJi(val) {
      this.page_BeiJi.pageSize = val
      //这下面需要重新调用 获取列表页的函数
      this.getList_BeiJi()
    },
    getSizeChange_Maintentance(val) {
      this.page_Maintentance.pageSize = val
      //这下面需要重新调用 获取列表页的函数
      this.getList_Maintentance()
    },
    getSizeChange_YwWorkAndZhiKong(val) {
      this.page_YwWorkAndZhiKong.pageSize = val
      //这下面需要重新调用 获取列表页的函数
      this.getList_YwWorkAndZhiKong()
    },

    getCurrentPage(val) {
      //table组件发射的方法  用于改变当前所在页码
      this.page.pageNo = val
      //这下面需要重新调用 获取列表页的函数
      this.getList()
    },
    getCurrentPage_Repair(val) {
      //table组件发射的方法  用于改变当前所在页码
      this.page_Repair.pageNo = val
      //这下面需要重新调用 获取列表页的函数
      this.getList_Repair()
    },
    getCurrentPage_Scrap(val) {
      //table组件发射的方法  用于改变当前所在页码
      this.page_Scrap.pageNo = val
      //这下面需要重新调用 获取列表页的函数
      this.getList_Scrap()
    },
    getCurrentPage_Alarm(val) {
      //table组件发射的方法  用于改变当前所在页码
      this.page_Alarm.pageNo = val
      //这下面需要重新调用 获取列表页的函数
      this.getList_Alarm()
    },
    getCurrentPage_BeiJi(val) {
      //table组件发射的方法  用于改变当前所在页码
      this.page_BeiJi.pageNo = val
      //这下面需要重新调用 获取列表页的函数
      this.getList_BeiJi()
    },
    getCurrentPage_Maintentance(val) {
      //table组件发射的方法  用于改变当前所在页码
      this.page_Maintentance.pageNo = val
      //这下面需要重新调用 获取列表页的函数
      this.getList_Maintentance()
    },
    getCurrentPage_YwWorkAndZhiKong(val) {
      //table组件发射的方法  用于改变当前所在页码
      this.page_YwWorkAndZhiKong.pageNo = val
      //这下面需要重新调用 获取列表页的函数
      this.getList_YwWorkAndZhiKong()
    },

    //运维任务统计
    getList(obj) {
      var self = this
      //判断开始时间和结束时间
      if (self.queryparam.StartDate > self.queryparam.EndDate) {
        self.$message({
          message: '查询开始时间不能大于查询结束时间!',
          type: 'warning',
        })
        return
      }
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/MaintenanceStatistics/GetMaintenanceStatisticsByPage?pageSize=' +
          self.page.pageSize +
          '&pageIndex=' +
          self.page.pageNo +
          '&StartDate=' +
          self.queryparam.StartDate +
          '&EndDate=' +
          self.queryparam.EndDate +
          '&StatisticsType=' +
          self.queryparam.StatisticsType,
      })
        .then((res) => {
          if (res.status == 200) {
            self.list = res.data.data
            self.page.total = res.data.total
            self.options.loading = false
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    //第四方检查统计
    getList_Repair(obj) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/MaintenanceStatistics/GetCityCheckCompletionByPage?pageSize=' +
          self.page_Repair.pageSize +
          '&pageIndex=' +
          self.page_Repair.pageNo +
          '&StartDate=' +
          self.queryparam_Repair.StartDate +
          '&EndDate=' +
          self.queryparam_Repair.EndDate,
      })
        .then((res) => {
          if (res.status == 200) {
            self.list_Repair = res.data.data
            self.page_Repair.total = res.data.total
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    //质控统计
    getList_Scrap(obj) {
      var self = this
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/MaintenanceStatistics/GetQualityStatisticByPage?pageSize=' +
          self.page_Scrap.pageSize +
          '&pageIndex=' +
          self.page_Scrap.pageNo +
          '&StartDate=' +
          self.queryparam_Scrap.StartDate +
          '&EndDate=' +
          self.queryparam_Scrap.EndDate,
      })
        .then((res) => {
          if (res.status == 200) {
            self.list_Scrap = res.data.data
            self.page_Scrap.total = res.data.total
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    //报警统计
    getList_Alarm(obj) {
      var self = this
      //判断开始时间和结束时间
      if (self.queryparam_Alarm.StartDate > self.queryparam_Alarm.EndDate) {
        self.$message({
          message: '查询开始时间不能大于查询结束时间!',
          type: 'warning',
        })
        return
      }
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/MaintenanceStatistics/GetAlarmStatisticByPage?pageSize=' +
          self.page_Alarm.pageSize +
          '&pageIndex=' +
          self.page_Alarm.pageNo +
          '&StartDate=' +
          self.queryparam_Alarm.StartDate +
          '&EndDate=' +
          self.queryparam_Alarm.EndDate,
      })
        .then((res) => {
          if (res.status == 200) {
            self.list_Alarm = res.data.data
            self.page_Alarm.total = res.data.total
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    //备机使用统计
    getList_BeiJi(obj) {
      var self = this
      //判断开始时间和结束时间
      if (self.queryparam_BeiJi.StartDate > self.queryparam_BeiJi.EndDate) {
        self.$message({
          message: '查询开始时间不能大于查询结束时间!',
          type: 'warning',
        })
        return
      }
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/MaintenanceStatistics/GetBeiJiUseByPage?pageSize=' +
          self.page_BeiJi.pageSize +
          '&pageIndex=' +
          self.page_BeiJi.pageNo +
          '&StartDate=' +
          self.queryparam_BeiJi.StartDate +
          '&EndDate=' +
          self.queryparam_BeiJi.EndDate,
      })
        .then((res) => {
          if (res.status == 200) {
            self.list_BeiJi = res.data.data
            self.page_BeiJi.total = res.data.total
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    //运维统计报告
    getList_Maintentance(obj) {
      var self = this
      //判断开始时间和结束时间
      if (
        self.queryparam_Maintentance.StartDate >
        self.queryparam_Maintentance.EndDate
      ) {
        self.$message({
          message: '查询开始时间不能大于查询结束时间!',
          type: 'warning',
        })
        return
      }
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/MaintenanceStatistics/GetOperationReportByPage?pageSize=' +
          self.page_Maintentance.pageSize +
          '&pageIndex=' +
          self.page_Maintentance.pageNo +
          '&StartDate=' +
          self.queryparam_Maintentance.StartDate +
          '&EndDate=' +
          self.queryparam_Maintentance.EndDate,
      })
        .then((res) => {
          if (res.status == 200) {
            self.list_Maintentance = res.data.data
            self.page_Maintentance.total = res.data.total
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    //运维工作
    getList_YwWorkAndZhiKong(obj) {
      var self = this
      //判断开始时间和结束时间
      if (
        self.queryparam_YwWorkAndZhiKong.StartDate >
        self.queryparam_YwWorkAndZhiKong.EndDate
      ) {
        self.$message({
          message: '查询开始时间不能大于查询结束时间!',
          type: 'warning',
        })
        return
      }
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/MaintenanceStatistics/GetYwWorkAndZhiKongByPage?pageSize=' +
          self.page_YwWorkAndZhiKong.pageSize +
          '&pageIndex=' +
          self.page_YwWorkAndZhiKong.pageNo +
          '&City=' +
          self.queryparam_YwWorkAndZhiKong.City +
          '&StartDate=' +
          self.queryparam_YwWorkAndZhiKong.StartDate +
          ' &EndDate=' +
          self.queryparam_YwWorkAndZhiKong.EndDate,
      })
        .then((res) => {
          if (res.status == 200) {
            self.list_YwWorkAndZhiKong = res.data.data
            self.page_YwWorkAndZhiKong.total = res.data.total
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    selectSStation() {
      this.$refs.cascader.selectSStation(this.ruleForm.SStation)
    },
  },
  components: {
    treeSStation,
    rateTable,
    rateSelect,
    rateCascader,
    rateUpload,
    rateQuarterSelect,
  },
  created() {
    this.getNowTime() //调用获取列表页的方法
  },
  mounted() {
    this.getList() //调用获取列表页的方法
    this.getList_Repair()
    this.getList_Alarm()
    this.getList_BeiJi()
    this.getList_Maintentance()
    this.getList_YwWorkAndZhiKong()
  },
  emits: ['jump'],
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
  height: 60px !important;
}
.el-header .search {
  height: 40px !important;
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
