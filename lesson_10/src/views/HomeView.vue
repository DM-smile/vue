<template>
   <h1>{{ sectionTitle }}</h1>
</template>

<script>
import { title } from '@/mixins/commonMixins'

export default {
   name: 'HomeView',
   mixins: [title],
}
</script>

<style lang="scss" scoped></style>
