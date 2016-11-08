export default [
  {
    path: '/wikishit',
    name: 'landing-page',
    component: require('components/LandingPageView')
  },
  {
    path: '/',
    name: 'Home',
    component: require('./components/Home.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]
