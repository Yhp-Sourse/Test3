<template>
  <div>
    <el-form id="ASEmergency" :model="ruleForm" :rules="rules" ref="Form" :label-position="top">
       <div style="float:left;margin:5px 40px; display:none;" >
            <el-row>
              <el-col :span="11">
                <el-form-item label="巡检时间：" prop="yj_1">
                  <el-date-picker v-model="ruleForm.yj_1" type="date" value-format="yyyy-MM-dd"  placeholder="选择时间" :clearable=false></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="2">
                  &nbsp; &nbsp; &nbsp;
              </el-col>
              <el-col :span="11">
                  <!-- <el-form-item label="巡检结束时间：" prop="yj_2">
                    <el-date-picker v-model="ruleForm.yj_2" type="date" value-format="yyyy-MM-dd"  placeholder="选择时间" :clearable=false></el-date-picker>
                  </el-form-item> -->
              </el-col>
          </el-row>
        </div>
      <table id="ASEmergencytb">
        <tbody>
          <tr>
            <td>序号</td>
            <td>更换仪器</td>
            <td>更换原因</td>
            <td>更换后仪器型号</td>
            <td>更换后仪器编号</td>
            <td>更换时间</td>
            <td>记录人</td>
            <td>换回原仪器时间</td>
          </tr>
          <tr></tr>
          <tr>
            <td>1</td>
            <td>
              <el-form-item label="" prop="DeviceChange_1">
                <textarea v-model="ruleForm.DeviceChange_1"  id="DeviceChange_1"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceChangeWhy_1">
              <textarea v-model="ruleForm.DeviceChangeWhy_1"  id="DeviceChangeWhy_1"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceModel_1">
              <textarea v-model="ruleForm.DeviceModel_1"  id="DeviceModel_1"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceNum_1">
              <textarea v-model="ruleForm.DeviceNum_1"  id="DeviceNum_1"></textarea>
             </el-form-item></td>
            <td>
              <el-form-item label="" prop="ChangeTime_1">
                <el-date-picker v-model="ruleForm.ChangeTime_1" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
              </el-form-item>
            </td>
            <td><el-form-item label="" prop="ChangePerSon_1">
              <textarea v-model="ruleForm.ChangePerSon_1"  id="ChangePerSon_1"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceMark_1">
              <textarea v-model="ruleForm.DeviceMark_1"  id="DeviceMark_1"></textarea>
             </el-form-item></td>
          </tr>
          <tr>
            <td>2</td>
            <td><el-form-item label="" prop="DeviceChange_2">
              <textarea v-model="ruleForm.DeviceChange_2"  id="DeviceChange_2"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceChangeWhy_2">
              <textarea v-model="ruleForm.DeviceChangeWhy_2"  id="DeviceChangeWhy_2"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceModel_2">
              <textarea v-model="ruleForm.DeviceModel_2"  id="DeviceModel_2"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceNum_2">
              <textarea v-model="ruleForm.DeviceNum_2"  id="DeviceNum_2"></textarea>
             </el-form-item></td>
            <td>
              <el-form-item label="" prop="ChangeTime_2">
                <el-date-picker v-model="ruleForm.ChangeTime_2" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
              </el-form-item>
            </td>
            <td><el-form-item label="" prop="ChangePerSon_2">
              <textarea v-model="ruleForm.ChangePerSon_2"  id="ChangePerSon_2"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceMark_2">
              <textarea v-model="ruleForm.DeviceMark_2"  id="DeviceMark_2"></textarea>
             </el-form-item></td>
          </tr>
          <tr>
            <td>3</td>
            <td><el-form-item label="" prop="DeviceChange_3">
              <textarea v-model="ruleForm.DeviceChange_3"  id="DeviceChange_3"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceChangeWhy_3">
              <textarea v-model="ruleForm.DeviceChangeWhy_3"  id="DeviceChangeWhy_3"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceModel_3">
              <textarea v-model="ruleForm.DeviceModel_3"  id="DeviceModel_3"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceNum_3">
              <textarea v-model="ruleForm.DeviceNum_3"  id="DeviceNum_3"></textarea>
             </el-form-item></td>
            <td>
              <el-form-item label="" prop="ChangeTime_3">
                <el-date-picker v-model="ruleForm.ChangeTime_3" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
              </el-form-item>
            </td>
            <td><el-form-item label="" prop="ChangePerSon_3">
              <textarea v-model="ruleForm.ChangePerSon_3"  id="ChangePerSon_3"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceMark_3">
               <textarea v-model="ruleForm.DeviceMark_3"  id="DeviceMark_3"></textarea>
              </el-form-item></td>
          </tr>
          <tr>
            <td>4</td>
            <td><el-form-item label="" prop="DeviceChange_4">
              <textarea v-model="ruleForm.DeviceChange_4"  id="DeviceChange_4"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceChangeWhy_4">
              <textarea v-model="ruleForm.DeviceChangeWhy_4"  id="DeviceChangeWhy_4"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceModel_4">
              <textarea v-model="ruleForm.DeviceModel_4"  id="DeviceModel_4"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceNum_4">
              <textarea v-model="ruleForm.DeviceNum_4"  id="DeviceNum_4"></textarea>
             </el-form-item></td>
            <td>
             <el-form-item label="" prop="ChangeTime_4">
              <el-date-picker v-model="ruleForm.ChangeTime_4" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
             </el-form-item>
            </td>
            <td><el-form-item label="" prop="ChangePerSon_4">
              <textarea v-model="ruleForm.ChangePerSon_4"  id="ChangePerSon_4"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceMark_4">
              <textarea v-model="ruleForm.DeviceMark_4"  id="DeviceMark_4"></textarea>
             </el-form-item></td>
          </tr>
          <tr>
            <td>5</td>
            <td><el-form-item label="" prop="DeviceChange_5">
              <textarea v-model="ruleForm.DeviceChange_5"  id="DeviceChange_5"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceChangeWhy_5">
              <textarea v-model="ruleForm.DeviceChangeWhy_5"  id="DeviceChangeWhy_5"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceModel_5">
              <textarea v-model="ruleForm.DeviceModel_5"  id="DeviceModel_5"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceNum_5">
              <textarea v-model="ruleForm.DeviceNum_5"  id="DeviceNum_5"></textarea>
             </el-form-item></td>
            <td>
              <el-form-item label="" prop="ChangeTime_5">
                <el-date-picker v-model="ruleForm.ChangeTime_5" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
              </el-form-item>
            </td>
            <td><el-form-item label="" prop="ChangePerSon_5">
              <textarea v-model="ruleForm.ChangePerSon_5"  id="ChangePerSon_5"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceMark_5">
              <textarea v-model="ruleForm.DeviceMark_5"  id="DeviceMark_5"></textarea>
             </el-form-item></td>
          </tr>
          <tr>
            <td>6</td>
            <td><el-form-item label="" prop="DeviceChange_6">
              <textarea v-model="ruleForm.DeviceChange_6"  id="DeviceChange_6"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceChangeWhy_6">
              <textarea v-model="ruleForm.DeviceChangeWhy_6"  id="DeviceChangeWhy_6"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceModel_6">
              <textarea v-model="ruleForm.DeviceModel_6"  id="DeviceModel_6"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceNum_6">
              <textarea v-model="ruleForm.DeviceNum_6"  id="DeviceNum_6"></textarea>
             </el-form-item></td>
            <td>
              <el-form-item label="" prop="ChangeTime_6">
                <el-date-picker v-model="ruleForm.ChangeTime_6" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
              </el-form-item>
            </td>
            <td><el-form-item label="" prop="ChangePerSon_6">
              <textarea v-model="ruleForm.ChangePerSon_6"  id="ChangePerSon_6"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceMark_6">
              <textarea v-model="ruleForm.DeviceMark_6"  id="DeviceMark_6"></textarea>
             </el-form-item></td>
          </tr>
          <tr>
            <td>7</td>
            <td><el-form-item label="" prop="DeviceChange_7">
              <textarea v-model="ruleForm.DeviceChange_7"  id="DeviceChange_7"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceChangeWhy_7">
              <textarea v-model="ruleForm.DeviceChangeWhy_7"  id="DeviceChangeWhy_7"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceModel_7">
              <textarea v-model="ruleForm.DeviceModel_7"  id="DeviceModel_7"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceNum_7">
              <textarea v-model="ruleForm.DeviceNum_7"  id="DeviceNum_7"></textarea>
             </el-form-item></td>
            <td>
              <el-form-item label="" prop="ChangeTime_7">
                <el-date-picker v-model="ruleForm.ChangeTime_7" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
              </el-form-item>
            </td>
            <td><el-form-item label="" prop="ChangePerSon_7">
              <textarea v-model="ruleForm.ChangePerSon_7"  id="ChangePerSon_7"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceMark_7">
              <textarea v-model="ruleForm.DeviceMark_7"  id="DeviceMark_7"></textarea>
             </el-form-item></td>
          </tr>
          <tr>
            <td>8</td>
            <td><el-form-item label="" prop="DeviceChange_8">
              <textarea v-model="ruleForm.DeviceChange_8"  id="DeviceChange_8"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceChangeWhy_8">
              <textarea v-model="ruleForm.DeviceChangeWhy_8"  id="DeviceChangeWhy_8"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceModel_8">
              <textarea v-model="ruleForm.DeviceModel_8"  id="DeviceModel_8"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceNum_8">
              <textarea v-model="ruleForm.DeviceNum_8"  id="DeviceNum_8"></textarea>
             </el-form-item></td>
            <td>
              <el-form-item label="" prop="ChangeTime_8">
                <el-date-picker v-model="ruleForm.ChangeTime_8" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
              </el-form-item>
            </td>
            <td><el-form-item label="" prop="ChangePerSon_8">
              <textarea v-model="ruleForm.ChangePerSon_8"  id="ChangePerSon_8"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceMark_8">
              <textarea v-model="ruleForm.DeviceMark_8"  id="DeviceMark_8"></textarea>
             </el-form-item></td>
          </tr>
          <tr>
            <td>9</td>
            <td><el-form-item label="" prop="DeviceChange_9">
              <textarea v-model="ruleForm.DeviceChange_9"  id="DeviceChange_9"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceChangeWhy_9">
              <textarea v-model="ruleForm.DeviceChangeWhy_9"  id="DeviceChangeWhy_9"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceModel_9">
              <textarea v-model="ruleForm.DeviceModel_9"  id="DeviceModel_9"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceNum_9">
              <textarea v-model="ruleForm.DeviceNum_9"  id="DeviceNum_9"></textarea>
             </el-form-item></td>
            <td>
              <el-form-item label="" prop="ChangeTime_9">
                <el-date-picker v-model="ruleForm.ChangeTime_9" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
              </el-form-item>
            </td>
            <td><el-form-item label="" prop="ChangePerSon_9">
              <textarea v-model="ruleForm.ChangePerSon_9"  id="ChangePerSon_9"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceMark_9">
              <textarea v-model="ruleForm.DeviceMark_9"  id="DeviceMark_9"></textarea>
             </el-form-item></td>
          </tr>
          <tr>
            <td>10</td>
            <td><el-form-item label="" prop="DeviceChange_10">
              <textarea v-model="ruleForm.DeviceChange_10"  id="DeviceChange_10"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceChangeWhy_10">
              <textarea v-model="ruleForm.DeviceChangeWhy_10"  id="DeviceChangeWhy_10"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceModel_10">
              <textarea v-model="ruleForm.DeviceModel_10"  id="DeviceModel_10"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceNum_10">
              <textarea v-model="ruleForm.DeviceNum_10"  id="DeviceNum_10"></textarea>
             </el-form-item></td>
            <td>
              <el-form-item label="" prop="ChangeTime_10">
                <el-date-picker v-model="ruleForm.ChangeTime_10" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
              </el-form-item>
            </td>
            <td><el-form-item label="" prop="ChangePerSon_10">
              <textarea v-model="ruleForm.ChangePerSon_10"  id="ChangePerSon_10"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="DeviceMark_10">
              <textarea v-model="ruleForm.DeviceMark_10"  id="DeviceMark_10"></textarea>
             </el-form-item></td>
          </tr>
         <tr>
            <td>11</td>
            <td><el-form-item label="" prop="rc_71">
              <textarea v-model="ruleForm.rc_71"  id="DeviceChange_11"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="rc_72">
              <textarea v-model="ruleForm.rc_72"  id="DeviceChangeWhy_11"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="rc_73">
              <textarea v-model="ruleForm.rc_73"  id="DeviceModel_11"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="rc_74">
              <textarea v-model="ruleForm.rc_74"  id="DeviceNum_11"></textarea>
             </el-form-item></td>
            <td>
              <el-form-item label="" prop="rc_75">
                <el-date-picker v-model="ruleForm.rc_75" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
              </el-form-item>
            </td>
            <td><el-form-item label="" prop="rc_76">
              <textarea v-model="ruleForm.rc_76"  id="ChangePerSon_11"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="rc_77">
              <textarea v-model="ruleForm.rc_77"  id="DeviceMark_11"></textarea>
             </el-form-item></td>
          </tr>
          <tr>
            <td>12</td>
            <td><el-form-item label="" prop="rc_78">
              <textarea v-model="ruleForm.rc_78"  id="DeviceChange_12"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="rc_79">
              <textarea v-model="ruleForm.rc_79"  id="DeviceChangeWhy_12"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="rc_80">
              <textarea v-model="ruleForm.rc_80"  id="DeviceModel_12"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="rc_81">
              <textarea v-model="ruleForm.rc_81"  id="DeviceNum_12"></textarea>
             </el-form-item></td>
            <td>
              <el-form-item label="" prop="rc_82">
                <el-date-picker v-model="ruleForm.rc_82" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
              </el-form-item>
            </td>
            <td><el-form-item label="" prop="rc_83">
              <textarea v-model="ruleForm.rc_83"  id="ChangePerSon_12"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="rc_84">
              <textarea v-model="ruleForm.rc_84"  id="DeviceMark_12"></textarea>
             </el-form-item></td>
          </tr>
          <tr>
            <td>13</td>
            <td><el-form-item label="" prop="rc_85">
              <textarea v-model="ruleForm.rc_85"  id="DeviceChange_13"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="rc_86">
              <textarea v-model="ruleForm.rc_86"  id="DeviceChangeWhy_13"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="rc_87">
              <textarea v-model="ruleForm.rc_87"  id="DeviceModel_13"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="rc_88">
              <textarea v-model="ruleForm.rc_88"  id="DeviceNum_13"> </textarea>
             </el-form-item></td>
            <td>
              <el-form-item label="" prop="rc_89">
                <el-date-picker v-model="ruleForm.rc_89" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
              </el-form-item>
            </td>
            <td><el-form-item label="" prop="rc_90">
              <textarea v-model="ruleForm.rc_90"  id="ChangePerSon_13"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="rc_91">
              <textarea v-model="ruleForm.rc_91"  id="DeviceMark_13"></textarea>
             </el-form-item></td>
          </tr>
          <tr>
            <td>14</td>
            <td><el-form-item label="" prop="rc_92">
              <textarea v-model="ruleForm.rc_92"  id="DeviceChange_14"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="rc_93">
              <textarea v-model="ruleForm.rc_93"  id="DeviceChangeWhy_14"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="rc_94">
              <textarea v-model="ruleForm.rc_94"  id="DeviceModel_14"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="rc_95">
              <textarea v-model="ruleForm.rc_95"  id="DeviceNum_14"></textarea>
             </el-form-item></td>
            <td>
              <el-form-item label="" prop="rc_95">
                <el-date-picker v-model="ruleForm.rc_95" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
              </el-form-item>
            </td>
            <td><el-form-item label="" prop="rc_97">
              <textarea v-model="ruleForm.rc_97"  id="ChangePerSon_14"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="rc_98">
              <textarea v-model="ruleForm.rc_98"  id="DeviceMark_14"></textarea>
             </el-form-item></td>
          </tr>
          <tr>
            <td>15</td>
            <td><el-form-item label="" prop="rc_99">
              <textarea v-model="ruleForm.rc_99"  id="DeviceChange_15"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="rc_100">
              <textarea v-model="ruleForm.rc_100"  id="DeviceChangeWhy_15"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="rc_101">
              <textarea v-model="ruleForm.rc_101"  id="DeviceModel_15"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="rc_102">
              <textarea v-model="ruleForm.rc_102"  id="DeviceNum_15"></textarea>
             </el-form-item></td>
            <td>
              <el-form-item label="" prop="rc_103">
                <el-date-picker v-model="ruleForm.rc_103" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
              </el-form-item>
            </td>
            <td><el-form-item label="" prop="rc_104">
              <textarea v-model="ruleForm.rc_104"  id="ChangePerSon_15"></textarea>
             </el-form-item></td>
            <td><el-form-item label="" prop="rc_105">
              <textarea v-model="ruleForm.rc_105"  id="DeviceMark_15"></textarea>
             </el-form-item></td>
          </tr>
        </tbody>
      </table>
    </el-form>
  </div>
