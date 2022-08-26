<template>
  <div class="jinshuifa">
    <div class="device-bg">
      <i
        @click="btnClick()"
        ref="btn"
        code="2"
        class="btn_s"
        :class="[btnStatus ? 'btn_on' : 'btn_off']"
      ></i>
    </div>
    <div class="device-name">进水阀</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnStatus: "",
    };
  },
  watch: {
    openKey() {
      // 获取属性code
      let code = this.$refs.btn.getAttribute("code");
      // 转变成数字
      code = Number(code);
      // 获取目前开关的情况
      console.log(this.$store.state.btn.openKey);
      const index = this.$store.state.btn.openKey.indexOf(code);
      if (index === -1) {
        this.btnStatus = false;
      } else {
        this.btnStatus = true;
      }
    },
  },
  computed: {
    // 这里是拿到VueX的全局数据，打开的按钮
    openKey() {
      return this.$store.state.btn.openKey;
    },
  },
  methods: {
    // 控制按钮开关
    btnClick() {
      // 获取属性code
      let code = this.$refs.btn.getAttribute("code");
      // 转变成数字
      code = Number(code);
      // 获取目前开关的情况，根据情况切换，并保存到vuex里
      const index = this.$store.state.btn.openKey.indexOf(code);
      if (index === -1) {
        this.$store.commit("addCode", code);
        this.btnStatus = true;
      } else {
        this.$store.commit("delCode", index);
        this.btnStatus = false;
      }
      // console.log(this.$store.state.btn.openKey)
      // 事件总线触发流水事件
      this.$bus.$emit("waterEvent");
    },
  },
};
</script>

<style scoped>
.jinshuifa {
  display: flex;
  width: 80px;
  height: 73px;
  justify-content: space-between;
}
.jinshuifa .device-name {
  writing-mode: tb-rl;
  text-align: center;
}
.jinshuifa .device-bg {
  background: url(../../assets/images/shuifeiji/进水阀.png) no-repeat;
  width: 75px;
  height: 73px;
  background-size: 100% 100%;
}
.btn_s {
  width: 25px;
  height: 25px;
  cursor: pointer;
  z-index: 1;
  background-size: cover;
  position: absolute;
  bottom: 30%;
  left: 7%;
}
.btn_on {
  background-image: url(../../assets/images/shuifeiji/on.png);
}
.btn_off {
  background-image: url(../../assets/images/shuifeiji/off.png);
}
</style>