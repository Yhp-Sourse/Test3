<template>
  <iframe
    src="http://218.76.24.159:8028/Maintaince/Login/Index"
    width="100%"
    height="800"
    frameborder="0"
    scrolling="auto"
  ></iframe>
</template>

<script>
import rateTable from '../common/rateTable' //引入table组件
export default {
  data() {
    return {
      page: {
        //关于页码的相关参数
        pageShow: true, //是否显示
        total: 0, //总条数
        pageSize: 20, //每页条数
        pageNo: 1, //第几页
      },
      handleSelection: [], //checkbox选中行
      list: [], // table数据
      options: {
        // table样式参数
        stripe: true, // 是否为斑马纹 table
        loading: false, // 是否添加表格loading加载动画
        highlightCurrentRow: true, // 是否支持当前行高亮显示
        mutiSelect: true, // 是否支持列表项选中功能
      }, // table 的参数结束
      columns: [
        {
          // 需要展示的列开始
          prop: 'taskNo',
          label: '任务编号',
          align: 'center',
          isShow: true,
          formatter: (row, column, cellValue) => {
            //formatter重构
            //   return `返回参数`
            return row.taskNo
          },
        },
        {
          prop: 'title',
          label: '标题',
          align: 'center',
          isShow: true,
        },
        {
          prop: 'planNo',
          label: '计划编号',
          align: 'center',
          isShow: true,
        },
      ], // 需要展示的列结束
      operates: {
        //操作栏
        width: 400,
        fixed: 'right',
        list: [
          {
            id: '1',
            label: '编辑',
            show: true, //是否显示按钮
            className: 'searchAll', //样式类名
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              this.handleEdit(index, row)
            },
          },
          {
            id: '2',
            label: '删除',
            show: true,
            className: 'searchAll',
            disabled: true,
            method: (index, row) => {
              this.handledel(index, row)
            },
          },
        ],
      }, // 列操作按钮
    } //return ending
  },
  methods: {
    handleSelectionChange(val) {
      //checkbox选中的数据val 是选中行的所有数组
      this.handleSelection = val
    },
    getSizeChange(val) {
      //table组件发射的方法 用于改变每页数据量
      this.page.pageSize = val
      //这下面需要重新调用 获取列表页的函数
    },
    getCurrentPage(val) {
      //table组件发射的方法  用于改变当前所在页码
      this.page.pageNo = val
      //这下面需要重新调用 获取列表页的函数
    },
    handleEdit(index, row) {
      //操作栏编辑按钮
      console.log(' index:', index)
      console.log(' row:', row)
    },
    handledel(index, row) {
      //操作栏删除按钮
      console.log(' index:', index)
      console.log(' row:', row)
    },
    getTaskList() {
      var self = this
      this.$http({
        method: 'GET',
        url:
          this.api +
          '/api/Yw_Task/GetTaskList?pagesize=' +
          self.page.pageSize +
          '&pageindex=' +
          self.page.pageNo,
      })
        .then((res) => {
          console.log(res)
          if (res.status == 200) {
            self.list = res.data.data
            self.page.total = res.data.count
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  components: {
    rateTable,
  },
  created() {
    //调用获取列表页的方法
  },
  mounted() {
    this.getTaskList() //调用获取列表页的方法
  },
}
</script>
