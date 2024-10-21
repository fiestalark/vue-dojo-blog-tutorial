<template>
  <div class="home">
    Home
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
// @ is an alias to /src

// Using composition API now; setup will run before any other lifecycle hook
export default {
  name: 'HomeView',
  setup() {
    console.log('setup')

    // These are not reactive values, unlike doing the same within data function
    let name = 'mario'
    let age = 30
    
    const handleClick = () => {
      console.log('You clicked me')
    }

    return { name, age, handleClick }
  }
  // This is reactive:
/*   data() {
    return {
      age: 40
    }
  } */

}
</script>
