<template>
    <div id="bodyWrap">
      <Header/>
      <div class="privacy businessSection">
        <div class="container">
          <div class="privacy businessBlock">
            <div class="wrapper">
              <div class="titleBlock">
                <span class="title">{{t('privacyPolicy.title')}}</span>
                <span class="subtitle">{{t('privacyPolicy.subtitle')}}</span>
              </div>
              <div class="contentBlock">
                <h2 class="titleBlock">{{t('privacyCollectionofPersonalData.title')}}</h2>
                <div class="contentBlock">
                    <p class="subtitleBlock">{{t('privacyCollectionofPersonalData.subtitle')}}</p>
                    <ul class="listTempl1">
                        <li> 
                          <span class="num"></span>
                          {{t('privacyCollectionofPersonalData.bulletPoint.text1')}}
                        </li>
                    </ul>
                </div>
                <br><hr><br>
                <h2 class="titleBlock">{{t('TypesofDataCollected.title')}}</h2>
                <div class="contentBlock">
                    <ul class="listTempl1">
                        <li>
                          <span class="num"></span>
                          {{t('TypesofDataCollected.bulletPoint.PersonalData.name')}} {{t('TypesofDataCollected.bulletPoint.PersonalData.text')}}
                        </li>
                        <li>
                          <span class="num"></span>
                          {{t('TypesofDataCollected.bulletPoint.ContactInformation.name')}} {{t('TypesofDataCollected.bulletPoint.ContactInformation.text')}}
                        </li>
                        <li>
                          <span class="num"></span>
                          {{t('TypesofDataCollected.bulletPoint.AccountDetails.name')}} {{t('TypesofDataCollected.bulletPoint.AccountDetails.text')}}
                        </li>
                        <li>
                          <span class="num"></span>
                          {{t('TypesofDataCollected.bulletPoint.ProofOfIdentity.name')}} {{t('TypesofDataCollected.bulletPoint.ProofOfIdentity.text')}}
                        </li>
                        <li>
                          <span class="num"></span>
                          {{t('TypesofDataCollected.bulletPoint.TransactionAndFinancialInformation.name')}} {{t('TypesofDataCollected.bulletPoint.TransactionAndFinancialInformation.text')}}
                        </li>
                        <li>
                          <span class="num"></span>
                          {{t('TypesofDataCollected.bulletPoint.TechnicalData.name')}} {{t('TypesofDataCollected.bulletPoint.TechnicalData.text')}}
                        </li>
                    </ul>
                </div>
                <br><hr><br>
                <h2 class="titleBlock">{{t('Children.title')}}</h2>
                <div class="contentBlock">
                    <p class="subtitleBlock">{{t('Children.subtitle')}}</p>
                </div>
                <br><hr><br>


                <h2 class="titleBlock">{{t('StorageOfData.title')}}</h2>
                <div class="contentBlock">
                    <p class="subtitleBlock" >{{t('StorageOfData.subtitle')}}</p>
                    <ul class="listTempl1">
                        <li>
                          <span class="num"></span>
                          {{t('StorageOfData.bulletPoint.text1')}}
                        </li>
                    </ul>
                </div>
                <br><hr><br>

                <h2 class="titleBlock">{{t('UseOfData.title')}}</h2>
                <div class="contentBlock">
                    <p class="subtitleBlock">{{t('UseOfData.subtitle')}}</p>
                    <ul class="listTempl1">
                        <li>
                          <span class="num"></span>
                           {{t('UseOfData.bulletPoint.text1')}}
                        </li>
                        <li>
                          <span class="num"></span>
                          {{t('UseOfData.bulletPoint.text2')}}
                        </li>
                        <li>
                          <span class="num"></span>
                          {{t('UseOfData.bulletPoint.text3')}}
                        </li>
                        <li>
                          <span class="num"></span>
                          {{t('UseOfData.bulletPoint.text4')}}
                        </li>
                        <li>
                          <span class="num"></span>
                          {{t('UseOfData.bulletPoint.text5')}}
                        </li>
                        <li>
                          <span class="num"></span>
                          {{t('UseOfData.bulletPoint.text6')}}
                        </li>
                        <li>
                          <span class="num"></span>
                          {{t('UseOfData.bulletPoint.text7')}}
                        </li>
                        <li>
                          <span class="num"></span>
                          {{t('UseOfData.bulletPoint.text8')}}
                        </li>
                        <li>
                          <span class="num"></span>
                          {{t('UseOfData.bulletPoint.text9')}}
                        </li>
                    </ul>
                </div>
                <br><hr><br>

                <h2 class="titleBlock">{{t('DisclosureOfPersonalData.title')}}</h2>
                <div class="contentBlock">
                    <p class="subtitleBlock">{{t('DisclosureOfPersonalData.subtitle')}}</p>
                    <ul class="listTempl1">
                        <li>
                          <span class="num"></span>
                           <b id="head">{{t('DisclosureOfPersonalData.bulletPoint.title')}}</b>
                        </li>
                        <p class="subtitleBlock" id="subhead">{{t('DisclosureOfPersonalData.bulletPoint.subtitle')}}</p>
                    </ul>
                </div>
                <br><hr><br>

                <h2 class="titleBlock">{{t('DataRetention.title')}}</h2>
                <div class="contentBlock">
                    <p class="subtitleBlock">{{t('DataRetention.subtitle')}}</p>
              
                </div>
                <br><hr><br>

                <h2 class="titleBlock">{{t('DataSubjectRights.title')}}</h2>
                <div class="contentBlock">
                    <p class="subtitleBlock">{{t('DataSubjectRights.subtitle')}}</p>
                    <ul class="listTempl1">
                        <li>
                          <span class="num"></span>
                           <b id="head">{{t('DataSubjectRights.bulletPoint.WithdrawalOfconsent.name')}}</b>
                        </li>
                        <p class="subtitleBlock" id="subhead">{{t('DataSubjectRights.bulletPoint.WithdrawalOfconsent.text')}}</p>
                        <li>
                          <span class="num"></span>
                            <b id="head">{{t('DataSubjectRights.bulletPoint.DataAccess.name')}}</b>
                        </li>
                        <p class="subtitleBlock" id="subhead">{{t('DataSubjectRights.bulletPoint.DataAccess.text')}}</p>
                        <li>
                          <span class="num"></span>
                            <b id="head">{{t('DataSubjectRights.bulletPoint.DataPortability.name')}}</b>
                        </li>
                        <p class="subtitleBlock" id="subhead">{{t('DataSubjectRights.bulletPoint.DataPortability.text')}}</p>
                        <li>
                          <span class="num"></span>
                            <b id="head">{{t('DataSubjectRights.bulletPoint.Objection.name')}}</b>
                        </li>
                        <p class="subtitleBlock" id="subhead">{{t('DataSubjectRights.bulletPoint.Objection.text')}}</p>
                        <li>
                          <span class="num"></span>
                            <b id="head">{{t('DataSubjectRights.bulletPoint.DataErasureOrDestruction.name')}}</b>
                        </li>
                        <p class="subtitleBlock" id="subhead">{{t('DataSubjectRights.bulletPoint.DataErasureOrDestruction.text')}}</p>
                        <li>
                          <span class="num"></span>
                            <b id="head">{{t('DataSubjectRights.bulletPoint.Suspension.name')}}</b>
                        </li>
                        <p class="subtitleBlock" id="subhead">{{t('DataSubjectRights.bulletPoint.Suspension.text')}}</p>
                        <li>
                          <span class="num"></span>
                            <b id="head">{{t('DataSubjectRights.bulletPoint.Rectification.name')}}</b>
                        </li>
                        <p class="subtitleBlock" id="subhead">{{t('DataSubjectRights.bulletPoint.Rectification.text')}}</p>
                        <li>
                          <span class="num"></span>
                            <b id="head">{{t('DataSubjectRights.bulletPoint.ComplaintLodging.name')}}</b>
                        </li>
                        <p class="subtitleBlock" id="subhead">{{t('DataSubjectRights.bulletPoint.ComplaintLodging.text')}}</p>
                        <li>
                          <span class="num"></span>
                          {{t('DataSubjectRights.bulletPoint.text1')}}
                        </li>
                    </ul>
                </div>
                <br><hr><br>

                <h2 class="titleBlock">{{t('AdvertisingAndMarketing.title')}}</h2>
                <div class="contentBlock">
                    <p class="subtitleBlock">{{t('AdvertisingAndMarketing.subtitle')}}</p>
                </div>
                <br><hr><br>

                <h2 class="titleBlock">{{t('Cookies.title')}}</h2>
                <div class="contentBlock">
                    <p class="subtitleBlock">{{t('Cookies.subtitle')}}</p>
                </div>
                <br><hr><br>

                <h2 class="titleBlock">{{t('DataSecurity.title')}}</h2>
                <div class="contentBlock">
                    <p class="subtitleBlock">{{t('DataSecurity.subtitle')}}</p>
                </div>
                <br><hr><br>
                
                <h2 class="titleBlock">{{t('DataBreachNotification.title')}}</h2>
                <div class="contentBlock">
                    <p class="subtitleBlock">{{t('DataBreachNotification.subtitle')}}</p>
                </div>
                <br><hr><br>

                <h2 class="titleBlock">{{t('ChangesToThisPrivacyPolicy.title')}}</h2>
                <div class="contentBlock">
                    <p class="subtitleBlock">{{t('ChangesToThisPrivacyPolicy.subtitle1')}}</p>
                    <p class="subtitleBlock">{{t('ChangesToThisPrivacyPolicy.subtitle2')}}</p>
                </div>
                <br><hr><br>

                <h2 class="titleBlock">{{t('LinksToOtherSites.title')}}</h2>
                <div class="contentBlock">
                    <p class="subtitleBlock">{{t('LinksToOtherSites.subtitle')}}</p>
                </div>
                <br><hr><br>

                <h2 class="titleBlock">{{t('ContactInformation.title')}}</h2>
                <div class="contentBlock">
                    <p class="subtitleBlock">{{t('ContactInformation.subtitle')}}</p>
                    <ul class="listTempl1">
                        <li>
                          <span class="num"></span>
                           <b id="head">{{t('ContactInformation.DataController.subtitle')}}</b>
                        </li>
                        <p class="subtitleBlock" id="subhead">{{t('ContactInformation.DataController.line1')}}</p>
                        <p class="subtitleBlock" id="subhead">{{t('ContactInformation.DataController.line2')}}</p>
                        <p class="subtitleBlock" id="subhead">{{t('ContactInformation.email.text')}} <b>{{ t('address', { account: t('ContactInformation.email.account') , domain: t('ContactInformation.email.domain')  }) }}</b></p> 
                        <p class="subtitleBlock" id="subhead">{{t('ContactInformation.DataController.line4')}}</p>
                        <p class="subtitleBlock" id="subhead">{{t('ContactInformation.DataController.line5')}}</p>
                        <li>
                          <span class="num"></span>
                          <b id="head">{{t('ContactInformation.DataProtectionOfficer.subtitle')}}</b>
                        </li>
                        <p class="subtitleBlock" id="subhead">{{t('ContactInformation.DataProtectionOfficer.line1')}}</p>
                        <p class="subtitleBlock" id="subhead">
                            {{t('ContactInformation.DataProtectionOfficer.line2')}}
                        </p>
                        <p class="subtitleBlock" id="subhead">{{t('ContactInformation.email.text')}} <b>{{ t('address', { account: t('ContactInformation.email.account') , domain: t('ContactInformation.email.domain') }) }}</b></p> 
                        <p class="subtitleBlock" id="subhead">{{t('ContactInformation.DataProtectionOfficer.line4')}}</p>
                    </ul>
                </div>
                <br><hr><br>

              </div>
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
  name: 'PrivacyPage',
  setup() {
    const {t, locale} = useI18n();
    return {t, locale}
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p.subtitleBlock{
  margin-top:40px;
  margin-bottom:40px;
}
#head{
  width: -webkit-fill-available;
}
#subhead{
  margin:40px;
}
</style>
