<template>
  <div>
    <Tabs>
        <TabPane label="标签一" name="name1"></TabPane>
        <TabPane label="标签二" name="name2"></TabPane>
        <TabPane label="标签三" name="name3"></TabPane>
    </Tabs>
    <router-view></router-view>
  </div>
</template>
<script>
// import axios from 'axios'
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
  },
  mounted () {
    // axios.post('', {

    // })
    // .then((response) => {
    //   console.log(response)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })
  }
}
</script>
