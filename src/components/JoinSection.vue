<template>
  <div class="joinSection main">
    <div class="container">
      <div class="joinBlock">
        <div class="img dotsTop">
          <img src="@/assets/img/image_1.jpg" alt="image" />
        </div>
        <div class="info">
          <span class="title lg font-prompt" style="font-size: 30px; letter-spacing: 1px; line-height: 42px">{{ t("joinSection.title") }}</span>
          <div class="content">
            <div class="textBlock">
              <p>{{ t("joinSection.content") }}</p>
            </div>
          </div>
          <a href="#" class="btnIconType1 sm">
            <span class="in">
              <span class="text">{{ t("joinSection.start") }}</span>
              <span class="icon-arrow"></span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
import { defineComponent } from "vue";

export default defineComponent({
  name: "JoinSection",
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
