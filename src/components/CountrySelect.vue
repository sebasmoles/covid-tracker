<template>
    <select @change="onChange()" v-model="selected" class="mt-10 mb-10 block w-full border p-4 rounded">
        <option value="0">Select a country</option>
        <option v-for="country in countries" :value="country.ID">
            {{country.Country}}
        </option>
    </select>
</template>

<script>
    export default {
        name: 'CountrySelect',
        props: ['countries'],
        data () {
            return {
                selected: 0
            }
        },
        methods: {
            onChange() {
                if (this.selected != 0) {
                    const country = this.countries.find((item) => item.ID === this.selected); 
                    this.$emit('get-country-data', country);
                }
            }
        }
    }
</script>