<template>
   <div>
      <label>
         {{ label }}
         <input type="number" v-model="inputAge" :class="setColor" />
      </label>
   </div>
</template>

<script>
export default {
   name: "UserAgeInput",
   props: {
      label: {
         type: String,
         default: "Value",
      },
      modelValue: {
         type: Number,
         default: null,
      },
      colorStatusList: {
         type: Object,
         required: true,
      },
      modelModifiers: {
         default: () => ({}),
      },
   },
   computed: {
      inputAge: {
         get() {
            return this.modelValue
         },
         set(newValue) {
            if (this.modelModifiers.check) {
               if (newValue > 150 || newValue < 0) {
                  alert("Введено некоректний вік!")
                  newValue = 1
               }
            }
            this.$emit("update:modelValue", newValue)
         },
      },
      setColor() {
         if (!this.modelModifiers.setColor) return ""
         let val = this.modelValue
         if (val === null || val === 0) return ""
         if (val < this.colorStatusList.low) return "green"
         if (val <= this.colorStatusList.medium) return "yellow"
         return "orange"
      },
   },
}
</script>

<style lang="scss" scoped>
input {
   color: black;
   padding: 2px;
   border-radius: 5px;
}
.green {
   background-color: green;
}
.yellow {
   background-color: yellow;
}
.orange {
   background-color: orange;
}
</style>
