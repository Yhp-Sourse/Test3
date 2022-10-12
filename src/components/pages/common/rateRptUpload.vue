<template>
    <div id="v_upload">
        <el-upload
            ref="rptupload"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :action="action+'?BusinessId='+BusinessId+'&Limit='+limit+'&CreatedBy='+CreatedBy+'&SStation='+SStation+'&BusinessType='+BusinessType"
            :headers='headers'
            :before-upload='beforeUpload'
            :on-success='uploadSuccess'
            :on-exceed="handleExceed"
            :limit='limit'
            :multiple='Ismultiple'
            :class="{deletehide:hide}"  
            >
           <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
        <div v-show='false'>
            <el-input v-model="fileName" autocomplete="off"></el-input>
            <el-input v-model="fileURL" autocomplete="off"></el-input>
        </div>
    </div>
</template>
<script>
  export default {
    props:['BusinessId','BusinessType','Ismultiple','limit','SStation','CreatedBy'],
    data() {
      return {
        Base64:'',
        fileName:'',
        fileURL:'',
        headers:{token:sessionStorage.getItem('Authorization')},
        action: this.api+'/api/Upload/UploadZhiKongFiles',
        dialogVisible:false,
        dialogImageUrl: "",
        hide:true,
      };
    },
    created(){
      
    },
    watch: {
      fileName() {
        this.uploadEmit();
      },
      BusinessType(){
        this.$refs.rptupload.clearFiles();
      }
    },
    mounted() {
     
    },
    methods: {
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
      beforeUpload (file) {
      　　var self = this;
      　　var reader = new FileReader();
      　　reader.readAsDataURL(file);
      　　reader.onload = function(e) {
      　　　　// 图片base64化
      　　　　var newUrl = this.result;    //图片路径
              self.Base64 = newUrl;
      　　};
          var ext=file.name.substring(file.name.lastIndexOf(".")+1,file.name.length).toLowerCase();
          // var msg=/^image\/(jpeg|png|jpg|gif|txt|doc|docx|document|xls|xlsx|pdf)$/.test(file.type)
	        const isLt4M = file.size / 1024/1024 <=10 //大小不超过10MB
	        if(!(ext!="xls"||ext!="xlsx"||ext!="pdf"||ext!="docx"||ext!="doc"||ext!="txt"||ext!="gif"||ext!="jpg"||ext!="jpeg"||ext!="png")){
	          this.$message.error('上传文件格式不对!');
	          return false;
	        }
	        if(!isLt4M) {
	          this.$message.error('上传文件大小不能超过 10M!');
	          return false;
          }
          
	        return isLt4M
      },
      handleExceed(files, fileList){
       var totalnumber=fileList.length+files.length;
       if(totalnumber>this.limit){
        this.$message.warning(`超出上传文件最大（${this.limit}）限制个数。`);
       }
      },

      //上传文件
      uploadSuccess(response, file, fileList){
        if(response.isSuccess==true){
            this.fileName=response.fileName;
            this.fileURL=response.fileURL;
            this.$emit('uploadSuccess', {fileName:this.fileName,fileUrl:this.fileURL});
        }
        else{
          this.$message.warning(`上传出错,请检查文件名称是否包含特殊字符或超出上传文件最大（${this.limit}）限制个数。`);
           //将图片列表清空
          this.$refs.rptupload.clearFiles();
        }
        this.$refs.rptupload.clearFiles();
        
      },
      uploadEmit(){
        this.$emit('uploadSuccess', {fileName:this.fileName,fileUrl:this.fileURL,Base64:this.Base64});
      }
    }
  }
</script>
<style scoped>

</style>
<style>
.deletehide .el-upload-list--picture-card .el-upload-list__item-actions .el-upload-list__item-delete {
    display: none;
    opacity: 0;
}
</style>
