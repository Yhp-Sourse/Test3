<template>
    <el-tabs type="border-card">
        <el-tab-pane>
            <span slot="label">备机信息<i @click="XSJToggel" :class="XiaoSanJiaoStyle"></i></span>
            <el-container v-if='isChage' style="height: calc(100vh - 145px); border: 1px solid #eee">
                    <el-aside width="250px">
                        <treeSStation @checkedNodes="getSearchStations"></treeSStation>
                    </el-aside>
                    
                    <el-container>
                        <el-header>
                            <div class="search">
                                <el-form :inline="true" class="demo-form-inline" size="mini">
                                    <el-form-item label="变更类型：">
                                        <rate-select
                                            v-model="rateCTSelect.model"
                                            :url='rateCTSelect.selectUrl'
                                            :urlParams="rateCTSelect.urlParams"
                                            :multiple="false"
                                            placeholder="全部"
                                            :optionKeys="rateCTSelect.optionKeys"
                                            :showLabels="rateCTSelect.showLabels"
                                            :disables="rateCTSelect.disables"
                                            @change="selectChange"
                                        >
                                        </rate-select>
                                    </el-form-item>
                                    <el-form-item label="未下架30天：">
                                        <el-select  v-model="queryparam.WXJ30Day" clearable placeholder="全部">
                                            <el-option
                                            v-for="item in YQ30DayStatu"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="更换时间：">
                                        <el-date-picker
                                            v-model="queryparam.StartTime"
                                            type="date"
                                            placeholder="选择日期"
                                            format="yyyy 年 MM 月 dd 日"
                                            value-format="yyyy-MM-dd"
                                            align="right"
                                        >
                                        </el-date-picker>
                                    </el-form-item>
                                    <el-form-item label="-">
                                        <el-date-picker
                                            v-model="queryparam.EndTime"
                                            type="date"
                                            placeholder="选择日期"
                                            format="yyyy 年 MM 月 dd 日"
                                            value-format="yyyy-MM-dd"
                                            align="right"
                                        >
                                        </el-date-picker>
                                    </el-form-item>
                                    <el-form-item label="仪器状态：">
                                        <rate-select
                                            v-model="rateDevSelect.model"
                                            :url='rateDevSelect.selectUrl'
                                            :urlParams="rateDevSelect.urlParams"
                                            :multiple="false"
                                            placeholder="全部"
                                            :optionKeys="rateDevSelect.optionKeys"
                                            :showLabels="rateDevSelect.showLabels"
                                            :disables="rateDevSelect.disables"
                                            @change="selectChange"
                                        >
                                        </rate-select>
                                    </el-form-item>
                                    <el-form-item class="btn">
                                        <el-button size="small" v-has="'DevUseRecord_handleSearch'" type="primary" icon="el-icon-search"  @click="getList();">查询</el-button>
                                        <el-button type="primary"  icon="el-icon-download"   @click="downloadExange();">导出</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                            <div class="tools">
                                <el-button size="small" class=" el-button--iconButton" icon="el-icon-plus" style="text-overflow: initial;" v-has="'DevUseRecord_handleAdd'" @click="handleAdd">添加</el-button>
                                <el-button size="small" class=" el-button--iconButton" icon="el-icon-delete" style="text-overflow: initial;" v-has="'DevUseRecord_handleMultiplDel'" @click="handleMultiplDel">删除</el-button>
                            </div>
                        </el-header>
                    
                        <el-main>
                            <rate-table :list="list"
                                @handleSelectionChange="handleSelectionChange"
                                @sizeChange="getSizeChange"
                                @currentPage="getCurrentPage"
                                :options="options"
                                :columns="columns"
                                :operates="operates"
                                :pageShow="page.pageShow"
                                :total="page.total"
                            ></rate-table>
                        </el-main>
                    </el-container>
            </el-container>
            <el-container v-if='!isChage' style="height: calc(100vh - 145px); border: 1px solid #eee">
               <div style="overflow:auto;"> <deviceSparePartInfo /></div>
            </el-container>
            <el-dialog
                    title="设备使用"
                    :visible.sync="dialogDevUseRecordeVisible"
                    width="50%">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="mini">
                    <el-row>
                        <el-col :span="12">
                            <el-form-item v-show="false" label="" prop="Id">
                                <el-input v-model="ruleForm.Id" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="变更类型" prop="ChangeType">
                                <rate-select
                                    v-model="rateCTSelect.model"
                                    :url='rateCTSelect.selectUrl'
                                    :urlParams="rateCTSelect.urlParams"
                                    :multiple="false"
                                    placeholder="全部"
                                    :optionKeys="rateCTSelect.optionKeys"
                                    :showLabels="rateCTSelect.showLabels"
                                    :disables="rateCTSelect.disables"
                                    @change="selectChange"
                                ></rate-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="站点名称：" prop="SStation">
                                <rateCascader :selectOption='ruleForm.SStation' @selectOptionEvent="selectOptionEvent"></rateCascader>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="参数：" prop="Param">
                                <rate-select
                                    v-model="rateYSBSelect.model"
                                    :url='rateYSBSelect.selectUrl'
                                    :urlParams="rateYSBSelect.urlParams"
                                    :multiple="false"
                                    placeholder="全部"
                                    :optionKeys="rateYSBSelect.optionKeys"
                                    :showLabels="rateYSBSelect.showLabels"
                                    :disables="rateYSBSelect.disables"
                                    @change="selectChange"
                                ></rate-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="设备型号：" prop="OriginDType">
                                <el-input v-model="ruleForm.OriginDType" autocomplete="off"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row v-if='ruleForm.ChangeType!="7"'>
                        <el-col :span="6">
                            <el-form-item label="备机库：" prop="PartCity">
                                <rate-select
                                    v-model="rateBJKSelect.model"
                                    :url='rateBJKSelect.selectUrl'
                                    :urlParams="rateBJKSelect.urlParams"
                                    :multiple="false"
                                    placeholder="全部"
                                    :optionKeys="rateBJKSelect.optionKeys"
                                    :showLabels="rateBJKSelect.showLabels"
                                    :disables="rateBJKSelect.disables"
                                    @change="selectChange"
                                ></rate-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="设备厂家：" prop="NewDF">
                                <rate-select
                                    v-model="rateFacSelect.model"
                                    :url='rateFacSelect.selectUrl'
                                    :urlParams="rateFacSelect.urlParams"
                                    :multiple="false"
                                    placeholder="全部"
                                    :optionKeys="rateFacSelect.optionKeys"
                                    :showLabels="rateFacSelect.showLabels"
                                    :disables="rateFacSelect.disables"
                                    @change="FacChange"
                                ></rate-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="设备名称" prop="NewDName">
                                <rate-select
                                    v-model="rateSPSelect.model"
                                    :url='rateSPSelect.selectUrl'
                                    :urlParams="rateSPSelect.urlParams"
                                    :multiple="false"
                                    placeholder="全部"
                                    :optionKeys="rateSPSelect.optionKeys"
                                    :showLabels="rateSPSelect.showLabels"
                                    :disables="rateSPSelect.disables"
                                    @change="spChange"
                                ></rate-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="设备型号：" prop="NewDType">
                                <el-input v-model="ruleForm.NewDType" autocomplete="off"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row v-if='ruleForm.ChangeType=="7"'>
                        <el-col :span="12">
                            <el-form-item label="临时设备：" prop="FacId">
                                <rate-select
                                    v-model="rateFacSelect.model"
                                    :url='rateFacSelect.selectUrl'
                                    :urlParams="rateFacSelect.urlParams"
                                    :multiple="false"
                                    placeholder="全部"
                                    :optionKeys="rateFacSelect.optionKeys"
                                    :showLabels="rateFacSelect.showLabels"
                                    :disables="rateFacSelect.disables"
                                    @change="FacChange"
                                ></rate-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="设备型号：" prop="NewDName">
                                <el-input v-model="ruleForm.NewDName" autocomplete="off"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                        <div>
                            <el-form-item label="维修人员:" prop="LYR">
                                <el-input v-model="ruleForm.WXR" autocomplete="off"></el-input>
                            </el-form-item>
                    
                        </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="更换日期" prop="ChangeTime">
                                <el-date-picker
                                    v-model="ruleForm.ChangeTime"
                                    type="date"
                                    placeholder="选择日期"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy-MM-dd"
                                    align="right"
                                >
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="新设备编号" prop="NewdevId">
                                <el-input v-model="ruleForm.NewdevId" autocomplete="off"></el-input>
                            </el-form-item>
                        </el-col>
                        
                    </el-row>

                    <el-row>
                        <el-col :span="12">
                            <div> 
                            <el-form-item v-show="true" label="附件：" prop="Id">
                                    <rateUpload :limit='1' :Ismultiple='false' :BusinessId='ruleForm.Id' :BusinessType='4' @uploadSuccess='uploadSuccess'></rateUpload>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div> 
                                <el-form-item label="备注：" prop="ChangeReason">
                                    <el-input type="textarea" :rows="9" v-model="ruleForm.ChangeReason" autocomplete="off"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="9">&nbsp;</el-col>
                        <el-col :span="6">
                            <div> 
                            <el-form-item>
                                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="9">&nbsp;</el-col>
                    </el-row>
                    
                </el-form>
            </el-dialog>

            <el-dialog
                    title="延期使用申请"
                    :visible.sync="delayDialog"
                    width="50%">
                    <el-form :model="delayruleForm" status-icon :rules="rules" ref="delayruleForm" label-width="100px" class="demo-ruleForm" size="mini">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item v-show="true" label="延期附件：" prop="DelayFileName">
                                    <rateUpload :limit='1' :Ismultiple='false' :BusinessId='ruleForm.Id' :BusinessType='5' @uploadSuccess='uploadDelaySuccess'></rateUpload>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="延期备注：" prop="DelayRemark">
                                    <el-input type="textarea" :rows="9" v-model="delayruleForm.DelayRemark" autocomplete="off"></el-input>
                                </el-form-item>
                            </el-col>
                            </el-row>
                        <el-row>
                            <el-col :span="9">&nbsp;</el-col>
                            <el-col :span="6">
                                <el-form-item>
                                        <el-button type="primary" @click="Delay()">提交</el-button>
                                </el-form-item>
                            </el-col>
                            <el-col :span="9">&nbsp;</el-col>
                        </el-row>
                    </el-form>
            </el-dialog>

        </el-tab-pane>
        
        <el-tab-pane v-show="false" label="维修记录">
            <el-container style="height: calc(100vh - 145px); border: 1px solid #eee">
                    <el-aside width="250px">
                       <treeSStation @checkedNodes="getSearchStations1"></treeSStation>
                    </el-aside>
                   
                    <el-container>
                        <el-header>
                            <div class="search">
                                <el-form :inline="true" class="demo-form-inline" size="mini">
                                    <el-form-item label="名称：">
                                       <el-input v-model="queryparam_Repair.Main_Model" autocomplete="off"></el-input>
                                    </el-form-item>
                                    <el-form-item label="监测参数："  label-width="120px" prop="variety">
                                        <el-select
                                            v-model="queryparam_Repair.Main_Param"
                                            placeholder="请选择"
                                            style="width: 100%;"
                                            >
                                            <el-option
                                            v-for="(item, index) in SixParams"
                                            :key="index"
                                            :label="item.label"
                                            :value="item.value"
                                            ></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="开始日期：">
                                        <el-date-picker
                                            v-model="queryparam_Repair.startDate"
                                            type="date"
                                            :clearable=false
                                            value-format="yyyy-MM-dd"
                                            placeholder="选择日期时间"
                                            align="right"
                                        >
                                        </el-date-picker>
                                    </el-form-item>
                                     <el-form-item label="-">
                                         <el-date-picker
                                            v-model="queryparam_Repair.endDate"
                                            type="date"
                                            :clearable=false
                                            value-format="yyyy-MM-dd"
                                            placeholder="选择日期时间"
                                            align="right"
                                        >
                                        </el-date-picker>
                                    </el-form-item>
                                    <el-form-item class="btn">
                                        <el-button size="small" v-has="'DevUseRecord_handleSearch'"  icon="el-icon-search" type="primary" @click="getList_Repair();">查询</el-button>
                                        <el-button type="primary"  icon="el-icon-download"   @click="downloadWeixiu();">导出</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                           <div class="tools">
                               <el-button size="small" class=" el-button--iconButton" icon="el-icon-plus" style="text-overflow: initial;" v-has="'DevUseRecord_handleAdd'" @click="handleAdd_Repair">添加</el-button>
                               <!-- <el-button size="small" class=" el-button--iconButton" icon="el-icon-delete" style="text-overflow: initial;" v-has="'DevUseRecord_handleMultiplDel'" @click="handleMultiplDel_Repair">删除</el-button> -->
                            </div>
                        </el-header>
                        
                        <el-main>
                            <rate-table :list="list_Repair"
                               @handleSelectionChange="handleSelectionChange_Repair"
                               @sizeChange="getSizeChange_Repair"
                               @currentPage="getCurrentPage_Repair"
                               :options="options_Repair"
                               :columns="columns_Repair"
                               :operates="operates_Repair"
                               :pageShow="page_Repair.pageShow"
                               :total="page_Repair.total"
                            ></rate-table>
                        </el-main>
                    </el-container>
            </el-container>     

            <el-dialog
                    title="设备维修记录"
                    :visible.sync="dialog_Repair"
                    width="50%">
                    <el-form :model="ruleForm_Repair" status-icon :rules="rules_Repair" ref="ruleForm_Repair" label-width="100px" class="demo-ruleForm" size="mini">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item v-show="false" label="" prop="Id">
                                    <el-input v-model="ruleForm_Repair.Id" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="维修类型" prop="RepairType">
                                    <rate-select
                                        v-model="rateWXSelect.model"
                                        :url='rateWXSelect.selectUrl'
                                        :urlParams="rateWXSelect.urlParams"
                                        :multiple="false"
                                        placeholder="全部"
                                        :optionKeys="rateWXSelect.optionKeys"
                                        :showLabels="rateWXSelect.showLabels"
                                        :disables="rateWXSelect.disables"
                                        @change="selectChange"
                                    ></rate-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="站点名称：" prop="SStation">
                                    <rateCascader :selectOption='ruleForm_Repair.SStation' @selectOptionEvent="selectOptionEvent_Repair"></rateCascader>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="监测参数：" prop="Main_Param">
                                    <rate-select
                                        v-model="rateYSBSelect.model"
                                        :url='rateYSBSelect.selectUrl'
                                        :urlParams="rateYSBSelect.urlParams"
                                        :multiple="false"
                                        placeholder="全部"
                                        :optionKeys="rateYSBSelect.optionKeys"
                                        :showLabels="rateYSBSelect.showLabels"
                                        :disables="rateYSBSelect.disables"
                                        @change="selectChange_Repair"
                                    ></rate-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="设备型号：" prop="Main_Model">
                                    <el-input v-model="ruleForm_Repair.Main_Model" autocomplete="off"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="设备厂家" prop="Back_FactId">
                                    <el-select v-model="ruleForm_Repair.Back_FactId" clearable placeholder="请选择">
                                        <el-option
                                        v-for="item in DeviceFac"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="设备信息" prop="Back_DType">
                                    <el-select v-model="ruleForm_Repair.Back_DType" clearable placeholder="请选择">
                                        <el-option
                                        v-for="item in Device"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="故障时间：" prop="FailureTime">
                                    <el-date-picker
                                        v-model="ruleForm_Repair.FailureTime"
                                        type="datetime"
                                        placeholder="选择开始时间"
                                        align="right"
                                    >
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="故障时间：" prop="FailureTime">
                                    <el-date-picker
                                        v-model="ruleForm_Repair.FailureEndTime"
                                        type="datetime"
                                        placeholder="选择结束时间"
                                        align="right"
                                    >
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="故障现象：" prop="FailurePhenomenon">
                                    <el-input v-model="ruleForm_Repair.FailurePhenomenon" autocomplete="off"></el-input>
                                </el-form-item>
                                
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="处理方法：" prop="Resolve">
                                    <el-input v-model="ruleForm_Repair.Resolve" autocomplete="off"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                            <div>
                                <el-form-item label="维修人员:" prop="LYR">
                                    <el-input v-model="ruleForm_Repair.WXR" autocomplete="off"></el-input>
                                </el-form-item>
                        
                            </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="维修配件：" prop="Parts">
                                    <el-input v-model="ruleForm_Repair.Parts" autocomplete="off"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="维修费用(元):" prop="Cost">
                                    <el-input v-model="ruleForm_Repair.Cost" autocomplete="off"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="故障原因：" prop="CauseFailure">
                                    <el-input v-model="ruleForm_Repair.CauseFailure" autocomplete="off"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <div> 
                                <el-form-item v-show="true" label="附件：" prop="Id">
                                        <rateUpload :limit='1' :Ismultiple='false' :BusinessId='ruleForm.Id' :BusinessType='6' @uploadSuccess='uploadSuccess_Repair'></rateUpload>
                                    </el-form-item>
                                </div>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="9">&nbsp;</el-col>
                            <el-col :span="6">
                                <div> 
                                <el-form-item>
                                        <el-button type="primary" @click="submitForm_Repair('ruleForm_Repair')">提交</el-button>
                                    </el-form-item>
                                </div>
                            </el-col>
                            <el-col :span="9">&nbsp;</el-col>
                        </el-row>
                    </el-form>
            </el-dialog> 
        </el-tab-pane>
        
        <el-tab-pane label="报废记录">
            <el-container style="height: calc(100vh - 145px); border: 1px solid #eee">
                <el-aside width="250px">
                   <treeSStation @checkedNodes="getSearchStations2"></treeSStation>
                </el-aside>
                
                <el-container>
                    <el-header>
                        <div class="search">
                                <el-form :inline="true" class="demo-form-inline" size="mini">
                                    <el-form-item label="名称：">
                                       <el-input v-model="queryparam_Scrap.DeviceName" autocomplete="off"></el-input>
                                    </el-form-item>
                                    <el-form-item class="btn">
                                        <el-button size="small" v-has="'DevUseRecord_handleSearch'" icon="el-icon-search" type="primary" @click="getList_Scrap();">查询</el-button>
                                        <el-button type="primary"  icon="el-icon-download"   @click="downloadBaoFei();">导出</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                        <div class="tools">
                           <el-button size="small" class=" el-button--iconButton" icon="el-icon-plus" style="text-overflow: initial;" v-has="'DevUseRecord_handleAdd'" @click="handleAdd_Scrap">添加</el-button>
                           <el-button size="small" class=" el-button--iconButton" icon="el-icon-delete" style="text-overflow: initial;" v-has="'DevUseRecord_handleMultiplDel'" @click="handleMultiplDel_Scrap">删除</el-button>
                        </div>
                    </el-header>
                
                    <el-main>
                        <rate-table :list="list_Scrap"
                           @handleSelectionChange="handleSelectionChange_Scrap"
                           @sizeChange="getSizeChange_Scrap"
                           @currentPage="getCurrentPage_Scrap"
                           :options="options_Scrap"
                           :columns="columns_Scrap"
                           :operates="operates_Scrap"
                           :pageShow="page_Scrap.pageShow"
                           :total="page_Scrap.total"
                        ></rate-table>
                    </el-main>
                </el-container>
            </el-container>   

            <el-dialog
                    title="设备报废记录"
                    :visible.sync="dialog_Scrap"
                    width="50%">
                    <el-form :model="ruleForm_Scrap" status-icon :rules="rules_Scrap" ref="ruleForm_Scrap" label-width="100px" class="demo-ruleForm" size="mini">
                        <el-row>
                            <el-col :span="24">
                                <el-form-item v-show="false" label="" prop="Id">
                                    <el-input v-model="ruleForm_Scrap.Id" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="站点名称：" prop="SStation">
                                    <rateCascader :selectOption='ruleForm_Scrap.SStation' @selectOptionEvent="selectOptionEvent_Scrap"></rateCascader>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="监测参数：" prop="ParamType">
                                    <rate-select
                                        v-model="rateYSBSelect.model"
                                        :url='rateYSBSelect.selectUrl'
                                        :urlParams="rateYSBSelect.urlParams"
                                        :multiple="false"
                                        placeholder="全部"
                                        :optionKeys="rateYSBSelect.optionKeys"
                                        :showLabels="rateYSBSelect.showLabels"
                                        :disables="rateYSBSelect.disables"
                                        @change="selectChange_Scrap"
                                    ></rate-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="设备厂家：" prop="FacId">
                                    <rate-select
                                        v-model="rateFacSelect.model"
                                        :url='rateFacSelect.selectUrl'
                                        :urlParams="rateFacSelect.urlParams"
                                        :multiple="false"
                                        placeholder="全部"
                                        :optionKeys="rateFacSelect.optionKeys"
                                        :showLabels="rateFacSelect.showLabels"
                                        :disables="rateFacSelect.disables"
                                        @change="FacChange_Scrap"
                                    ></rate-select>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="设备名称：" prop="DeviceName">
                                    <el-input v-model="ruleForm_Scrap.DeviceName" autocomplete="off"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="设备型号：" prop="DeviceModel">
                                    <el-input v-model="ruleForm_Scrap.DeviceModel" autocomplete="off"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                            <div>
                                <el-form-item label="维修人员:" prop="LYR">
                                    <el-input v-model="ruleForm_Scrap.WXR" autocomplete="off"></el-input>
                                </el-form-item>
                        
                            </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="9">&nbsp;</el-col>
                            <el-col :span="6">
                                <div> 
                                <el-form-item>
                                        <el-button type="primary" @click="submitForm_Scrap('ruleForm_Scrap')">提交</el-button>
                                    </el-form-item>
                                </div>
                            </el-col>
                            <el-col :span="9">&nbsp;</el-col>
                        </el-row>
                    </el-form>
            </el-dialog> 
        </el-tab-pane>
    </el-tabs>
