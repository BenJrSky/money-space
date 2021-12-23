<template>
  <div id="bodyWrap">
    <div class="demoPage">
      <Header />
      <div class="demoSection">
        <div class="container">
          <div class="wrapper">
            <div class="titleBlock">
              <span class="pageTitle">{{ t("demoPage.pageTitle") }}</span>
            </div>
            <div class="contentBlock">
              <div class="demoInfo">
                <div class="productCard">
                  <div class="name">
                    <span>{{ t("demoPage.productCard.name") }}</span>
                  </div>
                  <div class="description">
                    <p>{{ t("demoPage.productCard.description") }}</p>
                  </div>
                  <a href="#" class="more">{{ t("demoPage.productCard.more") }}</a>
                  <div class="productInfo">
                    <div class="item dropdownItem">
                      <div class="head" :class="{ active: isActive(0) }">
                        <span class="title">{{ t("demoPage.item[0].title") }}</span>
                        <div class="btn">
                          <span @click="spanClicked(0)"></span>
                          <span @click="spanClicked(0)"></span>
                        </div>
                      </div>
                      <div class="content" :class="{ show: isActive(0) }">
                        <div class="in">
                          <p>{{ t("demoPage.item[0].para[0]") }}</p>
                          <p>{{ t("demoPage.item[0].para[1]") }}</p>
                          <p>{{ t("demoPage.item[0].para[2]") }}</p>
                        </div>
                      </div>
                    </div>
                    <div class="item dropdownItem">
                      <div class="head" :class="{ active: isActive(1) }">
                        <span class="title">{{ t("demoPage.item[1].title") }}</span>
                        <div class="btn">
                          <span @click="spanClicked(1)"></span>
                          <span @click="spanClicked(1)"></span>
                        </div>
                      </div>
                      <div class="content" :class="{ show: isActive(1) }">
                        <div class="in">
                          <p>{{ t("demoPage.item[1].para[0]") }}</p>
                        </div>
                      </div>
                    </div>
                    <div class="item dropdownItem">
                      <div class="head" :class="{ active: isActive(2) }">
                        <span class="title">{{ t("demoPage.item[2].title") }}</span>
                        <div class="btn">
                          <span @click="spanClicked(2)"></span>
                          <span @click="spanClicked(2)"></span>
                        </div>
                      </div>
                      <div class="content" :class="{ show: isActive(2) }">
                        <div class="in">
                          <p>{{ t("demoPage.item[2].para[0]") }}</p>
                        </div>
                      </div>
                    </div>
                    <div class="item dropdownItem">
                      <div class="head" :class="{ active: isActive(3) }">
                        <span class="title">{{ t("demoPage.item[3].title") }}</span>
                        <div class="btn">
                          <span @click="spanClicked(3)"></span>
                          <span @click="spanClicked(3)"></span>
                        </div>
                      </div>
                      <div class="content" :class="{ show: isActive(3) }">
                        <div class="in">
                          <p>{{ t("demoPage.item[3].para[0]") }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="buy">
                    <button class="btnIconType5" @click="openmodal">
                      <span class="icon">
                        <img src="@/assets/img/logo_2.png" alt="logo" />
                      </span>
                      <san class="text">{{ t("demoPage.buy.text") }}</san>
                    </button>
                    <span class="cost"
                      ><span>{{ t("demoPage.buy.cost1") }}</span
                      >{{ t("demoPage.buy.cost2") }}</span
                    >
                  </div>
                </div>
              </div>
              <div class="demoSlider scrollSlider">
                <div class="main scrollBlock mCustomScrollbar _mCS_1 scroller" id="test-scroll" style="overflow-y: auto">
                  <div id="mCSB_1" class="mCS-light mCSB_vertical mCSB_inside" style="max-height: none;" tabindex="0">
                    <div id="mCSB_1_container" class="mCSB_container" dir="ltr">
                      <div class="inner">
                        <div class="item">
                          <div class="in">
                            <img src="@/assets/img/demo_image.jpg" alt="demo" class="mCS_img_loaded" />
                          </div>
                        </div>
                        <div class="item">
                          <div class="in">
                            <img src="@/assets/img/demo_image.jpg" alt="demo" class="mCS_img_loaded" />
                          </div>
                        </div>
                        <div class="item">
                          <div class="in">
                            <img src="@/assets/img/demo_image.jpg" alt="demo" class="mCS_img_loaded" />
                          </div>
                        </div>
                        <div class="item">
                          <div class="in">
                            <img src="@/assets/img/demo_image.jpg" alt="demo" class="mCS_img_loaded" />
                          </div>
                        </div>
                        <div class="item">
                          <div class="in">
                            <img src="@/assets/img/demo_image.jpg" alt="demo" class="mCS_img_loaded" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--                      <div id="mCSB_1_scrollbar_vertical" class="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical mCSB_scrollTools_onDrag" style="display: block;">-->
                    <!--                        <div class="mCSB_draggerContainer">-->
                    <!--                          <div id="mCSB_1_dragger_vertical" class="mCSB_dragger" style="position: absolute; min-height: 30px; display: block; height: 155px; max-height: 562px; top: 417px;">-->
                    <!--                            <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>-->
                    <!--                          </div>-->
                    <!--                          <div class="mCSB_draggerRail"></div>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                  </div>
                </div>
                <div class="preview">
                  <div :class="[scrollNo === 0 ? ['active'] : '']" class="item">
                    <img v-on:click="changeScrollBarPos(0, 0)" src="@/assets/img/demo_image.jpg" alt="demo" />
                  </div>
                  <div :class="[scrollNo === 1 ? ['active'] : '']" class="item">
                    <img v-on:click="changeScrollBarPos(348, 1)" src="@/assets/img/demo_image.jpg" alt="demo" />
                  </div>
                  <div :class="[scrollNo === 2 ? ['active'] : '']" class="item">
                    <img v-on:click="changeScrollBarPos(780, 2)" src="@/assets/img/demo_image.jpg" alt="demo" />
                  </div>
                  <div :class="[scrollNo === 3 ? ['active'] : '']" class="item">
                    <img v-on:click="changeScrollBarPos(1200, 3)" src="@/assets/img/demo_image.jpg" alt="demo" />
                  </div>
                  <div :class="[scrollNo === 4 ? ['active'] : '']" class="item">
                    <img v-on:click="changeScrollBarPos(1544, 4)" src="@/assets/img/demo_image.jpg" alt="demo" />
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="back">
                <a href="#" class="btnIconType6">
                  <span class="icon-arrow"></span>
                  <span class="text">{{t('demoPage.back.text')}}</span>
                </a>
              </div> -->
          </div>
        </div>
      </div>
    </div>
    <PaymentModal v-if="showModal" @close="showModal = false" />
    <Footer />
  </div>
</template>

<script lang="ts">
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import PaymentModal from "@/components/PaymentModal.vue";
import { useI18n } from "vue-i18n";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Header, Footer, PaymentModal },
  name: "PaymentDemoPage",
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
  mounted() {
    /* @ts-ignore */
    document.getElementById("test-scroll").addEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      isClicked: false,
      key: 0,
      scrollPosition: 0,
      scrollNo: 0,
      showModal: false,
    };
  },
  methods: {
    spanClicked(key: number) {
      this.key = key;
      this.isClicked = !this.isClicked;
    },
    isActive(key: number) {
      return this.isClicked && this.key === key;
    },
    handleScroll() {
      this.scrollPosition = window.scrollY;
    },
    changeScrollBarPos(pos: number, scrollNo: number) {
      this.scrollNo = scrollNo;
      /* @ts-ignore */
      document.getElementById("test-scroll").scrollTo({ top: pos, behavior: "smooth" });
    },
    openmodal() {
      if (this.showModal) {
        this.showModal = false;
        setTimeout(() => (this.showModal = true), 10);
      } else if (!this.showModal) {
        this.showModal = true;
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.show {
  display: block !important;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  cursor: pointer;
}
.scroller {
  scrollbar-width: thin;
}
</style>
