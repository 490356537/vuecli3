<template>
    <div>hello I'm view01!!12<br/>

        <a href="index.html">主页1</a>
        <br/>
        <a href="view02.html">view02</a>
        <VuexDemo></VuexDemo>
    </div>
</template>

<script>
    import VuexDemo from '../../components/commons/VuexDemo.vue'

    export default {
        name: "view01",
        components: {VuexDemo},
    };
</script>

<style scoped></style>
