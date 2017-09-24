<template>
  <div>
    <Tabs>
        <TabPane label="标签一" name="name1">标签一的内容</TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
    </Tabs>
    <router-view></router-view>
  </div>
</template>
<script>
// import pageOne from './pageOne.vue'
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  methods: {
    goDetail (str) {
      this.$router.push({name: str})
    }
  }
}
</script>
