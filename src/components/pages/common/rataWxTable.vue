<template>
    <div class="table">
        <el-table id="rateTable" class="tableLimit" v-loading="isLoading" :data="list" :stripe="options.stripe" :height="tableHeight"
                  ref="mutipleTable" :row-key="rowkey" border :tree-props="tp"
                  @selection-change="handleSelectionChange" @cell-click='handleCellClick'>
            <!--region 选择框-->
            <el-table-column v-if="options.mutiSelect" type="selection" style="width: 55px;">
            </el-table-column>
            <!--endregion-->
            <!--region 数据列-->
            <template v-for="(column, index) in columns">
                <el-table-column :prop="column.prop"
                                 v-if="column.isShow"
                                 :key='column.label'
                                 :label="column.label"
                                 :align="column.align"
                                 :width="column.width">
                    <template slot-scope="scope">
                        <template v-if="!column.render">
                            <template v-if="column.formatter">
                                <span v-html="column.formatter(scope.row, column)"></span>
                            </template>
                            <template v-else>
                                <span :title="scope.row[column.prop]">{{scope.row[column.prop]}}</span>
                            </template>
                        </template>
                        <template v-else>
                            <expand-dom :column="column" :row="scope.row" :render="column.render" :index="index"></expand-dom>
                        </template>
                    </template>
                </el-table-column>
            </template>
            <!--endregion-->
            <!--region 按钮操作组-->
            <el-table-column ref="fixedColumn" label="操作" align="center" :width="operates.width" :fixed="operates.fixed"
                             v-if="operates.list.filter(_x=>_x.show === true).length > 0">
                <template slot-scope="scope">
                    <div class="operate-group" style="overflow: auto;">
                        <template v-for="(btn, key) in operates.list">
                            <span class="item" v-if="btn.show" :key='btn.id'>
                                <el-button  :type="btn.bgColortype" :class="btn.className"  size="mini" :disabled="btn.disabled"
                                            @click.native.prevent="btn.method(key,scope.row)">{{ btn.label }}
                                </el-button>
                            </span>
                        </template>
                    </div>
                </template>
            </el-table-column>
            <!--endregion-->
        </el-table>
        <div v-if="pageShow">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="1"
                    :page-sizes="[10, 50, 100, 150]"
                    :page-size="150"
                    layout="total, sizes, prev, pager, next"
                    :total="total"
                    background>
            </el-pagination>
        </div>
    </div>
</template>
<!--endregion-->
<script>
  export default {
    props: {
      list: {
        type: Array,
        default: []
      }, // 数据列表
      columns: {
        type: Array,
        default: []
      }, // 需要展示的列 === prop：列数据对应的属性，label：列名，align：对齐方式，width：列宽,isShow:是否显示
      operates: {}, // 操作按钮组 === label: 文本，type :类型（primary / success / warning / danger / info / text），show：是否显示，icon：按钮图标，plain：是否朴素按钮，disabled：是否禁用，method：回调方法
      options: {
        type: Object,
        default: {
          stripe: false, // 是否为斑马纹 table
          highlightCurrentRow: false, // 是否要高亮当前行
        },
      }, // table 表格的控制参数
      total: {                // 所有条数
        type: Number,
        default: ()=>0
      },
      pageShow: {             //是否显示跳转页
        type: Boolean,
        default: true
      },
      rowkey:{
        type: String,
        default:'id'
      },
      tp: {//是否有树型表格，默认有
        type: Object,
        default:()=> {
            hasChildren: 'hasChildren';
            children: 'children' 
        }
      }
    },
    components: {//组件
      expandDom: {
        functional: true,
        props: {
          row: Object,
          render: Function,
          index: Number,
          column: {
            type: Object,
            default: null
          }
        },
        render: (h, ctx) => {
          const params = {
            row: ctx.props.row,
            index: ctx.props.index
          }
          if (ctx.props.column) params.column = ctx.props.column
          return ctx.props.render(h, params)
        }
      }
    },
    data () {// 数据
      return {
        tableHeight:600,
        pageIndex: 1,
        multipleSelection: [], // 多行选中
      }
    },
    mounted () {
        var self=this;
        // setTimeout(() => {
        //     self.tableHeight = window.innerHeight - self.$refs.mutipleTable.$el.offsetTop-205;
        // },100)
        this.$nextTick(function () {
            self.options.tableHeight = window.innerHeight - self.$refs.mutipleTable.$el.offsetTop - 205;
            
            // 监听窗口大小变化
            window.onresize = function() {
                self.options.tableHeight= window.innerHeight - self.$refs.mutipleTable.$el.offsetTop - 205
            }
        })
    },
    watch: {
      operates(val,oldVal){
        
      }
    },
    computed: {
      isLoading(){//是否显示loding
        return this.total<=0 && this.options.loading;
      }
    },
    methods: {
      // 多行选中
      handleSelectionChange (val) {
        this.multipleSelection = val
        this.$emit('handleSelectionChange', val)
      },
      handleCellClick(row, column, cell, event){//	当某个单元格被点击时会触发该事件
        this.$emit('handleCellClick', {row, column, cell, event});
      },
      // 显示 表格操作弹窗
      showActionTableDialog () {
        this.$emit('handelAction')
      },
      handleSizeChange(val) {   //每页显示多少条
        this.$emit('sizeChange', val)
      },
      handleCurrentChange(val) {  //当前多少页
        this.$emit('currentPage', val)
      },
      clearSelection(){   //清除表格chekbox
        this.$refs.mutipleTable.clearSelection();
      }
    }
  }
</script>

<style scoped>
#rateTable .item{margin-right: 2px;}
.el-pagination{text-align: left;}
/* .success{background:#67C23A;border: 1px solid #67C23A;} */
.el-table{height: calc(100vh - 280px) !important;}

::-webkit-scrollbar{width: 7px;height: 7px;background-color: #F5F5F5;}
  /*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);border-radius: 10px;background-color: #F5F5F5;}
  /*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb{border-radius: 10px;box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);background-color: #c8c8c8;}
</style>>

