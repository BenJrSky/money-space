<template>
    <div id="bodyWrap">
        <StartSection/>
        <MainAbout/>
        <Advantages/>
        <MainInfo/>
        <JoinSection/>
        <Footer/>
    </div>
</template>


<script lang="ts">
import StartSection from  '@/components/StartSection.vue'
import MainAbout from '@/components/MainAbout.vue'
import Advantages from '@/components/Advantages.vue'
import MainInfo from '@/components/MainInfo.vue'
import JoinSection from '@/components/JoinSection.vue'
import Footer from '@/components/Footer.vue'
import {defineComponent} from "vue";

export default defineComponent({
  components: { StartSection, MainAbout, Advantages, MainInfo, JoinSection, Footer },
  name: 'HomePage',
  props: {
    msg: String
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