</template>
<script>
import treeSStation from "../common/treeSStation";
import rateTable from "../common/rateTable"; //引入table组件
import rateSelect from '../common/rateSelect';
import rateCascader from '../common/rateCascader' //引入rateCascader组件
import rateUpload from '../common/rateUpload' //引入rateCascader组件
import deviceSparePartInfo from './deviceSparePartInfo' //引入deviceSparePartInfo组件

export default {
    name:'devUseRecord',
    data(){
        var checkWeixiuDate = (rule, value, callback) => {
            var d = this.getCurrentDate2();
            value = this.getCurrentDate(value);
            debugger
            if (parseInt(value)<parseInt(d)) {
                return callback(new Error('维修时间请选择该月'));
            }else{
                return callback();
            }
        };
        return {
            XiaoSanJiaoStyle:'el-icon-arrow-down',
            isChage:true,//是否显示备机更换 默认显示
            YQ30DayStatu:[
                {value:"1",label:'30天以内未下架'},
                {value:"2",label:'30天以外未下架'},
            ],//未下架30天内外
            SixParams:[
            {
                value: "EP02",
                label: "SO2",
            },
            {
                value: "EP04",
                label: "NOx",
            },
            {
                value: "EP06",
                label: "CO",
            },
            {
                value: "EP07",
                label: "O3",
            },
            {
                value: "EP18",
                label: "PM2.5",
            },
            {
                value: "EP01",
                label: "PM10",
            },
            {
                value: "EP99",
                label: "其他",
            },
            {
                value: "空气动态",
                label: "空气动态",
            },
            ],
            queryParam:{
                
            },
            DeviceFac:[],//设备厂家
            Device:[],//设备信息
            rateCTSelect:{//变更类型
                model: '',
                selectUrl:this.api+'/api/Select/GetSelectList?TypeCode=001003',
                urlParams: JSON.stringify({}),
                optionKeys: JSON.stringify({
                    value: 'dictCode',
                    label: 'info'
                }),
                showLabels: 'info',
                disables: '',
            },
            rateDevSelect:{//仪器状态
                model: '',
                selectUrl:this.api+'/api/Select/GetSelectList?TypeCode=001002',
                urlParams: JSON.stringify({}),
                optionKeys: JSON.stringify({
                    value: 'dictCode',
                    label: 'info'
                }),
                showLabels: 'info',
                disables: '',
            },
            rateYSBSelect:{//6参数类型
                model: '',
                selectUrl:this.api+'/api/Select/GetSelectList?TypeCode=003001',
                urlParams: JSON.stringify({}),
                optionKeys: JSON.stringify({
                    value: 'dictCode',
                    label: 'info'
                }),
                showLabels: 'info',
                disables: '',
            },
            rateBJKSelect:{//湖北省区域
                model: '',
                selectUrl:this.api+'/api/Select/GetSelectList?TypeCode=004003',
                urlParams: JSON.stringify({}),
                optionKeys: JSON.stringify({
                    value: 'dictCode',
                    label: 'info'
                }),
                showLabels: 'info',
                disables: '',
            },
            rateFacSelect:{//厂家
                model: '',
                selectUrl:this.api +"/api/Yw_DeviceFactoryInfo/DeviceFactoryInfo_FindByPage?pagesize=" +50+"&pageindex=" +1,
                urlParams: JSON.stringify({}),
                optionKeys: JSON.stringify({
                    value: 'id',
                    label: 'name'
                }),
                showLabels: 'name',
                disables: '',
            },
            rateWXSelect:{
                model: '',
                selectUrl:this.api+'/api/Select/GetSelectList?TypeCode=001006',
                urlParams: JSON.stringify({}),
                optionKeys: JSON.stringify({
                    value: 'dictCode',
                    label: 'info'
                }),
                showLabels: 'info',
                disables: '',
            },
            rateSPSelect:{},//备机信息
            page:{   //关于页码的相关参数
                pageShow:true,  //是否显示分页
                total:0,        //总条数
                pageSize:10,    //每页条数
                pageNo:1,       //第几页
            },
            handleSelection:[],  //checkbox选中行
            list:[],
            options: {  // table样式参数
                stripe: true, // 是否为斑马纹 table
                loading: true, // 是否添加表格loading加载动画
                highlightCurrentRow: true, // 是否支持当前行高亮显示
                mutiSelect: true, // 是否支持列表项选中功能
            }, // table 的参数结束
            columns: [
                { prop: 'show_ChangeType', label: '变更类型',  align: 'center',isShow:true },
                { prop: 'city', label: '城市', align: 'center',width:100 ,isShow:true },
                { prop: 'show_SStationName', label: '站点名称', align: 'center',width:150 ,isShow:true },
                { prop: 'show_Param', label: '监测参数', align: 'center',isShow:true  },
                { prop: 'newdevId', label: '新设备编号', width: 110, align: 'center' ,isShow:true },
                { prop: 'newDType', label: '新设备型号', width: 110, align: 'center' ,isShow:true },
                { prop: 'show_ApplyState', label: '仪器状态',  align: 'center' ,isShow:true },
                { prop: 'wxr', label: '维修人',  align: 'center' ,isShow:true },
                { prop: 'show_Status', label: '状态', align: 'center' ,isShow:true },
                { prop: 'fileName', label: '附件名称', align: 'center' ,isShow:true },
                { prop: 'show_ChangeTime', label: '更换时间', align: 'center',width:150 ,isShow:true },
                { prop: 'show_LowerShelfDataTime', label: '下架时间',align: 'center',width:150,isShow:true },
                { prop: 'show_UseDay', label: '使用天数', width: 150, align: 'center',isShow:true  },
                { prop: 'show_UseExpireTime', label: '使用到期时间', width: 150, align: 'center',isShow:true  },
                { prop: 'delayNum', label: '延期次数',  align: 'center',isShow:true  },
                { prop: 'delayFileName', label: '延期附件',  align: 'center',isShow:true  },
                { prop: 'delayRemark', label: '延期备注',  align: 'center',isShow:true  },
                { prop: 'approveName', label: '审批人',  align: 'center',isShow:true  },
                { prop: 'applyName', label: '申请人',  align: 'center',isShow:true  },
                { prop: 'show_ApproveTime', label: '审批时间',  align: 'center',isShow:true  }
            ],// 需要展示的列
            operates: {   //操作栏
                width:280,      
                fixed: 'right',
                list: [
                    {
                        id:'1',
                        label: '编辑',
                        bgColortype:'success',
                        show: true,   //是否显示按钮
                        className:'success', //样式类名
                        hasbutton:'DevUseRecord_handleEdit',//按钮权限控制
                        disabled: false,   //是否禁用按钮 默认是danger的禁用样式
                        method: (index, row) => {
                            if(row.status>=3){
                                this.$message({
                                    message: "延期审核中，请勿修改!",
                                    type: "warning"  
                                });
                                return false;
                            }
                            this.handleEdit(index, row)
                        }
                    },
                    {
                        id:'2',
                        label: '下架',
                        bgColortype:'primary',
                        show: true,   //是否显示按钮
                        className:'success', //样式类名
                        hasbutton:'DevUseRecord_handleXiajia',//按钮权限控制
                        disabled: false,   //是否禁用按钮 默认是danger的禁用样式
                        method: (index, row) => {
                            this.handleOffShelf(index, row)
                        }
                    },
                    {
                        id:'3',
                        label: '延期',
                        bgColortype:'warning',
                        show: true,   //是否显示按钮
                        className:'success', //样式类名
                        hasbutton:'DevUseRecord_handleYanqi',//按钮权限控制
                        disabled: false,   //是否禁用按钮 默认是danger的禁用样式
                        method: (index, row) => {
                            this.delayDialog=!this.delayDialog;
                            this.delayruleForm.Id=row.id;
                            //this.handleDelay(index, row);
                        }
                    },
                    {
                        id:'4',
                        label: '审核',
                        show: true,
                        bgColortype:'success',
                        className:'searchAll',
                        hasbutton:'DevUseRecord_handleCheck',//按钮权限控制
                        disabled: false,
                        method: (index, row) => {
                            this.handleAduit(row.id);
                        }
                    },
                    {
                        id:'5',
                        label: '删除',
                        show: true,
                        bgColortype:'danger',
                        className:'searchAll',
                        hasbutton:'DevUseRecord_handleMultiplDel',//按钮权限控制
                        disabled: false,
                        method: (index, row) => {
                            this.handledel(index, row);
                        }
                    }]
            },
            dialogDevUseRecordeVisible:false,
            delayDialog:false,
            aduitFormDialogVisible:false,
            dialog_Repair:false,
            dialog_Scrap:false,
            ruleForm:{
                Id:'',
                ChangeType:2,
                SStation:'',
                Param:'',
                OriginDType:'',
                PartCity:'',
                NewDF:'',
                NewDName:'',
                NewDType:'',
                ChangeTime:'',
                FacId:'',
                ChangeReason:'',
                Status:2,
                FileName:'',
                FileUrl:'',
                ApplyState:1,
                NewdevId:'',
                WXR:''
            },
            delayruleForm:{
                Id:'',
                DelayRemark:'',
                DelayFileName:'',
                DelayFileUrl:'',
            },
            ruleForm_Repair:{
                Id:'',
                SStation:'',
                RepairType:'',
                Main_Param:'',
                Main_Model:'',
                FailureTime:'',
                FailureEndTime:'',
                FailurePhenomenon:'',
                CauseFailure:'',
                Resolve:'',
                Parts:'',
                Cost:'',
                FileName:'',
                FileUrl:'',
                Back_FactId:'',
                Back_DType:'',
                WXR:''
            },
            ruleForm_Scrap:{
                Id:'',
                SStation:'',
                DeviceName:'',
                ParamType:'',
                DeviceModel:'',
                FacId:'',
                WXR:'',
            },
            rules: {
                ChangeType:[{ required: true, message: '必填项', trigger: 'blur' }],
                SStation: [{ required: true, message: '请选择站点', trigger: 'blur' }],
                Param: [{ required: true, message: '必填项', trigger: 'blur' }],
                OriginDType: [{ required: false, message: '必填项', trigger: 'blur' }],
                PartCity: [{ required: false, message: '必填项', trigger: 'blur' }],
                NewDF: [{ required: false, message: '必填项', trigger: 'blur' }],
                NewDName: [{ required: false, message: '必填项', trigger: 'blur' }],
                NewDType: [{ required: false, message: '必填项', trigger: 'blur' }],
                ChangeTime: [{ required: true, message: '必填项', trigger: 'blur' }],
                FacId: [{ required: false, message: '必填项', trigger: 'blur' }],
                ChangeReason: [{ required: true, message: '必填项', trigger: 'blur' }],
                DelayRemark: [{ required: true, message: '必填项', trigger: 'blur' }],
            },
            rules_Repair: {
                RepairType:[{ required: true, message: '', trigger: 'blur' }],
                SStation: [{ required: true, message: '请选择站点', trigger: 'blur' }],
                Main_Param: [{ required: true, message: '必填项', trigger: 'blur' }],
                Main_Model: [{ required: true, message: '必填项', trigger: 'blur' }],
                FailureTime: [{ required: true, message: '必填项', trigger: 'blur' },{ validator: checkWeixiuDate, trigger: 'blur' }],
                FailureEndTime: [{ required: true, message: '必填项', trigger: 'blur' }],
                FailurePhenomenon: [{ required: true, message: '必填项', trigger: 'blur' }],
                CauseFailure: [{ required: false, message: '必填项', trigger: 'blur' }],
                Resolve: [{ required: false, message: '必填项', trigger: 'blur' }],
                Parts: [{ required: false, message: '必填项', trigger: 'blur' }],
                Cost: [{ required: false, message: '必填项', trigger: 'blur' }],
                FileName: [{ required: false, message: '必填项', trigger: 'blur' }],

                Back_FactId: [{ required: true, message: '必填项', trigger: 'blur' }],
                Back_DType: [{ required: true, message: '必填项', trigger: 'blur' }],
            },
            rules_Scrap: {
                SStation: [{ required: true, message: '请选择站点', trigger: 'blur' }],
                DeviceName: [{ required: true, message: '必填项', trigger: 'blur' }],
                ParamType: [{ required: true, message: '必填项', trigger: 'blur' }],
                DeviceModel: [{ required: true, message: '必填项', trigger: 'blur' }],
                FacId: [{ required: true, message: '必填项', trigger: 'blur' }],
            },
            queryparam:{
                ChangeType:'',
                ApplyState:'',
                StartTime:'',
                EndTime:'',
                chooseStationIds:'',
                WXJ30Day:''
            },
            queryparam_Repair:{
                Main_Model:'',
                Main_Param:'',
                startDate:'',
                endDate:'',
                chooseStationIds1:'',
            },
            queryparam_Scrap:{
                DeviceName:'',
                chooseStationIds2:'',
            },
            //第二个tabs标签
            page_Repair:{   //关于页码的相关参数
                pageShow:true,  //是否显示分页
                total:0,        //总条数
                pageSize:10,    //每页条数
                pageNo:1,       //第几页
            },
            page_Scrap:{   //关于页码的相关参数
                pageShow:true,  //是否显示分页
                total:0,        //总条数
                pageSize:10,    //每页条数
                pageNo:1,       //第几页
            },
            handleSelection_Repair:[],  //checkbox选中行
            handleSelection_Scrap:[],  //checkbox选中行
            list_Repair:[],
            list_Scrap:[],
            options_Repair: {  // table样式参数
                stripe: true, // 是否为斑马纹 table
                loading: true, // 是否添加表格loading加载动画
                highlightCurrentRow: true, // 是否支持当前行高亮显示
                mutiSelect: true, // 是否支持列表项选中功能
            }, // table 的参数结束
            options_Scrap: {  // table样式参数
                stripe: true, // 是否为斑马纹 table
                loading: true, // 是否添加表格loading加载动画
                highlightCurrentRow: true, // 是否支持当前行高亮显示
                mutiSelect: true, // 是否支持列表项选中功能
            }, // table 的参数结束
            columns_Repair: [
                { prop: 'failureTime',label: '是否锁定',align: 'center',isShow:true,width:80,formatter:this.timePeriod},
                { prop: 'city', label: '城市', align: 'center',width:100 ,isShow:true },
                { prop: 'show_SStationName', label: '站点名称', align: 'center',width:150 ,isShow:true },
                { prop: 'show_Param', label: '监测参数', align: 'center',isShow:true  },
                { prop: 'wxr', label: '维修人',  align: 'center' ,isShow:true },
                { prop: 'show_RepairType', label: '维修类型', width: 110, align: 'center' ,isShow:true },
                { prop: 'main_Model', label: '设备型号', align: 'center' ,isShow:true },
                { prop: 'failureTime', label: '故障时间', align: 'center',width:150 ,isShow:true },
                { prop: 'failurePhenomenon', label: '故障现象',align: 'center',width:150,isShow:true },
                { prop: 'causeFailure', label: '故障原因', width: 150, align: 'center',isShow:true  },
                { prop: 'resolve', label: '处理方法', width: 150, align: 'center',isShow:true  },
                { prop: 'parts', label: '维修配件',  align: 'center',isShow:true  },
                { prop: 'cost', label: '维修费用(元)',  align: 'center',isShow:true  },
                { prop: 'fileName', label: '附件',  align: 'center',isShow:true  },
            ],// 需要展示的列
            columns_Scrap: [
                { prop: 'show_SStationName', label: '站点名称', align: 'center',width:150 ,isShow:true },
                { prop: 'show_Param', label: '监测参数', align: 'center',isShow:true  },
                { prop: 'deviceName', label: '设备名称', width: 110, align: 'center' ,isShow:true },
                { prop: 'wxr', label: '维修人',  align: 'center' ,isShow:true },
                { prop: 'deviceModel', label: '设备型号', align: 'center' ,isShow:true },
                { prop: 'show_facName', label: '设备厂家', align: 'center' ,isShow:true },
                { prop: 'show_ScrapDateTime', label: '报废时间',align: 'center',width:160,isShow:true },
            ],// 需要展示的列
            operates_Repair: {   //操作栏
                width:150,      
                fixed: 'right',
                list: [
                    {
                        id:'1',
                        label: '编辑',
                        bgColortype:'success',
                        show: true,   //是否显示按钮
                        className:'success', //样式类名
                        hasbutton:'DevUseRecord_handleEdit',//按钮权限控制
                        disabled: false,   //是否禁用按钮 默认是danger的禁用样式
                        method: (index, row) => {
                            this.handleEdit_Repair(index, row)
                        }
                    },
                    {
                        id:'2',
                        label: '删除',
                        show: true,
                        bgColortype:'danger',
                        className:'searchAll',
                        hasbutton:'DevUseRecord_handleMultiplDel',//按钮权限控制
                        disabled: false,
                        method: (index, row) => {
                            this.handledel_Repair(index, row);
                        }
                    }]
            },
            operates_Scrap: {   //操作栏
                width:150,      
                fixed: 'right',
                list: [
                    {
                        id:'1',
                        label: '编辑',
                        bgColortype:'success',
                        show: true,   //是否显示按钮
                        className:'success', //样式类名
                        hasbutton:'DevUseRecord_handleEdit',//按钮权限控制
                        disabled: false,   //是否禁用按钮 默认是danger的禁用样式
                        method: (index, row) => {
                            this.handleEdit_Scrap(index, row)
                        }
                    },
                    {
                        id:'2',
                        label: '删除',
                        show: true,
                        bgColortype:'danger',
                        className:'searchAll',
                        hasbutton:'DevUseRecord_handleMultiplDel',//按钮权限控制
                        disabled: false,
                        method: (index, row) => {
                            this.handledel_Scrap(index, row);
                        }
                    }]
            },
        }
    },
    mounted() {
        this.getList();//调用获取列表页的方法
        this.getList_Repair();
        this.getList_Scrap();

        //获取设备厂家
        this.getDeviceFac();

        //获取设备信息
        this.getDevice();


    },
    methods:{
        XSJToggel(){//小三角切换
            if(this.XiaoSanJiaoStyle=='el-icon-arrow-up'){
                this.XiaoSanJiaoStyle='el-icon-arrow-down';
                this.isChage=true;
            }else{
                this.XiaoSanJiaoStyle='el-icon-arrow-up';
                this.isChage=false;
            }
        },
          //获取时间周期
        timePeriod(row,column,cellValue){
            if(this.getCurrentDateday()>this.getCurrentDate3()){
                if(row.failureTime>=this.getCurrentDate01()){//getCurrentDate01:本月1号
                    return  `<i class="unlock" style="vertical-align: super;font-size: 30px;"><svg t="1614130652256" class="icon" viewBox="0 0 1448 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3130" width="32" height="32"><path d="M868.057993 437.736921H419.565235c-32.212778 0-58.320892 26.105681-58.320892 58.322108v425.769637c0 32.27481 26.108114 58.382924 58.320892 58.382925h606.019618c32.21886 0 58.266158-26.108114 58.266158-58.382925v-425.769637c-0.004865-32.21886-26.103249-58.322109-58.326973-58.322108H868.057993z m-112.727696 282.304548L755.329081 813.013843c0 4.152485-3.437295 7.655461-7.655461 7.655461h-50.133903c-4.270468 0-7.711411-3.502975-7.711412-7.655461v-92.972374c-23.553861-12.045127-39.868239-36.193764-39.868239-64.49732 0-40.045821 32.513207-72.618627 72.563893-72.618627 40.10542 0 72.623492 32.572806 72.623493 72.618627 0.053518 28.303555-16.259644 52.450976-39.817155 64.49732z" p-id="3131" fill="#1afa29"></path><path d="M932.254884 286.08241c0-80.218138 65.323194-145.541332 145.541332-145.541332 80.216921 0 145.424566 65.323194 145.424566 145.541332V437.738137h90.601784V282.229137c0-130.235275-105.850674-236.1419-236.083517-236.1419-130.234059 0-236.201499 105.906624-236.201499 236.1419V437.738137h90.717334V286.08241z" p-id="3132" fill="#1afa29"></path></svg></i>`;
                }else{
                    return  `<i class="lock" style="vertical-align: super;font-size: 30px;"><svg t="1614132616909" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6593" width="32" height="32"><path d="M721.92 493.24032l0-74.26048c0 0-0.02048-173.21984-179.2-173.21984-179.17952 0-179.2 173.21984-179.2 173.21984l0 74.26048L286.72 493.24032 286.72 839.68l512 0L798.72 493.24032 721.92 493.24032zM568.32 684.3392l0 81.1008-51.2 0 0-81.1008C501.88288 675.75808 491.52 659.968 491.52 641.69984c0-27.3408 22.9376-49.50016 51.2-49.50016 28.2624 0 51.2 22.13888 51.2 49.50016C593.92 659.968 583.55712 675.75808 568.32 684.3392zM670.72 493.21984l-256 0 0-73.91232c0.28672-20.72576 7.80288-124.04736 128-124.04736 120.17664 0 127.71328 103.3216 128 123.71968L670.72 493.21984z" p-id="6594" fill="#d81e06"></path></svg></i>`;
                }
            }else{
                if(row.failureTime>this.getCurrentDate3()){
                    return  `<i class="unlock" style="vertical-align: super;font-size: 30px;"><svg t="1614130652256" class="icon" viewBox="0 0 1448 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3130" width="32" height="32"><path d="M868.057993 437.736921H419.565235c-32.212778 0-58.320892 26.105681-58.320892 58.322108v425.769637c0 32.27481 26.108114 58.382924 58.320892 58.382925h606.019618c32.21886 0 58.266158-26.108114 58.266158-58.382925v-425.769637c-0.004865-32.21886-26.103249-58.322109-58.326973-58.322108H868.057993z m-112.727696 282.304548L755.329081 813.013843c0 4.152485-3.437295 7.655461-7.655461 7.655461h-50.133903c-4.270468 0-7.711411-3.502975-7.711412-7.655461v-92.972374c-23.553861-12.045127-39.868239-36.193764-39.868239-64.49732 0-40.045821 32.513207-72.618627 72.563893-72.618627 40.10542 0 72.623492 32.572806 72.623493 72.618627 0.053518 28.303555-16.259644 52.450976-39.817155 64.49732z" p-id="3131" fill="#1afa29"></path><path d="M932.254884 286.08241c0-80.218138 65.323194-145.541332 145.541332-145.541332 80.216921 0 145.424566 65.323194 145.424566 145.541332V437.738137h90.601784V282.229137c0-130.235275-105.850674-236.1419-236.083517-236.1419-130.234059 0-236.201499 105.906624-236.201499 236.1419V437.738137h90.717334V286.08241z" p-id="3132" fill="#1afa29"></path></svg></i>`;
                }else{
                    if(row.failureTime<this.getCurrentDate3() && row.failureTime>this.getLastDate01()){//getLastDate01:上个月1号
                        return  `<i class="unlock" style="vertical-align: super;font-size: 30px;"><svg t="1614130652256" class="icon" viewBox="0 0 1448 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3130" width="32" height="32"><path d="M868.057993 437.736921H419.565235c-32.212778 0-58.320892 26.105681-58.320892 58.322108v425.769637c0 32.27481 26.108114 58.382924 58.320892 58.382925h606.019618c32.21886 0 58.266158-26.108114 58.266158-58.382925v-425.769637c-0.004865-32.21886-26.103249-58.322109-58.326973-58.322108H868.057993z m-112.727696 282.304548L755.329081 813.013843c0 4.152485-3.437295 7.655461-7.655461 7.655461h-50.133903c-4.270468 0-7.711411-3.502975-7.711412-7.655461v-92.972374c-23.553861-12.045127-39.868239-36.193764-39.868239-64.49732 0-40.045821 32.513207-72.618627 72.563893-72.618627 40.10542 0 72.623492 32.572806 72.623493 72.618627 0.053518 28.303555-16.259644 52.450976-39.817155 64.49732z" p-id="3131" fill="#1afa29"></path><path d="M932.254884 286.08241c0-80.218138 65.323194-145.541332 145.541332-145.541332 80.216921 0 145.424566 65.323194 145.424566 145.541332V437.738137h90.601784V282.229137c0-130.235275-105.850674-236.1419-236.083517-236.1419-130.234059 0-236.201499 105.906624-236.201499 236.1419V437.738137h90.717334V286.08241z" p-id="3132" fill="#1afa29"></path></svg></i>`;
                    }else{  
                        return  `<i class="lock" style="vertical-align: super;font-size: 30px;"><svg t="1614132616909" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6593" width="32" height="32"><path d="M721.92 493.24032l0-74.26048c0 0-0.02048-173.21984-179.2-173.21984-179.17952 0-179.2 173.21984-179.2 173.21984l0 74.26048L286.72 493.24032 286.72 839.68l512 0L798.72 493.24032 721.92 493.24032zM568.32 684.3392l0 81.1008-51.2 0 0-81.1008C501.88288 675.75808 491.52 659.968 491.52 641.69984c0-27.3408 22.9376-49.50016 51.2-49.50016 28.2624 0 51.2 22.13888 51.2 49.50016C593.92 659.968 583.55712 675.75808 568.32 684.3392zM670.72 493.21984l-256 0 0-73.91232c0.28672-20.72576 7.80288-124.04736 128-124.04736 120.17664 0 127.71328 103.3216 128 123.71968L670.72 493.21984z" p-id="6594" fill="#d81e06"></path></svg></i>`;
                    }
                }
            }
            
        },

        getDeviceFac(){
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_DeviceFactoryInfo/DeviceFactoryInfo_FindByPage?pageindex=1&pagesize=200'
            }).then(res => {
                if(res.status==200){
                    this.DeviceFac=res.data.data;
                }
            }).catch(error => {
                console.log(error);
            });
        },
        getDevice(){
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_DeviceFactoryInfo/DeviceInfo_FindByPage?pageindex=1&pagesize=1000'
            }).then(res => {
                if(res.status==200){
                    this.Device=res.data.data;
                }
            }).catch(error => {
                console.log(error);
            });
        },
         //更换记录
        getSearchStations(obj){
            var self = this;
            var configIds='';
            if(obj!=null)
            {  
               obj.forEach(o=>{                   
                    configIds += o.sStation +',';
               });     
               self.queryparam.chooseStationIds =configIds;    
            }         
        },

        getSearchStations1(obj){
            var self = this;
            var configIds='';
            if(obj!=null)
            {  
               obj.forEach(o=>{                   
                    configIds += o.sStation +',';
               });     
               self.queryparam.chooseStationIds1 =configIds;    
            }         
        },


        getSearchStations2(obj){
            var self = this;
            var configIds='';
            if(obj!=null)
            {  
               obj.forEach(o=>{                   
                    configIds += o.sStation +',';
               });     
               self.queryparam.chooseStationIds2 =configIds;    
            }         
        },
        

        handleSelectionChange(val) { //checkbox选中的数据val 是选中行的所有数组
            this.handleSelection=val;
        },
        handleSelectionChange_Repair(val) { //checkbox选中的数据val 是选中行的所有数组
            this.handleSelection_Repair=val;
        },
        handleSelectionChange_Scrap(val) { //checkbox选中的数据val 是选中行的所有数组
            this.handleSelection_Scrap=val;
        },
        FacChange(val, valObj){
            debugger
            this.ruleForm.NewDF=val;
            this.ruleForm.FacId=val;
            this.rateSPSelect={
                model: '',
                selectUrl:this.api +"/api/Yw_DevUseRecord/GetDevSparePartInfo?City="+this.ruleForm.PartCity+"&FacId="+this.ruleForm.FacId,
                urlParams: JSON.stringify({}),
                optionKeys: JSON.stringify({
                    value: 'id',
                    label: 'name'
                }),
                showLabels: 'name,deviceUniqueCode',
                disables: '',
            };
        },
        FacChange_Scrap(val, valObj){
            this.ruleForm_Scrap.FacId=val;
        },
        spChange(val, valObj){
            this.ruleForm.NewDName=valObj.name;
            this.getSPDevInfo({id:val});
        },
        selectChange_Repair(val, valObj){
            this.ruleForm_Repair.Main_Param=val;
        },
        selectChange_Scrap(val, valObj){
            this.ruleForm_Scrap.ParamType=val;
        },
        selectChange(val, valObj) {
            debugger
            switch(valObj.typeName){
                case '6参数类型':
                    if(this.ruleForm.SStation==""){
                        this.$message({
                            message: "请选择站点!",
                            type: 'warning'  //warning,success,info,error
                        });
                        return false;
                    }
                    this.ruleForm.Param=val;
                    this.getHostDevInfo({param:valObj.info,sstation:this.ruleForm.SStation});
                    break;
                case '变更类型':
                    this.ruleForm.ChangeType=val;
                    this.queryparam.ChangeType=val;
                    break;
                case '湖北省区域':
                    this.ruleForm.PartCity=val;
                    break;
                case '仪器状态':
                    this.queryparam.ApplyState=val;
                    break;
                case '设备类型':
                    this.ruleForm_Repair.RepairType=val;
                    break;
                default :
                    break;
            }
        },
        selectOptionEvent(val){
            this.ruleForm.SStation=val.toString();
        },
        selectOptionEvent_Repair(val){
            this.ruleForm_Repair.SStation=val.toString();
        },
        selectOptionEvent_Scrap(val){
            this.ruleForm_Scrap.SStation=val.toString();
        },
        uploadSuccess(file){
            this.ruleForm.FileName=file.fileName;
            this.ruleForm.FileUrl=file.fileUrl;
        },
        uploadSuccess_Repair(file){
            this.ruleForm_Repair.FileName=file.fileName;
            this.ruleForm_Repair.FileUrl=file.fileUrl;
        },
        uploadSuccess_Scrap(file){
            this.ruleForm_Scrap.FileName=file.fileName;
            this.ruleForm_Scrap.FileUrl=file.fileUrl;
        },
        uploadDelaySuccess(file){
            this.delayruleForm.DelayFileName=file.fileName;
            this.delayruleForm.DelayFileUrl=file.fileUrl;
        },
        handleAdd(){
            this.getToFirst(0);
            this.dialogDevUseRecordeVisible=!this.dialogDevUseRecordeVisible;
        },
        handleAdd_Repair(){
            this.getToFirst_Repair(0);
            this.dialog_Repair=!this.dialog_Repair;
        },
        handleAdd_Scrap(){
            this.getToFirst_Scrap(0);
            this.dialog_Scrap=!this.dialog_Scrap;
        },
        handleEdit(index, row){
            this.dialogDevUseRecordeVisible=!this.dialogDevUseRecordeVisible;
            this.getToFirst(row.id);
        },
        handleEdit_Repair(index, row){
            debugger
            if(this.getCurrentDateday()>this.getCurrentDate3()){
                if(row.failureTime>=this.getCurrentDate01()){//getCurrentDate01:本月1号

                }else{
                    this.$message({ type:"warning",dangerouslyUseHTMLString: true,message: "数据已锁定，不能操作！"});
                    return false;
                }
            }else{
                if(row.failureTime>this.getCurrentDate3()){
                }else{
                    if(row.failureTime<this.getCurrentDate3() && row.failureTime>this.getLastDate01()){//getLastDate01:上个月1号
                        
                    }else{  
                        this.$message({ type:"warning",dangerouslyUseHTMLString: true,message: "数据已锁定，不能操作！"});
                        return false;
                    }
                }
            }

            this.getToFirst_Repair(row.id);
            this.dialog_Repair=!this.dialog_Repair;
        },
        handleEdit_Scrap(index, row){
            this.getToFirst_Scrap(row.id);
            this.dialog_Scrap=!this.dialog_Scrap;
        },
        handleOffShelf(index, row){
            var self=this;
            this.$confirm('确认下架？').then(function () {
                self.OffShelf(row.id);
            }).catch(function () {
                
            });
        },
        handledel(index, row) {  //列表栏删除按钮
            var self=this;
            this.$confirm('确认删除？').then(function () {
                self.Singelmultipl(row.id);
            }).catch(function () {
                
            });
        },
        handledel_Repair(index, row) {  //列表栏删除按钮
            var self=this;
            // if(row.failureTime<this.getCurrentDate3()){ //'2021-06-03 23:59:59'
            //     this.$message({ type:"warning",dangerouslyUseHTMLString: true,message: "数据已锁定，不能操作！"});
            //     return false;
            // }
            if(this.getCurrentDateday()>this.getCurrentDate3()){
                if(row.failureTime>=this.getCurrentDate01()){//getCurrentDate01:本月1号
                }else{
                    this.$message({ type:"warning",dangerouslyUseHTMLString: true,message: "数据已锁定，不能操作！"});
                    return false;
                }
            }else{
                if(row.failureTime>this.getCurrentDate3()){
                }else{
                    if(row.failureTime<this.getCurrentDate3() && row.failureTime>this.getLastDate01()){//getLastDate01:上个月1号
                        
                    }else{  
                        this.$message({ type:"warning",dangerouslyUseHTMLString: true,message: "数据已锁定，不能操作！"});
                        return false;
                    }
                }
            }

            this.$confirm('确认删除？').then(function () {
                self.Singelmultipl_Repair(row.id);
            }).catch(function () {
                
            });
        },
        handledel_Scrap(index, row) {  //列表栏删除按钮
            var self=this;
            this.$confirm('确认删除？').then(function () {
                self.Singelmultipl_Scrap(row.id);
            }).catch(function () {
                
            });
        },
        OffShelf(id){
            var self = this;
            this.$http({
                method: 'GET',
                url: self.api+'/api/Yw_DevUseRecord/OffShelf?Id='+id
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
        handleAduit(id){
            var self=this;
            this.$confirm('设备使用延期审核通过？').then(function () {
                self.Aduit(id);
            }).catch(function () {
                
            });
        },
        Aduit(id){
            var self = this;
            this.$http({
                method: 'GET',
                url: self.api+'/api/Yw_DevUseRecord/Aduit?Id='+id
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
        Delay(id){
            this.$refs["delayruleForm"].validate((valid) => {
                if (valid) {
                    var self = this;
                    this.$http({
                        headers: {'deviceCode': 'A95ZEF1-47B5-AC90BF3'},
                        method: 'post',
                        url: self.api+'/api/Yw_DevUseRecord/Delay',
                        data:self.Qs.stringify(self.delayruleForm)
                    }).then(res => {
                        if(res.status==200){
                            self.delayDialog=false;
                            self.getList();
                            self.$message({
                                message: res.data.message,
                                type: res.data.type  //warning,success,info,error
                            });
                        }
                    }).catch(error => {
                        console.log(error);
                    });
                } else {
                    return false;
                }
            });
        },
        Singelmultipl(id){
            var self = this;
            this.$http({
                method: 'GET',
                url: self.api+'/api/Yw_DevUseRecord/Singelmultipl?Id='+id
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
        Singelmultipl_Repair(id){
            var self = this;
            this.$http({
                method: 'GET',
                url: self.api+'/api/Yw_DevUseRecord/Singelmultipl_Repair?Id='+id
            }).then(res => {
                if(res.status==200){
                    self.getList_Repair();
                    self.$message({
                        message: res.data.message,
                        type: res.data.type  //warning,success,info,error
                    });
                }
            }).catch(error => {
                console.log(error);
            });
        },
        Singelmultipl_Scrap(id){
            var self = this;
            this.$http({
                method: 'GET',
                url: self.api+'/api/Yw_DevUseRecord/Singelmultipl_Scrap?Id='+id
            }).then(res => {
                if(res.status==200){
                    self.getList_Scrap();
                    self.$message({
                        message: res.data.message,
                        type: res.data.type  //warning,success,info,error
                    });
                }
            }).catch(error => {
                console.log(error);
            });
        },
        handleMultiplDel(ids){
            var self = this;
            var ids = '';
            if (this.handleSelection == "") {
                self.$message({
                    message: "请选择要删除的数据！",
                    type: "warning"  //success,warning,info,error
                });
                return;
            }
            this.handleSelection.forEach((item,index) => {
                if (index != self.handleSelection.length - 1) {
                    ids += item.id + ','
                } else {
                    ids += item.id;
                }
            });
            this.$confirm('确认删除？').then(function () {
                self.handlemultipl(ids);
            }).catch(function () {
                
            });
        },
        handleMultiplDel_Repair(ids){
            var self = this;
            var ids = '';
            if (this.handleSelection_Repair == "") {
                self.$message({
                    message: "请选择要删除的数据！",
                    type: "warning"  //success,warning,info,error
                });
                return;
            }
            this.handleSelection_Repair.forEach((item,index) => {
                if (index != self.handleSelection_Repair.length - 1) {
                    ids += item.id + ','
                } else {
                    ids += item.id;
                }
            });
            this.$confirm('确认删除？').then(function () {
                self.handlemultipl_Repair(ids);
            }).catch(function () {
                
            });
        },
        handleMultiplDel_Scrap(ids){
            var self = this;
            var ids = '';
            if (this.handleSelection_Scrap == "") {
                self.$message({
                    message: "请选择要删除的数据！",
                    type: "warning"  //success,warning,info,error
                });
                return;
            }
            this.handleSelection_Scrap.forEach((item,index) => {
                if (index != self.handleSelection_Scrap.length - 1) {
                    ids += item.id + ','
                } else {
                    ids += item.id;
                }
            });
            this.$confirm('确认删除？').then(function () {
                self.handlemultipl_Scrap(ids);
            }).catch(function () {
                
            });
        },
        handlemultipl(ids){
            var self = this;
            this.$http({
                method: 'GET',
                url: self.api+'/api/Yw_DevUseRecord/Delmultipl?ids='+ids
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
        handlemultipl_Repair(ids){
            var self = this;
            this.$http({
                method: 'GET',
                url: self.api+'/api/Yw_DevUseRecord/Delmultipl_Repair?ids='+ids
            }).then(res => {
                if(res.status==200){
                    self.getList_Repair();
                    self.$message({
                        message: res.data.message,
                        type: res.data.type  //warning,success,info,error
                    });
                }
            }).catch(error => {
                console.log(error);
            });
        },
        handlemultipl_Scrap(ids){
            var self = this;
            this.$http({
                method: 'GET',
                url: self.api+'/api/Yw_DevUseRecord/Delmultipl_Scrap?ids='+ids
            }).then(res => {
                if(res.status==200){
                    self.getList_Scrap();
                    self.$message({
                        message: res.data.message,
                        type: res.data.type  //warning,success,info,error
                    });
                }
            }).catch(error => {
                console.log(error);
            });
        },
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    debugger
                    var self = this;
                    this.$http({
                        headers: {'deviceCode': 'A95ZEF1-47B5-AC90BF3'},
                        method: 'post',
                        url: self.api+'/api/Yw_DevUseRecord/Submit',
                        data:self.Qs.stringify(self.ruleForm)
                    }).then(res => {
                        if(res.status==200){
                            self.dialogDevUseRecordeVisible=false;
                            self.getList();
                            self.$message({
                                message: res.data.message,
                                type: res.data.type  //warning,success,info,error
                            });
                        }
                    }).catch(error => {
                        console.log(error);
                    });
                } else {
                    return false;
                }
            });
        },
        submitForm_Repair(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    var self = this;
                    this.$http({
                        headers: {'deviceCode': 'A95ZEF1-47B5-AC90BF3'},
                        method: 'post',
                        url: self.api+'/api/Yw_DevUseRecord/Submit_Repair',
                        data:self.Qs.stringify(self.ruleForm_Repair)
                    }).then(res => {
                        if(res.status==200){
                            self.dialog_Repair=false;
                            self.getList_Repair();
                            self.$message({
                                message: res.data.message,
                                type: res.data.type  //warning,success,info,error
                            });
                        }
                    }).catch(error => {
                        console.log(error);
                    });
                } else {
                    return false;
                }
            });
        },
        submitForm_Scrap(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    var self = this;
                    this.$http({
                        headers: {'deviceCode': 'A95ZEF1-47B5-AC90BF3'},
                        method: 'post',
                        url: self.api+'/api/Yw_DevUseRecord/Submit_Scrap',
                        data:self.Qs.stringify(self.ruleForm_Scrap)
                    }).then(res => {
                        if(res.status==200){
                            self.dialog_Scrap=false;
                            self.getList_Scrap();
                            self.$message({
                                message: res.data.message,
                                type: res.data.type  //warning,success,info,error
                            });
                        }
                    }).catch(error => {
                        console.log(error);
                    });
                } else {
                    return false;
                }
            });
        },
        getSizeChange(val){  //table组件发射的方法 用于改变每页数据量
            this.page.pageSize=val;
            //这下面需要重新调用 获取列表页的函数
            this.getList();
        },
        getSizeChange_Repair(val){  //table组件发射的方法 用于改变每页数据量
            this.page_Repair.pageSize=val;
            //这下面需要重新调用 获取列表页的函数
            this.getList_Repair();
        },
        getSizeChange_Scrap(val){  //table组件发射的方法 用于改变每页数据量
            this.page_Scrap.pageSize=val;
            //这下面需要重新调用 获取列表页的函数
            this.getList_Scrap();
        },
        getCurrentPage(val){  //table组件发射的方法  用于改变当前所在页码
            this.page.pageNo=val;
            //这下面需要重新调用 获取列表页的函数
            this.getList();
        },
        getCurrentPage_Repair(val){  //table组件发射的方法  用于改变当前所在页码
            this.page_Repair.pageNo=val;
            //这下面需要重新调用 获取列表页的函数
            this.getList_Repair();
        },
        getCurrentPage_Scrap(val){  //table组件发射的方法  用于改变当前所在页码
            this.page_Scrap.pageNo=val;
            //这下面需要重新调用 获取列表页的函数
            this.getList_Scrap();
        },
        getHostDevInfo(obj){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api +"/api/Yw_DeviceHostLibraryInfo/DeviceHostLibraryInfo_FindByPage?pagesize=" +1+"&pageindex=" +1+"&Param=" + obj.param+"&SStation=" +obj.sstation
            }).then(res => {
                if(res.status==200){
                    self.ruleForm.OriginDType=res.data.data[0].model!=''?res.data.data[0].model:'暂无数据！';
                    self.ruleForm.OriginDFId=res.data.data[0].FacId;
                    self.ruleForm.OriginDF=res.data.data[0].FacName;
                }
            }).catch(error => {
                console.log(error);
            });
        },
        getSPDevInfo(obj){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api +"/api/Yw_DeviceSparePartInfo/Get_DeviceSparePartInfo?Id="+obj.id
            }).then(res => {
                if(res.status==200){
                    self.ruleForm.NewDType=res.data.data.model;
                }
            }).catch(error => {
                console.log(error);
            });
        },
        getList(obj){
            debugger
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_DevUseRecord/GetList?pagesize=' + self.page.pageSize + '&pageindex=' + self.page.pageNo+ '&StartTime=' + self.queryparam.StartTime + '&EndTime=' + self.queryparam.EndTime+ '&ChangeType=' + self.queryparam.ChangeType+ '&ApplyState=' + self.queryparam.ApplyState+'&SStations=' + self.queryparam.chooseStationIds+'&WXJ30Day='+self.queryparam.WXJ30Day
            }).then(res => {
                if(res.status==200){
                    self.list=res.data.data;
                    self.page.total = res.data.count;
                    self.options.loading=false;
                }
            }).catch(error => {
                console.log(error);
            });
        },
        getList_Repair(obj){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_DevUseRecord/GetList_Repair?pagesize=' + self.page_Repair.pageSize + '&pageindex=' + self.page_Repair.pageNo+'&Main_Model='+self.queryparam_Repair.Main_Model+'&Main_Param='+self.queryparam_Repair.Main_Param+'&SStations=' + self.queryparam.chooseStationIds1+'&StartDate='+self.queryparam_Repair.startDate+'&EndDate='+self.queryparam_Repair.endDate
            }).then(res => {
                if(res.status==200){
                    self.list_Repair=res.data.data;
                    self.page_Repair.total = res.data.count;
                    self.options_Repair.loading=false;
                }
            }).catch(error => {
                console.log(error);
            });
        }, 
        getList_Scrap(obj){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_DevUseRecord/GetList_Scrap?pagesize=' + self.page_Scrap.pageSize + '&pageindex=' + self.page_Scrap.pageNo +'&DeviceName='+self.queryparam_Scrap.DeviceName+'&SStations=' + self.queryparam.chooseStationIds2
            }).then(res => {
                if(res.status==200){
                    self.list_Scrap=res.data.data;
                    self.page_Scrap.total = res.data.count;
                    self.options_Scrap.loading=false;
                }
            }).catch(error => {
                console.log(error);
            });
        },  
        getToFirst(id){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_DevUseRecord/GetToFirst?Id=' + id
            }).then(res => {
                if(res.status==200){
                    self.ruleForm.Id=res.data.data.id;
                    self.ruleForm.ChangeType=res.data.data.changeType,
                    self.rateCTSelect.model=self.ruleForm.ChangeType.toString();//变更类型
                    self.ruleForm.SStation=res.data.data.sStation;
                    self.ruleForm.Param=res.data.data.param;
                    if(self.ruleForm.Param!=null){
                        self.rateYSBSelect.model=self.ruleForm.Param.toString();//6参数类型
                    }
                    self.ruleForm.OriginDType=res.data.data.originDType;
                    self.ruleForm.PartCity=res.data.data.partCity;
                    if(self.ruleForm.PartCity!=null){
                        self.rateBJKSelect.model=self.ruleForm.PartCity.toString();//备机库城市
                    }
                    self.ruleForm.NewDF=res.data.data.newDF;
                    if(self.ruleForm.NewDF!=null){
                        self.rateFacSelect.model=parseInt(self.ruleForm.NewDF);//设备厂家
                    }
                    self.rateSPSelect.NewDName=res.data.data.newDName;
                    if(self.ruleForm.NewDName!=null){
                        self.rateSPSelect.model=self.ruleForm.NewDName.toString();//设备信息
                    }
                    self.ruleForm.NewDType=res.data.data.newDType;
                    self.ruleForm.ChangeTime=res.data.data.changeTime;
                    self.ruleForm.FacId=res.data.data.facId;
                    if(self.ruleForm.FacId!=undefined){
                        self.rateFacSelect.model=parseInt(self.ruleForm.FacId);//临时接入设备厂家
                    }
                    self.ruleForm.ChangeReason=res.data.data.changeReason;
                    self.ruleForm.Status=res.data.data.status;
                    self.ruleForm.FileName=res.data.data.fileName;
                    self.ruleForm.FileUrl=res.data.data.fileUrl;
                    self.ruleForm.ApplyState=res.data.data.applyState;
                    self.ruleForm.WXR=res.data.data.wxr;
                    self.ruleForm.NewdevId=res.data.data.newdevId;
                    
                }
          }).catch(error => {
            console.log(error);
          });
        },
        getToFirst_Repair(id){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_DevUseRecord/GetToFirst_Repair?Id=' + id
            }).then(res => {
                if(res.status==200){
                    self.ruleForm_Repair.Id=res.data.data.id;
                    self.ruleForm_Repair.SStation=res.data.data.sStation;
                    self.ruleForm_Repair.RepairType=res.data.data.repairType;
                    if(self.ruleForm_Repair.RepairType!=null){
                        self.rateWXSelect.model=self.ruleForm_Repair.RepairType.toString();//设备维修类型
                    }
                    self.ruleForm_Repair.Main_Param=res.data.data.main_Param;
                    if(self.ruleForm_Repair.Main_Param!=null){
                        self.rateYSBSelect.model=self.ruleForm_Repair.Main_Param.toString();//6参数类型
                    }
                    self.ruleForm_Repair.Main_Model=res.data.data.main_Model;
                    self.ruleForm_Repair.FailureTime=res.data.data.failureTime;
                    self.ruleForm_Repair.FailurePhenomenon=res.data.data.failurePhenomenon;
                    self.ruleForm_Repair.CauseFailure=res.data.data.causeFailure;
                    self.ruleForm_Repair.Resolve=res.data.data.resolved;
                    self.ruleForm_Repair.Parts=res.data.data.parts;
                    self.ruleForm_Repair.Cost=res.data.data.cost;
                    self.ruleForm_Repair.FileName=res.data.data.fileName;
                    self.ruleForm_Repair.FileUrl=res.data.data.fileUrl;
                    self.ruleForm_Repair.WXR=res.data.data.wxr;
                }
          }).catch(error => {
            console.log(error);
          });

        },
        getToFirst_Scrap(id){
            var self = this;
            this.$http({
                method: 'GET',
                url: this.api+'/api/Yw_DevUseRecord/GetToFirst_Scrap?Id=' + id
            }).then(res => {
                if(res.status==200){
                    self.ruleForm_Scrap.Id=res.data.data.id;
                    self.ruleForm_Scrap.SStation=res.data.data.sStation;
                    self.ruleForm_Scrap.ParamType=res.data.data.paramType;
                    if(self.ruleForm_Scrap.ParamType!=null){
                        self.rateYSBSelect.model=self.ruleForm_Scrap.ParamType.toString();//6参数类型
                    }
                    self.ruleForm_Scrap.FacId=res.data.data.facId;
                    if(self.ruleForm_Scrap.FacId!=null){
                        self.rateFacSelect.model=parseInt(self.ruleForm_Scrap.FacId);//设备厂家
                    }
                    self.ruleForm_Scrap.DeviceName=res.data.data.deviceName;
                    self.ruleForm_Scrap.DeviceModel=res.data.data.deviceModel;
                    self.ruleForm_Scrap.WXR=res.data.data.wxr;
                }
            }).catch(error => {
                console.log(error);
            });
        },
        selectSStation(){
            this.$refs.cascader.selectSStation(this.ruleForm.SStation);
        },

        //下载时间
        downLoadDate(){       
            const date = new Date();
            const y =date.getFullYear();
            const M = (date.getMonth()+1).toString().padStart(2,0);
            const d = date.getDate().toString().padStart(2, 0);
            const h = date.getHours().toString().padStart(2, 0);
            const mm = date.getMinutes().toString().padStart(2, 0);
            const s = date.getSeconds().toString().padStart(2, 0);
            return y  + M +  + d  + h  + mm + s;
        },
        //获取当前年月
        getCurrentDate(dt){       
            const date = new Date(dt);
            const y =date.getFullYear();
            const M = (date.getMonth()+1).toString().padStart(2,0);
            const d = date.getDate().toString().padStart(2, 0);
            const h = date.getHours().toString().padStart(2, 0);
            const mm = date.getMinutes().toString().padStart(2, 0);
            const s = date.getSeconds().toString().padStart(2, 0);
            return y  + M;
        },
        //获取当前年月
        getCurrentDate2(){       
            const date = new Date();
            const y =date.getFullYear();
            const M = (date.getMonth()+1).toString().padStart(2,0);
            const d = date.getDate().toString().padStart(2, 0);
            const h = date.getHours().toString().padStart(2, 0);
            const mm = date.getMinutes().toString().padStart(2, 0);
            const s = date.getSeconds().toString().padStart(2, 0);
            return y  + M;
        },
        //获取当前年月日
        getCurrentDateday(){       
            const date = new Date();
            const y =date.getFullYear();
            const M = (date.getMonth()+1).toString().padStart(2,0);
            const d = date.getDate().toString().padStart(2, 0);
            const h = date.getHours().toString().padStart(2, 0);
            const mm = date.getMinutes().toString().padStart(2, 0);
            const s = date.getSeconds().toString().padStart(2, 0);
            return y  +'-'+ M +'-'+ d;
        },
        //获取当前年月
        getCurrentDate3(){       
            const date = new Date();
            const y =date.getFullYear();
            const M = (date.getMonth()+1).toString().padStart(2,0);
            const d = date.getDate().toString().padStart(2, 0);
            const h = date.getHours().toString().padStart(2, 0);
            const mm = date.getMinutes().toString().padStart(2, 0);
            const s = date.getSeconds().toString().padStart(2, 0);
            return y  +'-'+ M +'-03 23:59:59';
        },
        //获取当前年月1号
        getCurrentDate01(data){       
            const date = new Date();
            const y =date.getFullYear();
            const M = (date.getMonth()+1).toString().padStart(2,0);
            const d = date.getDate().toString().padStart(2, 0);
            const h = date.getHours().toString().padStart(2, 0);
            const mm = date.getMinutes().toString().padStart(2, 0);
            const s = date.getSeconds().toString().padStart(2, 0);
            return y  +'-'+ M +'-01';
        },
        //获取当前年上月1号
        getLastDate01(data){       
            const date = new Date();
            const y =date.getFullYear();
            const M = (date.getMonth()).toString().padStart(2,0);
            const d = date.getDate().toString().padStart(2, 0);
            const h = date.getHours().toString().padStart(2, 0);
            const mm = date.getMinutes().toString().padStart(2, 0);
            const s = date.getSeconds().toString().padStart(2, 0);
            return y  +'-'+ M +'-01';
        },
        //导出更换记录
        downloadExange(obj){
            var self = this;
            this.$http({
                method: 'GET',
                responseType: 'blob', // 表明返回服务器返回的数据类型
                url: this.api+'/api/Yw_DevUseRecord/GetListDownLoad?pagesize=' + self.page.pageSize + '&pageindex=' + self.page.pageNo+ '&StartTime=' + self.queryparam.StartTime + '&EndTime=' + self.queryparam.EndTime+ '&ChangeType=' + self.queryparam.ChangeType+ '&ApplyState=' + self.queryparam.ApplyState+'&SStations=' + self.queryparam.chooseStationIds
            }).then(res => {
                if(res.status==200){              
    let blob = new Blob([res.data], {type: 'application/vnd.ms-excel' })
    let  downTime= self.downLoadDate();
    const fileName = downTime + '-更换记录.xls';
    const elink = document.createElement('a');
    elink.download = fileName;
    elink.style.display = 'none';
    elink.href = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    URL.revokeObjectURL(elink.href); // 释放URL 对象
    document.body.removeChild(elink);
                }
          }).catch(error => {
            console.log(error);
          });
        },

        //导出维修记录
        downloadWeixiu(obj){
            var self = this;
            this.$http({
                method: 'GET',
                responseType: 'blob', // 表明返回服务器返回的数据类型
                url:  this.api+'/api/Yw_DevUseRecord/GetList_RepairDownLoad?pagesize=' + self.page_Repair.pageSize + '&pageindex=' + self.page_Repair.pageNo+'&StartDate='+self.queryparam_Repair.startDate+'&EndDate='+self.queryparam_Repair.endDate+ '&Main_Model='+self.queryparam_Repair.Main_Model+'&SStations=' + self.queryparam.chooseStationIds1
            }).then(res => {
                if(res.status==200){              
                let blob = new Blob([res.data], {type: 'application/vnd.ms-excel' })
                let  downTime= self.downLoadDate();
                const fileName = downTime + '-维修记录.xls';
                const elink = document.createElement('a');
                elink.download = fileName;
                elink.style.display = 'none';
                elink.href = URL.createObjectURL(blob);
                document.body.appendChild(elink);
                elink.click();
                URL.revokeObjectURL(elink.href); // 释放URL 对象
                document.body.removeChild(elink);
                }
            }).catch(error => {
                console.log(error);
            });
        },

         //导出维修记录
    downloadBaoFei(obj){
            var self = this;
            this.$http({
                method: 'GET',
                responseType: 'blob', // 表明返回服务器返回的数据类型
                url:  this.api+'/api/Yw_DevUseRecord/GetList_ScrapDownLoad?pagesize=' + self.page_Scrap.pageSize + '&pageindex=' + self.page_Scrap.pageNo +'&DeviceName='+self.queryparam_Scrap.DeviceName+'&SStations=' + self.queryparam.chooseStationIds2
            }).then(res => {
                if(res.status==200){              
    let blob = new Blob([res.data], {type: 'application/vnd.ms-excel' })
    let  downTime= self.downLoadDate();
    const fileName = downTime + '-报废记录.xls';
    const elink = document.createElement('a');
    elink.download = fileName;
    elink.style.display = 'none';
    elink.href = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    URL.revokeObjectURL(elink.href); // 释放URL 对象
    document.body.removeChild(elink);
                }
          }).catch(error => {
            console.log(error);
          });
        },       
    },
    components:{
        treeSStation,rateTable,rateSelect,rateCascader,rateUpload,deviceSparePartInfo
    },
   
}
</script>
<style scoped>
::-webkit-scrollbar{width: 7px;height: 7px;background-color: #F5F5F5;}
  /*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);border-radius: 10px;background-color: #F5F5F5;}
  /*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb{border-radius: 10px;box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);background-color: #c8c8c8;}
.el-aside {color: #333;}
.el-header{height: 60px !important;}
.el-header .search{height: 40px !important;box-sizing: border-box;border-bottom: 1px solid #eee;text-align: left;}
.el-header .search .btn{position: absolute;right: 12px;top: 2px;}
.el-header .tools{height: 40px;border: 1px solid #ccc;background: #F5F5F5;line-height: 35px;text-align: right;padding: 0px 5px;}
.el-main{height: calc(100vh - 336px);}
.el-cascader,.el-cascader--medium{width: 100%;height: 28px;line-height: 28px;}
.el-date-editor,.el-input {width: 100%;}
</style>
