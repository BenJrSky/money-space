<template>
  <header>
    <div class="wrapper">
      <div class="left">
        <div class="logoWrapper">
          <div class="siteLogo" :class="[theme == 'light' ? ['light'] : '']">
            <img src="@/assets/img/logo.png" alt="logo" />
            <span>{{ t("header.logo") }}</span>
            <a href="/#/">main</a>
          </div>
        </div>
        <div class="menuWrapper menuSm" v-bind:style="{ display: computedDisplayMenu, opacity: computedOpacityMenu }">
          <div class="inner">
            <span class="icon-close close closeMenuBtn" @click="openCloseMenu()"></span>
            <span class="menuTitleSm">{{ t("header.menu") }}</span>
            <nav>
              <ul class="menuList" :class="[theme == 'light' ? ['light'] : '']">
                <!-- <li>
                  <a href="/#/links">{{ t("header.nav.payment") }}</a>
                </li> -->
                <li>
                  <a href="/#/product">{{ t("header.nav.product") }}</a>
                </li>
                <li>
                  <a href="/#/pricing">{{ t("header.nav.pricing") }}</a>
                </li>
                <li>
                  <a href="/#/contact-us">{{ t("header.nav.contact-us") }}</a>
                </li>
              </ul>
              <div class="langBlock sm">
                <div class="title">{{ t("header.nav.language.title") }}</div>
                <div :class="arrowClicked == true ? 'head active' : 'head'">
                  <div class="in">
                    <img @click="setLocale('en')" src="@/assets/img/eng.png" alt="eng" class="lang" />
                    <span @click="setLocale('en')" class="text">{{ t("header.nav.language.eng") }}</span>
                    <img @click="showSecondLangBlock()" src="@/assets/img/arrow_right.svg" alt="arrow" class="arr" />
                  </div>
                </div>
                <div class="list" :class="{ showSecondLangBlockCSS: arrowClicked }">
                  <div class="in">
                    <a href="#">
                      <img @click="setLocale('th')" src="@/assets/img/thai.png" alt="thai" class="lang" height="23" />
                      <span @click="setLocale('th')" class="text">{{ t("header.nav.language.thai") }}</span>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="langBlock" v-on:mouseleave="leavemouse">
          <!-- <div class="list" :class="{ showSecondLangBlockCSS: arrowClicked }">
            <div class="in">
              <img v-if="computedCurrentLang === 'en'" @click="setLocale('en')" src="@/assets/img/eng.png" alt="eng" class="lang" />
              <img v-if="computedCurrentLang === 'th'" @click="setLocale('th')" src="@/assets/img/thai.png" alt="thai" class="lang" />
            </div>
          </div> -->
          <div class="head">
            <div>
              <img v-if="currentLang === 'en'" @click="setLocale('th')" src="@/assets/img/thai.png" alt="eng" class="lang" />
              <img v-if="currentLang === 'th'" @click="setLocale('en')" src="@/assets/img/eng.png" alt="thai" class="lang" />
              <!-- <img @click="showSecondLangBlock()" src="@/assets/img/arrow.svg" alt="arrow" class="arr" /> -->
            </div>
          </div>
        </div>

        <a href="#" class="btnFillType1 font-sarabun">{{ t("header.signup") }}</a>
        <a href="#" class="siteLink loginSm">Sign Up</a>
        <div class="openMenuBtn" @click="openCloseMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  props: ["theme"],
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
  data() {
    return {
      screenWidth: 0,
      arrowClicked: false,
      openedMenu: false,
      opacity: 1,
      display: "none",
      currentLang: localStorage.getItem("locale"),
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    console.log(`>>> header mounted`);
  },
  computed: {
    computedOpacityMenu: function(): number {
      return this.opacity;
    },
    computedDisplayMenu: function(): string {
      return this.display;
    },
  },
  methods: {
    setLocale(locale: string): void {
      this.locale = locale;
      localStorage.setItem("locale", locale);
      this.currentLang = locale;
      // this.showSecondLangBlock();
    },
    showSecondLangBlock(): void {
      this.isArrowClicked() == true ? (this.arrowClicked = false) : (this.arrowClicked = true);
    },
    isArrowClicked(): boolean {
      return this.arrowClicked;
    },
    openCloseMenu(): void {
      this.openedMenu == true ? (this.openedMenu = false) : (this.openedMenu = true);

      this.openedMenu == true ? document.body.classList.add("menuIsOpened") : document.body.classList.remove("menuIsOpened");

      (this.opacity = 0), this.openedMenu == true ? (this.display = "block") : (this.display = "block");

      this.openedMenu == true ? setTimeout(() => (this.opacity = 1), 50) : setTimeout(() => (this.opacity = 0), 50);

      this.openedMenu == false ? setTimeout(() => (this.display = ""), 500) : "";
    },
    handleResize(): void {
      this.screenWidth = window.innerWidth;

      this.openedMenu == true && this.screenWidth < 768 ? document.body.classList.add("menuIsOpened") : document.body.classList.remove("menuIsOpened");
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
.menuSm {
  transition: visibility 0s linear 0s, opacity 1000ms;
}

.head:hover {
  background-color: transparent !important;
}
</style>
