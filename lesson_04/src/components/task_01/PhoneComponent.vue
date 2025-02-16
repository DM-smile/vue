<template>
   <img :src="phone" alt="image" />
</template>

<script>
export default {
   name: "PhoneComponent",
   props: {
      phone: {
         type: String,
         required: true,
      },
   },
}
</script>

<style lang="scss" scoped></style>
