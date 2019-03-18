<template>
    <div id="app">
        <div>99999999999999999999999999999{{author}}</div>
        <img src="./assets/logo.png" @click="upstore">
        <div>
            <p>
                If iView is successfully added to this project, you'll see an
                <code v-text="'<Button>'"></code>
            </p>
            <Button type="primary">Button</Button>
        </div>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app',
        components: {
            HelloWorld
        },
        computed: {
            author() {
                return this.$store.state.name
            }
        },
        methods: {
            upstore() {
                this.$store.commit('newName', '你吸纳过');
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
