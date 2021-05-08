<template>
  <div class="home">
    <carousel >
      <carousel-slide v-for="slide in slides" :key="slide" class="carousel-slider">
        <img :src="slide" :alt="slide">
      </carousel-slide>
    </carousel>
  </div>    
</template>

<script>
import UserService from '../services/user.service';
import Carousel from '../components/Carousel.vue';
import CarouselSlide from '../components/CarouselSlide.vue';

export default 
{
  name: 'Home',
  components:{
        Carousel,
        CarouselSlide,
  },
  data() {
    return {
      content: '',
      slides: [
                'https://picsum.photos/id/230/600/300',
                'https://picsum.photos/id/231/600/300',
                'https://picsum.photos/id/232/600/300',
                'https://picsum.photos/id/233/600/300',
                'https://picsum.photos/id/234/600/300',
                'https://picsum.photos/id/235/600/300',
                'https://picsum.photos/id/236/600/300',
            ],
      visibleSlide : 1,
    };
  },
  computed: {
    // currentUser() {
    //   return this.$store.state.auth.user;
    // },
    // campaignDataList (){
    //   return this.$store.state.campaigns;
    // },
    // filterMainDto(){
    //   let mainDto = [];
    //   for (let i=0; i<this.campaignDataList.length; i++){
    //     mainDto.push(this.campaignDataList[i].campaignMainDto)
    //   }
    //   return mainDto;
    // },
    // filterDetailDto(){
    //   let detailDto = [];
    //   for (let i=0; i<this.campaignDataList.length; i++){
    //     detailDto.push(this.campaignDataList[i].campaignDetailDto)
    //   }
    //   return detailDto;
    // }

  },
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>

<style>
    .home {
        display:flex;
        justify-content: center;
    }
    .carousel {
        position:relative;
        overflow: hidden;
        width:800px;
        height:500px;
        z-index:10;
    }
    .btn {
        padding:5px 10px;
        background-color:rgba(0,0,0,0.5);
        border:1px solid transparent;
        margin:5px 10px;
        color:#FFF;
        height:50px;
        width:50px;
        position:absolute;
        margin-top:-25px;
        z-index:2;
    }
    .btn:hover {
        cursor: pointer;
    }
    .btn:focus{
        outline:none;
    }
    .btn-next {
        top:50%;
        right:0;
    }
    .btn-prev {
        top:50%;
        left:0;
    }
    .carousel-slider {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    .carousel-slider img {
        width:100%;
        height:100%;
    }
</style>
