<template>
  <div id="v_Cascader">
    <el-cascader
      v-model:value="selectOption1"
      :options="listOption"
      :props="defaultProp"
      size="medium"
      :change-on-select="checkStrictly"
      @change="change"
      clearable
      placeholder="请选择"
    >
    </el-cascader>
  </div>
</template>

<script>
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
export default {
  name: 'v_Cascader',
  props: {
    selectOption: '',
    checkStrictly: false,
  },
  data() {
    return {
      selectOption1: '',
      listOption: [],
      defaultProp: {
        value: 'sStation',
        label: 'sStationName',
        children: 'children',
        expandTrigger: 'hover',
        emitPath: false, //在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值
      },
    }
  },
  watch: {
    selectOption() {
      if (this.selectOption) {
        this.selectOption1 = this.selectOption
      }
    },
  },
  computed: {},
  mounted() {
    this.initRateCascader() //初始化rateCascader组件
  },
  methods: {
    change() {
      $emit(this, 'selectOptionEvent', this.selectOption1)
    },
    initRateCascader() {
      this.listOption = JSON.parse(sessionStorage.getItem('TreeSStation'))
    },
  },
  emits: ['selectOptionEvent'],
}
</script>

<style scoped>
.el-cascader,
.el-cascader--medium {
  width: 100%;
  height: 28px;
  line-height: 28px;
}
</style>
