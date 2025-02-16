<template>
   <h3>
      Задача 2. Створити імітатор мессенджера. Є можлиість додавати/відображати
      повідомлення і ставити лайки .
   </h3>
   <div class="messages-wrapper">
      <message-component
         v-for="item of messages"
         :key="item.id"
         :el="item"
         @like="like"
         @dislike="dislike"
      />
   </div>
   <input
      type="text"
      placeholder="Type a new message"
      v-model.lazy.trim="message"
   />
   <button @click="sendMessage">Send</button>
</template>

<script>
import MessageComponent from "../task_02/MessageComponent.vue"
export default {
   name: "SecondTask",
   components: {
      MessageComponent,
   },
   data() {
      return {
         message: null,
         messages: [],
      }
   },
   methods: {
      sendMessage() {
         if (this.message) {
            this.messages.push({
               text: this.message,
               likes: 0,
               id: new Date().getTime(),
            })
            this.message = null
         }
      },
      like(id) {
         const message = this.messages.find((count) => count.id === id)
         message.likes++
      },
      dislike(id) {
         const message = this.messages.find((count) => count.id === id)
         message.likes--
      },
   },
}
</script>

<style lang="scss" scoped>
.messages-wrapper {
   display: flex;
   flex-direction: column;
   max-width: 300px;
   margin-bottom: 20px;
}
</style>
