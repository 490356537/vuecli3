<template>
    <div>
        <!--<router-link :to="{name:'view01'}" >view01</router-link>-->

        <a href="view01.html">view01</a>
        <br/>
        <a href="view02.html">view02</a>
        <Button type="primary" @click="upstore">{{author}}</Button>
        <VuexDemo></VuexDemo>
    </div>
</template>

<script>
    /* vue-cli-plugin-iview 插件调用 */
    import {post_demo} from "@/api/menber/info.js";
    import VuexDemo from '../../components/commons/VuexDemo.vue'

    export default {
        name: "index",
        mounted() {
            const params = {};
            post_demo(params).then(res => {
                console.log('顺畅')
                console.log(res);
            }).catch((res) => {
                console.log('GG了' + res.status)
            });
        },
        computed: {
            author() {
                return this.$store.state.name
            }
        },
        methods: {
            upstore() {
                this.$store.commit('newName', 'upButText');
            }
        },
        components: {VuexDemo},
    }
</script>

<style scoped></style>
