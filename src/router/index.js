import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import dashBorad from '../components/pages/dashBoard/dashBoard.vue'
import thNotification from '../components/pages/ThNotification/thNotification.vue'
import seAnalysis from '../components/pages/reAnalysis/reAnalysis.vue'
import scAnalysis from '../components/pages/scAnalysis/scAnalysis.vue'
import LogUnlock from '../components/pages/LogUnlock/LogUnlock.vue'
import assets from '../components/pages/assets/assets.vue'
import report from '../components/pages/report/report.vue'
import SeService from '../components/pages/SeService/seService.vue'
import sysManage from '../components/pages/sysManage/sysManage.vue'
import thIntelligence from '../components/pages/thIntelligence/thIntelligence.vue'
import fastReport from '../components/pages/report/reportlist/fastreport.vue'
import roundReport from '../components/pages/report/reportlist/roundreport.vue'
import reportModel from '../components/pages/report/reportlist/reportmodel.vue'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/', 
      redirect:'/report',
      component:report 
    },
    {
      path: '/dashboard',
      component: dashBorad
    },
    {
      path: '/thnotification',
      component: thNotification
    },
    {
      path: '/seanalysis',
      component: seAnalysis
    }, 
    {
      path: '/scanalysis',
      component: scAnalysis
    },
    {
      path: '/logunlock',
      component: LogUnlock
    },
    {
      path: '/assets',
      component: assets
    },
    {
      path: '/report',
      component: report,
      redirect:'/report/fastreport',
      children:[
        {
          path:'fastreport',
          component:fastReport
        },
        {
          path:'roundreport',
          component:roundReport
        },
        {
          path:'reportmodel',
          component:reportModel
        }
      ]
    },
    {
      path: '/seservice',
      component: SeService
    },
    {
      path: '/sysmanage',
      component: sysManage
    },
    {
      path: '/thintelligence',
      component: thIntelligence
    }
  ]
})
