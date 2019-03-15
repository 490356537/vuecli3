<template>
    <div>
        <!--<router-link :to="{name:'view01'}" >view01</router-link>-->
        <a href="view01.html">view01</a><br/>
        <a href="view02.html">view02</a><br/>
        出来不起爱大佬?..12311
        <Button type="primary">Button</Button>
        <Button type="primary">Button</Button>
        <Button type="primary">Button</Button>
    </div>
</template>

<script>
    /* vue-cli-plugin-iview 插件调用 */
    import '../../plugins/iview.js'
    import {post_demo} from "@/api/menber/info.js";
    export default {
        name: "index",
        mounted() {
            //let _this = this;
            const params = {};
            post_demo(params).then(res => {
                //console.log(res);
            });
        }
    }
</script>

<style scoped></style>
