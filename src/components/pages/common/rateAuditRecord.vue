<template>
    <div class="stepComponent" >
        <div class="approvalProcess" >          
            <el-steps :active="active" finish-status="success" simple>
               <el-step :title="item.info" :description='item.typeName' v-for="(item,index) in stepList" :key="index" :id="item.id"></el-step>
            </el-steps>
            <!-- <el-button style="margin-top: 12px;" @click="next">下一步</el-button> -->
        </div>
    </div>
</template>
<script>
 
export default {
    props:{
        //当前流程的状态
        active:{
          type:Number,
          default:0
        },
        //业务的类型
        businessType:{
            type:Number,
            default:0
        },
        //业务主键id
        businessId:{
            type:String,
            default:''
        },
        //审核人
        auditerId:{
            type:Number,
            default:0
        },
        result:{
            type:String,
            default:''
            },
        reason:{
            type:String,
            default:''
        },
        typeCode:{
            type:String,
            default:'001001'
        },
        isSave:{
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
            stepList:{
                type:Array,
                default: () => [
                    { id:'1',info: "待提交",typeName: "测试"},
                    { id:'2',info: "待审核",typeName: "测试"},
                    { id:'3',info: "已审核",typeName: "测试"},
                ]
            }  
        };
    },
    watch: {
        active(){
            this.aduitRecord();
        }
    },
    mounted() {
        this.initStepList();
    },
    computed: {
    },
    methods: {
        initStepList(){
            this.$http({
                method: 'GET',
                url: this.api+'/api/Select/GetSelectList?TypeCode='+this.typeCode
            }).then(res => {
                if(res.status==200){
                    this.stepList = res.data.data; 
                }
            }).catch(error => {
                console.log(error);
            });
        },
        aduitRecord(){
            var self = this;
            if(this.isSave){
                this.$http({
                    headers: {
                        'deviceCode': 'A95ZEF1-47B5-AC90BF3'
                    },
                    method: 'post',
                    url: self.api+'/api/AuditRecord/Submit',
                    data:self.Qs.stringify({
                        BusinessType:self.businessType,
                        BusinessId:self.businessId,
                        AuditerId:self.auditerId,
                        Result:self.result,
                        Reason:self.reason,
                        AuditStatus:self.active,
                    })
                }).then(res => {
                    // console.log(res);
                }).catch(error => {
                    console.log(error);
                });
            }
        },
        next() {
            if (this.active++ > 2) this.active = 1;
        },
    }
};
</script>
<style scoped>
  .stepComponent{
      /* background-color:#DFEBFF; */
      width: 100%-20px;
      padding: 10px 10px 10px 10px;
      margin: 10px 10px 10px 10px;
  }
  .stepsTitle{
      margin: 10px 0px  10px  10px ;
  }
  .approvalProcess{
      color: #9EADC4;
      font-size: 14px;
      /* width: 100%; */
      background:#DFEBFF;
      margin-left:20px;
      margin-right:0px;
      margin-top:10px;
  }
  
</style>