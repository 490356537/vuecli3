<template>
    <div @touchstart="touchStart($event)"
         @touchmove="touchMove($event)"
         @touchend="touchEnd($event)">
        <!--<router-link :to="{name:'view01'}" >view01</router-link>-->
        <a href="view01.html">view01</a>
        <br/>
        <a href="view02.html">view02</a>
        <Button type="primary" @click="upstore">{{author}}</Button>
        <VuexDemo></VuexDemo>
        <scroll ref="myscroll" @fatherMethod="fatherMethod">
            <ul>
                <li>哼╭(╯^╰)╮，我是插槽</li>
                <li>哼╭(╯^╰)╮，我是插槽</li>
                <li>哼╭(╯^╰)╮，我是插槽</li>
                <li>哼╭(╯^╰)╮，我是插槽</li>
                <li>哼╭(╯^╰)╮，我是插槽</li>
                <li>哼╭(╯^╰)╮，我是插槽</li>
                <li>哼╭(╯^╰)╮，我是插槽</li>
                <li>哼╭(╯^╰)╮，我是插槽</li>
                <li>哼╭(╯^╰)╮，我是插槽</li>
                <li>哼╭(╯^╰)╮，我是插槽</li>
            </ul>
        </scroll><br />
        <Button type="primary" @click="diao_scroll">调用子组件中事件</Button>
    </div>
</template>

<script>
    /* vue-cli-plugin-iview 插件调用 */
    import {post_demo} from "@/api/menber/info.js";
    import VuexDemo from '../../components/commons/VuexDemo.vue'
    import Scroll from '../../components/commons/Scroll.vue'

    export default {
        name: "index",
        data() {
            return {
                top: 0,
                startY: 0,
                touching: false
            }
        },
        components: {VuexDemo,Scroll},
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
            },
            touchStart(e) {
                console.log(e.targetTouches[0].pageY)
                //this.startY = e.targetTouches[0].pageY;
                // 开启下拉刷新状态
                this.touching = true
            },
            touchMove(e) {
                let diff = e.targetTouches[0].pageY - this.startY;
                console.log(diff)
                //diff = e.targetToc=uches[0].pageY - this.startY

            },
            touchEnd(e) {
                //this.startY = e.targetTouches[0].pageY;
                //console.log(e.targetTouches[0].pageY)
            },
            diao_scroll(){
                this.$refs.myscroll.diao();
            },
            fatherMethod() {
                console.log('测试');
            }
        },
    }
</script>

<style scoped></style>
