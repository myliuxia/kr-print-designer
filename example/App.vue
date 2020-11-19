<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  created() {
    let licenseInfo = {
      strCompanyName: '某某某公司',
      strLicense: '*****',
      strLicenseA: '',
      strLicenseB: '',
    }

    // 设置Lodop产品注册信息
    this.$lodop.setLicenses(licenseInfo)
  },

  methods: {},
}
</script>

<style>
#app {
  height: 100%;
}
</style>
