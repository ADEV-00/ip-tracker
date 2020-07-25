<template>
  <div class="layout-wrapper" v-if="ready">
    <div class="navbar-wrapper">
      <div class="navbar">
        <label for>Type ip address here</label>
        <input
          type="text"
          name="ip-input"
          id="ip"
          class="input-ip"
          :placeholder="data.query"
          v-model="query"
          v-on:keyup.enter="handleGetData"
        />
      </div>
    </div>
    <div class="information-container">
      <Information :data="data" />
    </div>
  </div>
</template>

<script>
import Information from "../information/Information";
export default {
  name: "Default",
  components: {
    Information
  },
  data() {
    return {
      query: "",
      data: [],
      ready: false
    };
  },
  methods: {
    handleGetData() {
      this.$http.get(`http://ip-api.com/json/${this.query}`).then(res => {
        this.data = res.data;
        this.ready = true;
        console.log(res.data);
      });
    }
  },
  created() {
    this.handleGetData();
  }
};
</script>

<style lang="scss" scoped>
.layout-wrapper {
  width: 100%;
  height: 100vh;
  background: #333333;
  display: flex;
  flex-direction: column;
  .navbar-wrapper {
    width: 100%;
    height: 17%;
    display: flex;
    justify-content: center;
    align-items: center;
    .navbar {
      width: 37%;
      height: 65%;
      background: #3a3939;
      box-shadow: 0px 6px 11px rgba(0, 0, 0, 0.25);
      border-radius: 13px;
      padding: 0 9px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      label {
        width: 100%;
        font-weight: 600;
        font-size: 11px;
        line-height: 13px;
        text-transform: uppercase;
        color: #ffffff;
      }
      input {
        max-width: 100%;
        height: 51px;
        background: #333333;
        border-radius: 13px;
        border: none;
        outline: none;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        padding-left: 15px;
        text-transform: uppercase;
        color: #bb2026;
        &::placeholder {
          color: #bb2025;
        }
      }
    }
  }
  .information-container {
    width: 100%;
    height: 83%;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
