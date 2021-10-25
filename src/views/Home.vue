<template>
  <main v-if="!loading ">
    <DataTitle :title="title" :dataDate="dataDate"/>

    <DataBoxes :stats="stats" />

    <CountrySelect :countries="countries" @get-country-data="getCountryData" />

    <div v-if="stats.Country" class="flex justify-center">
      <button @click="clearCountryData" class="bg-blue-900 text-white rounded p-4 mb-10 hover:bg-blue-600">Clear country</button>
    </div>
  </main>
  <main v-else class="flex justify-center">
    <img :src="loadingImage" />
  </main>
</template>

<script>
  import DataTitle from '../components/DataTitle.vue';
  import DataBoxes from '../components/DataBoxes.vue'
  import CountrySelect from '../components/CountrySelect.vue'

  export default {
    name: 'Home',
    components: {
      DataTitle,
      DataBoxes,
      CountrySelect
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
      },
      getCountryData(country) {
        this.stats = country;
        this.title = country.Country;
      },
      async clearCountryData() {
        this.loading = true;
        const data = await this.fetchCovidData();
        this.title = 'Global';
        this.stats = data.Global;
        this.loading = false;
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
