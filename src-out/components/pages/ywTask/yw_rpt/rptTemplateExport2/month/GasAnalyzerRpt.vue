<template>
  <div>
    <form id="SGUReplace">
      <!-- <div style="float:left;margin:15px 45px; " >
               巡检开始时间：
              <el-date-picker v-model="ruleForm.yj_1" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择时间" :clearable=false></el-date-picker>
               &nbsp; &nbsp; &nbsp; 
               巡检结束时间：
              <el-date-picker v-model="ruleForm.yj_2" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择时间" :clearable=false></el-date-picker>
            </div> -->

      <table id="SGUReplacetb">
        <tbody>
          <tr>
            <td colspan="2">巡检开始时间：</td>
            <td colspan="2">
              <el-date-picker
                v-model:value="ruleForm.yj_1"
                type="datetime"
                value-format="yyyy-MM-dd HH:mm:ss"
                placeholder="选择时间"
                :clearable="false"
              ></el-date-picker>
            </td>
            <td rowspan="1"></td>
            <td colspan="2">巡检结束时间：</td>
            <td colspan="2">
              <el-date-picker
                v-model:value="ruleForm.yj_2"
                type="datetime"
                value-format="yyyy-MM-dd HH:mm:ss"
                placeholder="选择时间"
                :clearable="false"
              ></el-date-picker>
            </td>
          </tr>
          <tr>
            <td rowspan="2">日期</td>
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
                <input
                  v-model="ruleForm.bq_1"
                  type="text"
                  class="td_input"
                  id="bq_1"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_1" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>

            <td>
              <input
                v-model="ruleForm.bq_2"
                type="text"
                class="td_input"
                id="E_bq_2"
                style="height: 30px"
              />
            </td>

            <td style="width: 150px; height: 20px">
              <input
                v-model="ruleForm.bq_3"
                type="text"
                class="td_input"
                id="E_bq_3"
                style="height: 30px"
              />
            </td>

            <td>
              <span
                class="combo datebox height30"
                style="width: 100px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_4"
                  type="text"
                  class="td_input"
                  id="bq_4"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_4" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>

            <td>
              <span
                class="combo datebox height30"
                style="width: 100px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_5"
                  type="text"
                  class="td_input"
                  id="bq_5"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_5" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>

            <td>
              <span
                class="combo datebox height30"
                style="width: 100px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_6"
                  type="text"
                  class="td_input"
                  id="bq_6"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_6" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>

            <td>
              <input
                v-model="ruleForm.bq_7"
                type="text"
                class="td_input"
                id="E_bq_7"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_8"
                type="text"
                class="td_input"
                id="E_bq_8"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_9"
                type="text"
                class="td_input"
                id="E_bq_9"
                style="height: 30px"
              />
            </td>
          </tr>

          <tr>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_10"
                  type="text"
                  class="td_input"
                  id="bq_1"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_10" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_11"
                type="text"
                class="td_input"
                id="E_bq_11"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_12"
                type="text"
                class="td_input"
                id="E_bq_12"
                style="height: 30px"
              />
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_13"
                  type="text"
                  class="td_input"
                  id="bq_13"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_13" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_14"
                  type="text"
                  class="td_input"
                  id="bq_14"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_14" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_15"
                  type="text"
                  class="td_input"
                  id="bq_15"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_15" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_16"
                type="text"
                class="td_input"
                id="E_bq_16"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_17"
                type="text"
                class="td_input"
                id="E_bq_17"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_18"
                type="text"
                class="td_input"
                id="E_bq_18"
                style="height: 30px"
              />
            </td>
          </tr>

          <tr>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_19"
                  type="text"
                  class="td_input"
                  id="bq_19"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_19" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>  -->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_20"
                type="text"
                class="td_input"
                id="E_bq_20"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_21"
                type="text"
                class="td_input"
                id="E_bq_21"
                style="height: 30px"
              />
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_22"
                  type="text"
                  class="td_input"
                  id="bq_22"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_22" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_23"
                  type="text"
                  class="td_input"
                  id="bq_23"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_23" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_24"
                  type="text"
                  class="td_input"
                  id="bq_24"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_24" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_25"
                type="text"
                class="td_input"
                id="E_bq_25"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_26"
                type="text"
                class="td_input"
                id="E_bq_26"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_27"
                type="text"
                class="td_input"
                id="E_bq_27"
                style="height: 30px"
              />
            </td>
          </tr>

          <tr>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_28"
                  type="text"
                  class="td_input"
                  id="bq_28"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_28" type="date"   placeholder="选择时间" :clearable=false></el-date-picker> -->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_29"
                type="text"
                class="td_input"
                id="E_bq_29"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_30"
                type="text"
                class="td_input"
                id="E_bq_30"
                style="height: 30px"
              />
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_31"
                  type="text"
                  class="td_input"
                  id="bq_31"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_31" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>  -->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_32"
                  type="text"
                  class="td_input"
                  id="bq_32"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_32" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>  -->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_33"
                  type="text"
                  class="td_input"
                  id="bq_33"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_33" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>  -->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_34"
                type="text"
                class="td_input"
                id="E_bq_34"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_35"
                type="text"
                class="td_input"
                id="E_bq_35"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_36"
                type="text"
                class="td_input"
                id="E_bq_36"
                style="height: 30px"
              />
            </td>
          </tr>

          <tr>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_37"
                  type="text"
                  class="td_input"
                  id="bq_37"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_37" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_38"
                type="text"
                class="td_input"
                id="E_bq_38"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_39"
                type="text"
                class="td_input"
                id="E_bq_39"
                style="height: 30px"
              />
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_40"
                  type="text"
                  class="td_input"
                  id="bq_40"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_40" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>  -->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_41"
                  type="text"
                  class="td_input"
                  id="bq_41"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_41" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_42"
                  type="text"
                  class="td_input"
                  id="bq_42"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_42" type="datetime" format="yyyy-MM-dd HH:mm"   placeholder="选择时间" :clearable=false></el-date-picker> -->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_43"
                type="text"
                class="td_input"
                id="E_bq_43"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_44"
                type="text"
                class="td_input"
                id="E_bq_44"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_45"
                type="text"
                class="td_input"
                id="E_bq_45"
                style="height: 30px"
              />
            </td>
          </tr>

          <tr>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_46"
                  type="text"
                  class="td_input"
                  id="bq_46"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_46" type="date"   placeholder="选择时间" :clearable=false></el-date-picker> -->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_47"
                type="text"
                class="td_input"
                id="E_bq_47"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_48"
                type="text"
                class="td_input"
                id="E_bq_48"
                style="height: 30px"
              />
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_49"
                  type="text"
                  class="td_input"
                  id="bq_49"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_49" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_50"
                  type="text"
                  class="td_input"
                  id="bq_50"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_50" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_51"
                  type="text"
                  class="td_input"
                  id="bq_51"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_51" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_52"
                type="text"
                class="td_input"
                id="E_bq_52"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_53"
                type="text"
                class="td_input"
                id="E_bq_53"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_54"
                type="text"
                class="td_input"
                id="E_bq_54"
                style="height: 30px"
              />
            </td>
          </tr>

          <tr>
            <td>
              <span
                class="combo datebox height"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_55"
                  type="text"
                  class="td_input"
                  id="bq_55"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_55" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_56"
                type="text"
                class="td_input"
                id="E_bq_56"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_57"
                type="text"
                class="td_input"
                id="E_bq_57"
                style="height: 30px"
              />
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_58"
                  type="text"
                  class="td_input"
                  id="bq_58"
                  style="height: 30px"
                />
                <!-- <el-date-picker v-model="ruleForm.bq_58" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_59"
                  type="text"
                  class="td_input"
                  id="bq_59"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_59" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_60"
                  type="text"
                  class="td_input"
                  id="bq_60"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_60" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_61"
                type="text"
                class="td_input"
                id="E_bq_61"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_62"
                type="text"
                class="td_input"
                id="E_bq_62"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_63"
                type="text"
                class="td_input"
                id="E_bq_63"
                style="height: 30px"
              />
            </td>
          </tr>

          <tr>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_64"
                  type="text"
                  class="td_input"
                  id="bq_64"
                  style="height: 30px"
                />
                <!-- <el-date-picker v-model="ruleForm.bq_64" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>  -->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_65"
                type="text"
                class="td_input"
                id="E_bq_65"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_66"
                type="text"
                class="td_input"
                id="E_bq_66"
                style="height: 30px"
              />
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_67"
                  type="text"
                  class="td_input"
                  id="bq_67"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_67" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_68"
                  type="text"
                  class="td_input"
                  id="bq_68"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_68" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_69"
                  type="text"
                  class="td_input"
                  id="bq_69"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_69" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>  -->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_70"
                type="text"
                class="td_input"
                id="E_bq_70"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_71"
                type="text"
                class="td_input"
                id="E_bq_71"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_72"
                type="text"
                class="td_input"
                id="E_bq_72"
                style="height: 30px"
              />
            </td>
          </tr>

          <tr>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_73"
                  type="text"
                  class="td_input"
                  id="bq_73"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_73" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>  -->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_74"
                type="text"
                class="td_input"
                id="E_bq_74"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_75"
                type="text"
                class="td_input"
                id="E_bq_75"
                style="height: 30px"
              />
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_76"
                  type="text"
                  class="td_input"
                  id="bq_76"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_76" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_77"
                  type="text"
                  class="td_input"
                  id="bq_77"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_77" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_78"
                  type="text"
                  class="td_input"
                  id="bq_78"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_78" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_79"
                type="text"
                class="td_input"
                id="E_bq_79"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_80"
                type="text"
                class="td_input"
                id="E_bq_80"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_81"
                type="text"
                class="td_input"
                id="E_bq_81"
                style="height: 30px"
              />
            </td>
          </tr>

          <tr>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_82"
                  type="text"
                  class="td_input"
                  id="bq_82"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_82" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>  -->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_83"
                type="text"
                class="td_input"
                id="E_bq_83"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_84"
                type="text"
                class="td_input"
                id="E_bq_84"
                style="height: 30px"
              />
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_85"
                  type="text"
                  class="td_input"
                  id="bq_85"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_85" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_86"
                  type="text"
                  class="td_input"
                  id="bq_86"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_86" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_87"
                  type="text"
                  class="td_input"
                  id="bq_87"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_87" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_88"
                type="text"
                class="td_input"
                id="E_bq_88"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_89"
                type="text"
                class="td_input"
                id="E_bq_89"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_90"
                type="text"
                class="td_input"
                id="E_bq_90"
                style="height: 30px"
              />
            </td>
          </tr>

          <tr>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_91"
                  type="text"
                  class="td_input"
                  id="bq_91"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_91" type="date"   placeholder="选择时间" :clearable=false></el-date-picker> -->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_92"
                type="text"
                class="td_input"
                id="E_bq_92"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_93"
                type="text"
                class="td_input"
                id="E_bq_93"
                style="height: 30px"
              />
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_94"
                  type="text"
                  class="td_input"
                  id="bq_94"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_94" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_95"
                  type="text"
                  class="td_input"
                  id="bq_95"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_95" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_96"
                  type="text"
                  class="td_input"
                  id="bq_96"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_96" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_97"
                type="text"
                class="td_input"
                id="E_bq_97"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_98"
                type="text"
                class="td_input"
                id="E_bq_98"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_99"
                type="text"
                class="td_input"
                id="E_bq_99"
                style="height: 30px"
              />
            </td>
          </tr>

          <tr>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_100"
                  type="text"
                  class="td_input"
                  id="bq_100"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_100" type="date"   placeholder="选择时间" :clearable=false></el-date-picker> -->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_101"
                type="text"
                class="td_input"
                id="E_bq_101"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_102"
                type="text"
                class="td_input"
                id="E_bq_102"
                style="height: 30px"
              />
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_103"
                  type="text"
                  class="td_input"
                  id="bq_103"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_103" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_104"
                  type="text"
                  class="td_input"
                  id="bq_104"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_104" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_105"
                  type="text"
                  class="td_input"
                  id="bq_105"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_105" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_106"
                type="text"
                class="td_input"
                id="E_bq_106"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_107"
                type="text"
                class="td_input"
                id="E_bq_107"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_108"
                type="text"
                class="td_input"
                id="E_bq_108"
                style="height: 30px"
              />
            </td>
          </tr>

          <tr>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_109"
                  type="text"
                  class="td_input"
                  id="bq_109"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_109" type="date"   placeholder="选择时间" :clearable=false></el-date-picker> -->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_110"
                type="text"
                class="td_input"
                id="E_bq_110"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_111"
                type="text"
                class="td_input"
                id="E_bq_111"
                style="height: 30px"
              />
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_112"
                  type="text"
                  class="td_input"
                  id="bq_112"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_112" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_113"
                  type="text"
                  class="td_input"
                  id="bq_113"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_113" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_114"
                  type="text"
                  class="td_input"
                  id="bq_114"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_114" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_115"
                type="text"
                class="td_input"
                id="E_bq_115"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_116"
                type="text"
                class="td_input"
                id="E_bq_116"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_117"
                type="text"
                class="td_input"
                id="E_bq_117"
                style="height: 30px"
              />
            </td>
          </tr>

          <tr>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_118"
                  type="text"
                  class="td_input"
                  id="bq_118"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_118" type="date"   placeholder="选择时间" :clearable=false></el-date-picker> -->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_119"
                type="text"
                class="td_input"
                id="E_bq_119"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_120"
                type="text"
                class="td_input"
                id="E_bq_120"
                style="height: 30px"
              />
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_121"
                  type="text"
                  class="td_input"
                  id="bq_121"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_121" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_122"
                  type="text"
                  class="td_input"
                  id="bq_122"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_122" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_123"
                  type="text"
                  class="td_input"
                  id="bq_123"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_123" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_124"
                type="text"
                class="td_input"
                id="E_bq_124"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_125"
                type="text"
                class="td_input"
                id="E_bq_125"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_126"
                type="text"
                class="td_input"
                id="E_bq_126"
                style="height: 30px"
              />
            </td>
          </tr>

          <tr>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_127"
                  type="text"
                  class="td_input"
                  id="bq_127"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_127" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_128"
                type="text"
                class="td_input"
                id="E_bq_128"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_129"
                type="text"
                class="td_input"
                id="E_bq_129"
                style="height: 30px"
              />
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_130"
                  type="text"
                  class="td_input"
                  id="bq_130"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_130" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_131"
                  type="text"
                  class="td_input"
                  id="bq_131"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_131" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_132"
                  type="text"
                  class="td_input"
                  id="bq_132"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_132" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_133"
                type="text"
                class="td_input"
                id="E_bq_133"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_134"
                type="text"
                class="td_input"
                id="E_bq_134"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_135"
                type="text"
                class="td_input"
                id="E_bq_135"
                style="height: 30px"
              />
            </td>
          </tr>

          <tr>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_136"
                  type="text"
                  class="td_input"
                  id="bq_136"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_136" type="date"   placeholder="选择时间" :clearable=false></el-date-picker> -->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_137"
                type="text"
                class="td_input"
                id="E_bq_137"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_138"
                type="text"
                class="td_input"
                id="E_bq_138"
                style="height: 30px"
              />
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_139"
                  type="text"
                  class="td_input"
                  id="bq_139"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_139" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_140"
                  type="text"
                  class="td_input"
                  id="bq_140"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_140" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_141"
                  type="text"
                  class="td_input"
                  id="bq_140"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_141" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_142"
                type="text"
                class="td_input"
                id="E_bq_142"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_143"
                type="text"
                class="td_input"
                id="E_bq_143"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_144"
                type="text"
                class="td_input"
                id="E_bq_144"
                style="height: 30px"
              />
            </td>
          </tr>

          <tr>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_145"
                  type="text"
                  class="td_input"
                  id="bq_145"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_145" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_146"
                type="text"
                class="td_input"
                id="E_bq_146"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_147"
                type="text"
                class="td_input"
                id="E_bq_147"
                style="height: 30px"
              />
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_148"
                  type="text"
                  class="td_input"
                  id="bq_148"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_148" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_149"
                  type="text"
                  class="td_input"
                  id="bq_149"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_149" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_150"
                  type="text"
                  class="td_input"
                  id="bq_150"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_150" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker> -->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_151"
                type="text"
                class="td_input"
                id="E_bq_151"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_152"
                type="text"
                class="td_input"
                id="E_bq_152"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_153"
                type="text"
                class="td_input"
                id="E_bq_153"
                style="height: 30px"
              />
            </td>
          </tr>

          <tr>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_154"
                  type="text"
                  class="td_input"
                  id="bq_154"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_154" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_155"
                type="text"
                class="td_input"
                id="E_bq_155"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_156"
                type="text"
                class="td_input"
                id="E_bq_156"
                style="height: 30px"
              />
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_157"
                  type="text"
                  class="td_input"
                  id="bq_157"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_157" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_158"
                  type="text"
                  class="td_input"
                  id="bq_158"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_158" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_159"
                  type="text"
                  class="td_input"
                  id="bq_159"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_159" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_160"
                type="text"
                class="td_input"
                id="E_bq_160"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_161"
                type="text"
                class="td_input"
                id="E_bq_161"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_162"
                type="text"
                class="td_input"
                id="E_bq_162"
                style="height: 30px"
              />
            </td>
          </tr>

          <tr>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_163"
                  type="text"
                  class="td_input"
                  id="bq_163"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_163" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_164"
                type="text"
                class="td_input"
                id="E_bq_164"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_165"
                type="text"
                class="td_input"
                id="E_bq_165"
                style="height: 30px"
              />
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_166"
                  type="text"
                  class="td_input"
                  id="bq_166"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_166" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_167"
                  type="text"
                  class="td_input"
                  id="bq_167"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_167" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_168"
                  type="text"
                  class="td_input"
                  id="bq_168"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_168" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_169"
                type="text"
                class="td_input"
                id="E_bq_169"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_170"
                type="text"
                class="td_input"
                id="E_bq_170"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_171"
                type="text"
                class="td_input"
                id="E_bq_171"
                style="height: 30px"
              />
            </td>
          </tr>

          <tr>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_172"
                  type="text"
                  class="td_input"
                  id="bq_172"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_172" type="date"   placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_173"
                type="text"
                class="td_input"
                id="E_bq_173"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_174"
                type="text"
                class="td_input"
                id="E_bq_174"
                style="height: 30px"
              />
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_175"
                  type="text"
                  class="td_input"
                  id="bq_175"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_175" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_176"
                  type="text"
                  class="td_input"
                  id="bq_176"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_176" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <span
                class="combo datebox height30"
                style="width: 174px; height: 20px"
              >
                <input
                  v-model="ruleForm.bq_177"
                  type="text"
                  class="td_input"
                  id="bq_177"
                  style="height: 30px"
                />
                <!--<el-date-picker v-model="ruleForm.bq_177" type="datetime" format="yyyy-MM-dd HH:mm"  placeholder="选择时间" :clearable=false></el-date-picker>-->
              </span>
            </td>
            <td>
              <input
                v-model="ruleForm.bq_178"
                type="text"
                class="td_input"
                id="E_bq_178"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_179"
                type="text"
                class="td_input"
                id="E_bq_179"
                style="height: 30px"
              />
            </td>
            <td>
              <input
                v-model="ruleForm.bq_180"
                type="text"
                class="td_input"
                id="E_bq_180"
                style="height: 30px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
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
td:nth-child(2) {
  width: 220px;
}
td:nth-child(3) {
  width: 220px;
}
.height30 {
  height: 30px !important;
}
</style>
