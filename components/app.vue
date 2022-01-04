<template>
  <div>
    <b> default value for all: </b> <input type="text" v-model="defaultValue"/>
    <hr/>
    <my-circle
      :defaultValue="defaultValue"
      :isRandomize="isRandomizeDefaultValue"></my-circle>
    <!-- <my-circle
      :defaultValue="defaultValue"
      :isRandomize="isRandomizeDefaultValue"></my-circle> -->
    <br/>
    <button @click="addCircle">
      add another a circle component
    </button>
    <label>
      <input type="checkbox" v-model="isRandomizeDefaultValue" />
      randomize default value for circle
    </label>
  </div>
</template>

<script>
  const myCircle = httpVueLoader('./my-circle.vue')
  module.exports = {
    name: 'app-vue',
    data () {
      return {
        defaultValue: '10',
        isRandomizeDefaultValue: false,
        circleCounter: 1
      }
    },
    methods: {
      addCircle () {
        this.circleCounter++
      }
    },
    components: {
      myCircle
    }
  }
</script>
