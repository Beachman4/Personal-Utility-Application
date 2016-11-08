<template>
    <div>
        <div class="col-lg-3 panel">
            <ul>
                <li v-for="event in upcomingEvents">{{ event.name}} - {{event.date}} - {{ event.time }}</li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss">
    .panel {
        width: 200px;
        height: 300px;
        :hover {
            background-color: #3d4c65;
        }
    }
    ul, li {
        list-style: none;
    }
    li {
        color: #fff;
    }
</style>
<script>
    export default{
        data(){
            return{
                upcomingEvents: [
                    {
                        name: "Test",
                        date: "today",
                        time: "now"
                    },
                    {
                        name: "Test",
                        date: "today",
                        time: "now"
                    },
                    {
                        name: "Test",
                        date: "today",
                        time: "now"
                    }
                ]
            }
        },
        methods: {
            clickEvent: function()
            {

            }
        }
    }
</script>
