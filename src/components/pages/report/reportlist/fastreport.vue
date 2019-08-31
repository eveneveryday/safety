<template>
   <div id="fasttable">
        <div id="navtitle">
            <ul>
                <li style="color: dimgrey;">报表&nbsp&nbsp&nbsp></li>
                <li style="color: black">快速报表</li>
            </ul>
        </div>
        <div id="tabletitle">
            <div id="tabletype">
                <span>报表类型</span>
                <el-select v-model="selected1" collapse-tags id="tabletypelist" placeholder="请选择" multiple  @on-change = "selectAll(selected)">
                    <el-option v-for="tabletype in tabletypeList" :value="tabletype.label" :key="tabletype.value">{{tabletype.label}}</el-option>
                </el-select>
            </div>
            <div id="tablestatus">
                <span>执行状态</span>
                <el-select v-model="selected2" collapse-tags id="statuslist" multiple placeholder="请选择">
                    <el-option v-for="tablestatus in tablestatuslist" :value="tablestatus.label" :key="tablestatus.value">{{tablestatus.label}}</el-option>
                </el-select>
            </div>
            <div id="tablename">
                <input type="text" placeholder="报表名称/创建人/创建人角色">
            </div>
        </div>
        <div id="tablelist">
            <div id="adddelete">
                <input type="button" id="addlist" value="+ 新增" style="border: 1px solid dodgerblue;color: dodgerblue">
                <input type="button" id="deletelist" value="- 删除" style="border: 1px solid red;color: red;">
            </div>
            <table id="tablelisttitle">
                <!--<input type="checkbox">-->
                <thead>
                <tr id="thtitle">
                    <td><input  class="inputcheckbox" type="checkbox" @click="checkAll" :checked="tablecontent.length === checked.length"></td>
                    <td v-for="item in tabletitle" :key="item.id">{{item.title}}</td>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="items in tablecontent" :key="items.id">
                        <td><input type="checkbox"  class="inputcheckbox" v-model="checked" :value="items"></td>
                        <td>{{items.tablename}}</td>
                        <td>{{items.tabletype}}</td>
                        <td>{{items.founder}}</td>
                        <td>{{items.Character}}</td>
                        <td>{{items.datarange}}</td>
                        <td>{{items.latesttime}}</td>
                        <td>{{items.tablestatus}}</td>
                        <td>
                            <i class='fa fa-eye' id="items.id">查看&nbsp&nbsp&nbsp</i>
                            <i class='fa fa-edit'>编辑&nbsp&nbsp&nbsp</i>
                            <i class='fa fa-play-circle-o'>重新执行&nbsp&nbsp&nbsp</i>
                            <i class='fa fa-download'>下载&nbsp&nbsp&nbsp</i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div> 
</template>

<script>

export default {
  name:'',
  data(){
   return {
    isCheckedAll: false,
    checked:[],
    tabletitle:{},
    tablecontent:{},
    selected1:[],
    selected2:[],
    isDrop:true,
    oldOptions:[],
    tabletypeList:[
       {
         label:'全选',
         value:10
       },
      {
       label:'告警统计',
       value:0
      },
      {
       label:'受害资产统计',
       value:1
      },
      {
       label:'系统维护',
       value:2
      },
      {
       label:'攻击者统计',
       value:3
      },
      {
       label:'综合报告',
       value:4
      },
      {
       label:'威胁分析统计',
       value:5
      },
      {
       label:'告警事件汇总统计',
       value:6
      },
      {
       label:'日志统计',
       value:7
      },
      {
       label:'自定义统计',
       value:8
      },
      {
       label:'受害资产告警汇总统计',
       value:9
      }
     ],
     tablestatuslist:[
       {
         label:'未启动',
         value:0
       },
       {
         label:'成功',
         value:1
       },
       {
         label:'执行中',
         value:2
       },
       {
         label:'失败',
         value:3
       }
     ]
   }
  },
  components:{
    // VSelection
  },
  created:function(){
        this.getData1();
        this.getData2();
    }, 
  methods:{
    /* selectAll(val){
      let allValues = []
    //保留所有值
    for (let item of this.options) {
        allValues.push(item.label)
    }
    // 用来储存上一次的值，可以进行对比
    const oldVal = this.oldOptions.length === 1 ? [] : this.oldOptions[1]

    // 若是全部选择
    if (val.includes('全选')) this.selected = allValues

    // 取消全部选中  上次有 当前没有 表示取消全选
    if (oldVal.includes('全选') && !val.includes('全选')) this.selected = []

    // 点击非全部选中  需要排除全部选中 以及 当前点击的选项 
    // 新老数据都有全部选中 
    if (oldVal.includes('全选') && val.includes('全选')) {
        const index = val.indexOf('全选')
        val.splice(index, 1) // 排除全选选项
        this.selected = val
    }

    //全选未选 但是其他选项全部选上 则全选选上 上次和当前 都没有全选
    if (!oldVal.includes('全选') && !val.includes('全选')) {
        console.log(11)
        if (val.length === allValues.length - 1) this.selected = ['全选'].concat(val)
    }

    //储存当前最后的结果 作为下次的老数据 
    this.oldOptions[1] = this.selected
    }, */
    getData1(){
        this.$http.get('http://localhost:8081/api/tabletitle').then((res1) => {
            this.tabletitle = res1.data
        }, (err) => {
        console.log(err)
        })
    },
    getData2(){
        this.$http.get('http://localhost:8081/api/data1').then((res2) => {
            console.log(res2.data)
            this.tablecontent = res2.data
        }, (err) => {
        console.log(err)
        })
    },
    checkAll(){
        if (this.tablecontent.length !== this.checked.length && this.isCheckedAll === true) {
        this.isCheckedAll = true
      } else {
        this.isCheckedAll = !this.isCheckedAll
      }
      if(this.isCheckedAll) {    //  全选
        this.checked = []
        this.tablecontent.forEach(function (data) {
          this.checked.push(data)
        }, this)
      } else {
        this.checked = [] //  取消全选
      }
    } 
   }
}
</script>

<style scoped>
  #fasttable{background:rgba(245,246,251,1);}
  #navtitle{height: 50px;margin-top: 0px; position: relative;}
  #navtitle ul{position: absolute;left: 20px;margin-left: 0;padding: 0;}
  #navtitle ul li{display: inline-block;text-align: center;width: 70px;color: white;}
  #tabletitle{background-color: white; margin:15px 20px 15px 20px;height: 80px;}
  #tabletype,#tablestatus,#tablename{float:left;margin-right: 50px;line-height: 80px}
  #tablename input{height: 30px;width: 200px;}
  #tablelist{background-color: white; margin:15px 20px 15px 20px;height: 500px;}
  #tablelisttitle{ width:100%;max-width: 87em;border:1px solid #dedede;margin-top: 15px;border-collapse: collapse;empty-cells: show;}
  #tablelisttitle th,#tablelisttitle td{height: 35px;border-top:1px solid #dedede;border-bottom:1px solid #dedede;padding: 0 10px}
  #tablelisttitle th{font-weight: bold;text-align: left;background: rgba(158, 188, 226, .2);white-space: nowrap;}
  #tablelisttitle tbody tr:nth-child(2n){background: rgba(158, 188, 226, .12);}
  #tablelisttitle td:nth-child(1){white-space: nowrap;}
  tr:hover{background:#efefef;}
  #adddelete input{display: inline-block;margin-top:20px;margin-bottom: 10px;width: 80px;height: 30px;background: white;}
</style>
