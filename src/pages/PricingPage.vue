<template>
  <div id="bodyWrap">
    <Header />
    <div class="pricigPageHeader">
      <div class="container">
        <div class="pricingBanner">
          <div class="pageCaption">
            <span class="subtitle font-prompt" style="margin: 50px; font-size: 38px">{{ t("pricigPageHeader.subtitle") }}</span>
            <span class="title">{{ t("pricigPageHeader.title") }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="pricingPageContent">
      <div class="container">
        <div class="calculator">
          <div class="calcForm">
            <div class="headBlock">
              <span class="title">{{ t("pricingPageContent.calculator.title") }}</span>
            </div>
            <div class="formBlock">
              <div class="fieldsWrap">
                <div class="fieldItem">
                  <div class="inBlockType2">
                    <label for="amount1">{{ t("pricingPageContent.calculator.fieldItem[0].amountLabel") }}</label>
                    <div class="inWrap">
                      <input type="text" name="amount1" id="amount1" v-model="amount" />
                    </div>
                  </div>
                </div>
                <div class="fieldItem">
                  <div class="inBlockType2">
                    <label for="amount2">{{ t("pricingPageContent.calculator.fieldItem[1].amountLabel") }}</label>
                    <div class="inWrap">
                      <input type="text" name="amount2" id="amount2" v-model="result" />
                    </div>
                  </div>
                </div>
              </div>
              <button class="btnFillType2 full" @click="feemath">{{ t("pricingPageContent.calculator.calculate") }}</button>
            </div>
          </div>
          <div class="calcInfo">
            <span class="info" :style="'font-size:45px'"
              >{{ t("pricingPageContent.calculator.calcInfo.info[0]") }}<br />
              {{ t("pricingPageContent.calculator.calcInfo.info[1]") }}<br />
              {{ t("pricingPageContent.calculator.calcInfo.info[2]") }}</span
            >
            <span class="note" :style="'width:240px'">{{ t("pricingPageContent.calculator.calcInfo.note") }}</span>
          </div>
        </div>
        <div class="pricingInfo">
          <div class="titleContainer">
            <span class="subtitle">{{ t("pricingPageContent.pricingInfo.subtitle") }}</span>
            <span class="title">{{ t("pricingPageContent.pricingInfo.title") }}</span>
          </div>
          <div class="contentContainer">
            <div class="info">
              <div class="textBlock">
                <p>{{ t("pricingPageContent.pricingInfo.textBlock") }}</p>
              </div>
            </div>
            <!-- <div class="buttons">
              <a href="#" class="btnFillType4">{{ t("pricingPageContent.pricingInfo.buttons[0]") }}</a>
              <a href="#" class="btnFillType5">{{ t("pricingPageContent.pricingInfo.buttons[1]") }}</a>
            </div> -->
          </div>
        </div>
        <div class="tariffList" style="padding-bottom: 60px">
          <div class="item">
            <div class="tariffItem">
              <span class="cost num"
                >{{ t("pricingPageContent.tariffList.item[0].cost") }}<span> {{ t("pricingPageContent.tariffList.item[0].constUnit") }}</span></span
              >
              <div class="info">
                <p>{{ t("pricingPageContent.tariffList.item[0].info") }}</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="tariffItem">
              <span class="cost">{{ t("pricingPageContent.tariffList.item[1].cost") }}</span>
              <div class="info">
                <p>{{ t("pricingPageContent.tariffList.item[1].info") }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="joinSection ">
          <div class="joinBlock lg">
            <div class="img">
              <img src="@/assets/img/image_2.jpg" alt="image" />
            </div>
            <div class="info">
              <span class="title sm"
                >{{ t("pricingPageContent.joinSection.title[0]") }}<br />
                {{ t("pricingPageContent.joinSection.title[1]") }}<br />
                {{ t("pricingPageContent.joinSection.title[2]") }}<br />
              </span>
              <div class="content">
                <div class="textBlock">
                  <p>{{ t("pricingPageContent.joinSection.textBlock") }}</p>
                </div>
              </div>
              <a href="#" class="btnIconType1 sm">
                <span class="in">
                  <span class="text">{{ t("pricingPageContent.joinSection.text") }}</span>
                  <span class="icon-arrow"></span>
                </span>
              </a>
            </div>
          </div>
        </div> -->
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
  name: "PricingPage",
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
  data() {
    return {
      amount: 0,
      result: 0,
      fee: 2.77,
    };
  },
  methods: {
    feemath() {
      if (Number(this.amount)) {
        let math: any;
        let text = " บาท ( 2.77% )";
        let res: any = 0;
        math = (Number(this.amount) / Number(100)) * Number(this.fee);
        res = parseFloat(math).toFixed(2) + text;
        this.result = res;
      } else {
        this.amount = 0;
        this.result = 0;
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
