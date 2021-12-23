<template>
  <div :class="state.Modal">
    <div class="modals table">
      <div class="middle tCell">
        <div class="blockMod paymentModal paymentForm" id="paymentModal" ref="el">
          <div class="headBlock">
            <div class="formTitle" style="font-size: 18px">{{ t("startSection.createLinkPayForm.checkout") }}</div>
            <div class="siteLogo2">
              <img src="@/assets/img/logo.png" alt="logo" />
              <div class="data">
                <span class="subtitle">powered by </span>
                <span class="title">money space</span>
              </div>
            </div>
          </div>
          <div class="formBlock">
            <div class="fieldsWrap">
              <div class="fieldItem">
                <div class="col">
                  <div class="inBlockType1">
                    <label for="cardNumber">{{ t("startSection.createLinkPayForm.cardNoLabel") }}</label>
                    <div class="inWrap">
                      <input type="text" class="cardNumber" name="cardNumber" id="cardNumber" value="1123   2000   3200   2391" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="fieldItem">
                <div class="col">
                  <div class="inBlockType1">
                    <label>{{ t("startSection.createLinkPayForm.expDateLabel") }}</label>
                    <div class="inWrap comb">
                      <input type="text" class="cardMonth" name="month" id="month" value="08" />
                      <input type="text" class="cardYear" name="year" id="year" value="2020" />
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="inBlockType1">
                    <label for="cvc">{{ t("startSection.createLinkPayForm.cvcLabel") }}</label>
                    <div class="inWrap">
                      <input type="text" class="cardCvc" name="cvc" id="cvc" value="032" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="checkWrap">
              <div class="checkBtn">
                <input type="checkbox" name="card" id="card" />
                <label for="card">{{ t("startSection.createLinkPayForm.card") }}</label>
              </div>
            </div> -->
            <button class="btnFillType2 full upp">{{ t("startSection.createLinkPayForm.submit") }}</button>
          </div>
        </div>
        <div class="overlayModal"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
import { computed, defineComponent, reactive } from "vue";
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

export default defineComponent({
  name: "PaymentModal",
  setup() {
    const { t, locale } = useI18n();
    var el = ref();

    const state = reactive({
      Modal: "modalsScroll open",
      String: computed(() => "modalsScroll open"),
    });

    function close() {
      state.Modal = "modalsScroll";
    }

    onClickOutside(el, close);

    return { t, locale, el, state };
  },
  data() {
    return {};
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#paymentModal {
  opacity: 1;
  display: block;
}
.overlayModal {
  opacity: 1;
  display: block;
}
</style>
