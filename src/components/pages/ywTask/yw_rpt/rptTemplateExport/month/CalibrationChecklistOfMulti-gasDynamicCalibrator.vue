<template>
  <div>
    <form id="ASEmergency">

      <div style="float:left;margin:15px 45px; " >
             巡检开始时间：
            <el-date-picker v-model="ruleForm.yj_1" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择时间" :clearable=false></el-date-picker>
             &nbsp; &nbsp; &nbsp; 
             巡检结束时间：
            <el-date-picker v-model="ruleForm.yj_2" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择时间" :clearable=false></el-date-picker>
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
              <textarea  v-model="ruleForm.E_rc_1"></textarea> 
            </td>
            <td>
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                  <textarea
                  type="text" v-model="ruleForm.E_rc_2"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />          
                <!--<el-date-picker v-model="ruleForm.E_rc_2" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择时间"></el-date-picker>-->
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_3"></textarea>
            </td>
            <td>
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                  <textarea
                  type="text" v-model="ruleForm.E_rc_4"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />          
                 <!--<el-date-picker v-model="ruleForm.E_rc_4" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择时间"></el-date-picker>-->
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_5"></textarea>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>
              <textarea  v-model="ruleForm.E_rc_6"></textarea>
            </td>
            <td>
              <span class="combo datebox height30" style="width: 172px; height: 20px;">   
                  <textarea
                  type="text" v-model="ruleForm.E_rc_7"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />                 
                <!--<el-date-picker v-model="ruleForm.E_rc_7" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择时间"></el-date-picker>-->
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_8"></textarea>
            </td>
            <td>
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                   <textarea
                  type="text" v-model="ruleForm.E_rc_9"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />            
                 <!--<el-date-picker v-model="ruleForm.E_rc_9" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择时间"></el-date-picker>-->
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_10"></textarea>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>
              <textarea  v-model="ruleForm.E_rc_11"></textarea>
            </td>
            <td>
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                  <textarea
                  type="text" v-model="ruleForm.E_rc_12"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />       
                <!--<el-date-picker v-model="ruleForm.E_rc_12" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择时间"></el-date-picker>-->
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_13"></textarea>
            </td>
            <td>
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                 <textarea
                  type="text" v-model="ruleForm.E_rc_14"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />       
                <!--<el-date-picker v-model="ruleForm.E_rc_14" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择时间"></el-date-picker>-->
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_15"></textarea>
            </td>
          </tr>

          <tr>
            <td>4</td>
            <td>
              <textarea  v-model="ruleForm.E_rc_16"></textarea>
            </td>
            <td>
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                 <textarea
                  type="text" v-model="ruleForm.E_rc_17"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />    
                <!--<el-date-picker v-model="ruleForm.E_rc_17" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择时间"></el-date-picker>-->
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_18"></textarea>
            </td>
            <td>             
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                  <textarea
                  type="text" v-model="ruleForm.E_rc_19"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />        
                 <!--<el-date-picker v-model="ruleForm.E_rc_19" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择时间"></el-date-picker>  -->            
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_20"></textarea>
            </td>
          </tr>

          <tr>
            <td>5</td>
            <td>
              <textarea  v-model="ruleForm.E_rc_21"></textarea>
            </td>
            <td>             
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                               <textarea
                  type="text" v-model="ruleForm.E_rc_22"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />  
                <!--<el-date-picker v-model="ruleForm.E_rc_22" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择时间"></el-date-picker>   -->            
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_23"></textarea>
            </td>
            <td>             
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                                               <textarea
                  type="text" v-model="ruleForm.E_rc_24"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px;"
                /> 
                 
                 <!--<el-date-picker v-model="ruleForm.E_rc_24" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择时间"></el-date-picker>   -->   
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_25"></textarea>
            </td>
          </tr>

          <tr>
            <td>6</td>
            <td>
              <textarea  v-model="ruleForm.E_rc_26"></textarea>
            </td>
            <td>
             
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off" v-model="ruleForm.E_rc_27"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
               
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_28"></textarea>
            </td>
            <td>
             
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text" v-model="ruleForm.E_rc_29"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
               
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_30"></textarea>
            </td>
          </tr>

          <tr>
            <td>7</td>
            <td>
              <textarea  v-model="ruleForm.E_rc_31"></textarea>
            </td>
            <td>
              
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text" v-model="ruleForm.E_rc_32"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
                
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_33"></textarea>
            </td>
            <td>
              
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off" v-model="ruleForm.E_rc_34"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
                
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_35"></textarea>
            </td>
          </tr>

          <tr>
            <td>8</td>
            <td>
              <textarea  v-model="ruleForm.E_rc_36"></textarea>
            </td>
            <td>
              
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off" v-model="ruleForm.E_rc_37"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
                
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_38"></textarea>
            </td>
            <td>
              
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off" v-model="ruleForm.E_rc_39"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
                
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_40"></textarea>
            </td>
          </tr>

          <tr>
            <td>9</td>
            <td>
              <textarea  v-model="ruleForm.E_rc_41"></textarea>
            </td>
            <td>
             
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off" v-model="ruleForm.E_rc_42"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
               
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_43"></textarea>
            </td>
            <td>
             
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off" v-model="ruleForm.E_rc_44"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
                
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_45"></textarea>
            </td>
          </tr>

          <tr>
            <td>10</td>
            <td>
              <textarea  v-model="ruleForm.E_rc_46"></textarea>
            </td>
            <td>
              
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text" v-model="ruleForm.E_rc_47"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
                
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_48"></textarea>
            </td>
            <td>
              
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text" v-model="ruleForm.E_rc_49"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
                
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_50"></textarea>
            </td>
          </tr>

          <tr>
            <td>11</td>
            <td>
              <textarea  v-model="ruleForm.E_rc_51"></textarea>
            </td>
            <td>
           
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text" v-model="ruleForm.E_rc_52"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
               
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_53"></textarea>
            </td>
            <td>
         
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text" v-model="ruleForm.E_rc_54"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
                
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_55"></textarea>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <textarea  v-model="ruleForm.E_rc_56"></textarea>
            </td>
            <td>
              
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text" v-model="ruleForm.E_rc_57"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
                
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_58"></textarea>
            </td>
            <td>
              
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text" v-model="ruleForm.E_rc_59"
                  class="combo-text validatebox-text"
                  autocomplete="off"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
                
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_60"></textarea>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              <textarea  v-model="ruleForm.E_rc_61"></textarea>
            </td>
            <td>
              
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off" v-model="ruleForm.E_rc_62"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
               
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_63"></textarea>
            </td>
            <td>
              
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off" v-model="ruleForm.E_rc_64"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
                
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_65"></textarea>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>
              <textarea  v-model="ruleForm.E_rc_66"></textarea>
            </td>
            <td>
             
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off" v-model="ruleForm.E_rc_67"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
                
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_68"></textarea>
            </td>
            <td>
              
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off" v-model="ruleForm.E_rc_69"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
               
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_70"></textarea>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              <textarea  v-model="ruleForm.E_rc_71"></textarea>
            </td>
            <td>
              
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off" v-model="ruleForm.E_rc_72"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
                
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_73"></textarea>
            </td>
            <td>
              
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off" v-model="ruleForm.E_rc_74"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
                
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_75"></textarea>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>
              <textarea  v-model="ruleForm.E_rc_76"></textarea>
            </td>
            <td>
             
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off" v-model="ruleForm.E_rc_77"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
                
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_78"></textarea>
            </td>
            <td>
              
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off" v-model="ruleForm.E_rc_79"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
                
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_80"></textarea>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>
              <textarea  v-model="ruleForm.E_rc_81"></textarea>
            </td>
            <td>
              
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off" v-model="ruleForm.E_rc_82"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
                
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_83"></textarea>
            </td>
            <td>
              
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off" v-model="ruleForm.E_rc_84"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
                
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_85"></textarea>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              <textarea  v-model="ruleForm.E_rc_86"></textarea>
            </td>
            <td>
              
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off" v-model="ruleForm.E_rc_87"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
                
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_88"></textarea>
            </td>
            <td>
              
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off" v-model="ruleForm.E_rc_89"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
                
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_90"></textarea>
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>
              <textarea  v-model="ruleForm.E_rc_91"></textarea>
            </td>
            <td>
              
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off" v-model="ruleForm.E_rc_92"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
               
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_93"></textarea>
            </td>
            <td>
             
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off" v-model="ruleForm.E_rc_94"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
                
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_95"></textarea>
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>
              <textarea  v-model="ruleForm.E_rc_96"></textarea>
            </td>
            <td>
              
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off" v-model="ruleForm.E_rc_97"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
                
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_98"></textarea>
            </td>
            <td>
              
              <span class="combo datebox height30" style="width: 172px; height: 20px;">
                <textarea
                  type="text"
                  class="combo-text validatebox-text"
                  autocomplete="off" v-model="ruleForm.E_rc_99"
                  style="width: 150px; height: 30px; line-height: 20px;"
                />
               
              </span>
            </td>
            <td>
              <textarea  v-model="ruleForm.E_rc_100"></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <label>备注</label>
            </td>
            <td colspan="5" style="text-align:left;">
              <textarea  v-model="ruleForm.E_rc_101" style="width:100%;height:50px;"></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>
<script>
export default {
    props:{
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