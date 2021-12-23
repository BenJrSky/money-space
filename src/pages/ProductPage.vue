<template>
  <div id="bodyWrap">
    <Header />
    <!-- MAIN PAGE HERO SECTION AND GRAPHIC -->
    <div :ref="sentinalName" class="productPageHeader text-center text-sm-start">
      <div class="container h-100 w-100 d-flex align-items-center justify-content-center">
        <div class="row h-75 w-100 justify-content-between">
          <div class="col-12 col-md-5 mt-3 d-flex flex-column justify-content-center align-items-center align-items-md-start">
            <h1 class="text-primary display-4 fw-bold" style="font-size: 38px">{{ t("ProductPage.FinancialFlexibility") }}</h1>
            <h1 class="display-4 fw-bold">{{ t("ProductPage.AtYourFingertips") }}</h1>
            <h5 class="pt-3 fw-normal" style="font-size: 18px; line-height: 26px">{{ t("ProductPage.AllYourOnlinePayment") }}</h5>
          </div>

          <div class="productPageHeader__img mt-sm-5 col-12 col-md-7 col-lg-6 d-flex flex-column justify-content-start justify-content-md-center align-items-start position-relative overflow-hidden">
            <transition-group name="fadeLeft" tag="div" class="d-flex flex-column">
              <div class="row h-auto w-100 d-flex justify-content-center" v-if="s1_mastercard" style="animation-duration: 1s">
                <div class="productHeader__cell d-flex justify-content-center align-items-center"></div>
                <div class="productHeader__cell d-flex justify-content-center align-items-center productHeader__cell--faded"></div>
                <div class="productHeader__cell d-flex justify-content-center align-items-center bg-white productHeader__cell--shadow homeImage-c1">
                  <img class="w-50" src="@/assets/img/mastercard.png" alt="" />
                </div>
              </div>
              <div class="row h-auto w-100 d-flex justify-content-center" v-if="s1_visa" style="animation-duration: 1.3s">
                <div class="productHeader__cell d-flex justify-content-center align-items-center productHeader__cell--faded"></div>
                <div class="productHeader__cell d-flex justify-content-center align-items-center bg-white productHeader__cell--shadow homeImage-c2" style="animation-delay: 0.4s;">
                  <img class="w-50" src="@/assets/img/visa.png" alt="" />
                </div>
                <div class="placeholder__cell"></div>
              </div>
              <div class="row h-auto w-100 d-flex justify-content-center" v-if="s1_jcb" style="animation-duration: 1.5s">
                <div class="productHeader__cell d-flex justify-content-center align-items-center bg-white productHeader__cell--shadow homeImage-c3" style="animation-delay: 0.8s;">
                  <img class="w-50" src="@/assets/img/jcb.png" alt="" />
                </div>
                <div class="placeholder__cell"></div>
                <div class="placeholder__cell"></div>
              </div>
            </transition-group>
          </div>
        </div>
      </div>
    </div>

    <!-- REST OF CONTENT FOR PRODUCT PAGE -->
    <div class="productPageContent">
      <div class="container pb-5">
        <div class="row d-flex justify-content-between px-5">
          <div class="col-12 col-md-5">
            <div class="d-flex flex-column align-items-center text-center align-items-md-start text-md-start">
              <div class="product-icon d-flex justify-content-center align-items-center rounded-circle my-3">
                <i class="bi bi-cash-coin display-5 text-primary"></i>
              </div>
              <h4 class="my-3">{{ t("ProductPage.AcceptForeignCurrency") }}</h4>
              <h6 class="lh-base">{{ t("ProductPage.AsWellAsAcceptingPayments") }}</h6>
            </div>
          </div>
          <div class="col-12 col-md-5 mt-5 mt-md-0">
            <div class="d-flex flex-column align-items-center text-center align-items-md-start text-md-start">
              <div class="product-icon my-3 d-flex justify-content-center align-items-center rounded-circle">
                <i class="bi bi-lightning-charge-fill display-5 text-primary"></i>
              </div>
              <h4 class="mt-3">{{ t("ProductPage.HighSpeedPaymentProcessing") }}</h4>
              <br />
              <h6 class="lh-base">{{ t("ProductPage.OurPlatformIsArchitected") }}</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-5 pt-0 pt-md-5 product-section">
        <div class="row h-100 justify-content-between px-5">
          <div class="col-12 h-100 col-md-5 mt-3 d-flex flex-column justify-content-center align-items-center text-center align-items-md-start text-md-start">
            <h1 class="display-4 fw-normal" style="font-size: 38px">
              {{ t("ProductPage.Installment.bold") }} <br />
              {{ t("ProductPage.Installment.h1") }}
            </h1>
            <h5 class="my-5 fw-normal" style="font-size: 18px; line-height: 28px">{{ t("ProductPage.Installment.h5") }}</h5>
            <h4>{{ t("ProductPage.Installment.h4") }}</h4>
          </div>
          <div class="col-12 d-none d-sm-flex col-md-6 d-flex flex-column justify-content-center position-relative overflow-hidden" ref="s2">
            <transition-group name="fadeLeft" tag="div" class="d-flex flex-column">
              <div class="row justify-content-end" v-if="s2_firstchoice" style="animation-duration: 1s">
                <div class="productHeader__cell d-flex justify-content-center align-items-center bg-white productHeader__cell--shadow installmentImage-c1" style="animation-delay: 0.2s;">
                  <img class="w-50" src="@/assets/img/firstchoice.png" alt="" />
                </div>
              </div>
              <div class="row h-auto justify-content-center" v-if="s2_ktc" style="animation-duration: 1.3s">
                <div class="productHeader__cell d-flex justify-content-center align-items-center bg-white productHeader__cell--shadow installmentImage-c2" style="animation-delay: 0.4s;">
                  <img class="w-50" src="@/assets/img/ktc.png" alt="" />
                </div>
              </div>
              <div class="row h-auto justify-content-start" v-if="s2_krungsri" style="animation-duration: 1.5s">
                <div class="productHeader__cell d-flex justify-content-center align-items-center bg-white productHeader__cell--shadow installmentImage-c3">
                  <img class="w-50" src="@/assets/img/krungsri.png" alt="" />
                </div>
              </div>
            </transition-group>
            <div class="product__backgroundsquare position-absolute"></div>
          </div>
        </div>
      </div>
      <div class="container p-4 background--darkblue mt-5 product-section">
        <div class="container-fluid h-100 px-0 px-xl-5 d-flex flex-column justify-content-between">
          <div class="w-75 text-center mx-auto d-flex flex-column justify-content-center align-items-center">
            <h1 class="text-light mt-5 pt-3">{{ t("ProductPage.MonthlyPaymentOptions") }}</h1>
            <h6 class="text-secondary my-4">{{ t("ProductPage.OfferFlexiblePayment") }}</h6>
          </div>

          <!-- DESKTOP PRODUCT TABLE -->
          <div class="d-none d-lg-flex productTable row h-50 text-light mb-5 position-relative">
            <div class="col-2 border-end p-0 pt-5">
              <h6 class="pb-5 text-secondary">{{ t("ProductPage.CardBrand") }}</h6>
              <h5 class="py-2 border-bottom" style="font-size: 16px">{{ t("ProductPage.KTC") }}</h5>
              <h5 class="py-2 border-bottom" style="font-size: 16px">{{ t("ProductPage.KrungsriFirstChoice") }}</h5>
              <h5 class="py-2 pb-5" style="font-size: 16px">{{ t("ProductPage.KrungsriCard") }}</h5>
            </div>
            <div class="col-10 p-0 pt-5">
              <h6 class="pb-5 ps-3 text-secondary">{{ t("ProductPage.InstallmentTermLengths.text") }}</h6>
              <h5 class="py-2 ps-3 border-bottom fw-light" style="font-size: 16px">{{ t("ProductPage.InstallmentTermLengths.KTC") }}</h5>
              <h5 class="py-2 ps-3 border-bottom fw-light" style="font-size: 16px">{{ t("ProductPage.InstallmentTermLengths.KrungsriFirstChoice") }}</h5>
              <h5 class="py-2 ps-3 pb-5 fw-light" style="font-size: 16px">{{ t("ProductPage.InstallmentTermLengths.KrungsriCard") }}</h5>
            </div>
            <div class="productTable__box position-absolute h-100 pt-5 ps-4">
              <h6 class="pb-4 fw-light">{{ t("ProductPage.MonthlyMinimum.text1") }} &nbsp;&nbsp; {{ t("ProductPage.MonthlyMinimum.text2") }}</h6>
              <h5 class="py-2" style="font-size: 16px">{{ t("ProductPage.MonthlyMinimum.KTC") }}</h5>
              <h5 class="py-2" style="font-size: 16px">{{ t("ProductPage.MonthlyMinimum.KrungsriFirstChoice") }}</h5>
              <h5 class="py-2 pb-5" style="font-size: 16px">{{ t("ProductPage.MonthlyMinimum.KrungsriCard") }}</h5>
            </div>
            <div class="productTable__box position-absolute h-100 pt-5 ps-4">
              <h6 class="pb-4 fw-light">{{ t("ProductPage.InterestAbsorbedCustomer.text") }}</h6>
              <h5 class="py-2 mt-1" style="font-size: 16px">{{ t("ProductPage.InterestAbsorbedCustomer.KTC") }}</h5>
              <h5 class="py-2" style="font-size: 16px">{{ t("ProductPage.InterestAbsorbedCustomer.KrungsriFirstChoice") }}</h5>
              <h5 class="py-2 pb-5" style="font-size: 16px">{{ t("ProductPage.InterestAbsorbedCustomer.KrungsriCard") }}</h5>
            </div>
            <div class="productTable__box position-absolute h-100 pt-5 ps-4">
              <h6 class="pb-4 fw-light">{{ t("ProductPage.InterestAbsorbedMerchant.text") }}</h6>
              <h4 class="py-2 mt-1" style="font-size: 16px">{{ t("ProductPage.InterestAbsorbedMerchant.KTC") }}</h4>
              <h4 class="py-2" style="font-size: 16px">{{ t("ProductPage.InterestAbsorbedMerchant.KrungsriFirstChoice") }}</h4>
              <h4 class="py-2 pb-5" style="font-size: 16px">{{ t("ProductPage.InterestAbsorbedMerchant.KrungsriCard") }}</h4>
            </div>
          </div>

          <!-- MOBILE PRODUCT TABLE -->
          <div class="d-block d-lg-none position-relative">
            <div class="mobileTable__box"></div>
            <div class="mobileTable__box"></div>
            <div class="mobileTable__box"></div>
            <div class="row  productTable--mobile position-relative">
              <div class="row">
                <div class="col-6 mobileTable__borderRight">
                  <div class="row">
                    <div class="col-12 pt-5 px-0 mobileTable__header">
                      <p class="text-secondary">{{ t("ProductPage.CardBrand") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light fw-bold py-2 mobileTable__borderBottom">{{ t("ProductPage.KTC") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light fw-bold py-2 mobileTable__borderBottom">{{ t("ProductPage.KrungsriFirstChoice") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light fw-bold py-2">{{ t("ProductPage.KrungsriCard") }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-12 pt-5 ps-3 ps-5 mobileTable__header">
                      <p class="text-secondary">{{ t("ProductPage.InstallmentTermLengths.text") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light py-2 mobileTable__borderBottom ps-3">{{ t("ProductPage.InstallmentTermLengths.KTC") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light py-2 mobileTable__borderBottom ps-3">{{ t("ProductPage.InstallmentTermLengths.KrungsriFirstChoice") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light py-2 ps-3">{{ t("ProductPage.InstallmentTermLengths.KrungsriCard") }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6 mobileTable__borderRight">
                  <div class="row">
                    <div class="col-12 pt-5 px-0 mobileTable__header">
                      <p class="text-secondary">{{ t("ProductPage.CardBrand") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light fw-bold py-2 mobileTable__borderBottom">{{ t("ProductPage.KTC") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light fw-bold py-2 mobileTable__borderBottom">{{ t("ProductPage.KrungsriFirstChoice") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light fw-bold py-2">{{ t("ProductPage.KrungsriCard") }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-12 pt-5 ps-5 ps-5 mobileTable__header">
                      <p>{{ t("ProductPage.MonthlyMinimum.text") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light fw-bold py-2 mobileTable__borderBottom ps-5">{{ t("ProductPage.MonthlyMinimum.KTC") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light fw-bold py-2 mobileTable__borderBottom ps-5">{{ t("ProductPage.MonthlyMinimum.KrungsriFirstChoice") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light fw-bold py-2 ps-5">{{ t("ProductPage.MonthlyMinimum.KrungsriCard") }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6 mobileTable__borderRight">
                  <div class="row">
                    <div class="col-12 pt-5 px-0 mobileTable__header">
                      <p class="text-secondary">{{ t("ProductPage.CardBrand") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light fw-bold py-2 mobileTable__borderBottom">{{ t("ProductPage.KTC") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light fw-bold py-2 mobileTable__borderBottom">{{ t("ProductPage.KrungsriFirstChoice") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light fw-bold py-2">{{ t("ProductPage.KrungsriCard") }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-12 py-5 ps-5 mobileTable__header">
                      <p>{{ t("ProductPage.InterestAbsorbedCustomer.text") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light fw-bold py-2 mobileTable__borderBottom ps-5">{{ t("ProductPage.InterestAbsorbedCustomer.KTC") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light fw-bold py-2 mobileTable__borderBottom ps-5">{{ t("ProductPage.InterestAbsorbedCustomer.KrungsriFirstChoice") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light fw-bold py-2 ps-5">{{ t("ProductPage.InterestAbsorbedCustomer.KrungsriCard") }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mb-5">
                <div class="col-6 mobileTable__borderRight">
                  <div class="row">
                    <div class="col-12 pt-5 px-0 mobileTable__header">
                      <p class="text-secondary">{{ t("ProductPage.CardBrand") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light fw-bold py-2 mobileTable__borderBottom">{{ t("ProductPage.KTC") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light fw-bold py-2 mobileTable__borderBottom">{{ t("ProductPage.KrungsriFirstChoice") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light fw-bold py-2">{{ t("ProductPage.KrungsriCard") }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-12 pt-5 ps-5 mobileTable__header">
                      <p>{{ t("ProductPage.InterestAbsorbedMerchant.text") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light fw-bold py-2 mobileTable__borderBottom ps-5">{{ t("ProductPage.InterestAbsorbedMerchant.KTC") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light fw-bold py-2 mobileTable__borderBottom ps-5">{{ t("ProductPage.InterestAbsorbedMerchant.KrungsriFirstChoice") }}</p>
                    </div>
                    <div class="col-12 px-0">
                      <p class="text-light fw-bold py-2 ps-5">{{ t("ProductPage.InterestAbsorbedMerchant.KrungsriCard") }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid px-5 pt-5 product-section product-section-steps">
        <div class="container">
          <div class="row px-0 px-md-5 pt-5">
            <h1 style="font-size: 36px; line-height: 60px">{{ t("ProductPage.GetPaidIn") }}</h1>
            <h1 class="text-primary" style="font-size: 36px">{{ t("ProductPage.3simpleSteps") }}</h1>
            <div class="product-section-steps-line"></div>
          </div>
          <div class="row px-0 px-md-5 justify-content-between">
            <div class="col-12 col-md-4 mb-5 mb-md-0">
              <div class="col-12 h-100 p-4 pt-5 bg-white">
                <div class="row flex-column">
                  <div class="col-12 h-50">
                    <img class="steps-icon" src="@/assets/img/Icon_1.svg" alt="" />
                  </div>
                  <div class="col-12 h-50">
                    <h5 class="mt-5 mb-1 text-dark">
                      <strong>{{ t("ProductPage.UserScansOrUploadsTheQR") }}</strong>
                    </h5>
                    <h5 class="lh-base fw-normal text-dark">{{ t("ProductPage.TheUserScansOrUploads") }}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 mb-5 mb-md-0">
              <div class="col-12 p-4 pt-5 bg-white">
                <div class="row flex-column">
                  <div class="col-12 h-50">
                    <img class="steps-icon" src="@/assets/img/Icon_2.svg" alt="" />
                  </div>
                  <div class="col-12 h-50">
                    <h5 class="mt-5 mb-1 text-dark">
                      <strong>{{ t("ProductPage.UserConfirmsPayment") }}</strong>
                    </h5>
                    <h5 class="lh-base fw-normal text-dark">{{ t("ProductPage.TheUserVerifies") }}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 mb-5 mb-md-0">
              <div class="col-12 p-4 pt-5 bg-white">
                <div class="row flex-column">
                  <div class="col-12 h-50">
                    <img class="steps-icon" src="@/assets/img/icon_3.png" alt="" />
                  </div>
                  <div class="col-12 h-50">
                    <h5 class="mt-5 mb-1 text-dark">
                      <strong>{{ t("ProductPage.YouReceiveFunds") }}</strong>
                    </h5>
                    <h5 class="lh-base fw-normal text-dark">{{ t("ProductPage.FundsAreInstantly") }}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="container p-4 product-section mt-5 ">
        <div class="row h-100">
          <div class="col-12 col-md-6 flex-column d-flex justify-content-center px-5 align-items-center text-center align-items-md-start text-md-start">
            <h1 class="display-4 fw-normal font-prompt" style="font-size: 38px">{{ t("ProductPage.UnifiedReportingDashboard") }}</h1>
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
            <h1 class="display-4 fw-normal font-prompt" style="font-size: 38px">{{ t("ProductPage.EliminateFrictionAtCheckout") }}</h1>
            <h4 class="py-4 lh-base fw-normal" style="font-size: 18px">{{ t("ProductPage.CustomersCanMakePayments") }}</h4>
          </div>
        </div>
      </div> -->
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
  name: "ProductPage",
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
      this.scrollPosition = window.scrollY;

      const s2 = this.$refs.s2 as any;
      if (s2 != null && s2 != undefined) {
        const result = s2.getBoundingClientRect().top - this.scrollPosition;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          // mobile
          // section 1
          if (result < -560) {
            if (this.s1_mastercard) {
              this.s1AnimationToggle();
            }
          } else {
            if (!this.s1_mastercard) {
              this.s1AnimationToggle();
            }
          }

          // section 3
          if (result < -5170) {
            if (this.s3_dashboard) {
              this.s3_dashboard = false;
            }
          }

          if (result < -4100 && result > -4780) {
            if (!this.s3_dashboard) {
              this.s3_dashboard = true;
            }
          }

          if (result > -4780 && result < -4100) {
            if (!this.s3_dashboard) {
              this.s3_dashboard = true;
            }
          }

          if (result > -4100) {
            if (this.s3_dashboard) {
              this.s3_dashboard = false;
            }
          }
        } else {
          // desktop
          // section 2
          if (result < 400) this.s2_firstchoice = true;
          if (result < -150) this.s2_ktc = true;
          if (result < -350) this.s2_krungsri = true;

          // section 3
          if (result < -4100) {
            if (!this.s3_dashboard) {
              this.s3_dashboard = true;
            }
          }

          if (result < -20) {
            this.s1AnimationToggle();
          } else {
            if (!this.s1_mastercard) {
              this.s1AnimationToggle();
            }
          }

          if (result < -2400) {
            this.s2AnimationToggle();
          }

          if (result > 500) {
            if (this.s2_firstchoice) {
              this.s2AnimationToggle();
            }
          }

          if (result > -3800) {
            if (this.s3_dashboard) {
              this.s3_dashboard = !this.s3_dashboard;
            }
          }

          if (result < -6900) {
            this.s3_dashboard = !this.s3_dashboard;
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
