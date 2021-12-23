<template>
  <div id="bodyWrap">
    <Header />
    <div class="container">
      <div class="contactBlock">
        <div class="wrapper">
          <div class="left">
            <div class="titleContainer">
              <span class="pageTitle">{{ t("pageTitle") }}</span>
              <span class="pageSubtitle">{{ t("pageSubtitle") }}</span>
            </div>
            <div class="contentContainer">
              <div class="timingBlock">
                <span class="title">{{ t("title") }}</span>
                <span class="data">{{ t("data") }}</span>
              </div>
              <ul class="contactsList">
                <li>
                  <a href="mailto:th@moneyspace.net">
                    <img src="@/assets/img/mail.svg" alt="mail" class="icon" />
                    <span class="data">th@moneyspace.net</span>
                  </a>
                </li>
                <li>
                  <a href="tel:021070364 ">
                    <img src="@/assets/img/phone.svg" alt="phone" class="icon" />
                    <span class="data">{{ t("contactsList[1]") }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="right">
            <div class="mapWrapper">
              <div class="mapBlock">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.714127527847!2d100.56133511485494!3d13.735749701365888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29efd295efcf3%3A0x4ca047bcbe11ce24!2z4LiL4Lit4LiiIOC4quC4uOC4guC4uOC4oeC4p-C4tOC4lyAyNSDguIHguKPguLjguIfguYDguJfguJ7guKHguKvguLLguJnguITguKMgMTAxMTA!5e0!3m2!1sth!2sth!4v1622348467984!5m2!1sth!2sth"
                  frameborder="0"
                  style="border:0;"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
              <div class="locationBlock">
                <div class="title">
                  <img src="@/assets/img/location.svg" alt="location" class="icon" />
                  <span class="data">{{ t("locationBlock.title") }}</span>
                </div>
                <div class="content">
                  <p>{{ t("locationBlock.content") }}</p>
                </div>
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
  name: "ContactUsPage",
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
