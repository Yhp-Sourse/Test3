<template>
    <div>
        <form id="SGUReplace">         
          <div style="float:left;margin:15px 45px; " >
             巡检时间：
            <el-date-picker v-model="ruleForm.yj_1" type="date" value-format="yyyy-MM-dd" placeholder="选择时间" :clearable=false></el-date-picker>
             &nbsp; &nbsp; &nbsp; 
             <!-- 巡检结束时间：
            <el-date-picker v-model="ruleForm.yj_2" type="date" value-format="yyyy-MM-dd" placeholder="选择时间" :clearable=false></el-date-picker> -->
          </div>

            <table id="SGUReplacetb">
                <tbody>
                    <tr>
                        <td rowspan="2" >日期</td>
                        <td rowspan="2">气体名称</td>
                        <td rowspan="2">批号</td>
                        <td rowspan="2">有效期<br />截止时间</td>
                        <td colspan="2">起止时间</td>
                        <td rowspan="2">气压<br />（MPa）</td>
                        <td rowspan="2">气体使<br />用状态</td>
                        <td rowspan="2">使用人</td>
                    </tr>

                    <tr>
                        <td>开始</td>
                        <td>结束</td>
                    </tr>


                    <tr>
                        <td>
                            <span style="width: 40px; height: 20px">
                                <input v-model="ruleForm.bq_1" type="text" class="td_input" id="bq_1" style="height: 30px">
                                <!--<el-date-picker v-model="ruleForm.bq_1" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>

                        <td>
                            <input v-model="ruleForm.bq_2" type="text" class="td_input" id="E_bq_2" style="height: 30px">                          
                        </td>

                        <td style="width: 150px; height: 20px">
                            <input v-model="ruleForm.bq_3"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_3"
                                   style="height: 30px" />
                        </td>

                        <td>
                            <span class="combo datebox height30"  style="width: 100px; height: 20px">
                                 <input v-model="ruleForm.bq_4" type="text" class="td_input" id="bq_4" style="height: 30px">
                                <!--<el-date-picker v-model="ruleForm.bq_4" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>

                        <td>
                            <span class="combo datebox height30" style="width: 100px; height: 20px">
                                 <input v-model="ruleForm.bq_5" type="text" class="td_input" id="bq_5" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_5" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>

                        <td>
                            <span class="combo datebox height30" style="width: 100px; height: 20px">
                                  <input v-model="ruleForm.bq_6" type="text" class="td_input" id="bq_6" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_6" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>

                        <td >
                            <input v-model="ruleForm.bq_7"
                            @blur='checkKeydown("bq_7",1)'
                                   type="text"
                                   class="td_input"
                                   id="E_bq_7"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_8"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_8"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_9"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_9"
                                   style="height: 30px" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span class="combo datebox height30"  style="width: 174px; height: 20px">
                                <input v-model="ruleForm.bq_10" type="text" class="td_input" id="bq_1" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_10" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_11"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_11"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_12"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_12"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_13" type="text" class="td_input" id="bq_13" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_13" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_14" type="text" class="td_input" id="bq_14" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_14" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_15" type="text" class="td_input" id="bq_15" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_15" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> --> 
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_16"
                            @blur='checkKeydown("bq_16",1)'
                                   type="text"
                                   class="td_input"
                                   id="E_bq_16"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_17"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_17"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_18"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_18"
                                   style="height: 30px" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_19" type="text" class="td_input" id="bq_19" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_19" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>  -->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_20"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_20"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_21"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_21"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                  <input v-model="ruleForm.bq_22" type="text" class="td_input" id="bq_22" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_22" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->    
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                  <input v-model="ruleForm.bq_23" type="text" class="td_input" id="bq_23" style="height: 30px">
                                <!--<el-date-picker v-model="ruleForm.bq_23" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->    
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                  <input v-model="ruleForm.bq_24" type="text" class="td_input" id="bq_24" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_24" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->   
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_25"
                            @blur='checkKeydown("bq_25",1)'
                                   type="text"
                                   class="td_input"
                                   id="E_bq_25"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_26"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_26"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_27"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_27"
                                   style="height: 30px" />
                        </td>
                    </tr>


                    <tr>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_28" type="text" class="td_input" id="bq_28" style="height: 30px">
                                  <!--<el-date-picker v-model="ruleForm.bq_28" type="date"   placeholder="选择时间" :clearable=false></el-date-picker> --> 
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_29"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_29"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_30"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_30"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                  <input v-model="ruleForm.bq_31" type="text" class="td_input" id="bq_31" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_31" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>  -->                            
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_32" type="text" class="td_input" id="bq_32" style="height: 30px">
                                <!--<el-date-picker v-model="ruleForm.bq_32" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>  -->
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_33" type="text" class="td_input" id="bq_33" style="height: 30px">
                                  <!--<el-date-picker v-model="ruleForm.bq_33" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>  -->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_34"
                            @blur='checkKeydown("bq_34",1)'
                                   type="text"
                                   class="td_input"
                                   id="E_bq_34"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_35"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_35"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_36"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_36"
                                   style="height: 30px" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_37" type="text" class="td_input" id="bq_37" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_37" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>-->  
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_38"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_38"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_39"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_39"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                  <input v-model="ruleForm.bq_40" type="text" class="td_input" id="bq_40" style="height: 30px">
                                  <!--<el-date-picker v-model="ruleForm.bq_40" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>  -->
                            </span>
                        </td>
                        <td>

                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_41" type="text" class="td_input" id="bq_41" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_41" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->   
                            </span>
                        </td>
                        <td>

                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                  <input v-model="ruleForm.bq_42" type="text" class="td_input" id="bq_42" style="height: 30px">
                                   <!--<el-date-picker v-model="ruleForm.bq_42" type="datetime" format="yyyy-MM-dd HH:mm"   placeholder="选择时间" :clearable=false></el-date-picker> -->  
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_43"
                            @blur='checkKeydown("bq_43",1)'
                                   type="text"
                                   class="td_input"
                                   id="E_bq_43"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_44"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_44"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_45"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_45"
                                   style="height: 30px" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                    <input v-model="ruleForm.bq_46" type="text" class="td_input" id="bq_46" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_46" type="date"   placeholder="选择时间" :clearable=false></el-date-picker> --> 
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_47"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_47"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_48"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_48"
                                   style="height: 30px" />
                        </td>
                        <td>

                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                    <input v-model="ruleForm.bq_49" type="text" class="td_input" id="bq_49" style="height: 30px">
                                  <!--<el-date-picker v-model="ruleForm.bq_49" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->   
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_50" type="text" class="td_input" id="bq_50" style="height: 30px">
                                <!--<el-date-picker v-model="ruleForm.bq_50" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->      
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                  <input v-model="ruleForm.bq_51" type="text" class="td_input" id="bq_51" style="height: 30px">
                                <!--<el-date-picker v-model="ruleForm.bq_51" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_52"
                            @blur='checkKeydown("bq_52",1)'
                                   type="text"
                                   class="td_input"
                                   id="E_bq_52"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_53"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_53"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_54"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_54"
                                   style="height: 30px" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span class="combo datebox height" style="width: 174px; height: 20px">
                                  <input v-model="ruleForm.bq_55" type="text" class="td_input" id="bq_55" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_55" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>-->  
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_56"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_56"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_57"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_57"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <span class="combo datebox height30" style="width: 174px; height: 20px">
                                 <input v-model="ruleForm.bq_58" type="text" class="td_input" id="bq_58" style="height: 30px">
                               <!-- <el-date-picker v-model="ruleForm.bq_58" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->   
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30" style="width: 174px; height: 20px">
                                 <input v-model="ruleForm.bq_59" type="text" class="td_input" id="bq_59" style="height: 30px">
                                <!--<el-date-picker v-model="ruleForm.bq_59" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->   
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_60" type="text" class="td_input" id="bq_60" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_60" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_61"
                            @blur='checkKeydown("bq_61",1)'
                                   type="text"
                                   class="td_input"
                                   id="E_bq_61"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_62"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_62"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_63"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_63"
                                   style="height: 30px" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                    <input v-model="ruleForm.bq_64" type="text" class="td_input" id="bq_64" style="height: 30px">
                                 <!-- <el-date-picker v-model="ruleForm.bq_64" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>  -->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_65"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_65"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_66"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_66"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_67" type="text" class="td_input" id="bq_67" style="height: 30px">
                                  <!--<el-date-picker v-model="ruleForm.bq_67" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->           
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                  <input v-model="ruleForm.bq_68" type="text" class="td_input" id="bq_68" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_68" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->             
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                  <input v-model="ruleForm.bq_69" type="text" class="td_input" id="bq_69" style="height: 30px">
                                <!--<el-date-picker v-model="ruleForm.bq_69" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>  -->            
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_70"
                            @blur='checkKeydown("bq_70",1)'
                                   type="text"
                                   class="td_input"
                                   id="E_bq_70"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_71"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_71"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_72"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_72"
                                   style="height: 30px" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_73" type="text" class="td_input" id="bq_73" style="height: 30px">
                                <!--<el-date-picker v-model="ruleForm.bq_73" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>  -->       
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_74"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_74"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_75"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_75"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_76" type="text" class="td_input" id="bq_76" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_76" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->           
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_77" type="text" class="td_input" id="bq_77" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_77" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->            
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                    <input v-model="ruleForm.bq_78" type="text" class="td_input" id="bq_78" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_78" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> --> 
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_79"
                            @blur='checkKeydown("bq_79",1)'
                                   type="text"
                                   class="td_input"
                                   id="E_bq_79"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_80"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_80"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_81"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_81"
                                   style="height: 30px" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                    <input v-model="ruleForm.bq_82" type="text" class="td_input" id="bq_82" style="height: 30px">
                                <!--<el-date-picker v-model="ruleForm.bq_82" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>  --> 
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_83"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_83"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_84"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_84"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                    <input v-model="ruleForm.bq_85" type="text" class="td_input" id="bq_85" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_85" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->                                   
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_86" type="text" class="td_input" id="bq_86" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_86" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_87" type="text" class="td_input" id="bq_87" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_87" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_88"
                            @blur='checkKeydown("bq_88",1)'
                                   type="text"
                                   class="td_input"
                                   id="E_bq_88"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_89"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_89"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_90"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_90"
                                   style="height: 30px" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_91" type="text" class="td_input" id="bq_91" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_91" type="date"   placeholder="选择时间" :clearable=false></el-date-picker> -->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_92"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_92"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_93"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_93"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_94" type="text" class="td_input" id="bq_94" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_94" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_95" type="text" class="td_input" id="bq_95" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_95" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>--> 
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_96" type="text" class="td_input" id="bq_96" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_96" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_97"
                            @blur='checkKeydown("bq_97",1)'
                                   type="text"
                                   class="td_input"
                                   id="E_bq_97"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_98"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_98"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_99"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_99"
                                   style="height: 30px" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_100" type="text" class="td_input" id="bq_100" style="height: 30px">
                                  <!--<el-date-picker v-model="ruleForm.bq_100" type="date"   placeholder="选择时间" :clearable=false></el-date-picker> -->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_101"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_101"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_102"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_102"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_103" type="text" class="td_input" id="bq_103" style="height: 30px">
                                  <!--<el-date-picker v-model="ruleForm.bq_103" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_104" type="text" class="td_input" id="bq_104" style="height: 30px">
                                <!--<el-date-picker v-model="ruleForm.bq_104" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                    <input v-model="ruleForm.bq_105" type="text" class="td_input" id="bq_105" style="height: 30px">
                                  <!--<el-date-picker v-model="ruleForm.bq_105" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_106"
                            @blur='checkKeydown("bq_106",1)'
                                   type="text"
                                   class="td_input"
                                   id="E_bq_106"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_107"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_107"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_108"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_108"
                                   style="height: 30px" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_109" type="text" class="td_input" id="bq_109" style="height: 30px">
                                <!--<el-date-picker v-model="ruleForm.bq_109" type="date"   placeholder="选择时间" :clearable=false></el-date-picker> -->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_110"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_110"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_111"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_111"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_112" type="text" class="td_input" id="bq_112" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_112" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_113" type="text" class="td_input" id="bq_113" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_113" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_114" type="text" class="td_input" id="bq_114" style="height: 30px">
                                <!--<el-date-picker v-model="ruleForm.bq_114" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_115"
                            @blur='checkKeydown("bq_115",1)'
                                   type="text"
                                   class="td_input"
                                   id="E_bq_115"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_116"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_116"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_117"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_117"
                                   style="height: 30px" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_118" type="text" class="td_input" id="bq_118" style="height: 30px">
                                   <!--<el-date-picker v-model="ruleForm.bq_118" type="date"   placeholder="选择时间" :clearable=false></el-date-picker> -->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_119"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_119"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_120"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_120"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_121" type="text" class="td_input" id="bq_121" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_121" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                  <input v-model="ruleForm.bq_122" type="text" class="td_input" id="bq_122" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_122" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_123" type="text" class="td_input" id="bq_123" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_123" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_124"
                            @blur='checkKeydown("bq_124",1)'
                                   type="text"
                                   class="td_input"
                                   id="E_bq_124"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_125"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_125"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_126"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_126"
                                   style="height: 30px" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_127" type="text" class="td_input" id="bq_127" style="height: 30px">
                                   <!--<el-date-picker v-model="ruleForm.bq_127" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>--> 
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_128"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_128"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_129"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_129"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                  <input v-model="ruleForm.bq_130" type="text" class="td_input" id="bq_130" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_130" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_131" type="text" class="td_input" id="bq_131" style="height: 30px">
                                <!--<el-date-picker v-model="ruleForm.bq_131" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_132" type="text" class="td_input" id="bq_132" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_132" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_133"
                            @blur='checkKeydown("bq_133",1)'
                                   type="text"
                                   class="td_input"
                                   id="E_bq_133"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_134"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_134"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_135"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_135"
                                   style="height: 30px" />
                        </td>
                    </tr>


                    <tr>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_136" type="text" class="td_input" id="bq_136" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_136" type="date"   placeholder="选择时间" :clearable=false></el-date-picker> -->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_137"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_137"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_138"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_138"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                  <input v-model="ruleForm.bq_139" type="text" class="td_input" id="bq_139" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_139" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_140" type="text" class="td_input" id="bq_140" style="height: 30px">
                                <!--<el-date-picker v-model="ruleForm.bq_140" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_141" type="text" class="td_input" id="bq_140" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_141" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_142"
                            @blur='checkKeydown("bq_142",1)'
                                   type="text"
                                   class="td_input"
                                   id="E_bq_142"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_143"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_143"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_144"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_144"
                                   style="height: 30px" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_145" type="text" class="td_input" id="bq_145" style="height: 30px">
                                  <!--<el-date-picker v-model="ruleForm.bq_145" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_146"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_146"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_147"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_147"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_148" type="text" class="td_input" id="bq_148" style="height: 30px">
                                  <!--<el-date-picker v-model="ruleForm.bq_148" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_149" type="text" class="td_input" id="bq_149" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_149" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>--> 
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_150" type="text" class="td_input" id="bq_150" style="height: 30px">
                                  <!--<el-date-picker v-model="ruleForm.bq_150" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_151"
                            @blur='checkKeydown("bq_151",1)'
                                   type="text"
                                   class="td_input"
                                   id="E_bq_151"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_152"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_152"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_153"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_153"
                                   style="height: 30px" />
                        </td>
                    </tr>

                    
                    <tr>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_154" type="text" class="td_input" id="bq_154" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_154" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_155"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_155"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_156"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_156"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_157" type="text" class="td_input" id="bq_157" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_157" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_158" type="text" class="td_input" id="bq_158" style="height: 30px">
                                <!--<el-date-picker v-model="ruleForm.bq_158" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                  <input v-model="ruleForm.bq_159" type="text" class="td_input" id="bq_159" style="height: 30px">
                                <!--<el-date-picker v-model="ruleForm.bq_159" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_160"
                            @blur='checkKeydown("bq_160",1)'
                                   type="text"
                                   class="td_input"
                                   id="E_bq_160"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_161"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_161"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_162"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_162"
                                   style="height: 30px" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                  <input v-model="ruleForm.bq_163" type="text" class="td_input" id="bq_163" style="height: 30px">
                                  <!--<el-date-picker v-model="ruleForm.bq_163" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_164"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_164"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_165"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_165"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                    <input v-model="ruleForm.bq_166" type="text" class="td_input" id="bq_166" style="height: 30px">
                                  <!--<el-date-picker v-model="ruleForm.bq_166" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                    <input v-model="ruleForm.bq_167" type="text" class="td_input" id="bq_167" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_167" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_168" type="text" class="td_input" id="bq_168" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_168" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_169"
                            @blur='checkKeydown("bq_169",1)'
                                   type="text"
                                   class="td_input"
                                   id="E_bq_169"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_170"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_170"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_171"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_171"
                                   style="height: 30px" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_172" type="text" class="td_input" id="bq_172" style="height: 30px">
                               <!--<el-date-picker v-model="ruleForm.bq_172" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_173"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_173"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_174"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_174"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                    <input v-model="ruleForm.bq_175" type="text" class="td_input" id="bq_175" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_175" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                  <input v-model="ruleForm.bq_176" type="text" class="td_input" id="bq_176" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_176" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
                            </span>
                        </td>
                        <td>
                            <span class="combo datebox height30"
                                  style="width: 174px; height: 20px">
                                   <input v-model="ruleForm.bq_177" type="text" class="td_input" id="bq_177" style="height: 30px">
                                 <!--<el-date-picker v-model="ruleForm.bq_177" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->    
                            </span>
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_178"
                            @blur='checkKeydown("bq_178",1)'
                                   type="text"
                                   class="td_input"
                                   id="E_bq_178"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_179"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_179"
                                   style="height: 30px" />
                        </td>
                        <td>
                            <input v-model="ruleForm.bq_180"
                                   type="text"
                                   class="td_input"
                                   id="E_bq_180"
                                   style="height: 30px" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
