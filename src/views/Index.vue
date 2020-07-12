<template>
  <div class="Home">
    <div class="">
      <div class="banner">
        <div class="logo bgCover"></div>
      </div>
      <section>
        <ul class="roomList" >
          <li v-for="item in rooms" :key="item.id">
            <a href="#" @click.prevent='goSingleRoom(item.id)'>
              <div class="roomList_bg bgCover"
                :style="{backgroundImage: `url(${item.imageUrl})`}">
              </div>
              <p>{{ item.name }}</p>
            </a>
          </li>
        </ul>
      </section>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Footer,
  },
  data() {
    return {
      rooms: [],
    };
  },
  methods: {
    getRoom() {
      const vm = this;
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ZB0LjHMbZlbFBIEyazxg63gLCx46BoPzkOK3lm3PAdxOfWfP78ejlwXxIvtE',
      };
      vm.$http.get('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms', { headers })
        .then((res) => {
          if (res.data.success) {
            vm.rooms = res.data.items;
          }
        });
    },
    goSingleRoom(id) {
      this.$router.push(`/singleRoom/${id}`);
    },
  },
  created() {
    this.getRoom();
  },
};
</script>
<style lang="scss" scoped>
  .Home{
      min-height: 100%;
      padding-bottom: 100px;
      position: relative;
      box-sizing: border-box;
  }
  .banner{
    background-image: url(../assets/imgs/homepage_banner.svg);
    background-size: cover;
    background-position: center center;
    height: 448px;
    padding-top:98px;
  }
  .bgCover{
    background-size: cover;
    background-position: center center;
  }
  .logo{
    background-image: url(../assets/imgs/homepage_logo.svg);
    width: 341px;
    height: 52px;
    margin:0 auto;
  }
  section{
    margin:28px auto;
  }
  .roomList{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin:0 auto;
    li{
      width: 20%;
      margin-left: 40px;
      margin-right: 40px;
      &:nth-child(n+4) {
        margin-top:45px;
      }
      @media (min-width: 480px) and (max-width: 768px) {
        width: 30%;
        &:nth-child(n+4){
          margin-top: 0;
        }
        &:nth-child(n+1){
          margin-top:45px;
        }
      }
      @media (max-width: 479px) {
        width: 70%;
        margin-left: 20px;
        margin-right: 20px;
        &:nth-child(n+1){
          margin-top:0px;
        }
      }
      &:hover{
        .roomList_bg,p{
          transform: scale(1.1,1.1);
        }
      }
      a{
        text-decoration: none;
        color:black;
      }
      p{
        margin-top:25px;
        transition:.8s;
      }
    }
    &_bg{
      margin:0 auto;
      border-left: 5px solid rgba($color: #495156, $alpha: 0.6);
      width: 180px;
      height: 198px;
      transition:.8s;
      @media (max-width: 479px) {
        width: 260px;
        height: 278px;
        margin-top:30px;
      }
    }
  }

</style>
