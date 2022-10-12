<template>
  <div>
    <el-transfer v-model="value" filterable :data="data" :stationId ="stationId"  @change='handleChange'>
    </el-transfer>
  </div>
  
</template>

<script>
  export default {
    props:['stationId'],
    data() {
      const generateData = _ => {
        const data = [];
        return data;
      };
      return {
        data: generateData(),
        value: []
      };
    },
    mounted(){
      this.getUserList();
    },
    watch:{
       stationId(val,oldVal){
         this.getUserList();
       }
    },
    methods:{
      handleChange(value, direction, movedKeys) {
        this.$emit('choseSuccess', value)
      },
      getUserList(){
        var self = this;
        this.$http({
            method: 'GET',
            url: this.api+'/api/Yw_UsrManage/GetYwPersonBySStation?pageSize=100000&pageIndex=1&roleType=1&stationId='+self.stationId
        }).then(res => {
            if(res.status==200){
              self.data=[];
              res.data.data.forEach(item=>{
                self.data.push({
                  label:item.usr_realname,
                  key:item.usr_id+'&'+item.usr_realname,
                  disabled: false
                });
              });
            }
        }).catch(error => {
          console.log(error);
        });
      }
    }
  };
</script>
<style scoped>
.el-transfer{height: 100%;text-align: left !important;}
</style>