<template>
  <div>
    <footer>
    <ul class="footerList">
      <li><a href="#">Reservation</a></li>
      <li><a href="#">About TheHouse</a></li>
      <li><a href="#">FAQ</a></li>
      <li><a href="#">Contact us</a></li>
    </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
  footer{
    background: #495156;
  }
  .footerList{
    display: flex;
    justify-content: center;
    li{
      padding:14px 0 18px 0;
      position: relative;
      a{
        color:#EEF3F5;
        text-decoration: none;
        &:hover{
        color:#c5c7c9;
        }
      }
    }
    li+li{
      margin-left: 44px;
    }
    li+li::before{
      content: '';
      width: 5px;
      height: 5px;
      border-radius: 50%;
      position: absolute;
      background-color:#EEF3F5;
      left: -22px;
      bottom: 50%;
    }
  }
</style>
