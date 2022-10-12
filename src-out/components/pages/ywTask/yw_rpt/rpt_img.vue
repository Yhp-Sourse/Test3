<template>
  <div class="image beizhu" style="position: relative">
    <!-- <el-image
                  style="width: 100px; height: 100px"
                  src='http://59.172.208.254:93/ZhiKongPhotos/565_程龙/2021111910410286/1189558305.jpg'
                  src="http://59.172.208.254:93/ZhiKongPhotos/ceshi/4a731a90594a4af544c0c25941171jpeg.jpeg"
              ></el-image> -->
    <span v-for="(g, index) in files" :key="index">
      <el-image
        style="margin: 2px; width: 100px; height: 100px; border: 1px solid #ccc"
        :src="g.src"
        :preview-src-list="imgArr"
      ></el-image>
      <!-- <el-image  style="margin:2px;width: 100px; height: 100px;border:1px solid #ccc;" :src="g.imgArr" ></el-image> -->
    </span>
  </div>
</template>

<script>
export default {
  props: {
    footerData: {},
  },
  data() {
    return {
      files: [],
      imgArr: [],
      baseUrl: 'http://59.172.208.254:93',
    }
  },
  mounted() {
    this.getFileFullPath()
  },
  methods: {
    //获取图片全路径
    getFileFullPath() {
      var self = this
      this.$nextTick(() => {
        this.$http({
          method: 'GET',
          url:
            self.api +
            '/api/Common/GetFileFullPathByIdAndReport?id=' +
            self.footerData.taskNo +
            '&reportCode=' +
            self.footerData.reportCode,
        })
          .then((res) => {
            self.files = res.data.data
            self.getFlieStream()
          })
          .catch((error) => {
            console.log(error)
          })
      })
    },
    getFlieStream() {
      var self = this
      self.files.forEach((item) => {
        item.src = self.baseUrl + item.fileURL
        this.$http({
          method: 'GET',
          responseType: 'blob',
          url:
            self.api + '/api/Common/GetFlieStream?partialPath=' + item.fileURL,
        })
          .then((res) => {
            let cc = window.URL.createObjectURL(res.data)
            self.imgArr.push(cc)
            item.imgArr = cc
          })
          .catch((error) => {
            console.log(error)
          })
      })
    },
  },
}
</script>

<style scoped></style>
