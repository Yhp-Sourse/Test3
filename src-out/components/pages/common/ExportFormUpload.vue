<template>
  <div id="v_upload">
    <el-upload
      class="upload-demo"
      drag
      :show-file-list="false"
      :limit="limit"
      :action="
        action +
        '?BusinessId=' +
        BusinessId +
        '&BusinessType=' +
        BusinessType +
        '&SStation=' +
        SStation +
        '&CreatedTime=' +
        CreatedTime +
        '&formType=' +
        formType
      "
      :headers="headers"
      :before-upload="beforeUpload"
      :on-success="uploadSuccess"
      :on-exceed="handleExceed"
      :multiple="Ismultiple"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text" style="font-size: 16px; color: #fff">
        <span v-html="title"></span>
      </div>
      <span style="font-size: 16px; color: #fff">{{
        isUpload ? '(已上传)' : '(未上传)'
      }}</span>
      <template v-slot:tip>
        <div class="el-upload__tip">
          <span v-html="isUpload ? filelist : ''"></span
          ><i
            v-if="isUpload"
            @click="handleuplodRemove(SStation, BusinessId, CreatedTime)"
            class="el-icon-close"
          ></i>
        </div>
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
  props: [
    'CreatedTime',
    'BusinessId',
    'BusinessType',
    'SStation',
    'Ismultiple',
    'limit',
    'title',
    'isUpload',
    'formType',
    'filelist',
  ],
  data() {
    return {
      Base64: '',
      fileName: '',
      fileURL: '',
      headers: { token: sessionStorage.getItem('Authorization') },
      action: this.api + '/api/Upload/ExportFormUpload',
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
      if (!(ext != 'docx' || ext != 'doc')) {
        this.$message.error('上传文件格式不对!')
        return false
      }
      if (!isLt4M) {
        this.$message.error('上传文件大小不能超过 30M!')
        return false
      }
      if (this.CreatedTime == '' || this.CreatedTime == null) {
        this.$message.error('请选择日期！')
        return false
      }
      if (this.SStation == '' || this.SStation == null) {
        this.$message.error('请选择站点！')
        return false
      }
      if (this.isUpload && this.formType != 'other') {
        this.$message.warning('该附件已上传！')
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
      debugger
      this.fileName = response.fileName
      this.fileURL = response.fileURL
      // if(response.code==200){
      //   this.$message.warning("上传成功！");
      // }else{
      //   this.$message.warning(response.msg);
      // }
    },
    uploadEmit() {
      $emit(this, 'uploadSuccess', {
        fileName: this.fileName,
        fileUrl: this.fileURL,
        Base64: this.Base64,
      })
    },
    handleuplodRemove(SStation, BusinessId, CreatedTime) {
      $emit(this, 'handleuplodRemove', { SStation, BusinessId, CreatedTime })
    },
  },
  emits: ['uploadSuccess', 'handleuplodRemove'],
}
</script>

<style scoped>
#v_upload >>> .el-upload-dragger {
  background: #062d91;
}
</style>
