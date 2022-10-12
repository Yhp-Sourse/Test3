<template>
  <div>
    <el-form id="ASEmergency" :model="ruleForm" :rules="rules" ref="Form" :label-position="top" >

      <div style="float:left;margin:15px 45px; " >
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

      <table class="rpt">
        <tbody>
          <tr>
            <td>序号</td>
            <td>仪器名称(型号)</td>
            <td>检定（或传递）时间</td>
            <td>检定单位</td>
            <td>有效期</td>
            <td>备注</td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              臭氧校准仪<el-form-item label="" prop="id_1">
            <input v-model="ruleForm.id_1"  type="text" id="id_1" value="" style="height: 30px;width:60%;" />
        </el-form-item>
            </td>
            <td>             
              <el-form-item label="" prop="id_2">
            <el-date-picker v-model="ruleForm.id_2" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item>
              </td>
            <td>
              <el-form-item label="" prop="id_3">
            <input v-model="ruleForm.id_3"  type="text" id="id_3" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td>
              <el-form-item label="" prop="id_4">
            <el-date-picker v-model="ruleForm.id_4" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"   placeholder="选择时间"></el-date-picker>
        </el-form-item>
              </td>
            <td>
              <el-form-item label="" prop="id_5">
            <input v-model="ruleForm.id_5"  type="text" id="id_5" value="" style="height: 30px" />
        </el-form-item>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              流量计<el-form-item label="" prop="id_6">
            <input v-model="ruleForm.id_6"  type="text" id="id_6" value="" style="height: 30px;width:60%;" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_7">
            <el-date-picker v-model="ruleForm.id_7" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"   placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_8">
            <input v-model="ruleForm.id_8"  type="text" id="id_8" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_9">
            <el-date-picker v-model="ruleForm.id_9" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_10">
            <input v-model="ruleForm.id_10"  type="text" id="id_10" value="" style="height: 30px" />
        </el-form-item>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              流量计<el-form-item label="" prop="id_11">
            <input v-model="ruleForm.id_11"  type="text" id="id_11" value="" style="height: 30px;width:60%;" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_12">
            <el-date-picker v-model="ruleForm.id_12" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_13">
            <input v-model="ruleForm.id_13"  type="text" id="id_13" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_14">
            <el-date-picker v-model="ruleForm.id_14" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_15">
            <input v-model="ruleForm.id_15"  type="text" id="id_15" value="" style="height: 30px" />
        </el-form-item>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              流量计<el-form-item label="" prop="id_16">
            <input v-model="ruleForm.id_16"  type="text" id="id_16" value="" style="height: 30px;width:60%;" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_17">
            <el-date-picker v-model="ruleForm.id_17" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_18">
           <input v-model="ruleForm.id_18"  type="text" id="id_18" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_19">
            <el-date-picker v-model="ruleForm.id_19" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_20">
            <input v-model="ruleForm.id_20"  type="text" id="id_20" value="" style="height: 30px" />
        </el-form-item>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              温湿度计<el-form-item label="" prop="id_21">
            <input v-model="ruleForm.id_21"  type="text" id="id_21" value="" style="height: 30px;width:60%;" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_22">
            <el-date-picker v-model="ruleForm.id_22" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_23">
            <input v-model="ruleForm.id_23"  type="text" id="id_23" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_24">
            <el-date-picker v-model="ruleForm.id_24" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_25">
            <input v-model="ruleForm.id_25"  type="text" id="id_25" value="" style="height: 30px" />
        </el-form-item>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              大气压计<el-form-item label="" prop="id_26">
            <input v-model="ruleForm.id_26"  type="text" id="id_26" value="" style="height: 30px;width:60%;" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_27">
            <el-date-picker v-model="ruleForm.id_27" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_28">
            <input v-model="ruleForm.id_28"  type="text" id="id_28" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_29">
            <el-date-picker v-model="ruleForm.id_29" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_30">
            <input v-model="ruleForm.id_30"  type="text" id="id_30" value="" style="height: 30px" />
        </el-form-item>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              负压表<el-form-item label="" prop="id_31">
            <input v-model="ruleForm.id_31"  type="text" id="id_31" value="" style="height: 30px;width:60%;" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_32">
            <el-date-picker v-model="ruleForm.id_32" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_33">
            <input v-model="ruleForm.id_33"  type="text" id="id_33" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_34">
            <el-date-picker v-model="ruleForm.id_34" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_35">
            <input v-model="ruleForm.id_35"  type="text" id="id_35" value="" style="height: 30px" />
        </el-form-item>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>NO标准气体
              <!-- <input v-model="ruleForm.id_36"  type="text" id="id_36" value="" style="height: 30px" /> -->
            </td>
            <td><el-form-item label="" prop="id_37">
            <el-date-picker v-model="ruleForm.id_37" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_38">
            <input v-model="ruleForm.id_38"  type="text" id="id_38" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_39">
            <el-date-picker v-model="ruleForm.id_39" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_40">
            <input v-model="ruleForm.id_40"  type="text" id="id_40" value="" style="height: 30px" />
        </el-form-item>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>SO2标准气体
              <!-- <input v-model="ruleForm.id_41"  type="text" id="id_41" value="" style="height: 30px" /> -->
            </td>
            <td><el-form-item label="" prop="id_42">
            <el-date-picker v-model="ruleForm.id_42" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_43">
            <input v-model="ruleForm.id_43"  type="text" id="id_43" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_44">
            <el-date-picker v-model="ruleForm.id_44" type="date" value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_45">
            <input v-model="ruleForm.id_45"  type="text" id="id_45" value="" style="height: 30px" />
        </el-form-item>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>CO标准气体
              <!-- <input v-model="ruleForm.id_46"  type="text" id="id_46" value="" style="height: 30px" /> -->
            </td>
            <td><el-form-item label="" prop="id_47">
            <el-date-picker v-model="ruleForm.id_47" type="date" value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_48">
            <input v-model="ruleForm.id_48"  type="text" id="id_48" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_49">
            <el-date-picker v-model="ruleForm.id_49" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_50">
            <input v-model="ruleForm.id_50"  type="text" id="id_50" value="" style="height: 30px" />
        </el-form-item>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              <el-form-item label="" prop="id_51">
            <input v-model="ruleForm.id_51"  type="text" id="id_51" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_52">
            <el-date-picker v-model="ruleForm.id_52" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_53">
            <input v-model="ruleForm.id_53"  type="text" id="id_53" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_54">
            <el-date-picker v-model="ruleForm.id_54" type="date" value-format="yyyy-MM-dd"  format="yyyy-MM-dd"   placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_55">
            <input v-model="ruleForm.id_55"  type="text" id="id_55" value="" style="height: 30px" />
        </el-form-item>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <el-form-item label="" prop="id_56">
            <input v-model="ruleForm.id_56"  type="text" id="id_56" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_57">
            <el-date-picker v-model="ruleForm.id_57" type="date" value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_58">
            <input v-model="ruleForm.id_58"  type="text" id="id_58" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_59">
            <el-date-picker v-model="ruleForm.id_59" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"   placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_60">
            <input v-model="ruleForm.id_60"  type="text" id="id_60" value="" style="height: 30px" />
        </el-form-item>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              <el-form-item label="" prop="id_61">
            <input v-model="ruleForm.id_61"  type="text" id="id_61" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_62">
            <el-date-picker v-model="ruleForm.id_62" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_63">
            <input v-model="ruleForm.id_63"  type="text" id="id_63" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_64">
            <el-date-picker v-model="ruleForm.id_64" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_65">
            <input v-model="ruleForm.id_65"  type="text" id="id_65" value="" style="height: 30px" />
        </el-form-item>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <el-form-item label="" prop="id_66">
            <input v-model="ruleForm.id_66"  type="text" id="id_66" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_67">
            <el-date-picker v-model="ruleForm.id_67" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_68">
            <input v-model="ruleForm.id_68"  type="text" id="id_68" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_69">
            <el-date-picker v-model="ruleForm.id_69" type="date" value-format="yyyy-MM-dd"  format="yyyy-MM-dd"   placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_70">
            <input v-model="ruleForm.id_70"  type="text" id="id_70" value="" style="height: 30px" />
        </el-form-item>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              <el-form-item label="" prop="id_71">
            <input v-model="ruleForm.id_71"  type="text" id="id_71" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_72">
            <el-date-picker v-model="ruleForm.id_72" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_73">
            <input v-model="ruleForm.id_73"  type="text" id="id_73" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_74">
            <el-date-picker v-model="ruleForm.id_74" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_75">
            <input v-model="ruleForm.id_75"  type="text" id="id_75" value="" style="height: 30px" />
        </el-form-item>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              <el-form-item label="" prop="id_76">
            <input v-model="ruleForm.id_76"  type="text" id="id_76" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_77">
            <el-date-picker v-model="ruleForm.id_77" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_78">
            <input v-model="ruleForm.id_78"  type="text" id="id_78" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_79">
            <el-date-picker v-model="ruleForm.id_79" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_80">
            <input v-model="ruleForm.id_80"  type="text" id="id_80" value="" style="height: 30px" />
        </el-form-item>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              <el-form-item label="" prop="id_81">
            <input v-model="ruleForm.id_81"  type="text" id="id_81" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_82">
            <el-date-picker v-model="ruleForm.id_82" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_83">
           <input v-model="ruleForm.id_83"  type="text" id="id_83" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_84">
            <el-date-picker v-model="ruleForm.id_84" type="date" value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_85">
            <input v-model="ruleForm.id_85"  type="text" id="id_85" value="" style="height: 30px" />
        </el-form-item>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              <el-form-item label="" prop="id_86">
            <input v-model="ruleForm.id_86"  type="text" id="id_86" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_87">
            <el-date-picker v-model="ruleForm.id_87" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_88">
            <input v-model="ruleForm.id_88"  type="text" id="id_88" value="" style="height: 30px" />
        </el-form-item>
            </td>
            <td><el-form-item label="" prop="id_89">
            <el-date-picker v-model="ruleForm.id_89" type="date"  value-format="yyyy-MM-dd"  format="yyyy-MM-dd"  placeholder="选择时间"></el-date-picker>
        </el-form-item></td>
            <td>
              <el-form-item label="" prop="id_90">
            <input v-model="ruleForm.id_90"  type="text" id="id_90" value="" style="height: 30px" />
        </el-form-item>
            </td>
          </tr>
          <tr>
            <td>备注：</td>
            <td colspan="5"><el-form-item label="" prop="id_91">
           <textarea v-model="ruleForm.id_91"  rows="5" id="id_bz" style="width:100%;"></textarea>
        </el-form-item></td>
          </tr>
        </tbody>
      </table>
    </el-form>
  </div>
