<template>
  <div>
    <!--<router-link :to="{name:'view01'}" >view01</router-link>-->
    <a href="view01.html">view01</a><br />
    <a href="view02.html">view02</a><br />
    出来不起爱大佬?..123
  </div>
</template>

<script>
import { post_demo } from "@/api/menber/info.js";

export default {
  name: "index",
  mounted() {
    let _this = this;
    const params = {};
    const serverSrc = "http://bwfw.x-punk.top/";
    post_demo(params, serverSrc).then(res => {
      console.log(res);
    });
  }
};
</script>

<style scoped></style>
