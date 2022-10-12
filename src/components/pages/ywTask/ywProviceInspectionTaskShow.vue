<template>
  <div id="taskDisplay">
    <el-container style="height: calc(100vh - 102px); border: 1px solid #eee">
      <el-header></el-header>
      <el-main>
        <el-form :model="ruleForm" status-icon ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          size="mini"
          :rules="rules"
        >      
          <!--按钮-->
          <div class="setAbsolute">
            <el-row>
              <el-col :span="6">
                <el-button
                  v-if="actionStatus.sava"
                  size="small"
                  class="el-button--iconButton"
                  style="text-overflow: initial;"
                  @click="handleJudge"
                >整改结果提交</el-button>
                <el-button
                  v-if="actionStatus.submit"
                  size="small"
                  class="el-button--iconButton"
                  style="text-overflow: initial;"
                  @click="handleFourthJudge"
                >整改结果确认</el-button>
                <el-button
                  v-if="actionStatus.aduit"
                  size="small"
                  class="el-button--iconButton"
                  style="text-overflow: initial;"
                  @click="handleButton('ruleForm','检查结果提交')"
                >检查结果提交</el-button>
                <el-button
                  size="small"
                  class="el-button--iconButton"
                  style="text-overflow: initial;"
                  @click="handleReturn"
                >返回</el-button>
                <el-button
                  v-has="'ywPlan_handleCheck'"
                  size="small"
                  class="el-button--iconButton"
                  style="text-overflow: initial;"
                  @click="handleExport"
                >导出word</el-button>
              </el-col>
              <el-col :span="18"></el-col>
            </el-row>
          </div>
          <!--进度条-->
          <el-row>
            <el-col :span="24">
                <div class="stepComponent">
                  <div class="approvalProcess" >   
                   <el-steps :active="showStatus" finish-status="success" simple>
                        <el-step :title="item.text" :description='item.text' v-for="(item,index) in stepList" :key="index" :id="item.id"></el-step>
                   </el-steps>             
                  </div>     
                </div>
            </el-col>
          </el-row>
          <!--检查任务表单-->
          <div>
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="任务信息" name="1">
                
                <el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <div>
                      <el-form-item label="任务编号：" prop="TaskNo">
                         <el-input v-model="ruleForm.TaskNo" disabled autocomplete="off"></el-input>                 
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>
                
                <el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <div>
                      <el-form-item label="任务类别：" prop="TaskCategoryId">
                                 <rate-select
                                    v-model="ruleForm.TaskCategoryId"
                                    :url='rateSelectTaskType.selectUrl'
                                    :urlParams="rateSelectTaskType.urlParams"
                                    :multiple="false"
                                    placeholder="全部"
                                    :optionKeys="rateSelectTaskType.optionKeys"
                                    :showLabels="rateSelectTaskType.showLabels"
                                    :disables="rateSelectTaskType.disables"
                                    @change="selectChangeTaskType"
                                >
                        </rate-select>
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>
                
                <el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <div>
                        <el-form-item label="检查方式：" prop="MaintainceWay">
                            <el-select v-model='ruleForm.MaintainceWay'   placeholder='请选择检查方式' style="width: 100%;">
                                <el-option v-for='item in MaintainceWayOptions' :key='item.value' :label='item.label' :value='item.value'></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>


                 <el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <div>
                        <el-form-item label="任务名称：" prop="Title">
                            <el-input v-model="ruleForm.Title" autocomplete="off"></el-input>
                        </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>
                
                <el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <div>
                      <el-form-item label="站点名称：" prop="SStation">
                        <rateCascader
                          :selectOption="ruleForm.SStation"
                          @selectOptionEvent="selectOptionEvent"
                        ></rateCascader>
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>
                          
                <el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <div>
                      <el-form-item label="运维单位：" prop="UnitId">
                        <rate-select
                          v-model="ruleForm.UnitId"
                          :url="rateSelect.selectUrl"
                          :urlParams="rateSelect.urlParams"
                          :multiple="false"
                          placeholder="请选择"
                          :optionKeys="rateSelect.optionKeys"
                          :showLabels="rateSelect.showLabels"
                          :disables="rateSelect.disables"
                          @change="selectChange"
                        ></rate-select>
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>
                                       
                <el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <div>
                        <el-form-item label="检查时间：" prop="PlanDealTime">
                             <el-date-picker
                                v-model="ruleForm.PlanDealTime"
                                    type="date"   
                                    :clearable=false                                          
                                    value-format="yyyy-MM-dd"
                                placeholder="请选择日期">
                             </el-date-picker>
                        </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>

                <el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="14">
                    <div>
                      <el-form-item label="备注：" prop="Remark">
                        <el-input type="textarea" v-model="ruleForm.Remark" autocomplete="off"></el-input>
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>
                  
                 <el-row>
                  <el-col :span="5">&nbsp;</el-col>
                  <el-col :span="12">
                    <div>
                      <el-form-item>
                          <el-button v-if="actionStatus.taskSave"  type="primary" @click="submitForm('ruleForm','任务保存')">保存</el-button>
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="5">&nbsp;</el-col>
                </el-row>
          

              </el-collapse-item>   
            </el-collapse>          
          </div>
        </el-form>  
       
       <!--第四方检查-->
       <div v-if="statusInfo"  id="cszywxcpfb">
        <el-collapse v-model="activeNames1" @change="handleChange">
            <el-collapse-item title="检查结果" name="1" >
                <el-tabs type="border-card">
                 <el-tab-pane label="城市站运维现场检查评分表">                
                    <table class="stats">    
                      <tr>
                        <td colspan="2">
                            <span>站点所在地： {{this.ruleForm.City}} </span>
                        </td>
                        <td colspan="2">
                          <span>站点名称：{{this.ruleForm.SStationName}} </span>
                        </td>
                        <td colspan="2">
                          <span>运维公司：{{this.ruleForm.UnitName}}  </span>
                        </td>
                      </tr>
                      
                      <tr>
                        <td>
                             检查内容
                        </td>
                        <td>
                            检查要点
                        </td>                     
                        <td>
                             单项分值
                        </td>
                        <td>
                            得分
                        </td>
                        <td>
                          评分说明
                        </td>
                        <td>
                          备注
                        </td>
                      </tr>

                      <tr>
                        <td  rowspan=3 >                                            
                           <b>
                            <span style='font-family:宋体;color:black'>站房环境保障情况（</span>
                           </b>
                           <b>
                            <span lang=EN-US
                                  style='font-family:"Times New Roman","serif";color:black'>5</span>
                          </b>
                           <b>
                            <span style='font-family:宋体;color:black'>分）</span>
                          </b>
                        </td>
                        <td >
                             a) 站房环境是否清洁，是否符合检查要求               
                        </td>
                        <td>
                              1
                        </td> 
                        <td >                   
                              <el-input v-model="ruleFormZhiKong.E_rc_Jc_1_Score" :disabled=disable autocomplete="off" ></el-input> 
                              <svg v-if="ruleFormZhiKong.E_rc_Jc_1_Score!=1" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>      
                        </td>
                        <td>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char;background:white'>
                        <span style='font-family:宋体;color:black'>
                          <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_2"  :disabled=disable>站房环境脏，有明显灰尘,有明显异味；</el-checkbox>
                        </span>                    
                    </p>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char;background:white'>
                        <span style='font-family:宋体;color:black'>
                          <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_3" :disabled=disable>站房物品摆放不整齐；</el-checkbox>                
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char;background:white'>
                     <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_4" :disabled=disable>有明显异味；</el-checkbox></span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char;background:white'>
                        <span style='font-family:宋体;color:black'>
                           <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_5" :disabled=disable>仪器电源线路、气体线路不规整;</el-checkbox>                     
                        </span>
                    </p>       
                     <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char;background:white'>
                        <span style='font-family:宋体;color:black'>
                           <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_5_new" :disabled=disable>有跟本监测站无关的设备及杂物，如废旧钢瓶气等；</el-checkbox>                     
                        </span>
                    </p>                      
                    <!-- <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>备注：一项不合格扣除</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>1</span><span style='font-family:宋体;color:black'>分，扣分上限为单项分值。</span>
                    </p> -->
                        </td>
                        <td>                          
                              <el-input type="textarea" rows="8" v-model="ruleFormZhiKong.E_rc_Jc_1_Mark"  :disabled=disable autocomplete="off"></el-input>                            
                        </td>
                      </tr>

                      <tr>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>b</span><span style='font-family:宋体;color:black'>）站房温度是否控制在</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>25±5</span><span style='font-family:宋体;color:black'>℃，相对湿度控制在</span><span lang=EN-US                                                                                                                                                                                                                                                                                                              style='font-family:"Times New Roman","serif";color:black'>80%</span><span style='font-family:宋体;color:black'>以下</span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>2</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>                   
                         <el-input v-model="ruleFormZhiKong.E_rc_Jc_9_Score" :disabled=disable autocomplete="off" ></el-input>     
                         <svg v-if="ruleFormZhiKong.E_rc_Jc_9_Score!=2" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>
                    </p>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_11"  :disabled=disable>站房未配有温湿度计；</el-checkbox></span>                      
                    </p>
                     <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US>
                            <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_10"  :disabled=disable>站房温度过高、过低（超过25±5℃）或湿度超过80%。（以现场检查单位经检定的温湿度计为准）；</el-checkbox>                     
                        </span>
                    </p>
                    <!-- <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>备注：一项不合格扣除</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>1</span><span style='font-family:宋体;color:black'>分，扣分上限为单项分值。</span>
                    </p> -->
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:3pt 5.4pt 0cm 5.4pt'>
                     <el-input type="textarea" rows="8" v-model="ruleFormZhiKong.E_rc_Jc_9_Mark" autocomplete="off" :disabled=disable></el-input>         
                </td>
                      </tr>
                      <tr>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>c</span><span style='font-family:宋体;color:black'>）防水、防雷供电是否满足《规范》（注</span><span lang=EN-US                                                                   style='font-family:"Times New Roman","serif";color:black'>1</span><span style='font-family:宋体;color:black'>）要求，是否具备外接电源，其他基础设施是否满足监测要求</span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>2</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <el-input v-model="ruleFormZhiKong.E_rc_Jc_14_Score" :disabled=disable autocomplete="off" ></el-input>  
                        <svg v-if="ruleFormZhiKong.E_rc_Jc_14_Score!=2" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>   
                    </p>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>                       
                        <span lang=EN-US> <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_15" :disabled=disable>防水：站房有漏水；</el-checkbox></span>                     
                    </p>
                    <!-- <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US> <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_16">无电源防雷、网络防雷、避雷针接地；</el-checkbox></span>                    
                    </p> -->
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_17" :disabled=disable>无防雷验收报告；</el-checkbox></span>                    
                    </p>
                    <!-- <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_18">供电：仪器用电没配有稳压器；</el-checkbox></span>                   
                    </p> -->
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_19" :disabled=disable>灭火器不符合要求；（灭火器安装方式属于地方责任不应扣分,过期扣分）；</el-checkbox></span>                      
                    </p>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_20" :disabled=disable>空调滤芯是否及时清理</el-checkbox></span>                   
                    </p>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_21" :disabled=disable>排气扇子故障；</el-checkbox></span>                    
                    </p>                  
                    <!-- <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_350">无摄像头刻录机或城市摄影系统；</el-checkbox></span>                    
                    </p> -->
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>备注：扣分上限为单项分值</span>
                        <!-- <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>1</span>
                        <span style='font-family:宋体;color:black'>分，扣分上限为单项分值</span>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>,</span> -->
                        <!-- <span style='font-family:宋体;color:black'>最后3项作为检查内容，现场检查如实记录问题，不作为评分项。</span> -->
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:3pt 5.4pt 0cm 5.4pt'>
                      <el-input type="textarea" rows="8" v-model="ruleFormZhiKong.E_rc_Jc_14_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                      </tr>
                        
                      <tr>
                <td width="12%" rowspan=6 style='width:12.66%;border:solid windowtext 1.0pt;border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;line-height:12.0pt;layout-grid-mode:char'>
                        <b>
                            <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>2.</span>
                        </b><b><span style='font-family:宋体;color:black'>采样系统维护效果（</span></b><b>
                            <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>10</span>
                        </b><b>
                            <span style='font-family:宋体;color:black'>分）</span>
                        </b>
                    </p>
                </td>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='text-align:left;line-height:12.0pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>a</span><span style='font-family:宋体;color:black'>
                            ）<span class=GramE>采样口距地面</span>的高度是否满足
                        </span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>3</span><span style='font-family:宋体;color:black'>～</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>25m</span><span style='font-family:宋体;color:black'>的要求</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>,</span><span style='font-family:宋体;color:black;letter-spacing:-.5pt'>采样口周围水平面是否有</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black;
  letter-spacing:-.5pt'>270°</span><span style='font-family:宋体;color:black;letter-spacing:-.5pt'>以上的捕集空间；如果采样口一边靠近建筑物，采样口周围水平面应有</span><span lang=EN-US
  style='font-family:"Times New Roman","serif";color:black;letter-spacing:-.5pt'>
                            180°
                        </span><span style='font-family:宋体;color:black;letter-spacing:-.5pt'>以上的自由空间；</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black;
  letter-spacing:-.5pt'>50m</span><span style='font-family:宋体;color:black;
  letter-spacing:-.5pt'>范围内无明显污染源</span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;line-height:12.0pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'></span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;line-height:12.0pt;layout-grid-mode:char'>
                    </p>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US>本项作为检查内容，现场检查如实记录问题，不作为评分项。</span>              
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:3pt 5.4pt 0cm 5.4pt'>
                </td>
                      </tr>
                      
                      <tr>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='text-align:left;line-height:12.0pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>b</span><span style='font-family:宋体;color:black'>
                            ）<span style='letter-spacing:-.3pt'>气体采样总管和采样支管材质是否满足《规范》（注</span>
                        </span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black;letter-spacing:-.3pt'>1</span><span style='font-family:宋体;color:black;letter-spacing:-.3pt'>）要求，即：对于总管，选用聚四氟乙烯或硼硅酸盐玻璃材料；对于采样支管，选用聚四氟乙烯材料</span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;line-height:12.0pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>1</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;line-height:12.0pt;layout-grid-mode:char'>
                        <el-input v-model="ruleFormZhiKong.E_rc_Jc_26_Score" :disabled=disable autocomplete="off" ></el-input> 
                            <svg v-if="ruleFormZhiKong.E_rc_Jc_26_Score!=1" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>
                    </p>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_27" :disabled=disable>采样总管接口材质不满足要求；</el-checkbox></span>               
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_28" :disabled=disable>采样支管材质不满足要求；</el-checkbox></span>                    
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_351" :disabled=disable>采样支管接口材质不满足要求；</el-checkbox></span>                    
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_351_new" :disabled=disable>采样支管材质不满足要求，1个月内未整改，若未按期完成；</el-checkbox></span>                    
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>备注：扣分上限为单项分值。</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>1</span><span style='font-family:宋体;color:black'></span>
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:3pt 5.4pt 0cm 5.4pt'>
                     <el-input type="textarea" rows="8" v-model="ruleFormZhiKong.E_rc_Jc_26_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                      </tr>

                      <tr>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='text-align:left;line-height:12.0pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>c</span><span style='font-family:宋体;color:black'>
                            ）<span style='letter-spacing:-.5pt'>采样系统清洁程度：采样头、采样管道是否清洁，有无积灰、积水或障碍物，采样风机是否正常工作</span>
                        </span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;line-height:12.0pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>3</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;line-height:12.0pt;layout-grid-mode:char'>
                        <el-input v-model="ruleFormZhiKong.E_rc_Jc_30_Score" :disabled=disable autocomplete="off" ></el-input> 
                        <svg v-if="ruleFormZhiKong.E_rc_Jc_30_Score!=3" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>
                    </p>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_31" :disabled=disable>颗粒物撞击板或切割头有明显积灰，颗粒物采样管未定期维护。</el-checkbox></span>                     
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_32" :disabled=disable>气态采样总管不洁净；</el-checkbox></span>                
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_33" :disabled=disable>气态采样支管不洁净；</el-checkbox></span>                   
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_34" :disabled=disable>采样风机未正常工作；</el-checkbox></span>                     
                    </p>
                     <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_33_new" :disabled=disable>颗粒物采样头滤网是否完好、切割器密封圈是否完好；</el-checkbox></span>                   
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_34_new" :disabled=disable>颗粒物采样头滤网须须在1个月内整改完成，未按期完成；</el-checkbox></span>                     
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>备注：扣分上限为单项分值。</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'></span><span style='font-family:宋体;color:black'></span>
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:3pt 5.4pt 0cm 5.4pt'>
                    <el-input type="textarea" rows="8" v-model="ruleFormZhiKong.E_rc_Jc_30_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                      </tr>
                      
                      <tr>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='text-align:left;line-height:12.0pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>d</span><span style='font-family:宋体;color:black'>）气态污染物采样支管是否插入采样总管的中心，监测仪器与支管接头连接的管线长度是否小于</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>3m</span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;line-height:12.0pt;layout-grid-mode:char'>
                        <b>
                            <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>1</span>
                        </b>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;line-height:12.0pt;layout-grid-mode:char'>
                        <b>
                            <el-input v-model="ruleFormZhiKong.E_rc_Jc_36_Score" :disabled=disable autocomplete="off" ></el-input>   
                            <svg v-if="ruleFormZhiKong.E_rc_Jc_36_Score!=1" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>  
                        </b>
                    </p>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_37" :disabled=disable>采样支管未插入总管中心；</el-checkbox></span>                   
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_38" :disabled=disable>支管长度大于3m；</el-checkbox> </span>                    
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>备注：一项不合格扣除</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>1</span><span style='font-family:宋体;color:black'>分，扣分上限为单项分值。</span>
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:3pt 5.4pt 0cm 5.4pt'>                  
                  <el-input type="textarea" rows="8" v-model="ruleFormZhiKong.E_rc_Jc_36_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                      </tr>

                      <tr>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='text-align:left;line-height:12.0pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>e</span><span style='font-family:宋体;color:black'>）采样管路联接是否规范，颗粒物采样管是否垂直，</span>
                        <span style='font-family:宋体;color:black'>，是否避免被空调直吹</span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;line-height:12.0pt;layout-grid-mode:char'>
                        <b>
                            <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>2</span>
                        </b>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;line-height:12.0pt;layout-grid-mode:char'>                
                          <el-input v-model="ruleFormZhiKong.E_rc_Jc_40_Score" :disabled=disable autocomplete="off" ></el-input>
                             <svg v-if="ruleFormZhiKong.E_rc_Jc_40_Score!=2" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>
                    </p>
                </td>
                <td width="33%" style='width: 33.76%; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt气态污染物废气排在室内；其他 padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left; line-height:115%;layout-grid-mode:char'>
                      <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_41" :disabled=disable>气态污染物采样总管是否竖直安装；</el-checkbox></span>                     
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_42" :disabled=disable>采样口到站房顶部垂直距离是否大于 1m；（地方责任不应扣分，因运维更换、维护原因导致的扣分）；</el-checkbox></span>                     
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_43" :disabled=disable>内径是否为1.5cm～15cm，各支管接头间隔是否大于 8cm；（地方责任不应扣分，因运维更换、维护原因导致的扣分）；</el-checkbox></span>                   
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_44" :disabled=disable>空调直吹，不可改变的未采取措施避免影响；</el-checkbox></span>                     
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_45" :disabled=disable>采样管路连接不规范（如采样总管无固定或在连接处用胶布缠绕）；</el-checkbox></span>                    
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                      <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_46" :disabled=disable>气态污染物废气排在室内；</el-checkbox></span>                   
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>备注：第</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>1-3</span><span style='font-family:宋体;color:black'>项作为检查内容，现场检查如实记录问题，不作为评分项，第</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>4-6</span><span style='font-family:宋体;color:black'>项不合格，分别扣</span><span lang=EN-US
                        style='font-family:"Times New Roman","serif";color:black'>2</span><span style='font-family:宋体;color:black'>分，扣分上限为单项分值。</span>
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:3pt 5.4pt 0cm 5.4pt'>
                   <el-input type="textarea" rows="8" v-model="ruleFormZhiKong.E_rc_Jc_40_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                      </tr>

                      <tr>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='text-align:left;line-height:12.0pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>f</span><span style='font-family:宋体;color:black'>）气态污染物采样总管是否有加热装置，加热温度是否控制在</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>30</span><span style='font-family:宋体;color:black'>～</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>50</span><span style='font-family:宋体;color:black'>℃。若采用不带加热系统的聚四氟乙烯或硼硅酸盐玻璃采样总管的，则其室内部分需加保温套</span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;line-height:12.0pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>3</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;line-height:12.0pt;layout-grid-mode:char'>                   
                        <el-input v-model="ruleFormZhiKong.E_rc_Jc_48_Score" :disabled=disable autocomplete="off" ></el-input>  
                        <svg v-if="ruleFormZhiKong.E_rc_Jc_48_Score!=3" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg> 
                    </p>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_49" :disabled=disable>采样总管无加热系统或无温度显示装置；</el-checkbox></span>                  
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_50" :disabled=disable>加热系统故障，扣2分；</el-checkbox></span>                 
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_51_new" :disabled=disable>温度显示装置故障，扣2分</el-checkbox></span>                 
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_51" :disabled=disable>采样支管未加保温套，扣1分；</el-checkbox></span>                      
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>备注：扣分上限为单项分值。</span>
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:3pt 5.4pt 0cm 5.4pt'>
                    <el-input type="textarea" rows="8" v-model="ruleFormZhiKong.E_rc_Jc_48_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                      </tr>

                      <tr>
                <td width="12%" rowspan=6 style='width:12.66%;border:solid windowtext 1.0pt;border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:center;line-height:16.0pt;layout-grid-mode:char'>
                        <b>
                            <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>3.</span>
                        </b><b><span style='font-family:宋体;color:black'>仪器日常维护效果（</span></b><b>
                            <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>10</span>
                        </b><b>
                            <span style='font-family:宋体;color:black'>分）</span>
                        </b>
                    </p>
                </td>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:left;line-height:16.0pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>a</span><span style='font-family:宋体;color:black'>）仪器工作状态是否正常，是否存在报警信息</span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:center;line-height:16.0pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>1</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:center;line-height:16.0pt;layout-grid-mode:char'>
                          <el-input v-model="ruleFormZhiKong.E_rc_Jc_53_Score" :disabled=disable autocomplete="off" ></el-input>   
                          <svg v-if="ruleFormZhiKong.E_rc_Jc_53_Score!=1" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>
                    </p>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>
                          <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_54" :disabled=disable>仪器工作状态不正常，报警处理不及时扣1分</el-checkbox>                      
                        </span>
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:3pt 5.4pt 0cm 5.4pt'>
                    <el-input type="textarea" rows="8" v-model="ruleFormZhiKong.E_rc_Jc_53_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                      </tr>

                      <tr>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:left;line-height:16.0pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>b</span><span style='font-family:宋体;color:black'>）仪器过滤膜是否及时更换，散热风扇是否及时清洗</span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:center;line-height:16.0pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>2</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:center;line-height:16.0pt;layout-grid-mode:char'>
                          <el-input v-model="ruleFormZhiKong.E_rc_Jc_56_Score" :disabled=disable autocomplete="off" ></el-input>   
                          <svg v-if="ruleFormZhiKong.E_rc_Jc_56_Score!=2" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>
                    </p>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US>  <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_57" :disabled=disable>查看滤膜更换记录，仪器滤膜未及时更换（超过14天）；</el-checkbox> </span>                   
                    </p>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US>  <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_58" :disabled=disable>仪器散热风扇工作不正常</el-checkbox> </span>                   
                    </p>          
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US>  <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_58_new" :disabled=disable>散热风扇过滤网缺失，未清理</el-checkbox> </span>                   
                    </p>                    
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>备注：任一项不满足要求的，扣</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>1</span><span style='font-family:宋体;color:black'>分，扣分上限为单项分值。</span>
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:3pt 5.4pt 0cm 5.4pt'>
                       <el-input type="textarea" rows="8" v-model="ruleFormZhiKong.E_rc_Jc_56_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                      </tr>

                      <tr>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:left;line-height:16.0pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>c</span><span style='font-family:宋体;color:black'>）颗粒物采样管加热装置是否工作正常</span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:center;line-height:16.0pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>2</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:center;line-height:16.0pt;layout-grid-mode:char'>
                         <el-input v-model="ruleFormZhiKong.E_rc_Jc_61_Score" :disabled=disable autocomplete="off" ></el-input>
                         <svg v-if="ruleFormZhiKong.E_rc_Jc_61_Score!=2" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>   
                    </p>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_62" :disabled=disable>颗粒物采样管加热装置未正常工作，扣2分（加热装置故障）；</el-checkbox> </span>                   
                    </p>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_63" :disabled=disable>加热装置参数设置不符合要求，扣2分；</el-checkbox></span>                       
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                      <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_64" :disabled=disable>颗粒物采样管是未加保温套，扣1分；</el-checkbox></span>                
                    </p>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_65" :disabled=disable>采样管路空调直吹，扣1分；</el-checkbox></span>                      
                    </p>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'><span style='font-family:宋体;color:black'>备注：扣分上限为单项分值。</span></p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:3pt 5.4pt 0cm 5.4pt'>
                     <el-input type="textarea" rows="8" v-model="ruleFormZhiKong.E_rc_Jc_61_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                      </tr>

                      <tr>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:left;line-height:16.0pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>d</span><span style='font-family:宋体;color:black'>）零气发生器相关耗材是否及时更换（半年）</span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:center;line-height:16.0pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>2</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:center;line-height:16.0pt;layout-grid-mode:char'>
                        <el-input v-model="ruleFormZhiKong.E_rc_Jc_67_Score" :disabled=disable autocomplete="off" ></el-input>
                        <svg v-if="ruleFormZhiKong.E_rc_Jc_67_Score!=2" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>
                    </p>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>
                          <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_68" :disabled=disable>氧化剂、活性炭耗材和分子筛（若含分子筛则检查）未及时更换，扣2分。</el-checkbox>                   
                        </span>
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:3pt 5.4pt 0cm 5.4pt'>
                   <el-input type="textarea" rows="8" v-model="ruleFormZhiKong.E_rc_Jc_67_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                      </tr>

                      <tr>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:left;line-height:16.0pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>e</span><span style='font-family:宋体;color:black'>
                            ）采样<span class=GramE>泵相关</span>耗材是否及时更换，空压机<span class=GramE>及时维护</span>
                        </span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:center;line-height:16.0pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>1</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:center;line-height:16.0pt;layout-grid-mode:char'>
                         <el-input v-model="ruleFormZhiKong.E_rc_Jc_70_Score" :disabled=disable autocomplete="off" ></el-input>
                         <svg v-if="ruleFormZhiKong.E_rc_Jc_70_Score!=1" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>
                    </p>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US> <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_71" :disabled=disable>采样泵相关耗材未定期更换；</el-checkbox></span>                    
                    </p>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_72" :disabled=disable>空压机未及时维护；</el-checkbox></span>                    
                    </p>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>备注：</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>1</span><span style='font-family:宋体;color:black'>扣分上限为单项分值。</span>
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; padding:3pt 5.4pt 0cm 5.4pt'>
                    <el-input type="textarea" rows="8" v-model="ruleFormZhiKong.E_rc_Jc_70_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                      </tr>

                      <tr>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm; margin-bottom:3.1pt;margin-left:0cm;text-align:left;line-height:16.0pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>f)</span><span style='font-family:宋体;color:black'>采样纸带或滤膜是否及时更换</span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:center;line-height:16.0pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>2</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:center;line-height:16.0pt;layout-grid-mode:char'>
                         <el-input v-model="ruleFormZhiKong.E_rc_Jc_74_Score" :disabled=disable autocomplete="off" ></el-input>
                         <svg v-if="ruleFormZhiKong.E_rc_Jc_74_Score!=2" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>
                    </p>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_75" :disabled=disable>未及时更换纸带；</el-checkbox></span>                      
                    </p>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_401" :disabled=disable>采样斑点分布不均匀，或不圆滑，或不完整，或拖尾，或穿孔或纸带装反等</el-checkbox></span>                    
                    </p>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_401_new" :disabled=disable>热电1405F仪器TEMO滤膜负载3L超过65%未更换</el-checkbox></span>                    
                    </p>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_77_new" :disabled=disable>热电1405F仪器TEMO滤膜负载1L超过25%未更换；</el-checkbox></span>                    
                    </p>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_77" :disabled=disable>颗粒物采样平台脏；</el-checkbox></span>                    
                    </p>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>备注：任一项不合格，扣</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>2</span><span style='font-family:宋体;color:black'>分，扣分上限为单项分值。</span>
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:3pt 5.4pt 0cm 5.4pt'>
                    <el-input type="textarea" rows="8" v-model="ruleFormZhiKong.E_rc_Jc_74_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                      </tr>

                      <tr>
                <td width="12%" rowspan=2 style='width:12.66%;border:solid windowtext 1.0pt;border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;layout-grid-mode:char'>
                        <b>
                            <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>4.</span>
                        </b><b>
                            <span style='font-family:宋体;color:black'>
                                质<span class=GramE>控控制</span>效果
                            </span>
                        </b>
                    </p>
                    <p class=MsoNormal align=center style='text-align:center;layout-grid-mode:char'>
                        <b><span style='font-family:宋体;color:black'>（</span></b><b>
                            <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>40</span>
                        </b><b>
                            <span style='font-family:宋体;color:black'>分）</span>
                        </b>
                    </p>
                </td>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;line-height:35px;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>动态校准仪质量流量控制器（MFC）单点流量测试（要 求相对误差≤±2%）:</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>1.</span><span style='font-family:宋体;color:black'>零气</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>MFC</span><span style='font-family:宋体;color:black'>流量：
                           <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_164" :disabled=disable autocomplete="off"></el-input>  
                        </span>
                          <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>L/min</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>标准流量计测值：
                           <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_165" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US
                        style='font-family:"Times New Roman","serif";color:black'>L/min</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>相对误差：
                            <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_166" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US
                        style='font-family:"Times New Roman","serif";color:black'>%</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>2.</span>
                        <span class=GramE><span style='font-family:宋体;color:black'>标气</span></span>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>MFC</span>
                        <span style='font-family:宋体;color:black'>流量：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_167" :disabled=disable autocomplete="off"></el-input></span>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>ml/min                         
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>标准流量计测值：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_167" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>ml/min</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>相对误差：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_169" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>%</span>
                    </p>               
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>斜率</span>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>a</span><span style='font-family:宋体;color:black'>:<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_171" :disabled=disable autocomplete="off"></el-input>截距</span>
                        <span lang=EN-US  style='font-family:"Times New Roman","serif";color:black'>b</span><span style='font-family:宋体;color:black'>:<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_172" :disabled=disable autocomplete="off"></el-input>相关系数</span>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>r</span><span style='font-family:宋体;color:black'>:<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_173" :disabled=disable autocomplete="off"></el-input></span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>5</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;layout-grid-mode:char'>
                        <el-input v-model="ruleFormZhiKong.E_rc_Jc_79_Score" :disabled=disable autocomplete="off" ></el-input>
                        <svg v-if="ruleFormZhiKong.E_rc_Jc_79_Score!=5" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>
                    </p>
                </td>
                <td width="33%" style='width:34.76%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;line-height:45px;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_80" :disabled=disable>零气流量误差超出±2%，扣5分；</el-checkbox> </span>                    
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <b>
                            <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_81" :disabled=disable>标气流量误差超出±2%的，扣 5 分；</el-checkbox></span>
                        </b>                     
                    </p>               
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US> <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_82" :disabled=disable>多点MFC流量不合格，扣 5 分；</el-checkbox> </span>                    
                    </p>               
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>
                            备注： 扣完40分为止；
                        </span>
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:3pt 5.4pt 0cm 5.4pt'>
                     <el-input type="textarea" rows="8" v-model="ruleFormZhiKong.E_rc_Jc_79_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                      </tr>
                    <tr v-show='true'>
                      <td width="26%" style='width:26.7%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;line-height:35px;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'><span lang=EN-US style='font-family:宋体;color:black'>1.</span>
                    <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>SO2</span>
                    <span style='font-family:宋体;color:black'>显示流量：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_179" :disabled=disable autocomplete="off"></el-input></span>
                    <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>L/min</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>标准流量计测值：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_180" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US
                        style='font-family:"Times New Roman","serif";color:black'>L/min</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>相对误差：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_181" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>%</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:宋体;color:black'>2.</span><span lang=EN-US
                        style='font-family:"Times New Roman","serif";color:black'>SO2</span><span class=GramE><span style='font-family:宋体;color:black'>标气稀释</span></span><span style='font-family:宋体;color:black'>输出浓度：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_182" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US
                        style='font-family:"Times New Roman","serif";color:black'>ppb&nbsp;&nbsp;</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>仪器响应浓度：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_183" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>ppb</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>浓度误差（要求误差</span><span lang=EN-US
                        style='font-family:"Times New Roman","serif";color:black'>≤±5%</span><span style='font-family:宋体;color:black'>）：
                          <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_184" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US
                          style='font-family:"Times New Roman","serif";color:black'>%</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:宋体;color:black'>3.</span>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>t90</span><span style='font-family:宋体;color:black'>响应时间（要求</span><span lang=EN-US
                          style='font-family:"Times New Roman","serif";color:black'>≤5min</span><span style='font-family:宋体;color:black'>）：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_185" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US
                          style='font-family:"Times New Roman","serif";color:black'>min</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:宋体;color:black'>4.</span><span style='font-family:宋体;color:black'>仪器零点响应浓度：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_186" :disabled=disable autocomplete="off"></el-input>（</span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>±5ppb</span><span style='font-family:宋体;color:black'>）</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>ppb</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>5.</span><span style='font-family:宋体;color:black'>气密性检查<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_187" :disabled=disable autocomplete="off"></el-input></span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>6.</span><span style='font-family:宋体;color:black'>多点校准</span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>(</span><span style='font-family:宋体;color:black'>每半年</span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>)</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>斜率</span><span lang=EN-US
                        style='font-family:"Times New Roman","serif";color:black'>a</span><span style='font-family:宋体;color:black'>：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_189" :disabled=disable autocomplete="off"></el-input>截距</span><span lang=EN-US
                        style='font-family:"Times New Roman","serif";color:black'>b</span><span style='font-family:宋体;color:black'>：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_190" :disabled=disable autocomplete="off"></el-input>相关系数</span><span lang=EN-US
                        style='font-family:"Times New Roman","serif";color:black'>r</span><span style='font-family:宋体;color:black'>：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_191" :disabled=disable autocomplete="off"></el-input></span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>7.</span><span style='font-family:宋体;color:black'>精密度审核</span><span lang=EN-US
                          style='font-family:"Times New Roman","serif";color:black'>(</span><span style='font-family:宋体;color:black'>每半年</span><span lang=EN-US
                           style='font-family:"Times New Roman","serif";color:black'>)</span><span style='font-family:宋体;color:black'>相对偏差<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_192" :disabled=disable autocomplete="off"></el-input></span>
                        <span lang=EN-US
                              style='font-family:"Times New Roman","serif";color:black'>
                            (
                        </span>
                        <span style='font-family:宋体;color:black'>要求</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>≤5%<u>)</u></span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>8.</span><span style='font-family:宋体;color:black'>准确性审核</span><span lang=EN-US
                           style='font-family:"Times New Roman","serif";color:black'>(</span><span style='font-family:宋体;color:black'>每年</span><span lang=EN-US
                       style='font-family:"Times New Roman","serif";color:black'>)</span><span style='font-family:宋体;color:black'>平均相对误差<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_193" :disabled=disable autocomplete="off"></el-input></span>
                        <span lang=EN-US
                              style='font-family:"Times New Roman","serif";color:black'>
                            (
                        </span>
                        <span style='font-family:宋体;color:black'>要求</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>≤5%<u>)</u></span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>校准曲线的检验指标</span><span lang=EN-US
                        style='font-family:"Times New Roman","serif";color:black'>:<!--<textarea id="E_rc_Jc_194" style="height:25px;width:80px;vertical-align:middle;overflow:hidden"></textarea>-->&nbsp;&nbsp;</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>斜率</span><span lang=EN-US
                          style='font-family:"Times New Roman","serif";color:black'>a</span><span style='font-family:宋体;color:black'>：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_195" :disabled=disable autocomplete="off"></el-input>截距</span><span lang=EN-US
                          style='font-family:"Times New Roman","serif";color:black'>b</span><span style='font-family:宋体;color:black'>：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_196" :disabled=disable autocomplete="off"></el-input>相关系数</span><span lang=EN-US
                          style='font-family:"Times New Roman","serif";color:black'>r</span><span style='font-family:宋体;color:black'>：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_197" :disabled=disable autocomplete="off"></el-input></span>
                    </p>
                      </td>
                      <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>5</span>
                    </p>
                      </td>
                     <td width="6%" style='width:6.46%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;layout-grid-mode:char'>
                       <el-input v-model="ruleFormZhiKong.E_rc_Jc_85_Score" :disabled=disable autocomplete="off" ></el-input>
                       <svg v-if="ruleFormZhiKong.E_rc_Jc_85_Score!=5" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>
                    </p>
                     </td>
                     <td>                   
                         <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_86" :disabled=disable>采样流量误差超出±10%，扣5分;</el-checkbox></span>
                       <br>
                          <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_88" :disabled=disable>跨度检查误差超出±5%，扣5分;</el-checkbox></span>
                       <br>
                       <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_89" :disabled=disable>t90相应时间≥5min，扣1分；（6年及6年以上设备不扣分）；</el-checkbox></span>
                       <br>
                       <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_87" :disabled=disable>仪器零点超出±5ppb，扣5分；；</el-checkbox></span>
                       <br>
                       <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_90" :disabled=disable>按仪器说明书采样支管和仪器气路气密性检查不合格，扣2分；</el-checkbox></span>
                      
                       <br>
                        <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_91" :disabled=disable>多点检查不合格，一次不合格扣5分;</el-checkbox></span>                   
                       <br>
                       <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_92" :disabled=disable>精密度审核不合格，扣5分；</el-checkbox></span>
                      <br>
                       <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_93" :disabled=disable>准确性审核不合格（可采用最近一次多点校准结果判定），扣5分</el-checkbox></span>
                     <br>
                      <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_92_new" :disabled=disable>未按照要求打标识，扣1分；</el-checkbox></span>
                      <br>
                       <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_93_new" :disabled=disable>主要参数不合格扣5分;</el-checkbox></span>
                     <br>
                     <span style='font-family: 宋体;color: black'>
                            备注：扣分上限为单项分值。
                    </span>
                     </td>
                     <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:3pt 5.4pt 0cm 5.4pt'>
                    <el-input type="textarea" rows="8" v-model="ruleFormZhiKong.E_rc_Jc_85_Mark" :disabled=disable autocomplete="off"></el-input>  
                     </td>                   
                    </tr>
                    <!-- 这个不要了 -->
                    <tr>
                <td width="12%" rowspan=2 style='width:12.66%;border:solid windowtext 1.0pt;border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;line-height:11.5pt;layout-grid-mode:char'>
                        <b>
                            <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>4.</span>
                        </b><b>
                            <span style='font-family:宋体;color:black'>
                                质<span class=GramE>控控制</span>效果
                            </span>
                        </b>
                    </p>
                    <p class=MsoNormal align=center style='text-align:center;line-height:11.5pt;layout-grid-mode:char'>
                        <b><span style='font-family:宋体;color:black'>（</span></b><b>
                            <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>40</span>
                        </b><b>
                            <span style='font-family:宋体;color:black'>分）</span>
                        </b>
                    </p>
                </td>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>1.NOX</span><span style='font-family:宋体;color:black'>显示流量：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_206" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>L/min</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>标准流量计测值：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_207" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>L/min</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>相对误差：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_208" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>%</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>2.NO</span><span class=GramE>
                            <span style='font-family:宋体;color:black'>标气稀释</span>
                        </span><span style='font-family:宋体;color:black'>输出浓度：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_209" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>
                            ppb&nbsp;&nbsp;
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>仪器响应浓度：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_210" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>ppb</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>浓度误差（要求误差</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>≤±5%</span><span style='font-family:宋体;color:black'>）：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_211" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>%</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>3.t90</span><span style='font-family:宋体;color:black'>响应时间（要求</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>≤5min</span><span style='font-family:宋体;color:black'>）：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_212" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US
                           style='font-family:"Times New Roman","serif";color:black'>min</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>4.</span><span style='font-family:宋体;color:black'>仪器零点响应浓度：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_213" :disabled=disable autocomplete="off"></el-input>（</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>±10ppb</span><span style='font-family:宋体;color:black'>）</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>ppb</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>5.</span><span style='font-family:宋体;color:black'>气密性检查<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_214" :disabled=disable autocomplete="off"></el-input></span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:宋体;color:black'>6.</span><span style='font-family:宋体;color:black'>多点校准</span><span lang=EN-US
                          style='font-family:"Times New Roman","serif";color:black'>(</span><span style='font-family:宋体;color:black'>每半年</span><span lang=EN-US
                          style='font-family:"Times New Roman","serif";color:black'>)</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>斜率</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>a</span><span style='font-family:宋体;color:black'>：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_216" :disabled=disable autocomplete="off"></el-input>截距</span><span lang=EN-US
                           style='font-family:"Times New Roman","serif";color:black'>b</span><span style='font-family:宋体;color:black'>：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_217" autocomplete="off" :disabled=disable></el-input>相关系数</span><span lang=EN-US
                             style='font-family:"Times New Roman","serif";color:black'>r</span><span style='font-family:宋体;color:black'>：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_218" autocomplete="off" :disabled=disable></el-input></span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:宋体;color:black'>7.</span><span style='font-family:宋体;color:black'>精密度审核</span><span lang=EN-US
                            style='font-family:"Times New Roman","serif";color:black'>(</span><span style='font-family:宋体;color:black'>每半年</span><span lang=EN-US
                             style='font-family:"Times New Roman","serif";color:black'>)</span><span style='font-family:宋体;color:black'>相对偏差<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_219" :disabled=disable autocomplete="off"></el-input></span>
                        <span lang=EN-US
                              style='font-family:"Times New Roman","serif";color:black'>
                            (
                        </span>
                        <span style='font-family:宋体;color:black'>要求</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>≤5%<u>)</u></span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:宋体;color:black'>8.</span><span style='font-family:宋体;color:black'>准确性审核</span><span lang=EN-US
                           style='font-family:"Times New Roman","serif";color:black'>(</span><span style='font-family:宋体;color:black'>每年</span><span lang=EN-US
                           style='font-family:"Times New Roman","serif";color:black'>)</span><span style='font-family:宋体;color:black'>平均相对误差</span><el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_220" :disabled=disable autocomplete="off"></el-input>
                        <span lang=EN-US
                              style='font-family:"Times New Roman","serif";color:black'>
                            (
                        </span>
                        <span style='font-family:宋体;color:black'>要求</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>≤5%<u>)</u></span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>校准曲线的检验指标</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>
                            :<!--<textarea id="E_rc_Jc_221" style="height:25px;width:80px;vertical-align:middle;overflow:hidden"></textarea>&nbsp;&nbsp;-->
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>斜率</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>a</span><span style='font-family:宋体;color:black'>：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_212" :disabled=disable autocomplete="off"></el-input>截距</span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>b</span><span style='font-family:宋体;color:black'>：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_213" :disabled=disable autocomplete="off"></el-input>相关系数</span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>r</span><span style='font-family:宋体;color:black'>：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_214" :disabled=disable autocomplete="off"></el-input></span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>9.</span><span class=GramE>
                            <span style='font-family:宋体;color:black'>钼</span>
                        </span><span style='font-family:宋体;color:black'>炉转化效率</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>(</span><span style='font-family:宋体;color:black'>每年</span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>)</span><span style='font-family:宋体;color:black'>：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_215" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US style='font-family:
  "Times New Roman","serif";color:black'>(</span><span style='font-family:宋体;color:black'>应</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>≥96%)</span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;line-height:11.5pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>5</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;line-height:11.5pt;layout-grid-mode:char'>
                         <el-input v-model="ruleFormZhiKong.E_rc_Jc_95_Score" :disabled=disable autocomplete="off" ></el-input> 
                         <svg v-if="ruleFormZhiKong.E_rc_Jc_95_Score!=5" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>
                    </p>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>    
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_96" :disabled=disable>采样流量误差超出±10%的，扣 5 分；</el-checkbox> 
                       
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>    
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_96_new" :disabled=disable>跨度检查误差超出±5%，扣5分；</el-checkbox> 
                       
                        </span>
                    </p>
                   
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_99" :disabled=disable>t90相应时间≥5min，扣1分；（6年及6年以上设备不扣分）；</el-checkbox></span>                     
                    </p>
                     <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_97" :disabled=disable>仪器零点超出±5ppb，扣 5 分；</el-checkbox>                     
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_100" :disabled=disable>按仪器说明书采样支管和仪器气路气密性检查不合格，扣 2 分；</el-checkbox>                       
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_102" :disabled=disable>多点校准不合格，一次不合格扣 5 分；</el-checkbox>               
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'><span lang=EN-US>
                        <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_103">精密度审核不合格，扣 5 分；</el-checkbox></span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_104" :disabled=disable>准确性审核不合格，扣5分（可采用最近一次多点校准结果判定）；</el-checkbox></span>                     
                    </p>

                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_101" :disabled=disable>钼炉平均转化效率小于 96 %，>102%,，扣5分;</el-checkbox>                      
                        </span>
                    </p>

                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                      <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_98" :disabled=disable>未按照要求打标识，扣1分；</el-checkbox></span>                   
                    </p>

                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                      <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_98_new" :disabled=disable>主要参数不合格扣5分；</el-checkbox></span>                   
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                      <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_102_new" :disabled=disable>未及时更换变色硅胶，扣2分；</el-checkbox></span>                   
                    </p>

                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family: 宋体;color: black'>
                            备注：1.扣分上限为单项分值。
                        </span>
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;:3pt 5.4pt 0cm 5.4pt'>
                     <el-input type="textarea" rows="20" v-model="ruleFormZhiKong.E_rc_Jc_95_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                    </tr>

                    <tr>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>1.CO</span><span style='font-family:宋体;color:black'>
                            显示流量：
                            <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_235" :disabled=disable autocomplete="off"></el-input>
                        </span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>L/min</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>标准流量计测值：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_236" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>L/min</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>相对误差：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_237" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>%</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>2.CO</span><span class=GramE>
                            <span style='font-family:宋体;color:black'>标气稀释</span>
                        </span><span style='font-family:宋体;color:black'>输出浓度：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_238" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>
                            ppm&nbsp;&nbsp;
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>仪器响应浓度：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_239" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>ppm</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>浓度误差（要求误差</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>≤±5%</span><span style='font-family:宋体;color:black'>）：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_240" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>%</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>3.t90</span><span style='font-family:宋体;color:black'>响应时间（要求</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>≤4min</span><span style='font-family:宋体;color:black'>）：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_241" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>min</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>4.</span><span style='font-family:宋体;color:black'>仪器零点响应浓度：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_242" :disabled=disable autocomplete="off"></el-input>（</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>±0.4ppm</span><span style='font-family:宋体;color:black'>）</span><span lang=EN-US style='font-family:
  "Times New Roman","serif";color:black'>ppm</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";
  color:black'>5.</span><span style='font-family:宋体;color:black'>气密性检查  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_243" :disabled=disable autocomplete="off"></el-input></span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:宋体;color:black'>6.</span><span style='font-family:宋体;color:black'>多点校准</span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>(</span><span style='font-family:宋体;color:black'>每半年</span><span lang=EN-US
                        style='font-family:"Times New Roman","serif";color:black'>)  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_244" :disabled=disable autocomplete="off"></el-input></span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>斜率</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>a</span><span style='font-family:宋体;color:black'>：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_245" :disabled=disable autocomplete="off"></el-input>截距</span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>b</span><span style='font-family:宋体;color:black'>：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_246" :disabled=disable autocomplete="off"></el-input>相关系数</span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>r</span><span style='font-family:宋体;color:black'>：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_247" :disabled=disable autocomplete="off"></el-input></span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:宋体;color:black'>7.</span><span style='font-family:宋体;color:black'>精密度审核</span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>(</span><span style='font-family:宋体;color:black'>每半年</span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>)</span><span style='font-family:宋体;color:black'>相对偏差  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_248" :disabled=disable autocomplete="off"></el-input></span>
                        <span lang=EN-US
                              style='font-family:"Times New Roman","serif";color:black'>
                            (
                        </span>
                        <span style='font-family:宋体;color:black'>要求</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>≤5%<u>)</u></span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;
  layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:宋体;color:black'>8.</span><span style='font-family:宋体;color:black'>准确性审核</span><span lang=EN-US
                          style='font-family:"Times New Roman","serif";color:black'>(</span><span style='font-family:宋体;color:black'>每年</span><span lang=EN-US
                          style='font-family:"Times New Roman","serif";color:black'>)</span><span style='font-family:宋体;color:black'>平均相对误差  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_249" :disabled=disable autocomplete="off"></el-input></span>
                        <span lang=EN-US
                              style='font-family:"Times New Roman","serif";color:black'>

                            (
                        </span>
                        <span style='font-family:宋体;color:black'>要求</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>≤5%<u>)</u></span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;
  layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>校准曲线的检验指标</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>:  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_250" :disabled=disable autocomplete="off"></el-input></span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:11.5pt;
  layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>斜率</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>a</span><span style='font-family:宋体;color:black'>：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_251" :disabled=disable autocomplete="off"></el-input>截距</span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>b</span><span style='font-family:宋体;color:black'>：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_252" :disabled=disable autocomplete="off"></el-input>相关系数</span><span lang=EN-US
                          style='font-family:"Times New Roman","serif";color:black'>r</span><span style='font-family:宋体;color:black'>：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_253" :disabled=disable autocomplete="off"></el-input></span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;line-height:11.5pt;
  layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";
  color:black'>5</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;line-height:11.5pt;
  layout-grid-mode:char'>
                        <el-input v-model="ruleFormZhiKong.E_rc_Jc_106_Score" :disabled=disable autocomplete="off" ></el-input>
                         <svg v-if="ruleFormZhiKong.E_rc_Jc_106_Score!=5" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>
                    </p>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_107" :disabled=disable>采样流量误差超出±10%的，扣5分；</el-checkbox>             
                        </span>
                    </p>
                   
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                      <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_109" :disabled=disable>跨度检查误差超出±5%的，扣5分；</el-checkbox></span>                 
                    </p> 
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_110" :disabled=disable>t90相应时间≥4min，扣1分；（6年及以上设备不扣分）；</el-checkbox></span>

                    </p>
                     <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_108" :disabled=disable>仪器零点超出范围±0.4ppm，扣5分；</el-checkbox>                
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_111" :disabled=disable>按仪器说明书采样支管和仪器气路气密性检查不合格，扣2分；</el-checkbox>
            
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_112" :disabled=disable>多点校准不合格，一次不合格扣 5 分；</el-checkbox> 
                     
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_113" :disabled=disable>精密度审核不合格，扣 5 分；</el-checkbox>
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'> <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_114" :disabled=disable>准确性审核不合格，扣5分；（可采用最近一次多点校准结果判定）；</el-checkbox>
                        </span>
                    </p>

                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_109_new" :disabled=disable>未按照要求打标识，扣1分；</el-checkbox>             
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                      <span lang=EN-US><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_114_new" :disabled=disable>主要参数不合格扣5分；</el-checkbox></span>                 
                    </p>  
                       
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family: 宋体; color: black'>
                            备注：扣分上限为单项分值
                        </span>
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:3pt 5.4pt 0cm 5.4pt'>
                  <el-input type="textarea" rows="15" v-model="ruleFormZhiKong.E_rc_Jc_106_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                    </tr>

                    <tr>
                <td width="12%" rowspan=2 style='width:12.66%;border:solid windowtext 1.0pt;border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:.75pt;margin-right:0cm;margin-bottom:.75pt;margin-left:0cm;text-align:center;line-height:11.5pt;layout-grid-mode:char'>
                        <b>
                            <span lang=EN-US style='font-family:"Times New Roman","serif";
