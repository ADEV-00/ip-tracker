<template>
  <div
    class="info-wrapper"
    :class="{
      'info-wrapper-collapse': collapse,
    }"
  >
    <div class="info-title" @click="collapse = !collapse">Information</div>
    <div class="info-item" :class="{ 'info-item-collapse': collapse }">
      <p>IP:</p>
      <span>{{ data.query }}</span>
    </div>
    <div class="info-item" :class="{ 'info-item-collapse': collapse }">
      <p>country:</p>
      <span>{{ data.country }}</span>
    </div>
    <div class="info-item" :class="{ 'info-item-collapse': collapse }">
      <p>country code:</p>
      <span>{{ data.countryCode }}</span>
    </div>
    <div class="info-item" :class="{ 'info-item-collapse': collapse }">
      <p>region:</p>
      <span>{{ data.region }}</span>
    </div>
    <div class="info-item" :class="{ 'info-item-collapse': collapse }">
      <p>region name:</p>
      <span>{{ data.regionName }}</span>
    </div>
    <div class="info-item" :class="{ 'info-item-collapse': collapse }">
      <p>city:</p>
      <span>{{ data.city }}</span>
    </div>
    <div class="info-item" :class="{ 'info-item-collapse': collapse }">
      <p>latitude:</p>
      <span>{{ data.lat }}</span>
    </div>
    <div class="info-item" :class="{ 'info-item-collapse': collapse }">
      <p>longitude:</p>
      <span>{{ data.lon }}</span>
    </div>
    <div class="info-item" :class="{ 'info-item-collapse': collapse }">
      <p>timezone:</p>
      <span>{{ data.timezone }}</span>
    </div>
    <div class="info-item" :class="{ 'info-item-collapse': collapse }">
      <p>isp:</p>
      <span>{{ data.isp }}</span>
    </div>
    <div class="info-item" :class="{ 'info-item-collapse': collapse }">
      <p>as name:</p>
      <span>{{ data.as }}</span>
    </div>
    <div class="info-item" :class="{ 'info-item-collapse': collapse }">
      <p>mobile:</p>
      <span>{{ data.mobile }}</span>
    </div>
    <div class="info-item" :class="{ 'info-item-collapse': collapse }">
      <p>proxy:</p>
      <span>{{ data.proxy }}</span>
    </div>
    <div class="info-item" :class="{ 'info-item-collapse': collapse }">
      <p>hosting:</p>
      <span>{{ data.hosting }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Information",
  props: ["data"],
  data() {
    return {
      collapse: false,
    };
  },
  created() {
    console.log("Information data" + this.data);
  },
};
</script>

<style lang="scss" scoped>
.info-wrapper {
  width: 346px;
  height: 90%;
  background: #3a3939;
  box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.14);
  border-radius: 16px;
  margin-right: 29px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  z-index: 10;
  transition: all 0.2s ease-in;

  .info-title {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    letter-spacing: 0.055em;
    border-bottom: 2px solid #bb2025;
    color: white;
    width: 33%;
    padding-bottom: 7px;
    margin-bottom: 18px;
    cursor: pointer;
  }
  .info-item {
    display: flex;
    flex-direction: row;
    font-weight: 500;
    font-size: 15px;
    line-height: 17px;
    letter-spacing: 0.055em;
    text-transform: uppercase;
    padding-bottom: 10px;
    border-bottom: 2px solid #282828;
    margin-bottom: 10px;

    p {
      color: #ffffff;
      margin-right: 8px;
    }
    span {
      color: #be2026;
    }
  }
}
.info-wrapper-collapse {
  height: 4%;
}
.info-item-collapse {
  display: none !important;
}
</style>
