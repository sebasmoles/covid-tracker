<template>
    <div class="text-center">
        <h2 class="text-3xl font-bold">{{title}}</h2>
        <h3 class="text-2xl mt-4 mb-10">{{timestamp}}</h3>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'DataTitle',
        props: ['title', 'dataDate'],
        computed: {
            timestamp: function () {
               return moment(this.dataDate).format('MMMM Do YYYY, h:mm:ss a');
            }
        }
    }
</script>