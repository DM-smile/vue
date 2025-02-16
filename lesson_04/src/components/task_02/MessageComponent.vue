<template>
   <div class="message">
      <div class="message-body">
         <span>{{ el.text }}</span>
         <div>
            <button @click="onLike">👍</button>
            <button @click="onDislike">👎</button>
         </div>
      </div>
      <span
         >❤️ <span>{{ el.likes }}</span></span
      >
      <hr />
   </div>
</template>

<script>
export default {
   name: "MessageComponent",
   props: {
      el: {
         type: Object,
         required: true,
      },
   },
   methods: {
      onLike() {
         this.$emit("like", this.el.id)
      },
      onDislike() {
         this.$emit("dislike", this.el.id)
      },
   },
}
</script>

<style lang="scss" scoped>
.message-body {
   display: flex;
   justify-content: space-between;
}
button {
   cursor: pointer;
}
</style>
