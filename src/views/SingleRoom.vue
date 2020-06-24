<template>
  <div>
    <p>aaa</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      singleRoom: {
        room: {},
      },
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
          }
        });
    },
  },
  created() {
    this.getSingleRoom();
  },
};
</script>
