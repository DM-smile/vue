<template>
   <div class="card">
      <div class="header">
         <slot name="header" :workersNum="workersList.length" :shownWokkers="perPage">
            <h1>{{ title }}</h1>
         </slot>
      </div>
      <div class="content">
         <slot name="list">
            <component
               :is="currentListView"
               :startIndex="startIndex"
               :currentPageWorkersList="currentPageWorkersList"
            />
         </slot>
      </div>

      <div class="footer">
         <component
            :is="buttonsType"
            :workersNum="workersNum"
            :perPage="perPage"
            :currentPage="currentPage"
            @updatePage="currentPage = $event"
         />
      </div>
   </div>
</template>
<script>
import ButtonsComp from './elements/ButtonsComp.vue'
import ButtonsArraysComp from './elements/ButtonsArrowsComp.vue'
import WorkersListDefault from './elements/WorkersListDefault.vue'
import WorkersListExp from './elements/WorkersListExp.vue'
export default {
   name: 'PaginatedComp',
   data() {
      return {
         currentPage: 1,
         initialPageIndex: 1,
      }
   },
   props: {
      title: {
         type: String,
         default: 'Список працівників',
      },
      workersList: {
         type: Array,
         default: () => [],
      },
      perPage: {
         type: Number,
         default: 10,
      },
      listMode: {
         pype: Number,
         default: 1,
      },
      buttonsMode: {
         pype: Number,
         default: 1,
      },
   },
   computed: {
      workersNum() {
         return this.workersList.length
      },
      startIndex() {
         return (this.currentPage - 1) * this.perPage + 1
      },
      currentPageWorkersList() {
         const endIndex = this.startIndex - 1 + this.perPage
         return this.workersList.slice(this.startIndex - 1, endIndex)
      },
      currentListView() {
         switch (this.listMode) {
            case 1:
               return WorkersListDefault
            case 2:
               return WorkersListExp
            default:
               return WorkersListDefault
         }
      },
      buttonsType() {
         switch (this.buttonsMode) {
            case 1:
               return ButtonsComp
            case 2:
               return ButtonsArraysComp
            default:
               return ButtonsComp
         }
      },
   },
}
</script>

<style lang="scss" scoped></style>
