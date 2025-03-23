<template>
   <div class="buttons">
      <v-btn
         size="small"
         class="buttons"
         variant="outlined"
         v-for="pageNum in pagesNumber"
         :key="pageNum"
         :disabled="pageNum === currentPage"
         @click="onSelectPage(pageNum)"
      >
         {{ pageNum }}
      </v-btn>
   </div>
</template>

<script>
export default {
   name: 'ButtonsComp',
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
         this.$emit('updatePage', pageNum)
      },
   },
}
</script>

<style lang="scss" scoped></style>