</template>
<script>
export default {
    props:{
        formData: Object,
        btnType: String,
    },
    components:{},
    data(){
        return{
            dataContent:'',
            ruleForm:{
                "id_1": "",
                "id_2": "",
                "id_3": "",
                "id_4": "",
                "id_5": "",
                "id_6": "",
                "id_7": "",
                "id_8": "",
                "id_9": "",
                "id_10": "",
                "id_11": "",
                "id_12": "",
                "id_13": "",
                "id_14": "",
                "id_15": "",
                "id_16": "",
                "id_17": "",
                "id_18": "",
                "id_19": "",
                "id_20": "",
                "id_21": "",
                "id_22": "",
                "id_23": "",
                "id_24": "",
                "id_25": "",
                "id_26": "",
                "id_27": "",
                "id_28": "",
                "id_29": "",
                "id_30": "",
                "id_31": "",
                "id_32": "",
                "id_33": "",
                "id_34": "",
                "id_35": "",
                "id_36": "",
                "id_37": "",
                "id_38": "",
                "id_39": "",
                "id_40": "",
                "id_41": "",
                "id_42": "",
                "id_43": "",
                "id_44": "",
                "id_45": "",
                "id_46": "",
                "id_47": "",
                "id_48": "",
                "id_49": "",
                "id_50": "",
                "id_51": "",
                "id_52": "",
                "id_53": "",
                "id_54": "",
                "id_55": "",
                "id_56": "",
                "id_57": "",
                "id_58": "",
                "id_59": "",
                "id_60": "",
                "id_61": "",
                "id_62": "",
                "id_63": "",
                "id_64": "",
                "id_65": "",
                "id_66": "",
                "id_67": "",
                "id_68": "",
                "id_69": "",
                "id_70": "",
                "id_71": "",
                "id_72": "",
                "id_73": "",
                "id_74": "",
                "id_75": "",
                "id_76": "",
                "id_77": "",
                "id_78": "",
                "id_79": "",
                "id_80": "",
                "id_81": "",
                "id_82": "",
                "id_83": "",
                "id_84": "",
                "id_85": "",
                "id_86": "",
                "id_87": "",
                "id_88": "",
                "id_89": "",
                "id_90": "",
                "id_91": "",
                "yj_1": "",
                "yj_2": "",
            },
          rules: {
            yj_1: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            yj_2: [{ required: true, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_1:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_2:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_3:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_4:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_5:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_6:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_7:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_8:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_9:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_10:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_11:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_12:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_13:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_14:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_15:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_16:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_17:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_18:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_19:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_20:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_21:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_22:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_23:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_24:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_25:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_26:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_27:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_28:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_29:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_30:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_31:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_32:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_33:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_34:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_35:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_36:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_37:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_38:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_39:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_40:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_41:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_42:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_43:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_44:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_45:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_46:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_47:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_48:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_49:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_50:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_51:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_52:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_53:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_54:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_55:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_56:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_57:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_58:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_59:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_60:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_61:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_62:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_63:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_64:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_65:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_66:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_67:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_68:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_69:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_70:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_71:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_72:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_73:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_74:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_75:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_76:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_77:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_78:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_79:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_80:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_81:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_82:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_83:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_84:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_85:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_86:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_87:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_88:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_89:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_90:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }],
            id_91:[{ required: false, message: '必填项，没有的填写“/”', trigger: 'blur' }]
          },
        }
    },
    // computed: {
    //     formSubmitData: function () {
    //         return this.$emit("formSubmit",this.Qs.stringify(this.ruleForm));
    //     }
    // },
    watch:{
        btnType(val, oldVal) {
          this.$refs["Form"].validate((valid) => {
                if (valid) {
                    if (val == "保存") {
                      this.$emit("formSava", JSON.stringify(this.ruleForm));
                    }
                    if (val == "提交") {
                      this.$emit("formSubmit", JSON.stringify(this.ruleForm));
                    }
                }else {
                    this.$emit("reSet", "");
                    return false;
                }
          });
        },
        formData(val,oldVal){
            if(val.content!=null){
                this.ruleForm=JSON.parse(val.content);
               
            }
        }
    },
    mounted(){
      //this.getNowTime();
    },
    methods:{
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