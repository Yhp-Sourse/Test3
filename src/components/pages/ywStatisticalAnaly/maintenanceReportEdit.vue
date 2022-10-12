<template>
    <div id="v_deviceOnlineInfo">
        <el-container style="height: calc(100vh - 105px); border: 1px solid #eee">
            <el-container>    

            <el-main>   
             <table class="stats">
                    <tr style="height:80px">
                        <td colspan="9"> <p style="line-height:14.55pt; margin:0pt; orphans:0; text-align:center; widows:0">
                                <span style="font-family:方正小标宋简体; font-size:20pt; letter-spacing:0.05pt">附表</span>
                                <span style="font-family:'Times New Roman'; font-size:20pt; letter-spacing:0.05pt">1 </span>
                                <span style="font-family:方正小标宋简体; font-size:20pt; letter-spacing:0.05pt">湖北省省控站运维绩效考核结果统计表</span>
                            </p>
                        </td>
                    <tr>
                    <tr>
                        <td colspan="2">
                           <label>站点所在地：</label><el-input v-model="ruleForm.CityName" autocomplete="off" :disabled="true"></el-input>
                        </td>                     
                        <td colspan="2">
                           <label>站点名称：</label> <el-input v-model="ruleForm.StationName" autocomplete="off" :disabled="true"></el-input>
                        </td>
                        <td colspan="2">
                          <label>运维公司：</label> <el-input v-model="ruleForm.Company" autocomplete="off" :disabled="true"></el-input>
                        </td>                       
                        
                        <td colspan="3">
                           <label>考核时间：</label> <el-input v-model="ruleForm.AssessTime" autocomplete="off" :disabled="true"></el-input>
                        </td>
                    </tr>
                  <tr>
                      <td colspan="2">
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:宋体; font-size:9pt; letter-spacing:0.05pt">有效数据获取率</span>
                        </p>
                      </td>
                      <td colspan="2" >
                         <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:宋体; font-size:9pt; letter-spacing:0.05pt">内部质控合格率（占70分）</span>
                         </p>
                      </td>
                      <td colspan="2" >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:宋体; font-size:9pt; letter-spacing:0.05pt">运维工作执行情况（占20分）</span>
                        </p>
                       </td>
                      <td colspan="2" >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:宋体; font-size:9pt; letter-spacing:0.05pt">市级质控考核情况（占10分）</span>
                        </p>
                      </td>
                      <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:宋体; font-size:9pt; letter-spacing:0.05pt">省站质控检查情况</span>
                        </p>
                       </td>
                </tr>

                <tr>
                    <td>
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:9pt; letter-spacing:0.05pt">PM10监测仪数据捕获率</span>
                        </p>
                    </td>
                    <td>                    
                            <span style="font-family:'Times New Roman'; font-size:9pt">
                                 <el-input v-model="ruleForm.Valid_PM10Capture" width="60px" :disabled="true"></el-input>
                            </span>                     
                    </td>
                    <td>
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:9pt; letter-spacing:0.05pt">PM10监测仪校零、校跨、流量检查合格率</span>
                        </p>
                    </td>
                    <td>                     
                            <span style="font-family:'Times New Roman'; font-size:10pt">
                                <el-input v-model="ruleForm.Inside_PM10Qualified" autocomplete="off" :disabled="true"></el-input>
                            </span>                      
                    </td>
                    <td>
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:宋体; font-size:9pt; letter-spacing:0.05pt">日常运维任务完成情况（占5分）</span>
                        </p>
                    </td>
                    <td>
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                             <el-input v-model="ruleForm.Operational_TaskStatus" autocomplete="off"></el-input>
                        </p>
                    </td>
                    <td>
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:宋体; font-size:9pt; letter-spacing:0.05pt">日常例行检查结果（占5分）</span>
                        </p>
                    </td>
                    <td>
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <el-input v-model="ruleForm.City_Routine" autocomplete="off"></el-input>
                        </p>
                    </td>
                    <td>
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <el-input  autocomplete="off" :disabled="true"></el-input>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:9pt; letter-spacing:0.05pt">PM2.5监测仪数据捕获率</span>
                        </p>
                    </td>
                    <td >                     
                            <span style="font-family:'Times New Roman'; font-size:9pt">
                                <el-input v-model="ruleForm.Valid_PM25Capture" autocomplete="off" :disabled="true"></el-input>
                            </span>                      
                    </td>
                    <td>
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:9pt; letter-spacing:0.05pt">PM2.5监测仪校零、校跨、流量检查合格率</span>
                        </p>
                    </td>
                    <td >                     
                            <span style="font-family:'Times New Roman'; font-size:10pt">
                                <el-input v-model="ruleForm.Inside_PM25Qualified" autocomplete="off" :disabled="true"></el-input>
                            </span>                     
                    </td>
                    <td>
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:宋体; font-size:9pt; letter-spacing:0.05pt">异常处理情况（占5分）</span>
                        </p>
                    </td>
                    <td>
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <el-input v-model="ruleForm.Operational_Anomaly" autocomplete="off"></el-input>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:宋体; font-size:9pt; letter-spacing:0.05pt">问题整改情况（占2分）</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                             <el-input v-model="ruleForm.City_Corrective" autocomplete="off"></el-input>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                             <el-input  autocomplete="off" :disabled="true"></el-input>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:9pt; letter-spacing:0.05pt">SO2监测仪数据捕获率</span>
                        </p>
                    </td>
                    <td >                      
                            <span style="font-family:'Times New Roman'; font-size:9pt">
                                <el-input v-model="ruleForm.Valid_SO2Capture" autocomplete="off" :disabled="true"></el-input>
                            </span>                       
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:9pt; letter-spacing:0.05pt">SO2监测仪校零、校跨、流量检查合格率</span>
                        </p>
                    </td>
                    <td >                       
                            <span style="font-family:'Times New Roman'; font-size:10pt">
                                 <el-input v-model="ruleForm.Inside_SO2Qualified" autocomplete="off" :disabled="true"></el-input>
                            </span>                      
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:宋体; font-size:9pt; letter-spacing:0.05pt">数据审核（占5分）</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                             <el-input v-model="ruleForm.Operational_Inspection" autocomplete="off"></el-input>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:宋体; font-size:9pt; letter-spacing:0.05pt">专项检查结果（占3分）</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                             <el-input v-model="ruleForm.City_Special" autocomplete="off"></el-input>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <!--<input type="text" name="title" required lay-verify="required" autocomplete="off" class="layui-input hide shows">-->
                            <el-input  autocomplete="off" :disabled="true"></el-input>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:9pt; letter-spacing:0.05pt">NO监测仪数据捕获率</span>
                        </p>
                    </td>
                    <td >                  
                            <span style="font-family:'Times New Roman'; font-size:9pt">
                                <el-input v-model="ruleForm.Valid_NOCapture" autocomplete="off" :disabled="true"></el-input>
                            </span>                      
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:9pt; letter-spacing:0.05pt">NO监测仪校零、校跨、流量检查合格率</span>
                        </p>
                    </td>
                    <td >                   
                            <span style="font-family:'Times New Roman'; font-size:10pt">
                                <el-input v-model="ruleForm.Inside_NOQualified" autocomplete="off" :disabled="true"></el-input>
                            </span>                       
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:宋体; font-size:9pt; letter-spacing:0.05pt">工作效性和其它（占5分）</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                              <el-input v-model="ruleForm.Operational_Work" autocomplete="off"></el-input>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:10pt">&nbsp;</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:10pt">&nbsp;</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                             <el-input  autocomplete="off" :disabled="true"></el-input>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:9pt; letter-spacing:0.05pt">CO监测仪数据捕获率</span>
                        </p>
                    </td>
                    <td >                    
                            <span style="font-family:'Times New Roman'; font-size:9pt">
                                 <el-input v-model="ruleForm.Valid_COCapture" autocomplete="off" :disabled="true"></el-input>
                            </span>                       
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt 4.2pt 1.7pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:9pt; letter-spacing:0.05pt">CO监测仪校零、校跨、流量检查合格率</span>
                        </p>
                    </td>
                    <td >                       
                            <span style="font-family:'Times New Roman'; font-size:10pt">
                                 <el-input v-model="ruleForm.Inside_COQualified" autocomplete="off" :disabled="true"></el-input>
                            </span>                      
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:宋体; font-size:9pt; letter-spacing:0.05pt">其它扣分或处置条件</span>
                        </p>
                    </td>
                    <td >                   
                            <span style="font-family:'Times New Roman'; font-size:10pt">
                                <el-input v-model="ruleForm.Operational_Other" autocomplete="off" :disabled="true"></el-input>
                            </span>                       
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:10pt">&nbsp;</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:10pt">&nbsp;</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                             <el-input  autocomplete="off" :disabled="true"></el-input>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:9pt; letter-spacing:0.05pt">O3监测仪数据捕获率</span>
                        </p>
                    </td>
                    <td >                     
                            <span style="font-family:'Times New Roman'; font-size:9pt">
                                 <el-input v-model="ruleForm.Valid_O3Capture" autocomplete="off" :disabled="true"></el-input>
                            </span>                      
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:9pt; letter-spacing:0.05pt">O3监测仪校零、校跨、流量检查合格率</span>
                        </p>
                    </td>
                    <td >                       
                            <span style="font-family:'Times New Roman'; font-size:10pt; font-weight:normal">
                                <el-input v-model="ruleForm.Inside_O3Qualified" autocomplete="off" :disabled="true"></el-input>
                            </span>                      
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:10pt">&nbsp;</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:10pt">&nbsp;</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:10pt">&nbsp;</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:10pt">&nbsp;</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <el-input  autocomplete="off" :disabled="true"></el-input>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:宋体; font-size:9pt; letter-spacing:0.05pt">最低的单台监测仪数据捕获率</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <el-input v-model="ruleForm.Valid_LowestCapture" autocomplete="off" :disabled="true"></el-input>
                        </p>
                      
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:宋体; font-size:9pt; letter-spacing:0.05pt">站点质控合格率</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center;  widows:0">
                            <el-input v-model="ruleForm.Inside_StationQualified" autocomplete="off" :disabled="true"></el-input>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:10pt">&nbsp;</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:10pt">&nbsp;</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:10pt">&nbsp;</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:10pt">&nbsp;</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                             <el-input autocomplete="off" :disabled="true"></el-input>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:宋体; font-size:9pt; letter-spacing:0.05pt">站点有效数据获取率</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                             <el-input v-model="ruleForm.Valid_Capture" autocomplete="off" :disabled="true"></el-input>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:宋体; font-size:9pt; letter-spacing:0.05pt">零气和动态校准仪质控合格率</span>
                        </p>
                    </td>
                    <td >
                       <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <el-input v-model="ruleForm.Inside_ZeroQualified" autocomplete="off" :disabled="true"></el-input>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:10pt">&nbsp;</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:10pt">&nbsp;</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:10pt">&nbsp;</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:10pt">&nbsp;</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                             <el-input  autocomplete="off" :disabled="true"></el-input>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:10pt">&nbsp;</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:right; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:10pt">&nbsp;</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:宋体; font-size:9pt; letter-spacing:0.05pt">其它扣分或处置条件</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                             <el-input v-model="ruleForm.Inside_DisposeQualified" autocomplete="off" :disabled="true"></el-input>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:10pt">&nbsp;</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:10pt">&nbsp;</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:10pt">&nbsp;</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:'Times New Roman'; font-size:10pt">&nbsp;</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <el-input autocomplete="off" :disabled="true"></el-input>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:宋体; font-size:9pt; letter-spacing:0.05pt">数据获取率是否≥90%</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                             <el-input v-model="ruleForm.Valid_SurpassCapture" autocomplete="off" :disabled="true"></el-input>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:宋体; font-size:9pt; letter-spacing:0.05pt">内部质控合格率考核得分</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <el-input v-model="ruleForm.Inside_ScoreQualified" autocomplete="off" :disabled="true"></el-input>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:宋体; font-size:9pt; letter-spacing:0.05pt">运维工作执行情况考核得分</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                             <el-input v-model="ruleForm.Operational_Scores" autocomplete="off"></el-input>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                            <span style="font-family:宋体; font-size:9pt; letter-spacing:0.05pt">市级工作执行情况考核得分</span>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                             <el-input v-model="ruleForm.City_Scores" autocomplete="off"></el-input>
                        </p>
                    </td>
                    <td >
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:center; widows:0">
                             <el-input  autocomplete="off" :disabled="true"></el-input>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td colspan="3" style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:top; width:222.7pt">
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:justify; widows:0">
                            <span style="font-family:宋体; font-size:9pt; font-weight:bold; letter-spacing:0.05pt">站点考核总分=合格率得分+运维得分+市站质控考核得分-省站质控检查扣分</span>
                        </p>
                    </td>
                    <td colspan="6" style="border-bottom-color:#000000; border-bottom-style:solid; border-bottom-width:0.75pt; border-left-color:#000000; border-left-style:solid; border-left-width:0.75pt; border-right-color:#000000; border-right-style:solid; border-right-width:0.75pt; border-top-color:#000000; border-top-style:solid; border-top-width:0.75pt; padding-left:5.03pt; padding-right:5.03pt; vertical-align:top; width:464.4pt">
                        <p style="margin:4.2pt 0pt; orphans:0; text-align:justify; widows:0">
                            <el-input v-model="ruleForm.Assessment_Score" autocomplete="off"></el-input>
                        </p>
                    </td>
                </tr>
                <!--<tr style="height:0pt">
                    <td style="width:78.7pt; border:none"></td>
                    <td style="width:68.45pt; border:none"></td>
                    <td style="width:86.35pt; border:none"></td>
                    <td style="width:68.9pt; border:none"></td>
                    <td style="width:91.4pt; border:none"></td>
                    <td style="width:75.25pt; border:none"></td>
                    <td style="width:77.95pt; border:none"></td>
                    <td style="width:75.25pt; border:none"></td>
                    <td style="width:86.45pt; border:none"></td>
                </tr>-->
             </table>  


            <div style="margin:10px auto; orphans:0;text-indent:10.5pt; width:945px;">
               <p style="line-height:14.55pt; margin:0pt; orphans:0; text-align:center; widows:0">
                 <el-button type="primary" @click="saveReport()">提交</el-button>
               </p>
            </div>
            </el-main>

            </el-container>
        </el-container>

        




    </div>
