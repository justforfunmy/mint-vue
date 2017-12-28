import Vue from 'vue'
import Router from 'vue-router'
// import home from '../views/home.vue'
// import toast from '../views/toast.vue'
// import indicator from '../views/Indicator.vue'

Vue.use(Router)
const scrollBehavior = (to, from, savePosition) => {
  if (savePosition) {
    return savePosition
  } else {
    return {
      x: 0,
      y: 0
    }
  }
}
export default new Router({
  scrollBehavior,
  routes: [
    {
      path:'/',
      component:()=>import('../views/home.vue'),
      name:'home'
    },
    {
      path:'/toast',
      component:()=>import('../views/toast.vue'),
      name:'toast'
    },
    {
      path:'/indicator',
      component:()=>import('../views/indicator.vue'),
      name:'indicator'
    },
    {
      path:'/messageBox',
      component:()=>import('../views/messageBox.vue'),
      name:'messageBox'
    },
    {
      path:'/actionSheet',
      component:()=>import('../views/actionSheet.vue'),
      name:'actionSheet'
    },
    {
      path:'/popup',
      component:()=>import('../views/popup.vue'),
      name:'popup'
    },
    {
      path:'/swipe',
      component:()=>import('../views/swipe.vue'),
      name:'swipe'
    },
    {
      path:'/lazyLoad',
      component:()=>import('../views/lazyLoad.vue'),
      name:'lazyLoad'
    },
    {
      path:'/range',
      component:()=>import('../views/range.vue'),
      name:'range'
    },
    {
      path:'/progress',
      component:()=>import('../views/progress.vue'),
      name:'progress'
    },
    {
      path:'/picker',
      component:()=>import('../views/picker.vue'),
      name:'picker'
    },
    {
      path:'/es6',
      component:()=>import('../views/es6.vue'),
      name:'es6'
    },
    {
      path:'/others',
      component:()=>import('../views/others.vue'),
      name:'others'
    },
    {
      path:'/deconstruction',
      component:()=>import('../views/deconstruction.vue'),
      name:'deconstruction'
    },
    {
      path:'/symbol',
      component:()=>import('../views/symbol.vue'),
      name:'symbol'
    },
    {
      path:'/class',
      component:()=>import('../views/class.vue'),
      name:'class'
    },
    {
      path:'/promise',
      component:()=>import('../views/promise.vue'),
      name:'promise'
    }
  ]
})
