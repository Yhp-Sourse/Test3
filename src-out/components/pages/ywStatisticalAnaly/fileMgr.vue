<template>
  <div>
    <el-tabs v-model:value="activeName" type="card">
      <el-tab-pane label="文件管理" name="first"><file></file></el-tab-pane>
      <el-tab-pane label="文件操作日志" name="second"
        ><fileLog></fileLog
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import file from './file/index'
import fileLog from './file/fileLog'

export default {
  components: {
    file,
    fileLog,
  },
  data() {
    return {
      activeName: 'first',
    }
  },
}
</script>
