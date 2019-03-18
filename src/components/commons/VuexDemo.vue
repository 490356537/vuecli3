<template>
    <div>
        <h3>这里是子组件</h3>
        <div>VuexDemoText: {{msg}}</div>
        <Button type="primary" @click="clickHandler">修改父组件文本</Button>
        <button type="button" @click="clickHandler2">修改自己文本</button>
    </div>
</template>

<script>
    import store from "../../store";
    //import store from 'vuex'

    export default {
        name: "VuexDemo",
        computed:{
            msg(){
                return store.state.name;
            }
        },
        methods: {
            clickHandler(){
                //this.$store.commit('newName', 'upButText');
                store.commit("newName", "子组件修改父组件后的文本");
            },
            clickHandler2(){
                store.commit("newName", "子组件修改自己后的文本");
            }
        },
        store
    }

</script>

<style scoped>

</style>
