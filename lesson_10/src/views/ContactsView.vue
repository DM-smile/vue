<template>
   <h1>{{ sectionTitle }}</h1>
</template>

<script>
import { title } from '@/mixins/commonMixins'

export default {
   name: 'ContactsView',
   mixins: [title],
}
</script>

<style lang="scss" scoped></style>
