<template>
  <main v-if="!loading ">
    <DataTitle :title="title" :dataDate="dataDate"/>

    <DataBoxes :stats="stats" />
  </main>
  <main v-else class="flex justify-center">
    <img :src="loadingImage" />
  </main>
</template>

<script>
  import DataTitle from '../components/DataTitle.vue';
  import DataBoxes from '../components/DataBoxes.vue'

  export default {
    name: 'Home',
    components: {
      DataTitle,
      DataBoxes
    },
    data() {
      return {
        loading: true,
        title: 'Global',
        dataDate: '',
        stats: {},
        countries: [],
        loadingImage: require('../assets/loading.gif')
      }
    },
    methods: {
      async fetchCovidData() {
        const res = await fetch('https://api.covid19api.com/summary');
        const data = await res.json();
        return data;
      }
    },
    async created() {
      const data = await this.fetchCovidData();

      this.dataDate = data.Date;
      this.stats = data.Global; 
      this.countries = data.Countries;
      this.loading = false;
    }
  }
</script>