</template>
<script>
export default {
    props: {
      formData: Object,
      btnType: String,
    },
    components: {},
    data() {
      return {
          dataContent: "",
          ruleForm: {
                "InspectionSTime": "",
                "InspectionETime": "",
                "yj_1": "",
                "yj_2": "",

                "DeviceChange_1": "",
                "DeviceChangeWhy_1": "",
                "DeviceModel_1": "",
                "DeviceNum_1": "",
                "ChangeTime_1": "",
                "ChangePerSon_1": "",
                "DeviceMark_1": "",

                "DeviceChange_2": "",
                "DeviceChangeWhy_2": "",
                "DeviceModel_2": "",
                "DeviceNum_2": "",
                "ChangeTime_2": "",
                "ChangePerSon_2": "",
                "DeviceMark_2": "",

                "DeviceChange_3": "",
                "DeviceChangeWhy_3": "",
                "DeviceModel_3": "",
                "DeviceNum_3": "",
                "ChangeTime_3": "",
                "ChangePerSon_3": "",
                "DeviceMark_3": "",

               "DeviceChange_4": "",
                "DeviceChangeWhy_4": "",
                "DeviceModel_4": "",
                "DeviceNum_4": "",
                "ChangeTime_4": "",
                "ChangePerSon_4": "",
                "DeviceMark_4": "",

                "DeviceChange_5": "",
                "DeviceChangeWhy_5": "",
                "DeviceModel_5": "",
                "DeviceNum_5": "",
                "ChangeTime_5": "",
                "ChangePerSon_5": "",
                "DeviceMark_5": "",


               "DeviceChange_6": "",
                "DeviceChangeWhy_6": "",
                "DeviceModel_6": "",
                "DeviceNum_6": "",
                "ChangeTime_6": "",
                "ChangePerSon_6": "",
                "DeviceMark_6": "",

                 "DeviceChange_7": "",
                "DeviceChangeWhy_7": "",
                "DeviceModel_7": "",
                "DeviceNum_7": "",
                "ChangeTime_7": "",
                "ChangePerSon_7": "",
                "DeviceMark_7": "",


                 "DeviceChange_8": "",
                "DeviceChangeWhy_8": "",
                "DeviceModel_8": "",
                "DeviceNum_8": "",
                "ChangeTime_8": "",
                "ChangePerSon_8": "",
                "DeviceMark_8": "",

                  "DeviceChange_9": "",
                "DeviceChangeWhy_9": "",
                "DeviceModel_9": "",
                "DeviceNum_9": "",
                "ChangeTime_9": "",
                "ChangePerSon_9": "",
                "DeviceMark_9": "",

                 "DeviceChange_10": "",
                "DeviceChangeWhy_10": "",
                "DeviceModel_10": "",
                "DeviceNum_10": "",
                "ChangeTime_10": "",
                "ChangePerSon_10": "",
                "DeviceMark_10": "",

                "rc_71": "",
                "rc_72": "",
                "rc_73": "",
                "rc_74": "",
                "rc_75": "",
                "rc_76": "",
                "rc_77": "",
                "rc_78": "",
                "rc_79": "",
                "rc_80": "",
                "rc_81": "",
                "rc_82": "",
                "rc_83": "",
                "rc_84": "",
                "rc_85": "",
                "rc_86": "",
                "rc_87": "",
                "rc_88": "",
                "rc_89": "",
                "rc_90": "",
                "rc_91": "",
                "rc_92": "",
                "rc_93": "",
                "rc_94": "",
                "rc_95": "",
                "rc_96": "",
                "rc_97": "",
                "rc_98": "",
                "rc_99": "",
                "rc_100": "",
                "rc_101": "",
                "rc_102": "",
                "rc_103": "",
                "rc_104": "",
                "rc_105": "",
          },
          rules: {
            yj_1:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            yj_2:[{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceChange_1:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceChangeWhy_1:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceModel_1:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceNum_1:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            ChangeTime_1:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            ChangePerSon_1:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceMark_1:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceChange_2:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceChangeWhy_2:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceModel_2:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceNum_2:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            ChangeTime_2:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            ChangePerSon_2:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceMark_2:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceChange_3:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceChangeWhy_3:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceModel_3:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceNum_3:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            ChangeTime_3:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            ChangePerSon_3:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceMark_3:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceChange_4:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceChangeWhy_4:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceModel_4:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceNum_4:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            ChangeTime_4:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            ChangePerSon_4:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceMark_4:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceChange_5:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceChangeWhy_5:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceModel_5:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceNum_5:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            ChangeTime_5:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            ChangePerSon_5:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceMark_5:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceChange_6:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceChangeWhy_6:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceModel_6:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceNum_6:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            ChangeTime_6:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            ChangePerSon_6:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceMark_6:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceChange_7:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceChangeWhy_7:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceModel_7:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceNum_7:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            ChangeTime_7:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            ChangePerSon_7:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceMark_7:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceChange_8:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceChangeWhy_8:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceModel_8:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceNum_8:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            ChangeTime_8:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            ChangePerSon_8:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceMark_8:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceChange_9:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceChangeWhy_9:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceModel_9:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceNum_9:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            ChangeTime_9:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            ChangePerSon_9:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceMark_9:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceChange_10:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceChangeWhy_10:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceModel_10:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceNum_10:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            ChangeTime_10:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            ChangePerSon_10:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            DeviceMark_10:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_71:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_72:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_73:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_74:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_75:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_76:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_77:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_78:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_79:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_80:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_81:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_82:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_83:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_84:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_85:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_86:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_87:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_88:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_89:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_90:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_91:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_92:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_93:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_94:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_95:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_96:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_97:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_98:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_99:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_100:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_101:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_102:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_103:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_104:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            rc_105:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
          },
      };
  },
    // computed: {
    //     formSubmitData: function () {
    //         return this.$emit("formSubmit",this.Qs.stringify(this.ruleForm));
    //     }
    // },
    watch: {
        btnType(val, oldVal) {
            var count=0;
            var voidArrMSG=[];
            //每行需要非空验证，验证规则：每行只要有一个input有填写内容，则该行所有项必填，其他行不受限制
            $("#ASEmergencytb tbody tr").each(function (index, item) {
               //遍历每一行的所有单元格
                count=0;
                if(index>=36 && index<51){//不知道为什么 有66个tr  第1-22个tr和23-44和tr和第45-66个tr内容一摸一样
                    $(item).find("td").each(function (i, itm) {
                       //遍历每一行的所有单元格
                        if(i>0){
                          if(i==5){
                            if($(itm).find("input ").val()=="" || $(itm).find("input").val()==undefined){
                              count++;
                            }
                          }else{
                            if($(itm).find("textarea ").val()=="" || $(itm).find("textarea").val()==undefined){
                              count++;
                            }
                          }
                          
                        }
                        
                    });  
                    if(count>0 && count<7){//要么全部填写，要么全部没填写，否则验证不通过 0-9之间的则判定为填写不完整
                        voidArrMSG.push("第"+(index-35)+"行存在未填写完的项，请先填写完后成在操作！");
                    }      
                }
            });
            //console.log(voidArrMSG); 
            if(voidArrMSG.length<=0){
                if (val == "保存") {
                    this.$emit("formSava", JSON.stringify(this.ruleForm));
                }
                if (val == "提交") {
                    this.$emit("formSubmit", JSON.stringify(this.ruleForm));
                }
            }else{
                this.$emit("reSet", "");
                var msg="";
                for(var i=0;i<voidArrMSG.length;i++){
                    msg+=voidArrMSG[i];
                }
                this.$message({
                    message: msg,
                    type: "error"  //warning,success,info,error
                }); 
                
            }
        },
      formData(val, oldVal) {
          if (val.content != null) {
              this.ruleForm = JSON.parse(val.content);
             
          }
      },
  },
  mounted() {
     this.getNowTime();
  },
    methods: {
          //初始化时间
       getNowTime() {
         var d = new Date();
         var dyear = d.getFullYear(); //得到年份
         var dmonth = d.getMonth(); //得到月份
         dmonth = dmonth + 1;
         dmonth = dmonth.toString().padStart(2, "0");
         var dTime= d.getTime();
         var dhour = d.getHours();
         dhour = dhour.toString().padStart(2, "0");   
         var dminutes = d.getMinutes();
         dminutes = dminutes.toString().padStart(2, "0");   
         var dseconds=d.getSeconds();
         dseconds = dseconds.toString().padStart(2, "0"); 
         var ddate = d.getDate(); //得到日期       
         ddate = ddate.toString().padStart(2, "0");     
         var dbeforedefaultDate = `${dyear}-${dmonth}-${ddate} ${dhour}:${dminutes}:${dseconds}`;

         //1个小时后
         var myDate =new Date();
         var myDateyear = myDate.getFullYear(); //得到年份
         var myDatemonth = myDate.getMonth(); //得到月份
         myDatemonth = myDatemonth + 1;
         myDatemonth = myDatemonth.toString().padStart(2, "0");
         var myDateTime= myDate.getTime();
         var hour = myDate.getHours()+1;
         hour = hour.toString().padStart(2, "0");   
         var minutes = myDate.getMinutes();
         minutes = minutes.toString().padStart(2, "0");   
         var seconds=myDate.getSeconds();
         seconds = seconds.toString().padStart(2, "0"); 
         var myDatedate = myDate.getDate(); //得到日期       
         myDatedate = myDatedate.toString().padStart(2, "0");     
         var afteOneHourDate = `${myDateyear}-${myDatemonth}-${myDatedate} ${hour}:${minutes}:${seconds}`;
         //运维任务统计
         this.$set(this.ruleForm, "yj_1", dbeforedefaultDate);     
         this.$set(this.ruleForm, "yj_2", afteOneHourDate);
        },
    },
    };
</script>
<style scoped>
#main,
table {
  width: 95%;
  margin: 10px auto;
  border-left: 1px solid #aaaaaa;
  border-bottom: 1px solid #aaaaaa;
}

#main {
  border: none;
}

td {
  border-top: 1px solid #aaaaaa;
  border-right: 1px solid #aaaaaa;
}

#tb1 tr td {
  padding: 5px;
  width: 24%;
  text-align: center;
}

#tb2 tr td {
  padding: 5px;
  width: 16%;
  text-align: center;
}

tr td input {
  width: 96%;
  margin: 2px;
}

.height30 {
  height: 30px !important;
}
</style>