<template>
  <div class="home">
    Home
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <input type="text" v-model="name">
    <button @click="age++">Increase Age</button>
  </div>
</template>

<script>
import { ref } from 'vue'
// @ is an alias to /src

// Using composition API now; setup will run before any other lifecycle hook
export default {
  name: 'HomeView',
  setup() {
    // This is how refs worked in options API
    /* this.$refs.age */

    //console.log(this)

    //const p = ref('hello')

    // Cant access p before its been returned
    //console.log(p, p.value)

    //console.log('setup')

    // These are not reactive values, unlike doing the same within data function
/*     let name = 'mario'
    let age = 30 */

    // These are now reactive values; just because its const doesnt mean it cant change. the const is the ref
    const name = ref('mario')
    const age = ref(30)
    
    const handleClick = () => {
        name.value = 'luigi'
        age.value = 35
      // name = 'luigi' // doesnt update the name in the template because the name variable is not reactive by default
/*       console.log(p, p.value)
      p.value.classList.add('test')
      p.value.textContent = 'hello, ninjas' */
    }

    return { name, age, handleClick}
  }
  // This is reactive data, so changes to them will change the variable in the template:
/*   data() {
    return {
      age: 40
    }
  } */

}
</script>
