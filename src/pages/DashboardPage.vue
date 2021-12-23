<template>
  <div id="bodyWrap">
    <Header />

    <div class="col-12 d-none d-sm-flex col-md-6 d-flex flex-column justify-content-center position-relative overflow-hidden" ref="s3">
      <div class="product__backgroundsquare position-absolute"></div>
    </div>

    <!-- REST OF CONTENT FOR PRODUCT PAGE -->
    <div class="productPageContent">
      <div class="container p-4 product-section mt-5 ">
        <div class="row h-100">
          <div class="col-12 col-md-6 flex-column d-flex justify-content-center px-5 align-items-center text-center align-items-md-start text-md-start">
            <h1 class="display-4 fw-normal" style="font-size: 36px">{{ t("ProductPage.UnifiedReportingDashboard") }}</h1>
            <h4 class="py-4 lh-base fw-normal" style="font-size: 18px">{{ t("ProductPage.AllTransactionsAreConsolidated") }}</h4>
          </div>
          <div class="mt-5 mt-md-0 col-12 col-md-6 d-flex justify-content-center align-items-center position-relative">
            <transition-group name="fadeRight" tag="div">
              <div v-if="s3_dashboard" style="animation-duration: 1.5s">
                <img class="w-75 shadow br-20 dashboard-image" src="@/assets/img/dashboard.png" alt="" />
                <div class="dashboard-square position-absolute h-100 w-75 br-20"></div>
              </div>
            </transition-group>
          </div>
        </div>
      </div>
      <div class="section-separator"></div>
      <div class="container p-4 product-section mb-5 mb-md-0">
        <div class="mt-5 mt-md-0 row h-100">
          <div class="order-2 order-md-1 col-12 col-md-6 d-flex justify-content-center align-items-center">
            <img class="w-75 shadow br-20" src="@/assets/img/steps.png" alt="" />
          </div>
          <div class="order-1 order-md-2 col-12 col-md-6 flex-column d-flex justify-content-center align-item-center text-center px-5 align-items-md-start text-md-start">
            <h1 class="display-4 fw-normal" style="font-size: 36px">{{ t("ProductPage.EliminateFrictionAtCheckout") }}</h1>
            <h4 class="py-4 lh-base fw-normal" style="font-size: 18px">{{ t("ProductPage.CustomersCanMakePayments") }}</h4>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import { useI18n } from "vue-i18n";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Header, Footer },
  props: {
    sentinalName: {
      type: String,
      required: true,
    },
  },
  name: "DashboardPage",
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
  data() {
    return {
      s1_mastercard: false,
      s1_visa: false,
      s1_jcb: false,
      s2_firstchoice: false,
      s2_ktc: false,
      s2_krungsri: false,
      s3_dashboard: false,
      scrollPosition: 0,
      bottomScroll: false,
    };
  },
  methods: {
    s1AnimationToggle() {
      this.s1_mastercard = !this.s1_mastercard;
      this.s1_visa = !this.s1_visa;
      this.s1_jcb = !this.s1_jcb;
    },
    s2AnimationToggle() {
      this.s2_firstchoice = !this.s2_firstchoice;
      this.s2_ktc = !this.s2_ktc;
      this.s2_krungsri = !this.s2_krungsri;
    },
    updateScroll() {
      const s2 = this.$refs.s3 as any;
      if (s2 != null && s2 != undefined) {
        const result = s2.getBoundingClientRect().top - this.scrollPosition;
        this.scrollPosition = window.scrollY;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          // mobile
          if (result < -320) {
            if (!this.s3_dashboard) {
              this.s3_dashboard = true;
            }
          }
          if (result > -280) {
            if (this.s3_dashboard) {
              this.s3_dashboard = !this.s3_dashboard;
            }
          }
          if (result < -900) {
            this.s3_dashboard = !this.s3_dashboard;
          }
        }

        // desktop
        else {
          if (result < -1) {
            if (!this.s3_dashboard) {
              this.s3_dashboard = true;
            }
          }
          if (result < -1370) {
            if (this.s3_dashboard) {
              this.s3_dashboard = !this.s3_dashboard;
            }
          }
        }
      }
    },
  },
  mounted() {
    this.s1AnimationToggle();
    window.addEventListener("scroll", this.updateScroll);
  },
  destroy() {
    window.removeEventListener("scroll", this.updateScroll);
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "~vue2-animate/dist/vue2-animate.min.css";

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

/* CONTAINER STYLES COPIED FROM SCSS TO MAINTAIN VISUAL DIMENSIONS*/
.container {
  width: 1674px;
  padding: 0px 15px;
}
.productPageHeader {
  height: 90vh;
  background: rgb(2, 0, 36);
  background: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(227, 238, 255, 1) 0%, rgba(254, 254, 254, 1) 100%);
}
header {
  background-color: transparent;
  position: absolute;
  width: 100%;
}
.background--darkblue {
  background-color: #022159;
  border-radius: 20px;
}
.product-section {
  height: 700px;
}
.product-icon {
  height: 80px;
  width: 80px;
  background-color: #f1f7ff;
}
.productHeader__cell {
  width: 31%;
  height: 135px;
  margin: 5px;
  border-radius: 10px;
}
.placeholder__cell {
  width: 31%;
  height: 135px;
}
.productTable__box {
  width: 15%;
  border-radius: 20px;
  z-index: 1;
}
.productTable__box:nth-of-type(1n) {
  right: 0;
  top: 0;
  background-color: #1d51e5;
}
.productTable__box:nth-of-type(2n) {
  right: 17%;
  top: 0;
  background-color: #3e8bff;
}
.productTable__box:nth-of-type(3n) {
  right: 34%;
  top: 0;
  background-color: #012f85;
}
.productTable--mobile {
  z-index: 2;
}
.mobileTable__header {
  height: 107px;
}
.mobileTable__borderRight {
  border-right: 1px solid rgba(199, 199, 199, 0.2);
}
.mobileTable__borderBottom {
  border-bottom: 1px solid rgba(199, 199, 199, 0.2);
}
.productHeader__cell--shadow {
  box-shadow: -2px 2px 12px -8px gray;
}
.productHeader__cell--faded {
  background-image: linear-gradient(to bottom right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.7));
}
.product__backgroundsquare {
  height: 90%;
  width: 70%;
  border-radius: 20px;
  top: 0;
  right: 0;
  background-image: linear-gradient(to top right, rgba(255, 255, 255, 0), rgba(242, 242, 242, 1));
  z-index: -1;
}
.productTable .col-10 {
  z-index: 2;
}
.productTable .border-bottom {
  border-bottom: 1px solid rgba(217, 215, 215, 0.2) !important;
}
.productTable .border-end {
  border-right: 1px solid rgba(217, 215, 215, 0.2) !important;
}
.dashboard-square {
  top: 0;
  right: 0;
  z-index: -1;
  background-color: #ddeafd;
}
.br-20 {
  border-radius: 20px;
}
.product-section-steps {
  background: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(227, 238, 255, 1) 0%, rgba(254, 254, 254, 1) 100%);
}
.product-section-steps-line {
  width: 60px;
  height: 5px;
  background-color: #d6e6fb;
  margin: 2rem 0 2rem 2rem;
}
.steps-icon {
  width: 20%;
}

