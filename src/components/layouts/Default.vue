<template>
  <div class="layout-wrapper">
    <div class="navbar-wrapper">
      <div class="navbar">
        <label for>Type ip address here</label>
        <input type="text" name="ip-input" id="ip" class="input-ip" :placeholder="ip" />
      </div>
    </div>
    <div class="information-wrapper">d</div>
  </div>
</template>

<script>
export default {
  name: "Default",
  data() {
    return {
      ip: "232.232.0.12"
    };
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
  .information-wrapper {
    width: 100%;
    height: 83%;
  }
}
</style>