</template>
<script>

export default {
    name:'v_deviceOnlineInfo',
    data() {
      return {          
        //绑定下拉框信息 
      
        id:'',
        obj:{},
     
        //弹出窗相关变量定义
        ruleForm: {
         Id:'',
         CityName:'',
         StationName:'',
         Company:'',
         AssessTime:'',

         Valid_SurpassCapture: '',
         Valid_PM10Capture:'',
         Valid_PM25Capture:'',
         Valid_SO2Capture:'',
         Valid_NOCapture:'',
         Valid_COCapture:'',
         Valid_O3Capture:'',
         Valid_LowestCapture:'',
         Valid_Capture:'',
         
         Inside_PM10Qualified:'',
         Inside_SO2Qualified:'',
         Inside_NOQualified:'',
         Inside_COQualified:'',
         Inside_O3Qualified:'',
         Inside_PM25Qualified:'',
         Inside_StationQualified:'',
         Inside_ZeroQualified:'',
         Inside_ScoreQualified:'',

         Operational_TaskStatus:'',
         Operational_Inspection:'',
         Operational_Anomaly:'',
         Operational_Scores:'',
         Operational_Work:'',
         Operational_Other:'',

         City_Scores:'',
         City_Routine:'',
         City_Special:'',
         City_Corrective:'',
         Assessment_Score:'',
        },

        rules: {
                           
        },
      } 
    },

    methods:{     
      
        //页面提交(保存或者修改)
        saveReport() {
            var self = this;
            this.obj.Id = self.ruleForm.Id;
            this.obj.CityName=self.ruleForm.CityName;
            this.obj.StationName=self.ruleForm.StationName;
            this.obj.Company=self.ruleForm.Company;
            this.obj.AssessTime=self.ruleForm.AssessTime;

            this.obj.Valid_PM10Capture = self.ruleForm.Valid_PM10Capture;
            this.obj.Valid_PM25Capture = self.ruleForm.Valid_PM25Capture;
            this.obj.Valid_SO2Capture =  self.ruleForm.Valid_SO2Capture;
            this.obj.Valid_NOCapture = self.ruleForm.Valid_NOCapture;
            this.obj.Valid_COCapture = self.ruleForm.Valid_COCapture;
            this.obj.Valid_O3Capture =  self.ruleForm.Valid_O3Capture;
            this.obj.Valid_LowestCapture = self.ruleForm.Valid_LowestCapture;
            this.obj.Valid_Capture = self.ruleForm.Valid_Capture;

            this.obj.Inside_PM10Qualified =  self.ruleForm.Inside_PM10Qualified;
            this.obj.Inside_SO2Qualified =  self.ruleForm.Inside_SO2Qualified;
            this.obj.Inside_NOQualified =   self.ruleForm.Inside_NOQualified;
            this.obj.Inside_COQualified =   self.ruleForm.Inside_COQualified;           
            this.obj.Inside_O3Qualified =   self.ruleForm.Inside_O3Qualified;
            this.obj.Inside_PM25Qualified = self.ruleForm.Inside_PM25Qualified;
            this.obj.Inside_StationQualified =  self.ruleForm.Inside_StationQualified;             
            this.obj.Inside_ZeroQualified =  self.ruleForm.Inside_ZeroQualified;
            this.obj.Inside_DisposeQualified = self.ruleForm.Inside_DisposeQualified;
            this.obj.Inside_ScoreQualified = self.ruleForm.Inside_ScoreQualified;
            
            this.obj.Operational_TaskStatus = self.ruleForm.Operational_TaskStatus;
            this.obj.Operational_Inspection =  self.ruleForm.Operational_Inspection;             
            this.obj.Operational_Anomaly =  self.ruleForm.Operational_Anomaly;
            this.obj.Operational_Scores =  self.ruleForm.Operational_Scores;
            this.obj.Operational_Work = self.ruleForm.Operational_Work;
            this.obj.Operational_Other = self.ruleForm.Operational_Other;

            this.obj.City_Scores =  self.ruleForm.City_Scores;           
            this.obj.City_Routine =  self.ruleForm.City_Routine;
            this.obj.City_Special =  self.ruleForm.City_Special;
            this.obj.City_Corrective = self.ruleForm.City_Corrective;
            this.obj.Assessment_Score = self.ruleForm.Assessment_Score;                  
            //对对象进行加密
            const Qs = require('qs');
            this.$http({
                headers: {
                            'deviceCode': 'A95ZEF1-47B5-AC90BF3'
                        },
                        method: 'post',
                        url: this.api+'/api/MaintenanceReport/MaintenanceReportSubmit'  ,
                        data:Qs.stringify(this.obj) 
            }).then(res => {
                if(res.status==200){
                     self.getList();
                     self.$message({
                                message: res.data.message,
                                type: res.data.type  //warning,success,info,error
                     });
                }
          }).catch(error => {
            console.log(error);
          });
            
        },
        
        getparm() {
            var self = this;
            const data = self.getUrlKey("obj");
            self.ruleForm.Id = JSON.parse(data).id;
        },

        getUrlKey(name) {
           return (
              decodeURIComponent(
               (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
               location.href
              ) || [, ""])[1].replace(/\+/g, "%20")
            ) || null
          );
        },
        
        filterDate(t) {
            const date = new Date(t);
            const y = date.getFullYear();
            const M = (date.getMonth() + 1).toString().padStart(2, 0);
            const d = date.getDate().toString().padStart(2, 0);
            const h = date.getHours().toString().padStart(2, 0);
            const mm = date.getMinutes().toString().padStart(2, 0);
            const s = date.getSeconds().toString().padStart(2, 0);
            return y + '-' + M;
        },

        //查询
        getList(obj){     
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/MaintenanceReport/GetMaintenanceReportById?Id='+self.ruleForm.Id
            }).then(res => {
                if(res.status==200){
                    //成功后复制
                    self.ruleForm.CityName=res.data.data.cityName;
                    self.ruleForm.StationName=res.data.data.stationName;
                    self.ruleForm.Company=res.data.data.company;
                    self.ruleForm.AssessTime=self.filterDate(res.data.data.assessTime);
                
                    self.ruleForm.Valid_SurpassCapture= (res.data.data.valid_SurpassCapture>0||res.data.data.valid_SurpassCapture!=null)?"是":"否";
                    self.ruleForm.Valid_PM10Capture=res.data.data.valid_PM10Capture;
                    self.ruleForm.Valid_PM25Capture=res.data.data.valid_PM25Capture;
                    self.ruleForm.Valid_SO2Capture=res.data.data.valid_SO2Capture;
                    self.ruleForm.Valid_NOCapture=res.data.data.valid_NOCapture;
                    self.ruleForm.Valid_COCapture=res.data.data.valid_COCapture;
                    self.ruleForm.Valid_O3Capture=res.data.data.valid_O3Capture;
                    self.ruleForm.Valid_LowestCapture=res.data.data.valid_LowestCapture;
                    self.ruleForm.Valid_Capture=res.data.data.valid_Capture;

                    self.ruleForm.Inside_PM10Qualified=res.data.data.inside_PM10Qualified;
                    self.ruleForm.Inside_SO2Qualified=res.data.data.inside_SO2Qualified;
                    self.ruleForm.Inside_NOQualified=res.data.data.inside_NOQualified;
                    self.ruleForm.Inside_COQualified=res.data.data.inside_COQualified;                   
                    self.ruleForm.Inside_O3Qualified=res.data.data.inside_O3Qualified;
                    self.ruleForm.Inside_PM25Qualified=res.data.data.inside_PM25Qualified;
                    self.ruleForm.Inside_StationQualified=res.data.data.inside_StationQualified;                   
                    self.ruleForm.Inside_ZeroQualified=res.data.data.inside_ZeroQualified;
                    self.ruleForm.Inside_DisposeQualified=res.data.data.inside_DisposeQualified;
                    self.ruleForm.Inside_ScoreQualified=res.data.data.inside_ScoreQualified;
                     
                    self.ruleForm.Operational_TaskStatus=res.data.data.operational_TaskStatus;
                    self.ruleForm.Operational_Inspection=res.data.data.operational_Inspection;                   
                    self.ruleForm.Operational_Anomaly=res.data.data.operational_Anomaly;
                    self.ruleForm.Operational_Scores=res.data.data.operational_Scores;
                    self.ruleForm.Operational_Work=res.data.data.operational_Work;
                    self.ruleForm.Operational_Other=res.data.data.operational_Other;

                    self.ruleForm.City_Scores=res.data.data.city_Scores;                   
                    self.ruleForm.City_Routine=res.data.data.city_Routine;
                    self.ruleForm.City_Special=res.data.data.city_Special;
                    self.ruleForm.City_Corrective=res.data.data.city_Corrective;
                    self.ruleForm.Assessment_Score=res.data.data.assessment_Score;
                }
          }).catch(error => {
            console.log(error);
          });
        }, 
          
    },
    components:{
        
    },
    created(){
        //调用获取列表页的方法
    },
    mounted() {
        this.getparm();
        this.getList();//调用获取列表页的方法
    },
}
</script>
<style scoped>
#v_deviceOnlineInfo{color:black;}

.stats {
    border-collapse:collapse;       /* 表格相邻边合并*/
    margin-top:25px;
    color:#000;
    margin-left:15px;
    }
.stats td {
               border: 1px #000 solid;

               }

::-webkit-scrollbar{width: 7px;height: 7px;background-color: #F5F5F5;}
  /*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);border-radius: 10px;background-color: #F5F5F5;}
  /*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb{border-radius: 10px;box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);background-color: #c8c8c8;}
.el-aside {color: #333;}
.el-header{height: 100px !important;}
.el-header .search{box-sizing: border-box;border-bottom: 1px solid #eee;text-align: left;}
.el-header .search .btn{position: absolute;right: 12px;top: 2px;}
.el-header .tools{height: 40px;border: 1px solid #ccc;background: #F5F5F5;line-height: 35px;text-align: right;padding: 0px 5px;}
.el-main{height: calc(100vh - 0px); padding: 0px 10px;}
.el-select{width:100%;}
/* .el-footer {height: 50px;text-align: left;}
.el-footer .el-pagination{margin: 14px 0;} */

</style>