<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>Search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
        {{ name }}
    </div>
    <button @click="handleClick">Stop watching</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'

export default {
    name: 'Home3',
    setup() {
        const search = ref('')
        const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])

        // This runs whenever the watching ref is  updated
        const stopWatch = watch(search, () => {
            console.log('watch function ran')
        })

        // Runs initially when setup loads; if add search.value as argument, then runs it whenever the argument updates
        // will run whenever any value inside it updates; watches any dependencies used inside it
        const stopEffect = watchEffect(() => {
            console.log('watchEffect function ran', search.value)
        })

        const matchingNames = computed(() => {
            return names.value.filter((name) => name.includes(search.value))
        })

        // to stop the functions from watching, just need to call them
        const handleClick = () => {
            stopWatch()
            stopEffect()
        }

        return { names, search, matchingNames, handleClick }
    }
}
</script>

<style>

</style>
