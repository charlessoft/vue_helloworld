<template>
  <div class="hello">
    <h1>{{ props.msg }}</h1>

    <img src="https://online-azk8s.foxitcloud.com/pluginsdk/static/f0235b927fd9a450a8b83fb58d240550.5500a374.png">

  </div>
</template>
<script setup>
import { defineProps,ref } from 'vue'

const loading = ref(false)
const props = defineProps({
  msg: String,
})


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.long-button {
  width: 100%;
}
</style>
