<template>
    <div class="wrapper">
        <calendar></calendar>
        <calendar></calendar>
        <calendar></calendar>
        <calendar></calendar>
        <calendar></calendar>
        <calendar></calendar>
    </div>
</template>
<style>
    body{
        background-color:#2d333d;
    }
</style>
<script>
    import Calendar from './HomeComponents/Calendar.vue';
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            'calendar':Calendar
        }
    }
</script>
