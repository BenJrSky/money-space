<template>
  <div id="bodyWrap">
    <Header />
    <div class="linksPage">
      <div class="linksPageHeader">
        <div class="container">
          <div class="linksBanner">
            <div class="pageCaption">
              <span class="title font-prompt" style="font-size: 38px; letter-spacing: 1px; line-height: 60px">{{ t("linksPage.info") }}</span>
            </div>
            <div class="info">
              <div class="textBlock">
                <p style="font-size: 18px">{{ t("linksPage.title") }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="linksPageContent">
        <div class="stepsList">
          <div class="item">
            <div class="stepItem type1">
              <span class="num">{{ t("linksPage.steps[0].id") }}</span>
              <div class="img wow animate__animated animate__fadeInUp" data-wow-offset="0">
                <img src="@/assets/img/step_1.png" alt="step" />
              </div>
              <div class="content">
                <p>{{ t("linksPage.steps[0].content") }}</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="stepItem type2">
              <span class="num">{{ t("linksPage.steps[1].id") }}</span>
              <div class="img wow animate__animated animate__fadeInUp " style="animation-delay: 0.5s" data-wow-delay="0.5s" data-wow-offset="0">
                <img src="@/assets/img/step_2.png" alt="step" />
              </div>
              <div class="content">
                <p>{{ t("linksPage.steps[1].content") }}</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="stepItem type3">
              <span class="num">{{ t("linksPage.steps[2].id") }}</span>
              <div class="img wow animate__animated animate__fadeInUp" style="animation-delay: 1s" data-wow-delay="1s" data-wow-offset="0">
                <img src="@/assets/img/step_3.png" alt="step" />
              </div>
              <div class="content">
                <p>{{ t("linksPage.steps[2].content") }}</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="stepItem type4">
              <span class="num">{{ t("linksPage.steps[3].id") }}</span>
              <div class="img wow animate__animated animate__fadeInUp" style="animation-delay: 1.5s" data-wow-delay="1.5s" data-wow-offset="0">
                <img src="@/assets/img/step_4.png" alt="step" />
              </div>
              <div class="content">
                <p>{{ t("linksPage.steps[3].content") }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="linkSectionBuy">
          <div class="container">
            <div class="wrapper">
              <div class="left">
                <div class="linkFormBuyWrapper">
                  <div :class="[isFormBuyActive() ? ['visible', 'wow', 'animate__animated', 'animate__bounceInLeft'] : ['visible', 'wow', 'animate__animated', 'animate__bounceOutLeft']]" class="linkFormBuy" data-wow-delay="0.2s">
                    <div class="headBlock">
                      <span class="title">{{ t("linksPage.linkSectionBuy.left.title") }}</span>
                      <span class="subtitle">{{ t("linksPage.linkSectionBuy.left.subtitle") }}</span>
                    </div>
                    <div class="formBlock">
                      <div class="radioWrap">
                        <span class="label">{{ t("linksPage.linkSectionBuy.left.radioWrap.label") }}</span>
                        <ul class="radioList">
                          <li>
                            <div class="radioBtn">
                              <input type="radio" name="type" id="seller" checked />
                              <label for="seller">{{ t("linksPage.linkSectionBuy.left.radioWrap.radioList.seller") }}</label>
                            </div>
                          </li>
                          <li>
                            <div class="radioBtn">
                              <input type="radio" name="type" id="buyer" />
                              <label for="buyer">{{ t("linksPage.linkSectionBuy.left.radioWrap.radioList.buyer") }}</label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="fieldsWrap">
                        <div class="fieldItem">
                          <div class="inBlockType3">
                            <label for="buyerTerms">
                              {{ t("linksPage.linkSectionBuy.left.fieldsWrap.label1") }}
                              <span class="note">{{ t("linksPage.linkSectionBuy.left.fieldsWrap.label2") }}</span>
                            </label>
                            <div class="inWrap">
                              <input type="text" class="terms" name="buyerTerms" id="buyerTerms" :value="t('linksPage.linkSectionBuy.left.fieldsWrap.placeHolder')" readonly />
                            </div>
                          </div>
                        </div>
                        <div class="fieldItem">
                          <div class="inBlockType3">
                            <label for="buyerLink">{{ t("linksPage.linkSectionBuy.left.fieldsWrap.buyerLink") }}</label>
                            <div class="inWrap">
                              <input type="text" name="buyerLink" id="buyerLink" value="https://www.moneyspace.net/merchantapi/makepaym…" readonly />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="buttons">
                        <button class="btnSimpleType1">{{ t("linksPage.linkSectionBuy.left.fieldsWrap.print") }}</button>
                        <span class="btnFillType6">{{ t("linksPage.linkSectionBuy.left.fieldsWrap.copyLink") }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="linkInfo">
                  <div class="titleBlock">
                    <span class="subtitle invert">{{ t("linksPage.linkSectionBuy.right.subtitle") }}</span>
                    <span class="title invert" style="line-height: 90px">{{ t("linksPage.linkSectionBuy.right.title") }}</span>
                  </div>
                  <div class="contentBlock">
                    <div class="textBlock invert">
                      <p>{{ t("linksPage.linkSectionBuy.right.textBlock") }}</p>
                    </div>
                  </div>
                </div>
                <div class="linkDescr invert">
                  <div class="item">
                    <span class="cap">{{ t("linksPage.linkSectionBuy.right.items[0].cap") }}</span>
                    <p>{{ t("linksPage.linkSectionBuy.right.items[0].content") }}</p>
                  </div>
                  <div class="item">
                    <span class="cap">{{ t("linksPage.linkSectionBuy.right.items[1].cap") }}</span>
                    <p>{{ t("linksPage.linkSectionBuy.right.items[1].content") }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="linkSectionMerch">
          <div class="container">
            <div class="wrapper">
              <div class="left">
                <div class="linkInfo">
                  <div class="titleBlock">
                    <span class="subtitle">{{ t("linksPage.linkSectionMerch.left.subtitle") }}</span>
                    <span class="title">{{ t("linksPage.linkSectionMerch.left.title") }}</span>
                  </div>
                  <div class="contentBlock">
                    <div class="textBlock">
                      <p>{{ t("linksPage.linkSectionMerch.left.textBlock") }}</p>
                    </div>
                  </div>
                </div>
                <div class="linkDescr">
                  <div class="item">
                    <span class="cap">{{ t("linksPage.linkSectionMerch.left.items[0].cap") }}</span>
                    <p>{{ t("linksPage.linkSectionMerch.left.items[0].content1") }}</p>
                    <p>{{ t("linksPage.linkSectionMerch.left.items[0].content2") }}</p>
                  </div>
                  <div class="item">
                    <span class="cap">{{ t("linksPage.linkSectionMerch.left.items[1].cap") }}</span>
                    <p>{{ t("linksPage.linkSectionMerch.left.items[1].content") }}</p>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="linkMerchFormWrapper">
                  <div :class="[isMerchFormActive() ? ['visible', 'wow', 'animate__animated', 'animate__bounceInRight'] : ['visible', 'wow', 'animate__animated', 'animate__bounceOutRight']]" class="linkMerchForm" data-wow-delay="0.2s">
                    <div class="headBlock">
                      <span class="title">{{ t("linksPage.linkSectionMerch.right.title") }}</span>
                      <span class="subtitle">{{ t("linksPage.linkSectionMerch.right.subtitle") }}</span>
                    </div>
                    <div class="formBlock">
                      <div class="fieldsWrap">
                        <div class="fieldItem">
                          <div class="inBlockType1">
                            <label for="name">{{ t("linksPage.linkSectionMerch.right.items[0].label") }}</label>
                            <div class="inWrap">
                              <input type="text" name="name" id="name" :value="t('linksPage.linkSectionMerch.right.items[0].placeholder')" />
                            </div>
                          </div>
                        </div>
                        <div class="fieldItem">
                          <div class="inBlockType1">
                            <label for="sum">{{ t("linksPage.linkSectionMerch.right.items[1].label") }}</label>
                            <div class="inWrap">
                              <input type="text" name="sum" id="sum" :value="t('linksPage.linkSectionMerch.right.items[1].placeholder')" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="checkWrap">
                        <ul class="checkList">
                          <li>
                            <div class="checkBtn">
                              <input type="checkbox" name="card" id="card" />
                              <label for="card">{{ t("linksPage.linkSectionMerch.right.checkList[0].label") }}</label>
                            </div>
                          </li>
                          <li>
                            <div class="checkBtn">
                              <input type="checkbox" name="plan" id="plan" />
                              <label for="plan">{{ t("linksPage.linkSectionMerch.right.checkList[1].label") }}</label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="radioWrap">
                        <span class="label">{{ t("linksPage.linkSectionMerch.right.radioWrap.label") }}</span>
                        <ul class="radioList">
                          <li>
                            <div class="radioBtn invert">
                              <input type="radio" name="typeMerch" id="sellerMerch" checked />
                              <label for="sellerMerch">{{ t("linksPage.linkSectionMerch.right.radioWrap.radioList[0].label") }}</label>
                            </div>
                          </li>
                          <li>
                            <div class="radioBtn invert">
                              <input type="radio" name="typeMerch" id="buyerMerch" />
                              <label for="buyerMerch">{{ t("linksPage.linkSectionMerch.right.radioWrap.radioList[1].label") }}</label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="fieldsWrap">
                        <div class="fieldItem">
                          <div class="inBlockType1">
                            <label for="buyerTerms" class="lg">
                              {{ t("linksPage.linkSectionMerch.right.fieldsWrap.label1") }}
                              <span class="note">{{ t("linksPage.linkSectionMerch.right.fieldsWrap.label2") }}</span>
                            </label>
                            <div class="inWrap">
                              <input type="text" class="terms" name="buyerTerms" id="buyerTerms" :value="t('linksPage.linkSectionMerch.right.fieldsWrap.placeHolder')" readonly />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="more">
                        <a href="#" class="btnSimpleType2">{{ t("linksPage.linkSectionMerch.right.more.link") }}</a>
                        <span class="line"></span>
                      </div>
                      <button class="btnFillType2 full">{{ t("linksPage.linkSectionMerch.right.more.buttonValue") }}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="joinSection links">
          <div class="container">
            <div class="joinBlock lg">
              <div class="img">
                <img src="@/assets/img/image_3.jpg" alt="image" />
              </div>
              <div class="info">
                <span class="title sm mb-md-4" style="line-height: 1.4 !important" 
                  v-html="$t('linksPage.joinSection.info')">
                </span>
                <a href="#" class="btnIconType1 sm">
                  <span class="in">
                    <span class="text">{{ $t("linksPage.joinSection.link") }}</span>
                    <span class="icon-arrow"></span>
                  </span>
                </a>
              </div>
            </div>
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
  name: "LinksPage",
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
  data: function() {
    return {
      scrollPosition: 0,
      screenWidth: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
      /* @ts-ignore */
      this.screenWidth = document?.scrollingElement?.clientWidth;
    },
    isFormBuyActive() {
      switch (true) {
        case this.screenWidth <= 320:
          return this.scrollPosition >= 1100 && this.scrollPosition <= 1700;
        case this.screenWidth <= 375:
          return this.scrollPosition >= 1000 && this.scrollPosition <= 1600;
        case this.screenWidth <= 425:
          return this.scrollPosition >= 900 && this.scrollPosition <= 1500;
        case this.screenWidth <= 768:
          return this.scrollPosition >= 500 && this.scrollPosition <= 1200;
        case this.screenWidth <= 1024:
          return this.scrollPosition >= 540 && this.scrollPosition <= 1200;
        case this.screenWidth <= 1440:
          return this.scrollPosition >= 700 && this.scrollPosition <= 1400;
        default:
          return this.scrollPosition >= 700 && this.scrollPosition <= 1500;
      }
    },
    isMerchFormActive() {
      switch (true) {
        case this.screenWidth <= 320:
          return this.scrollPosition >= 2390 && this.scrollPosition <= 3100;
        case this.screenWidth <= 375:
          return this.scrollPosition >= 2290 && this.scrollPosition <= 3000;
        case this.screenWidth <= 425:
          return this.scrollPosition >= 2100 && this.scrollPosition <= 2900;
        case this.screenWidth <= 768:
          return this.scrollPosition >= 1200 && this.scrollPosition <= 1970;
        case this.screenWidth <= 1024:
          return this.scrollPosition >= 1250 && this.scrollPosition <= 2300;
        case this.screenWidth <= 1440:
          return this.scrollPosition >= 1300 && this.scrollPosition <= 2800;
        default:
          return this.scrollPosition >= 1500 && this.scrollPosition <= 2800;
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.visible {
  visibility: visible;
}
.nonVisible {
  visibility: hidden;
}
</style>
