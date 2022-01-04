<template>
  <div>
    <input v-model="customValue"/>
    <svg width="200" height="10">
      <rect x="0" y="0" width="100%" height="100%"/>
      <circle cx="100" :r="circleRadius" cy="5" fill="yellow" />
    </svg>
  </div>
</template>

<script>
module.exports = {
  name: 'my-circle',
  props: {
    defaultValue: '0',
    isRandomize: false
  },
  data() {
    return {
      customValue: null,
    }
  },
  computed: {
    circleRadius () {
      return '0'
    }
  }
}
</script>
