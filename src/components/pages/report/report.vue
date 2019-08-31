<template>
    <div id="report">
      <nav>
        <ul id="navname" >
          <li v-for="report in navname">
            <router-link :to="{path:'/report'+report.toUrl}">{{report.title}}</router-link>
          </li>
        </ul>
      </nav>
      <div id="table">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
</template>

<script>
// import VSelection from '../../base/selection'
// import elSelec from 'element-ui'
export default {
  data(){
   return {
     navname:[
      {
       title:"快速报表",
       toUrl:"/fastreport"
      },
      {
       title:"周期报表",
       toUrl:"/roundreport"
      },
      {
       title:"报表模板",
       toUrl:"/reportmodel"
      }
     ]
   }
  } 
}
</script>

<style scoped>
  nav{background:rgba(57,71,84,1);height: 60px;margin-top: 0px; position: relative}
  nav ul{position: absolute;left: 0px;margin: 0;padding: 0;}
  #navname li{display: inline-block;text-align: center;width: 80px;color: white;margin-left: 20px;line-height: 60px;margin-right: 30px}
  #navname li:hover{background: #c5c5c5}
  /* #report{background: rgba(245,246,251,1)} */
</style>
