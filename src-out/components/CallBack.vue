<template></template>

<script>
import Oidc from 'oidc-client'

new Oidc.UserManager()
  .signinRedirectCallback()
  .then(function () {
    debugger
    window.location = '/#/Home'
  })
  .catch(function (e) {})
export default {}
</script>
