<template>
   <div class="buttons buttons--arrow">
      <v-btn :disabled="currentPage === 1" class="btn-arrow" @click="onSelectPage(currentPage - 1)">
         <font-awesome-icon :icon="['fas', 'arrow-left']" />
      </v-btn>
      <div class="num-page">{{ currentPage }}</div>
      <v-btn
         :disabled="currentPage === pagesNumber"
         class="btn-arrow"
         @click="onSelectPage(currentPage + 1)"
      >
         <font-awesome-icon :icon="['fas', 'arrow-right']" />
      </v-btn>
   </div>
</template>

<script>
export default {
   name: 'ButtonsArrowsComp',
   props: {
      workersNum: {
         type: Number,
         default: null,
      },
      perPage: {
         type: Number,
         default: 1,
      },
      currentPage: {
         type: Number,
         default: 1,
      },
   },
   computed: {
      pagesNumber() {
         return Math.ceil(this.workersNum / this.perPage)
      },
   },
   methods: {
      onSelectPage(pageNum) {
         if (pageNum > 0 && pageNum <= this.pagesNumber) {
            this.$emit('updatePage', pageNum)
         }
      },
   },
}
</script>

<style lang="scss" scoped>
.num-page {
   background-color: rgb(52, 78, 52);
   border-radius: 50%;
   padding: toRem(10);
   min-width: toRem(40);
   min-height: toRem(40);
   display: flex;
   justify-content: center;
   align-items: center;
   user-select: none;
}
</style>
