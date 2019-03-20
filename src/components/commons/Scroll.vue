<template>
    <div class="nishishui">
        <slot></slot>
        <Button type="primary" @click="scrollclick">scroll_click</Button>
    </div>
</template>

<script>
    export default {
        name: "Scroll",
        methods:{
            diao(){
                console.log('父组件调子组件事件');
            },
            scrollclick(){
                this.$emit('fatherMethod');
            }
        }
    }
</script>

<style scoped>

</style>
