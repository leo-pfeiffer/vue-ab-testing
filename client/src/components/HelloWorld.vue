<template>
  <div class="hello">
    <p id="counter"> {{ counter }}</p>
    <button id="increment-btn" @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increment: function() {
      this.counter++;
    }
  }
}
</script>

<style scoped>
#counter {
  font-size: xxx-large;
}

#increment-btn {
  border: none;
  padding: 15px 32px;
  font-size: x-large;
  margin: 4px 2px;
  cursor: pointer;
}

.is-blue {
  background-color: #34495e;
  color: white;
}

.is-green {
  background-color: #41b883;
  color: white;
}

</style>