<template>
  <div>
    <form id="ASEmergency">
      <div style="float: left; margin: 15px 45px">
        巡检时间：
        <el-date-picker
          v-model:value="ruleForm.yj_1"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择时间"
          :clearable="false"
        ></el-date-picker>
        &nbsp; &nbsp; &nbsp;
        <!-- 巡检结束时间：
              <el-date-picker v-model="ruleForm.yj_2" type="date" value-format="yyyy-MM-dd" placeholder="选择时间" :clearable=false></el-date-picker> -->
      </div>

      <table id="ASEmergencytb">
        <tbody>
          <tr>
            <td>序号</td>
            <td>异常情况</td>
            <td>发现时间</td>
            <td>发现人</td>
            <td>
              处置结果
              <br />截止时间
            </td>
            <td>备注</td>
          </tr>

          <tr>
            <td>1</td>
            <td>
              <textarea v-model="ruleForm.E_rc_1"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  v-model="ruleForm.E_rc_2"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
                <!--<el-date-picker v-model="ruleForm.E_rc_2" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择时间"></el-date-picker>-->
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_3"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  v-model="ruleForm.E_rc_4"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
                <!--<el-date-picker v-model="ruleForm.E_rc_4" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择时间"></el-date-picker>-->
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_5"></textarea>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>
              <textarea v-model="ruleForm.E_rc_6"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  v-model="ruleForm.E_rc_7"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
                <!--<el-date-picker v-model="ruleForm.E_rc_7" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择时间"></el-date-picker>-->
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_8"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  v-model="ruleForm.E_rc_9"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
                <!--<el-date-picker v-model="ruleForm.E_rc_9" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择时间"></el-date-picker>-->
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_10"></textarea>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>
              <textarea v-model="ruleForm.E_rc_11"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  v-model="ruleForm.E_rc_12"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
                <!--<el-date-picker v-model="ruleForm.E_rc_12" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择时间"></el-date-picker>-->
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_13"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  v-model="ruleForm.E_rc_14"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
                <!--<el-date-picker v-model="ruleForm.E_rc_14" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择时间"></el-date-picker>-->
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_15"></textarea>
            </td>
          </tr>

          <tr>
            <td>4</td>
            <td>
              <textarea v-model="ruleForm.E_rc_16"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  v-model="ruleForm.E_rc_17"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
                <!--<el-date-picker v-model="ruleForm.E_rc_17" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择时间"></el-date-picker>-->
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_18"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  v-model="ruleForm.E_rc_19"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
                <!--<el-date-picker v-model="ruleForm.E_rc_19" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择时间"></el-date-picker>  -->
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_20"></textarea>
            </td>
          </tr>

          <tr>
            <td>5</td>
            <td>
              <textarea v-model="ruleForm.E_rc_21"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  v-model="ruleForm.E_rc_22"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
                <!--<el-date-picker v-model="ruleForm.E_rc_22" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择时间"></el-date-picker>   -->
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_23"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  v-model="ruleForm.E_rc_24"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px"
                />

                <!--<el-date-picker v-model="ruleForm.E_rc_24" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择时间"></el-date-picker>   -->
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_25"></textarea>
            </td>
          </tr>

          <tr>
            <td>6</td>
            <td>
              <textarea v-model="ruleForm.E_rc_26"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  v-model="ruleForm.E_rc_27"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_28"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  v-model="ruleForm.E_rc_29"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_30"></textarea>
            </td>
          </tr>

          <tr>
            <td>7</td>
            <td>
              <textarea v-model="ruleForm.E_rc_31"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  v-model="ruleForm.E_rc_32"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_33"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  v-model="ruleForm.E_rc_34"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_35"></textarea>
            </td>
          </tr>

          <tr>
            <td>8</td>
            <td>
              <textarea v-model="ruleForm.E_rc_36"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  v-model="ruleForm.E_rc_37"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_38"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  v-model="ruleForm.E_rc_39"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_40"></textarea>
            </td>
          </tr>

          <tr>
            <td>9</td>
            <td>
              <textarea v-model="ruleForm.E_rc_41"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  v-model="ruleForm.E_rc_42"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_43"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  v-model="ruleForm.E_rc_44"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_45"></textarea>
            </td>
          </tr>

          <tr>
            <td>10</td>
            <td>
              <textarea v-model="ruleForm.E_rc_46"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  v-model="ruleForm.E_rc_47"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_48"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  v-model="ruleForm.E_rc_49"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_50"></textarea>
            </td>
          </tr>

          <tr>
            <td>11</td>
            <td>
              <textarea v-model="ruleForm.E_rc_51"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  v-model="ruleForm.E_rc_52"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_53"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  v-model="ruleForm.E_rc_54"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_55"></textarea>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <textarea v-model="ruleForm.E_rc_56"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  v-model="ruleForm.E_rc_57"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_58"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  v-model="ruleForm.E_rc_59"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_60"></textarea>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              <textarea v-model="ruleForm.E_rc_61"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  v-model="ruleForm.E_rc_62"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_63"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  v-model="ruleForm.E_rc_64"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_65"></textarea>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <textarea v-model="ruleForm.E_rc_66"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  v-model="ruleForm.E_rc_67"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_68"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  v-model="ruleForm.E_rc_69"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_70"></textarea>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              <textarea v-model="ruleForm.E_rc_71"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  v-model="ruleForm.E_rc_72"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_73"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  v-model="ruleForm.E_rc_74"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_75"></textarea>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              <textarea v-model="ruleForm.E_rc_76"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  v-model="ruleForm.E_rc_77"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_78"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  v-model="ruleForm.E_rc_79"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_80"></textarea>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              <textarea v-model="ruleForm.E_rc_81"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  v-model="ruleForm.E_rc_82"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_83"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  v-model="ruleForm.E_rc_84"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_85"></textarea>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              <textarea v-model="ruleForm.E_rc_86"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  v-model="ruleForm.E_rc_87"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_88"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  v-model="ruleForm.E_rc_89"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_90"></textarea>
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              <textarea v-model="ruleForm.E_rc_91"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  v-model="ruleForm.E_rc_92"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_93"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  v-model="ruleForm.E_rc_94"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_95"></textarea>
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>
              <textarea v-model="ruleForm.E_rc_96"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  v-model="ruleForm.E_rc_97"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_98"></textarea>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 172px; height: 20px"
              >
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  v-model="ruleForm.E_rc_99"
                  style="width: 150px; height: 30px; line-height: 20px"
                />
              </span>
            </td>
            <td>
              <textarea v-model="ruleForm.E_rc_100"></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <label>备注</label>
            </td>
            <td colspan="5" style="text-align: left">
              <textarea
                v-model="ruleForm.E_rc_101"
                style="width: 100%; height: 50px"
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script>
import {
  $on,
  $off,
  $once,
  $emit,
} from '../../../../../../utils/gogocodeTransfer'
export default {
  props: {
    formData: Object,
    btnType: String,
  },
  components: {},
  data() {
    return {
      dataContent: '',
      ruleForm: {
        InspectionSTime: '',
        InspectionETime: '',
        E_rc_1: '',
        E_rc_2: '',
        E_rc_3: '',
        E_rc_4: '',
        E_rc_5: '',
        E_rc_6: '',
        E_rc_7: '',
        E_rc_8: '',
        E_rc_9: '',
        E_rc_10: '',
        E_rc_11: '',
        E_rc_12: '',
        E_rc_13: '',
        E_rc_14: '',
        E_rc_15: '',
        E_rc_16: '',
        E_rc_17: '',
        E_rc_18: '',
        E_rc_19: '',
        E_rc_20: '',
        E_rc_21: '',
        E_rc_22: '',
        E_rc_23: '',
        E_rc_24: '',
        E_rc_25: '',
        E_rc_26: '',
        E_rc_27: '',
        E_rc_28: '',
        E_rc_29: '',
        E_rc_30: '',
        E_rc_31: '',
        E_rc_32: '',
        E_rc_33: '',
        E_rc_34: '',
        E_rc_35: '',
        E_rc_36: '',
        E_rc_37: '',
        E_rc_38: '',
        E_rc_39: '',
        E_rc_40: '',
        E_rc_41: '',
        E_rc_42: '',
        E_rc_43: '',
        E_rc_44: '',
        E_rc_45: '',
        E_rc_46: '',
        E_rc_47: '',
        E_rc_48: '',
        E_rc_49: '',
        E_rc_50: '',
        E_rc_51: '',
        E_rc_52: '',
        E_rc_53: '',
        E_rc_54: '',
        E_rc_55: '',
        E_rc_56: '',
        E_rc_57: '',
        E_rc_58: '',
        E_rc_59: '',
        E_rc_60: '',
        E_rc_61: '',
        E_rc_62: '',
        E_rc_63: '',
        E_rc_64: '',
        E_rc_65: '',
        E_rc_66: '',
        E_rc_67: '',
        E_rc_68: '',
        E_rc_69: '',
        E_rc_70: '',
        E_rc_71: '',
        E_rc_72: '',
        E_rc_73: '',
        E_rc_74: '',
        E_rc_75: '',
        E_rc_76: '',
        E_rc_77: '',
        E_rc_78: '',
        E_rc_79: '',
        E_rc_80: '',
        E_rc_81: '',
        E_rc_82: '',
        E_rc_83: '',
        E_rc_84: '',
        E_rc_85: '',
        E_rc_86: '',
        E_rc_87: '',
        E_rc_88: '',
        E_rc_89: '',
        E_rc_90: '',
        E_rc_91: '',
        E_rc_92: '',
        E_rc_93: '',
        E_rc_94: '',
        E_rc_95: '',
        E_rc_96: '',
        E_rc_97: '',
        E_rc_98: '',
        E_rc_99: '',
        E_rc_100: '',
        E_rc_101: '',
        yj_1: '',
        yj_2: '',
      },
    }
  },
  // computed: {
  //     formSubmitData: function () {
  //         return this.$emit("formSubmit",this.Qs.stringify(this.ruleForm));
  //     }
  // },
  watch: {
    btnType(val, oldVal) {
      var count = 0
      var voidArrMSG = []

      //每行需要非空验证，验证规则：每行只要有一个input有填写内容，则该行所有项必填，其他行不受限制
      $('#ASEmergencytb tbody tr').each(function (index, item) {
        //遍历每一行的所有单元格
        count = 0
        if (index >= 45 && index < 65) {
          //不知道为什么 有66个tr  第1-22个tr和23-44和tr和第45-66个tr内容一摸一样
          $(item)
            .find('td')
            .each(function (i, itm) {
              //遍历每一行的所有单元格
              if (i > 0) {
                debugger
                // console.log($(itm).find("textarea ").val());
                if (
                  $(itm).find('textarea ').val() == '' ||
                  $(itm).find('textarea ').val() == undefined
                ) {
                  count++
                }
              }
            })
          if (count > 0 && count < 5) {
            //要么全部填写，要么全部没填写，否则验证不通过 0-9之间的则判定为填写不完整
            voidArrMSG.push(
              '第' + (index - 44) + '行存在未填写完的项，请先填写完后成在操作！'
            )
          }
        }
      })
      console.log(voidArrMSG)
      if (voidArrMSG.length <= 0) {
        if (val == '保存') {
          $emit(this, 'formSava', JSON.stringify(this.ruleForm))
        }
        if (val == '提交') {
          $emit(this, 'formSubmit', JSON.stringify(this.ruleForm))
        }
      } else {
        $emit(this, 'reSet', '')
        var msg = ''
        for (var i = 0; i < voidArrMSG.length; i++) {
          msg += voidArrMSG[i]
        }
        this.$message({
          message: msg,
          type: 'error', //warning,success,info,error
        })
      }
    },
    formData(val, oldVal) {
      if (val.content != null) {
        this.ruleForm = JSON.parse(val.content)
      }
    },
  },
  mounted() {
    //this.getNowTime();
  },
  methods: {
    //初始化时间
    getNowTime() {
      var d = new Date()
      var dyear = d.getFullYear() //得到年份
      var dmonth = d.getMonth() //得到月份
      dmonth = dmonth + 1
      dmonth = dmonth.toString().padStart(2, '0')
      var dTime = d.getTime()
      var dhour = d.getHours()
      dhour = dhour.toString().padStart(2, '0')
      var dminutes = d.getMinutes()
      dminutes = dminutes.toString().padStart(2, '0')
      var dseconds = d.getSeconds()
      dseconds = dseconds.toString().padStart(2, '0')
      var ddate = d.getDate() //得到日期
      ddate = ddate.toString().padStart(2, '0')
      var dbeforedefaultDate = `${dyear}-${dmonth}-${ddate} ${dhour}:${dminutes}:${dseconds}`

      //1个小时后
      var myDate = new Date()
      var myDateyear = myDate.getFullYear() //得到年份
      var myDatemonth = myDate.getMonth() //得到月份
      myDatemonth = myDatemonth + 1
      myDatemonth = myDatemonth.toString().padStart(2, '0')
      var myDateTime = myDate.getTime()
      var hour = myDate.getHours() + 1
      hour = hour.toString().padStart(2, '0')
      var minutes = myDate.getMinutes()
      minutes = minutes.toString().padStart(2, '0')
      var seconds = myDate.getSeconds()
      seconds = seconds.toString().padStart(2, '0')
      var myDatedate = myDate.getDate() //得到日期
      myDatedate = myDatedate.toString().padStart(2, '0')
      var afteOneHourDate = `${myDateyear}-${myDatemonth}-${myDatedate} ${hour}:${minutes}:${seconds}`
      //运维任务统计
      this.ruleForm['yj_1'] = dbeforedefaultDate
      this.ruleForm['yj_2'] = afteOneHourDate
    },
  },
  emits: ['formSava', 'formSubmit', 'reSet'],
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