.section-separator {
  width: 80%;
  height: 2px;
  background-color: rgba(214, 230, 251, 0.5);
  margin: 0 auto;
  margin-top: 130px;
}

@media (max-width: 1739px) {
  .container {
    width: 1274px;
  }
}

@media (max-width: 1439px) {
  .container {
    width: 1200px;
  }
  .productTable__box {
    width: 18%;
  }
  .productTable div:first-of-type {
    width: 20%;
  }
  .productTable div:nth-child(2) {
    width: 80%;
  }
  .productTable__box:nth-of-type(1n) {
    right: 0;
  }
  .productTable__box:nth-of-type(2n) {
    right: 19%;
  }
  .productTable__box:nth-of-type(3n) {
    right: 38%;
  }
  .mobileTable__box {
    position: absolute;
    width: 150px;
    height: 175px;
    border-radius: 20px;
    z-index: 1;
  }
  .mobileTable__box:nth-of-type(1n) {
    right: 25%;
    top: 75%;
    background-color: #1d51e5;
  }
  .mobileTable__box:nth-of-type(2n) {
    right: 25%;
    top: 52%;
    background-color: #3e8bff;
  }
  .mobileTable__box:nth-of-type(3n) {
    right: 25%;
    top: 28%;
    background-color: #012f85;
  }
}

@media (max-width: 1199px) {
  .container {
    width: 980px;
  }
}

@media (max-width: 1000px) {
  .productHeader__cell {
    width: 28%;
    height: 75px;
  }
  .placeholder__cell {
    width: 28%;
    height: 75px;
  }
}

@media (max-width: 991px) {
  .container {
    width: 750px;
  }
}

@media (max-width: 769px) {
  .productHeader__cell {
    width: 30%;
    height: 75px;
  }
  .placeholder__cell {
    width: 30%;
    height: 75px;
  }
  .product-section {
    height: auto;
  }
}

@media (max-width: 767px) {
  .container {
    max-width: 400px;
    width: 100%;
    padding-left: 11px;
    padding-right: 11px;
  }
  .mobileTable__box {
    width: 100px;
    height: 175px;
  }
  .mobileTable__box:nth-of-type(1n) {
    right: 16%;
  }
  .mobileTable__box:nth-of-type(2n) {
    right: 16%;
  }
  .mobileTable__box:nth-of-type(3n) {
    right: 16%;
  }
}

@media (max-width: 400px) {
  .productPageHeader__img {
    margin-top: 20px;
  }
  .productPageHeader {
    margin-bottom: 50px;
  }
  .productHeader__cell {
    width: 28%;
  }
  .placeholder__cell {
    width: 28%;
  }
  .mobileTable__box:nth-of-type(1n) {
    right: 14%;
  }
  .mobileTable__box:nth-of-type(2n) {
    right: 14%;
  }
  .mobileTable__box:nth-of-type(3n) {
    right: 14%;
  }
}

@media (max-width: 350px) {
  .productTable--mobile p {
    font-size: 0.8rem;
  }

  .mobileTable__box:nth-of-type(1n) {
    right: 10%;
  }
  .mobileTable__box:nth-of-type(2n) {
    right: 10%;
  }
  .mobileTable__box:nth-of-type(3n) {
    right: 10%;
  }
}
</style>
