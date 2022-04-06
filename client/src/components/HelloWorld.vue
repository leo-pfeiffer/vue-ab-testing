<template>
  <div class="hello">
    <p id="counter"> {{ counter }}</p>
    <button id="increment-btn" @click="increment">Increment</button>
  </div>
</template>

<script>
import {
  experimentVariants,
  makeAdapter,
  makeExperiment,
} from "@/analytics/ab-testing";
import AlephBet from "alephbet";

let goal;

export default {
  name: 'HelloWorld',
  data() {
    return {
      counter: 0,
    }
  },
  mounted() {
    const name = "button color";
    const variants = experimentVariants[name];
    const adapter = makeAdapter();
    const experiment = makeExperiment(name, variants, adapter);
    goal = new AlephBet.Goal("button clicked", {unique: false});
    experiment.add_goal(goal);
  },
  methods: {
    increment: function() {
      goal.complete()
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