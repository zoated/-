export default defineAppConfig({
  pages: ['pages/index/index', 'pages/turntable/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  components: ['components/base_turntable/index'],
})
