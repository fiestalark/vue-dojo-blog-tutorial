<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p> {{ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }} - {{ nameTwo }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
    name: 'Home',
    setup() {
        const ninjaOne = ref({ name: 'Mario', age: 30 })
        const ninjaTwo = reactive({ name: 'Luigi', age: 35 })

        const nameOne = ref('mario')
        const nameTwo = reactive('luigi')

        // Using refs need to use .value to return the property
        const updateNinjaOne = () => {
            ninjaOne.value.age = 40
        }

        // Using reactive dont need to use .value to return property of the reactive
        const updateNinjaTwo = () => {
            ninjaTwo.age = 45
            nameTwo = 'mario' // this doenst work; cant use primitive values with reactive
        }
        // Drawbacks to using reactive:
        /* 1. Can't use primitive values inside reactive 
            2. Refs will work better when creating external composition functions; 
            they retain their reactivity when exposed by these functions
        */

        return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo, nameTwo }
    }
}
</script>

<style>

</style>
