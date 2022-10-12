<template>
  <div>
    <el-form
      id="ASEmergency"
      :model="ruleForm"
      :rules="rules"
      ref="Form"
      :label-position="top"
    >
      <div style="float: left; margin: 5px 40px;">
        <el-row>
          <el-col :span="11">
            <el-form-item label="巡检时间：" prop="yj_1">
              <el-date-picker
                v-model="ruleForm.yj_1"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择时间"
                :clearable="false"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="2"> &nbsp; &nbsp; &nbsp; </el-col>
          <el-col :span="11">
            <!-- <el-form-item label="巡检结束时间：" prop="yj_2">
              <el-date-picker
                v-model="ruleForm.yj_2"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择时间"
                :clearable="false"
              ></el-date-picker>
            </el-form-item> -->
          </el-col>
        </el-row>
      </div>

      <table id="ASEmergencytb">
        <tbody>
          <tr>
            <td>序号</td>
            <td>仪器设备名称/编号</td>
            <td>耗品备件名称</td>
            <td>数量</td>
            <td>更换时间</td>
            <td>更换人</td>
          </tr>
          <tr></tr>
          <tr>
            <td>1</td>
            <td>
              <el-form-item label="" prop="DeviceNum_1">
                <textarea
                  v-model="ruleForm.DeviceNum_1"
                  id="DeviceNum_1"
                ></textarea>
              </el-form-item>
            </td>
            <td><el-form-item label="" prop="DeviceNames_1">
                <textarea
                v-model="ruleForm.DeviceNames_1"
                id="DeviceNames_1"
              ></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="Nums_1">
                <textarea v-model="ruleForm.Nums_1" id="Nums_1"></textarea>
              </el-form-item></td>
            <td><el-form-item label="" prop="ChangeTime_1">
               <el-date-picker
                v-model="ruleForm.ChangeTime_1"
                type="date"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择时间"
              ></el-date-picker>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="ChangePerSon_1">
                <textarea
                v-model="ruleForm.ChangePerSon_1"
                id="ChangePerSon_1"
              ></textarea>
              </el-form-item>
              
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td><el-form-item label="" prop="DeviceNum_2">
                <textarea
                v-model="ruleForm.DeviceNum_2"
                id="DeviceNum_2"
              ></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="DeviceNames_2">
                <textarea
                v-model="ruleForm.DeviceNames_2"
                id="DeviceNames_2"
              ></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="Nums_2">
                <textarea v-model="ruleForm.Nums_2" id="Nums_2"></textarea>
              </el-form-item></td>
            <td><el-form-item label="" prop="ChangeTime_2">
               <el-date-picker
                v-model="ruleForm.ChangeTime_2"
                type="date"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择时间"
              ></el-date-picker>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="ChangePerSon_2">
                <textarea
                v-model="ruleForm.ChangePerSon_2"
                id="ChangePerSon_2"
              ></textarea>
              </el-form-item>
              
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td><el-form-item label="" prop="DeviceNum_3">
               <textarea
                v-model="ruleForm.DeviceNum_3"
                id="DeviceNum_3"
              ></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="DeviceNames_3">
               <textarea
                v-model="ruleForm.DeviceNames_3"
                id="DeviceNames_3"
              ></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="Nums_3">
                <textarea v-model="ruleForm.Nums_3" id="Nums_3"></textarea>
              </el-form-item></td>
            <td><el-form-item label="" prop="ChangeTime_3">
                 <el-date-picker
                v-model="ruleForm.ChangeTime_3"
                type="date"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择时间"
              ></el-date-picker>
              </el-form-item>
             
            </td>
            <td><el-form-item label="" prop="ChangePerSon_3">
                <textarea
                v-model="ruleForm.ChangePerSon_3"
                id="ChangePerSon_3"
              ></textarea>
              </el-form-item>
              
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td><el-form-item label="" prop="DeviceNum_4">
                <textarea
                v-model="ruleForm.DeviceNum_4"
                id="DeviceNum_4"
              ></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="DeviceNames_4">
                <textarea
                v-model="ruleForm.DeviceNames_4"
                id="DeviceNames_4"
              ></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="Nums_4">
               <textarea v-model="ruleForm.Nums_4" id="Nums_4"></textarea>
              </el-form-item></td>
            <td><el-form-item label="" prop="ChangeTime_4">
                <el-date-picker
                v-model="ruleForm.ChangeTime_4"
                type="date"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择时间"
              ></el-date-picker>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="ChangePerSon_4">
                <textarea
                v-model="ruleForm.ChangePerSon_4"
                id="ChangePerSon_4"
              ></textarea>
              </el-form-item>
              
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td><el-form-item label="" prop="DeviceNum_5">
                <textarea
                v-model="ruleForm.DeviceNum_5"
                id="DeviceNum_5"
              ></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="DeviceNames_5">
                <textarea
                v-model="ruleForm.DeviceNames_5"
                id="DeviceNames_5"
              ></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="Nums_5">
                <textarea v-model="ruleForm.Nums_5" id="Nums_5"></textarea>
              </el-form-item></td>
            <td><el-form-item label="" prop="ChangeTime_5">
                <el-date-picker
                v-model="ruleForm.ChangeTime_5"
                type="date"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择时间"
              ></el-date-picker>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="ChangePerSon_5">
                <textarea
                v-model="ruleForm.ChangePerSon_5"
                id="ChangePerSon_5"
              ></textarea>
              </el-form-item>
              
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td><el-form-item label="" prop="DeviceNum_6">
                <textarea
                v-model="ruleForm.DeviceNum_6"
                id="DeviceNum_6"
              ></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="DeviceNames_6">
                <textarea
                v-model="ruleForm.DeviceNames_6"
                id="DeviceNames_6"
              ></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="Nums_6">
                <textarea v-model="ruleForm.Nums_6" id="Nums_6"></textarea>
              </el-form-item></td>
            <td><el-form-item label="" prop="ChangeTime_6">
                <el-date-picker
                v-model="ruleForm.ChangeTime_6"
                type="date"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择时间"
              ></el-date-picker>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="ChangePerSon_6">
                <textarea
                v-model="ruleForm.ChangePerSon_6"
                id="ChangePerSon_6"
              ></textarea>
              </el-form-item>
              
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td><el-form-item label="" prop="DeviceNum_7">
                <textarea
                v-model="ruleForm.DeviceNum_7"
                id="DeviceNum_7"
              ></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="DeviceNames_7">
                <textarea
                v-model="ruleForm.DeviceNames_7"
                id="DeviceNames_7"
              ></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="Nums_7">
                <textarea v-model="ruleForm.Nums_7" id="Nums_7"></textarea>
              </el-form-item></td>
            <td><el-form-item label="" prop="ChangeTime_7">
                <el-date-picker
                v-model="ruleForm.ChangeTime_7"
                type="date"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择时间"
              ></el-date-picker>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="ChangePerSon_7">
                <textarea
                v-model="ruleForm.ChangePerSon_7"
                id="ChangePerSon_7"
              ></textarea>
              </el-form-item>
              
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td><el-form-item label="" prop="DeviceNum_8">
               <textarea
                v-model="ruleForm.DeviceNum_8"
                id="DeviceNum_8"
              ></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="DeviceNames_8">
               <textarea
                v-model="ruleForm.DeviceNames_8"
                id="DeviceNames_8"
              ></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="Nums_8">
                <textarea v-model="ruleForm.Nums_8" id="Nums_8"></textarea>
              </el-form-item></td>
            <td><el-form-item label="" prop="ChangeTime_8">
                <el-date-picker
                v-model="ruleForm.ChangeTime_8"
                type="date"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择时间"
              ></el-date-picker>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="ChangePerSon_8">
                 <textarea
                v-model="ruleForm.ChangePerSon_8"
                id="ChangePerSon_8"
              ></textarea>
              </el-form-item>
             
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td><el-form-item label="" prop="DeviceNum_9">
               <textarea
                v-model="ruleForm.DeviceNum_9"
                id="DeviceNum_9"
              ></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="DeviceNames_9">
               <textarea
                v-model="ruleForm.DeviceNames_9"
                id="DeviceNames_9"
              ></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="Nums_9">
                <textarea v-model="ruleForm.Nums_9" id="Nums_9"></textarea>
              </el-form-item></td>
            <td><el-form-item label="" prop="ChangeTime_9">
                <el-date-picker
                v-model="ruleForm.ChangeTime_9"
                type="date"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择时间"
              ></el-date-picker>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="ChangePerSon_9">
                <textarea
                v-model="ruleForm.ChangePerSon_9"
                id="ChangePerSon_9"
              ></textarea>
              </el-form-item>
              
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td><el-form-item label="" prop="DeviceNum_10">
                <textarea
                v-model="ruleForm.DeviceNum_10"
                id="DeviceNum_10"
              ></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="DeviceNames_10">
                <textarea
                v-model="ruleForm.DeviceNames_10"
                id="DeviceNames_10"
              ></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="Nums_10">
                <textarea v-model="ruleForm.Nums_10" id="Nums_10"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="ChangeTime_10">
                <el-date-picker
                v-model="ruleForm.ChangeTime_10"
                type="date"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择时间"
              ></el-date-picker>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="ChangePerSon_10">
                <textarea
                v-model="ruleForm.ChangePerSon_10"
                id="ChangePerSon_10"
              ></textarea>
              </el-form-item>
              
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td><el-form-item label="" prop="DeviceNum_11">
                <textarea
                v-model="ruleForm.DeviceNum_11"
                id="DeviceNum_11"
              ></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="DeviceNames_11">
                <textarea
                v-model="ruleForm.DeviceNames_11"
                id="DeviceNames_11"
              ></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="Nums_11">
                <textarea v-model="ruleForm.Nums_11" id="Nums_11"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="ChangeTime_11">
                <el-date-picker
                v-model="ruleForm.ChangeTime_11"
                type="date"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择时间"
              ></el-date-picker>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="ChangePerSon_11">
                <textarea
                v-model="ruleForm.ChangePerSon_11"
                id="ChangePerSon_11"
              ></textarea>
              </el-form-item>
              
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td><el-form-item label="" prop="rc_12">
                <textarea v-model="ruleForm.rc_12" id="DeviceNum_12"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_38">
                <textarea v-model="ruleForm.rc_38" id="DeviceNames_12"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_59">
                <textarea v-model="ruleForm.rc_59" id="Nums_12"></textarea>
              </el-form-item></td>
            <td><el-form-item label="" prop="rc_80">
                <el-date-picker
                v-model="ruleForm.rc_80"
                type="date"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择时间"
              ></el-date-picker>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_100">
                <textarea
                v-model="ruleForm.rc_100"
                id="ChangePerSon_12"
              ></textarea>
              </el-form-item>
              
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td><el-form-item label="" prop="rc_13">
                <textarea v-model="ruleForm.rc_13" id="DeviceNum_13"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_39">
                <textarea v-model="ruleForm.rc_39" id="DeviceNames_13"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_60">
                <textarea v-model="ruleForm.rc_60" id="Nums_13"></textarea>
              </el-form-item></td>
            <td><el-form-item label="" prop="rc_81">
                <el-date-picker
                v-model="ruleForm.rc_81"
                type="date"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择时间"
              ></el-date-picker>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_101">
                <textarea
                v-model="ruleForm.rc_101"
                id="ChangePerSon_13"
              ></textarea>
              </el-form-item>
              
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td><el-form-item label="" prop="rc_14">
                <textarea v-model="ruleForm.rc_14" id="DeviceNum_14"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_40">
                <textarea v-model="ruleForm.rc_40" id="DeviceNames_14"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_61">
                <textarea v-model="ruleForm.rc_61" id="Nums_14"></textarea>
              </el-form-item></td>
            <td><el-form-item label="" prop="rc_82">
                <el-date-picker
                v-model="ruleForm.rc_82"
                type="date"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择时间"
              ></el-date-picker>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_102">
                <textarea
                v-model="ruleForm.rc_102"
                id="ChangePerSon_14"
              ></textarea>
              </el-form-item>
              
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td><el-form-item label="" prop="rc_15">
                <textarea v-model="ruleForm.rc_15" id="DeviceNum_15"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_16">
                <textarea v-model="ruleForm.rc_16" id="DeviceNames_15"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_17">
                <textarea v-model="ruleForm.rc_17" id="Nums_15"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_18">
                <el-date-picker
                v-model="ruleForm.rc_18"
                type="date"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择时间"
              ></el-date-picker>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_19">
                <textarea
                v-model="ruleForm.rc_19"
                id="ChangePerSon_15"
              ></textarea>
              </el-form-item>
              
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td><el-form-item label="" prop="rc_20">
                <textarea v-model="ruleForm.rc_20" id="DeviceNum_16"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_41">
                <textarea v-model="ruleForm.rc_41" id="DeviceNames_16"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_62">
                <textarea v-model="ruleForm.rc_62" id="Nums_16"></textarea>
              </el-form-item></td>
            <td><el-form-item label="" prop="rc_83">
                <el-date-picker
                v-model="ruleForm.rc_83"
                type="date"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择时间"
              ></el-date-picker>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_103">
                <textarea
                v-model="ruleForm.rc_103"
                id="ChangePerSon_16"
              ></textarea>
              </el-form-item>
              
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td><el-form-item label="" prop="rc_21">
                <textarea v-model="ruleForm.rc_21" id="DeviceNum_17"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_21">
                <textarea v-model="ruleForm.rc_21" id="DeviceNames_17"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_63">
                <textarea v-model="ruleForm.rc_63" id="Nums_17"></textarea>
              </el-form-item></td>
            <td><el-form-item label="" prop="rc_84">
                <el-date-picker
                v-model="ruleForm.rc_84"
                type="date"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择时间"
              ></el-date-picker>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_104">
                <textarea
                v-model="ruleForm.rc_104"
                id="ChangePerSon_17"
              ></textarea>
              </el-form-item>
              
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td><el-form-item label="" prop="rc_22">
                <textarea v-model="ruleForm.rc_22" id="DeviceNum_18"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_43">
                <textarea v-model="ruleForm.rc_43" id="DeviceNames_18"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_64">
                <textarea v-model="ruleForm.rc_64" id="Nums_18"></textarea>
              </el-form-item></td>
            <td><el-form-item label="" prop="rc_85">
                <el-date-picker
                v-model="ruleForm.rc_85"
                type="date"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择时间"
              ></el-date-picker>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_105">
                <textarea
                v-model="ruleForm.rc_105"
                id="ChangePerSon_18"
              ></textarea>
              </el-form-item>
              
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td><el-form-item label="" prop="rc_23">
               <textarea v-model="ruleForm.rc_23" id="DeviceNum_19"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_44">
               <textarea v-model="ruleForm.rc_44" id="DeviceNames_19"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_65">
                <textarea v-model="ruleForm.rc_65" id="Nums_19"></textarea>
              </el-form-item></td>
            <td><el-form-item label="" prop="rc_86">
                <el-date-picker
                v-model="ruleForm.rc_86"
                type="date"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择时间"
              ></el-date-picker>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_106">
                <textarea
                v-model="ruleForm.rc_106"
                id="ChangePerSon_19"
              ></textarea>
              </el-form-item>
              
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td><el-form-item label="" prop="rc_24">
                <textarea v-model="ruleForm.rc_24" id="DeviceNum_20"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_45">
               <textarea v-model="ruleForm.rc_45" id="DeviceNames_20"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_66">
                <textarea v-model="ruleForm.rc_66" id="Nums_20"></textarea>
              </el-form-item></td>
            <td><el-form-item label="" prop="rc_87">
                <el-date-picker
                v-model="ruleForm.rc_87"
                type="date"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择时间"
              ></el-date-picker>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_107">
               <textarea
                v-model="ruleForm.rc_107"
                id="ChangePerSon_20"
              ></textarea>
              </el-form-item>
              
            </td>
          </tr>
          <tr>
            <td>21</td>
            <td><el-form-item label="" prop="rc_25">
                <textarea v-model="ruleForm.rc_25" id="DeviceNum_21"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_46">
               <textarea v-model="ruleForm.rc_46" id="DeviceNames_21"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_67">
                <textarea v-model="ruleForm.rc_67" id="Nums_21"></textarea>
              </el-form-item></td>
            <td><el-form-item label="" prop="rc_88">
                <el-date-picker
                v-model="ruleForm.rc_88"
                type="date"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择时间"
              ></el-date-picker>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_108">
                 <textarea
                v-model="ruleForm.rc_108"
                id="ChangePerSon_21"
              ></textarea>
              </el-form-item>
             
            </td>
          </tr>
          <tr>
            <td>22</td>
            <td><el-form-item label="" prop="rc_26">
                <textarea v-model="ruleForm.rc_26" id="DeviceNum_22"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_47">
                <textarea v-model="ruleForm.rc_47" id="DeviceNames_22"></textarea>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_68">
               <textarea v-model="ruleForm.rc_68" id="Nums_22"></textarea>
              </el-form-item></td>
            <td><el-form-item label="" prop="rc_89">
               <el-date-picker
                v-model="ruleForm.rc_89"
                type="date"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择时间"
              ></el-date-picker>
              </el-form-item>
              
            </td>
            <td><el-form-item label="" prop="rc_109">
                <textarea
                v-model="ruleForm.rc_109"
                id="ChangePerSon_22"
              ></textarea>
              </el-form-item>
              
            </td>
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
        DeviceNum_1: "",
        DeviceNum_2: "",
        DeviceNum_3: "",
        DeviceNum_4: "",
        DeviceNum_5: "",
        DeviceNum_6: "",
        DeviceNum_7: "",
        DeviceNum_8: "",
        DeviceNum_9: "",
        DeviceNum_10: "",
        DeviceNum_11: "",
        rc_12: "",
        rc_13: "",
        rc_14: "",
        rc_15: "",
        rc_16: "",
        rc_17: "",
        rc_18: "",
        rc_19: "",
        rc_20: "",
        rc_21: "",
        rc_22: "",
        rc_23: "",
        rc_24: "",
        rc_25: "",
        rc_26: "",

        DeviceNames_1: "",
        DeviceNames_2: "",
        DeviceNames_3: "",
        DeviceNames_4: "",
        DeviceNames_5: "",
        DeviceNames_6: "",
        DeviceNames_7: "",
        DeviceNames_8: "",
        DeviceNames_9: "",
        DeviceNames_10: "",
        DeviceNames_11: "",
        rc_38: "",
        rc_39: "",
        rc_40: "",
        rc_41: "",
        rc_42: "",
        rc_43: "",
        rc_44: "",
        rc_45: "",
        rc_46: "",
        rc_47: "",

        Nums_1: "",
        Nums_2: "",
        Nums_3: "",
        Nums_4: "",
        Nums_5: "",
        Nums_6: "",
        Nums_7: "",
        Nums_8: "",
        Nums_9: "",
        Nums_10: "",
        Nums_11: "",
        rc_59: "",
        rc_60: "",
        rc_61: "",
        rc_62: "",
        rc_63: "",
        rc_64: "",
        rc_65: "",
        rc_66: "",
        rc_67: "",
        rc_68: "",

        ChangeTime_1: "",
        ChangeTime_2: "",
        ChangeTime_3: "",
        ChangeTime_4: "",
        ChangeTime_5: "",
        ChangeTime_6: "",
        ChangeTime_7: "",
        ChangeTime_8: "",
        ChangeTime_9: "",
        ChangeTime_10: "",
        ChangeTime_11: "",
        rc_80: "",
        rc_81: "",
        rc_82: "",
        rc_83: "",
        rc_84: "",
        rc_85: "",
        rc_86: "",
        rc_87: "",
        rc_88: "",
        rc_89: "",
        
        ChangePerSon_1: "",
        ChangePerSon_2: "",
        ChangePerSon_3: "",
        ChangePerSon_4: "",
        ChangePerSon_5: "",
        ChangePerSon_6: "",
        ChangePerSon_7: "",
        ChangePerSon_8: "",
        ChangePerSon_9: "",
        ChangePerSon_10: "",
        ChangePerSon_11: "",
        rc_100:"",
        rc_101: "",
        rc_102: "",
        rc_103: "",
        rc_104: "",
        rc_105: "",
        rc_106: "",
        rc_107: "",
        rc_108: "",
        rc_109: "",
        InspectionSTime: "",
        InspectionETime: "",
        yj_1: "",
        yj_2: "",
      },
      rules: {
        yj_1: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        yj_2: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        DeviceNum_1: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        DeviceNum_2: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        DeviceNum_3: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        DeviceNum_4: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        DeviceNum_5: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        DeviceNum_6: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        DeviceNum_7: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        DeviceNum_8: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        DeviceNum_9: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        DeviceNum_10: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        DeviceNum_11: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_12: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_13: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_14: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_15: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_16: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_17: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_18: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_19: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_20: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_21: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_22: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_23: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_24: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_25: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_26: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        DeviceNames_1: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        DeviceNames_2: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        DeviceNames_3: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        DeviceNames_4: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        DeviceNames_5: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        DeviceNames_6: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        DeviceNames_7: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        DeviceNames_8: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        DeviceNames_9: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        DeviceNames_10: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        DeviceNames_11: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_38: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_39: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_40: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_41: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_42: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_43: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_44: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_45: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_46: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_47: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        Nums_1: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        Nums_2: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        Nums_3: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        Nums_4: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        Nums_5: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        Nums_6: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        Nums_7: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        Nums_8: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        Nums_9: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        Nums_10: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        Nums_11:[
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_59: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_60: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_61: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_62: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_63: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_64: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_65: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_66: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_67: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_68: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        ChangeTime_1: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        ChangeTime_2: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        ChangeTime_3: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        ChangeTime_4: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        ChangeTime_5: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        ChangeTime_6: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        ChangeTime_7: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        ChangeTime_8: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        ChangeTime_9: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        ChangeTime_10: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        ChangeTime_11: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_80: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_81: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_82: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_83: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_84: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_85: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_86: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_87: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_88: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_89: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        ChangePerSon_1: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        ChangePerSon_2: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        ChangePerSon_3: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        ChangePerSon_4: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        ChangePerSon_5: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        ChangePerSon_6: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        ChangePerSon_7: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        ChangePerSon_8: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        ChangePerSon_9: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        ChangePerSon_10: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        ChangePerSon_11: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_100:[
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_101: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_102: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_103: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_104: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_105: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_106: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_107: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_108: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
        rc_109: [
          { required: false, message: "必填项，没有的填写“/”", trigger: "blur" },
        ],
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
            debugger
            //每行需要非空验证，验证规则：每行只要有一个input有填写内容，则该行所有项必填，其他行不受限制
            $("#ASEmergencytb tbody tr").each(function (index, item) {
               //遍历每一行的所有单元格
                count=0;
                if(index>=50 && index<72){//不知道为什么 有66个tr  第1-22个tr和23-44和tr和第45-66个tr内容一摸一样
                    $(item).find("td").each(function (i, itm) {
                       //遍历每一行的所有单元格
                        if(i>0){
                          debugger
                          if(i==4){
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
                    if(count>0 && count<5){//要么全部填写，要么全部没填写，否则验证不通过 0-9之间的则判定为填写不完整
                        voidArrMSG.push("第"+(index-49)+"行存在未填写完的项，请先填写完后成在操作！");
                    }      
                }
            });
            console.log(voidArrMSG); 
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
    //this.getNowTime();
  },
  methods: {
    //初始化时间
    getNowTime() {
      var d = new Date();
      var dyear = d.getFullYear(); //得到年份
      var dmonth = d.getMonth(); //得到月份
      dmonth = dmonth + 1;
      dmonth = dmonth.toString().padStart(2, "0");
      var dTime = d.getTime();
      var dhour = d.getHours();
      dhour = dhour.toString().padStart(2, "0");
      var dminutes = d.getMinutes();
      dminutes = dminutes.toString().padStart(2, "0");
      var dseconds = d.getSeconds();
      dseconds = dseconds.toString().padStart(2, "0");
      var ddate = d.getDate(); //得到日期
      ddate = ddate.toString().padStart(2, "0");
      var dbeforedefaultDate = `${dyear}-${dmonth}-${ddate} ${dhour}:${dminutes}:${dseconds}`;

      //1个小时后
      var myDate = new Date();
      var myDateyear = myDate.getFullYear(); //得到年份
      var myDatemonth = myDate.getMonth(); //得到月份
      myDatemonth = myDatemonth + 1;
      myDatemonth = myDatemonth.toString().padStart(2, "0");
      var myDateTime = myDate.getTime();
      var hour = myDate.getHours() + 1;
      hour = hour.toString().padStart(2, "0");
      var minutes = myDate.getMinutes();
      minutes = minutes.toString().padStart(2, "0");
      var seconds = myDate.getSeconds();
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