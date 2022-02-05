<template>
  <div>
    <b> default value for all: </b> <input type="text" v-model="defaultValue"/>
    <hr/>
    <my-circle :inputs="inputs"/>
    <br/>
    <button @click="addCircle">
      add another a circle component
    </button>
    <label>
      <input class="checkbox" type="checkbox" />
      randomize default value for circle
    </label>
  </div>
</template>

<script>
  //Импортируем компонент
  import MyCircle from "@/components/MyCircle"

  // const myCircle = httpVueLoader('./my-circle.vue')
export default {
  //регистрируем импортированный компонент
  components: { MyCircle },
  data() {
    return {
      //Значение по умолчанию
      defaultValue: '100',
      //хз нахрена это
      circleCounter: 0,
      // //максимальные и минимальные значения бегунка импута
      // minHeight: 0,
      // maxHeight: 1000,
      //генерируемый массив импутов
      inputs: [],
    }
  },
  methods: {
    //добавление нового импута
    createInput () {
      const newInput = {
        id: Date.now(),
        variableValue: this.determineFirstValue(),
      }
      //добавляем в обьект зависимую от обьекта строку
      newInput.firstValue = newInput.variableValue,
      //добавляем полный обьект к массиву обьектов/импутов
      this.inputs.push(newInput);
    },
    //определяем чекбокс ДА/НЕТ
    determineFirstValue() {
      let checkbox = document.querySelector('.checkbox')
      if (checkbox.checked) {
        // если ДА то рандом значение умножить на тысячу и округлить
        return Math.floor(Math.random() * 1000);
      } else {
        //если НЕТ то дефолтное значение
        return this.defaultValue
      }
    },
  }

}
</script>
<style>
input[type="number"] {
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
  appearance: textfield;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
	display: none;
}
</style>