color:black'>4.</span>
                        </b><b>
                            <span style='font-family:宋体;color:black'>
                                质<span class=GramE>控控制</span>效果
                            </span>
                        </b>
                    </p>
                    <p class=MsoNormal align=center style='margin-top:.75pt;margin-right:0cm;
  margin-bottom:.75pt;margin-left:0cm;text-align:center;line-height:11.5pt;
  layout-grid-mode:char'>
                        <b><span style='font-family:宋体;color:black'>（</span></b><b>
                            <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>40</span>
                        </b><b>
                            <span style='font-family:宋体;color:black'>分）</span>
                        </b>
                    </p>
                </td>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;
  margin-bottom:.75pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>1.O3</span><span style='font-family:宋体;color:black'>显示流量：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_262" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>L/min</span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;
  margin-bottom:.75pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>标准流量计测值：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_263" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US
                                          style='font-family:"Times New Roman","serif";color:black'>L/min</span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;
  margin-bottom:.75pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>相对误差：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_264" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US
                                      style='font-family:"Times New Roman","serif";color:black'>%</span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;
  margin-bottom:.75pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>2.O3</span><span class=GramE><span style='font-family:宋体;color:black'>标气稀释</span></span><span style='font-family:宋体;color:black'>输出浓度：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_265" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US
                       style='font-family:"Times New Roman","serif";color:black'>ppb&nbsp;&nbsp;</span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;
  margin-bottom:.75pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>仪器响应浓度：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_266" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US
                        style='font-family:"Times New Roman","serif";color:black'>ppb</span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;
  margin-bottom:.75pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>浓度误差（要求误差</span><span lang=EN-US
                        style='font-family:"Times New Roman","serif";color:black'>≤±5%</span><span style='font-family:宋体;color:black'>）：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_267" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US
                          style='font-family:"Times New Roman","serif";color:black'>%</span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;
  margin-bottom:.75pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>3.t90</span><span style='font-family:宋体;color:black'>响应时间（要求</span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>≤5min</span><span style='font-family:宋体;color:black'>）：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_268" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US
                          style='font-family:"Times New Roman","serif";color:black'>min</span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;
  margin-bottom:.75pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>4.</span><span style='font-family:宋体;color:black'>仪器零点响应浓度：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_269" :disabled=disable autocomplete="off"></el-input>（</span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>±5ppb</span><span style='font-family:宋体;color:black'>）</span><span lang=EN-US style='font-family:
  "Times New Roman","serif";color:black'>ppb</span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;
  margin-bottom:.75pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>5.</span><span style='font-family:宋体;color:black'>气密性检查  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_270" :disabled=disable autocomplete="off"></el-input></span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;
  margin-bottom:.75pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:宋体;color:black'>6.</span><span style='font-family:宋体;color:black'>多点校准</span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>(</span><span style='font-family:宋体;color:black'>每半年</span><span lang=EN-US
                        style='font-family:"Times New Roman","serif";color:black'>)</span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;
  margin-bottom:.75pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>斜率</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>a</span><span style='font-family:宋体;color:black'>：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_272" :disabled=disable autocomplete="off"></el-input>截距</span>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>b</span><span style='font-family:宋体;color:black'>：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_273" :disabled=disable autocomplete="off"></el-input>相关系数</span>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>r</span><span style='font-family:宋体;color:black'>：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_274" :disabled=disable autocomplete="off"></el-input></span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;
  margin-bottom:.75pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:宋体;color:black'>7.</span><span style='font-family:宋体;color:black'>精密度审核</span><span lang=EN-US
                        style='font-family:"Times New Roman","serif";color:black'>(</span><span style='font-family:宋体;color:black'>每半年</span><span lang=EN-US
                       style='font-family:"Times New Roman","serif";color:black'>)</span><span style='font-family:宋体;color:black'>相对偏差  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_275" :disabled=disable autocomplete="off"></el-input></span>
                        <span lang=EN-US
                              style='font-family:"Times New Roman","serif";color:black'>

                            (
                        </span>
                        <span style='font-family:宋体;color:black'>要求</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>≤5%<u>)</u></span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;
  margin-bottom:.75pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:宋体;color:black'>8.</span><span style='font-family:宋体;color:black'>准确性审核</span><span lang=EN-US
                        tyle='font-family:"Times New Roman","serif";color:black'>(</span><span style='font-family:宋体;color:black'>每年</span><span lang=EN-US
                     style='font-family:"Times New Roman","serif";color:black'>)</span><span style='font-family:宋体;color:black'>平均相对误差  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_276" :disabled=disable autocomplete="off"></el-input></span>
                        <span lang=EN-US
                              style='font-family:"Times New Roman","serif";color:black'>

                            (
                        </span>
                        <span style='font-family:宋体;color:black'>要求</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>≤5%<u>)</u></span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;
  margin-bottom:.75pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>校准曲线的检验指标</span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;
  margin-bottom:.75pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>斜率</span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>a</span><span style='font-family:宋体;color:black'>：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_278" :disabled=disable autocomplete="off"></el-input>截距</span><span lang=EN-US
                           style='font-family:"Times New Roman","serif";color:black'>b</span><span style='font-family:宋体;color:black'>：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_279" :disabled=disable autocomplete="off"></el-input>相关系数</span><span lang=EN-US
                        style='font-family:"Times New Roman","serif";color:black'>r</span><span style='font-family:宋体;color:black'>：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_280" :disabled=disable autocomplete="off"></el-input></span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;
  margin-bottom:.75pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>9. O3</span><span style='font-family:宋体;color:black'>量值传递</span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>(</span><span style='font-family:宋体;color:black'>每年</span><span lang=EN-US
                      style='font-family:"Times New Roman","serif";color:black'>)</span><span style='font-family:宋体;color:black'>：</span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;
  margin-bottom:.75pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>斜率</span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>a</span><span style='font-family:宋体;color:black'>：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_282" :disabled=disable autocomplete="off"></el-input>截距</span><span lang=EN-US
                       style='font-family:"Times New Roman","serif";color:black'>b</span><span style='font-family:宋体;color:black'>：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_283" :disabled=disable autocomplete="off"></el-input>相关系数</span><span lang=EN-US
                        style='font-family:"Times New Roman","serif";color:black'>r</span><span style='font-family:宋体;color:black'>：  <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_284" :disabled=disable autocomplete="off"></el-input></span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:.75pt;margin-right:0cm;
  margin-bottom:.75pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>5</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 12pt'>
                     <el-input v-model="ruleFormZhiKong.E_rc_Jc_116_Score" autocomplete="off" ></el-input> 
                     <svg v-if="ruleFormZhiKong.E_rc_Jc_116_Score!=5" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;margin-bottom:.75pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_117" :disabled=disable>采样流量误差超出±10%，扣5分；</el-checkbox>
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;margin-bottom:.75pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_117_new" :disabled=disable>跨度检查误差超出±5%，扣5分；</el-checkbox>
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;margin-bottom:.75pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_120" :disabled=disable>t90相应时间≥5min，扣1分（6年及6年以上设备不扣分）；</el-checkbox> </span>
                    </p>
                     <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;margin-bottom:.75pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_121_new" :disabled=disable>仪器零点超出±5ppb，扣5分；</el-checkbox>
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;margin-bottom:.75pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_121" :disabled=disable>按仪器说明书采样支管和仪器气路气密性检查不合格，扣1分。</el-checkbox>                    
                        </span>
                    </p>
                     <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;margin-bottom:.75pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_123" :disabled=disable>多点校准不合格，一次不合格扣 5 分；</el-checkbox> 
                        </span>
                    </p>
                  
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;margin-bottom:.75pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'> <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_124" :disabled=disable>精密度审核不合格，扣 5 分；</el-checkbox></span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;margin-bottom:.75pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_125" :disabled=disable>准确性审核不合格（可采用最近一次多点校准结果判定），扣5分；</el-checkbox>
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;margin-bottom:.75pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_122" :disabled=disable>O3量值传递不合格，扣 5 分；</el-checkbox> 
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;margin-bottom:.75pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_118" :disabled=disable>未按照要求打标识，扣1分；</el-checkbox>
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;margin-bottom:.75pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                      <span lang=EN-US> <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_119" :disabled=disable>主要参数不合格扣5分；</el-checkbox></span> 
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;margin-bottom:.75pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";
  color:black'>&nbsp;</span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:.75pt;margin-right:0cm;
  margin-bottom:.75pt;margin-left:10.5pt;text-align:left;line-height:115%;
  layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>
                            备注：扣分上限为单项分值。
                        </span>
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:3pt 5.4pt 0cm 5.4pt'>
                    <el-input type="textarea" rows="15" v-model="ruleFormZhiKong.E_rc_Jc_116_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                    </tr>
                     
                    <tr>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black;
  letter-spacing:-.2pt'>1.PM10</span><span style='font-family:宋体;color:black;
  letter-spacing:-.2pt'>
                            显示流量：
                              <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_294" :disabled=disable autocomplete="off"></el-input>
                        </span><span lang=EN-US style='font-family:"Times New Roman","serif";
  color:black;letter-spacing:-.2pt'>L/min</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black;letter-spacing:-.2pt'>
                            标准流量计测值：
                            <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_295" :disabled=disable autocomplete="off"></el-input>
                        </span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black;
  letter-spacing:-.2pt'>L/min&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black;letter-spacing:-.2pt'>
                            相对误差：
                            <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_296" :disabled=disable autocomplete="off"></el-input>
                        </span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black;
  letter-spacing:-.2pt'>%</span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black;
  letter-spacing:-.2pt'>2.PM10K</span><span style='font-family:宋体;color:black;
  letter-spacing:-.2pt'>
                            （标准回归斜率）：
                            <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_297" :disabled=disable autocomplete="off"></el-input>
                        </span>
                        <span style='font-family:宋体;
  color:black'>；</span>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";
  color:black;letter-spacing:-.2pt'>K0</span><span style='font-family:宋体;
  color:black;letter-spacing:-.2pt'>值（</span><span lang=EN-US style='font-family:
  "Times New Roman","serif";color:black;letter-spacing:-.2pt'>TEOM</span><span style='font-family:宋体;color:black;letter-spacing:-.2pt'>
                            法）：
                            <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_298" :disabled=disable autocomplete="off"></el-input>
                        </span><span style='font-family:宋体;color:black'>；
                        <span style='letter-spacing:-.2pt'>
                          
                          <p>3.其他仪器参数与说明书一致 
                              <el-checkbox v-model="ruleFormZhiKong.hg">合格</el-checkbox>
                              <el-checkbox v-model="ruleFormZhiKong.bhg">不合格</el-checkbox> 
                            <!-- <input v-model="ruleFormZhiKong.hg"  type="radio" name="hg" value="true" id="hg" checked="checked" style="height: 30px;">合格
                            <input v-model="ruleFormZhiKong.hg"  type="radio" name="hg" value="false" id="hg" style="height: 30px;">不合格 -->
                          </p></span></span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black;
  letter-spacing:-.2pt'>4.PM10</span><span style='font-family:宋体;color:black;
  letter-spacing:-.2pt'>校准<span class=GramE>膜检查</span>或</span><span lang=EN-US
                        style='font-family:"Times New Roman","serif";color:black;letter-spacing:-.2pt'>K0</span><span class=GramE><span style='font-family:宋体;color:black;letter-spacing:-.2pt'>值检查</span></span><span style='font-family:宋体;color:black;letter-spacing:-.2pt'>结果</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>(</span><span style='font-family:宋体;color:black'>每半年</span><span lang=EN-US
                         style='font-family:"Times New Roman","serif";color:black'>)</span><span style='font-family:宋体;color:black;letter-spacing:-.2pt'>
                            ：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_299" :disabled=disable autocomplete="off"></el-input>
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>5.</span><span style='font-family:宋体;color:black'>
                            气路检漏
                            <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_300" :disabled=disable autocomplete="off"></el-input>
                        </span>
                    </p>
                    <!-- <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black;
  letter-spacing:-.2pt'>5.PM10</span><span style='font-family:宋体;color:black;
  letter-spacing:-.2pt'>手工比对工作</span><span lang=EN-US style='font-family:"Times New Roman","serif";
  color:black'>(</span><span style='font-family:宋体;color:black'>每年</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>
                            )
                            <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_301" autocomplete="off"></el-input>
                        </span>
                    </p> -->
                     <p class=MsoNormal align=left style='text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black;letter-spacing:-.2pt'>6.核查温，湿，压传感器检查和校准记录（季度）</span>               
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;layout-grid-mode:
  char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";
  color:black'>5</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='text-align:center;layout-grid-mode:
  char'>                
                        <el-input v-model="ruleFormZhiKong.E_rc_Jc_127_Score" :disabled=disable autocomplete="off" ></el-input> 
                        <svg v-if="ruleFormZhiKong.E_rc_Jc_127_Score!=5" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>
                    </p>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;
  layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'> <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_128" :disabled=disable>PM 10 实测流量与设计流量误差超出±5%，扣5分；；</el-checkbox></span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                      <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_403" :disabled=disable>PM 10显示流量与实测流量误差超出±5%，扣5分；</el-checkbox></span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                      <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_403_new" :disabled=disable>PM 10显示流量与实测流量误差超出2%，扣2分；</el-checkbox></span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                      <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_129" :disabled=disable>标准膜检查或查K值或K0值，K0 /K值，或浓度系数与原始值不符且不能提供相应校准依据，扣5分；</el-checkbox></span>              
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                      <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_129_new" :disabled=disable>其他参数不符合要求，扣2分；</el-checkbox></span>              
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_130" :disabled=disable>PM10校准膜检查或K0值检查结果不合格，扣5分；</el-checkbox> 
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_131" :disabled=disable>仪器检漏不合格；β射线法仪器示值大于1.0L/min，扣5分；振荡天平仪器主流量大于0.15L/min，旁路流量大于0.6L/min，扣5分</el-checkbox>
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_132" :disabled=disable>未按时完成温、湿、压传感器检查和校准记录扣5分；</el-checkbox> 
                        </span>
                    </p> 
                     <p class=MsoNormal align=left style='text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_132_new" :disabled=disable>未按照要求打标识，扣1分；</el-checkbox> 
                        </span>
                    </p>                   
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family: 宋体;color: black'>
                            备注：扣分上限为单项分值。
                        </span>
                    </p>
                    <p class=MsoNormal align=left style='margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>&nbsp;</span>
                    </p>
                </td>

                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:3pt 5.4pt 0cm 5.4pt'>
                   <el-input type="textarea" rows="15" v-model="ruleFormZhiKong.E_rc_Jc_127_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                    </tr>
                    
                    <tr>
                <td width="12%" rowspan=2 style='width:12.66%;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:center;line-height:11.5pt;
  layout-grid-mode:char'>
                        <b>
                            <span lang=EN-US style='font-family:"Times New Roman","serif";
  color:black'>4.</span>
                        </b><b>
                            <span style='font-family:宋体;color:black'>
                                质<span class=GramE>控控制</span>效果
                            </span>
                        </b>
                    </p>
                    <p class=MsoNormal align=center style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <b>
                            <span style='font-family:宋体;color:black'>（</span>
                        </b><b>
                            <span lang=EN-US
                                  style='font-family:"Times New Roman","serif";color:black'>40</span>
                        </b><b>
                            <span style='font-family:宋体;color:black'>分）</span>
                        </b>
                    </p>
                </td>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black;
  letter-spacing:-.2pt'>1.PM2.5</span><span style='font-family:宋体;color:black;
  letter-spacing:-.2pt'>
                            显示流量：
                            <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_308" :disabled=disable autocomplete="off"></el-input>
                        </span><span lang=EN-US style='font-family:"Times New Roman","serif";
  color:black;letter-spacing:-.2pt'>L/min</span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black;letter-spacing:-.2pt'>标准流量计测值：
                          <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_309" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black;
  letter-spacing:-.2pt'>L/min&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black;letter-spacing:-.2pt'>相对误差：
                          <el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_310" :disabled=disable autocomplete="off"></el-input></span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black;
  letter-spacing:-.2pt'>%</span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black;
  letter-spacing:-.2pt'>2.PM2.5K</span><span style='font-family:宋体;color:black;
  letter-spacing:-.2pt'>（标准回归斜率）：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_311" :disabled=disable autocomplete="off"></el-input></span>
                        <span style='font-family:宋体;
  color:black'>；</span>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";
  color:black;letter-spacing:-.2pt'>K0</span><span style='font-family:宋体;
  color:black;letter-spacing:-.2pt'>值（</span><span lang=EN-US style='font-family:
  "Times New Roman","serif";color:black;letter-spacing:-.2pt'>TEOM</span><span style='font-family:宋体;color:black;letter-spacing:-.2pt'>法：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_312" :disabled=disable autocomplete="off"></el-input></span>
                        <span style='font-family:宋体;color:black'>；</span>
                        <!-- <span style='font-family:宋体;color:black'>等其他<span style='letter-spacing:-.2pt'>仪器参数与说明书一致</span></span> -->
                    </p>
                    <p>3.其他仪器参数与说明书一致
                      <el-checkbox v-model="ruleFormZhiKong.hg25">合格</el-checkbox>
                      <el-checkbox v-model="ruleFormZhiKong.bhg25">不合格</el-checkbox> 
                    </p>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black;
  letter-spacing:-.2pt'>3.PM2.5</span><span style='font-family:宋体;color:black;
  letter-spacing:-.2pt'>校准<span class=GramE>膜检查</span>或</span><span lang=EN-US
                                                                    style='font-family:"Times New Roman","serif";color:black;letter-spacing:-.2pt'>K0</span><span class=GramE><span style='font-family:宋体;color:black;letter-spacing:-.2pt'>值检查</span></span><span style='font-family:宋体;color:black;letter-spacing:-.2pt'>结果</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>(</span><span style='font-family:宋体;color:black'>每半年</span><span lang=EN-US
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                style='font-family:"Times New Roman","serif";color:black'>)</span><span style='font-family:宋体;color:black;letter-spacing:-.2pt'>：<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_313" :disabled=disable autocomplete="off"></el-input></span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>4.</span><span style='font-family:宋体;color:black'>气路检漏<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_314" :disabled=disable autocomplete="off"></el-input></span>
                    </p>
                    <!-- <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black;
  letter-spacing:-.2pt'>4.PM2.5</span><span style='font-family:宋体;color:black;
  letter-spacing:-.2pt'>手工比对工作</span><span lang=EN-US style='font-family:"Times New Roman","serif";
  color:black'>(</span><span style='font-family:宋体;color:black'>每年</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>)<el-input style="width:100px" v-model="ruleFormZhiKong.E_rc_Jc_315" autocomplete="off"></el-input></span>
                    </p> -->
                     <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black;
  letter-spacing:-.2pt'>6.核查温、湿、压传感器检查和校准记录（季度）。</span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>5</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 10pt'>
                     <el-input v-model="ruleFormZhiKong.E_rc_Jc_135_Score" :disabled=disable autocomplete="off" ></el-input> 
                     <svg v-if="ruleFormZhiKong.E_rc_Jc_135_Score!=5" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 10pt'>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm; margin-bottom:1.55pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_136" :disabled=disable>PM2.5 实测流量与设计流量的误差超出±5%，扣5分；</el-checkbox></span>
                    </p>
                   
                   <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;margin-bottom:1.55pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_140_new" :disabled=disable>PM2.5显示流量与实测流量误差超出±5%，扣5分。</el-checkbox></span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;margin-bottom:1.55pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_140" :disabled=disable>M2.5显示流量与实测流量误差超出±2%，扣2分。</el-checkbox></span>
                    </p>

                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;margin-bottom:1.55pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                      <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_137" :disabled=disable>标准膜检查或查K值或K0值，K0 /K值，或浓度系数与原始值不符且不能提供相应校准依据，扣5分；</el-checkbox></span>             
                    </p>
                     <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;margin-bottom:1.55pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_138" :disabled=disable>其他参数不符合要求，扣 2 分；</el-checkbox>
                        </span>
                    </p>
                     <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;margin-bottom:1.55pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                      <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_137_new" :disabled=disable>PM2.5校准膜检查或K0值检查结果不合格，扣5分；</el-checkbox></span>             
                    </p>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;margin-bottom:1.55pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_139" :disabled=disable>仪器检漏不合格；β射线法仪器示值大于1.0L/min，扣5分；振荡天平仪器主流量大于0.15L/min，旁路流量大于0.6L/min，扣5分；</el-checkbox> 
                        </span>
                    </p>
                     <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;margin-bottom:1.55pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_501" :disabled=disable>未按时完成温、湿、压传感器检查和校准记录扣5分；</el-checkbox></span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;margin-bottom:1.55pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_501_new" :disabled=disable>未按照要求打标识，扣1分；</el-checkbox></span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top: 1.55pt; margin-right: 0cm;margin-bottom: 1.55pt; margin-left: 10.5pt; text-align: left; line-height: 115%>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           layout-grid-mode: char'>
                        <span style='font-family: 宋体; color: black'>
                            备注：扣分上限为单项分值。
                        </span>
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:3pt 5.4pt 0cm 5.4pt'>
   <el-input type="textarea" rows="15" v-model="ruleFormZhiKong.E_rc_Jc_135_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                    </tr>
                    
                    <tr>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
                          <p>流量计有效期限：<input v-model="ruleFormZhiKong.E_rc_Jc_1000"  type="text" :disabled=disable class="td_input" id="E_rc_Jc_1000" style="height: 30px;"></p>
                          <p>温湿度计有效期限：<input v-model="ruleFormZhiKong.E_rc_Jc_1001"  type="text" :disabled=disable class="td_input" id="E_rc_Jc_1001" style="height: 30px;"></p>
                          <p>大气压计有效期限：<input v-model="ruleFormZhiKong.E_rc_Jc_1002"  type="text" :disabled=disable class="td_input" id="E_rc_Jc_1002" style="height: 30px;"></p>
                          <p>钢瓶气（标气）NO有效期限：<input v-model="ruleFormZhiKong.E_rc_Jc_1003"  type="text" :disabled=disable class="td_input" id="E_rc_Jc_1003" style="height: 30px;"></p>
                          <p>钢瓶气（标气）CO有效期限：<input v-model="ruleFormZhiKong.E_rc_Jc_1004"  type="text" :disabled=disable class="td_input" id="E_rc_Jc_1004" style="height: 30px;"></p>
                          <p>钢瓶气（标气）SO2有效期限：<input v-model="ruleFormZhiKong.E_rc_Jc_1005"  type="text" :disabled=disable class="td_input" id="E_rc_Jc_1005" style="height: 30px;"></p>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black;letter-spacing:-.2pt'>
                          用于校准的设备（流量计、温度计、大气压计）是否每年通过国家计量检定，标准气体是否在有效期内使用。</span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>5</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 10pt'>
                      <el-input v-model="ruleFormZhiKong.E_rc_Jc_142_Score" :disabled=disable autocomplete="off" ></el-input> 
                      <svg v-if="ruleFormZhiKong.E_rc_Jc_142_Score!=5" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;margin-bottom:1.55pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                      <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_143" :disabled=disable>流量计超出有效期</el-checkbox>  
                      </span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;margin-bottom:1.55pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                      <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_144" :disabled=disable>温湿度计超出有效期；</el-checkbox> 
                      </span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;margin-bottom:1.55pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                      <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_145" :disabled=disable>大气压计超出有效期；</el-checkbox> 
                      </span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;margin-bottom:1.55pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                      <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_146" :disabled=disable>钢瓶气无标签；</el-checkbox> 
                      </span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;margin-bottom:1.55pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                      <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_147" :disabled=disable>钢瓶气过期；</el-checkbox>                    
                      </span>
                    </p>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;margin-bottom:1.55pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>备注：任意一项不合格扣5分；扣分上限为单项分值。</span>
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:3pt 5.4pt 0cm 5.4pt'>
                     <el-input type="textarea" rows="15" v-model="ruleFormZhiKong.E_rc_Jc_142_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                    </tr>

                    <tr>
                <td width="12%" style='width:12.66%;border:solid windowtext 1.0pt;border-top:
  none;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <b>
                            <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>5.</span>
                        </b><b>
                            <span style='font-family:宋体;color:black'>通讯系统维护效果</span>
                        </b>
                    </p>
                    <p class=MsoNormal align=center style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <b>
                            <span style='font-family:宋体;color:black'>（</span>
                        </b><b>
                            <span lang=EN-US
                                  style='font-family:"Times New Roman","serif";color:black'>3</span>
                        </b><b>
                            <span style='font-family:宋体;color:black'>分）</span>
                        </b>
                    </p>
                </td>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>能否正常采集数据并上报城市站、省站、总站并发布数据</span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 10pt'>
                    <p class=MsoNormal align=center style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>3</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 10pt'>
                      <el-input v-model="ruleFormZhiKong.E_rc_Jc_149_Score" :disabled=disable autocomplete="off" ></el-input> 
                      <svg v-if="ruleFormZhiKong.E_rc_Jc_149_Score!=3" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                     <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;margin-bottom:1.55pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                      <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_353" :disabled=disable>监测仪器时间与数采仪时间不同步，监测仪器或数采仪时间未校准，任一功能不满足，扣3分；</el-checkbox>  
                      </span>
                     </p>
                     <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;margin-bottom:1.55pt;margin-left:0cm;text-align:left;line-height:115%;layout-grid-mode:char'>
                      <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_352" :disabled=disable>不能正常采集数据并上报城市站、省站、总站，且未报备的（此项不扣分）；</el-checkbox>  
                      </span>
                     </p>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;margin-bottom:1.55pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>
                            任<span class=GramE>一</span>功能不满足，扣
                        </span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>1</span><span style='font-family:宋体;color:black'>分；扣分上限为单项分值。</span>
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:3pt 5.4pt 0cm 5.4pt'>
                    <el-input type="textarea" rows="15" v-model="ruleFormZhiKong.E_rc_Jc_149_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                    </tr>

                    <tr>
                <td width="12%" style='width:12.66%;border:solid windowtext 1.0pt;border-top:
  none;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <b>
                            <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>6.</span>
                        </b><b>
                            <span style='font-family:宋体;color:black'>运<span class=GramE>维人员</span>要求</span>
                        </b>
                    </p>
                    <p class=MsoNormal align=center style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <b>
                            <span style='font-family:宋体;color:black'>（</span>
                        </b><b>
                            <span lang=EN-US
                                  style='font-family:"Times New Roman","serif";color:black'>2</span>
                        </b><b>
                            <span style='font-family:宋体;color:black'>分）</span>
                        </b>
                    </p>
                </td>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black;letter-spacing:-.2pt'>运<span class=GramE>维人员</span>是否持证上岗</span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 10pt'>
                    <p class=MsoNormal align=center style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>2</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 10pt'>                 
                     <el-input v-model="ruleFormZhiKong.E_rc_Jc_151_Score" :disabled=disable autocomplete="off" ></el-input>
                     <svg v-if="ruleFormZhiKong.E_rc_Jc_151_Score!=2" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:10.5pt;text-align:left;line-height:115%;
  layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>
                            运<span class=GramE>维人员</span>未持有上岗证，扣
                        </span><span lang=EN-US style='font-family:
  "Times New Roman","serif";color:black'>2</span><span style='font-family:宋体;
  color:black'>分，扣分上限为单项分值。</span>
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:3pt 5.4pt 0cm 5.4pt'>
                    <el-input type="textarea" rows="15" v-model="ruleFormZhiKong.E_rc_Jc_151_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                    </tr>

                    <tr>
                <td width="12%" style='width:12.66%;border:solid windowtext 1.0pt;border-top:
  none;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <b>
                            <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>7.</span>
                        </b><b>
                            <span style='font-family:宋体;color:black'>档案记录</span>
                        </b>
                    </p>
                    <p class=MsoNormal align=center style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <b>
                            <span style='font-family:宋体;color:black'>（</span>
                        </b><b>
                            <span lang=EN-US
                                  style='font-family:"Times New Roman","serif";color:black'>5</span>
                        </b><b>
                            <span style='font-family:宋体;color:black'>分）</span>
                        </b>
                    </p>
                </td>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>是否按照规范要求填写运维记录，记录是否规范和齐全</span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black;
  letter-spacing:-.4pt'>5</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 10pt'>                  
                    <el-input v-model="ruleFormZhiKong.E_rc_Jc_153_Score" :disabled=disable autocomplete="off" ></el-input>
                    <svg v-if="ruleFormZhiKong.E_rc_Jc_153_Score!=5" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:10.5pt;text-align:left;line-height:115%;
  layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>现场填写的档案记录不规范齐全，每项扣</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>1</span><span style='font-family:宋体;color:black'>分，扣分上限为单项分值。</span>
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:3pt 5.4pt 0cm 5.4pt'>
   <el-input type="textarea" rows="8" v-model="ruleFormZhiKong.E_rc_Jc_153_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                    </tr>

                    <tr>
                <td width="12%" style='width:12.66%;border:solid windowtext 1.0pt;border-top:
  none;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <b>
                            <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>8.</span>
                        </b><b>
                            <span style='font-family:宋体;color:black'>运<span class=GramE>维工作</span>完成情况</span>
                        </b>
                    </p>
                    <p class=MsoNormal align=center style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <b>
                            <span style='font-family:宋体;color:black'>（</span>
                        </b><b>
                            <span lang=EN-US
                                  style='font-family:"Times New Roman","serif";color:black'>20</span>
                        </b><b>
                            <span style='font-family:宋体;color:black'>分）</span>
                        </b>
                    </p>
                </td>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:left;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>
                            是否<span class=GramE>按照运维要求</span>完成当月运<span class=GramE>维工作</span>
                        </span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=center style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>20</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 10pt'>
                     <el-input v-model="ruleFormZhiKong.E_rc_Jc_155_Score" :disabled=disable autocomplete="off" ></el-input> 
                      <svg v-if="ruleFormZhiKong.E_rc_Jc_155_Score!=20" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:10.5pt;text-align:left;line-height:115%;
  layout-grid-mode:char'><span style='font-family:宋体;color:black'>对照运维工作规定规范和合同要求检查每日、每周、每月、每季度、每年任务执行情况。</span></p>
                    <p class=MsoNormal align=left style='margin-top:1.55pt;margin-right:0cm;
  margin-bottom:1.55pt;margin-left:10.5pt;text-align:left;line-height:115%;
  layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>若发现一项存在问题扣</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>5</span><span style='font-family:宋体;color:black'>分，扣分上限为单项分值。</span>
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:3pt 5.4pt 0cm 5.4pt'>
  <el-input type="textarea" rows="8" v-model="ruleFormZhiKong.E_rc_Jc_155_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                    </tr>

                    <tr>
                <td width="12%" style='width:12.66%;border:solid windowtext 1.0pt;border-top:
  none;padding:0cm 5.4pt 0cm 5.4pt;height:56.55pt'>
                    <p class=MsoNormal align=center style='margin-top:3.1pt;margin-right:0cm;
  margin-bottom:3.1pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <b>
                            <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>9.</span>
                        </b><b>
                            <span style='font-family:宋体;color:black'>异常情况处理情况</span>
                        </b>
                    </p>
                    <p class=MsoNormal align=center style='margin-top:3.1pt;margin-right:0cm;
  margin-bottom:3.1pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <b>
                            <span style='font-family:宋体;color:black'>（</span>
                        </b><b>
                            <span lang=EN-US
                                  style='font-family:"Times New Roman","serif";color:black'>5</span>
                        </b><b>
                            <span style='font-family:宋体;color:black'>分）</span>
                        </b>
                    </p>
                </td>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:56.55pt'>
                    <p class=1 align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:
  3.1pt;margin-left:0cm;text-align:left;text-indent:0cm;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>是否及时处理异常情况的（如故障应急处理等）</span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:56.55pt'>
                    <p class=1 align=center style='margin-top:3.1pt;margin-right:0cm;margin-bottom:
  3.1pt;margin-left:0cm;text-align:center;text-indent:0cm;layout-grid-mode:
  char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";
  color:black;letter-spacing:-.2pt'>5</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 10pt;height:56.55pt'>
                      <el-input v-model="ruleFormZhiKong.E_rc_Jc_157_Score" :disabled=disable autocomplete="off" ></el-input>  
                      <svg v-if="ruleFormZhiKong.E_rc_Jc_157_Score!=5" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:56.55pt'>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;
  margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;
  layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>异常等情况未及时处理，并不能准确说明原因扣</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>5</span><span style='font-family:宋体;color:black'>分，扣分上限为单项分值。</span>
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:3pt 5.4pt 0cm 5.4pt;height:56.55pt'>
    <el-input type="textarea" rows="8" v-model="ruleFormZhiKong.E_rc_Jc_157_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                    </tr>


                   <tr>
                <td width="12%" style='width:12.66%;border:solid windowtext 1.0pt;border-top:
  none;padding:0cm 5.4pt 0cm 5.4pt;height:56.55pt'>
                    <p class=MsoNormal align=center style='margin-top:3.1pt;margin-right:0cm;
  margin-bottom:3.1pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <b>
                            <span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>10.</span>
                        </b><b>
                            <span style='font-family:宋体;color:black'>异常进站</span>
                        </b>
                    </p>
                    <p class=MsoNormal align=center style='margin-top:3.1pt;margin-right:0cm;
  margin-bottom:3.1pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <b>
                            <span style='font-family:宋体;color:black'>（</span>
                        </b><b>
                            <span lang=EN-US
                                  style='font-family:"Times New Roman","serif";color:black'>0</span>
                        </b><b>
                            <span style='font-family:宋体;color:black'>分）</span>
                        </b>
                    </p>
                </td>
                <td width="26%" style='width:26.7%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:56.55pt'>
                    <p class=1 align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:
  3.1pt;margin-left:0cm;text-align:left;text-indent:0cm;layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>检查前进站是否按要求报备</span>
                    </p>
                </td>
                <td width="5%" style='width:5.5%;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:56.55pt'>
                    <p class=1 align=center style='margin-top:3.1pt;margin-right:0cm;margin-bottom:
  3.1pt;margin-left:0cm;text-align:center;text-indent:0cm;layout-grid-mode:
  char'>
                        <span lang=EN-US style='font-family:"Times New Roman","serif";
  color:black;letter-spacing:-.2pt'>0</span>
                    </p>
                </td>
                <td width="6%" style='width:6.46%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 10pt;height:56.55pt'>
                      <el-input v-model="ruleFormZhiKong.E_rc_Jc_1006_Score" :disabled=disable autocomplete="off" ></el-input>  
                      <svg v-if="ruleFormZhiKong.E_rc_Jc_1006_Score!=0" t="1621389729226" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="16" height="16"><path d="M616.2 887.4H385.5c-20.5 0-37.3 16.8-37.3 37.3S365 962 385.5 962h230.7c20.5 0 37.3-16.8 37.3-37.3s-16.7-37.3-37.3-37.3zM895 794.1h-23.9V511c0-198.8-141.6-361.5-315.3-363.5v-45.8c0-21.4-17.5-39-39-39-21.4 0-39 17.5-39 39v45.6h-1.7C300.9 147.3 157.5 311 157.5 511v283.2h-23.9c-12.9 0-23.4 10.5-23.4 23.4 0 12.9 10.5 23.4 23.4 23.4H895c12.9 0 23.4-10.5 23.4-23.4 0-13-10.5-23.5-23.4-23.5zM730.8 441c0-58.5-16.3-101.7-48.4-128.6-54.7-45.7-138-31.2-138.9-31.1l-7.1-39.2c4.1-0.8 102.7-17.8 171.5 39.7 41.6 34.8 62.7 88.3 62.7 159.2h-39.8z" fill="#ED7C6C" p-id="3297"></path></svg>
                </td>
                <td width="33%" style='width:33.76%;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:56.55pt'>
                    <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;
  margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;
  layout-grid-mode:char'>
                        <span style='font-family:宋体;color:black'>到现场检查通知后，运维人员不得再进站维修校准设备，若遇到数据异常，需与检查方沟通后才能进站，否则扣5分。</span><span lang=EN-US style='font-family:"Times New Roman","serif";color:black'>5</span><span style='font-family:宋体;color:black'>分，扣分上限为单项分值。</span>
                    </p>
                </td>
                <td width="14%" valign=top style='width:14.92%;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:3pt 5.4pt 0cm 5.4pt;height:56.55pt'>
    <el-input type="textarea" rows="8" v-model="ruleFormZhiKong.E_rc_Jc_1006_Mark" :disabled=disable autocomplete="off"></el-input>  
                </td>
                    </tr>

                    <tr >
                      <td rowspan=4>
                         11.保障责任类问题
                      </td>
                       <td>
                         站房保障类问题
                      </td>
                       <td>
                         0
                      </td>
                      <td>
                         
                      </td>
                      <td colspan="1"  style="text-align:left;">
                        <p>1.无Z字梯；</p>
                        <p>2.无采样平台护栏或护栏不满足要求；</p>
                        <p>3.无缓冲间；</p>
                        <p>4.无排风扇；</p>
                        <p>5.无稳压电源；</p>
                        <p>6.无备用电源（UPS）或者损坏（写明使用年限）；</p>
                        <p>7.无电源防雷.网络防雷，设备防雷或者避雷设备损坏故障；</p>
                        <p>8.地板塌陷；</p>
                        <p>9.固定建筑物站房渗漏塌陷；</p>
                        <p>10.板房使用超过6年渗漏塌陷；</p>
                        <p>11.站房温度无法稳定控制(空调运行正常)；</p>
                        <p>12.站点无铭牌；</p>

                          <!-- <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char;background:white'>
                              <span style='font-family:宋体;color:black'>
                                <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_400">移动动态校准仪</el-checkbox>
                              </span>                    
                          </p>
                          <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char;background:white'>
                              <span style='font-family:宋体;color:black'>
                                <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_4011">错误清洗切割头</el-checkbox>                
                              </span>
                          </p>
                          <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char;background:white'>
                          <span style='font-family:宋体;color:black'><el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_402">工控机有远程工具</el-checkbox></span>
                          </p>
                          <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char;background:white'>
                              <span style='font-family:宋体;color:black'>
                                <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_4033">未及时处理异常情况数量 ( ) （如：故障、报警）</el-checkbox>                     
                              </span>
                          </p> 
                          <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char;background:white'>
                              <span style='font-family:宋体;color:black'>
                                <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_404">站房温度过高、过低（超过±15℃）</el-checkbox>                     
                              </span>
                          </p>                              
                          <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char;background:white'>
                              <span style='font-family:宋体;color:black'>
                                <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_405">采样总管、支管材质不满足要求</el-checkbox>                     
                              </span>
                          </p>
                          <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char;background:white'>
                              <span style='font-family:宋体;color:black'>
                                <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_406">采样系统过脏</el-checkbox>                     
                              </span>
                          </p> 
                          <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char;background:white'>
                              <span style='font-family:宋体;color:black'>
                                <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_407">颗粒物采样管加热装置未正常工作</el-checkbox>                     
                              </span>
                          </p> 
                          <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char;background:white'>
                              <span style='font-family:宋体;color:black'>
                                <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_408">未及时更换纸带、TEOM 滤膜负载超过 60%未更换、纸带装反</el-checkbox>                     
                              </span>
                          </p>
                          <p class=MsoNormal align=left style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:10.5pt;text-align:left;line-height:115%;layout-grid-mode:char;background:white'>
                              <span style='font-family:宋体;color:black'>
                                <el-checkbox v-model="ruleFormZhiKong.E_rc_Jc_409">标准膜检查或查 K 值或 K 0 值，K 0 /K 值，或浓度系数与原始值不符且不能提供相应校准依据</el-checkbox>                     
                              </span>
                          </p>          -->
                        </td>  
                        <td>
                         
                        </td>
                    </tr>

                    
                      
                   <tr>
                       <td>
                         采样系统类
                      </td>
                       <td>
                         0
                      </td>
                      <td>
                         
                      </td>
                      <td colspan="1" style="text-align:left;">
                        <p>13.采样总管不符合要求（因采样总管问题，采样支管无法插入到总管中心则不扣分）；</p>
                        <p>14.采样总管加热装置无温度显示器；</p>
                        <p>15.采样支管超3米，因站房结构引起的；</p>
                        </td>  
                        <td>
                         
                        </td>
                    </tr>

                 
                   <tr>
                       <td>
                         仪器类
                      </td>
                       <td>
                         0
                      </td>
                      <td>
                         
                      </td>
                      <td colspan="1" style="text-align:left;">
                        <p>16.	PM10和PM2.5颗粒物采样管过高（标准为采样管长度不超过5米）；</p>
                        <p>17.	PM10、PM2.5设备与采样头、切割器不匹配；</p>
                        <p>18.	颗粒物采样头、切割器有划痕；</p>
                        <p>19.	无三脚架；</p>
                        <p>20.	站房工控机可正常传输数据，但无法直接连接外网；</p>
                        </td>  
                        <td>
                         
                        </td>
                    </tr>

                 
                  <tr>
                       <td>
                         其它类
                      </td>
                       <td>
                         0
                      </td>
                      <td>
                         
                      </td>
                      <td colspan="1" style="text-align:left;">
                        <p>21.	气象五参故障；</p>
                        <p>22.	能见度异常；</p>
                        <p>23.	城市摄影系统故障。</p>
                        </td>  
                        <td>
                         
                        </td>
                    </tr>
 
                    
                    <tr>
                        <td colspan="6">
                           仪器型号/编号
                        </td>
                      </tr>
                      <tr>
                        <td colspan="6">
                           <table style="border-collapse: collapse;width: 80%;border: 1px solid black;text-align: center;margin:auto;">
                            <tr>
                              <td>&nbsp;S02<el-input v-model="ruleFormZhiKong.E_rc_Jc_so2Type" :disabled=disable autocomplete="off" ></el-input> </td>
                              <td>&nbsp;N0x<el-input v-model="ruleFormZhiKong.E_rc_Jc_noXType" :disabled=disable autocomplete="off" ></el-input></td>
                              <td>&nbsp;&nbsp;CO<el-input v-model="ruleFormZhiKong.E_rc_Jc_coType" :disabled=disable autocomplete="off" ></el-input> </td>
                            </tr>
                          </table>
                        </td>
                      </tr> 
                       <tr>
                        <td colspan="6">
                           <table style="border-collapse: collapse;width: 80%;border: 1px solid black;text-align: center;margin:auto;">
                            <tr>
                              <td>&nbsp;O3&nbsp;&nbsp;<el-input v-model="ruleFormZhiKong.E_rc_Jc_o3Type" :disabled=disable autocomplete="off" ></el-input> </td>
                              <td>PM10<el-input v-model="ruleFormZhiKong.E_rc_Jc_pm10Type" :disabled=disable autocomplete="off" ></el-input> </td>
                              <td>PM25<el-input v-model="ruleFormZhiKong.E_rc_Jc_pm25Type" :disabled=disable autocomplete="off" ></el-input></td>   
                            </tr>
                          </table>
                        </td>
                      </tr> 


                      <!-- <tr>
                        <td colspan="6">
                           仪器编号
                        </td>
                      </tr>
                      <tr>
                         <td>S02: <el-input v-model="ruleFormZhiKong.E_rc_Jc_so2Code" autocomplete="off" ></el-input> </td>
                         <td>N0x: <el-input v-model="ruleFormZhiKong.E_rc_Jc_noXCode" autocomplete="off" ></el-input></td>
                         <td>CO:  <el-input v-model="ruleFormZhiKong.E_rc_Jc_coCode" autocomplete="off" ></el-input> </td>
                         <td>O3:  <el-input v-model="ruleFormZhiKong.E_rc_Jc_o3Code" autocomplete="off" ></el-input> </td>
                         <td>PM10: <el-input v-model="ruleFormZhiKong.E_rc_Jc_pm10Code" autocomplete="off" ></el-input> </td>
                         <td>PM25: <el-input v-model="ruleFormZhiKong.E_rc_Jc_pm25Code" autocomplete="off" ></el-input></td>                      
                      </tr> -->

                      <tr>
                        <td colspan="6">
                           站点质控记录表
                        </td>
                      </tr>
                      <tr>
                        <td colspan="6">
                          <table style="border-collapse: collapse;width: 98%;border: 1px solid black;text-align: center;margin:auto;">
                              <tr>
                                <td></td>
                                <td>零点</td>
                                <td>跨度80%</td>
                                <td>跨度漂移（%）</td>
                                <td>T90（min）</td>
                                <td>测试流量(L/min)</td>
                                <td>显示流量(L/min)</td>
                                <td>流量误差(%)</td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>SO2</td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1100" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1101" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1102" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1103" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1104" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1105" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1106" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1107" autocomplete="off" :disabled=disable></el-input> </td>
                              </tr>
                              <tr>
                                <td>NO</td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1108" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1109" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1110" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1111" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1112" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1113" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1114" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1115" autocomplete="off" :disabled=disable></el-input> </td>
                              </tr>
                              <tr>
                                <td>CO</td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1116" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1117" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1118" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1119" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1120" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1121" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1122" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1123" autocomplete="off" :disabled=disable></el-input> </td>
                              </tr>
                              <tr>
                                <td>O3</td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1124" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1125" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1126" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1127" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1128" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1129" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1130" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1131" autocomplete="off" :disabled=disable></el-input> </td>
                              </tr>

                              <tr>
                                <td></td>
                                <td>显示流(L/min)</td>
                                <td>实测流量(L/min)</td>
                                <td>流量误差（%）</td>
                                <td>显示流量误差(%)</td>
                                <td>膜片测试值</td>
                                <td>膜片标准值</td>
                                <td>膜片误差(%)</td>
                                <td>K或K0值</td>
                              </tr>
                              <tr>
                                <td>PM10</td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1132" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1133" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1134" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1135" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1136" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1137" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1138" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1139" autocomplete="off" :disabled=disable></el-input> </td>
                              </tr>
                              <tr>
                                <td>PM2.5</td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1140" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1141" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1142" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1143" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1144" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1145" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1146" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1147" autocomplete="off" :disabled=disable></el-input> </td>
                              </tr>

                            <tr>
                                <td></td>
                                <td>目标零气流量</td>
                                <td>实测零气流量</td>
                                <td>零气流量误差(%)</td>
                                <td>目标标气流量</td>
                                <td>实测标气流量</td>
                                <td>标气流量误差(%)</td>
                                <td>流量误差(%)</td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>MFC</td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1148" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1149" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1150" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1151" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1152" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1153" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1154" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1155" autocomplete="off" :disabled=disable></el-input> </td>
                              </tr>
                            


                          </table>
                        </td>
                      </tr>
                      <tr>
                              <td colspan="6">
                                标气与质控设备
                              </td>
                       </tr>
                      <tr>
                        <td colspan="6">
                          <table style="border-collapse: collapse;width: 98%;border: 1px solid black;text-align: center;margin:auto;">
                              <tr>
                                <td>标气</td>
                                <td>编号</td>
                                <td>有效期</td>
                                <td>流量计</td>
                                <td>编号</td>
                                <td>有效期</td>
                                <td></td>
                                <td>型号/编号</td>
                                <td>有效期</td>
                              </tr>
                              <tr>
                                <td>SO2标气</td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1156" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1157" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1158" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1159" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1160" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1161" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1162" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1163" autocomplete="off" :disabled=disable></el-input> </td>
                              </tr>
                              <tr>
                                <td>NO标气</td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1164" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1165" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1166" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1167" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1168" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1169" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1170" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1171" autocomplete="off" :disabled=disable></el-input> </td>
                              </tr>
                              <tr>
                                <td>CO标气</td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1172" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1173" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1174" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1175" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1176" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1177" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1178" autocomplete="off" :disabled=disable></el-input> </td>
                                <td><el-input v-model="ruleFormZhiKong.E_rc_Jc_1179" autocomplete="off" :disabled=disable></el-input> </td>
                              </tr>
                              <tr>
                                <td>备注：</td>
                                <td colspan="8"><textarea  v-model="ruleFormZhiKong.E_rc_Jc_1180" :disabled=disable style="width: 90%" id="Remark"></textarea></td>
                              </tr>
                          </table>
                        </td>
                      </tr>


                    <tr>
                     <td width="12%" style='width:12.66%;border:solid windowtext 1.0pt;border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
                      <p class=MsoNormal align=center style='margin-top:3.1pt;margin-right:0cm;margin-bottom:3.1pt;margin-left:0cm;text-align:center;layout-grid-mode:char'>
                        <b>
                            <span style='font-family:宋体;color:black'>总分</span>
                            
                        </b>
                    </p>
                      </td>
                      <td colspan="5">
                        {{
                              parseFloat(ruleFormZhiKong.E_rc_Jc_1_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_9_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_14_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_26_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_30_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_36_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_40_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_48_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_53_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_56_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_61_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_67_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_70_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_74_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_79_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_85_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_1006_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_95_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_106_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_116_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_127_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_135_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_142_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_149_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_151_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_153_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_155_Score)+
                              parseFloat(ruleFormZhiKong.E_rc_Jc_157_Score)
                              }}
                       </td>
                     </tr>

                    <tr>
                      <td>
                        其它需要特别记录的问题
                      </td>
                      <td colspan="5">
                           <el-input type="textarea" rows="15" v-model="ruleFormZhiKong.E_rc_Jc_410"  :disabled=disable autocomplete="off"></el-input>  
                      </td>
                    </tr>
                     

                     <tr> 
                       <td colspan="2">
                          检查人员： <el-input v-model="ruleForm.DealerName" autocomplete="off" :disabled=disable></el-input>
                       </td>
                        <td colspan="2">
                          确认人员:<el-input v-model="ruleForm.ReviewerName" autocomplete="off" :disabled=disable></el-input>
                        </td>
                        <td colspan="4">
                          <span v-if='showStatus<4'>检查</span><span v-else>复查</span>日期:  
                          <el-date-picker
                                            v-model="ruleFormZhiKong.CreateRptTime"
                                            type="date"
                                            :clearable=false
                                            :disabled=disable
                                            value-format="yyyy-MM-dd"
                                            placeholder="选择日期时间"
                                            align="right"
                                        >
                          </el-date-picker>
                       </td>
                      <!-- <td colspan="2">
                          签名及日期：<el-input v-model="ruleFormZhiKong.Sign" autocomplete="off" ></el-input> 
                       </td>-->                       
                     </tr>
                     
                     <tr>
                      <td width="12%" style='width:12.66%;border:solid windowtext 1.0pt;border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
                         检查附件（检查人员上传）
                      </td>
                      <td colspan="5">   
                        <el-upload
                          action=""
                          list-type="picture-card"
                          multiple
                          :limit="8"
                          :file-list="fileListAdd"               
                          :on-preview="handlePictureCardPreview"
                          :on-remove="handleAddRemove"
                          :on-change="handleAddChange"
                          :auto-upload="false"  
                          :class="{uoloadSty:showBtnImg,disUoloadSty:noneBtnImg,deletehide:hide}"  
                          >                      
                          <i class="el-icon-plus"></i>
                          <div class="el-upload__tip" slot="tip">（最多上传8个附件，每个附件不超过10M）</div>
                        </el-upload> 
                        <el-dialog :visible.sync="dialogVisiblePic">
                                  <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>                                      
                      </td>
                     </tr> 
                     <tr>
                      <td width="12%" style='width:12.66%;border:solid windowtext 1.0pt;border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
                         整改附件（运维人员上传）
                      </td>
                      <td colspan="5">  
                        <rateUpload :limit='8' :Ismultiple='true' :BusinessId='ruleForm.TaskNo' :BusinessType='101'></rateUpload> 
                        <div class="image">
                          <span v-for="(f,index) in ywzgfileListAdd" :key="index">
                            <el-image style="margin:2px;width: 100px; height: 100px" :src="f.fileURL" :preview-src-list="ywzgfileListAdd"></el-image>
                            <i style="position: relative;right: 27px;bottom: 87px;border-radius: 2px;background: #fff;cursor: pointer;" class="el-icon-delete" @click="deleteImg(f.fileGUID,f.fileURL)"></i>
                          </span>
                        </div>                         
                      </td>
                     </tr>  
                    </table>                                      
                    <div id="btn" style="margin: 20px 0; text-align: center">
                        <el-link type="primary" style="line-height: 20px; float:left;margin: 15px 25px; " @click.native="fileManage" >点击进入附件下载页面</el-link>
                        <el-button v-if="actionStatus.formSave"  type="primary" @click="saveReport">保存</el-button> 
                    </div>
                 </el-tab-pane>    

                 <el-tab-pane label="城市站运维现场检查特殊问题">                                          
                      <div class="tools">                                       
                         <el-button size="small" v-if="actionStatus.add" class=" el-button--iconButton" icon="el-icon-plus"   style="text-overflow: initial;" @click="handleAdd">添加</el-button>  
                         <el-button size="small" v-if="actionStatus.edit" class=" el-button--iconButton" icon="el-icon-plus"   style="text-overflow: initial;" @click="handleEdit">编辑</el-button>  
                         <el-button size="small" v-if="actionStatus.delete" class=" el-button--iconButton" icon="el-icon-plus"   style="text-overflow: initial;" @click="handleDel">删除</el-button>   
                         <el-button size="small" v-if="actionStatus.modifyFinish" class=" el-button--iconButton" icon="el-icon-plus"  style="text-overflow: initial;" @click="handleDealProblem">对问题进行整改</el-button>
                         <el-button size="small" v-if="actionStatus.reviewModify" class=" el-button--iconButton" icon="el-icon-plus"   style="text-overflow: initial;" @click="handleReview">复查整改结果</el-button>                                         
                       </div> 
                     
                        <rate-table :list="list_Maintentance"
                           @handleSelectionChange="handleSelectionChange_Maintentance"
                           @sizeChange="getSizeChange_Maintentance"
                           @currentPage="getCurrentPage_Maintentance"
                           @handleCellClick="handleCellClick"
                           :options="options_Maintentance"
                           :columns="columns_Maintentance"
                           :operates="operates_Maintentance"
                           :pageShow="page_Maintentance.pageShow"
                           :total="page_Maintentance.total"
                        ></rate-table>                      
                 </el-tab-pane>
               </el-tabs>
            </el-collapse-item>    
        </el-collapse>
       </div>

        <!--特殊问题弹出窗-->
        <div>
            <el-dialog
                :title="digTitle"
                :visible.sync="dialogVisible"
                width="50%"
                :before-close="handleClose"
                >
                <el-form :model="ruleForm1" status-icon :rules="rules1" ref="ruleForm1" label-width="100px" class="demo-ruleForm" size="mini">    

                      <el-row>
                        <el-col :span="24">
                            <div>
                                <el-form-item label="问题分类：" prop="SpecialProblemType">
                                    <el-select v-model='ruleForm1.SpecialProblemType'   placeholder='请选择问题分类' style="width: 100%;">
                                       <el-option v-for='item in SpecialProblemOptions' :key='item.value' :label='item.label' :value='item.value'></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>                        
                    </el-row>     
                    
                    <el-row>
                        <el-col :span="24">
                            <div>
                                <el-form-item label="责任方：" prop="ResponsibleParty">
                                    <el-select v-model='ruleForm1.ResponsibleParty'   placeholder='请选择责任方' style="width: 100%;">
                                       <el-option v-for='item in ResponsiblePartyOptions' :key='item.value' :label='item.label' :value='item.value'></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>                        
                    </el-row>     

                     <el-row>
                        <el-col :span="24">
                            <div>
                                <el-form-item label="整改问题：" prop="InspectProblem">
                                    <el-input type="textarea" rows="5" v-model="ruleForm1.InspectProblem" autocomplete="off"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>                        
                    </el-row>     
                    


                    <el-row>                   
                        <el-col :span="24">
                            <div> 
                                <el-form-item label="整改时间：" prop="ModifyDateTime">
                                     <el-date-picker
                                               v-model="ruleForm1.ModifyDateTime"
                                               type="date"   
                                                :clearable=false                                          
                                               value-format="yyyy-MM-dd"
                                               placeholder="请选择日期">
                                    </el-date-picker>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                   <el-row>
                        <el-col :span="9">&nbsp;</el-col>
                        <el-col :span="6">
                            <div> 
                               <el-form-item>
                                    <el-button type="primary" @click="submitDetailForm('ruleForm1')">保存</el-button>                                
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="9">&nbsp;</el-col>
                   </el-row>                
                </el-form>
            </el-dialog>
        </div>

        <!--打分确认-->
        <div>
          <el-dialog title="整改结果提交" :visible.sync="aduitFormDialogVisible" width="30%">
            <el-form
              :model="aduitForm"
              status-icon
              ref="aduitForm"
              label-width="100px"
              class="demo-aduitForm"
              size="mini"
            >
              <el-row>
                <el-col :span="12">
                  <div>
                    <el-form-item label="确认结果：" prop="Result">
                      <el-radio-group v-model="aduitForm.Result">
                        <el-radio  label="1">通过</el-radio>
                        <el-radio  label="2">不通过</el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div>
                    <el-form-item label="相关意见：" prop="Reason">
                      <el-input type="textarea" v-model="aduitForm.Reason" autocomplete="off"></el-input>
                    </el-form-item>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6">&nbsp;</el-col>
                <el-col :span="10">
                  <div>
                    <el-form-item>
                      <el-button type="primary" @click="submitForm('aduitForm','审核')">确定</el-button>
                    </el-form-item>
                  </div>
                </el-col>
                <el-col :span="6">&nbsp;</el-col>
              </el-row>
            </el-form>
          </el-dialog>
        </div>

         <!--第四方复核确认-->
        <div>
          <el-dialog title="第四方复核确认" :visible.sync="fourthJudgeFormDialogVisible" width="30%">
            <el-form
              :model="fourthJudgeForm"
              status-icon
              ref="fourthJudgeForm"
              label-width="100px"
              class="demo-aduitForm"
              size="mini"
            >
              <el-row>
                <el-col :span="12">
                  <div>
                    <el-form-item label="复核结果：" prop="Result">
                      <el-radio-group v-model="fourthJudgeForm.Result">
                        <el-radio  label="1">通过</el-radio>
                        <el-radio  label="2">不通过</el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div>
                    <el-form-item label="相关意见：" prop="Reason">
                      <el-input type="textarea" v-model="fourthJudgeForm.Reason" autocomplete="off"></el-input>
                    </el-form-item>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6">&nbsp;</el-col>
                <el-col :span="10">
                  <div>
                    <el-form-item>
                      <el-button type="primary" @click="submitForm('fourthJudgeForm','第四方复核')">确定</el-button>
                    </el-form-item>
                  </div>
                </el-col>
                <el-col :span="6">&nbsp;</el-col>
              </el-row>
            </el-form>
          </el-dialog>
        </div>
        
        <!--填写特殊问题整改弹出窗 -->
        <div>
          <el-dialog title="问题整改描述" :visible.sync="modifyProblemDialogVisible" width="30%">
            <el-form
              :model="modifyProblemForm"
              status-icon
              ref="modifyProblemDialogVisible"
              label-width="100px"
              class="demo-aduitForm"
              size="mini"
            >
              <el-row>
                <el-col :span="24">
                  <div>
                    <el-form-item label="内容：" prop="ModifyProblem">
                      <el-input type="textarea" rows="5" v-model="modifyProblemForm.ModifyProblem" autocomplete="off"></el-input>
                    </el-form-item>
                  </div>
                </el-col>       
              </el-row>

              <el-row>
                <el-col :span="24">
                  <div>
                    <el-form-item v-show="true" label="图片上传：" prop="FileURL">
                      <rateJainChaUpload :limit="10"  :Ismultiple="true" :BusinessId="modifyProblemForm.TaskChildNo" :BusinessType="39"
                      @uploadSuccess="uploadSuccess" ></rateJainChaUpload>
                    </el-form-item>
                  </div>
                </el-col>       
              </el-row>

              <el-row>
                <el-col :span="6">&nbsp;</el-col>
                <el-col :span="10">
                  <div>
                    <el-form-item>
                      <el-button type="primary" @click="submitForm('modifyProblem','对问题进行整改')">保存</el-button>
                    </el-form-item>
                  </div>
                </el-col>
                <el-col :span="6">&nbsp;</el-col>
              </el-row>
            </el-form>
          </el-dialog>
        </div>

        <!-- 现场复查-->
        <div>
          <el-dialog title="现场复查确认" :visible.sync="reviewJudgeFormDialogVisible" width="35%">
            <el-form
              :model="reviewJudgeForm"
              status-icon
              ref="fourthJudgeForm"
              label-width="100px"
              class="demo-aduitForm"
              size="mini"
            >
              <el-row>
                 <el-col :span="12">
                  <div>
                    <!--新增-->
                    <el-form-item label="复查结果：" prop="Status">                      
                        <el-radio-group v-model="reviewJudgeForm.Status">
                          <el-radio :label="3">通过</el-radio>
                          <el-radio :label="2">不通过</el-radio>
                        </el-radio-group>
                    </el-form-item>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div>
                    <el-form-item label="复查意见：" prop="ModifyProblem">
                      <el-input type="textarea" v-model="reviewJudgeForm.ModifyProblem" autocomplete="off"></el-input>
                    </el-form-item>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6">&nbsp;</el-col>
                <el-col :span="10">
                  <div>
                    <el-form-item>
                      <el-button type="primary" @click="submitForm('reviewJudgeForm','现场复查')">保存</el-button>
                    </el-form-item>
                  </div>
                </el-col>
                <el-col :span="6">&nbsp;</el-col>
              </el-row>
            </el-form>
          </el-dialog>
        </div>

        <!-- 运维人员图片查看-->
        <div>
          <el-dialog title="图片一览" :visible.sync="picDialogVisible" width="50%">
                <div class="image">
                        <el-image v-for="(f,index) in imgArr" :key="index" style="margin:2px;width: 200px; height: 200px" :src="f" :preview-src-list="imgArr"></el-image>
                </div>
          </el-dialog>
        </div>
        
       <!-- 附件管理-->
       <div>
          <el-dialog title="附件管理" :visible.sync="fileInfoManageVisible" width="50%" height="30%">
                 <rate-table :list="list_file"
                           @handleSelectionChange="handleSelectionChange_file"
                           @sizeChange="getSizeChange_file"
                           @currentPage="getCurrentPage_file"
                           @handleCellClick="handleCellFileClick"
                           :options="options_file"
                           :columns="columns_file"
                           :operates="operates_file"
                           :pageShow="page_file.pageShow"
                           :total="page_file.total"
                ></rate-table>
          </el-dialog>
       </div>

       <!-- 整改问题历史记录表-->
       <div>
          <el-dialog title="整改问题历史记录" :visible.sync="problemHistoryVisible" width="50%" height="30%">
                 <rate-table :list="list_problemHistory"
                           @handleSelectionChange="handleSelectionChange_problemHistory"
                           @sizeChange="getSizeChange_problemHistory"
                           @currentPage="getCurrentPage_problemHistory"
                           :options="options_problemHistory"
                           :columns="columns_problemHistory"
                           :operates="operates_problemHistory"
                           :pageShow="page_problemHistory.pageShow"
                           :total="page_problemHistory.total"
                ></rate-table>
          </el-dialog>
       </div>

        
      </el-main>
    </el-container>
  </div>
