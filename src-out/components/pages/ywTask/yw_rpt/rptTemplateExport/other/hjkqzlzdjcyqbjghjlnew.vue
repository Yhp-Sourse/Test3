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
                <textarea
                  v-model="ruleForm.DeviceChange_1"
                  id="DeviceChange_1"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceChangeWhy_1">
                <textarea
                  v-model="ruleForm.DeviceChangeWhy_1"
                  id="DeviceChangeWhy_1"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceModel_1">
                <textarea
                  v-model="ruleForm.DeviceModel_1"
                  id="DeviceModel_1"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceNum_1">
                <textarea
                  v-model="ruleForm.DeviceNum_1"
                  id="DeviceNum_1"
                ></textarea>
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
            <td>
              <el-form-item label="" prop="DeviceMark_1">
                <textarea
                  v-model="ruleForm.DeviceMark_1"
                  id="DeviceMark_1"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <el-form-item label="" prop="DeviceChange_2">
                <textarea
                  v-model="ruleForm.DeviceChange_2"
                  id="DeviceChange_2"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceChangeWhy_2">
                <textarea
                  v-model="ruleForm.DeviceChangeWhy_2"
                  id="DeviceChangeWhy_2"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceModel_2">
                <textarea
                  v-model="ruleForm.DeviceModel_2"
                  id="DeviceModel_2"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceNum_2">
                <textarea
                  v-model="ruleForm.DeviceNum_2"
                  id="DeviceNum_2"
                ></textarea>
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
            <td>
              <el-form-item label="" prop="DeviceMark_2">
                <textarea
                  v-model="ruleForm.DeviceMark_2"
                  id="DeviceMark_2"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <el-form-item label="" prop="DeviceChange_3">
                <textarea
                  v-model="ruleForm.DeviceChange_3"
                  id="DeviceChange_3"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceChangeWhy_3">
                <textarea
                  v-model="ruleForm.DeviceChangeWhy_3"
                  id="DeviceChangeWhy_3"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceModel_3">
                <textarea
                  v-model="ruleForm.DeviceModel_3"
                  id="DeviceModel_3"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceNum_3">
                <textarea
                  v-model="ruleForm.DeviceNum_3"
                  id="DeviceNum_3"
                ></textarea>
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
            <td>
              <el-form-item label="" prop="DeviceMark_3">
                <textarea
                  v-model="ruleForm.DeviceMark_3"
                  id="DeviceMark_3"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <el-form-item label="" prop="DeviceChange_4">
                <textarea
                  v-model="ruleForm.DeviceChange_4"
                  id="DeviceChange_4"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceChangeWhy_4">
                <textarea
                  v-model="ruleForm.DeviceChangeWhy_4"
                  id="DeviceChangeWhy_4"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceModel_4">
                <textarea
                  v-model="ruleForm.DeviceModel_4"
                  id="DeviceModel_4"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceNum_4">
                <textarea
                  v-model="ruleForm.DeviceNum_4"
                  id="DeviceNum_4"
                ></textarea>
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
            <td>
              <el-form-item label="" prop="DeviceMark_4">
                <textarea
                  v-model="ruleForm.DeviceMark_4"
                  id="DeviceMark_4"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <el-form-item label="" prop="DeviceChange_5">
                <textarea
                  v-model="ruleForm.DeviceChange_5"
                  id="DeviceChange_5"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceChangeWhy_5">
                <textarea
                  v-model="ruleForm.DeviceChangeWhy_5"
                  id="DeviceChangeWhy_5"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceModel_5">
                <textarea
                  v-model="ruleForm.DeviceModel_5"
                  id="DeviceModel_5"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceNum_5">
                <textarea
                  v-model="ruleForm.DeviceNum_5"
                  id="DeviceNum_5"
                ></textarea>
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
            <td>
              <el-form-item label="" prop="DeviceMark_5">
                <textarea
                  v-model="ruleForm.DeviceMark_5"
                  id="DeviceMark_5"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <el-form-item label="" prop="DeviceChange_6">
                <textarea
                  v-model="ruleForm.DeviceChange_6"
                  id="DeviceChange_6"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceChangeWhy_6">
                <textarea
                  v-model="ruleForm.DeviceChangeWhy_6"
                  id="DeviceChangeWhy_6"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceModel_6">
                <textarea
                  v-model="ruleForm.DeviceModel_6"
                  id="DeviceModel_6"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceNum_6">
                <textarea
                  v-model="ruleForm.DeviceNum_6"
                  id="DeviceNum_6"
                ></textarea>
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
            <td>
              <el-form-item label="" prop="DeviceMark_6">
                <textarea
                  v-model="ruleForm.DeviceMark_6"
                  id="DeviceMark_6"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <el-form-item label="" prop="DeviceChange_7">
                <textarea
                  v-model="ruleForm.DeviceChange_7"
                  id="DeviceChange_7"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceChangeWhy_7">
                <textarea
                  v-model="ruleForm.DeviceChangeWhy_7"
                  id="DeviceChangeWhy_7"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceModel_7">
                <textarea
                  v-model="ruleForm.DeviceModel_7"
                  id="DeviceModel_7"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceNum_7">
                <textarea
                  v-model="ruleForm.DeviceNum_7"
                  id="DeviceNum_7"
                ></textarea>
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
            <td>
              <el-form-item label="" prop="DeviceMark_7">
                <textarea
                  v-model="ruleForm.DeviceMark_7"
                  id="DeviceMark_7"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <el-form-item label="" prop="DeviceChange_8">
                <textarea
                  v-model="ruleForm.DeviceChange_8"
                  id="DeviceChange_8"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceChangeWhy_8">
                <textarea
                  v-model="ruleForm.DeviceChangeWhy_8"
                  id="DeviceChangeWhy_8"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceModel_8">
                <textarea
                  v-model="ruleForm.DeviceModel_8"
                  id="DeviceModel_8"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceNum_8">
                <textarea
                  v-model="ruleForm.DeviceNum_8"
                  id="DeviceNum_8"
                ></textarea>
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
            <td>
              <el-form-item label="" prop="DeviceMark_8">
                <textarea
                  v-model="ruleForm.DeviceMark_8"
                  id="DeviceMark_8"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              <el-form-item label="" prop="DeviceChange_9">
                <textarea
                  v-model="ruleForm.DeviceChange_9"
                  id="DeviceChange_9"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceChangeWhy_9">
                <textarea
                  v-model="ruleForm.DeviceChangeWhy_9"
                  id="DeviceChangeWhy_9"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceModel_9">
                <textarea
                  v-model="ruleForm.DeviceModel_9"
                  id="DeviceModel_9"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceNum_9">
                <textarea
                  v-model="ruleForm.DeviceNum_9"
                  id="DeviceNum_9"
                ></textarea>
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
            <td>
              <el-form-item label="" prop="DeviceMark_9">
                <textarea
                  v-model="ruleForm.DeviceMark_9"
                  id="DeviceMark_9"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <el-form-item label="" prop="DeviceChange_10">
                <textarea
                  v-model="ruleForm.DeviceChange_10"
                  id="DeviceChange_10"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceChangeWhy_10">
                <textarea
                  v-model="ruleForm.DeviceChangeWhy_10"
                  id="DeviceChangeWhy_10"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceModel_10">
                <textarea
                  v-model="ruleForm.DeviceModel_10"
                  id="DeviceModel_10"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="DeviceNum_10">
                <textarea
                  v-model="ruleForm.DeviceNum_10"
                  id="DeviceNum_10"
                ></textarea>
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
            <td>
              <el-form-item label="" prop="DeviceMark_10">
                <textarea
                  v-model="ruleForm.DeviceMark_10"
                  id="DeviceMark_10"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              <el-form-item label="" prop="rc_71">
                <textarea
                  v-model="ruleForm.rc_71"
                  id="DeviceChange_11"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_72">
                <textarea
                  v-model="ruleForm.rc_72"
                  id="DeviceChangeWhy_11"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_73">
                <textarea
                  v-model="ruleForm.rc_73"
                  id="DeviceModel_11"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_74">
                <textarea v-model="ruleForm.rc_74" id="DeviceNum_11"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_75">
                <el-date-picker
                  v-model:value="ruleForm.rc_75"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_76">
                <textarea
                  v-model="ruleForm.rc_76"
                  id="ChangePerSon_11"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_77">
                <textarea
                  v-model="ruleForm.rc_77"
                  id="DeviceMark_11"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <el-form-item label="" prop="rc_78">
                <textarea
                  v-model="ruleForm.rc_78"
                  id="DeviceChange_12"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_79">
                <textarea
                  v-model="ruleForm.rc_79"
                  id="DeviceChangeWhy_12"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_80">
                <textarea
                  v-model="ruleForm.rc_80"
                  id="DeviceModel_12"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_81">
                <textarea v-model="ruleForm.rc_81" id="DeviceNum_12"></textarea>
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
              <el-form-item label="" prop="rc_83">
                <textarea
                  v-model="ruleForm.rc_83"
                  id="ChangePerSon_12"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_84">
                <textarea
                  v-model="ruleForm.rc_84"
                  id="DeviceMark_12"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              <el-form-item label="" prop="rc_85">
                <textarea
                  v-model="ruleForm.rc_85"
                  id="DeviceChange_13"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_86">
                <textarea
                  v-model="ruleForm.rc_86"
                  id="DeviceChangeWhy_13"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_87">
                <textarea
                  v-model="ruleForm.rc_87"
                  id="DeviceModel_13"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_88">
                <textarea v-model="ruleForm.rc_88" id="DeviceNum_13">
                </textarea>
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
              <el-form-item label="" prop="rc_90">
                <textarea
                  v-model="ruleForm.rc_90"
                  id="ChangePerSon_13"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_91">
                <textarea
                  v-model="ruleForm.rc_91"
                  id="DeviceMark_13"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <el-form-item label="" prop="rc_92">
                <textarea
                  v-model="ruleForm.rc_92"
                  id="DeviceChange_14"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_93">
                <textarea
                  v-model="ruleForm.rc_93"
                  id="DeviceChangeWhy_14"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_94">
                <textarea
                  v-model="ruleForm.rc_94"
                  id="DeviceModel_14"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_95">
                <textarea v-model="ruleForm.rc_95" id="DeviceNum_14"></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_95">
                <el-date-picker
                  v-model:value="ruleForm.rc_95"
                  type="date"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择时间"
                ></el-date-picker>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_97">
                <textarea
                  v-model="ruleForm.rc_97"
                  id="ChangePerSon_14"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_98">
                <textarea
                  v-model="ruleForm.rc_98"
                  id="DeviceMark_14"
                ></textarea>
              </el-form-item>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              <el-form-item label="" prop="rc_99">
                <textarea
                  v-model="ruleForm.rc_99"
                  id="DeviceChange_15"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_100">
                <textarea
                  v-model="ruleForm.rc_100"
                  id="DeviceChangeWhy_15"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_101">
                <textarea
                  v-model="ruleForm.rc_101"
                  id="DeviceModel_15"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_102">
                <textarea
                  v-model="ruleForm.rc_102"
                  id="DeviceNum_15"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_103">
                <el-date-picker
                  v-model:value="ruleForm.rc_103"
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
                  id="ChangePerSon_15"
                ></textarea>
              </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="rc_105">
                <textarea
                  v-model="ruleForm.rc_105"
                  id="DeviceMark_15"
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
