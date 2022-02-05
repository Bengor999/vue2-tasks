<template>
    <div class="inputCircle"
      v-for='input in inputs'
      :key="input.id"
      :input = "input" 
      >
 
        <input
          type="text" 
          v-model="input.variableValue"
          :min="this.minHeight"
          :max="this.maxHeight"
          @input="resettingTheValue($event)"
        />
        <input
          class="styled-slider"
          type="range"
          :min="this.minHeight"
          :max="this.maxHeight"
          v-model="input.variableValue"
        />

    </div>
</template>

<script>
export default {
  //Прокидываем пропсы массива постов
  props: {
    inputs: {
      type: Array,
      required:true,
    }
  },
  
  data() {
    return {
      //максимальные и минимальные значения бегунка импута
      minHeight: 0,
      maxHeight: 1000,
    }
  },
  methods: {
    //Сброс до начального значения
    resettingTheValue ($event) {
      // console.log($event);
      
      if ($event.target.value === "-") {

        for (let index = 0; index < this.inputs.length; index++) {
          const element = this.inputs[index].variableValue;
          if (element === "-") {
            this.inputs[index].variableValue = this.inputs[index].firstValue
          }
        }
        // $event.target.value = input.firstValue
      }
      
    },

  },
}
</script>
<style scoped>
.inputCircle {
  display: flex;
  align-items: center;
}
input[type="number"] {
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
  appearance: textfield;
}
 
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
	display: none;
}

.styled-slider {
  width: 200px;
  height: 10px;
}
    input[type=range].styled-slider {
  height: 2.2em;
  -webkit-appearance: none;
}

input[type=range].styled-slider.slider-progress {
  --range: calc(var(--max) - var(--min));
  --ratio: calc((var(--value) - var(--min)) / var(--range));
  --sx: calc(0.5 * 2em + var(--ratio) * (100% - 2em));
}

input[type=range].styled-slider:focus {
  outline: none;
}

input[type=range].styled-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 2em;
  height: 2em;
  border-radius: 1em;
  background: yellow;
  border: none;
  box-shadow: 0 0 2px black;
  margin-top: calc(max((1em - 1px - 1px) * 0.5,0px) - 2em * 0.5);
}

input[type=range].styled-slider::-webkit-slider-runnable-track {
  height: 1em;
  border: 1px solid #000;
  border-radius: 0.5em;
  background: #000;
  box-shadow: none;
}
input[type=range].styled-slider::-webkit-slider-thumb:hover {
  background: yellow;
}

input[type=range].styled-slider:hover::-webkit-slider-runnable-track {
  background: #000;
  border-color: #000;
}

input[type=range].styled-slider::-webkit-slider-thumb:active {
  background: yellow;
}

input[type=range].styled-slider:active::-webkit-slider-runnable-track {
  background: #000;
  border-color: #000;
}

input[type=range].styled-slider.slider-progress::-webkit-slider-runnable-track {
  background: linear-gradient(yellow,yellow) 0/var(--sx) 100% no-repeat, #efefef;
}

input[type=range].styled-slider.slider-progress:hover::-webkit-slider-runnable-track {
  background: linear-gradient(yellow,yellow) 0/var(--sx) 100% no-repeat, #e5e5e5;
}

input[type=range].styled-slider.slider-progress:active::-webkit-slider-runnable-track {
  background: linear-gradient(yellow,yellow) 0/var(--sx) 100% no-repeat, #f5f5f5;
}

input[type=range].styled-slider::-moz-range-thumb {
  width: 2em;
  height: 2em;
  border-radius: 1em;
  background: yellow;
  border: none;
  box-shadow: 0 0 2px black;
}

input[type=range].styled-slider::-moz-range-track {
  height: max(calc(1em - 1px - 1px),0px);
  border: 1px solid #b2b2b2;
  border-radius: 0.5em;
  background: #efefef;
  box-shadow: none;
}

input[type=range].styled-slider::-moz-range-thumb:hover {
  background: yellow;
}

input[type=range].styled-slider:hover::-moz-range-track {
  background: #e5e5e5;
  border-color: #9a9a9a;
}

input[type=range].styled-slider::-moz-range-thumb:active {
  background: yellow;
}

input[type=range].styled-slider:active::-moz-range-track {
  background: #f5f5f5;
  border-color: #c1c1c1;
}

input[type=range].styled-slider.slider-progress::-moz-range-track {
  background: linear-gradient(yellow,yellow) 0/var(--sx) 100% no-repeat, #efefef;
}

input[type=range].styled-slider.slider-progress:hover::-moz-range-track {
  background: linear-gradient(yellow,yellow) 0/var(--sx) 100% no-repeat, #e5e5e5;
}

input[type=range].styled-slider.slider-progress:active::-moz-range-track {
  background: linear-gradient(yellow,yellow) 0/var(--sx) 100% no-repeat, #f5f5f5;
}

input[type=range].styled-slider::-ms-fill-upper {
  background: transparent;
  border-color: transparent;
}

input[type=range].styled-slider::-ms-fill-lower {
  background: transparent;
  border-color: transparent;
}

input[type=range].styled-slider::-ms-thumb {
  width: 2em;
  height: 2em;
  border-radius: 1em;
  background: yellow;
  border: none;
  box-shadow: 0 0 2px black;
  margin-top: 0;
  box-sizing: border-box;
}

input[type=range].styled-slider::-ms-track {
  height: 1em;
  border-radius: 0.5em;
  background: #efefef;
  border: 1px solid #b2b2b2;
  box-shadow: none;
  box-sizing: border-box;
}

input[type=range].styled-slider::-ms-thumb:hover {
  background: yellow;
}

input[type=range].styled-slider:hover::-ms-track {
  background: #e5e5e5;
  border-color: #9a9a9a;
}

input[type=range].styled-slider::-ms-thumb:active {
  background: yellow;
}

input[type=range].styled-slider:active::-ms-track {
  background: #f5f5f5;
  border-color: #c1c1c1;
}

input[type=range].styled-slider.slider-progress::-ms-fill-lower {
  height: max(calc(1em - 1px - 1px),0px);
  border-radius: 0.5em 0 0 0.5em;
  margin: -1px 0 -1px -1px;
  background: yellow;
  border: 1px solid #b2b2b2;
  border-right-width: 0;
}

input[type=range].styled-slider.slider-progress:hover::-ms-fill-lower {
  background: yellow;
  border-color: #9a9a9a;
}

input[type=range].styled-slider.slider-progress:active::-ms-fill-lower {
  background: yellow;
  border-color: #c1c1c1;
}




</style>