</template>
<script>
import changeNumber2 from '../../../../../../assets/JS/changeNumber2.js'

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
                "bq_1": "",
                "bq_2": "",
                "bq_3": "",
                "bq_4": "",
                "bq_5": "",
                "bq_6": "",
                "bq_7": "",
                "bq_8": "",
                "bq_9": "",
                "bq_10": "",
                "bq_11": "",
                "bq_12": "",
                "bq_13": "",
                "bq_14": "",
                "bq_15": "",
                "bq_16": "",
                "bq_17": "",
                "bq_18": "",
                "bq_19": "",
                "bq_20": "",
                "bq_21": "",
                "bq_22": "",
                "bq_23": "",
                "bq_24": "",
                "bq_25": "",
                "bq_26": "",
                "bq_27": "",
                "bq_28": "",
                "bq_29": "",
                "bq_30": "",
                "bq_31": "",
                "bq_32": "",
                "bq_33": "",
                "bq_34": "",
                "bq_35": "",
                "bq_36": "",
                "bq_37": "",
                "bq_38": "",
                "bq_39": "",
                "bq_40": "",
                "bq_41": "",
                "bq_42": "",
                "bq_43": "",
                "bq_44": "",
                "bq_45": "",
                "bq_46": "",
                "bq_47": "",
                "bq_48": "",
                "bq_49": "",
                "bq_50": "",
                "bq_51": "",
                "bq_52": "",
                "bq_53": "",
                "bq_54": "",
                "bq_55": "",
                "bq_56": "",
                "bq_57": "",
                "bq_58": "",
                "bq_59": "",
                "bq_60": "",
                "bq_61": "",
                "bq_62": "",
                "bq_63": "",
                "bq_64": "",
                "bq_65": "",
                "bq_66": "",
                "bq_67": "",
                "bq_68": "",
                "bq_69": "",
                "bq_70": "",
                "bq_71": "",
                "bq_72": "",
                "bq_73": "",
                "bq_74": "",
                "bq_75": "",
                "bq_76": "",
                "bq_77": "",
                "bq_78": "",
                "bq_79": "",
                "bq_80": "",
                "bq_81": "",
                "bq_82": "",
                "bq_83": "",
                "bq_84": "",
                "bq_85": "",
                "bq_86": "",
                "bq_87": "",
                "bq_88": "",
                "bq_89": "",
                "bq_90": "",
                "bq_91": "",
                "bq_92": "",
                "bq_93": "",
                "bq_94": "",
                "bq_95": "",
                "bq_96": "",
                "bq_97": "",
                "bq_98": "",
                "bq_99": "",
                "bq_100": "",
                "bq_101": "",
                "bq_102": "",
                "bq_103": "",
                "bq_104": "",
                "bq_105": "",
                "bq_106": "",
                "bq_107": "",
                "bq_108": "",
                "bq_109": "",
                "bq_110": "",
                "bq_111": "",
                "bq_112": "",
                "bq_113": "",
                "bq_114": "",
                "bq_115": "",
                "bq_116": "",
                "bq_117": "",
                "bq_118": "",
                "bq_119": "",
                "bq_120": "",
                "bq_121": "",
                "bq_122": "",
                "bq_123": "",
                "bq_124": "",
                "bq_125": "",
                "bq_126": "",
                "bq_127": "",
                "bq_128": "",
                "bq_129": "",
                "bq_130": "",
                "bq_131": "",
                "bq_132": "",
                "bq_133": "",
                "bq_134": "",
                "bq_135": "",
                "bq_136": "",
                "bq_137": "",
                "bq_138": "",
                "bq_139": "",
                "bq_140": "",
                "bq_141": "",
                "bq_142": "",
                "bq_143": "",
                "bq_144": "",
                "bq_145": "",
                "bq_146": "",
                "bq_147": "",
                "bq_148": "",
                "bq_149": "",
                "bq_150": "",
                "bq_151": "",
                "bq_152": "",
                "bq_153": "",
                "bq_154": "",
                "bq_155": "",
                "bq_156": "",
                "bq_157": "",
                "bq_158": "",
                "bq_159": "",
                "bq_160": "",
                "bq_161": "",
                "bq_162": "",
                "bq_163": "",
                "bq_164": "",
                "bq_165": "",
                "bq_166": "",
                "bq_167": "",
                "bq_168": "",
                "bq_169": "",
                "bq_170": "",
                "bq_171": "",
                "bq_172": "",
                "bq_173": "",
                "bq_174": "",
                "bq_175": "",
                "bq_176": "",
                "bq_177": "",
                "bq_178": "",
                "bq_179": "",
                "bq_180": "",
                "yj_1": "",
                "yj_2": "",
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
            $("#SGUReplacetb tbody tr").each(function (index, item) {
               //遍历每一行的所有单元格
                count=0;
                if(index>=45 && index<66){//不知道为什么 有66个tr  第1-22个tr和23-44和tr和第45-66个tr内容一摸一样
                    $(item).find("td").each(function (i, itm) {
                       //遍历每一行的所有单元格
                        console.log($(itm).find("input").val());
                        if($(itm).find("input").val()=="" || $(itm).find("input").val()=="undefined"){
                            count++;
                        }
                    });  
                    if(count>0 && count<9){//要么全部填写，要么全部没填写，否则验证不通过 0-9之间的则判定为填写不完整
                        voidArrMSG.push("第"+(index-1-44)+"行存在未填写完的项，请先填写完后成在操作！");
                    }      
                }
            });
            // console.log(voidArrMSG); 
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
        checkKeydown(key,bl){
            this.ruleForm[key] = changeNumber2(this.ruleForm[key],bl);
        },
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
 
    td:nth-child(2) {
        width: 220px;
    }

    td:nth-child(3) {
        width: 220px;
    }

    /* .td_input{
    height: 30px;
    width: 195px;
    } */

    .height30 {
        height: 30px !important;
    }
</style>