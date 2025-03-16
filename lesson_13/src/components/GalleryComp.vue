<template>
   <div class="gallery">
      <h2 class="title">Галерея</h2>
      <div class="photos">
         <div class="photo">
            <img
               class="ibg"
               src="https://content.skyscnr.com/m/1b51182679225810/original/GettyImages-147444574_doc.jpg?resize=1800px:1800px&quality=100"
               alt="#"
            />
         </div>
         <div class="photo">
            <img
               class="ibg"
               src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=pexels-asadphoto-457882.jpg&fm=jpg"
               alt="#"
            />
         </div>
         <div class="photo">
            <img
               class="ibg"
               src="https://www.trend.az/media/2016/07/04/beach_040716_1.jpg"
               alt="#"
            />
         </div>
         <div class="photo">
            <img
               class="ibg"
               src="https://www.openbusiness.ru/upload/iblock/6ae/h875h48959858h0g589.jpg"
               alt="#"
            />
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'GalleryComp',
}
</script>

<style lang="scss" scoped>
.photos {
   display: flex;
   gap: toRem(10);
   justify-content: space-evenly;
}
.photo {
   width: toRem(200);
}
</style>