</template>

<script>
import treeSStation from "../common/treeSStation"; //引入treeSStation组件
import rateAuditRecord from "../common/rateAuditRecord";
import rateCascader from "../common/rateCascader"; //引入rateCascader组件
import rateJainChaUpload from "../common/rateJianChaUpload"; //引入rateCascader组件
import rateSelect from "../common/rateSelect";
import rateTable  from '../common/rateTable';   //引入rateTable组件
import rateUpload  from '../common/rateUpload4';   //引入rateUpload组件


export default {
  name: "taskDisplay",
  data() {
    return {
     //检查人员图片上传相关    
     param: new FormData(),   
     problemHistoryVisible:false,
     fileInfoManageVisible:false,  
     dialogVisiblePic:false,
     dialogImageUrl:'',      
     fileListAdd:[],
     ywzgfileListAdd:[],
     hideUpload: false,
     showBtnImg:true,
     noneBtnImg:false,
     limitCountImg:8,   //上传图片的最大数量
     hide:true,
      
     //控件是否禁用
     disable:false,
     taskStatus:'',

      //新增
      picDialogVisible:false,
      imgArr:[],
      filesInfo:[],
     
      statusInfo:false,
      obj:{},
      stepList:[],
      showStatus:1,

      //运维单位下拉框
      rateSelect:{
            model: '',
            selectUrl:this.api+'/api/Yw_Unit/GetAllUnit',
		        urlParams: JSON.stringify({}),
            optionKeys: JSON.stringify({
                value: 'unitId',
                label: 'unitName'
            }),
            showLabels: 'unitName',
            disables: '',
      },

      //任务类型下拉框
      rateSelectTaskType:{
            model: '',
            selectUrl:this.api+'/api/InspectionPlan/GetTaskCategories',
		        urlParams: JSON.stringify({}),
            optionKeys: JSON.stringify({
                value: 'value',
                label: 'text'
            }),
            showLabels: 'text',
            disables: '',
      },
     
      //检查任务表单
      ruleForm: {
        TaskCategoryId: '21',
        MaintainceWay:'1',
        TaskNo: '',
        TaskType:'12', //省站检查
        Title:'',
        SStation: '',
        SStationName: '',
        UnitId: '',
        UnitName: '',
        Remark: '',
        PlanDealTime:'',
        City:'',
        CreatedBy:'',
        DealerName:'',
        ReviewerName:'',
       
      },
      
      //检查评分表单
      ruleFormZhiKong:{ 
        Sign:'',   //签名 
        CreateRptTime:'',    
        headers: { token: sessionStorage.getItem("Authorization") },
        //仪器型号，仪器编号
        E_rc_Jc_so2Type:'',
        E_rc_Jc_noXType:'',
        E_rc_Jc_coType:'',
        E_rc_Jc_o3Type:'',
        E_rc_Jc_pm10Type:'',
        E_rc_Jc_pm25Type:'',         
        
        E_rc_Jc_so2Code:'',
        E_rc_Jc_noXCode:'',
        E_rc_Jc_coCode:'',
        E_rc_Jc_o3Code:'',
        E_rc_Jc_pm10Code:'',
        E_rc_Jc_pm25Code:'',     

        //得分栏
        E_rc_Jc_1_Score:1,
        E_rc_Jc_9_Score:2,
        E_rc_Jc_14_Score:2,
        E_rc_Jc_26_Score:1,
        E_rc_Jc_30_Score:3,
        E_rc_Jc_36_Score:1,
        E_rc_Jc_40_Score:2,
        E_rc_Jc_48_Score:3,
        E_rc_Jc_53_Score:1,
        E_rc_Jc_56_Score:2,
        E_rc_Jc_61_Score:2,
        E_rc_Jc_67_Score:2,
        E_rc_Jc_70_Score:1,
        E_rc_Jc_74_Score:2,
        E_rc_Jc_79_Score:5,
        E_rc_Jc_85_Score:5,
        E_rc_Jc_1006_Score:0,
        E_rc_Jc_95_Score:5,
        E_rc_Jc_106_Score:5,
        E_rc_Jc_116_Score:5,
        E_rc_Jc_127_Score:5,
        E_rc_Jc_135_Score:5,
        E_rc_Jc_142_Score:5,
        E_rc_Jc_149_Score:3,
        E_rc_Jc_151_Score:2,
        E_rc_Jc_153_Score:5,
        E_rc_Jc_155_Score:20,
        E_rc_Jc_157_Score:5,

        //备注栏
        E_rc_Jc_1_Mark :'',
        E_rc_Jc_9_Mark :'',
        E_rc_Jc_14_Mark :'',
        E_rc_Jc_26_Mark:'',
        E_rc_Jc_30_Mark:'',
        E_rc_Jc_36_Mark:'',
        E_rc_Jc_40_Mark:'',
        E_rc_Jc_48_Mark:'',
        E_rc_Jc_53_Mark:'',
        E_rc_Jc_56_Mark:'',
        E_rc_Jc_61_Mark:'',
        E_rc_Jc_67_Mark:'',
        E_rc_Jc_70_Mark:'',
        E_rc_Jc_74_Mark:'',
        E_rc_Jc_79_Mark:'',
        E_rc_Jc_85_Mark:'',
        E_rc_Jc_1006_Mark:'',
        E_rc_Jc_95_Mark:'',
        E_rc_Jc_106_Mark:'',
        E_rc_Jc_116_Mark:'',
        E_rc_Jc_127_Mark:'',
        E_rc_Jc_135_Mark:'',
        E_rc_Jc_1000:'',
        E_rc_Jc_1001:'',
        E_rc_Jc_1002:'',
        E_rc_Jc_1003:'',
        E_rc_Jc_1004:'',
        E_rc_Jc_1005:'',
        E_rc_Jc_142_Mark:'',
        E_rc_Jc_149_Mark:'',
        E_rc_Jc_151_Mark:'',
        E_rc_Jc_153_Mark:'',
        E_rc_Jc_155_Mark:'',
        E_rc_Jc_157_Mark:'',
        E_rc_Jc_410:'',

        //仪器值栏
E_rc_Jc_350:'',     
E_rc_Jc_351:'',
E_rc_Jc_351_new:'',     
E_rc_Jc_171:'',     
E_rc_Jc_172:'',     
E_rc_Jc_173:'',      
E_rc_Jc_169:'',                 
E_rc_Jc_168:'',      
E_rc_Jc_167:'',     
E_rc_Jc_166:'',       
E_rc_Jc_165:'',      
E_rc_Jc_164:'',       
E_rc_Jc_179:'',      
E_rc_Jc_180:'',      
E_rc_Jc_181:'',       
E_rc_Jc_182:'',       
E_rc_Jc_183:'',      
E_rc_Jc_184:'',         
E_rc_Jc_185:'',      
E_rc_Jc_186:'',      
E_rc_Jc_187:'',      
E_rc_Jc_189:'',      
E_rc_Jc_190:'',      
E_rc_Jc_191:'',      
E_rc_Jc_192:'',      
E_rc_Jc_193:'',       
E_rc_Jc_195:'',      
E_rc_Jc_196:'',       
E_rc_Jc_197:'',       
E_rc_Jc_206:'',       
E_rc_Jc_207:'',       
E_rc_Jc_208:'',       
E_rc_Jc_209:'',      
E_rc_Jc_210:'',      
E_rc_Jc_211:'',      
E_rc_Jc_212:'',      
E_rc_Jc_213:'',       
E_rc_Jc_214:'',      
E_rc_Jc_216:'',       
E_rc_Jc_217:'', 
E_rc_Jc_218:'', 
E_rc_Jc_219:'', 
E_rc_Jc_220:'', 
E_rc_Jc_222:'', 
E_rc_Jc_223:'', 
E_rc_Jc_224:'', 
E_rc_Jc_225:'', 
E_rc_Jc_235:'', 
E_rc_Jc_236:'', 
E_rc_Jc_237:'', 
E_rc_Jc_238:'', 
E_rc_Jc_239:'', 
E_rc_Jc_240:'', 
E_rc_Jc_241:'', 
E_rc_Jc_242:'', 
E_rc_Jc_243:'', 
E_rc_Jc_244:'', 
E_rc_Jc_245:'', 
E_rc_Jc_246:'', 
E_rc_Jc_247:'', 
E_rc_Jc_248:'', 
E_rc_Jc_249:'', 
E_rc_Jc_250:'', 
E_rc_Jc_251:'', 
E_rc_Jc_252:'', 
E_rc_Jc_253:'', 
E_rc_Jc_262:'',
E_rc_Jc_263:'',
E_rc_Jc_264:'',
E_rc_Jc_265:'',
E_rc_Jc_266:'',
E_rc_Jc_267:'',
E_rc_Jc_269:'',
E_rc_Jc_268:'',
E_rc_Jc_270:'',
E_rc_Jc_272:'',
E_rc_Jc_273:'',
E_rc_Jc_274:'',
E_rc_Jc_275:'',
E_rc_Jc_276:'',
E_rc_Jc_278:'',
E_rc_Jc_279:'',
E_rc_Jc_280:'',
E_rc_Jc_282:'',
E_rc_Jc_283:'',
E_rc_Jc_284:'',
E_rc_Jc_294:'',
E_rc_Jc_295:'',
E_rc_Jc_296:'',
E_rc_Jc_297:'',
E_rc_Jc_298:'',
E_rc_Jc_299:'',
E_rc_Jc_300:'',
E_rc_Jc_301:'',
E_rc_Jc_308:'',
E_rc_Jc_309:'',
E_rc_Jc_310:'',
E_rc_Jc_311:'',
E_rc_Jc_312:'',
E_rc_Jc_313:'',
E_rc_Jc_314:'',
E_rc_Jc_315:'',

        //checkbox
        E_rc_Jc_2:false,
        E_rc_Jc_3:false,
        E_rc_Jc_4:false,
        E_rc_Jc_5:false,
        E_rc_Jc_5_new:false,
        E_rc_Jc_10:false,
        E_rc_Jc_11:false,      
        E_rc_Jc_15:false,
        E_rc_Jc_16:false,
        E_rc_Jc_17:false,
        E_rc_Jc_18:false,
        E_rc_Jc_19:false,
        E_rc_Jc_20:false,
        E_rc_Jc_21:false,
        E_rc_Jc_27:false,
        E_rc_Jc_28:false,
        E_rc_Jc_31:false,
        E_rc_Jc_32:false,
        E_rc_Jc_33:false,
        E_rc_Jc_34:false,
        E_rc_Jc_33_new:false,
        E_rc_Jc_34_new:false,
        E_rc_Jc_37:false,
        E_rc_Jc_38:false,
        E_rc_Jc_41:false,
        E_rc_Jc_42:false,
        E_rc_Jc_43:false,
        E_rc_Jc_44:false,
        E_rc_Jc_45:false,
        E_rc_Jc_46:false,
        E_rc_Jc_49:false,
        E_rc_Jc_50:false,
        E_rc_Jc_51:false,
        E_rc_Jc_51_new:false,
        E_rc_Jc_54:false,
        E_rc_Jc_57:false,
        E_rc_Jc_58:false,
        E_rc_Jc_58_new:false,
        E_rc_Jc_62:false,
        E_rc_Jc_63:false,
        E_rc_Jc_64:false,
        E_rc_Jc_65:false,
        E_rc_Jc_68:false,
        E_rc_Jc_71:false,
        E_rc_Jc_72:false,
        E_rc_Jc_75:false,
        E_rc_Jc_77:false,
        E_rc_Jc_77_new:false,
        E_rc_Jc_401_new:false,
        E_rc_Jc_401:false,
        E_rc_Jc_80:false,
        E_rc_Jc_81:false,
        E_rc_Jc_82:false,
        E_rc_Jc_86:false,
        E_rc_Jc_87:false,
        E_rc_Jc_88:false,
        E_rc_Jc_89:false,
        E_rc_Jc_90:false,
        E_rc_Jc_91:false,
        E_rc_Jc_92:false,
        E_rc_Jc_93:false,  
        E_rc_Jc_92_new:false,
        E_rc_Jc_93_new:false,      
        E_rc_Jc_96:false,
        E_rc_Jc_96_new:false,
        E_rc_Jc_97:false,
        E_rc_Jc_98:false,
        E_rc_Jc_98_new:false,
        E_rc_Jc_102_new:false,
        E_rc_Jc_99:false,
        E_rc_Jc_100:false,
        E_rc_Jc_101:false,
        E_rc_Jc_102:false,
        E_rc_Jc_103:false,
        E_rc_Jc_104:false,
        E_rc_Jc_107:false,
        E_rc_Jc_107_new:false,
        E_rc_Jc_109_new:false,
        E_rc_Jc_108:false,
        E_rc_Jc_109:false,
        E_rc_Jc_110:false,
        E_rc_Jc_111:false,
        E_rc_Jc_112:false,
        E_rc_Jc_113:false,
        E_rc_Jc_114:false,
        E_rc_Jc_114_new:false,
        E_rc_Jc_117:false,
        E_rc_Jc_117_new:false,
        E_rc_Jc_118:false,
        hg:true,
        hg25:true,
        bhg:false,
        bhg25:false,
        E_rc_Jc_119:false,
        E_rc_Jc_120:false,
        E_rc_Jc_121:false,
        E_rc_Jc_121_new:false,
        E_rc_Jc_122:false,
        E_rc_Jc_123:false,
        E_rc_Jc_124:false,
        E_rc_Jc_125:false,
        E_rc_Jc_128:false,
        E_rc_Jc_129:false,
        E_rc_Jc_130:false,
        E_rc_Jc_131:false,
        E_rc_Jc_132:false,
        E_rc_Jc_403:false,
        E_rc_Jc_403_new:false,
        E_rc_Jc_129_new:false,
        E_rc_Jc_132_new:false,
        E_rc_Jc_136:false,
        E_rc_Jc_137:false,
        E_rc_Jc_138:false,
        E_rc_Jc_139:false,
        E_rc_Jc_140:false,
        E_rc_Jc_140_new:false,
        E_rc_Jc_137_new:false,
        E_rc_Jc_501_new:false,
        E_rc_Jc_501:false,
        E_rc_Jc_143:false,
        E_rc_Jc_144:false,
        E_rc_Jc_145:false,
        E_rc_Jc_146:false,
        E_rc_Jc_147:false,
        E_rc_Jc_352:false,
        E_rc_Jc_353:false,
        E_rc_Jc_400:false,
        E_rc_Jc_4011:false,
        E_rc_Jc_402:false,
        E_rc_Jc_4033:false,
        E_rc_Jc_404:false,
        E_rc_Jc_405:false,
        E_rc_Jc_406:false,
        E_rc_Jc_407:false,
        E_rc_Jc_408:false,
        E_rc_Jc_409:false,

        //新加的表格
        E_rc_Jc_1100:'',
        E_rc_Jc_1101:'',
        E_rc_Jc_1102:'',
        E_rc_Jc_1103:'',
        E_rc_Jc_1104:'',
        E_rc_Jc_1105:'',
        E_rc_Jc_1106:'',
        E_rc_Jc_1107:'',
        E_rc_Jc_1108:'',
        E_rc_Jc_1109:'',
        E_rc_Jc_1110:'',
        E_rc_Jc_1111:'',
        E_rc_Jc_1112:'',
        E_rc_Jc_1113:'',
        E_rc_Jc_1114:'',
        E_rc_Jc_1115:'',
        E_rc_Jc_1116:'',
        E_rc_Jc_1117:'',
        E_rc_Jc_1118:'',
        E_rc_Jc_1119:'',
        E_rc_Jc_1120:'',
        E_rc_Jc_1121:'',
        E_rc_Jc_1122:'',
        E_rc_Jc_1123:'',
        E_rc_Jc_1124:'',
        E_rc_Jc_1125:'',
        E_rc_Jc_1126:'',
        E_rc_Jc_1127:'',
        E_rc_Jc_1128:'',
        E_rc_Jc_1129:'',
        E_rc_Jc_1130:'',
        E_rc_Jc_1131:'',
        E_rc_Jc_1132:'',
        E_rc_Jc_1133:'',
        E_rc_Jc_1134:'',
        E_rc_Jc_1135:'',
        E_rc_Jc_1136:'',
        E_rc_Jc_1137:'',
        E_rc_Jc_1138:'',
        E_rc_Jc_1139:'',
        E_rc_Jc_1140:'',
        E_rc_Jc_1141:'',
        E_rc_Jc_1142:'',
        E_rc_Jc_1143:'',
        E_rc_Jc_1144:'',
        E_rc_Jc_1145:'',
        E_rc_Jc_1146:'',
        E_rc_Jc_1147:'',
        E_rc_Jc_1148:'',
        E_rc_Jc_1149:'',
        E_rc_Jc_1150:'',
        E_rc_Jc_1151:'',
        E_rc_Jc_1152:'',
        E_rc_Jc_1153:'',
        E_rc_Jc_1154:'',
        E_rc_Jc_1155:'',
        E_rc_Jc_1156:'',
        E_rc_Jc_1157:'',
        E_rc_Jc_1158:'',
        E_rc_Jc_1159:'',
        E_rc_Jc_1160:'',
        E_rc_Jc_1161:'',
        E_rc_Jc_1162:'',
        E_rc_Jc_1163:'',
        E_rc_Jc_1164:'',
        E_rc_Jc_1165:'',
        E_rc_Jc_1166:'',
        E_rc_Jc_1167:'',
        E_rc_Jc_1168:'',
        E_rc_Jc_1169:'',
        E_rc_Jc_1170:'',
        E_rc_Jc_1171:'',
        E_rc_Jc_1172:'',
        E_rc_Jc_1173:'',
        E_rc_Jc_1174:'',
        E_rc_Jc_1175:'',
        E_rc_Jc_1176:'',
        E_rc_Jc_1177:'',
        E_rc_Jc_1178:'',
        E_rc_Jc_1179:'',
        E_rc_Jc_1180:''
      },
    
      //检查特殊问题表单
      ruleForm1:{ 
        Id:'',
        InspectProblem:'',
        ModifyDateTime:'',
        TaskNo:'',
        SpecialProblemType:'',
        ResponsibleParty:'',
      },

      type:'',
      digTitle:'',
      fromTab:'',
  
      rules: {
            SStation: [{ required: true, message: '请输入站点名称', trigger: 'blur' }],
            City: [{ required: true, message: '请输入所属城市', trigger: 'blur' }],
            UnitId: [{ required: true, message: '请输入运维单位', trigger: 'blur' }],
            PlanDealTime: [{ required: true, message: '请选择检查时间', trigger: 'blur' }],
            Title: [{ required: true, message: '请填写任务名称', trigger: 'blur' }],
      },

      rules1: {
           InspectProblem: [{ required: true, message: '请填写检查问题描述', trigger: 'blur' }],
           ModifyDateTime: [{ required: true, message: '请选择整改时间', trigger: 'blur' }],
           SpecialProblemType: [{ required: true, message: '请选择问题类别', trigger: 'blur' }],
           ResponsibleParty:[{ required: true, message: '请选择责任方', trigger: 'blur' }],
      },

       //计划状态
      StatusOptions: [{
                value: 1,
                label: '待提交'
            },{
                value: 2,
                label: '待初审'
            },{
                value: 4,
                label: '已生效'
            },{
                value: 10,
                label: '已作废'
       }], 


       //特殊问题类别
      SpecialProblemOptions: [{
                value: '005001',
                label: '原则性问题'
            },{
                value: '005002',
                label: '一般性质量问题'
            },{
                value: '005003',
                label: '地方保障责任问题'
       },{
                value: '005004',
                label: '回头看问题'
       }], 


       //负责方
       ResponsiblePartyOptions:[
              {
                value: '1',
                label: '地方'
            },{
                value: '2',
                label: '运维'
            }
       ],

        
        //检查方式
      MaintainceWayOptions: [{
                value: '1',
                label: '现场'
            },{
                value: '2',
                label: '远程'
      }], 
      
      //按钮显示状态
      actionStatus: {
        sava: false,
        submit: false,
        aduit: false,
        taskSave :false,
        formSave:false,
        add:false,
        delete:false,
        modifyFinish:false,
        reviewModify:false,
        edit:false,
      },
 
      aduitForm: {
        BusinessId:'',
        AuditTime:'',
        Result: '1',
        Reason: '',
        Status:'',
      },
      
       //第四方复核
      fourthJudgeForm:{
            Result: '1',
            Reason: '',
      },
      
       //现场复查
      reviewJudgeForm:{
         Id:'',
         TaskNo:'',
         ModifyProblem:'',
         Status:3,
         TaskChildNo:'',
         InspectProblem:'',
         ModifyDateTime:'',
         SpecialProblemType:'',
         ResponsibleParty:'',
      },
      
      //整改问题
      modifyProblemForm:{
         Id:'',
         TaskNo:'',
         ModifyProblem:'',
         FileName:'',
         FileURL:'',
         TaskChildNo:'',
         InspectProblem:'',
         ModifyDateTime:'',
         SpecialProblemType:'',
         ResponsibleParty:'',
      },

      activeNames: ["1"],
      activeNames1: ["1"],
      isSave: false, //是否需要插入审核记录表,true是，false否
      
      //运维单位
      rateSelect: {
        model: "",
        selectUrl: this.api + "/api/Yw_Unit/GetAllUnit",
        urlParams: JSON.stringify({}),
        optionKeys: JSON.stringify({
          value: "unitId",
          label: "unitName",
        }),
        showLabels: "unitName",
        disables: "",
      },     
      dialogVisible: false,
      aduitFormDialogVisible: false,
      fourthJudgeFormDialogVisible:false,
      modifyProblemDialogVisible:false,
      reviewJudgeFormDialogVisible:false,
      view: "",
      
      page_Maintentance:{   //关于页码的相关参数
            pageShow:true,  //是否显示分页
            total:0,        //总条数
            pageSize:10,    //每页条数
            pageNo:1,       //第几页
      },

      page_file:{   //关于页码的相关参数
            pageShow:true,  //是否显示分页
            total:0,        //总条数
            pageSize:10,    //每页条数
            pageNo:1,       //第几页
      },

       page_problemHistory:{   //关于页码的相关参数
            pageShow:true,  //是否显示分页
            total:0,        //总条数
            pageSize:10,    //每页条数
            pageNo:1,       //第几页
      },
    
      handleSelection_problemHistory:[],
      handleSelection_Maintentance:[],
      handleSelection_file:[],
      list_Maintentance:[],
      list_file:[],
      hasYWZG:true,
      list_problemHistory:[],
     
      options_problemHistory: {  // table样式参数
                stripe: true, // 是否为斑马纹 table
                loading: false, // 是否添加表格loading加载动画
                highlightCurrentRow: true, // 是否支持当前行高亮显示
                mutiSelect: false, // 是否支持列表项选中功能
      }, // table 的参数结束
      
      options_Maintentance: {  // table样式参数
                stripe: true, // 是否为斑马纹 table
                loading: false, // 是否添加表格loading加载动画
                highlightCurrentRow: true, // 是否支持当前行高亮显示
                mutiSelect: true, // 是否支持列表项选中功能
      }, // table 的参数结束

      options_file: {  // table样式参数
                stripe: true, // 是否为斑马纹 table
                loading: false, // 是否添加表格loading加载动画
                highlightCurrentRow: true, // 是否支持当前行高亮显示
                mutiSelect: false, // 是否支持列表项选中功能
      }, // table 的参数结束
   
      columns_file: [
                { prop: 'fileGUID', label: 'guid', align: 'center' ,isShow:false },
                { prop: 'businessId', label: '任务编号', align: 'center' ,isShow:true },
                { prop: 'fileName', label: '文件名', align: 'center',isShow:true, formatter: (row, column, cellValue) => {                   
                          return '<a style="color:blue;">'+row.fileName+'</a>';             
                }},
                { prop: 'createdTime', label: '上传时间', align: 'center',isShow:true,formatter(row, column, cellValue){
                        if(row.createdTime){
                            return row.createdTime.replace("T"," ");
                        }
                }},       
      ],// 需要展示的列
      
      columns_Maintentance: [
                { prop: 'taskNo', label: 'id', align: 'center' ,isShow:false },
                { prop: 'inspectProblem', label: '检查问题描述(检查人员填写)', align: 'center',isShow:true  },
                { prop: 'info', label: '问题类别', align: 'center',isShow:true  },
                { prop: 'responsiblePartyName', label: '责任方', align: 'center',isShow:true  },
                { prop: 'show_ModifyDateTime', label: '计划整改时间（检查人员填写）', align: 'center',isShow:true  },
                { prop: 'modifyProblem', label: '最新整改相关信息',  align: 'center' ,isShow:true,
                  formatter: (row, column, cellValue) => {
                     if(row.modifyProblem==""||row.modifyProblem==null){
                          return '<a style="color:blue;">--</a>'
                     }else{
                          return '<a style="color:blue;">'+row.modifyProblem+'</a>';
                     }                 
                  }
                },
                { prop: 'show_ModifyStatus', label: '状态', align: 'center' ,isShow:true },
                { prop: 'fujian', label: '附件',  align: 'center' ,isShow:true,
                  formatter: (row, column, cellValue) => {                  
                         return '<a style="color:blue;">'+row.fujian+'</a>';                           
                  }
                }
      ],// 需要展示的列
      
      //整改历史记录表
      columns_problemHistory: [
                { prop: 'taskChildNo', label: 'id', align: 'center' ,isShow:false },
                { prop: 'inspectProblem', label: '整改问题', align: 'center',isShow:true  },
                { prop: 'modifyProblem', label: '历史处理结果',  align: 'center' ,isShow:true,                
                   formatter: (row, column, cellValue) => {
                     if(row.modifyProblem==""||row.modifyProblem==null){
                          return '--'
                     }else{
                          return row.modifyProblem;
                     }                 
                  }
                },
                { prop: 'show_ActualDealTime', label: '处理时间', align: 'center',isShow:true  },
                { prop: 'show_ChineseStatus', label: '状态', align: 'center' ,isShow:true }
      ],// 需要展示的列
       
      operates_file: {   //操作栏
              width:100,      
              fixed: 'right',
              list: [{
                id:'1',
                label: '删除',
                show: true,
                bgColortype:'danger',
                className:'searchAll',
                hasbutton:'arrivalRecord_handleMultiplDel',//按钮权限控制
                disabled: false,
                method: (index, row) => {
                    this.deleteImg(row.fileGUID, "");
                }
            }]
      }, // 列操作按钮

      operates_Maintentance: {   //操作栏
              width:100,      
              fixed: 'right',
              list: []
      }, // 列操作按钮

      operates_problemHistory: {   //操作栏
              width:100,      
              fixed: 'right',
              list: []
        }, // 列操作按钮
    };
  },
  methods: {    
    
    //特殊问题编辑
    handleEdit(){
        var self=this;
        var ids = '';
        if (this.handleSelection_Maintentance == "") {
             self.$message({
                    message: "请选择要编辑的数据！",
                    type: "warning"  //success,warning,info,error
                });
                return;
            }    
            if(this.handleSelection_Maintentance.length>1){
                 self.$message({
                    message: "一次只能编辑一条数据！",
                    type: "warning"  //success,warning,info,error
                });
                return;
            } 
            let status= this.handleSelection_Maintentance[0].status;
            if(status==3)
            {
                 self.$message({
                    message: "此问题已经复查通过了！",
                    type: "warning"  //success,warning,info,error
                });
                return;
            } 
            if(status==1)
            {
                 self.$message({
                    message: "此问题已经处理过了，等待复查！",
                    type: "warning"  //success,warning,info,error
                });
                return;
            }            
            let id = self.handleSelection_Maintentance[0].id;
            //获取特殊整改问题
            this.getSpecialProblemId(id);
            self.digTitle="编辑检查特殊问题";
            self.dialogVisible=true;
    },
     
    //特殊问题整改编辑
    getSpecialProblemId(id){
        var self=this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/FourthInspectionTask/GetSpecialProblemById?id=' + id
            }).then(res => {
                if(res.status==200){
                    self.ruleForm1.Id=res.data.data.id;
                    self.ruleForm1.InspectProblem=res.data.data.inspectProblem;
                    self.ruleForm1.ModifyDateTime=res.data.data.modifyDateTime;
                    self.ruleForm1.SpecialProblemType=res.data.data.specialProblemType;
                    self.ruleForm1.TaskNo = res.data.data.taskNo;
                    self.ruleForm1.ResponsibleParty=res.data.data.responsibleParty;
                    //绑定taskNo
                    self.ruleForm.TaskNo = res.data.data.taskNo;
                }
          }).catch(error => {
            console.log(error);
          });
    },

     //列点击事件
    handleCellFileClick(obj){//单元格单击事件处理函数
        switch(obj.column.label){
                case "文件名":                     
                    this.commonDownLoad(obj.row.fileName,obj.row.fileURL);                           
                    break;
                default : break;
        }        
    },
     
    commonDownLoad(fileName,path){
            var self = this;
            this.$http({
                method: 'GET',
                url: self.api+'/api/DownLoad/commonGetDownLoadPath?partialPath='+path
            }).then(res => {
                if(res.data.code==200){
                    location.href = self.api + '/api/DownLoad/commonDownLoad?fileName='+fileName+'&path='+res.data.data;        
                } 
                if(res.data.code==404){
                    self.$message({
                    message: "下载文件已被删除，无法下载！",
                    type: "warning"  //success,warning,info,error
                });
                }
            }).catch(error => {
                console.log(error);
            });
    },

    //附件管理
    fileManage(){
      var self = this;
      self.fileInfoManageVisible =true;
      self.getList_file();
    },

    //依据运维任务id获取全部的文件
    getList_file(){ 
      var self =this;
      this.$http({
              method: 'GET',        
              url: self.api + '/api/Common/GetFileByTaskId?pageSize='+ self.page_file.pageSize + '&pageIndex=' + self.page_file.pageNo+'&id='+self.ruleForm.TaskNo
        }).then(res => {
             if(res.status==200){
                    self.hasYWZG=res.data.hasYWZG;
                    self.list_file=res.data.data;
                    self.page_file.total = res.data.total;
                }
        }).catch(error => {
              console.log(error);
      });
    },

   //查看运维人员整改图片
    getFileFullPathInfo(taskNo){
      var self =this;
       this.$http({
              method: 'GET',        
              url: self.api + '/api/Common/GetFileFullPathById?id='+taskNo
        }).then(res => {
              self.filesInfo =res.data.data;
              if(self.filesInfo.length!=0)
              {
                  //打开新的窗体，进行查看图片
                  self.picDialogVisible=true;
                  self.getFlieStreamInfo();
              }
              else
              {
                  self.$message({
                    message: "暂无图片可以查看！",
                    type: "warning"  //success,warning,info,error
                });
                return;
              }
        }).catch(error => {
              console.log(error);
      });
    },

    //运维人员图片回显
    getFlieStreamInfo(){
      var self=this;     
      var imgUrlArr=[];
      self.filesInfo.forEach(item => {
        imgUrlArr.push({
          fileGUID:item.split(",")[1],
          fileURL:item.split(",")[0]
        });       
      });

      if(imgUrlArr.length>0){          
        imgUrlArr.forEach(item => {
          this.$http({
              method: 'GET',
              responseType:'blob',
              url: self.api + '/api/Common/GetFlieStream?partialPath='+item.fileURL
          }).then(res => {
              self.imgArr.push(window.URL.createObjectURL(res.data));
          }).catch(error => {
              console.log(error);
          });
         });
      }
    },

    //整改问题列表列点击事件
    handleCellClick(obj){//单元格单击事件处理函数
            //清空 预览数组
            
            switch(obj.column.label){
                case "最新整改相关信息":  
                    //加载 历史记录
                    this.problemHistoryVisible=true;
                    this.getList_problemHistory(obj.row.taskChildNo);
                    break;
                case "附件":
                  this.imgArr=[];
                   //查看图片附件    
                   this.getFileFullPathInfo(obj.row.taskChildNo);
                   break;
                default : break;
            }        
    },
    
    //获取整改问题的历史记录
    getList_problemHistory(taskChildNo){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/FourthInspectionTask/GetProblemHistoryRecord?pageSize='+self.page_problemHistory.pageSize+'&pageIndex='+self.page_problemHistory.pageNo+'&taskChildNo='+taskChildNo
            }).then(res => {
                if(res.status==200){
                    self.list_problemHistory=res.data.data;
                    self.page_problemHistory.total = res.data.total;
                }
            }).catch(error => {
                console.log(error);
            });
    },

     //更新附件
     uploadSuccess(file) {
            var self=this;
             this.modifyProblemForm.FileName = '';
            this.modifyProblemForm.FileURL = '';        
     },

    //初始化时间
    getNowTime() {
         var now = new Date();
         var year = now.getFullYear(); //得到年份
         var month = now.getMonth(); //得到月份
         var date = now.getDate(); //得到日期
         month = month + 1;
         month = month.toString().padStart(2, "0");
         date = date.toString().padStart(2, "0");      
         var defaultDate = `${year}-${month}-${date}`;   
         this.$set(this.ruleFormZhiKong, "CreateRptTime", defaultDate);            
    },

    //检查方图片放大预览
    handlePictureCardPreview(file) {
        this.dialogVisiblePic = true;
        this.dialogImageUrl = file.url;     
    },

    //检查方 上传change事件
    handleAddChange(file, fileList) {
     //清空列表
     const isLt20M = file.size / 1024 / 1024 < 20;
      if (!isLt20M) {
          this.$message({
                message: "请上传小于20M的图片",
                type: "warning"  //success,warning,info,error
          });
          return;     
        fileList.splice(-1, 1);
      } else {
        this.fileListAdd.push(file);
      }   
      this.noneBtnImg = fileList.length >= this.limitCountImg;
    },
 
    // 移除文件
    handleAddRemove(file, fileList) {
      //删除指定的文件流
      for(var i = 0; i < this.fileListAdd.length; i++){
          if(file.uid == this.fileListAdd[i].uid){
              this.fileListAdd.splice(i,1)
          }
      }
      this.noneBtnImg = fileList.length >= this.limitCountImg;
    },
   
    //进度条
    initStepList(){
     var self=this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Common/SelectListByDic?type=003003'
            }).then(res => {
                if(res.status==200){
                    this.stepList = res.data.data; 
                }
            }).catch(error => {
                console.log(error);
            });
    },

   //现场复查弹出窗
    handleReview(){
        var self = this;
        var ids = '';
        if (this.handleSelection_Maintentance == "") {
             self.$message({
                    message: "请选择要处理的数据！",
                    type: "warning"  //success,warning,info,error
                });
                return;
            }    
            if(this.handleSelection_Maintentance.length>1){
                 self.$message({
                    message: "一次只能处理一条数据！",
                    type: "warning"  //success,warning,info,error
                });
                return;
            }               
        ids = this.handleSelection_Maintentance[0].id;  
        self.reviewJudgeForm.Id='';   
        self.reviewJudgeForm.ModifyProblem ='';      
        self.reviewJudgeFormDialogVisible =true;
        self.reviewJudgeForm.TaskNo = self.ruleForm.TaskNo;
        self.reviewJudgeForm.Id=ids;
        //新增
        self.reviewJudgeForm.TaskChildNo  = this.handleSelection_Maintentance[0].taskChildNo;
        self.reviewJudgeForm.InspectProblem  = this.handleSelection_Maintentance[0].inspectProblem;
        self.reviewJudgeForm.ModifyDateTime  = this.handleSelection_Maintentance[0].modifyDateTime;
        self.reviewJudgeForm.SpecialProblemType  = this.handleSelection_Maintentance[0].specialProblemType;
        self.reviewJudgeForm.ResponsibleParty = this.handleSelection_Maintentance[0].responsibleParty;
    },
   
     //特殊问题弹出窗
    handleDealProblem(){
        var self=this;
        var ids = '';
        if (this.handleSelection_Maintentance == "") {
             self.$message({
                    message: "请选择要处理的数据！",
                    type: "warning"  //success,warning,info,error
                });
                return;
            }    
            if(this.handleSelection_Maintentance.length>1){
                 self.$message({
                    message: "一次只能处理一条数据！",
                    type: "warning"  //success,warning,info,error
                });
                return;
            } 
            let status= this.handleSelection_Maintentance[0].status;
            if(status==3)
            {
                 self.$message({
                    message: "此问题已经复查通过了！",
                    type: "warning"  //success,warning,info,error
                });
                return;
            } 
            if(status==1)
            {
                 self.$message({
                    message: "此问题已经处理过了，等待复查！",
                    type: "warning"  //success,warning,info,error
                });
                return;
            }                                 
            ids = this.handleSelection_Maintentance[0].id;     
            self.modifyProblemForm.Id='';    
            self.modifyProblemForm.ModifyProblem ='';      
            self.modifyProblemDialogVisible =true;
            self.modifyProblemForm.TaskNo = self.ruleForm.TaskNo;
            self.modifyProblemForm.Id=ids;
            debugger;
            //新增  特殊问题相关的变量
            self.modifyProblemForm.TaskChildNo  = this.handleSelection_Maintentance[0].taskChildNo;
            self.modifyProblemForm.InspectProblem  = this.handleSelection_Maintentance[0].inspectProblem;
            self.modifyProblemForm.ModifyDateTime  = this.handleSelection_Maintentance[0].modifyDateTime;
            self.modifyProblemForm.SpecialProblemType = this.handleSelection_Maintentance[0].specialProblemType;
            self.modifyProblemForm.ResponsibleParty = this.handleSelection_Maintentance[0].responsibleParty;
    },

    //删除现场检查特殊情况
    handleDel(index, row){
          var self=this;
           var ids = '';
            if (this.handleSelection_Maintentance == "") {
                self.$message({
                    message: "请选择要删除的数据！",
                    type: "warning"  //success,warning,info,error
                });
                return;
            }          
            this.handleSelection_Maintentance.forEach((item,index) => {               
                    ids += item.id + ','               
            });
            this.$confirm('确认删除？').then(function () {
                self.handlemultipl(ids);
            }).catch(function () {                
            });                        
    },

    handlemultipl(ids){
           var self = this;
          this.$http({
                method: 'GET',
                url: this.api+'/api/FourthInspectionTask/SpecialProblemDelete?id=' + ids
            }).then(res => {
                if(res.status==200){
                    self.getList_Maintentance();
                }               
          }).catch(error => {
            console.log(error);
          });
    },
    
    //第四方审核弹出窗
    handleFourthJudge(){
        var self = this;
        self.fourthJudgeFormDialogVisible =true;
        self.fourthJudgeForm.BusinessId = self.ruleForm.TaskNo;
    },

    //弹出分数确认窗体
    handleJudge(){
        var self = this;
        //整改结果提交前 验证是否上传整改报告
        self.getList_file();
        if(!self.hasYWZG){
            self.$message({
              message: "请先上传整改附件！",
              type: "warning"  //success,warning,info,error
            });
        }else{
          self.aduitFormDialogVisible =true;
          self.aduitForm.BusinessId = self.ruleForm.TaskNo;
        }
        
     },

    //打开现场检查特殊问题窗口
    handleAdd(){
        var self=this;
             if(self.ruleForm1.Id!='')
             {
                self.resetForm('ruleForm1');//重置表单
             }     
            self.ruleForm1.Id=''; 
            self.ruleForm1.TaskNo =self.ruleForm.TaskNo;           
            self.digTitle="添加现场检查特殊问题";
            self.dialogVisible=true;
    },
    
    //添加现场检查特殊问题
    submitDetailForm(formName) {
            const Qs = require('qs');
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    var self = this;
                    this.$http({
                        headers: {
                            'deviceCode': 'A95ZEF1-47B5-AC90BF3'
                        },
                        method: 'post',
                        url: self.api+'/api/FourthInspectionTask/SpecialProblemSubmit',
                        data:Qs.stringify(self.ruleForm1)
                    }).then(res => {
                        if(res.status==200){
                            self.dialogVisible=!self.dialogVisible;
                            self.getList_Maintentance();
                            self.$message({
                                message: res.data.message,
                                type: res.data.type  //warning,success,info,error
                            });
                             self.resetForm('ruleForm1')
                        }
                    }).catch(error => {
                        console.log(error);
                    });
                    } else {
                        return false;
                    }
            });
    },

     //table
    handleSelectionChange_Maintentance(val){
        this.handleSelection_Maintentance=val;
    },

    handleSelectionChange_file(val){
        this.handleSelection_file=val;
    },

    handleSelectionChange_problemHistory(val){
        this.handleSelection_problemHistory=val;
    },

     //保存质控表单
    saveReport(){
        var self=this;    
        self.obj.CycleType=6;
        self.obj.AuditeUsr='';
        self.obj.InspectionETime='';
        self.obj.AuditeTime='';
        self.obj.SStation =self.ruleForm.SStation;
        self.obj.Unit_ID =self.ruleForm.UnitId;
        //添加创建时间
        self.obj.CreateRptTime = self.ruleFormZhiKong.CreateRptTime;
        //获取报表内容
        self.obj.Content = self.getRptContent();
        self.obj.ReportCode = "010104";
        self.obj.Status = 1;
        //任务编号
        self.obj.TaskCode = self.ruleForm.TaskNo;
        //表单属性加到FormData中
        for(let x in self.obj){
            this.param.append(x,self.obj[x]);
        }
        //图片流加入到FormData中
        let existPic='';
        //清除已经有的
        if(this.param.has('files')){
                this.param.delete('files');
        }
        for (var int = 0; int < this.fileListAdd.length; int++) {           
            var list = this.fileListAdd[int];
            var file = list.raw;
            if(file==undefined){
               existPic += list.url+';'
            }
            else{             
              this.param.append('files', file); // 文件对象
            }         
        }
        //已经上传的图片
        this.param.append('url',existPic);
        //对象进行加密
            const Qs = require('qs');
            this.$http({
                headers: {
                            'deviceCode': 'A95ZEF1-47B5-AC90BF3',
                            'Content-Type': 'multipart/form-data'                                     
                        },
                        token: sessionStorage.getItem("Authorization"),        
                        method: 'post',
                        url: this.api+'/api/FourthInspectionTask/ZhiKongFormSubmit'  ,
                        data:this.param
            }).then(res => {
                if(res.status==200){                 
                    self.$message({
                        message: res.data.message,
                        type: res.data.type  //warning,success,info,error
                    });
                     //图片显示成功
                     self.fileListAdd =[];
                     self.getFileFullPath(this.ruleForm.TaskNo);
                     self.hide =true;
                }
          }).catch(error => {
            console.log(error);
          });
    },
     
     //获取报表内容
     getRptContent(){
       var self=this;
       var objInfo ={};
       //评分
       objInfo.Sign = self.ruleFormZhiKong.Sign;
        
        objInfo.E_rc_Jc_1100=self.ruleFormZhiKong.E_rc_Jc_1100;
        objInfo.E_rc_Jc_1101=self.ruleFormZhiKong.E_rc_Jc_1101;
        objInfo.E_rc_Jc_1102=self.ruleFormZhiKong.E_rc_Jc_1102;
        objInfo.E_rc_Jc_1103=self.ruleFormZhiKong.E_rc_Jc_1103;
        objInfo.E_rc_Jc_1104=self.ruleFormZhiKong.E_rc_Jc_1104;
        objInfo.E_rc_Jc_1105=self.ruleFormZhiKong.E_rc_Jc_1105;
        objInfo.E_rc_Jc_1106=self.ruleFormZhiKong.E_rc_Jc_1106;
        objInfo.E_rc_Jc_1107=self.ruleFormZhiKong.E_rc_Jc_1107;
        objInfo.E_rc_Jc_1108=self.ruleFormZhiKong.E_rc_Jc_1108;
        objInfo.E_rc_Jc_1109=self.ruleFormZhiKong.E_rc_Jc_1109;
        objInfo.E_rc_Jc_1110=self.ruleFormZhiKong.E_rc_Jc_1110;
        objInfo.E_rc_Jc_1111=self.ruleFormZhiKong.E_rc_Jc_1111;
        objInfo.E_rc_Jc_1112=self.ruleFormZhiKong.E_rc_Jc_1112;
        objInfo.E_rc_Jc_1113=self.ruleFormZhiKong.E_rc_Jc_1113;
        objInfo.E_rc_Jc_1114=self.ruleFormZhiKong.E_rc_Jc_1114;
        objInfo.E_rc_Jc_1115=self.ruleFormZhiKong.E_rc_Jc_1115;
        objInfo.E_rc_Jc_1116=self.ruleFormZhiKong.E_rc_Jc_1116;
        objInfo.E_rc_Jc_1117=self.ruleFormZhiKong.E_rc_Jc_1117;
        objInfo.E_rc_Jc_1118=self.ruleFormZhiKong.E_rc_Jc_1118;
        objInfo.E_rc_Jc_1119=self.ruleFormZhiKong.E_rc_Jc_1119;
        objInfo.E_rc_Jc_1120=self.ruleFormZhiKong.E_rc_Jc_1120;
        objInfo.E_rc_Jc_1121=self.ruleFormZhiKong.E_rc_Jc_1121;
        objInfo.E_rc_Jc_1122=self.ruleFormZhiKong.E_rc_Jc_1122;
        objInfo.E_rc_Jc_1123=self.ruleFormZhiKong.E_rc_Jc_1123;
        objInfo.E_rc_Jc_1124=self.ruleFormZhiKong.E_rc_Jc_1124;
        objInfo.E_rc_Jc_1125=self.ruleFormZhiKong.E_rc_Jc_1125;
        objInfo.E_rc_Jc_1126=self.ruleFormZhiKong.E_rc_Jc_1126;
        objInfo.E_rc_Jc_1127=self.ruleFormZhiKong.E_rc_Jc_1127;
        objInfo.E_rc_Jc_1128=self.ruleFormZhiKong.E_rc_Jc_1128;
        objInfo.E_rc_Jc_1129=self.ruleFormZhiKong.E_rc_Jc_1129;
        objInfo.E_rc_Jc_1130=self.ruleFormZhiKong.E_rc_Jc_1130;
        objInfo.E_rc_Jc_1131=self.ruleFormZhiKong.E_rc_Jc_1131;
        objInfo.E_rc_Jc_1132=self.ruleFormZhiKong.E_rc_Jc_1132;
        objInfo.E_rc_Jc_1133=self.ruleFormZhiKong.E_rc_Jc_1133;
        objInfo.E_rc_Jc_1134=self.ruleFormZhiKong.E_rc_Jc_1134;
        objInfo.E_rc_Jc_1135=self.ruleFormZhiKong.E_rc_Jc_1135;
        objInfo.E_rc_Jc_1136=self.ruleFormZhiKong.E_rc_Jc_1136;
        objInfo.E_rc_Jc_1137=self.ruleFormZhiKong.E_rc_Jc_1137;
        objInfo.E_rc_Jc_1138=self.ruleFormZhiKong.E_rc_Jc_1138;
        objInfo.E_rc_Jc_1139=self.ruleFormZhiKong.E_rc_Jc_1139;
        objInfo.E_rc_Jc_1140=self.ruleFormZhiKong.E_rc_Jc_1140;
        objInfo.E_rc_Jc_1141=self.ruleFormZhiKong.E_rc_Jc_1141;
        objInfo.E_rc_Jc_1142=self.ruleFormZhiKong.E_rc_Jc_1142;
        objInfo.E_rc_Jc_1143=self.ruleFormZhiKong.E_rc_Jc_1143;
        objInfo.E_rc_Jc_1144=self.ruleFormZhiKong.E_rc_Jc_1144;
        objInfo.E_rc_Jc_1145=self.ruleFormZhiKong.E_rc_Jc_1145;
        objInfo.E_rc_Jc_1146=self.ruleFormZhiKong.E_rc_Jc_1146;
        objInfo.E_rc_Jc_1147=self.ruleFormZhiKong.E_rc_Jc_1147;
        objInfo.E_rc_Jc_1148=self.ruleFormZhiKong.E_rc_Jc_1148;
        objInfo.E_rc_Jc_1149=self.ruleFormZhiKong.E_rc_Jc_1149;
        objInfo.E_rc_Jc_1150=self.ruleFormZhiKong.E_rc_Jc_1150;
        objInfo.E_rc_Jc_1151=self.ruleFormZhiKong.E_rc_Jc_1151;
        objInfo.E_rc_Jc_1152=self.ruleFormZhiKong.E_rc_Jc_1152;
        objInfo.E_rc_Jc_1153=self.ruleFormZhiKong.E_rc_Jc_1153;
        objInfo.E_rc_Jc_1154=self.ruleFormZhiKong.E_rc_Jc_1154;
        objInfo.E_rc_Jc_1155=self.ruleFormZhiKong.E_rc_Jc_1155;
        objInfo.E_rc_Jc_1156=self.ruleFormZhiKong.E_rc_Jc_1156;
        objInfo.E_rc_Jc_1157=self.ruleFormZhiKong.E_rc_Jc_1157;
        objInfo.E_rc_Jc_1158=self.ruleFormZhiKong.E_rc_Jc_1158;
        objInfo.E_rc_Jc_1159=self.ruleFormZhiKong.E_rc_Jc_1159;
        objInfo.E_rc_Jc_1160=self.ruleFormZhiKong.E_rc_Jc_1160;
        objInfo.E_rc_Jc_1161=self.ruleFormZhiKong.E_rc_Jc_1161;
        objInfo.E_rc_Jc_1162=self.ruleFormZhiKong.E_rc_Jc_1162;
        objInfo.E_rc_Jc_1163=self.ruleFormZhiKong.E_rc_Jc_1163;
        objInfo.E_rc_Jc_1164=self.ruleFormZhiKong.E_rc_Jc_1164;
        objInfo.E_rc_Jc_1165=self.ruleFormZhiKong.E_rc_Jc_1165;
        objInfo.E_rc_Jc_1166=self.ruleFormZhiKong.E_rc_Jc_1166;
        objInfo.E_rc_Jc_1167=self.ruleFormZhiKong.E_rc_Jc_1167;
        objInfo.E_rc_Jc_1168=self.ruleFormZhiKong.E_rc_Jc_1168;
        objInfo.E_rc_Jc_1169=self.ruleFormZhiKong.E_rc_Jc_1169;
        objInfo.E_rc_Jc_1170=self.ruleFormZhiKong.E_rc_Jc_1170;
        objInfo.E_rc_Jc_1171=self.ruleFormZhiKong.E_rc_Jc_1171;
        objInfo.E_rc_Jc_1172=self.ruleFormZhiKong.E_rc_Jc_1172;
        objInfo.E_rc_Jc_1173=self.ruleFormZhiKong.E_rc_Jc_1173;
        objInfo.E_rc_Jc_1174=self.ruleFormZhiKong.E_rc_Jc_1174;
        objInfo.E_rc_Jc_1175=self.ruleFormZhiKong.E_rc_Jc_1175;
        objInfo.E_rc_Jc_1176=self.ruleFormZhiKong.E_rc_Jc_1176;
        objInfo.E_rc_Jc_1177=self.ruleFormZhiKong.E_rc_Jc_1177;
        objInfo.E_rc_Jc_1178=self.ruleFormZhiKong.E_rc_Jc_1178;
        objInfo.E_rc_Jc_1179=self.ruleFormZhiKong.E_rc_Jc_1179;
        objInfo.E_rc_Jc_1180=self.ruleFormZhiKong.E_rc_Jc_1180;

        objInfo.E_rc_Jc_1_Score = self.ruleFormZhiKong.E_rc_Jc_1_Score;
        objInfo.E_rc_Jc_9_Score= self.ruleFormZhiKong.E_rc_Jc_9_Score;
        objInfo.E_rc_Jc_14_Score= self.ruleFormZhiKong.E_rc_Jc_14_Score;
        objInfo.E_rc_Jc_26_Score= self.ruleFormZhiKong.E_rc_Jc_26_Score;
        objInfo.E_rc_Jc_30_Score= self.ruleFormZhiKong.E_rc_Jc_30_Score;
        objInfo.E_rc_Jc_36_Score= self.ruleFormZhiKong.E_rc_Jc_36_Score;
        objInfo.E_rc_Jc_40_Score= self.ruleFormZhiKong.E_rc_Jc_40_Score;
        objInfo.E_rc_Jc_48_Score= self.ruleFormZhiKong.E_rc_Jc_48_Score;
        objInfo.E_rc_Jc_53_Score= self.ruleFormZhiKong.E_rc_Jc_53_Score;
        objInfo.E_rc_Jc_56_Score= self.ruleFormZhiKong.E_rc_Jc_56_Score;
        objInfo.E_rc_Jc_61_Score= self.ruleFormZhiKong.E_rc_Jc_61_Score;
        objInfo.E_rc_Jc_67_Score= self.ruleFormZhiKong.E_rc_Jc_67_Score;
        objInfo.E_rc_Jc_70_Score= self.ruleFormZhiKong.E_rc_Jc_70_Score;
        objInfo.E_rc_Jc_74_Score= self.ruleFormZhiKong.E_rc_Jc_74_Score;
        objInfo.E_rc_Jc_79_Score= self.ruleFormZhiKong.E_rc_Jc_79_Score;
        objInfo.E_rc_Jc_85_Score= self.ruleFormZhiKong.E_rc_Jc_85_Score;
         objInfo.E_rc_Jc_1006_Score= self.ruleFormZhiKong.E_rc_Jc_1006_Score;
        objInfo.E_rc_Jc_95_Score= self.ruleFormZhiKong.E_rc_Jc_95_Score;
        objInfo.E_rc_Jc_106_Score= self.ruleFormZhiKong.E_rc_Jc_106_Score;
        objInfo.E_rc_Jc_116_Score= self.ruleFormZhiKong.E_rc_Jc_116_Score;
        objInfo.E_rc_Jc_127_Score= self.ruleFormZhiKong.E_rc_Jc_127_Score;
        objInfo.E_rc_Jc_135_Score= self.ruleFormZhiKong.E_rc_Jc_135_Score;
        objInfo.E_rc_Jc_142_Score= self.ruleFormZhiKong.E_rc_Jc_142_Score;
        objInfo.E_rc_Jc_149_Score= self.ruleFormZhiKong.E_rc_Jc_149_Score;
        objInfo.E_rc_Jc_151_Score= self.ruleFormZhiKong.E_rc_Jc_151_Score;
        objInfo.E_rc_Jc_153_Score= self.ruleFormZhiKong.E_rc_Jc_153_Score;
        objInfo.E_rc_Jc_155_Score= self.ruleFormZhiKong.E_rc_Jc_155_Score;
        objInfo.E_rc_Jc_157_Score= self.ruleFormZhiKong.E_rc_Jc_157_Score;
        
        //备注
         objInfo.E_rc_Jc_1_Mark=self.ruleFormZhiKong.E_rc_Jc_1_Mark;
         objInfo.E_rc_Jc_9_Mark =self.ruleFormZhiKong.E_rc_Jc_9_Mark ;
         objInfo.E_rc_Jc_14_Mark =self.ruleFormZhiKong.E_rc_Jc_14_Mark ;
         objInfo.E_rc_Jc_26_Mark=self.ruleFormZhiKong.E_rc_Jc_26_Mark;
         objInfo.E_rc_Jc_30_Mark=self.ruleFormZhiKong.E_rc_Jc_30_Mark;
         objInfo.E_rc_Jc_36_Mark=self.ruleFormZhiKong.E_rc_Jc_36_Mark;
         objInfo.E_rc_Jc_40_Mark=self.ruleFormZhiKong.E_rc_Jc_40_Mark;
         objInfo.E_rc_Jc_48_Mark=self.ruleFormZhiKong.E_rc_Jc_48_Mark;
         objInfo.E_rc_Jc_53_Mark=self.ruleFormZhiKong.E_rc_Jc_53_Mark;
         objInfo.E_rc_Jc_56_Mark=self.ruleFormZhiKong.E_rc_Jc_56_Mark;       
         objInfo.E_rc_Jc_61_Mark=self.ruleFormZhiKong.E_rc_Jc_61_Mark;
         objInfo.E_rc_Jc_67_Mark=self.ruleFormZhiKong.E_rc_Jc_67_Mark;
         objInfo.E_rc_Jc_70_Mark=self.ruleFormZhiKong.E_rc_Jc_70_Mark;
         objInfo.E_rc_Jc_74_Mark=self.ruleFormZhiKong.E_rc_Jc_74_Mark;
         objInfo.E_rc_Jc_79_Mark=self.ruleFormZhiKong.E_rc_Jc_79_Mark;
         objInfo.E_rc_Jc_85_Mark=self.ruleFormZhiKong.E_rc_Jc_85_Mark;
          objInfo.E_rc_Jc_1006_Mark=self.ruleFormZhiKong.E_rc_Jc_1006_Mark;
         objInfo.E_rc_Jc_95_Mark=self.ruleFormZhiKong.E_rc_Jc_95_Mark;
         objInfo.E_rc_Jc_106_Mark=self.ruleFormZhiKong.E_rc_Jc_106_Mark;
         objInfo.E_rc_Jc_116_Mark=self.ruleFormZhiKong.E_rc_Jc_116_Mark;
         objInfo.E_rc_Jc_127_Mark=self.ruleFormZhiKong.E_rc_Jc_127_Mark;
         objInfo.E_rc_Jc_135_Mark=self.ruleFormZhiKong.E_rc_Jc_135_Mark;
         objInfo.E_rc_Jc_1000=self.ruleFormZhiKong.E_rc_Jc_1000;
         objInfo.E_rc_Jc_1001=self.ruleFormZhiKong.E_rc_Jc_1001;
         objInfo.E_rc_Jc_1002=self.ruleFormZhiKong.E_rc_Jc_1002;
         objInfo.E_rc_Jc_1003=self.ruleFormZhiKong.E_rc_Jc_1003;
         objInfo.E_rc_Jc_1004=self.ruleFormZhiKong.E_rc_Jc_1004;
         objInfo.E_rc_Jc_1005=self.ruleFormZhiKong.E_rc_Jc_1005;
         objInfo.E_rc_Jc_142_Mark=self.ruleFormZhiKong.E_rc_Jc_142_Mark;
         objInfo.E_rc_Jc_149_Mark=self.ruleFormZhiKong.E_rc_Jc_149_Mark;
         objInfo.E_rc_Jc_151_Mark=self.ruleFormZhiKong.E_rc_Jc_151_Mark;
         objInfo.E_rc_Jc_153_Mark=self.ruleFormZhiKong.E_rc_Jc_153_Mark;
         objInfo.E_rc_Jc_155_Mark=self.ruleFormZhiKong.E_rc_Jc_155_Mark;
         objInfo.E_rc_Jc_157_Mark=self.ruleFormZhiKong.E_rc_Jc_157_Mark;
         objInfo.E_rc_Jc_410=self.ruleFormZhiKong.E_rc_Jc_410;
        
        //仪器值栏
        objInfo.E_rc_Jc_350=self.ruleFormZhiKong.E_rc_Jc_350;      
        objInfo.E_rc_Jc_351=self.ruleFormZhiKong.E_rc_Jc_351;
        objInfo.E_rc_Jc_351_new=self.ruleFormZhiKong.E_rc_Jc_351_new;
        objInfo.E_rc_Jc_171=self.ruleFormZhiKong.E_rc_Jc_171;
        objInfo.E_rc_Jc_172=self.ruleFormZhiKong.E_rc_Jc_172;
        objInfo.E_rc_Jc_173=self.ruleFormZhiKong.E_rc_Jc_173;
        objInfo.E_rc_Jc_169=self.ruleFormZhiKong.E_rc_Jc_169;
        objInfo.E_rc_Jc_168=self.ruleFormZhiKong.E_rc_Jc_168;
        objInfo.E_rc_Jc_167=self.ruleFormZhiKong.E_rc_Jc_167;
        objInfo.E_rc_Jc_166=self.ruleFormZhiKong.E_rc_Jc_166;
        objInfo.E_rc_Jc_165=self.ruleFormZhiKong.E_rc_Jc_165;
        objInfo.E_rc_Jc_164=self.ruleFormZhiKong.E_rc_Jc_164;
        objInfo.E_rc_Jc_179=self.ruleFormZhiKong.E_rc_Jc_179;
        objInfo.E_rc_Jc_180=self.ruleFormZhiKong.E_rc_Jc_180;
        objInfo.E_rc_Jc_181=self.ruleFormZhiKong.E_rc_Jc_181;
        objInfo.E_rc_Jc_182=self.ruleFormZhiKong.E_rc_Jc_182;      
        objInfo.E_rc_Jc_183=self.ruleFormZhiKong.E_rc_Jc_183;
        objInfo.E_rc_Jc_184=self.ruleFormZhiKong.E_rc_Jc_184;
        objInfo.E_rc_Jc_185=self.ruleFormZhiKong.E_rc_Jc_185;
        objInfo.E_rc_Jc_186=self.ruleFormZhiKong.E_rc_Jc_186;
        objInfo.E_rc_Jc_187=self.ruleFormZhiKong.E_rc_Jc_187;
        objInfo.E_rc_Jc_189=self.ruleFormZhiKong.E_rc_Jc_189;
        objInfo.E_rc_Jc_190=self.ruleFormZhiKong.E_rc_Jc_190;
        objInfo.E_rc_Jc_191=self.ruleFormZhiKong.E_rc_Jc_191;
        objInfo.E_rc_Jc_192=self.ruleFormZhiKong.E_rc_Jc_192;
        objInfo.E_rc_Jc_193=self.ruleFormZhiKong.E_rc_Jc_193;
        objInfo.E_rc_Jc_195=self.ruleFormZhiKong.E_rc_Jc_195;
        objInfo.E_rc_Jc_196=self.ruleFormZhiKong.E_rc_Jc_196;
        objInfo.E_rc_Jc_197=self.ruleFormZhiKong.E_rc_Jc_197;
        objInfo.E_rc_Jc_206=self.ruleFormZhiKong.E_rc_Jc_206;
        objInfo.E_rc_Jc_207=self.ruleFormZhiKong.E_rc_Jc_207;
        objInfo.E_rc_Jc_208=self.ruleFormZhiKong.E_rc_Jc_208;      
        objInfo.E_rc_Jc_209=self.ruleFormZhiKong.E_rc_Jc_209;
        objInfo.E_rc_Jc_210=self.ruleFormZhiKong.E_rc_Jc_210;
        objInfo.E_rc_Jc_211=self.ruleFormZhiKong.E_rc_Jc_211;
        objInfo.E_rc_Jc_212=self.ruleFormZhiKong.E_rc_Jc_212;
        objInfo.E_rc_Jc_213=self.ruleFormZhiKong.E_rc_Jc_213;
        objInfo.E_rc_Jc_214=self.ruleFormZhiKong.E_rc_Jc_214;
        objInfo.E_rc_Jc_216=self.ruleFormZhiKong.E_rc_Jc_216;
        objInfo.E_rc_Jc_217=self.ruleFormZhiKong.E_rc_Jc_217;
        objInfo.E_rc_Jc_218=self.ruleFormZhiKong.E_rc_Jc_218;
        objInfo.E_rc_Jc_219=self.ruleFormZhiKong.E_rc_Jc_219;
        objInfo.E_rc_Jc_220=self.ruleFormZhiKong.E_rc_Jc_220;
        objInfo.E_rc_Jc_222=self.ruleFormZhiKong.E_rc_Jc_222;
        objInfo.E_rc_Jc_223=self.ruleFormZhiKong.E_rc_Jc_223;
        objInfo.E_rc_Jc_224=self.ruleFormZhiKong.E_rc_Jc_224;
        objInfo.E_rc_Jc_225=self.ruleFormZhiKong.E_rc_Jc_225;
        objInfo.E_rc_Jc_235=self.ruleFormZhiKong.E_rc_Jc_235;
        objInfo.E_rc_Jc_236=self.ruleFormZhiKong.E_rc_Jc_236;
        objInfo.E_rc_Jc_237=self.ruleFormZhiKong.E_rc_Jc_237;      
        objInfo.E_rc_Jc_238=self.ruleFormZhiKong.E_rc_Jc_238;
        objInfo.E_rc_Jc_239=self.ruleFormZhiKong.E_rc_Jc_239;
        objInfo.E_rc_Jc_240=self.ruleFormZhiKong.E_rc_Jc_240;
        objInfo.E_rc_Jc_241=self.ruleFormZhiKong.E_rc_Jc_241;
        objInfo.E_rc_Jc_242=self.ruleFormZhiKong.E_rc_Jc_242;
        objInfo.E_rc_Jc_243=self.ruleFormZhiKong.E_rc_Jc_243;
        objInfo.E_rc_Jc_244=self.ruleFormZhiKong.E_rc_Jc_244;
        objInfo.E_rc_Jc_245=self.ruleFormZhiKong.E_rc_Jc_245;
        objInfo.E_rc_Jc_246=self.ruleFormZhiKong.E_rc_Jc_246;
        objInfo.E_rc_Jc_247=self.ruleFormZhiKong.E_rc_Jc_247;
        objInfo.E_rc_Jc_248=self.ruleFormZhiKong.E_rc_Jc_248;
        objInfo.E_rc_Jc_249=self.ruleFormZhiKong.E_rc_Jc_249;
        objInfo.E_rc_Jc_250=self.ruleFormZhiKong.E_rc_Jc_250;
        objInfo.E_rc_Jc_251=self.ruleFormZhiKong.E_rc_Jc_251;
        objInfo.E_rc_Jc_252=self.ruleFormZhiKong.E_rc_Jc_252;
        objInfo.E_rc_Jc_253=self.ruleFormZhiKong.E_rc_Jc_253;
        objInfo.E_rc_Jc_262=self.ruleFormZhiKong.E_rc_Jc_262;      
        objInfo.E_rc_Jc_263=self.ruleFormZhiKong.E_rc_Jc_263;
        objInfo.E_rc_Jc_264=self.ruleFormZhiKong.E_rc_Jc_264;
        objInfo.E_rc_Jc_265=self.ruleFormZhiKong.E_rc_Jc_265;
        objInfo.E_rc_Jc_266=self.ruleFormZhiKong.E_rc_Jc_266;
        objInfo.E_rc_Jc_267=self.ruleFormZhiKong.E_rc_Jc_267;
        objInfo.E_rc_Jc_269=self.ruleFormZhiKong.E_rc_Jc_269;
        objInfo.E_rc_Jc_268=self.ruleFormZhiKong.E_rc_Jc_268;
        objInfo.E_rc_Jc_270=self.ruleFormZhiKong.E_rc_Jc_270;
        objInfo.E_rc_Jc_272=self.ruleFormZhiKong.E_rc_Jc_272;
        objInfo.E_rc_Jc_274=self.ruleFormZhiKong.E_rc_Jc_274;
        objInfo.E_rc_Jc_273=self.ruleFormZhiKong.E_rc_Jc_273;
        objInfo.E_rc_Jc_275=self.ruleFormZhiKong.E_rc_Jc_275;
        objInfo.E_rc_Jc_276=self.ruleFormZhiKong.E_rc_Jc_276;
        objInfo.E_rc_Jc_278=self.ruleFormZhiKong.E_rc_Jc_278;
        objInfo.E_rc_Jc_279=self.ruleFormZhiKong.E_rc_Jc_279;
        objInfo.E_rc_Jc_280=self.ruleFormZhiKong.E_rc_Jc_280;
        objInfo.E_rc_Jc_282=self.ruleFormZhiKong.E_rc_Jc_282;      
        objInfo.E_rc_Jc_283=self.ruleFormZhiKong.E_rc_Jc_283;
        objInfo.E_rc_Jc_284=self.ruleFormZhiKong.E_rc_Jc_284;
        objInfo.E_rc_Jc_294=self.ruleFormZhiKong.E_rc_Jc_294;
        objInfo.E_rc_Jc_295=self.ruleFormZhiKong.E_rc_Jc_295;
        objInfo.E_rc_Jc_296=self.ruleFormZhiKong.E_rc_Jc_296;
        objInfo.E_rc_Jc_297=self.ruleFormZhiKong.E_rc_Jc_297;
        objInfo.E_rc_Jc_298=self.ruleFormZhiKong.E_rc_Jc_298;
        objInfo.E_rc_Jc_299=self.ruleFormZhiKong.E_rc_Jc_299;
        objInfo.E_rc_Jc_300=self.ruleFormZhiKong.E_rc_Jc_300;
        objInfo.E_rc_Jc_301=self.ruleFormZhiKong.E_rc_Jc_301;
        objInfo.E_rc_Jc_308=self.ruleFormZhiKong.E_rc_Jc_308;
        objInfo.E_rc_Jc_309=self.ruleFormZhiKong.E_rc_Jc_309;
        objInfo.E_rc_Jc_310=self.ruleFormZhiKong.E_rc_Jc_310;
        objInfo.E_rc_Jc_311=self.ruleFormZhiKong.E_rc_Jc_311;
        objInfo.E_rc_Jc_312=self.ruleFormZhiKong.E_rc_Jc_312;
        objInfo.E_rc_Jc_313=self.ruleFormZhiKong.E_rc_Jc_313;
        objInfo.E_rc_Jc_314=self.ruleFormZhiKong.E_rc_Jc_314;
        objInfo.E_rc_Jc_315=self.ruleFormZhiKong.E_rc_Jc_315;

        //扣分项checkbox
        objInfo.E_rc_Jc_2 = self.ruleFormZhiKong.E_rc_Jc_2;
        objInfo.E_rc_Jc_3 = self.ruleFormZhiKong.E_rc_Jc_3;
        objInfo.E_rc_Jc_4 = self.ruleFormZhiKong.E_rc_Jc_4;
        objInfo.E_rc_Jc_5 = self.ruleFormZhiKong.E_rc_Jc_5;
        objInfo.E_rc_Jc_5_new = self.ruleFormZhiKong.E_rc_Jc_5_new;
        objInfo.E_rc_Jc_10 = self.ruleFormZhiKong.E_rc_Jc_10;
        objInfo.E_rc_Jc_11 = self.ruleFormZhiKong.E_rc_Jc_11;
        objInfo.E_rc_Jc_15 = self.ruleFormZhiKong.E_rc_Jc_15;
        objInfo.E_rc_Jc_16 = self.ruleFormZhiKong.E_rc_Jc_16;
        objInfo.E_rc_Jc_17 = self.ruleFormZhiKong.E_rc_Jc_17;
        objInfo.E_rc_Jc_18 = self.ruleFormZhiKong.E_rc_Jc_18;
        objInfo.E_rc_Jc_19 = self.ruleFormZhiKong.E_rc_Jc_19;
        objInfo.E_rc_Jc_20 = self.ruleFormZhiKong.E_rc_Jc_20;
        objInfo.E_rc_Jc_21 = self.ruleFormZhiKong.E_rc_Jc_21;
        objInfo.E_rc_Jc_27 = self.ruleFormZhiKong.E_rc_Jc_27;
        objInfo.E_rc_Jc_28 = self.ruleFormZhiKong.E_rc_Jc_28;
        objInfo.E_rc_Jc_31 = self.ruleFormZhiKong.E_rc_Jc_31;
        objInfo.E_rc_Jc_32 = self.ruleFormZhiKong.E_rc_Jc_32;
        objInfo.E_rc_Jc_33 = self.ruleFormZhiKong.E_rc_Jc_33;
        objInfo.E_rc_Jc_34 = self.ruleFormZhiKong.E_rc_Jc_34;
        objInfo.E_rc_Jc_33_new = self.ruleFormZhiKong.E_rc_Jc_33_new;
        objInfo.E_rc_Jc_34_new = self.ruleFormZhiKong.E_rc_Jc_34_new;
        objInfo.E_rc_Jc_37 = self.ruleFormZhiKong.E_rc_Jc_37;
        objInfo.E_rc_Jc_38 = self.ruleFormZhiKong.E_rc_Jc_38;
        objInfo.E_rc_Jc_41 = self.ruleFormZhiKong.E_rc_Jc_41;
        objInfo.E_rc_Jc_42 = self.ruleFormZhiKong.E_rc_Jc_42;
        objInfo.E_rc_Jc_43 = self.ruleFormZhiKong.E_rc_Jc_43;
        objInfo.E_rc_Jc_44 = self.ruleFormZhiKong.E_rc_Jc_44;      
        objInfo.E_rc_Jc_45 = self.ruleFormZhiKong.E_rc_Jc_45;
        objInfo.E_rc_Jc_46 = self.ruleFormZhiKong.E_rc_Jc_46;
        objInfo.E_rc_Jc_49 = self.ruleFormZhiKong.E_rc_Jc_49;
        objInfo.E_rc_Jc_50 = self.ruleFormZhiKong.E_rc_Jc_50;
        objInfo.E_rc_Jc_51 = self.ruleFormZhiKong.E_rc_Jc_51;
        objInfo.E_rc_Jc_51_new = self.ruleFormZhiKong.E_rc_Jc_51_new;
        objInfo.E_rc_Jc_54 = self.ruleFormZhiKong.E_rc_Jc_54;
        objInfo.E_rc_Jc_57 = self.ruleFormZhiKong.E_rc_Jc_57;
        objInfo.E_rc_Jc_58 = self.ruleFormZhiKong.E_rc_Jc_58;
        objInfo.E_rc_Jc_58_new = self.ruleFormZhiKong.E_rc_Jc_58_new;
        objInfo.E_rc_Jc_62 = self.ruleFormZhiKong.E_rc_Jc_62;
        objInfo.E_rc_Jc_63 = self.ruleFormZhiKong.E_rc_Jc_63;
        objInfo.E_rc_Jc_64 = self.ruleFormZhiKong.E_rc_Jc_64;
        objInfo.E_rc_Jc_65 = self.ruleFormZhiKong.E_rc_Jc_65;
        objInfo.E_rc_Jc_68 = self.ruleFormZhiKong.E_rc_Jc_68;
        objInfo.E_rc_Jc_71 = self.ruleFormZhiKong.E_rc_Jc_71;
        objInfo.E_rc_Jc_72 = self.ruleFormZhiKong.E_rc_Jc_72;
        objInfo.E_rc_Jc_75 = self.ruleFormZhiKong.E_rc_Jc_75;
        objInfo.E_rc_Jc_77 = self.ruleFormZhiKong.E_rc_Jc_77;
        objInfo.E_rc_Jc_77_new = self.ruleFormZhiKong.E_rc_Jc_77_new;
        objInfo.E_rc_Jc_401_new = self.ruleFormZhiKong.E_rc_Jc_401_new;
        objInfo.E_rc_Jc_401 = self.ruleFormZhiKong.E_rc_Jc_401;
        objInfo.E_rc_Jc_80 = self.ruleFormZhiKong.E_rc_Jc_80;
        objInfo.E_rc_Jc_81 = self.ruleFormZhiKong.E_rc_Jc_81;
        objInfo.E_rc_Jc_82 = self.ruleFormZhiKong.E_rc_Jc_82;
        objInfo.E_rc_Jc_86 = self.ruleFormZhiKong.E_rc_Jc_86;
        objInfo.E_rc_Jc_87 = self.ruleFormZhiKong.E_rc_Jc_87;
        objInfo.E_rc_Jc_88 = self.ruleFormZhiKong.E_rc_Jc_88;
        objInfo.E_rc_Jc_89 = self.ruleFormZhiKong.E_rc_Jc_89;
        objInfo.E_rc_Jc_90 = self.ruleFormZhiKong.E_rc_Jc_90;
        objInfo.E_rc_Jc_91 = self.ruleFormZhiKong.E_rc_Jc_91;
        objInfo.E_rc_Jc_92 = self.ruleFormZhiKong.E_rc_Jc_92;
        objInfo.E_rc_Jc_93 = self.ruleFormZhiKong.E_rc_Jc_93;
        objInfo.E_rc_Jc_92_new = self.ruleFormZhiKong.E_rc_Jc_92_new;
        objInfo.E_rc_Jc_93_new = self.ruleFormZhiKong.E_rc_Jc_93_new;
        objInfo.E_rc_Jc_96 = self.ruleFormZhiKong.E_rc_Jc_96;
        objInfo.E_rc_Jc_96_new = self.ruleFormZhiKong.E_rc_Jc_96_new;
        objInfo.E_rc_Jc_97 = self.ruleFormZhiKong.E_rc_Jc_97;
        objInfo.E_rc_Jc_98 = self.ruleFormZhiKong.E_rc_Jc_98;
        objInfo.E_rc_Jc_98_new = self.ruleFormZhiKong.E_rc_Jc_98_new;
        objInfo.E_rc_Jc_102_new = self.ruleFormZhiKong.E_rc_Jc_102_new;
        objInfo.E_rc_Jc_99 = self.ruleFormZhiKong.E_rc_Jc_99;
        objInfo.E_rc_Jc_100 = self.ruleFormZhiKong.E_rc_Jc_100;
        objInfo.E_rc_Jc_101 = self.ruleFormZhiKong.E_rc_Jc_101;
        objInfo.E_rc_Jc_102 = self.ruleFormZhiKong.E_rc_Jc_102;
        objInfo.E_rc_Jc_103 = self.ruleFormZhiKong.E_rc_Jc_103;
        objInfo.E_rc_Jc_104 = self.ruleFormZhiKong.E_rc_Jc_104;
        objInfo.E_rc_Jc_107 = self.ruleFormZhiKong.E_rc_Jc_107;
        objInfo.E_rc_Jc_107_new = self.ruleFormZhiKong.E_rc_Jc_107_new;
        objInfo.E_rc_Jc_108 = self.ruleFormZhiKong.E_rc_Jc_108;
        objInfo.E_rc_Jc_109 = self.ruleFormZhiKong.E_rc_Jc_109;
        objInfo.E_rc_Jc_109_new = self.ruleFormZhiKong.E_rc_Jc_109_new;
        objInfo.E_rc_Jc_110 = self.ruleFormZhiKong.E_rc_Jc_110;
        objInfo.E_rc_Jc_111 = self.ruleFormZhiKong.E_rc_Jc_111;
        objInfo.E_rc_Jc_112 = self.ruleFormZhiKong.E_rc_Jc_112;
        objInfo.E_rc_Jc_113 = self.ruleFormZhiKong.E_rc_Jc_113;
        objInfo.E_rc_Jc_114 = self.ruleFormZhiKong.E_rc_Jc_114;
        objInfo.E_rc_Jc_114_new = self.ruleFormZhiKong.E_rc_Jc_114_new;
        objInfo.hg = self.ruleFormZhiKong.hg;
        objInfo.hg25 = self.ruleFormZhiKong.hg25;
        objInfo.bhg = self.ruleFormZhiKong.bhg;
        objInfo.bhg25 = self.ruleFormZhiKong.bhg25;
        objInfo.E_rc_Jc_117 = self.ruleFormZhiKong.E_rc_Jc_117;
        objInfo.E_rc_Jc_117_new = self.ruleFormZhiKong.E_rc_Jc_117_new;
        objInfo.E_rc_Jc_118 = self.ruleFormZhiKong.E_rc_Jc_118;
        objInfo.E_rc_Jc_119 = self.ruleFormZhiKong.E_rc_Jc_119;
        objInfo.E_rc_Jc_120 = self.ruleFormZhiKong.E_rc_Jc_120;
        objInfo.E_rc_Jc_121 = self.ruleFormZhiKong.E_rc_Jc_121;
        objInfo.E_rc_Jc_121_new = self.ruleFormZhiKong.E_rc_Jc_121_new;
        objInfo.E_rc_Jc_122 = self.ruleFormZhiKong.E_rc_Jc_122;
        objInfo.E_rc_Jc_123 = self.ruleFormZhiKong.E_rc_Jc_123;
        objInfo.E_rc_Jc_124 = self.ruleFormZhiKong.E_rc_Jc_124;
        objInfo.E_rc_Jc_125 = self.ruleFormZhiKong.E_rc_Jc_125;
        objInfo.E_rc_Jc_128 = self.ruleFormZhiKong.E_rc_Jc_128;
        objInfo.E_rc_Jc_129 = self.ruleFormZhiKong.E_rc_Jc_129;
        objInfo.E_rc_Jc_130 = self.ruleFormZhiKong.E_rc_Jc_130;
        objInfo.E_rc_Jc_131 = self.ruleFormZhiKong.E_rc_Jc_131;
        objInfo.E_rc_Jc_132 = self.ruleFormZhiKong.E_rc_Jc_132;
        objInfo.E_rc_Jc_403 = self.ruleFormZhiKong.E_rc_Jc_403;
        objInfo.E_rc_Jc_403_new = self.ruleFormZhiKong.E_rc_Jc_403_new;
        objInfo.E_rc_Jc_129_new = self.ruleFormZhiKong.E_rc_Jc_129_new;
        objInfo.E_rc_Jc_132_new = self.ruleFormZhiKong.E_rc_Jc_132_new;
        objInfo.E_rc_Jc_136 = self.ruleFormZhiKong.E_rc_Jc_136;
        objInfo.E_rc_Jc_137 = self.ruleFormZhiKong.E_rc_Jc_137;
        objInfo.E_rc_Jc_138 = self.ruleFormZhiKong.E_rc_Jc_138;
        objInfo.E_rc_Jc_139 = self.ruleFormZhiKong.E_rc_Jc_139;
        objInfo.E_rc_Jc_140 = self.ruleFormZhiKong.E_rc_Jc_140;
        objInfo.E_rc_Jc_140_new = self.ruleFormZhiKong.E_rc_Jc_140_new;
        objInfo.E_rc_Jc_137_new = self.ruleFormZhiKong.E_rc_Jc_137_new;
        objInfo.E_rc_Jc_501_new = self.ruleFormZhiKong.E_rc_Jc_501_new;
        objInfo.E_rc_Jc_501 = self.ruleFormZhiKong.E_rc_Jc_501;
        objInfo.E_rc_Jc_143 = self.ruleFormZhiKong.E_rc_Jc_143;
        objInfo.E_rc_Jc_144 = self.ruleFormZhiKong.E_rc_Jc_144;
        objInfo.E_rc_Jc_145 = self.ruleFormZhiKong.E_rc_Jc_145;
        objInfo.E_rc_Jc_146 = self.ruleFormZhiKong.E_rc_Jc_146;
        objInfo.E_rc_Jc_147 = self.ruleFormZhiKong.E_rc_Jc_147;
        objInfo.E_rc_Jc_352= self.ruleFormZhiKong.E_rc_Jc_352;
        objInfo.E_rc_Jc_353= self.ruleFormZhiKong.E_rc_Jc_353;
        objInfo.E_rc_Jc_400= self.ruleFormZhiKong.E_rc_Jc_400;
        objInfo.E_rc_Jc_4011= self.ruleFormZhiKong.E_rc_Jc_4011;
        objInfo.E_rc_Jc_402= self.ruleFormZhiKong.E_rc_Jc_402;
        objInfo.E_rc_Jc_4033= self.ruleFormZhiKong.E_rc_Jc_4033;
        objInfo.E_rc_Jc_404= self.ruleFormZhiKong.E_rc_Jc_404;
        objInfo.E_rc_Jc_405= self.ruleFormZhiKong.E_rc_Jc_405;
        objInfo.E_rc_Jc_406= self.ruleFormZhiKong.E_rc_Jc_406;
        objInfo.E_rc_Jc_407= self.ruleFormZhiKong.E_rc_Jc_407;
        objInfo.E_rc_Jc_408= self.ruleFormZhiKong.E_rc_Jc_408;
        objInfo.E_rc_Jc_409= self.ruleFormZhiKong.E_rc_Jc_409;
        //仪器型号，仪器编号
        objInfo.E_rc_Jc_so2Type= self.ruleFormZhiKong.E_rc_Jc_so2Type;
        objInfo.E_rc_Jc_noXType= self.ruleFormZhiKong.E_rc_Jc_noXType;
        objInfo.E_rc_Jc_coType= self.ruleFormZhiKong.E_rc_Jc_coType;
        objInfo.E_rc_Jc_o3Type= self.ruleFormZhiKong.E_rc_Jc_o3Type;
        objInfo.E_rc_Jc_pm10Type= self.ruleFormZhiKong.E_rc_Jc_pm10Type;
        objInfo.E_rc_Jc_pm25Type= self.ruleFormZhiKong.E_rc_Jc_pm25Type;             
        objInfo.E_rc_Jc_so2Code= self.ruleFormZhiKong.E_rc_Jc_so2Code;   
        objInfo.E_rc_Jc_noXCode= self.ruleFormZhiKong.E_rc_Jc_noXCode;   
        objInfo.E_rc_Jc_coCode= self.ruleFormZhiKong.E_rc_Jc_coCode;   
        objInfo.E_rc_Jc_o3Code= self.ruleFormZhiKong.E_rc_Jc_o3Code;   
        objInfo.E_rc_Jc_pm10Code= self.ruleFormZhiKong.E_rc_Jc_pm10Code;   
        objInfo.E_rc_Jc_pm25Code= self.ruleFormZhiKong.E_rc_Jc_pm25Code;   

        return JSON.stringify(objInfo);
     },
     
    //站点选择改变
    selectOptionEvent(val) {
      this.ruleForm.SStation = val;
    },
    
    //table相关
    handleSelectionChange (val) { //checkbox选中的数据val 是选中行的所有数组
        this.handleSelection=val;
    },
    
    //修改
    getSizeChange_Maintentance(val){
            this.page_Maintentance.pageSize=val;
            //这下面需要重新调用 获取列表页的函数
            this.getList_Maintentance();
    },

    getSizeChange_file(val){
          this.page_file.pageSize=val;
          //这下面需要重新调用 获取列表页的函数
          this.getList_file();
    },

    getSizeChange_problemHistory(val){
          this.page_problemHistory.pageSize=val;
          //这下面需要重新调用 获取列表页的函数
          this.getList_problemHistory();
    },

    
    getCurrentPage_Maintentance(val){  //table组件发射的方法  用于改变当前所在页码
            this.page_Maintentance.pageNo=val;
            //这下面需要重新调用 获取列表页的函数
            this.getList_Maintentance();
    },

     getCurrentPage_file(val){  //table组件发射的方法  用于改变当前所在页码
            this.page_file.pageNo=val;
            //这下面需要重新调用 获取列表页的函数
            this.getList_file();
    },

    getCurrentPage_problemHistory(val){  //table组件发射的方法  用于改变当前所在页码
          this.page_problemHistory.pageNo=val;
          //这下面需要重新调用 获取列表页的函数
          this.getList_problemHistory();
    },
 
    handleChange(val) {
      console.log(val);
    },
    
    //运维单位改变值时
    selectChange(val, valObj) {
      var self = this;
      if (valObj.unitId) {
        self.ruleForm.UnitId = val;
        self.ruleForm.UnitName = valObj.unitName;
      } 
    },

    //计划类型改变值时
    selectChangeTaskType(val) {
        var self = this;     
        self.ruleForm.TaskCategoryId = val;
    },

    handleRemove(file, fileList) {
       console.log(file, fileList);
    },

    //相关按钮操作
    handleButton(formName, actionName) {
      var self = this;   
      this.submitForm(formName, actionName);
    },
    //导出word
    handleExport(){
      var self=this;
      debugger
      var exportMain = $("#cszywxcpfb").clone();
      exportMain.find("input").each(function() {
          if ($(this).attr("type") != "hidden") {
              if ($(this).attr("type") == "radio") {
                  if ($(this).is(":checked")) {
                      $(this).after("√");
                  }
              } else {
                  var html = $(this).val();
                  $(this).after("<lable>" + html + "</lable>");
              }
          }
          $(this).remove();
      });
      exportMain.find("button").each(function() {
          $(this).remove();
      });
      exportMain.find(".el-input").each(function(i,item) {
          var html = item.innerText;
          $(this).after("<lable>" + html + "</lable>");
          $(this).remove();
      });
      
      exportMain.find(".beizhu").each(function() {
          $(this).remove();
      });
      
      exportMain.find("textarea").each(function() {
          if ($(this).attr("type") != "hidden") {
              var html = $(this).val();
              $(this).after("<lable>" + html + "</lable>");
          }
          $(this).remove();
      });
      // exportMain.wordExport(self.rptName.replace(/<[^>]+>/g,""));
      exportMain.wordExport("城市站运维现场检查评分表");
    },
    //返回
    handleReturn() {
      var self =this;
      if(self.fromTab=="operate"){
        this.$emit("closeCurrentPage", "内部检查任务"); //调用closeCurrentPage方法注意；两点1：第二个参数必须是string，2：长度必须大于等于4
        this.$emit("jump", {
        param: "内部检查任务",
        path: "/index/ywInternalInspectionTask",
        isjump: true,
        });

      }else{
        this.$emit("closeCurrentPage", "内部检查任务"); //调用closeCurrentPage方法注意；两点1：第二个参数必须是string，2：长度必须大于等于4
        this.$emit("jump", {
        param: "内部检查任务",
        path: "/index/ywInternalInspectionTask",
        isjump: true,
        });   
      }   
    },
     
    //获取现场检查特殊问题[填写的]
     getList_Maintentance(){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/FourthInspectionTask/GetSpecialProblemByPage?pageSize=' + self.page_Maintentance.pageSize + '&pageIndex=' + self.page_Maintentance.pageNo+'&taskNo='+ self.ruleForm.TaskNo
            }).then(res => {
                if(res.status==200){
                    self.list_Maintentance=res.data.data;
                    self.page_Maintentance.total = res.data.total;
                }
            }).catch(error => {
                console.log(error);
            });
     }, 

     //关闭添加弹出框
     closeDig(){          
            var self=this;
            self.dialogVisible=!self.dialogVisible;
            self.resetForm('ruleForm')
     },
   
    //弹出窗关闭时的效果
    handleClose(done){
           this.$confirm('确认关闭?').then(_=>{
                done();  
                this.resetForm('ruleForm');})
            .catch(_=>{});
    },

    //按钮事件
    submitForm(formName, actionName) {
      switch (actionName) {
        case "任务保存":         
          this.isSave = false; //添加一条检查计划以及审核记录插入一条
          this.$refs[formName].validate((valid) => {
            if (valid) {
              var self = this;
              this.$http({
                headers: {
                  deviceCode: "A95ZEF1-47B5-AC90BF3",
                },
                method: "post",
                url: self.api + "/api/FourthInspectionTask/ShiStationTaskSubmit",
                data: self.Qs.stringify(self.ruleForm),
              })
               .then((res) => {
                  if (res.status == 200) {
                    self.$message({
                      message: res.data.message,
                      type: res.data.type,
                    });
                    //回传新的任务id用于 计划详情
                    self.ruleForm.TaskNo = res.data.taskNo    
                    this.handleReturn();     
                  }                 
                })
                .catch((error) => {
                  console.log(error);
                });
            } else {
              return false;
            }
          });
          break;

        case "检查结果提交":        
          this.isSave = false;          
          var self = this;
           this.$http({
                method: 'GET',
                url: self.api+'/api/FourthInspectionTask/FirstTrial?taskNo='+self.ruleForm.TaskNo
            }).then(res => {
                if(res.status==200){
                    self.$message({
                        message: res.data.message,
                        type: res.data.type  //warning,success,info,error
                    });
                    this.handleReturn(); 
                }
            }).catch(error => {
                console.log(error);
            });
        break;

        case "审核":
          this.isSave = false; //新增一条审核记录
          var self = this;
          this.$http({
            headers: {
              deviceCode: "A95ZEF1-47B5-AC90BF3",
            },
            method: "post",
            url: self.api + "/api/FourthInspectionTask/ScoreMakeSure",
            data: self.Qs.stringify(self.aduitForm),
          })
            .then((res) => {
              if (res.status == 200) {
                self.aduitFormDialogVisible = false;
                self.$message({
                  message: res.data.message,
                  type: res.data.type, //warning,success,info,error
                });
                this.handleReturn();
              }
            })
            .catch((error) => {
              console.log(error);
            });
           break;
         
        case "第四方复核":
          this.isSave = false; //新增一条审核记录
          var self = this;
          this.$http({
            headers: {
              deviceCode: "A95ZEF1-47B5-AC90BF3",
            },
            method: "post",
            url: self.api + "/api/FourthInspectionTask/FourthMarkSure",
            data: self.Qs.stringify(self.fourthJudgeForm),
            })
            .then((res) => {
              if (res.status == 200) {
                self.fourthJudgeFormDialogVisible = false;
                self.$message({
                  message: res.data.message,
                  type: res.data.type, //warning,success,info,error
                });

                this.handleReturn();
              }
            })
            .catch((error) => {
              console.log(error);
            });
           break;
            
        case "对问题进行整改":
          this.isSave = false; //新增一条审核记录
          var self = this;
          this.$http({
            headers: {
              deviceCode: "A95ZEF1-47B5-AC90BF3",
            },
            method: "post",
            url: self.api + "/api/FourthInspectionTask/DealSpecialProblem",
            data: self.Qs.stringify(self.modifyProblemForm),
            })
            .then((res) => {
              if (res.status == 200) {
                self.modifyProblemDialogVisible = false;
                self.$message({
                  message: res.data.message,
                  type: res.data.type, //warning,success,info,error
                });
                 self.getList_Maintentance();
                 self.resetForm('modifyProblemForm');//重置表单               
              }
            })
            .catch((error) => {
              console.log(error);
            });
           break;

        case "现场复查":
          this.isSave = false; //新增一条审核记录
          var self = this;
          this.$http({
            headers: {
              deviceCode: "A95ZEF1-47B5-AC90BF3",
            },
            method: "post",
            url: self.api + "/api/FourthInspectionTask/ReviewModifyProblem",
            data: self.Qs.stringify(self.reviewJudgeForm),
            })
            .then((res) => {
              if (res.status == 200) {
                self.reviewJudgeFormDialogVisible = false;
                self.$message({
                  message: res.data.message,
                  type: res.data.type, //warning,success,info,error
                });
                 self.getList_Maintentance();
                 self.resetForm('reviewJudgeForm');//重置表单              
              }
            })
            .catch((error) => {
              console.log(error);
            });
           break;

        default:
           break;
      }
    },

     //重置框
    resetForm(formName) {            
        this.$refs[formName].resetFields();                
    },
    
    //检查任务查询回显
    getToFirst(planNo) {
      var self = this;
      this.$http({
        method: "GET",
        url: this.api + "/api/FourthInspectionTask/GetFourthTaskById?id=" + planNo,
      })
        .then((res) => {
          if (res.status == 200) {
            if (res.data.data != null) {
                self.ruleForm.TaskNo=res.data.data.taskNo;  
                self.ruleForm.SStation=res.data.data.sStation;    
                self.ruleForm.SStationName =res.data.data.sStationName;  
                self.ruleForm.City =res.data.data.city;  
                self.ruleForm.CreatedBy = res.data.data.createdBy;  
                self.ruleForm.UnitId=res.data.data.unitId.toString();
                self.ruleForm.UnitName =res.data.data.unitName;
                self.ruleForm.DealerName =res.data.data.dealerName;
                self.ruleForm.ReviewerName =res.data.data.reviewerName;
                self.ruleForm.Remark=res.data.data.remark;   
                self.ruleForm.Title=res.data.data.title;   
                self.ruleForm.MaintainceWay=res.data.data.maintainceWay.toString();          
                self.ruleForm.PlanDealTime=res.data.data.planDealTime;
                self.ruleForm.Status=res.data.data.status;
                self.ruleForm.TaskCategoryId=res.data.data.taskCategoryId.toString();   
            }
            self.setActionStatus(); //设置按钮状态
            //如果是查看
            if (self.type == "view") {
              self.actionStatus.sava = false;
              self.actionStatus.submit = false;
              self.actionStatus.aduit = false;
              //表单保存按钮不可见，任务保存按钮不可见
              self.actionStatus.formSave =false;
              self.actionStatus.taskSave =false;
              self.actionStatus.modifyFinish =false;
              self.actionStatus.add =false;
              self.actionStatus.edit=false;
              self.actionStatus.delete =false;
              self.actionStatus.reviewModify =false;
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

   //获取图片全路径
    getFileFullPath(taskNo){
      var self =this;
       this.$http({
              method: 'GET',        
              url: self.api + '/api/Common/GetFileFullPathById?id='+taskNo
        }).then(res => {
              self.files =res.data.data;
              self.getFlieStream();
        }).catch(error => {
              console.log(error);
      });
    },

    //图片删除
    deleteImg(fileGUID,fileURL){
        var self=this;
        this.$confirm('确认删除吗？').then(function () {
            self.$http({
                method: 'GET',
                url: self.api+'/api/Upload/DeleteByFileGUID?FileGUID=' + fileGUID + '&FileURL='+ fileURL
            }).then(res => {
                if(res.data.code==200){
                    self.$message({
                        message: res.data.message,
                        type: res.data.type,
                    });
                    //刷新列表
                    self.getList_file();                    
                    for(var i=self.ywzgfileListAdd.length-1;i>=0;i--){
                      if(self.ywzgfileListAdd[i].fileGUID == fileGUID){
                          self.ywzgfileListAdd.splice(i,1);
                      }
                    }
                    for(var i=self.files.length-1;i>=0;i--){
                      if(self.files[i].indexOf(fileGUID)>-1){
                          self.files.splice(i,1);
                      }
                    }
                    
                }
            })
            }).catch(function () {
        });
    },
    //获取图片流
    getFlieStream(){
      var self=this;
      var imgUrlArr=[];
      self.files.forEach(item => {
        imgUrlArr.push({
          fileGUID:item.split(",")[1],
          fileURL:item.split(",")[0]
        });
       
      });
      if(imgUrlArr.length>0){
        imgUrlArr.forEach(item => {
          this.$http({
              method: 'GET',
              responseType:'blob',
              url: self.api + '/api/Common/GetFlieStream?partialPath='+item.fileURL
          }).then(res => {     
            let fileObj={}
            fileObj.url=window.URL.createObjectURL(res.data); 
            if(item.fileURL.indexOf("JcPic")>-1){
              self.fileListAdd.push(fileObj);
            }else{
              self.ywzgfileListAdd.push({
                fileURL:fileObj.url,
                fileGUID:item.fileGUID
              });      
            }            
          }).catch(error => {
              console.log(error);
          });
        });
      }    
    },

    //获取参数
    getParam() {
      var self = this;
      const data = self.getUrlKey("obj");    
      if(data!=null){
           self.ruleForm.TaskNo = JSON.parse(data).taskNo;
           //按钮类型
           self.type = JSON.parse(data).type;
           //来自哪个tab
           self.fromTab = JSON.parse(data).fromTab;
           //获取检查任务状态
            self.taskStatus=JSON.parse(data).taskStatus;
           //编辑或者提交,查看
           if (JSON.parse(data).taskNo != "") {
             //依据检查id回显
            self.getToFirst(JSON.parse(data).taskNo);
            //获取评分信息
             self.getTaskScore(JSON.parse(data).taskNo);
             self.getList_Maintentance();
             self.getFileFullPath(JSON.parse(data).taskNo);
             self.getNowTime();
             //点击查看或者是从第四方检查整改,将所有文本设置为只读
             if(self.type=="view"||self.fromTab=="operate"||self.taskStatus==7)
             {
                  self.disable=true;         
             }

          }else{
            //新增
            this.ruleForm.Status=1;         
            this.setActionStatus();      
          }  
          self.initStepList();  
      }    
    },
    
    //获取任务评分表单
    getTaskScore(taskNo){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/FourthInspectionTask/GetJcRptById?taskNo=' + taskNo
            }).then(res => {
                if(res.status==200){
                    //处理数据
                    if(res.data.data!=null){
                      //时间回显
                    self.ruleFormZhiKong.CreateRptTime = res.data.data.createRptTime;
                    var model=JSON.parse(res.data.data.content);                  
                      //评分回显
                       self.ruleFormZhiKong.Sign = model.Sign;
        
        self.ruleFormZhiKong.E_rc_Jc_1100=model.E_rc_Jc_1100;
        self.ruleFormZhiKong.E_rc_Jc_1101=model.E_rc_Jc_1101;
        self.ruleFormZhiKong.E_rc_Jc_1102=model.E_rc_Jc_1102;
        self.ruleFormZhiKong.E_rc_Jc_1103=model.E_rc_Jc_1103;
        self.ruleFormZhiKong.E_rc_Jc_1104=model.E_rc_Jc_1104;
        self.ruleFormZhiKong.E_rc_Jc_1105=model.E_rc_Jc_1105;
        self.ruleFormZhiKong.E_rc_Jc_1106=model.E_rc_Jc_1106;
        self.ruleFormZhiKong.E_rc_Jc_1107=model.E_rc_Jc_1107;
        self.ruleFormZhiKong.E_rc_Jc_1108=model.E_rc_Jc_1108;
        self.ruleFormZhiKong.E_rc_Jc_1109=model.E_rc_Jc_1109;
        self.ruleFormZhiKong.E_rc_Jc_1110=model.E_rc_Jc_1110;
        self.ruleFormZhiKong.E_rc_Jc_1111=model.E_rc_Jc_1111;
        self.ruleFormZhiKong.E_rc_Jc_1112=model.E_rc_Jc_1112;
        self.ruleFormZhiKong.E_rc_Jc_1113=model.E_rc_Jc_1113;
        self.ruleFormZhiKong.E_rc_Jc_1114=model.E_rc_Jc_1114;
        self.ruleFormZhiKong.E_rc_Jc_1115=model.E_rc_Jc_1115;
        self.ruleFormZhiKong.E_rc_Jc_1116=model.E_rc_Jc_1116;
        self.ruleFormZhiKong.E_rc_Jc_1117=model.E_rc_Jc_1117;
        self.ruleFormZhiKong.E_rc_Jc_1118=model.E_rc_Jc_1118;
        self.ruleFormZhiKong.E_rc_Jc_1119=model.E_rc_Jc_1119;
        self.ruleFormZhiKong.E_rc_Jc_1120=model.E_rc_Jc_1120;
        self.ruleFormZhiKong.E_rc_Jc_1121=model.E_rc_Jc_1121;
        self.ruleFormZhiKong.E_rc_Jc_1122=model.E_rc_Jc_1122;
        self.ruleFormZhiKong.E_rc_Jc_1123=model.E_rc_Jc_1123;
        self.ruleFormZhiKong.E_rc_Jc_1124=model.E_rc_Jc_1124;
        self.ruleFormZhiKong.E_rc_Jc_1125=model.E_rc_Jc_1125;
        self.ruleFormZhiKong.E_rc_Jc_1126=model.E_rc_Jc_1126;
        self.ruleFormZhiKong.E_rc_Jc_1127=model.E_rc_Jc_1127;
        self.ruleFormZhiKong.E_rc_Jc_1128=model.E_rc_Jc_1128;
        self.ruleFormZhiKong.E_rc_Jc_1129=model.E_rc_Jc_1129;
        self.ruleFormZhiKong.E_rc_Jc_1130=model.E_rc_Jc_1130;
        self.ruleFormZhiKong.E_rc_Jc_1131=model.E_rc_Jc_1131;
        self.ruleFormZhiKong.E_rc_Jc_1132=model.E_rc_Jc_1132;
        self.ruleFormZhiKong.E_rc_Jc_1133=model.E_rc_Jc_1133;
        self.ruleFormZhiKong.E_rc_Jc_1134=model.E_rc_Jc_1134;
        self.ruleFormZhiKong.E_rc_Jc_1135=model.E_rc_Jc_1135;
        self.ruleFormZhiKong.E_rc_Jc_1136=model.E_rc_Jc_1136;
        self.ruleFormZhiKong.E_rc_Jc_1137=model.E_rc_Jc_1137;
        self.ruleFormZhiKong.E_rc_Jc_1138=model.E_rc_Jc_1138;
        self.ruleFormZhiKong.E_rc_Jc_1139=model.E_rc_Jc_1139;
        self.ruleFormZhiKong.E_rc_Jc_1140=model.E_rc_Jc_1140;
        self.ruleFormZhiKong.E_rc_Jc_1141=model.E_rc_Jc_1141;
        self.ruleFormZhiKong.E_rc_Jc_1142=model.E_rc_Jc_1142;
        self.ruleFormZhiKong.E_rc_Jc_1143=model.E_rc_Jc_1143;
        self.ruleFormZhiKong.E_rc_Jc_1144=model.E_rc_Jc_1144;
        self.ruleFormZhiKong.E_rc_Jc_1145=model.E_rc_Jc_1145;
        self.ruleFormZhiKong.E_rc_Jc_1146=model.E_rc_Jc_1146;
        self.ruleFormZhiKong.E_rc_Jc_1147=model.E_rc_Jc_1147;
        self.ruleFormZhiKong.E_rc_Jc_1148=model.E_rc_Jc_1148;
        self.ruleFormZhiKong.E_rc_Jc_1149=model.E_rc_Jc_1149;
        self.ruleFormZhiKong.E_rc_Jc_1150=model.E_rc_Jc_1150;
        self.ruleFormZhiKong.E_rc_Jc_1151=model.E_rc_Jc_1151;
        self.ruleFormZhiKong.E_rc_Jc_1152=model.E_rc_Jc_1152;
        self.ruleFormZhiKong.E_rc_Jc_1153=model.E_rc_Jc_1153;
        self.ruleFormZhiKong.E_rc_Jc_1154=model.E_rc_Jc_1154;
        self.ruleFormZhiKong.E_rc_Jc_1155=model.E_rc_Jc_1155;
        self.ruleFormZhiKong.E_rc_Jc_1156=model.E_rc_Jc_1156;
        self.ruleFormZhiKong.E_rc_Jc_1157=model.E_rc_Jc_1157;
        self.ruleFormZhiKong.E_rc_Jc_1158=model.E_rc_Jc_1158;
        self.ruleFormZhiKong.E_rc_Jc_1159=model.E_rc_Jc_1159;
        self.ruleFormZhiKong.E_rc_Jc_1160=model.E_rc_Jc_1160;
        self.ruleFormZhiKong.E_rc_Jc_1161=model.E_rc_Jc_1161;
        self.ruleFormZhiKong.E_rc_Jc_1162=model.E_rc_Jc_1162;
        self.ruleFormZhiKong.E_rc_Jc_1163=model.E_rc_Jc_1163;
        self.ruleFormZhiKong.E_rc_Jc_1164=model.E_rc_Jc_1164;
        self.ruleFormZhiKong.E_rc_Jc_1165=model.E_rc_Jc_1165;
        self.ruleFormZhiKong.E_rc_Jc_1166=model.E_rc_Jc_1166;
        self.ruleFormZhiKong.E_rc_Jc_1167=model.E_rc_Jc_1167;
        self.ruleFormZhiKong.E_rc_Jc_1168=model.E_rc_Jc_1168;
        self.ruleFormZhiKong.E_rc_Jc_1169=model.E_rc_Jc_1169;
        self.ruleFormZhiKong.E_rc_Jc_1170=model.E_rc_Jc_1170;
        self.ruleFormZhiKong.E_rc_Jc_1171=model.E_rc_Jc_1171;
        self.ruleFormZhiKong.E_rc_Jc_1172=model.E_rc_Jc_1172;
        self.ruleFormZhiKong.E_rc_Jc_1173=model.E_rc_Jc_1173;
        self.ruleFormZhiKong.E_rc_Jc_1174=model.E_rc_Jc_1174;
        self.ruleFormZhiKong.E_rc_Jc_1175=model.E_rc_Jc_1175;
        self.ruleFormZhiKong.E_rc_Jc_1176=model.E_rc_Jc_1176;
        self.ruleFormZhiKong.E_rc_Jc_1177=model.E_rc_Jc_1177;
        self.ruleFormZhiKong.E_rc_Jc_1178=model.E_rc_Jc_1178;
        self.ruleFormZhiKong.E_rc_Jc_1179=model.E_rc_Jc_1179;
        self.ruleFormZhiKong.E_rc_Jc_1180=model.E_rc_Jc_1180;

         self.ruleFormZhiKong.E_rc_Jc_1_Score = model.E_rc_Jc_1_Score;
         self.ruleFormZhiKong.E_rc_Jc_9_Score = model.E_rc_Jc_9_Score;
        self.ruleFormZhiKong.E_rc_Jc_14_Score= model.E_rc_Jc_14_Score;
        self.ruleFormZhiKong.E_rc_Jc_26_Score= model.E_rc_Jc_26_Score;
        self.ruleFormZhiKong.E_rc_Jc_30_Score= model.E_rc_Jc_30_Score;
        self.ruleFormZhiKong.E_rc_Jc_36_Score= model.E_rc_Jc_36_Score;
        self.ruleFormZhiKong.E_rc_Jc_40_Score= model.E_rc_Jc_40_Score;
        self.ruleFormZhiKong.E_rc_Jc_48_Score= model.E_rc_Jc_48_Score;
        self.ruleFormZhiKong.E_rc_Jc_53_Score= model.E_rc_Jc_53_Score;
        self.ruleFormZhiKong.E_rc_Jc_56_Score= model.E_rc_Jc_56_Score;
        self.ruleFormZhiKong.E_rc_Jc_61_Score= model.E_rc_Jc_61_Score;
        self.ruleFormZhiKong.E_rc_Jc_67_Score= model.E_rc_Jc_67_Score;
        self.ruleFormZhiKong.E_rc_Jc_70_Score= model.E_rc_Jc_70_Score;
        self.ruleFormZhiKong.E_rc_Jc_74_Score= model.E_rc_Jc_74_Score;
        self.ruleFormZhiKong.E_rc_Jc_79_Score= model.E_rc_Jc_79_Score;
        self.ruleFormZhiKong.E_rc_Jc_85_Score= model.E_rc_Jc_85_Score;
        self.ruleFormZhiKong.E_rc_Jc_1006_Score= model.E_rc_Jc_1006_Score;
        self.ruleFormZhiKong.E_rc_Jc_95_Score= model.E_rc_Jc_95_Score;
        self.ruleFormZhiKong.E_rc_Jc_106_Score= model.E_rc_Jc_106_Score;
        self.ruleFormZhiKong.E_rc_Jc_116_Score= model.E_rc_Jc_116_Score;
        self.ruleFormZhiKong.E_rc_Jc_127_Score= model.E_rc_Jc_127_Score;
        self.ruleFormZhiKong.E_rc_Jc_135_Score= model.E_rc_Jc_135_Score;
        self.ruleFormZhiKong.E_rc_Jc_142_Score= model.E_rc_Jc_142_Score;
        self.ruleFormZhiKong.E_rc_Jc_149_Score= model.E_rc_Jc_149_Score;
        self.ruleFormZhiKong.E_rc_Jc_151_Score= model.E_rc_Jc_151_Score;
        self.ruleFormZhiKong.E_rc_Jc_153_Score= model.E_rc_Jc_153_Score;
        self.ruleFormZhiKong.E_rc_Jc_155_Score= model.E_rc_Jc_155_Score;
        self.ruleFormZhiKong.E_rc_Jc_157_Score= model.E_rc_Jc_157_Score;
         
          //备注
         self.ruleFormZhiKong.E_rc_Jc_1_Mark=model.E_rc_Jc_1_Mark;
         self.ruleFormZhiKong.E_rc_Jc_9_Mark =model.E_rc_Jc_9_Mark ;
         self.ruleFormZhiKong.E_rc_Jc_14_Mark =model.E_rc_Jc_14_Mark ;
         self.ruleFormZhiKong.E_rc_Jc_26_Mark=model.E_rc_Jc_26_Mark;
         self.ruleFormZhiKong.E_rc_Jc_30_Mark=model.E_rc_Jc_30_Mark;
         self.ruleFormZhiKong.E_rc_Jc_36_Mark=model.E_rc_Jc_36_Mark;
         self.ruleFormZhiKong.E_rc_Jc_40_Mark=model.E_rc_Jc_40_Mark;
         self.ruleFormZhiKong.E_rc_Jc_48_Mark=model.E_rc_Jc_48_Mark;
         self.ruleFormZhiKong.E_rc_Jc_53_Mark=model.E_rc_Jc_53_Mark;
         self.ruleFormZhiKong.E_rc_Jc_56_Mark=model.E_rc_Jc_56_Mark;       
         self.ruleFormZhiKong.E_rc_Jc_61_Mark=model.E_rc_Jc_61_Mark;
         self.ruleFormZhiKong.E_rc_Jc_67_Mark=model.E_rc_Jc_67_Mark;
         self.ruleFormZhiKong.E_rc_Jc_70_Mark=model.E_rc_Jc_70_Mark;
         self.ruleFormZhiKong.E_rc_Jc_74_Mark=model.E_rc_Jc_74_Mark;
         self.ruleFormZhiKong.E_rc_Jc_79_Mark=model.E_rc_Jc_79_Mark;
         self.ruleFormZhiKong.E_rc_Jc_85_Mark=model.E_rc_Jc_85_Mark;
         self.ruleFormZhiKong.E_rc_Jc_1006_Mark=model.E_rc_Jc_1006_Mark;
         self.ruleFormZhiKong.E_rc_Jc_95_Mark=model.E_rc_Jc_95_Mark;
         self.ruleFormZhiKong.E_rc_Jc_106_Mark=model.E_rc_Jc_106_Mark;
         self.ruleFormZhiKong.E_rc_Jc_116_Mark=model.E_rc_Jc_116_Mark;
         self.ruleFormZhiKong.E_rc_Jc_127_Mark=model.E_rc_Jc_127_Mark;
         self.ruleFormZhiKong.E_rc_Jc_135_Mark=model.E_rc_Jc_135_Mark;
         self.ruleFormZhiKong.E_rc_Jc_1000=model.E_rc_Jc_1000;
         self.ruleFormZhiKong.E_rc_Jc_1001=model.E_rc_Jc_1001;
         self.ruleFormZhiKong.E_rc_Jc_1002=model.E_rc_Jc_1002;
         self.ruleFormZhiKong.E_rc_Jc_1003=model.E_rc_Jc_1003;
         self.ruleFormZhiKong.E_rc_Jc_1004=model.E_rc_Jc_1004;
         self.ruleFormZhiKong.E_rc_Jc_1005=model.E_rc_Jc_1005;
         self.ruleFormZhiKong.E_rc_Jc_142_Mark=model.E_rc_Jc_142_Mark;
         self.ruleFormZhiKong.E_rc_Jc_149_Mark=model.E_rc_Jc_149_Mark;
         self.ruleFormZhiKong.E_rc_Jc_151_Mark=model.E_rc_Jc_151_Mark;
         self.ruleFormZhiKong.E_rc_Jc_153_Mark=model.E_rc_Jc_153_Mark;
         self.ruleFormZhiKong.E_rc_Jc_155_Mark=model.E_rc_Jc_155_Mark;
         self.ruleFormZhiKong.E_rc_Jc_157_Mark=model.E_rc_Jc_157_Mark;
         self.ruleFormZhiKong.E_rc_Jc_410 = model.E_rc_Jc_410;

          //仪器值栏
         self.ruleFormZhiKong.E_rc_Jc_350=model.E_rc_Jc_350;      
         self.ruleFormZhiKong.E_rc_Jc_351=model.E_rc_Jc_351;
         self.ruleFormZhiKong.E_rc_Jc_351_new=model.E_rc_Jc_351_new;
         self.ruleFormZhiKong.E_rc_Jc_171=model.E_rc_Jc_171;
         self.ruleFormZhiKong.E_rc_Jc_172=model.E_rc_Jc_172;
         self.ruleFormZhiKong.E_rc_Jc_173=model.E_rc_Jc_173;
         self.ruleFormZhiKong.E_rc_Jc_169=model.E_rc_Jc_169;
         self.ruleFormZhiKong.E_rc_Jc_168=model.E_rc_Jc_168;
         self.ruleFormZhiKong.E_rc_Jc_167=model.E_rc_Jc_167;
         self.ruleFormZhiKong.E_rc_Jc_166=model.E_rc_Jc_166;
         self.ruleFormZhiKong.E_rc_Jc_165=model.E_rc_Jc_165;
         self.ruleFormZhiKong.E_rc_Jc_164=model.E_rc_Jc_164;
         self.ruleFormZhiKong.E_rc_Jc_179=model.E_rc_Jc_179;
         self.ruleFormZhiKong.E_rc_Jc_180=model.E_rc_Jc_180;
         self.ruleFormZhiKong.E_rc_Jc_181=model.E_rc_Jc_181;
         self.ruleFormZhiKong.E_rc_Jc_182=model.E_rc_Jc_182;      
         self.ruleFormZhiKong.E_rc_Jc_183=model.E_rc_Jc_183;
         self.ruleFormZhiKong.E_rc_Jc_184=model.E_rc_Jc_184;
         self.ruleFormZhiKong.E_rc_Jc_185=model.E_rc_Jc_185;
         self.ruleFormZhiKong.E_rc_Jc_186=model.E_rc_Jc_186;
         self.ruleFormZhiKong.E_rc_Jc_187=model.E_rc_Jc_187;
         self.ruleFormZhiKong.E_rc_Jc_189=model.E_rc_Jc_189;
         self.ruleFormZhiKong.E_rc_Jc_190=model.E_rc_Jc_190;
         self.ruleFormZhiKong.E_rc_Jc_191=model.E_rc_Jc_191;
         self.ruleFormZhiKong.E_rc_Jc_192=model.E_rc_Jc_192;
         self.ruleFormZhiKong.E_rc_Jc_193=model.E_rc_Jc_193;
         self.ruleFormZhiKong.E_rc_Jc_195=model.E_rc_Jc_195;
         self.ruleFormZhiKong.E_rc_Jc_196=model.E_rc_Jc_196;
         self.ruleFormZhiKong.E_rc_Jc_197=model.E_rc_Jc_197;
         self.ruleFormZhiKong.E_rc_Jc_206=model.E_rc_Jc_206;
         self.ruleFormZhiKong.E_rc_Jc_207=model.E_rc_Jc_207;
         self.ruleFormZhiKong.E_rc_Jc_208=model.E_rc_Jc_208;      
         self.ruleFormZhiKong.E_rc_Jc_209=model.E_rc_Jc_209;
         self.ruleFormZhiKong.E_rc_Jc_210=model.E_rc_Jc_210;
         self.ruleFormZhiKong.E_rc_Jc_211=model.E_rc_Jc_211;
         self.ruleFormZhiKong.E_rc_Jc_212=model.E_rc_Jc_212;
         self.ruleFormZhiKong.E_rc_Jc_213=model.E_rc_Jc_213;
         self.ruleFormZhiKong.E_rc_Jc_214=model.E_rc_Jc_214;
         self.ruleFormZhiKong.E_rc_Jc_216=model.E_rc_Jc_216;
         self.ruleFormZhiKong.E_rc_Jc_217=model.E_rc_Jc_217;
         self.ruleFormZhiKong.E_rc_Jc_218=model.E_rc_Jc_218;
         self.ruleFormZhiKong.E_rc_Jc_219=model.E_rc_Jc_219;
         self.ruleFormZhiKong.E_rc_Jc_220=model.E_rc_Jc_220;
         self.ruleFormZhiKong.E_rc_Jc_222=model.E_rc_Jc_222;
         self.ruleFormZhiKong.E_rc_Jc_223=model.E_rc_Jc_223;
         self.ruleFormZhiKong.E_rc_Jc_224=model.E_rc_Jc_224;
         self.ruleFormZhiKong.E_rc_Jc_225=model.E_rc_Jc_225;
         self.ruleFormZhiKong.E_rc_Jc_235=model.E_rc_Jc_235;
         self.ruleFormZhiKong.E_rc_Jc_236=model.E_rc_Jc_236;
         self.ruleFormZhiKong.E_rc_Jc_237=model.E_rc_Jc_237;      
         self.ruleFormZhiKong.E_rc_Jc_238=model.E_rc_Jc_238;
         self.ruleFormZhiKong.E_rc_Jc_239=model.E_rc_Jc_239;
         self.ruleFormZhiKong.E_rc_Jc_240=model.E_rc_Jc_240;
         self.ruleFormZhiKong.E_rc_Jc_241=model.E_rc_Jc_241;
         self.ruleFormZhiKong.E_rc_Jc_242=model.E_rc_Jc_242;
         self.ruleFormZhiKong.E_rc_Jc_243=model.E_rc_Jc_243;
         self.ruleFormZhiKong.E_rc_Jc_244=model.E_rc_Jc_244;
         self.ruleFormZhiKong.E_rc_Jc_245=model.E_rc_Jc_245;
         self.ruleFormZhiKong.E_rc_Jc_246=model.E_rc_Jc_246;
         self.ruleFormZhiKong.E_rc_Jc_247=model.E_rc_Jc_247;
         self.ruleFormZhiKong.E_rc_Jc_248=model.E_rc_Jc_248;
         self.ruleFormZhiKong.E_rc_Jc_249=model.E_rc_Jc_249;
         self.ruleFormZhiKong.E_rc_Jc_250=model.E_rc_Jc_250;
         self.ruleFormZhiKong.E_rc_Jc_251=model.E_rc_Jc_251;
         self.ruleFormZhiKong.E_rc_Jc_252=model.E_rc_Jc_252;
         self.ruleFormZhiKong.E_rc_Jc_253=model.E_rc_Jc_253;
         self.ruleFormZhiKong.E_rc_Jc_262=model.E_rc_Jc_262;      
         self.ruleFormZhiKong.E_rc_Jc_263=model.E_rc_Jc_263;
         self.ruleFormZhiKong.E_rc_Jc_264=model.E_rc_Jc_264;
         self.ruleFormZhiKong.E_rc_Jc_265=model.E_rc_Jc_265;
         self.ruleFormZhiKong.E_rc_Jc_266=model.E_rc_Jc_266;
         self.ruleFormZhiKong.E_rc_Jc_267=model.E_rc_Jc_267;
         self.ruleFormZhiKong.E_rc_Jc_269=model.E_rc_Jc_269;
         self.ruleFormZhiKong.E_rc_Jc_268=model.E_rc_Jc_268;
         self.ruleFormZhiKong.E_rc_Jc_270=model.E_rc_Jc_270;
         self.ruleFormZhiKong.E_rc_Jc_272=model.E_rc_Jc_272;
         self.ruleFormZhiKong.E_rc_Jc_274=model.E_rc_Jc_274;
         self.ruleFormZhiKong.E_rc_Jc_273=model.E_rc_Jc_273;
         self.ruleFormZhiKong.E_rc_Jc_275=model.E_rc_Jc_275;
         self.ruleFormZhiKong.E_rc_Jc_276=model.E_rc_Jc_276;
         self.ruleFormZhiKong.E_rc_Jc_278=model.E_rc_Jc_278;
         self.ruleFormZhiKong.E_rc_Jc_279=model.E_rc_Jc_279;
         self.ruleFormZhiKong.E_rc_Jc_280=model.E_rc_Jc_280;
         self.ruleFormZhiKong.E_rc_Jc_282=model.E_rc_Jc_282;      
         self.ruleFormZhiKong.E_rc_Jc_283=model.E_rc_Jc_283;
         self.ruleFormZhiKong.E_rc_Jc_284=model.E_rc_Jc_284;
         self.ruleFormZhiKong.E_rc_Jc_294=model.E_rc_Jc_294;
         self.ruleFormZhiKong.E_rc_Jc_295=model.E_rc_Jc_295;
         self.ruleFormZhiKong.E_rc_Jc_296=model.E_rc_Jc_296;
         self.ruleFormZhiKong.E_rc_Jc_297=model.E_rc_Jc_297;
         self.ruleFormZhiKong.E_rc_Jc_298=model.E_rc_Jc_298;
         self.ruleFormZhiKong.E_rc_Jc_299=model.E_rc_Jc_299;
         self.ruleFormZhiKong.E_rc_Jc_300=model.E_rc_Jc_300;
         self.ruleFormZhiKong.E_rc_Jc_301=model.E_rc_Jc_301;
         self.ruleFormZhiKong.E_rc_Jc_308=model.E_rc_Jc_308;
         self.ruleFormZhiKong.E_rc_Jc_309=model.E_rc_Jc_309;
         self.ruleFormZhiKong.E_rc_Jc_310=model.E_rc_Jc_310;
         self.ruleFormZhiKong.E_rc_Jc_311=model.E_rc_Jc_311;
         self.ruleFormZhiKong.E_rc_Jc_312=model.E_rc_Jc_312;
         self.ruleFormZhiKong.E_rc_Jc_313=model.E_rc_Jc_313;
         self.ruleFormZhiKong.E_rc_Jc_314=model.E_rc_Jc_314;
         self.ruleFormZhiKong.E_rc_Jc_315=model.E_rc_Jc_315;

          //扣分项checkbox
        self.ruleFormZhiKong.E_rc_Jc_2 = model.E_rc_Jc_2;
        self.ruleFormZhiKong.E_rc_Jc_3 = model.E_rc_Jc_3;
        self.ruleFormZhiKong.E_rc_Jc_4 = model.E_rc_Jc_4;
        self.ruleFormZhiKong.E_rc_Jc_5 = model.E_rc_Jc_5;
        self.ruleFormZhiKong.E_rc_Jc_5_new = model.E_rc_Jc_5_new;
        self.ruleFormZhiKong.E_rc_Jc_10 = model.E_rc_Jc_10;
        self.ruleFormZhiKong.E_rc_Jc_11 = model.E_rc_Jc_11;
        self.ruleFormZhiKong.E_rc_Jc_15 = model.E_rc_Jc_15;
        self.ruleFormZhiKong.E_rc_Jc_16 = model.E_rc_Jc_16;
        self.ruleFormZhiKong.E_rc_Jc_17 = model.E_rc_Jc_17;
        self.ruleFormZhiKong.E_rc_Jc_18 = model.E_rc_Jc_18;
        self.ruleFormZhiKong.E_rc_Jc_19 = model.E_rc_Jc_19;
        self.ruleFormZhiKong.E_rc_Jc_20 = model.E_rc_Jc_20;
        self.ruleFormZhiKong.E_rc_Jc_21 = model.E_rc_Jc_21;
        self.ruleFormZhiKong.E_rc_Jc_27 = model.E_rc_Jc_27;
        self.ruleFormZhiKong.E_rc_Jc_28 = model.E_rc_Jc_28;
        self.ruleFormZhiKong.E_rc_Jc_31 = model.E_rc_Jc_31;
        self.ruleFormZhiKong.E_rc_Jc_32 = model.E_rc_Jc_32;
        self.ruleFormZhiKong.E_rc_Jc_33 = model.E_rc_Jc_33;
        self.ruleFormZhiKong.E_rc_Jc_34 = model.E_rc_Jc_34;
        self.ruleFormZhiKong.E_rc_Jc_33_new = model.E_rc_Jc_33_new;
        self.ruleFormZhiKong.E_rc_Jc_34_new = model.E_rc_Jc_34_new;
        self.ruleFormZhiKong.E_rc_Jc_37 = model.E_rc_Jc_37;
        self.ruleFormZhiKong.E_rc_Jc_38 = model.E_rc_Jc_38;
        self.ruleFormZhiKong.E_rc_Jc_41 = model.E_rc_Jc_41;
        self.ruleFormZhiKong.E_rc_Jc_42 = model.E_rc_Jc_42;
        self.ruleFormZhiKong.E_rc_Jc_43 = model.E_rc_Jc_43;
        self.ruleFormZhiKong.E_rc_Jc_44 = model.E_rc_Jc_44;      
        self.ruleFormZhiKong.E_rc_Jc_45 = model.E_rc_Jc_45;
        self.ruleFormZhiKong.E_rc_Jc_46 = model.E_rc_Jc_46;
        self.ruleFormZhiKong.E_rc_Jc_49 = model.E_rc_Jc_49;
        self.ruleFormZhiKong.E_rc_Jc_50 = model.E_rc_Jc_50;
        self.ruleFormZhiKong.E_rc_Jc_51 = model.E_rc_Jc_51;
        self.ruleFormZhiKong.E_rc_Jc_51_new = model.E_rc_Jc_51_new;
        self.ruleFormZhiKong.E_rc_Jc_54 = model.E_rc_Jc_54;
        self.ruleFormZhiKong.E_rc_Jc_57 = model.E_rc_Jc_57;
        self.ruleFormZhiKong.E_rc_Jc_58 = model.E_rc_Jc_58;
        self.ruleFormZhiKong.E_rc_Jc_58_new = model.E_rc_Jc_58_new;
        self.ruleFormZhiKong.E_rc_Jc_62 = model.E_rc_Jc_62;
        self.ruleFormZhiKong.E_rc_Jc_63 = model.E_rc_Jc_63;
        self.ruleFormZhiKong.E_rc_Jc_64 = model.E_rc_Jc_64;
        self.ruleFormZhiKong.E_rc_Jc_65 = model.E_rc_Jc_65;
        self.ruleFormZhiKong.E_rc_Jc_68 = model.E_rc_Jc_68;
        self.ruleFormZhiKong.E_rc_Jc_71 = model.E_rc_Jc_71;
        self.ruleFormZhiKong.E_rc_Jc_72 = model.E_rc_Jc_72;
        self.ruleFormZhiKong.E_rc_Jc_75 = model.E_rc_Jc_75;
        self.ruleFormZhiKong.E_rc_Jc_77 = model.E_rc_Jc_77;
        self.ruleFormZhiKong.E_rc_Jc_77_new = model.E_rc_Jc_77_new;
        self.ruleFormZhiKong.E_rc_Jc_401_new = model.E_rc_Jc_401_new;
        self.ruleFormZhiKong.E_rc_Jc_401 = model.E_rc_Jc_401;
        self.ruleFormZhiKong.E_rc_Jc_80 = model.E_rc_Jc_80;
        self.ruleFormZhiKong.E_rc_Jc_81 = model.E_rc_Jc_81;
        self.ruleFormZhiKong.E_rc_Jc_82 = model.E_rc_Jc_82;
        self.ruleFormZhiKong.E_rc_Jc_86 = model.E_rc_Jc_86;
        self.ruleFormZhiKong.E_rc_Jc_87 = model.E_rc_Jc_87;
        self.ruleFormZhiKong.E_rc_Jc_88 = model.E_rc_Jc_88;
        self.ruleFormZhiKong.E_rc_Jc_89 = model.E_rc_Jc_89;
        self.ruleFormZhiKong.E_rc_Jc_90 = model.E_rc_Jc_90;
        self.ruleFormZhiKong.E_rc_Jc_91 = model.E_rc_Jc_91;
        self.ruleFormZhiKong.E_rc_Jc_92 = model.E_rc_Jc_92;
        self.ruleFormZhiKong.E_rc_Jc_93 = model.E_rc_Jc_93;
        self.ruleFormZhiKong.E_rc_Jc_92_new = model.E_rc_Jc_92_new;
        self.ruleFormZhiKong.E_rc_Jc_93_new = model.E_rc_Jc_93_new;
        self.ruleFormZhiKong.E_rc_Jc_96 = model.E_rc_Jc_96;
        self.ruleFormZhiKong.E_rc_Jc_96_new = model.E_rc_Jc_96_new;
        self.ruleFormZhiKong.E_rc_Jc_97 = model.E_rc_Jc_97;
        self.ruleFormZhiKong.E_rc_Jc_98 = model.E_rc_Jc_98;
        self.ruleFormZhiKong.E_rc_Jc_98_new = model.E_rc_Jc_98_new;
        self.ruleFormZhiKong.E_rc_Jc_102_new = model.E_rc_Jc_102_new;
        self.ruleFormZhiKong.E_rc_Jc_99 = model.E_rc_Jc_99;
        self.ruleFormZhiKong.E_rc_Jc_100 = model.E_rc_Jc_100;
        self.ruleFormZhiKong.E_rc_Jc_101 = model.E_rc_Jc_101;
        self.ruleFormZhiKong.E_rc_Jc_102 = model.E_rc_Jc_102;
        self.ruleFormZhiKong.E_rc_Jc_103 = model.E_rc_Jc_103;
        self.ruleFormZhiKong.E_rc_Jc_104 = model.E_rc_Jc_104;
        self.ruleFormZhiKong.E_rc_Jc_107 = model.E_rc_Jc_107;
        self.ruleFormZhiKong.E_rc_Jc_107_new = model.E_rc_Jc_107_new;
        self.ruleFormZhiKong.E_rc_Jc_108 = model.E_rc_Jc_108;
        self.ruleFormZhiKong.E_rc_Jc_109 = model.E_rc_Jc_109;
        self.ruleFormZhiKong.E_rc_Jc_109_new = model.E_rc_Jc_109_new;
        self.ruleFormZhiKong.E_rc_Jc_110 = model.E_rc_Jc_110;
        self.ruleFormZhiKong.E_rc_Jc_111 = model.E_rc_Jc_111;
        self.ruleFormZhiKong.E_rc_Jc_112 = model.E_rc_Jc_112;
        self.ruleFormZhiKong.E_rc_Jc_113 = model.E_rc_Jc_113;
        self.ruleFormZhiKong.E_rc_Jc_114 = model.E_rc_Jc_114;
        self.ruleFormZhiKong.E_rc_Jc_114_new = model.E_rc_Jc_114_new;
        self.ruleFormZhiKong.E_rc_Jc_117 = model.E_rc_Jc_117;
        self.ruleFormZhiKong.E_rc_Jc_117_new = model.E_rc_Jc_117_new;
        self.ruleFormZhiKong.E_rc_Jc_118 = model.E_rc_Jc_118;
        self.ruleFormZhiKong.E_rc_Jc_119 = model.E_rc_Jc_119;
        self.ruleFormZhiKong.E_rc_Jc_120 = model.E_rc_Jc_120;
        self.ruleFormZhiKong.hg = model.hg;
        self.ruleFormZhiKong.hg25 = model.hg25;
        self.ruleFormZhiKong.bhg = model.bhg;
        self.ruleFormZhiKong.bhg25 = model.bhg25;
        self.ruleFormZhiKong.E_rc_Jc_121 = model.E_rc_Jc_121;
        self.ruleFormZhiKong.E_rc_Jc_121_new = model.E_rc_Jc_121_new;
        self.ruleFormZhiKong.E_rc_Jc_122 = model.E_rc_Jc_122;
        self.ruleFormZhiKong.E_rc_Jc_123 = model.E_rc_Jc_123;
        self.ruleFormZhiKong.E_rc_Jc_124 = model.E_rc_Jc_124;
        self.ruleFormZhiKong.E_rc_Jc_125 = model.E_rc_Jc_125;
        self.ruleFormZhiKong.E_rc_Jc_128 = model.E_rc_Jc_128;
        self.ruleFormZhiKong.E_rc_Jc_129 = model.E_rc_Jc_129;
        self.ruleFormZhiKong.E_rc_Jc_130 = model.E_rc_Jc_130;
        self.ruleFormZhiKong.E_rc_Jc_131 = model.E_rc_Jc_131;
        self.ruleFormZhiKong.E_rc_Jc_132 = model.E_rc_Jc_132;
        self.ruleFormZhiKong.E_rc_Jc_403 = model.E_rc_Jc_403;
        self.ruleFormZhiKong.E_rc_Jc_403_new = model.E_rc_Jc_403_new;
        self.ruleFormZhiKong.E_rc_Jc_129_new = model.E_rc_Jc_129_new;
        self.ruleFormZhiKong.E_rc_Jc_132_new = model.E_rc_Jc_132_new;
        self.ruleFormZhiKong.E_rc_Jc_136 = model.E_rc_Jc_136;
        self.ruleFormZhiKong.E_rc_Jc_137 = model.E_rc_Jc_137;
        self.ruleFormZhiKong.E_rc_Jc_138 = model.E_rc_Jc_138;
        self.ruleFormZhiKong.E_rc_Jc_139 = model.E_rc_Jc_139;
        self.ruleFormZhiKong.E_rc_Jc_140 = model.E_rc_Jc_140;
        self.ruleFormZhiKong.E_rc_Jc_140_new = model.E_rc_Jc_140_new;
        self.ruleFormZhiKong.E_rc_Jc_137_new = model.E_rc_Jc_137_new;
        self.ruleFormZhiKong.E_rc_Jc_501_new = model.E_rc_Jc_501_new;
        self.ruleFormZhiKong.E_rc_Jc_501 = model.E_rc_Jc_501;
        self.ruleFormZhiKong.E_rc_Jc_143 = model.E_rc_Jc_143;
        self.ruleFormZhiKong.E_rc_Jc_144 = model.E_rc_Jc_144;
        self.ruleFormZhiKong.E_rc_Jc_145 = model.E_rc_Jc_145;
        self.ruleFormZhiKong.E_rc_Jc_146 = model.E_rc_Jc_146;
        self.ruleFormZhiKong.E_rc_Jc_147 = model.E_rc_Jc_147;
        self.ruleFormZhiKong.E_rc_Jc_352= model.E_rc_Jc_352;
        self.ruleFormZhiKong.E_rc_Jc_353= model.E_rc_Jc_353;
        self.ruleFormZhiKong.E_rc_Jc_400= model.E_rc_Jc_400;
        self.ruleFormZhiKong.E_rc_Jc_4011= model.E_rc_Jc_4011;
        self.ruleFormZhiKong.E_rc_Jc_402= model.E_rc_Jc_402;
        self.ruleFormZhiKong.E_rc_Jc_4033= model.E_rc_Jc_4033;
        self.ruleFormZhiKong.E_rc_Jc_404= model.E_rc_Jc_404;
        self.ruleFormZhiKong.E_rc_Jc_405= model.E_rc_Jc_405;
        self.ruleFormZhiKong.E_rc_Jc_406= model.E_rc_Jc_406;
        self.ruleFormZhiKong.E_rc_Jc_407= model.E_rc_Jc_407;
        self.ruleFormZhiKong.E_rc_Jc_408= model.E_rc_Jc_408;
        self.ruleFormZhiKong.E_rc_Jc_409= model.E_rc_Jc_409;
       
        //仪器型号，仪器编号
        self.ruleFormZhiKong.E_rc_Jc_so2Type= model.E_rc_Jc_so2Type;
        self.ruleFormZhiKong.E_rc_Jc_noXType= model.E_rc_Jc_noXType;
        self.ruleFormZhiKong.E_rc_Jc_coType= model.E_rc_Jc_coType;
        self.ruleFormZhiKong.E_rc_Jc_o3Type= model.E_rc_Jc_o3Type;
        self.ruleFormZhiKong.E_rc_Jc_pm10Type= model.E_rc_Jc_pm10Type;
        self.ruleFormZhiKong.E_rc_Jc_pm25Type= model.E_rc_Jc_pm25Type;             
        self.ruleFormZhiKong.E_rc_Jc_so2Code= model.E_rc_Jc_so2Code;   
        self.ruleFormZhiKong.E_rc_Jc_noXCode= model.E_rc_Jc_noXCode;   
        self.ruleFormZhiKong.E_rc_Jc_coCode= model.E_rc_Jc_coCode;   
        self.ruleFormZhiKong.E_rc_Jc_o3Code= model.E_rc_Jc_o3Code;   
        self.ruleFormZhiKong.E_rc_Jc_pm10Code= model.E_rc_Jc_pm10Code;   
        self.ruleFormZhiKong.E_rc_Jc_pm25Code= model.E_rc_Jc_pm25Code;   
                    }                 
                }
          }).catch(error => {
            console.log(error);
          });
    },  

    //添加检查计划详细
    handleTaskPlanDetialAdd(){
         var self = this;
         self.ruleForm1.ItemId='';  
         self.ruleForm1.TaskCategoryId='';    
         self.ruleForm1.PlanDealTime='';
         self.ruleForm1.ItemRemark='';
          //如果是  查看
         if(self.type == "view"){
           self.$message({
                    message: "查看状态下按钮不可用",
                    type: "warning"  //success,warning,info,error
               });
            return;     
         }
         //已经提交的计划无法
         if(self.ruleForm.Status >= 2){
              self.$message({
                    message: "该计划已提交不能执行此操作！",
                    type: "warning"  //success,warning,info,error
               });
              return;
         }
         //是否允许添加
         if(self.ruleForm.PlanNo=="")
         {
            self.$message({
                    message: "请先保存检查计划后再添加计划详情！",
                    type: "warning"  //success,warning,info,error
               });
            return;        
         }    
         self.dialogVisible=true;
         self.digTitle="新增检查计划明细";
         self.ruleForm1.PlanNo =  self.ruleForm.PlanNo             
    },
    
    //地址解析
    getUrlKey(name) {
      return (
        decodeURIComponent(
          (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
            location.href
          ) || [, ""])[1].replace(/\+/g, "%20")
        ) || null
      );
    },

    //根据状态设置按钮是否显示
    setActionStatus() {    
      var self=this;
      //save 打分确认   submit  第四方确认  aduit  检查结果提交   taskSave 表单保存按钮    formSave任务保存按钮 add特殊问题添加,edit表示特殊问题修改  delete特殊问题删除 reviewModify现场复查
      this.actionStatus.sava=   this.ruleForm.Status==6?true:false;
      this.actionStatus.submit=this.ruleForm.Status==7?true:false;
      this.actionStatus.aduit=(this.ruleForm.Status==2 || this.ruleForm.Status==3)?true:false;
      this.actionStatus.add =(this.ruleForm.Status>=2&&this.ruleForm.Status<6)?true:false;
      this.actionStatus.edit =(this.ruleForm.Status>=2&&this.ruleForm.Status<6)?true:false;
      this.actionStatus.delete =(this.ruleForm.Status>=2&&this.ruleForm.Status<6)?true:false;
      this.actionStatus.modifyFinish = this.ruleForm.Status==6?true:false;
      this.actionStatus.reviewModify =this.ruleForm.Status==7?true:false;
      //表单保存按钮
      this.actionStatus.taskSave = this.ruleForm.Status<=1?true:false;
      //任务保存按钮
      this.actionStatus.formSave = this.ruleForm.Status<=3?true:false;
      //div是否可见
      self.statusInfo = this.ruleForm.Status <=1?false:true;   
      //设置精度条
       if(this.ruleForm.Status==1||this.ruleForm.Status==2)
       {
          self.showStatus=this.ruleForm.Status;
       }
       //为了和app对上
       if(this.ruleForm.Status==3)
       {
          self.showStatus=2;
       }

       if(this.ruleForm.Status==6){
          self.showStatus=3;
       }
       if(this.ruleForm.Status==7){
          self.showStatus=4;
       }
       if(this.ruleForm.Status==8){
          self.showStatus=5;
       }    
    },  
  },

  components: {
    treeSStation,
    rateAuditRecord,
    rateCascader,
    rateJainChaUpload,
    rateSelect,
    rateTable,
    rateUpload
  },
  created() {
  },
  mounted() {
    this.getParam();

  },
};
</script>

