<template>
  <div class="home">
    Home
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
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

    console.log(this)

    const p = ref('hello')

    // Cant access p before its been returned
    console.log(p, p.value)

    console.log('setup')

    // These are not reactive values, unlike doing the same within data function
    let name = 'mario'
    let age = 30
    
    const handleClick = () => {
      console.log(p, p.value)
      p.value.classList.add('test')
      p.value.textContent = 'hello, ninjas'
    }

    return { name, age, handleClick, p }
  }
  // This is reactive:
/*   data() {
    return {
      age: 40
    }
  } */

}
</script>
