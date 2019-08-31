<template>
<div>
  <header id="header">
    <div id="logo"><span style="font-weight: bold">Sky</span>Eye</div>
    <ul>
      <li v-for="item in headerlist">
        <router-link :to="{path:'/'+item.toKey}">{{item.title}}</router-link>
      </li>
    </ul>
    <div id="username">
        <i class="fa fa-user-circle-o"></i>
        <span id="username">username</span>
    </div>
    <div class="clear"></div>
  </header>
  <div id="content">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</div> 
</template>

<script>
export default {
  data(){
    return{
      headerlist:[
          {
            title:"仪表盘",
            toKey:'dashboard'
          },
          {
            title:"威胁通知",
            toKey:'thnotification'
          },
          {
            title:"调查分析",
            toKey:'seanalysis'
          },
          {
            title:"场景化分析",
            toKey:'dashboard'
          },
          {
            title:"日志检索",
            toKey:'logunlock'
          },
          {
            title:"资产",
            toKey:'assets'
          },
          {
            title:"报表",
            toKey:'report'
          },
          {
            title:"安全服务",
            toKey:'seservice'
          },
          {
            title:"系统管理",
            toKey:'sysmanage'
          },
          {
            title:"威胁情报中心",
            toKey:'thintelligence'
          }
      ]
    }
  }
}
</script>
<style>
ul li{list-style: none}
a{text-decoration: none; color: white}
header{ background: black; color: white;width: 100%;height: 50px;}
header #logo{width: 80px; text-align: center;line-height: 50px; float: left;font-size: large;margin-left: 20px;}
header ul{float:left;margin-top:0px;}
header ul li{display: inline-block;text-align: center; line-height: 50px;margin-right: 5px; color: white;font-size: small;width:80px;}
header #username{float: right;text-align: center;line-height: 50px;}
header ul li:hover{background-color: rgba(90,95,101,1)}
.clear{clear: both;}
.router-link-active{background: rgba(90,95,101,1)}
</style>