<style scoped>
 .stepComponent{
      /* background-color:#DFEBFF; */
      width: 100%-20px;
      padding: 20px 10px 10px 10px;
      margin: 10px 10px 10px 10px;
  }
.stats {
    border-collapse:collapse;       /* 表格相邻边合并*/
    margin-top:25px;
    color:#000;
    margin-left:15px;
    width: 99%;
    }
.stats td {
     border: 1px #000 solid;
}

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  background-color: #f5f5f5;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #c8c8c8;
}
.el-aside {
  color: #333;
}
.el-header {
  height: 0px !important;
}
.el-header .search {
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  text-align: left;
}
.el-header .search .btn {
  position: absolute;
  right: 12px;
  top: 2px;
}
.el-header .tools {
  height: 40px;
  border: 1px solid #ccc;
  background: #f5f5f5;
  line-height: 35px;
  text-align: right;
  padding: 0px 5px;
}
.el-main {
  height: calc(100vh - 336px);
}
.el-cascader .el-cascader--medium {
  width: 100%;
  height: 28px;
  line-height: 28px;
}
.el-date-editor,
.el-input {
  width: 100%;
}
.taskDisplay {
  height: calc(100vh - 50px);
}
.setAbsolute {
  position: absolute;
  width: 100%;
  z-index: 99;
}
.setHeight {
  margin-top: 20px;
}
.tools{height: 40px;border: 1px solid #ccc;background: #F5F5F5;line-height: 35px;text-align: right;padding: 0px 5px;}
</style>


<style>
.uoloadSty .el-upload--picture-card{
  width:145px;
  height:145px;
  line-height:145px;
}
.disUoloadSty .el-upload--picture-card{
  display:none;   /* 上传按钮隐藏 */
}

.deletehide .el-upload-list--picture-card .el-upload-list__item-actions .el-upload-list__item-delete {
    display: none;
    opacity: 0;
}
.xline{
  border: 0px solid #000;
  border-bottom: 1px solid #000;
}

</style>


