<template>
  <footer>
    <div class="container">
      <div class="wrapper">
        <div class="col">
          <div class="footMenu">
            <span class="title">
              <a href="#product" style="color: inherit !important">
                {{ t("footer.productArea.title") }}
              </a>
            </span>
            <ul>
              <li>
                <a href="#links" v-html="$t('footer.productArea.products[0]')"></a>
              </li>
              <li>
                <a href="#" v-html="$t('footer.productArea.products[1]')"></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="footMenu">
            <span class="title">{{ t("footer.featureArea.title") }}</span>
            <ul>
              <li>
                <a href="#dashboard">{{
                  t("footer.featureArea.features[0]")
                }}</a>
              </li>
              <!-- <li>
                <a href="#payment-demo">{{ t("footer.featureArea.features[1]") }}</a>
              </li>
              <li>
                <a href="#">{{ t("footer.featureArea.features[2]") }}</a>
              </li>
              <li>
                <a href="#">{{ t("footer.featureArea.features[3]") }}</a>
              </li> -->
              <li>
                <a href="#payment-demo">{{
                  t("footer.featureArea.features[4]")
                }}</a>
              </li>
              <!-- <li><a href="#">{{t('footer.featureArea.features[4]')}}</a></li> -->
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="footMenu">
            <span class="title">{{ t("footer.moneySpaceArea.title") }}</span>
            <ul>
              <li>
                <a href="#about-us">{{
                  t("footer.moneySpaceArea.moneySpaces[0]")
                }}</a>
              </li>
              <!-- <li>
                <a href="#">{{ t("footer.moneySpaceArea.moneySpaces[1]") }}</a>
              </li> -->
              <li>
                <a href="#contact-us">{{
                  t("footer.moneySpaceArea.moneySpaces[2]")
                }}</a>
              </li>
              <!-- <li><a href="#">{{t('footer.moneySpaceArea.moneySpaces[3]')}}</a></li> -->
              <li>
                <a href="#privacy">{{
                  t("footer.moneySpaceArea.moneySpaces[4]")
                }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="footMenu">
            <span class="title">{{ t("footer.faqArea.title") }}</span>
            <ul>
              <li>
                <a href="#businesses">{{ t("footer.faqArea.faqs[0]") }}</a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/moneyspace.net"
                  target="_blank"
                  >{{ t("footer.faqArea.faqs[1]") }}</a
                >
              </li>
              <!-- <li><a href="#">{{t('footer.faqArea.faqs[2]')}}</a></li>
                            <li><a href="#">{{t('footer.faqArea.faqs[3]')}}</a></li> -->
            </ul>
          </div>
        </div>
      </div>
      <div class="wrapper">
          <div class="langBlock invert" v-on:mouseleave="leavemouse">
          <div :class="arrowClicked == true ? 'head active' : 'head'">
            <div class="in">
              <img
                @click="setLocale('en')"
                src="@/assets/img/eng.png"
                alt="eng"
                class="lang"
              />
              <img
                @click="showSecondLangBlock()"
                src="@/assets/img/arrow.svg"
                alt="arrow"
                class="arr"
              />
            </div>
          </div>
          <div class="list" :class="{ showSecondLangBlockCSS: arrowClicked }">
            <div class="in">
              <img
                @click="setLocale('th')"
                src="@/assets/img/thai.png"
                alt="thai"
                class="lang"
              />
            </div>
          </div>
        </div>

      </div>
      
    </div>
  </footer>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
  data() {
    return {
      arrowClicked: false,
    };
  },
  methods: {
    setLocale(locale: string): void {
      this.locale = locale;
      localStorage.setItem("locale", locale);
      this.showSecondLangBlock();
    },
    showSecondLangBlock(): void {
      this.isArrowClicked() == true
        ? (this.arrowClicked = false)
        : (this.arrowClicked = true);
    },
    isArrowClicked(): boolean {
      return this.arrowClicked;
    },
    leavemouse() {
      this.arrowClicked == true ? (this.arrowClicked = false) : "";
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.showSecondLangBlockCSS {
  display: block !important;
}

ul li a {
  font-size: 16px !important;
}

.langBlock{
  position: relative;
}
</style>
