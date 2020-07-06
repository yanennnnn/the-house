<template>
  <div>
    <swiper :getTargetId='getTargetBg'></swiper>
    <div class="singleRoom">
       <div class="singleRoom_content">
        <div class="singleRoom_content_title">
          <h1>{{ roomInfo.name }}</h1>
          <span><img src="../assets/imgs/typcn-user.svg" alt="">
            {{ descriptionShort.GuestMax }}
          </span>
          <span><img src="../assets/imgs/fa-solid_bed.svg" alt="">
            {{ descriptionShort.Bed[0] }}
          </span>
          <span>
            <img src="../assets/imgs/uil-bath.svg" alt="" >
            {{ descriptionShort['Private-Bath']}}
          </span>
          <span><img src="../assets/imgs/geo-turf-size.svg" alt="">
            {{ descriptionShort.Footage }}m²
          </span>
        </div>
        <p class="singleRoom_content_des">{{ roomInfo.description }}</p>
        <div class="singleRoom_content_check">
          <font>
            check-in:{{ checkInAndOut.checkInEarly }}
            ~{{ checkInAndOut.checkInLate }}/
            check-out:{{ checkInAndOut.checkOut }}
          </font>
        </div>
        <div class="singleRoom_content_price">
          <font>
            Weekday(Mon - Thu):{{ roomInfo.normalDayPrice | currency }}
            /
            Weekend(Fri - Sun):{{ roomInfo.holidayPrice | currency }}
          </font>
        </div>
        <section class="singleRoom_content_amenities">
          <ul>
            <li :class="{'active':amenities['Mini-Bar']}">
              <i class="fas fa-glass-martini-alt"></i>
              <span>Mini bar</span>
            </li>
            <li :class="{'active':amenities['Wi-Fi']}">
              <i class="fa fa-wifi"></i>
              <span>Wifi</span>
            </li>
            <li :class="{'active':amenities['Smoke-Free']}">
              <i class="fas fa-smoking"></i>
              <span>Smoke</span>
            </li>
            <li :class="{'active':amenities['Air-Conditioner']}">
              <i class="fas fa-snowflake"></i>
              <span>AC</span>
            </li>
            <li :class="{'active':amenities['Room-Service']}">
              <i class="fas fa-concierge-bell"></i>
              <span>Room Service</span>
            </li>
            <li :class="{'active':amenities.Sofa}">
              <i class="fas fa-couch"></i>
              <span>Sofa</span>
            </li>
            <li :class="{'active':amenities['Pet-Friendly']}">
              <i class="fas fa-dog"></i>
              <span>Pets</span>
            </li>
            <li :class="{'active':amenities['Great-View']}">
              <i class="fas fa-mountain"></i>
              <span>Scenery</span>
            </li>
            <li :class="{'active':amenities.Television}">
              <i class="fas fa-tv"></i>
              <span>Television</span>
            </li>
            <li :class="{'active':amenities.Breakfast}">
              <i class="fas fa-utensils"></i>
              <span>Breakfast</span>
            </li>
            <li :class="{active:amenities.Refrigerator}">
              <i class="fas fa-thermometer-empty">
                </i><span>Refrigerator</span>
              </li>
            <li :class="{active:amenities['Child-Friendly']}">
              <i class="fas fa-baby"></i>
              <span>Children</span>
            </li>
          </ul>
        </section>
      </div>
      <div class="singleRoom_booking">
        <p></p>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
import swiper from '../components/Swiper.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    swiper,
    Footer,
  },
  data() {
    return {
      singleRoom: {},
      roomInfo: {},
      descriptionShort: {
        Bed: [],
      },
      checkInAndOut: {},
      amenities: {},
      getTargetBg: [],
    };
  },
  methods: {
    getSingleRoom() {
      const vm = this;
      const { id } = vm.$route.params;
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ZB0LjHMbZlbFBIEyazxg63gLCx46BoPzkOK3lm3PAdxOfWfP78ejlwXxIvtE',
      };
      const url = `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${id}`;
      vm.$http.get(url, { headers })
        .then((res) => {
          if (res.data.success) {
            vm.singleRoom = res.data;
            const room = res.data.room[0];
            vm.roomInfo = room;
            vm.getTargetBg = res.data.room[0].imageUrl;
            vm.descriptionShort = res.data.room[0].descriptionShort;
            vm.checkInAndOut = res.data.room[0].checkInAndOut;
            vm.amenities = res.data.room[0].amenities;
          }
        });
    },
  },
  created() {
    this.getSingleRoom();
  },
};
</script>
<style lang="scss" scoped>
  .singleRoom{
    display: flex;
    justify-content:space-between;
    margin:24px 42px;
    &_content{
      margin-right: 72px;
      &_title{
        display: flex;
        h1{
          display: inline-block;
          font-size: 30px;
          color: #4C5356;
          margin-right: 23px;
          vertical-align: middle;
          letter-spacing: 2px;
        }
        span{
          display: inline-block;
          color: #4C5356;
          font-size: 12px;
          align-self: center;
          margin-top: 8px;
        }
        span+span{
          margin-left: 18px;
        }
        img{
          vertical-align: middle;
          margin-bottom: 1px;
        }
      }
      &_des{
        text-align: left;
        margin-top: 32px;
        margin-bottom: 26px;
        line-height: 19px;
        font-size: 15px;
        letter-spacing: 2px;
      }
      &_check,&_price{
        text-align: left;
        margin-bottom: 10px;
        font{
          font-size: 14px;
          letter-spacing: 2px;
        }
      }
      &_amenities{
        margin-top: 56px;
        ul {
          display: flex;
          flex-wrap: wrap;
          li{
            color: #C2C2C2;
            font-size: 12px;
            width: 20%;
            text-align: left;
            &.active {
              color: #272E31;
            }
            i{
              margin-right: 2px;
            }
          }
          // li.active{
          //   color:red;
          // }
          li:nth-child(4n){
            margin-right: 5px;
          }
          li:nth-child(n+5){
            margin-top: 24px;
          }
        }
      }
    }
    &_booking{
      // width: 50%;
      margin-left: 72px;
    }
  }

</style>
