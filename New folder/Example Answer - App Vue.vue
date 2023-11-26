<script>

const msg = 'Compute Product'
const val1 = 23
const val2 = 4

  export default {
    data() {
      return {
        msg,
        val1,
        val2,
        displayProduct: false,
        product: val1 * val2
      }
    },
    methods: {
    compute() {
      this.displayProduct = true
    }
  }
  }

</script>

<template>
  <h1>{{ msg }}</h1>
  <img src="https://images.pexels.com/photos/14197334/pexels-photo-14197334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" height=300 width=200>
  <p>
    <b>Value 1:</b> {{ val1 }}<br>
    <b>Value 2:</b> {{ val2 }}
  </p>

  <p v-if="!displayProduct"><button @click=compute>Compute</button></p>
  <p v-if="displayProduct"><b>Product:</b> {{ product }}</p>
  
</template>


