<template>
  <el-select
    v-model:value="selectValue"
    :multiple="multiple"
    :disabled="disabled"
    :clearable="clearable"
    :filterable="filterable"
    :placeholder="placeholder"
    style="width: 100%"
    @change="change"
    @visible-change="visibleChange"
  >
    <el-option
      v-for="(item, i) in optionLists"
      :key="optionKey ? item[optionKey.value] + i : item.value + i"
      :label="optionKey ? item[optionKey.label] : item.label"
      :disabled="isDisabled(item)"
      :value="optionKey ? item[optionKey.value] : item.value"
    >
      <!-- 如果下拉框要显示多个文本，循环’showLabel‘ -->
      <span v-if="showLabel.length > 0" class="labelAll">
        <span v-for="itemIndex in showLabel" :key="itemIndex + i">{{
          item[itemIndex]
        }}</span>
      </span>
      <span v-else>{{ optionKey ? item[optionKey.value] : item.label }}</span>
    </el-option>
  </el-select>
</template>

<script>
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
export default {
  name: 'rateSelect',
  props: {
    value: [String, Array],
    options: String, // option选项列表JSON串，如此项有值，则直接用此选项中的数据，不会进行数据请求去获取数据。即优先级options>url。默认为空，非必传。
    url: {
      // 请求下拉框URL地址，默认数据字典请求接口地址，非必传。
      type: String,
      default: '',
    },
    urlCode: String, // 请求数据字典时的参数值，若url为数据字典请求地址，则必传，其余情况非必传。
    urlParams: String, // 接口其余请求参数的JSON串，非必传。
    multiple: {
      // 是否多选，默认false，非必传。
      type: Boolean,
      default: false,
    },
    disabled: {
      // 是否禁用，默认false，非必传。
      type: Boolean,
      default: false,
    },
    clearable: {
      // 是否可清空选项，默认true，非必传。
      type: Boolean,
      default: true,
    },
    filterable: {
      // 是否可搜索， 默认false，非必传。
      type: Boolean,
      default: false,
    },
    placeholder: {
      // 选择框提示文字，默认‘请选择’，非必传。
      type: String,
      default: '请选择',
    },
    optionKeys: String, // 指定显示的vaule和label的key值JSON串，若此项有值，则不再用'value'和'label'作为属性名，以此项设置为准，默认空，非必传。
    showLabels: String, // 下拉选项展示值字符串，逗号隔开，若此项有值，则下拉选项所展示文字不再用'label'的值，以此项设置为准，展示时按照顺序展示出来，如展示两个值，则在下拉框中是左右排列，如展示三个值及以上，则第一个和最后一个左右排列，其余值中间分布显示。默认空，非必传。
    disables: String, // 禁止选择的属性值，逗号隔开，非必传。
  },
  data() {
    return {
      selectValue: this.value,
      optionLists: [],
      optionKey: null,
      requestParams: null,
      showLabel: [],
    }
  },
  watch: {
    options() {
      if (this.options) {
        this.optionLists = JSON.parse(this.options)
      }
    },
    urlCode() {
      this.getOptions()
    },
    urlParams() {
      this.requestParams = this.urlParams ? JSON.parse(this.urlParams) : null
      this.getOptions()
    },
    url() {
      this.getOptions()
    },
    value() {
      this.selectValue = this.value
    },
    optionKeys() {
      this.optionKey = this.optionKeys ? JSON.parse(this.optionKeys) : null
    },
    showLabels() {
      this.showLabel = this.showLabels ? this.showLabels.split(',') : []
    },
  },
  created() {
    this.optionKey = this.optionKeys ? JSON.parse(this.optionKeys) : null
    this.showLabel = this.showLabels ? this.showLabels.split(',') : []
    this.requestParams = this.urlParams ? JSON.parse(this.urlParams) : null
    if (this.options) {
      // 如果父组件有下拉选项数据，则不进行数据请求
      this.optionLists = JSON.parse(this.options)
    } else {
      this.getOptions()
    }
  },
  methods: {
    /**
     * 获取下拉框的选择项数据
     */
    getOptions() {
      let params = {}
      if (this.urlCode) params.code = this.urlCode
      if (this.requestParams) {
        params = Object.assign(params, this.requestParams)
      }
      this.$http({
        method: 'GET',
        url: this.url,
      })
        .then((res) => {
          if (res.status == 200) {
            this.optionLists = res.data.data // 假设返回的数据封装在data中
          }
        })
        .catch((error) => {
          console.log(error)
        })
      // this.axios.get(this.url, {params})
      // .then(res => {
      // 	this.optionLists = res.list // 假设返回的数据封装在list中
      // }).catch(() => {})
    },
    /**
     * 判定该选项是否禁用
     * @item {Object} 该选项所有信息所在对象
     **/
    isDisabled(item) {
      if (this.disables) {
        const dicList = this.disables.split(',')
        const itemValue = this.optionKey
          ? item[this.optionKey.value]
          : item.value
        const findItemIndex = dicList.findIndex((itemD) => itemD === itemValue)
        if (findItemIndex > -1) return true
        return false
      }
      return false
    },
    /**
     * 选择框change事件，将所选值和所选值所在的对象回传给父组件
     * @val {String} 当前选中值
     **/
    change(val) {
      let valueKey = 'value'
      if (this.optionKey) valueKey = this.optionKey.value

      if (this.multiple) {
        const valObjList = []
        val.forEach((element) => {
          const valObj = this.optionLists.find(
            (itemO) => itemO[valueKey] === element
          )
          valObjList.push(valObj)
        })
        $emit(this, 'change', val, valObjList)
      } else {
        const valOption = this.optionLists.filter(
          (itemO) => itemO[valueKey] === val
        )
        const [valObj] = valOption
        $emit(this, 'change', val, valObj)
      }
    },
    /**
     * 下拉框出现/隐藏时触发
     * @isShow {Boolean} 标识：true为下拉框展开；false为下拉框隐藏
     **/
    visibleChange(isShow) {
      $emit(this, 'visibleChange', isShow)
    },
  },
  emits: ['change', 'visibleChange', 'update:value'],
}
</script>

<style scoped>
.labelAll {
  display: flex;
  align-content: center;
  justify-content: space-between;
}
.labelAll .span:last-child {
  font-size: 13px;
  color: #8492a6;
}
</style>
