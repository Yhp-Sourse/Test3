<template>
  <div>
    <el-form id="ASEmergency" :model="ruleForm" ref="Form">
      <div style="float: left; margin: 5px 40px">
        <el-row>
          <el-col :span="11">
            <el-form-item label="巡检开始时间：" prop="yj_1">
              <el-date-picker
                v-model:value="ruleForm.yj_1"
                type="datetime"
                value-format="yyyy-MM-dd HH:mm:ss"
                placeholder="选择时间"
                :clearable="false"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="2"> &nbsp; &nbsp; &nbsp; </el-col>
          <el-col :span="11">
            <el-form-item label="巡检结束时间：" prop="yj_2">
              <el-date-picker
                v-model:value="ruleForm.yj_2"
                type="datetime"
                value-format="yyyy-MM-dd HH:mm:ss"
                placeholder="选择时间"
                :clearable="false"
              ></el-date-picker>
            </el-form-item>
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
            <td>
              <el-form-item label="" prop="DeviceNames_1">
                <textarea
                  v-model="ruleForm.DeviceNames_1"
                  id="DeviceNames_1"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Nums_1">
                <textarea v-model="ruleForm.Nums_1" id="Nums_1"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="ChangeTime_1">
                <el-date-picker
                  v-model:value="ruleForm.ChangeTime_1"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="ChangePerSon_1">
                <textarea
                  v-model="ruleForm.ChangePerSon_1"
                  id="ChangePerSon_1"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <el-form-item label="" prop="DeviceNum_2">
                <textarea
                  v-model="ruleForm.DeviceNum_2"
                  id="DeviceNum_2"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceNames_2">
                <textarea
                  v-model="ruleForm.DeviceNames_2"
                  id="DeviceNames_2"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Nums_2">
                <textarea v-model="ruleForm.Nums_2" id="Nums_2"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="ChangeTime_2">
                <el-date-picker
                  v-model:value="ruleForm.ChangeTime_2"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="ChangePerSon_2">
                <textarea
                  v-model="ruleForm.ChangePerSon_2"
                  id="ChangePerSon_2"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <el-form-item label="" prop="DeviceNum_3">
                <textarea
                  v-model="ruleForm.DeviceNum_3"
                  id="DeviceNum_3"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceNames_3">
                <textarea
                  v-model="ruleForm.DeviceNames_3"
                  id="DeviceNames_3"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Nums_3">
                <textarea v-model="ruleForm.Nums_3" id="Nums_3"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="ChangeTime_3">
                <el-date-picker
                  v-model:value="ruleForm.ChangeTime_3"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="ChangePerSon_3">
                <textarea
                  v-model="ruleForm.ChangePerSon_3"
                  id="ChangePerSon_3"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <el-form-item label="" prop="DeviceNum_4">
                <textarea
                  v-model="ruleForm.DeviceNum_4"
                  id="DeviceNum_4"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceNames_4">
                <textarea
                  v-model="ruleForm.DeviceNames_4"
                  id="DeviceNames_4"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Nums_4">
                <textarea v-model="ruleForm.Nums_4" id="Nums_4"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="ChangeTime_4">
                <el-date-picker
                  v-model:value="ruleForm.ChangeTime_4"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="ChangePerSon_4">
                <textarea
                  v-model="ruleForm.ChangePerSon_4"
                  id="ChangePerSon_4"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <el-form-item label="" prop="DeviceNum_5">
                <textarea
                  v-model="ruleForm.DeviceNum_5"
                  id="DeviceNum_5"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceNames_5">
                <textarea
                  v-model="ruleForm.DeviceNames_5"
                  id="DeviceNames_5"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Nums_5">
                <textarea v-model="ruleForm.Nums_5" id="Nums_5"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="ChangeTime_5">
                <el-date-picker
                  v-model:value="ruleForm.ChangeTime_5"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="ChangePerSon_5">
                <textarea
                  v-model="ruleForm.ChangePerSon_5"
                  id="ChangePerSon_5"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <el-form-item label="" prop="DeviceNum_6">
                <textarea
                  v-model="ruleForm.DeviceNum_6"
                  id="DeviceNum_6"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceNames_6">
                <textarea
                  v-model="ruleForm.DeviceNames_6"
                  id="DeviceNames_6"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Nums_6">
                <textarea v-model="ruleForm.Nums_6" id="Nums_6"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="ChangeTime_6">
                <el-date-picker
                  v-model:value="ruleForm.ChangeTime_6"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="ChangePerSon_6">
                <textarea
                  v-model="ruleForm.ChangePerSon_6"
                  id="ChangePerSon_6"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <el-form-item label="" prop="DeviceNum_7">
                <textarea
                  v-model="ruleForm.DeviceNum_7"
                  id="DeviceNum_7"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceNames_7">
                <textarea
                  v-model="ruleForm.DeviceNames_7"
                  id="DeviceNames_7"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Nums_7">
                <textarea v-model="ruleForm.Nums_7" id="Nums_7"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="ChangeTime_7">
                <el-date-picker
                  v-model:value="ruleForm.ChangeTime_7"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="ChangePerSon_7">
                <textarea
                  v-model="ruleForm.ChangePerSon_7"
                  id="ChangePerSon_7"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <el-form-item label="" prop="DeviceNum_8">
                <textarea
                  v-model="ruleForm.DeviceNum_8"
                  id="DeviceNum_8"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceNames_8">
                <textarea
                  v-model="ruleForm.DeviceNames_8"
                  id="DeviceNames_8"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Nums_8">
                <textarea v-model="ruleForm.Nums_8" id="Nums_8"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="ChangeTime_8">
                <el-date-picker
                  v-model:value="ruleForm.ChangeTime_8"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="ChangePerSon_8">
                <textarea
                  v-model="ruleForm.ChangePerSon_8"
                  id="ChangePerSon_8"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              <el-form-item label="" prop="DeviceNum_9">
                <textarea
                  v-model="ruleForm.DeviceNum_9"
                  id="DeviceNum_9"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceNames_9">
                <textarea
                  v-model="ruleForm.DeviceNames_9"
                  id="DeviceNames_9"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Nums_9">
                <textarea v-model="ruleForm.Nums_9" id="Nums_9"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="ChangeTime_9">
                <el-date-picker
                  v-model:value="ruleForm.ChangeTime_9"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="ChangePerSon_9">
                <textarea
                  v-model="ruleForm.ChangePerSon_9"
                  id="ChangePerSon_9"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <el-form-item label="" prop="DeviceNum_10">
                <textarea
                  v-model="ruleForm.DeviceNum_10"
                  id="DeviceNum_10"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceNames_10">
                <textarea
                  v-model="ruleForm.DeviceNames_10"
                  id="DeviceNames_10"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Nums_10">
                <textarea v-model="ruleForm.Nums_10" id="Nums_10"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="ChangeTime_10">
                <el-date-picker
                  v-model:value="ruleForm.ChangeTime_10"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="ChangePerSon_10">
                <textarea
                  v-model="ruleForm.ChangePerSon_10"
                  id="ChangePerSon_10"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              <el-form-item label="" prop="DeviceNum_11">
                <textarea
                  v-model="ruleForm.DeviceNum_11"
                  id="DeviceNum_11"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceNames_11">
                <textarea
                  v-model="ruleForm.DeviceNames_11"
                  id="DeviceNames_11"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="Nums_11">
                <textarea v-model="ruleForm.Nums_11" id="Nums_11"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="ChangeTime_11">
                <el-date-picker
                  v-model:value="ruleForm.ChangeTime_11"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="ChangePerSon_11">
                <textarea
                  v-model="ruleForm.ChangePerSon_11"
                  id="ChangePerSon_11"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <el-form-item label="" prop="rc_12">
                <textarea v-model="ruleForm.rc_12" id="DeviceNum_12"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_38">
                <textarea
                  v-model="ruleForm.rc_38"
                  id="DeviceNames_12"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_59">
                <textarea v-model="ruleForm.rc_59" id="Nums_12"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_80">
                <el-date-picker
                  v-model:value="ruleForm.rc_80"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_100">
                <textarea
                  v-model="ruleForm.rc_100"
                  id="ChangePerSon_12"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              <el-form-item label="" prop="rc_13">
                <textarea v-model="ruleForm.rc_13" id="DeviceNum_13"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_39">
                <textarea
                  v-model="ruleForm.rc_39"
                  id="DeviceNames_13"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_60">
                <textarea v-model="ruleForm.rc_60" id="Nums_13"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_81">
                <el-date-picker
                  v-model:value="ruleForm.rc_81"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_101">
                <textarea
                  v-model="ruleForm.rc_101"
                  id="ChangePerSon_13"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <el-form-item label="" prop="rc_14">
                <textarea v-model="ruleForm.rc_14" id="DeviceNum_14"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_40">
                <textarea
                  v-model="ruleForm.rc_40"
                  id="DeviceNames_14"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_61">
                <textarea v-model="ruleForm.rc_61" id="Nums_14"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_82">
                <el-date-picker
                  v-model:value="ruleForm.rc_82"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_102">
                <textarea
                  v-model="ruleForm.rc_102"
                  id="ChangePerSon_14"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              <el-form-item label="" prop="rc_15">
                <textarea v-model="ruleForm.rc_15" id="DeviceNum_15"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_16">
                <textarea
                  v-model="ruleForm.rc_16"
                  id="DeviceNames_15"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_17">
                <textarea v-model="ruleForm.rc_17" id="Nums_15"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_18">
                <el-date-picker
                  v-model:value="ruleForm.rc_18"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_19">
                <textarea
                  v-model="ruleForm.rc_19"
                  id="ChangePerSon_15"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              <el-form-item label="" prop="rc_20">
                <textarea v-model="ruleForm.rc_20" id="DeviceNum_16"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_41">
                <textarea
                  v-model="ruleForm.rc_41"
                  id="DeviceNames_16"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_62">
                <textarea v-model="ruleForm.rc_62" id="Nums_16"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_83">
                <el-date-picker
                  v-model:value="ruleForm.rc_83"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_103">
                <textarea
                  v-model="ruleForm.rc_103"
                  id="ChangePerSon_16"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              <el-form-item label="" prop="rc_21">
                <textarea v-model="ruleForm.rc_21" id="DeviceNum_17"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_21">
                <textarea
                  v-model="ruleForm.rc_21"
                  id="DeviceNames_17"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_63">
                <textarea v-model="ruleForm.rc_63" id="Nums_17"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_84">
                <el-date-picker
                  v-model:value="ruleForm.rc_84"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_104">
                <textarea
                  v-model="ruleForm.rc_104"
                  id="ChangePerSon_17"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              <el-form-item label="" prop="rc_22">
                <textarea v-model="ruleForm.rc_22" id="DeviceNum_18"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_43">
                <textarea
                  v-model="ruleForm.rc_43"
                  id="DeviceNames_18"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_64">
                <textarea v-model="ruleForm.rc_64" id="Nums_18"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_85">
                <el-date-picker
                  v-model:value="ruleForm.rc_85"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_105">
                <textarea
                  v-model="ruleForm.rc_105"
                  id="ChangePerSon_18"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              <el-form-item label="" prop="rc_23">
                <textarea v-model="ruleForm.rc_23" id="DeviceNum_19"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_44">
                <textarea
                  v-model="ruleForm.rc_44"
                  id="DeviceNames_19"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_65">
                <textarea v-model="ruleForm.rc_65" id="Nums_19"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_86">
                <el-date-picker
                  v-model:value="ruleForm.rc_86"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_106">
                <textarea
                  v-model="ruleForm.rc_106"
                  id="ChangePerSon_19"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>
              <el-form-item label="" prop="rc_24">
                <textarea v-model="ruleForm.rc_24" id="DeviceNum_20"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_45">
                <textarea
                  v-model="ruleForm.rc_45"
                  id="DeviceNames_20"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_66">
                <textarea v-model="ruleForm.rc_66" id="Nums_20"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_87">
                <el-date-picker
                  v-model:value="ruleForm.rc_87"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_107">
                <textarea
                  v-model="ruleForm.rc_107"
                  id="ChangePerSon_20"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>21</td>
            <td>
              <el-form-item label="" prop="rc_25">
                <textarea v-model="ruleForm.rc_25" id="DeviceNum_21"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_46">
                <textarea
                  v-model="ruleForm.rc_46"
                  id="DeviceNames_21"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_67">
                <textarea v-model="ruleForm.rc_67" id="Nums_21"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_88">
                <el-date-picker
                  v-model:value="ruleForm.rc_88"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_108">
                <textarea
                  v-model="ruleForm.rc_108"
                  id="ChangePerSon_21"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>22</td>
            <td>
              <el-form-item label="" prop="rc_26">
                <textarea v-model="ruleForm.rc_26" id="DeviceNum_22"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_47">
                <textarea
                  v-model="ruleForm.rc_47"
                  id="DeviceNames_22"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_68">
                <textarea v-model="ruleForm.rc_68" id="Nums_22"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_89">
                <el-date-picker
                  v-model:value="ruleForm.rc_89"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_109">
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
    ruleForm: Object,
  },
}
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
