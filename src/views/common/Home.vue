<template>
  <div class="home">
    <h2>home page</h2>
    <el-button type="primary" @click="getUser()">获取用户信息</el-button>
    <el-button type="primary" @click="getMenu()">获取菜单信息</el-button>
  </div>
</template>

<script>
  import axios from 'axios'
  import mock from '@/mock/index.js';
  export default {
    name: 'Home',
    methods: {
      getUser(){
        axios.get("http://localhost:9001/user")
          .then(function (res) {
            console.log(JSON.stringify(res.data))
          }).catch(function (err) {
            alert(err)
        })
      },
      getMenu(){
        axios.get("http://localhost:9001/menu")
          .then(function (res) {
            console.log(JSON.stringify(res.data))
          }).catch(function (err) {
          alert(err)
        })
      }
    }
  }
</script>

<style>

</style>

