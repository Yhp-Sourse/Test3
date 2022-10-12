<template>
  <div id="v_upload">
    <el-upload
      class="upload-demo"
      drag
      :limit="limit"
      :action="
        action + '?BusinessId=' + BusinessId + '&BusinessType=' + BusinessType
      "
      :headers="headers"
      :before-upload="beforeUpload"
      :on-success="uploadSuccess"
      :on-exceed="handleExceed"
      :multiple="Ismultiple"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <template v-slot:tip>
        <div class="el-upload__tip">上传不超过30M的文件</div>
      </template>
    </el-upload>
    <div v-show="false">
      <el-input v-model:value="fileName" autocomplete="off"></el-input>
      <el-input v-model:value="fileURL" autocomplete="off"></el-input>
    </div>
  </div>
</template>

<script>
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
export default {
  props: ['BusinessId', 'BusinessType', 'Ismultiple', 'limit'],
  data() {
    return {
      Base64: '',
      fileName: '',
      fileURL: '',
      headers: { token: sessionStorage.getItem('Authorization') },
      action: this.api + '/api/Upload/UploadFilesFileMgr',
    }
  },
  created() {},
  watch: {
    fileName() {
      this.uploadEmit()
    },
  },
  mounted() {},
  methods: {
    beforeUpload(file) {
      var self = this
      var reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function (e) {
        // 图片base64化
        var newUrl = this.result //图片路径
        self.Base64 = newUrl
      }
      var ext = file.name
        .substring(file.name.lastIndexOf('.') + 1, file.name.length)
        .toLowerCase()
      // var msg=/^image\/(jpeg|png|jpg|gif|txt|doc|docx|document|xls|xlsx|pdf)$/.test(file.type)
      const isLt4M = file.size / 1024 / 1024 <= 30 //大小不超过30MB
      if (
        !(
          ext != 'xls' ||
          ext != 'xlsx' ||
          ext != 'pdf' ||
          ext != 'docx' ||
          ext != 'doc' ||
          ext != 'txt' ||
          ext != 'gif' ||
          ext != 'jpg' ||
          ext != 'jpeg' ||
          ext != 'png'
        )
      ) {
        this.$message.error('上传文件格式不对!')
        return false
      }
      if (!isLt4M) {
        this.$message.error('上传文件大小不能超过 30M!')
        return false
      }

      return isLt4M
    },
    handleExceed(files, fileList) {
      if (files.length > this.limit) {
        this.$message.warning(
          `此次上传数量为：${files.length}，超出文件最大（${this.limit}）限制个数。`
        )
      }
    },
    uploadSuccess(response, file, fileList) {
      this.fileName = response.fileName
      this.fileURL = response.fileURL
    },
    uploadEmit() {
      $emit(this, 'uploadSuccess', {
        fileName: this.fileName,
        fileUrl: this.fileURL,
        Base64: this.Base64,
      })
    },
  },
  emits: ['uploadSuccess'],
}
</script>

<style scoped></style>
