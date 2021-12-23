<template>
    <div id="bodyWrap">
      <div class="aboutPageHeader">
        <Header theme="light"/>
        <div class="container">
          <div class="aboutBanner">
            <div class="wrapper">
              <span class="pageTitle">{{t('aboutPage.header.pageTitle')}}</span>
              <div class="info">
                <p>{{t('aboutPage.header.info1')}}<span>{{t('aboutPage.header.info2')}}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="aboutInfo">
        <div class="container">
          <div class="wrapper">
            <div class="left">
              <div class="titleBlock">
                <span class="title">{{t('aboutPage.aboutInfo.left.title')}}</span>
              </div>
              <div class="contentBlock">
                <div class="textBlock">
                  <p>{{t('aboutPage.aboutInfo.left.text')}}</p>
                </div>
              </div>
            </div>
            <div class="right">
              <div :class="quoteBlock" v-bind:style="quoteBlockStyle">
                <p :class="pquoteBlock" v-bind:style="pquoteBlockStyle" data-wow-delay="1s">{{t('aboutPage.aboutInfo.right.quote')}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="joinSection about">
        <div class="container">
          <div class="joinBlock">
            <div class="img dotsBottom">
              <img src="@/assets/img/image_4.jpg" alt="image">
            </div>
            <div class="info">
              <span class="title md">{{t('aboutPage.joinSection.title')}}</span>
              <div class="content">
                <div class="textBlock">
                  <p>{{t('aboutPage.joinSection.text')}}</p>
                </div>
              </div>
              <a href="#" class="btnIconType1 sm">
                            <span class="in">
                                <span class="text">{{t('aboutPage.joinSection.link')}}</span>
                                <span class="icon-arrow"></span>
                            </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
</template>


<script lang="ts">
import Footer from '@/components/Footer.vue'
import Header from "@/components/Header.vue";
import {useI18n} from "vue-i18n";
import {defineComponent} from "vue";

export default defineComponent({
  components: {Header, Footer },
  name: 'AboutUsPage',
  setup() {
    const {t, locale} = useI18n();
    return {t, locale}
  },
  data: function() {
    return {
      scrollPosition: 0,
      screenWidth: 0,
      quoteBlock: '',
      quoteBlockStyle: {},
      pquoteBlock: '',
      pquoteBlockStyle: {}
    };
  },
  beforeMount(){
    this.quoteBlock = 'quoteBlock wow animate__animated animate__fadeInUpBig'
    this.quoteBlockStyle = {'visibility': 'hidden', 'animation-name': 'none'}
    this.pquoteBlock = 'wow animate__animated animate__fadeIn'
    this.pquoteBlockStyle = {'visibility': 'hidden', 'animation-delay': '1s', 'animation-name': 'none'}
  },
  mounted () {
    this.quoteBlock = 'quoteBlock wow animate__animated animate__fadeInUpBig animate__animated'
    this.quoteBlockStyle = {'visibility': 'visible', 'animation-name': 'fadeInUpBig'},
    this.pquoteBlock = 'wow animate__animated animate__fadeIn animate__animated',
    this.pquoteBlockStyle = {'visibility': 'visible', 'animation-delay': '1s', 'animation-name': 'fadeIn'}
    setTimeout(()=>{
        this.quoteBlock = 'quoteBlock wow  animate__fadeInUpBig animate__animated'
        this.pquoteBlock = 'wow  animate__fadeIn'
    },2000)
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
