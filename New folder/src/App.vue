<script setup>
import { ref } from 'vue'

const firstNumber = ref(1);
const secondNumber = ref(2);

const button = ref(null);

const compute = () => {
  const product = firstNumber.value * secondNumber.value;
  button.innerHTML = `The product is ${product}`;
  button.disabled = true;
};
</script>

<template>
  <h1>Compute Product</h1>
  <img src="https://cdn.theforage.com/vinternships/companyassets/ay2tsYxaTif7Nt6z7/AA4Bnq2tJHALwE8cg/1680718790218/pexels-photo-14197334.jpeg" alt="Vue logo">  

  <p>The first number is {{ firstNumber }}</p>
  <p>The second number is {{ secondNumber }}</p>
  <button @click="compute">Compute</button>
</template>
