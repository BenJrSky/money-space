<template>
  <div class="mainInfo">
    <div class="container">
      <div class="wrapper">
        <div class="titleContainer">
          <span class="sectionTitle md font-prompt" style="font-size: 38px">{{ t("mainInfo.title") }}</span>
        </div>
        <div class="contentContainer">
          <div class="infoBlock">
            <div class="item">
              <div class="textBlock lg">
                <p style="font-size: 18px">{{ t("mainInfo.content.item1.value") }}</p>
              </div>
            </div>
            <div class="item">
              <div class="textBlock lg">
                <span class="title font-prompt">{{ t("mainInfo.content.item2.label") }}</span>
                <p style="font-size: 18px">{{ t("mainInfo.content.item2.value") }}</p>
              </div>
            </div>
          </div>
          <ul class="securityList">
            <li>
              <img src="@/assets/img/security_1.png" alt="secutity" />
              <span>{{ t("mainInfo.security1") }}</span>
            </li>
            <li>
              <a href="https://www.bot.or.th/Thai/PaymentSystems/OversightOfPaymentSystems/Documents/Payment_2014_T_Oversight.pdf" target="_blank">
                <!-- <img src="@/assets/img/security_2.png" alt="secutity" /> -->
                <span>{{ t("mainInfo.security2") }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="apiImg animatedBlock runningAnimation">
      <div class="circleWrap">
        <div class="circle animated">
          <span class="text animated" style="font-size: 30px">{{ t("mainInfo.animation.website") }}</span>
        </div>
        <div class="circle animated">
          <span class="text animated" style="font-size: 30px">{{ t("mainInfo.animation.payment") }}</span>
        </div>
      </div>
      <div class="overlay animated"></div>
      <span class="text animated" style="font-size: 30px">{{ t("mainInfo.animation.api") }}</span>
      <img src="@/assets/img/check.svg" alt="check" class="icon animated" />
    </div>
  </div>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainInfo",
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
