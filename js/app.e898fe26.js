(function (e) {
    function t(t) {
        for (var c, n, s = t[0], r = t[1], l = t[2], b = 0, p = []; b < s.length; b++) n = s[b], Object.prototype.hasOwnProperty.call(o, n) && o[n] && p.push(o[n][0]), o[n] = 0;
        for (c in r) Object.prototype.hasOwnProperty.call(r, c) && (e[c] = r[c]);
        d && d(t);
        while (p.length) p.shift()();
        return i.push.apply(i, l || []), a()
    }

    function a() {
        for (var e, t = 0; t < i.length; t++) {
            for (var a = i[t], c = !0, s = 1; s < a.length; s++) {
                var r = a[s];
                0 !== o[r] && (c = !1)
            }
            c && (i.splice(t--, 1), e = n(n.s = a[0]))
        }
        return e
    }
    var c = {},
        o = {
            app: 0
        },
        i = [];

    function n(t) {
        if (c[t]) return c[t].exports;
        var a = c[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e, n.c = c, n.d = function (e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, n.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var c in e) n.d(a, c, function (t) {
                return e[t]
            }.bind(null, c));
        return a
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
        r = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var l = 0; l < s.length; l++) t(s[l]);
    var d = r;
    i.push([0, "chunk-vendors"]), a()
})({
    0: function (e, t, a) {
        e.exports = a("cd49")
    },
    "0158": function (e, t, a) {
        e.exports = "./img/card.9129bbcf.png"
    },
    "01b9": function (e, t, a) {},
    "073b": function (e, t, a) {
        e.exports = "./img/visa.1bbb3515.png"
    },
    "0e4e": function (e, t, a) {
        e.exports = "./img/advantage_1.3616824d.svg"
    },
    1106: function (e, t, a) {
        e.exports = "./img/arrow.7824d7e6.svg"
    },
    "134d": function (e, t, a) {
        e.exports = "./img/firstchoice.c9666d14.png"
    },
    1437: function (e, t, a) {
        e.exports = "./img/advantage_3.aa0e45b6.svg"
    },
    "156d": function (e) {
        e.exports = JSON.parse('{"ProductPage":{"FinancialFlexibility":"บัตรเครดิตและบัตรเดบิต","AtYourFingertips":"","AllYourOnlinePayment":"รองรับการชำระเงินผ่านเครือข่ายบัตรเครดิตชั้นนำทั่วโลก เพียงแค่กรอกหมายเลขบัตรและรายละเอียดที่จำเป็นอีกเล็กน้อย ผู้ซื้อก็สามารถรับชำระค่าสินค้าได้ทันที สะดวก ปลอดภัย และง่ายสุดๆ","AcceptForeignCurrency":"รองรับสกุลเงินต่างประเทศ","AsWellAsAcceptingPayments":"รับชำระด้วยบัตรเครดิต/เดบิต ออนไลน์ได้จากบัตรของทุกธนาคารทั่วโลก และยังสามารถรองรับสกุลเงินต่างประเทศได้มากถึง 27 สกุลเงิน เพื่อขยายฐานลูกค้าของคุณไปทั่วโลก ทั้งนี้การสรุปยอดเงินในบัญชีของร้านค้าจะเป็นในสกุลเงินบาท","HighSpeedPaymentProcessing":"ไม่ต้องพัฒนาระบบให้ยุ่งยาก","OurPlatformIsArchitected":"ง่ายและสะดวกแค่สมัครใช้บริการ สร้างและส่งลิงก์ให้ลูกค้า","Installment":{"bold":"การผ่อนชำระออนไลน์","h1":"","h5":"ช่วยให้ผู้ซื้อช้อปสินค้าหรือบริการที่ราคาสูงได้ โดยไม่ต้องใช้เงินก้อน","h4":""},"MonthlyPaymentOptions":"ระยะเวลาผ่อนชำระและอัตราดอกเบี้ย","OfferFlexiblePayment":"เสนอแผนการชำระเงินที่ยืดหยุ่นตั้งแต่ 3 ถึง 36 เดือน คุณจะได้รับเงินเต็มจำนวนทันที ในขณะที่ให้ลูกค้าของคุณมีอิสระในการชำระเงินตามความสะดวกของตนเอง","CardBrand":"บัตรเครดิต","KTC":"บัตรเคทีซี","KrungsriFirstChoice":"บัตรกรุงศรีเฟิร์สช้อยส์ , บัตรโฮมโปร , บัตรเมกาโฮม","KrungsriCard":"บัตรกรุงศรี วีซ่า , บัตรเซ็นทรัล , บัตรเทสโก้โลตัส","InstallmentTermLengths":{"text":"ระยะเวลาผ่อนชำระ","KTC":"3, 4, 5, 6, 7, 8, 9, 10","KrungsriFirstChoice":"3, 4, 6, 9, 10, 12, 18, 24, 36","KrungsriCard":"3, 4, 6, 9, 10"},"MonthlyMinimum":{"text1":"ยอดเงินชำระขั้นต่ำ","text2":"รายเดือน","KTC":"300","KrungsriFirstChoice":"300","KrungsriCard":"500"},"InterestAbsorbedCustomer":{"text":"ผู้ถือบัตรรับผิดชอบดอกเบี้ย","KTC":"0.80%","KrungsriFirstChoice":"1.00%","KrungsriCard":"0.74%"},"InterestAbsorbedMerchant":{"text":"ร้านค้ารับผิดชอบดอกเบี้ย","KTC":"2.10%","KrungsriFirstChoice":"2.20%","KrungsriCard":"2.20%"},"GetPaidIn":"พร้อมเพย์ คิวอาร์โค้ด","3simpleSteps":"รองรับลูกค้าที่ใช้บริการ Mobile Banking ทุกธนาคาร","UserScansOrUploadsTheQR":"","TheUserScansOrUploads":"สแกนหรืออัปโหลดคิวอาร์โค้ดจากโมบายแบงก์กิ้ง","UserConfirmsPayment":"","TheUserVerifies":"ตรวจสอบยอด และยืนยันเพื่อชำระเงิน","YouReceiveFunds":"","FundsAreInstantly":"เงินจะถูกโอนมายังบัญชีของร้านค้าที่ผูกกับมันนี่ สเปซ","UnifiedReportingDashboard":"แดชบอร์ดการรายงาน","AllTransactionsAreConsolidated":"รวมธุรกรรมทั้งหมดไว้ในที่เดียว  เข้าถึงข้อมูลการรับชำระเงินเชิงลึก ค้นหาธุรกรรมอย่างง่ายดาย และดาวน์โหลดรายงานย้อนหลังได้เอง","EliminateFrictionAtCheckout":"หน้าจอการชำระเงินเป็นมิตรมากขึ้น !","CustomersCanMakePayments":"ผู้ซื้อสามารถเลือกช่องทางการชำระเงิน ประเภทต่างๆ ได้ง่ายขึ้น หรือ เปรียบเทียบยอดผ่อนชำระได้สบายๆ"}}')
    },
    1917: function (e, t, a) {
        e.exports = "./img/ktc.53a16ddf.png"
    },
    "1b7f": function (e, t, a) {
        e.exports = "./img/partner_1_2x.46f034b8.png"
    },
    "265c": function (e, t, a) {
        "use strict";
        a("3025")
    },
    "2d62": function (e, t, a) {
        "use strict";
        a("92b8")
    },
    3025: function (e, t, a) {},
    "337d": function (e, t, a) {
        e.exports = "./img/partner_4_2x.444d7324.png"
    },
    3385: function (e, t, a) {
        e.exports = "./img/step_1.ed44f328.png"
    },
    "37a8": function (e, t, a) {
        e.exports = "./img/mail.bfe7e69e.svg"
    },
    4490: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABHCAYAAACZKWD0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN2SURBVHgB7dvPahNRFMfxX+JYQi1tXFToytSdKwuudKOgrtxEX8A+gi8gLbgWcSEuXLjwARREd1KXBRdaRMVVqyCiFlus1jakGecUT5nGtsmce86dmXC/EIaEkD+f3DsMdyaAsOZ8fL35Kq5jwIrj+DwcqkJaBefQwtwgoSaYM8lmBg7JQWPUk9vUoKD+w5yFY3LQnU9SftQuzAYccgelSoyqNTI5F9DdeCVE1cak9ECpEqFaYFI6Uz5dCVCtMCl9UKrAqJaYlO6UT1dAVGtMyg6UKhCqD0zKZsqnKwBqRkynz2kPSuWIKhiZ/kGbcwIYQt3EbXjM1zRPJxuhtey/4uQw8PA0msmXnIKH8sCkvEx5wrx5EhiJtn+IOWvUvDApc1DGPBLtPGSKmicmJQVt9POkPTA5E9S8MSmzEXoAJqeKWgRMygS0D0xOBVUbM3k98aGTOmgGTM4J1WhkjkGY6j5UgMmJUIsyzdOpjVAHTC4TahExKRVQBUyuL9SiYlLOoIqY3IGoRcaknPahBpjcnqhFx6TEI9QQk9uFWgZMSsRx7ThOXRo3xeQY9XGynYaHVlsx7r7dhDTZ8t0EFm69+YmPv7bgIUKdhocI8+LTb1hYXjsKYSLQSqUye+/d2osLyZt7QjVvB/NHC08+tVcgTLwPXd7oJJhtDAJqGtM158OmsqNqYlIqB/ZlRdXGpBxAK7tWZMqGaoFJiUFj/L/EVRZUK0xKffmu6KiWmJTJAnNRUa0xKTFopccFAUVD9YFJmV7bVBRUX5iU+WnkvFF9YlJeLnTIC9U3JiUDfbCY+azg5/UO7nzYXIWnfreBq89XvGJSMtCNbNc2RdUqzp4Yx2J7uP7sK5ZgHGHeeA8Mj9UxWjsMn5lPecYcrQ1t37+/hIYlKmMurgOHD1VxZvKYV1RT0G5Mzgo1jcn5RhWBRlHU6PmcfTA5bdS9MDmfqCYjtBcmp4V6ECbnC1UdtF9MzhW1H0zOB6oqaFZMToqaBZOzRhWBxtV2o/sxKSaXFVWCyVmiqoxQV0yuX1QXTM4K1RlUC5PrhaqByVmgOoFqY3L7oWpictqosvPynWrDCpPrRrXA5DRRRaC1ocgUk2NUS0xOC7UCQc35+FGy8fIHLmqiBnzZgJdaWx18X/1z5eXlkdcIhUKhUCgUCoVCoVAoFAqFQoPUX3A1cYBNsrSqAAAAAElFTkSuQmCC"
    },
    "46cc": function (e, t, a) {
        "use strict";
        a("5907")
    },
    "47a1": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAArCAYAAADIWo5HAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALUSURBVHgB7ZhLSFRRGMe/m2MPG1BQMqksamxqU84q6LUrsKAiMHJ2U7tIg6AihYgWBe160FJbGSRERUEUuChrMYvGoMLSIHugldZIo2YPpvM/dGJO954LivldOPcHlzNz/nMu5/vO/R53nDW7b+aJkfutm4mTWWQ5oQNoGomWRKakceLpgMaGFcYFqZ1LjVr9lkVT0jjRjqU2XkqpXcuoZsl8Wlgxl9quv6a+t6NSi4m5xmSMEuI3seooddx9R90vRv5qWLcpUe7ScB84FFrtqjJ5T6WBkQOniBPNAdhY1+MhaSRGZTzAZ6V192Q1I6BhDkb2vclp2uDQN6MGxttvEyeuEPg69pO2HXxEXrVxQBiz52hajBOeGtZlhLH/0isMh/ZAODBoONx9wNVrR4gTzySIuDWBeDfhty6oVcBzV6kd1XSm9aXnAlSBlovPPbWmvcup2aAd3x+nlgvPXPPzktuJEy0EcILnjq2lqvI51CsSGzaMJDYZDbkAmkqgfhrgboWLKlc3nFRfciIB1ogylhv7RZ3pj5R++oUKtSphzPcfeTH/mboyw5rmiHF2cZGc70x/0rRRcUVLimUFuPPwg7YBv75iJnCFQNuNfnmyXrHece+9UUP2h74xUeHScPKHzj7xzR9csFeBQL4NoiM04XeK6PRM1G2opCCihQASFlpZZPPTogqgc0MMKw1X876VUkMoFCZBXE2i5T1/5ZVcg7WFWv3WxTQwPKFpYLBsHXGiPQHYXN36BXLDGJXxAMbiFJWmjFeafA8QT8dktCCgPQHydESJyohs7Xj8GDpO2AQSKFrpQscBzEHL/7lHkHAlQXRsOVm2IsbNTqcWuFZYbdDvpP6HxgV7g1566QRxwu4A9neBbDbL2ghxE/4rTJYTGW+/RTbj9FA8zAE2EzqALMd6B4SNEFlO6ACynDAJ9icPW50Ew1aYLCd0AFlOxKH8ZbKY3zBQgBFbdASRAAAAAElFTkSuQmCC"
    },
    "4ffd": function (e, t, a) {
        e.exports = "./img/logo.82fc949c.png"
    },
    "54ce": function (e) {
        e.exports = JSON.parse('{"linksPage":{"info":"Payment Links","title":"Create and share payment link conveniently and quickly through social media or email. We support multiple payment methods to minimize transaction fee and avoid development complications.","steps":[{"id":"1","content":"Create payment link"},{"id":"2","content":"Share link with your customer through social media"},{"id":"3","content":"Customer can open and pay immediately"},{"id":"4","content":"System notifies successful payment"}],"linkSectionBuy":{"left":{"title":"Paid link for buyer to fill in.","subtitle":"You can copy this link to your buyers.","radioWrap":{"label":"Who is responsible for fee:","radioList":{"seller":"Seller","buyer":"Buyer"}},"fieldsWrap":{"label1":"Terms & Conditions","label2":"I acknowledge that I will NOT claim the refund or cancel the order.","placeHolder":"I acknowledge that I will NOT claim the refund or cancel the order.","buyerLink":"MPay Link","print":"Print","copyLink":"Copy Link"}},"right":{"subtitle":"Flexible Payment","title":"Pay-by-Link allows customers to specify the payment value themselves.","textBlock":"Perfect for e-commerce or shops with multiple products, prices, and orders. Convenience for simple and straightforward payment.","items":[{"cap":"Benefits","content":"Merchant don’t need to handle about this payment link much , a payer will fill in by themselves"},{"cap":"Restriction","content":"If a payer fill in wrongly, or forgot some transportation expense or some extra plans to pay. Will cause more merchant’s back-end system."}]}},"linkSectionMerch":{"left":{"subtitle":"Most precise","title":"Accurate Payment","textBlock":"Pay-by-Link also allows shopkeepers to specify the payment value and product details to safeguard against mistakes, as well as managing stock accurately by checking how many payment links have been created and completed.","items":[{"cap":"Benefits","content1":"A payer just only double check the product’s detail before making a payment.","content2":"A payment link can be counted as per success payment. This can help the stock of products."},{"cap":"Restriction","content":"A payment link can be used for individual payer only."}]},"right":{"title":"Get paid shop details","subtitle":"You can set details and send links to your customers.","items":[{"label":"Prouduct / Service Name:","placeholder":"iPhone 8 / 32gb"},{"label":"Amount ( ฿ )","placeholder":"25,000"}],"checkList":[{"label":"Credit / Debit Card"},{"label":"Installment payment plan"}],"radioWrap":{"label":"Responsible free person","radioList":[{"label":"Seller"},{"label":"Buyer"}]},"fieldsWrap":{"label1":"Terms & Conditions","label2":"I acknowledge that I will NOT claim the refund or cancel the order.","placeHolder":"I acknowledge that I will NOT claim the refund or cancel the order."},"more":{"link":"More Details","buttonValue":"Create Payment Link"}}},"joinSection":{"info":" No Monthly Fee <br> No Minimum Monthly Transaction <br> No Extra Service Fees <br> No Hidden Fees","textBlock":"Start accepting payments with Money Space","link":"Start Now"}}}')
    },
    "54f1": function (e) {
        e.exports = JSON.parse('{"pageTitle":"Contact Us","pageSubtitle":"Money space (Company Limited)","title":"Opening hours:","data":"From Monday to Friday. 08.30-17.30 hrs.","contactsList":["th[at]moneyspace.net","02-118-3082"],"contactsListEmail":"th@moneyspace.net","locationBlock":{"title":"Bangkok","content":"No.1 Glas Haus Building. Level P. Unit P01. Sukhumvit 25. Vadhana. Bangkok."}}')
    },
    "55a5": function (e) {
        e.exports = JSON.parse('{"pageTitle":"ติดต่อเรา","pageSubtitle":"บริษัท มันนี่ สเปซ จำกัด","title":"วันและเวลาทำการ","data":"จันทร์ - ศุกร์ เวลา 08.30 - 17.30 น.","contactsList":["th@moneyspace.net","02-118-3082"],"contactsListEmail":"th@moneyspace.net","locationBlock":{"title":"กรุงเทพมหานคร","content":"เลขที่ 1 อาคารกลาสเฮ้าส์ ชั้น P Unit P01 ซ.สุขุมวิท 25 วัฒนา"}}')
    },
    "58ca": function (e, t, a) {
        "use strict";
        a("67a2")
    },
    5907: function (e, t, a) {},
    "5a15": function (e, t, a) {
        e.exports = "./img/image_3.2eeb4c9e.jpg"
    },
    "5b45": function (e, t, a) {
        e.exports = "./img/jcb.807e5338.png"
    },
    "5c12": function (e) {
        e.exports = JSON.parse('{"header":{"logo":"money space","signup":"signup","menu":"Menu","nav":{"payment":"Payment Links","product":"Product","pricing":"Pricing & Plans","contact-us":"Contact Us","language":{"title":"Language","thai":"Thailand","eng":"English"}}},"slogan1":"Accepting credit cards online just got easier!","slogan2":"Get more value with flexible online payment methods. Support for credit card payment and other channels. Increased competitive edge. Earn profit in the age of digital transactions with lowest fees.","title":"Create payment link","startSection":{"signup":"Register for free","createLinkForm":{"title":"Create payment link","subtitle":"You can set details and send links to your customers.","proServiceLabel":"Product / Service Name: ","proServiceValue":"iPhone 8 / 32gb","amountLabel":"Amount ( ฿ )","amountValue":"25,000","card":"Credit / Debit Card","submit":"Create Payment Link"},"createLinkCard":{"title":"iPhone 8 / 32gb","cost":"$25,000","pay":"Pay"},"createLinkPayForm":{"checkout":"Check Out Demo","subTitle":"powered by","title":"money space","cardNoLabel":"Card Number","cardNoValue":"1123 2000 3200 2391","expDateLabel":"Exp Date","expDateValue1":"08","expDateValue2":"2020","cvcLabel":"CVC","cvcValue":"032","card":"Credit / Debit Card","submit":"PAY NOW","way":"On your way"}},"mainAbout":{"left":{"productNameLabel":"Product Name","productNameValue":"iPhone 8 - Black","priceLabel":"Price","priceValue":"$600","payLabel1":"space.","payLabel2":"pay","payValue":"22010"},"right":{"title1":"The Solution for Your E-Commerce Businesses","title2":" Pay-by-Link","content":"Accept payment through all of your shop’s social media platforms. Create and share links with real-time results for convenience anytime & anywhere."}},"advantages":{"item1":{"title1":"Safety Guaranteed with Anti-Fraud Machine Learning Technology","title2":"","content":"Security monitoring is always on the lookout for fraudulent behaviour using intelligent privacy protection systems to make sure your information and business is safe 24 hours per day."},"item2":{"title1":"Lowest Fees & No Hidden Fees","title2":"Price","content":"Keep your profit in every transaction with free connection service and free subscription. There are no hidden fees."},"item3":{"title1":"Accept Payments Through Any Platforms","title2":"options","content":"Let your customers pay where they want. Payment processing is available on every channels for both online shops and physical shops. Process every order. Never miss a trade."},"item4":{"title1":"Confidence of International Safety Standards","title2":"a Culture","content":"Money Space has received the PCI DSS Certificate (Payment Card Industry Data Security Standard). It is the golden safety standard for credit card payment processing businesses to ensure systems stability and the safety of credit card information.’"}},"mainInfo":{"title":"Connect Effectively and Effortlessly","content":{"item1":{"value":"Decrease the time and cost of managing your payment channels by connecting the API of the shopping cart and the payment processor effectively. Many apps are available for developers to experiment. Our popular plugins include WooCommerce, Magento, and Opencart."},"item2":{"label":"Manage Your Transaction at International Standards","value":"Send and receive money with confidence for you and your customers with international level transaction security. Money Space is a verified business with official permit for providing payment processing services under the Bank of Thailand and is also guaranteed with PCI DSS Certificate (Payment Card Industry Data Security Standard) to ensure low risk of credit card information leakage. More importantly, our data storage, computer systems, and firewall is protected with SSL 2048"}},"security1":"PCI DSS ","security2":"Bank of Thailand","animation":{"website":"Website","payment":"Payment","api":"API"}},"joinSection":{"title":"Lowest Fees with Highest Care for Maximum Safety.","content":"Accept payments with Money Space.","start":"Sign up now"},"footer":{"productArea":{"title":"Products","products":["Pay-By-Link","Simple API"]},"featureArea":{"title":"Features","features":["Dash Board and Check out","Payments methods","Integrations","Security","Checkout","Invoice Payments"]},"moneySpaceArea":{"title":"Money Space","moneySpaces":["About Us","Compliance","Contact","Media","Privacy Notice"]},"faqArea":{"title":"FAQs","faqs":["Prohibit Businesses","Facebook","Instagram","Youtube"]}}}')
    },
    "5e52": function (e) {
        e.exports = JSON.parse('{"demoPage":{"pageTitle":"Demo","productCard":{"name":"Apple Watch Series 5 Hermes ","description":"Series 5 Apple Watch Hermes 44 mm case in Space Black stainless steel & Rallye single tour band in Black Gala calfskin…","more":"Read more"},"item":[{"title":"Product details","para":["Product details","Product details","Product details"]},{"title":"Care","para":["Care"]},{"title":"Delivery & returns","para":["Delivery & returns"]},{"title":"Gifting","para":["Gifting"]}],"buy":{"text":"Pay with Money Space","cost1":"฿","cost2":"37230"},"back":{"text":"Return to API Instructions"}}}')
    },
    "5f15": function (e, t, a) {
        e.exports = "./img/done.a6b1924a.svg"
    },
    "636c": function (e) {
        e.exports = JSON.parse('{"privacyPolicy":{"title":"นโยบายความเป็นส่วนตัวสำหรับลูกค้า","subtitle":"บริษัท มันนี่ สเปซ จำกัด ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของคุณ โดยนโยบายความเป็นส่วนตัวฉบับนี้ได้อธิบายแนวปฏิบัติเกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล รวมถึงสิทธิต่าง ๆ ของเจ้าของข้อมูลส่วนบุคคล ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล"},"privacyCollectionofPersonalData":{"title":"การเก็บรวบรวมข้อมูลส่วนบุคคล","subtitle":"เราจะเก็บรวบรวมข้อมูลส่วนบุคคลที่ได้รับโดยตรงจากคุณผ่านช่องทาง ดังต่อไปนี้","bulletPoint":{"text1":"การสมัครสมาชิก"}},"TypesofDataCollected":{"title":"ประเภทข้อมูลส่วนบุคคลที่เก็บรวบรวม","bulletPoint":{"PersonalData":{"name":"ข้อมูลส่วนบุคคล","text":"เช่น ชื่อ นามสกุล อายุ วันเดือนปีเกิด สัญชาติ เลขประจำตัวประชาชน หนังสือเดินทาง เป็นต้น"},"ContactInformation":{"name":"ข้อมูลการติดต่อ","text":"เช่น ที่อยู่ หมายเลขโทรศัพท์ อีเมล เป็นต้น"},"AccountDetails":{"name":"ข้อมูลบัญชี","text":"เช่น บัญชีผู้ใช้งาน ประวัติการใช้งาน เป็นต้น"},"ProofOfIdentity":{"name":"หลักฐานแสดงตัวตน","text":"เช่น สำเนาบัตรประจำตัวประชาชน สำเนาหนังสือเดินทาง เป็นต้น"},"TransactionAndFinancialInformation":{"name":"ข้อมูลการทำธุรกรรมและการเงิน","text":"เช่น ประวัติการสั่งซื้อ รายละเอียดบัตรเครดิต บัญชีธนาคาร เป็นต้น"},"TechnicalData":{"name":"ข้อมูลทางเทคนิค","text":"เช่น IP Address, Cookie ID, ประวัติการใช้งานเว็บไซต์ (Activity Log) เป็นต้น"}}},"Children":{"title":"ผู้เยาว์","subtitle":"หากคุณมีอายุต่ำกว่า 20 ปีหรือมีข้อจำกัดความสามารถตามกฎหมาย เราอาจเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ เราอาจจำเป็นต้องให้พ่อแม่หรือผู้ปกครองของคุณให้ความยินยอมหรือที่กฎหมายอนุญาตให้ทำได้ หากเราทราบว่ามีการเก็บรวบรวมข้อมูลส่วนบุคคลจากผู้เยาว์โดยไม่ได้รับความยินยอมจากพ่อแม่หรือผู้ปกครอง เราจะดำเนินการลบข้อมูลนั้นออกจากเซิร์ฟเวอร์ของเรา"},"StorageOfData":{"title":"วิธีการเก็บรักษาข้อมูลส่วนบุคคล","subtitle":"เราจะเก็บรักษาข้อมูลส่วนบุคคลของคุณในรูปแบบเอกสารและรูปแบบอิเล็กทรอนิกส์ เราเก็บรักษาข้อมูลส่วนบุคคลของคุณ ดังต่อไปนี้","bulletPoint":{"text1":"ผู้ให้บริการเซิร์ฟเวอร์ในต่างประเทศ"}},"UseOfData":{"title":"การประมวลผลข้อมูลส่วนบุคคล","subtitle":"เราจะเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้","bulletPoint":{"text1":"เพื่อสร้างและจัดการบัญชีผู้ใช้งาน","text2":"เพื่อจัดส่งสินค้าหรือบริการ","text3":"เพื่อปรับปรุงสินค้า บริการ หรือประสบการณ์การใช้งาน","text4":"เพื่อการบริหารจัดการภายในบริษัท","text5":"เพื่อการบริการหลังการขาย","text6":"เพื่อรวบรวมข้อเสนอแนะ","text7":"เพื่อชำระค่าสินค้าหรือบริการ","text8":"เพื่อปฏิบัติตามข้อตกลงและเงื่อนไข (Terms and Conditions)","text9":"เพื่อปฏิบัติตามกฎหมายและกฎระเบียบของหน่วยงานราชการ"}},"DisclosureOfPersonalData":{"title":"การเปิดเผยข้อมูลส่วนบุคคล","subtitle":"เราอาจเปิดเผยข้อมูลส่วนบุคคลของคุณให้แก่ผู้อื่นภายใต้ความยินยอมของคุณหรือที่กฎหมายอนุญาตให้เปิดเผยได้ ดังต่อไปนี้","bulletPoint":{"title":"การบริหารจัดการภายในองค์กร","subtitle":"เราอาจเปิดเผยข้อมูลส่วนบุคคลของคุณภายในบริษัทเท่าที่จำเป็นเพื่อปรับปรุงและพัฒนาสินค้าหรือบริการของเรา เราอาจรวบรวมข้อมูลภายในสำหรับสินค้าหรือบริการต่าง ๆ ภายใต้นโยบายนี้เพื่อประโยชน์ของคุณและผู้อื่นมากขึ้น"}},"DataRetention":{"title":"ระยะเวลาจัดเก็บข้อมูลส่วนบุคคล","subtitle":"เราจะเก็บรักษาข้อมูลส่วนบุคคลของคุณไว้ตามระยะเวลาที่จำเป็นในระหว่างที่คุณเป็นลูกค้าหรือมีความสัมพันธ์อยู่กับเราหรือตลอดระยะเวลาที่จำเป็นเพื่อให้บรรลุวัตถุประสงค์ที่เกี่ยวข้องกับนโยบายฉบับนี้ ซึ่งอาจจำเป็นต้องเก็บรักษาไว้ต่อไปภายหลังจากนั้น หากมีกฎหมายกำหนดไว้ เราจะลบ ทำลาย หรือทำให้เป็นข้อมูลที่ไม่สามารถระบุตัวตนของคุณได้ เมื่อหมดความจำเป็นหรือสิ้นสุดระยะเวลาดังกล่าว"},"DataSubjectRights":{"title":"สิทธิของเจ้าของข้อมูลส่วนบุคคล","subtitle":"ภายใต้กฎหมายคุ้มครองข้อมูลส่วนบุคคล  คุณมีสิทธิในการดำเนินการดังต่อไปนี้","bulletPoint":{"WithdrawalOfconsent":{"name":"สิทธิขอถอนความยินยอม (right to withdraw consent)","text":"หากคุณได้ให้ความยินยอม เราจะเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ ไม่ว่าจะเป็นความยินยอมที่คุณให้ไว้ก่อนวันที่กฎหมายคุ้มครองข้อมูลส่วนบุคคลใช้บังคับหรือหลังจากนั้น คุณมีสิทธิที่จะถอนความยินยอมเมื่อใดก็ได้ตลอดเวลา"},"DataAccess":{"name":"สิทธิขอเข้าถึงข้อมูล (right to access)","text":"คุณมีสิทธิขอเข้าถึงข้อมูลส่วนบุคคลของคุณที่อยู่ในความรับผิดชอบของเราและขอให้เราทำสำเนาข้อมูลดังกล่าวให้แก่คุณ  รวมถึงขอให้เราเปิดเผยว่าเราได้ข้อมูลส่วนบุคคลของคุณมาได้อย่างไร"},"DataPortability":{"name":"สิทธิขอถ่ายโอนข้อมูล (right to data portability)","text":"คุณมีสิทธิขอรับข้อมูลส่วนบุคคลของคุณในกรณีที่เราได้จัดทำข้อมูลส่วนบุคคลนั้นอยู่ในรูปแบบให้สามารถอ่านหรือใช้งานได้ด้วยเครื่องมือหรืออุปกรณ์ที่ทำงานได้โดยอัตโนมัติและสามารถใช้หรือเปิดเผยข้อมูลส่วนบุคคลได้ด้วยวิธีการอัตโนมัติ รวมทั้งมีสิทธิขอให้เราส่งหรือโอนข้อมูลส่วนบุคคลในรูปแบบดังกล่าวไปยังผู้ควบคุมข้อมูลส่วนบุคคลอื่นเมื่อสามารถทำได้ด้วยวิธีการอัตโนมัติ และมีสิทธิขอรับข้อมูลส่วนบุคคลที่เราส่งหรือโอนข้อมูลส่วนบุคคลในรูปแบบดังกล่าวไปยังผู้ควบคุมข้อมูลส่วนบุคคลอื่นโดยตรง เว้นแต่ไม่สามารถดำเนินการได้เพราะเหตุทางเทคนิค"},"Objection":{"name":"สิทธิขอคัดค้าน (right to object)","text":"คุณมีสิทธิขอคัดค้านการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณในเวลาใดก็ได้ หากการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณที่ทำขึ้นเพื่อการดำเนินงานที่จำเป็นภายใต้ประโยชน์โดยชอบด้วยกฎหมายของเราหรือของบุคคลหรือนิติบุคคลอื่น โดยไม่เกินขอบเขตที่คุณสามารถคาดหมายได้อย่างสมเหตุสมผลหรือเพื่อดำเนินการตามภารกิจเพื่อสาธารณประโยชน์"},"DataErasureOrDestruction":{"name":"สิทธิขอให้ลบหรือทำลายข้อมูล (right to erasure/destruction)","text":"คุณมีสิทธิขอลบหรือทำลายข้อมูลส่วนบุคคลของคุณหรือทำให้ข้อมูลส่วนบุคคลเป็นข้อมูลที่ไม่สามารถระบุตัวคุณได้ หากคุณเชื่อว่าข้อมูลส่วนบุคคลของคุณถูกเก็บรวบรวม ใช้ หรือเปิดเผยโดยไม่ชอบด้วยกฎหมายที่เกี่ยวข้องหรือเห็นว่าเราหมดความจำเป็นในการเก็บรักษาไว้ตามวัตถุประสงค์ที่เกี่ยวข้องในนโยบายฉบับนี้ หรือเมื่อคุณได้ใช้สิทธิขอถอนความยินยอมหรือใช้สิทธิขอคัดค้านตามที่แจ้งไว้ข้างต้นแล้ว"},"Suspension":{"name":"สิทธิขอให้ระงับการใช้ข้อมูล (right to restriction of processing)","text":"คุณมีสิทธิขอให้ระงับการใช้ข้อมูลส่วนบุคคลชั่วคราวในกรณีที่เราอยู่ระหว่างตรวจสอบตามคำร้องขอใช้สิทธิขอแก้ไขข้อมูลส่วนบุคคลหรือขอคัดค้านของคุณหรือกรณีอื่นใดที่เราหมดความจำเป็นและต้องลบหรือทำลายข้อมูลส่วนบุคคลของคุณตามกฎหมายที่เกี่ยวข้องแต่คุณขอให้เราระงับการใช้แทน"},"Rectification":{"name":"สิทธิขอให้แก้ไขข้อมูล (right to rectification)","text":"คุณมีสิทธิขอแก้ไขข้อมูลส่วนบุคคลของคุณให้ถูกต้อง เป็นปัจจุบัน สมบูรณ์ และไม่ก่อให้เกิดความเข้าใจผิด"},"ComplaintLodging":{"name":"สิทธิร้องเรียน (right to lodge a complaint)","text":"คุณมีสิทธิร้องเรียนต่อผู้มีอำนาจตามกฎหมายที่เกี่ยวข้อง หากคุณเชื่อว่าการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ เป็นการกระทำในลักษณะที่ฝ่าฝืนหรือไม่ปฏิบัติตามกฎหมายที่เกี่ยวข้อง"},"text1":"คุณสามารถใช้สิทธิของคุณในฐานะเจ้าของข้อมูลส่วนบุคคลข้างต้นได้ โดยติดต่อมาที่เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลของเราตามรายละเอียดท้ายนโยบายนี้ เราจะแจ้งผลการดำเนินการภายในระยะเวลา 30 วัน นับแต่วันที่เราได้รับคำขอใช้สิทธิจากคุณ ตามแบบฟอร์มหรือวิธีการที่เรากำหนด ทั้งนี้ หากเราปฏิเสธคำขอเราจะแจ้งเหตุผลของการปฏิเสธให้คุณทราบผ่านช่องทางต่าง ๆ เช่น ข้อความ (SMS) อีเมล โทรศัพท์ จดหมาย เป็นต้น"}},"AdvertisingAndMarketing":{"title":"การโฆษณาและการตลาด","subtitle":"เราอาจส่งข้อมูลหรือจดหมายข่าวไปยังอีเมลของคุณ โดยมีวัตถุประสงค์เพื่อเสนอสิ่งที่น่าสนกับคุณ หากคุณไม่ต้องการรับการติดต่อสื่อสารจากเราผ่านทางอีเมลอีกต่อไป คุณสามารถกด “ยกเลิกการติดต่อ” ในลิงก์อีเมลหรือติดต่อมายังอีเมลของเราได้"},"Cookies":{"title":"เทคโนโลยีติดตามตัวบุคคล (Cookies)","subtitle":"เพื่อเพิ่มประสบการณ์การใช้งานของคุณให้สมบูรณ์และมีประสิทธิภาพมากขึ้น เราใช้คุกกี้ (Cookies)หรือเทคโนโลยีที่คล้ายคลึงกัน เพื่อพัฒนาการเข้าถึงสินค้าหรือบริการ โฆษณาที่เหมาะสม และติดตามการใช้งานของคุณ เราใช้คุกกี้เพื่อระบุและติดตามผู้ใช้งานเว็บไซต์และการเข้าถึงเว็บไซต์ของเรา หากคุณไม่ต้องการให้มีคุกกี้ไว้ในคอมพิวเตอร์ของคุณ คุณสามารถตั้งค่าบราวเซอร์เพื่อปฏิเสธคุกกี้ก่อนที่จะใช้เว็บไซต์ของเราได้"},"DataSecurity":{"title":"การรักษาความมั่งคงปลอดภัยของข้อมูลส่วนบุคคล","subtitle":"เราจะรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคลของคุณไว้ตามหลักการ การรักษาความลับ (confidentiality) ความถูกต้องครบถ้วน (integrity) และสภาพพร้อมใช้งาน (availability) ทั้งนี้ เพื่อป้องกันการสูญหาย เข้าถึง ใช้ เปลี่ยนแปลง แก้ไข หรือเปิดเผย นอกจากนี้เราจะจัดให้มีมาตรการรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคล ซึ่งครอบคลุมถึงมาตรการป้องกันด้านการบริหารจัดการ (administrative safeguard) มาตรการป้องกันด้านเทคนิค (technical safeguard) และมาตรการป้องกันทางกายภาพ (physical safeguard) ในเรื่องการเข้าถึงหรือควบคุมการใช้งานข้อมูลส่วนบุคคล (access control)"},"DataBreachNotification":{"title":"การแจ้งเหตุละเมิดข้อมูลส่วนบุคคล","subtitle":"ในกรณีที่มีเหตุละเมิดข้อมูลส่วนบุคคลของคุณเกิดขึ้น เราจะแจ้งให้สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลทราบโดยไม่ชักช้าภายใน 72 ชั่วโมง นับแต่ทราบเหตุเท่าที่สามารถกระทำได้ ในกรณีที่การละเมิดมีความเสี่ยงสูงที่จะมีผลกระทบต่อสิทธิและเสรีภาพของคุณ เราจะแจ้งการละเมิดให้คุณทราบพร้อมกับแนวทางการเยียวยาโดยไม่ชักช้าผ่านช่องทางต่าง ๆ เช่น  เว็บไซต์ ข้อความ (SMS) อีเมล โทรศัพท์ จดหมาย เป็นต้น"},"ChangesToThisPrivacyPolicy":{"title":"การแก้ไขเปลี่ยนแปลงนโยบายความเป็นส่วนตัว","subtitle1":"เราอาจแก้ไขเปลี่ยนแปลงนโยบายนี้เป็นครั้งคราว โดยคุณสามารถทราบข้อกำหนดและเงื่อนไขนโยบายที่มีการแก้ไขเปลี่ยนแปลงนี้ได้ผ่านทางเว็บไซต์ของเรา","subtitle2":"นโยบายนี้แก้ไขล่าสุดและมีผลใช้บังคับตั้งแต่วันที่ 08 พฤษภาคม 2564"},"LinksToOtherSites":{"title":"นโยบายความเป็นส่วนตัวของเว็บไซต์อื่น","subtitle":"นโยบายความเป็นส่วนตัวฉบับนี้ใช้สำหรับการเสนอสินค้า บริการ และการใช้งานบนเว็บไซต์สำหรับลูกค้าของเราเท่านั้น หากคุณเข้าชมเว็บไซต์อื่นแม้จะผ่านช่องทางเว็บไซต์ของเรา การคุ้มครองข้อมูลส่วนบุคคลต่าง ๆ จะเป็นไปตามนโยบายความเป็นส่วนตัวของเว็บไซต์นั้น ซึ่งเราไม่มีส่วนเกี่ยวข้องด้วย"},"ContactInformation":{"title":"รายละเอียดการติดต่อ","subtitle":"หากคุณต้องการสอบถามข้อมูลเกี่ยวกับนโยบายความเป็นส่วนตัวฉบับนี้ รวมถึงการขอใช้สิทธิต่าง ๆ คุณสามารถติดต่อเราหรือเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลของเราได้ ดังนี้","email":{"text":"อีเมล","account":"th","domain":"moneyspace.net"},"DataController":{"subtitle":"ผู้ควบคุมข้อมูลส่วนบุคคล","line1":"บริษัท มันนี่ สเปซ จำกัด","line2":"เลขที่ 1 อาคารกลาสเฮ้าส์ ชั้น P Unit P01  พระโขนงเหนือ วัฒนา กรุงเทพมหานคร 10110","line4":"เว็บไซต์ www.moneyspace.net","line5":"หมายเลขโทรศัพท์ 02-118-3082"},"DataProtectionOfficer":{"subtitle":"เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล","line1":"ฝ่ายควบคุมและการกำกับดูแล","line2":"เลขที่ 1 อาคารกลาสเฮ้าส์ ชั้น P Unit P01   วัฒนา  กรุงเทพมหานคร  10110","line4":"หมายเลขโทรศัพท์ 02-118-3082"}}}')
    },
    6607: function (e, t, a) {
        e.exports = "./img/demo_image.d4b34127.jpg"
    },
    "67a2": function (e, t, a) {},
    "67e5": function (e, t, a) {
        e.exports = "./img/dashboard.31a69a9b.png"
    },
    "681f": function (e, t, a) {},
    "6a15": function (e, t, a) {
        e.exports = "./img/Icon_1.c8d7dfe0.svg"
    },
    "6aa8": function (e, t, a) {
        e.exports = "./img/check.5fc30cd1.svg"
    },
    "6ccc": function (e, t, a) {
        e.exports = "./img/advantage_2.aa8b4f9e.svg"
    },
    7111: function (e, t, a) {
        e.exports = "./img/advantage_4.33e17a84.svg"
    },
    "718c": function (e) {
        e.exports = JSON.parse('{"linksPage":{"info":"ลิงก์ชำระเงิน","title":"ร้านค้าไม่จำเป็นต้องมีเว็บไซต์ ไม่ต้องพัฒนาระบบให้ยุ่งยาก สำหรับขายสินค้าหรือบริการ ก็สามารถรับชำระเงินจากลูกค้าด้วยช่องทางบัตรเครดิต ออนไลน์ได้ เพียงสร้างลิงก์ชำระเงิน แล้วส่งลิงก์ให้ลูกค้าผ่านทางช่องทางต่างๆบนโลกโซเชียลมีเดีย","steps":[{"id":"1","content":"สร้างลิงก์รับชำระเงิน"},{"id":"2","content":"วางลิงก์บนโซเชียลมีเดีย"},{"id":"3","content":"ลูกค้าของคุณเปิดลิงก์เพื่อชำระเงิน"},{"id":"4","content":"คุณจะได้รับการแจ้งเตือนทันทีเมื่อชำระเงินเสร็จสิ้น"}],"linkSectionBuy":{"left":{"title":"ลิงก์แบบให้ผู้ซื้อระบุจำนวนเงินเอง","subtitle":"","radioWrap":{"label":"ผู้รับผิดชอบค่าธรรมเนียม:","radioList":{"seller":"ผู้ขาย","buyer":"ผู้ซื้อ"}},"fieldsWrap":{"label1":"ข้อตกลงและเงื่อนไขการให้บริการ","label2":"ข้าพเจ้ายอมรับว่าไม่สามารถขอคืนเงิน หรือยกเลิกรายการได้","placeHolder":"ข้าพเจ้ายอมรับว่าไม่สามารถขอคืนเงิน หรือยกเลิกรายการได้","buyerLink":"","print":"","copyLink":"สร้างลิงก์"}},"right":{"subtitle":"ยืดหยุ่นที่สุด","title":"Pay-by-Link แบบให้ผู้ซื้อระบุจำนวนเงินเอง","textBlock":"","items":[{"cap":"เหมาะกับ","content":"ร้านค้าที่ต้องการรับชำระเงินแบบให้ผู้ซื้อระบุจำนวนเงินเอง หรือ ร้านค้าที่มีหน้าร้าน เพื่อให้ผู้ซื้อสแกนคิวอาร์โค้ดแล้วจ่ายเงิน"},{"cap":"","content":""}]}},"linkSectionMerch":{"left":{"subtitle":"แม่นยำที่สุด","title":"Pay-by-Link แบบระบุจำนวนเงิน","textBlock":"","items":[{"cap":"เหมาะกับ","content1":"ร้านค้าที่ต้องการระบุจำนวนเงินลงในลิงก์เพื่อให้ผู้ซื้อชำระเงินได้สะดวก","content2":"บริหารสต๊อกสินค้าร่วมกับจำนวนลิงก์การรับชำระเงินที่สำเร็จได้ง่ายขึ้น"},{"cap":"","content":""}]},"right":{"title":"ลิงก์แบบระบุจำนวนเงิน","subtitle":"","items":[{"label":"ชื่อสินค้า / บริการ:","placeholder":"ไอโฟน 8 / 32gb"},{"label":"จำนวนเงิน (฿)","placeholder":"25,000"}],"checkList":[{"label":"บัตรเครดิต / เดบิต"},{"label":"โปรแกรมผ่อนชำระเงิน"}],"radioWrap":{"label":"ผู้รับผิดชอบค่าธรรมเนียม","radioList":[{"label":"ผู้ขาย"},{"label":"ผู้ซื้อ"}]},"fieldsWrap":{"label1":"ข้อตกลงและเงื่อนไขการให้บริการ","label2":"ข้าพเจ้ายอมรับว่าไม่สามารถขอคืนเงิน หรือยกเลิกรายการได้","placeHolder":"ข้าพเจ้ายอมรับว่าไม่สามารถขอคืนเงิน หรือยกเลิกรายการได้"},"more":{"link":"รายละเอียดเพิ่มเติม","buttonValue":"สร้างลิงก์"}}},"joinSection":{"info":"ไม่มีค่าบริการรายเดือน<br>ไม่ต้องรักษายอดขั้นต่ำ<br>ไม่มีค่าบริการเชื่อมต่อ<br>ไม่มีค่าธรรมเนียมแอบแฝง","textBlock":"เริ่มรับการชำระเงินด้วย Money Space","link":"เริ่มเลย"}}}')
    },
    7612: function (e, t, a) {
        e.exports = "./img/krungsri.fcd07645.png"
    },
    "7a08": function (e, t, a) {
        e.exports = "./img/phone.c1da0e3b.svg"
    },
    "80a3": function (e, t, a) {
        e.exports = "./img/product_image.d5735f95.png"
    },
    "854b": function (e, t, a) {},
    8911: function (e, t, a) {
        e.exports = "./img/Icon_2.cdbc9913.svg"
    },
    "8b79": function (e, t, a) {
        e.exports = "./img/step_3.f2814304.png"
    },
    "8d86": function (e) {
        e.exports = JSON.parse('{"businessSection":{"subtitle":"Prohibited businesses","title":"Restricted by local law or regulation for any payment channel","contentBlock":[{"id":"1","value":"Medical, drugs and Pharmaceuticals"},{"id":"2","value":"Weapons : Firearms and weapons of all kind"},{"id":"3","value":"Money transfer services, Cash gifting, Donations or Check Cashing Gambling"},{"id":"4","value":"Adult or related products or services : Adult entertainment / All sexually-orientated or pornographic merchants"}]}}')
    },
    "8eb3": function (e, t, a) {},
    "92b5": function (e) {
        e.exports = JSON.parse('{"titleContainer":{"pageTitle":["Online Payment ","Gateway"]},"contentContainer":{"textBlock":"By just calling API for our payment gateway, your online merchant website will be capable of receiving an online payment through credit cards. Our service supports over 27 foreign currencies and enables your company to reach customers across the globe.","download":"Download API Documentation","try":"Try moneyspace API","title":"Title:"}}')
    },
    "92b8": function (e, t, a) {},
    "948e": function (e, t, a) {
        e.exports = "./img/step_4.8225e4ab.png"
    },
    "96b4": function (e) {
        e.exports = JSON.parse('{"demoPage":{"pageTitle":"การสาธิต","productCard":{"name":"Apple Watch Series 5 Hermes ","description":"Series 5 Apple Watch Hermes ตัวเรือน 44 มม. ทำจากสแตนเลสสตีล Space Black & Rallye single tour band ใน Black Gala Calfskin …","more":"อ่านเพิ่มเติม"},"item":[{"title":"รายละเอียดสินค้า","para":["รายละเอียดสินค้า","รายละเอียดสินค้า","รายละเอียดสินค้า"]},{"title":"การดูแล","para":["การดูแล"]},{"title":"การจัดส่งและการคืนสินค้า","para":["การจัดส่งและการคืนสินค้า"]},{"title":"การให้ของขวัญ","para":["การให้ของขวัญ"]}],"buy":{"text":"ชำระเงินด้วย Money Space","cost1":"฿","cost2":"37230"},"back":{"text":"กลับไปที่คำแนะนำ API"}}}')
    },
    9874: function (e, t, a) {},
    "9f02": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAABwCAYAAADCFSR2AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAcqADAAQAAAABAAAAcAAAAAAKvsF2AAAFpklEQVR4Ae2cTYsURxjHu2aXiAhBEmW95GpYiCRRV08h4OcwX8Gv4MFzAuYevAiLh+SkAUHFXKPiQQibg6xL4hsKgbjZJdmdrjxPzzy7NW339FvVVM8+/4Ghu2e6u6p+v62qp6p6J0nwAgEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQOHgEvlv9/auDV6q4JRrESN7a9Mq3q2uXYqQdKk1r7Wf0/ibU/avuG0ekSajM6dWDIpMlEuh79F6qAh7q+ygiyeOQC3QQZDoSj1ORFkKJqrpvFJFJYlLJ2DzLzEnkIkXiGSthm+yJ5NLPo8wCifpEWmMnRM6bzBKJ+kSaxGR9JJfcfc1DzZwikYuirGlNJpvWeZFZIZGLoSzYoarnysvv97Fm1pDIxdBVI63Zj1rzEuW4TzJrStQn0iRJYR8pEmXbB5kNJOoTSQOOqU2riORtTJkNJWoUWd20xpbZQiJnWVuwUx61ugLd/S9OHr1IcGcy0d5SImc3WrCz6MKa4X6tPlLy8+WnHz24cHpphY5XCHJijPlevvO97SCRsxJNZJyETf0a6UgUZ1dD1cyOEhWKrBnsFEgMJtODRIUi7aAyap0i0btMTxIVihyvR4qR/LaGRLmkczPrUSLnSVnUWrD6IWYaSJRLWsv0LJHzEyfmiJdw8TiyhcTWMgNIVCiyIGrtILGxTJJ4ii66R29+PMPnS12NnBhHepAoMiqb2bHEu3SBb4mcB2Ui0/25Vo8SK2UGlsjpawt2RhMCASSWypyBRE5bWY2kRz0CSnxP5owkRhUZZa71zPLHW19/foznTkO/uM/8kBLhyfYQfWI+/7qa1ke/vfngp1/++DVPIcDxE7rnZXoHl7i5vbt7484GrZnHecVp080gXX+xeS6wTJa4TO/grQ5LvHbr6dvnb7cnovFZKo0jcjxpHlDmzCX+t5OesOqiVmeuNYDMKBK59hlrI1WMWOEyNa1us+NRZjSJWXmMUSbSmRAQoR5kxpU4KogykSWrHx1k9kFiYhOra/hBvUlpdNdCZi8kcoU0VlvTWrD6IU0sbxvI7I3ELP9G2xRdQR/piqwps18SswIoj1rzEuV4Ss3soUR6Kj4x2vrItLSPFImyLZDZS4lZfrWPI0Va2daR2V+JlHmaaFU2/Kj5XKsr9tmrzcM/3v9ziz4LPnf6bmv3r+u31x/ztJubh8p9dRMCuR+DqAJEQf0T+k+B5Wcv350PPNGesMQfbj7d/Gd7d4X+Rf5hVd7c7zGOdGnk9kUiRRJZTXSa2dyZ3Q9F4nCYfsJ3IzFnm8nUNo6s2bTmJYqqEDLzEiWtRjKttj6yZIpO4PG2TKKc41NmmURJq65MY7SNI9PJ1Q8BJtsqiXKeD5lVEiWtOjLVjSMJSuk4sq5EAdxFZl2JklYNmbqGHxSlT6xHCqimEuW6NjKbSpS0psrUNyGw/4CyAGorUa5vIrOtREmrTCZFuLpqJK33TNTIrhIFcB2ZXSVKWkUy6TNdc60Upe/1kb4kCuBpMn1JlLTek6ltGcuMl7F8SxTARTJ9S5S0JmUqbFpDSRTArsxQEiWtPZkRg53gE9BSWHd7aHFx/d+d4c/0k9i36fNBMuC/ZOpfspkRGlRnj0zQ2p5J6XP6bjRjQsc8c8KDbjPgZ0izxw9HE9V0bOmYzh2fw2M6kjm4//j1jbWNv48M0/Q4/a7Lq3EadC9Ok+6Xwed1RLpvdq0ZUL4WrHMvCmLoeJw2Xcff87WjcywdZ9+fpp+NueuWE/sgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgwAT+B6OqquLP+t+JAAAAAElFTkSuQmCC"
    },
    a891: function (e, t, a) {
        e.exports = "./img/partner_3_2x.069f059f.png"
    },
    ac9e: function (e, t, a) {
        e.exports = "./img/arrow_right.d1078a61.svg"
    },
    add4: function (e, t, a) {
        e.exports = "./img/image_4.b4370ac5.jpg"
    },
    af44: function (e) {
        e.exports = JSON.parse('{"businessSection":{"subtitle":"แนวทางดำเนินงานธุรกิจที่ไม่สามารถให้บริการได้","title":"","contentBlock":[{"id":"1","value":"การแพทย์ยาและเวชภัณฑ์"},{"id":"2","value":"อาวุธ: อาวุธปืนและอาวุธทุกชนิด"},{"id":"3","value":"บริการโอนเงินการให้ของขวัญเป็นเงินสดการบริจาคหรือตรวจสอบการพนันด้วยเงินสด"},{"id":"4","value":"ผลิตภัณฑ์หรือบริการสำหรับผู้ใหญ่หรือที่เกี่ยวข้อง: ความบันเทิงสำหรับผู้ใหญ่ / ผู้ค้าที่มีเนื้อหาทางเพศหรือภาพอนาจารทั้งหมด"}]}}')
    },
    b503: function (e, t, a) {
        "use strict";
        a("01b9")
    },
    ba3f: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAArCAYAAADIWo5HAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACGSURBVHgB7dqxEYNADAXRlX1NOHHqflyhI1dACVRAREJCwkB0DTBQyP5XwiYaaVQznwuxB3IJgFwCINee7xdm1XvPGDRLAOQSALn2Hw/Miu+QMWiWAMglAHIJgFwCIJcAyCUAcvoANS27eh3OWRy5BEAuV+Fz3TCr/AjJJQByCYBcK64fYjeJJBiDRpbmpgAAAABJRU5ErkJggg=="
    },
    bedb: function (e) {
        e.exports = JSON.parse('{"aboutPage":{"header":{"pageTitle":"เกี่ยวกับเรา.","info1":"เราเป็นผู้ให้บริการชำระเงินออนไลน์ภายใต้ความร่วมมือของ Pay Enterprise Co. , Ltd. เราเริ่มต้นด้วยแนวคิดง่ายๆ - เพื่อช่วยให้ลูกค้าใช้ประโยชน์จากหน้าต่างแห่งโอกาส เราเข้าใจว่าต้องทำอย่างไรถึงจะประสบความสำเร็จ -","info2":"ตัวเลือกเพิ่มเติม การชำระเงินเพิ่มเติม ประสบความสำเร็จมากขึ้น"},"aboutInfo":{"left":{"title":"อิสระ 100%","text":"การเป็นอิสระหมายความว่า Money space เติบโตขึ้นโดยไม่ได้รับเงินจากนักลงทุนหรือบุคคลภายนอกอื่น ๆ สิ่งนี้ไม่เพียงหมายความว่าธุรกิจของเราจะแข็งแกร่ง แต่เรายังมีอิสระที่จะให้ความสำคัญกับความต้องการของลูกค้าเป็นอันดับแรกและไม่ใช่ความต้องการผลกำไรจากการร่วมทุนหุ้นเอกชนหรือผู้ถือหุ้น ลูกค้าของเราต้องการทราบว่าบริการของเราจะอยู่ที่นั่นเสมอไม่แตกสลายหลังจากการซื้อกิจการหรือถูกลดความสำคัญลงเมื่อวัตถุเงาอื่น ๆ ให้ความสำคัญ"},"right":{"quote":"ที่ Money Space เราค้นพบวิธีง่ายๆในการยกระดับธุรกิจอีคอมเมิร์ซของคุณด้วยการประมวลผลเกตเวย์ที่เร็วและประหยัดที่สุดในประเทศไทย!"}},"joinSection":{"title":"การบริการลูกค้าที่แท้จริง","text":"ทีมบริการที่เป็นมิตรของเราไม่มีเทียร์ไม่มีบอทไม่มีแฮนด์ออฟ ผู้เชี่ยวชาญที่ได้รับการฝึกฝนมาเป็นอย่างดีซึ่งรับโทรศัพท์และแก้ปัญหาของคุณได้จริง ที่ Money space ประสบการณ์ของลูกค้าเป็นศูนย์กลางของทุกสิ่งที่เราทำไม่ใช่การประเมินมูลค่าของ บริษัท หรือราคาหุ้น","link":"เริ่มเลย"}}}')
    },
    bf1c: function (e) {
        e.exports = JSON.parse('{"titleContainer":{"pageTitle":["ระบบ","ชำระเงินออนไลน์"]},"contentContainer":{"textBlock":"เพียงแค่เรียก API สำหรับเกตเวย์การชำระเงินของเราเว็บไซต์ร้านค้าออนไลน์ของคุณจะสามารถรับการชำระเงินออนไลน์ผ่านบัตรเครดิตได้ บริการของเรารองรับสกุลเงินต่างประเทศมากกว่า 27 สกุลเงินและช่วยให้ บริษัท ของคุณสามารถเข้าถึงลูกค้าได้ทั่วโลก","download":"ดาวน์โหลดเอกสาร API","try":"ลองใช้ moneyspace API","title":"หัวข้อ:"}}')
    },
    bff2: function (e) {
        e.exports = JSON.parse('{"pricigPageHeader":{"subtitle":"Big Fees, Big Problems,","title":"Not Here!"},"pricingPageContent":{"calculator":{"title":"Fee Calculator","fieldItem":[{"amountLabel":"Transaction Amount"},{"amountLabel":"Free amount including VAT"}],"calculate":"Calculate","calcInfo":{"info":["The lowest free ","rate of 2.59% ","per transaction"],"note":"free rate may be negotiable for high volume merchants"}},"pricingInfo":{"subtitle":"Best in Class","title":"Withdrawal Fees","textBlock":"We provide a free refund service to your customer before 20.00 hrs. After 20.00 hrs., only a credit card fee is charged for the refund.","buttons":["Get Started","Learn More"]},"tariffList":{"item":[{"cost":"15","constUnit":"Baht","info":"for a merchant who is receiving a transaction less than 30,000 Baht"},{"cost":"Free","info":"for a merchant who is receiving a transaction more than or equal to 30,000 Baht"}]},"joinSection":{"title":["No monthly fee ","No set up / integration ","No sale maintenance "],"textBlock":"Start accepting payments with Money Space","text":"Start Now"}}}')
    },
    c6c9: function (e) {
        e.exports = JSON.parse('{"header":{"logo":"money space","signup":"เข้าสู่ระบบ","menu":"เมนู","nav":{"payment":"ลิงก์การชำระเงิน","product":"ช่องทางการรับชําระเงิน","pricing":"อัตราค่าบริการ","contact-us":"ติดต่อเรา","language":{"title":"เลือกภาษา","thai":"ไทย","eng":"อังกฤษ"}}},"slogan1":"ถูกกว่า ! ด้วยหลากหลายช่องทางรับชำระเงินบนโลกออนไลน์","slogan2":"เราช่วยให้ธุรกิจของคุณสามารถรับชำระเงินด้วยบัตรเครดิตได้ ด้วยอัตราค่าธรรมเนียมที่ถูกที่สุด เพื่อเพิ่มศักยภาพการแข่งขันให้กับธุรกิจในยุคดิจิทัล","title":"สร้างลิงก์ชำระเงิน","startSection":{"signup":"สมัครบริการฟรี","createLinkForm":{"title":"สร้างลิงก์ชำระเงิน","subtitle":"คุณสามารถกำหนดรายละเอียดและส่งลิงก์ไปยังลูกค้าของคุณ","proServiceLabel":"ชื่อสินค้า / บริการ:","proServiceValue":"ไอโฟน 8 / 32gb","amountLabel":"จำนวนเงิน (฿)","amountValue":"25,000","card":"บัตรเครดิต / เดบิต","submit":"สร้างลิงก์ชำระเงิน"},"createLinkCard":{"title":"ไอโฟน 8 / 32gb","cost":"25,000 บาท","pay":"จ่าย"},"createLinkPayForm":{"checkout":"ตัวอย่างหน้าจอการชำระเงิน","subTitle":"ความปลอดภัยโดย","title":"money space","cardNoLabel":"หมายเลขบัตร","cardNoValue":"1123 2000 3200 2391","expDateLabel":"วันหมดอายุ","expDateValue1":"08","expDateValue2":"2020","cvcLabel":"CVC","cvcValue":"032","card":"บัตรเครดิต / เดบิต","submit":"จ่ายตอนนี้","way":"ชำระเงินสำเร็จ"}},"mainAbout":{"left":{"productNameLabel":"MacBook Air","productNameValue":"iPhone 8 - สีดำ","priceLabel":"ราคา","priceValue":"$600","payLabel1":"ราคา","payLabel2":"จ่าย","payValue":"22,010"},"right":{"title1":"ร้านค้าบนโซเชียลมีเดีย","title2":" Pay-by-Link","content":"หากคุณขายบนโซเชียลมีเดีย เช่น ไลน์ หรือ เฟซบุ๊ก เราคือโซลูชันที่สมบูรณ์แบบสำหรับคุณ คุณสามารถสร้างและแชร์ลิงก์ได้ทันที - ทุกที่ทุกเวลา"}},"advantages":{"item1":{"title1":"ระบบป้องกันการฉ้อโกงโดยแมชชีนเลิร์นนิง","title2":"","content":"ตรวจจับและป้องกันการฉ้อโกงให้กับธุรกิจได้ทุกประเภทด้วยการฝึกสอนข้อมูลหลายแหล่ง และเป็นระบบการทำงานที่มอบให้ฟรี !"},"item2":{"title1":"อัตราค่าธรรมเนียมถูกที่สุด","title2":"","content":"ไม่มีค่าธรรมเนียมการเชื่อมต่อ ค่าธรรมเนียมรายเดือนหรือค่าธรรมเนียมแอบแฝง"},"item3":{"title1":"ช่องทางการจ่ายเงินยอดฮิต","title2":"สำหรับร้านค้า","content":"ตั้งแต่ร้านค้าออนไลน์ ไปจนถึงแพลตฟอร์มและร้านค้ามีหน้าร้าน เราให้บริการระบบรับชำระเงินแบบสมบูรณ์ที่จำเป็นสำหรับการชำระเงินในทุกช่องทาง"},"item4":{"title1":"ยึดหลักความปลอดภัย","title2":"","content":"มันนี่ สเปซ ได้รับการรับรองมาตรฐาน PCI DSS ซึ่งเป็นมาตรฐานสากลด้านเทคโนโลยีสารสนเทศขององค์กรที่มีการจัดการเกี่ยวกับข้อมูลบัตรเครดิต"}},"mainInfo":{"title":"ร้านค้าออนไลน์","content":{"item1":{"value":"หากคุณต้องการลดความผิดพลาดจากเจ้าหน้าที่ หรือลดภาระของฝ่ายงานต่างๆ ร้านค้าออนไลน์ของคุณที่มีระบบการจัดการหน้าร้านหรือตะกร้าสินค้า การเชื่อมต่อแบบ API ที่ง่ายๆนี้ สามารถช่วยคุณได้ รองรับหลากหลายภาษาโปรแกรม อีกทั้งการเชื่อมต่อผ่านปลั๊กอิน, API หรือ SDK"},"item2":{"label":"มาตรฐานความปลอดภัยและการกำกับดูแล","value":"เพื่อรับรองว่าการรับชำระเงินของร้านค้า และการชำระเงินของและผู้ถือบัตร ให้เป็นได้อย่างมั่นใจ และไม่ต้องกังวลเรื่องความเสี่ยง มันนี่ สเปซ จึงได้ให้การบริการที่เอาใจใส่อย่างใกล้ชิดในเรื่องการรักษาความปลอดภัยจากหลายๆ แง่มุม ตั้งแต่การสร้างระบบการจัดการข้อมูล, การเข้ารหัสข้อมูล (Data Encryption) ด้วย SSL 2048 bits, การวางระบบเครือข่ายคอมพิวเตอร์ตามมาตรฐานและ Firewall ที่มีประสิทธิภาพจนถึงการตรวจสอบการรักษาความปลอดภัยตามมาตรฐานสากล PCI DSS รวมถึง การปฏิบัติงานที่สอดคล้องกับหน่วยงานที่กำกับดูแล"}},"security1":"PCI DSS ","security2":"ธนาคารแห่งประเทศไทย","animation":{"website":"เว็บไซต์","payment":"การชำระเงิน","api":"API"}},"joinSection":{"title":"ถูกกว่า, ใส่ใจกว่า, ปลอดภัยกว่า","content":"เริ่มรับการชำระเงินด้วย Money Space","start":"เริ่มเลย"},"footer":{"productArea":{"title":"ผลิตภัณฑ์","products":["ร้านค้าบนโซเชียลมีเดีย<br>(Pay-by-Link)","ร้านค้าออนไลน์<br>(Simple API)"]},"featureArea":{"title":"คุณสมบัติ","features":["แดชบอร์ดและเช็คเอาท์","วิธีการชำระเงิน","บูรณาการ","ความปลอดภัย","เช็คเอาท์","การชำระเงินตามใบแจ้งหนี้"]},"moneySpaceArea":{"title":"Money Space","moneySpaces":["เกี่ยวกับเรา","การปฏิบัติตาม","ติดต่อเรา","สื่อ & ประชาสัมพันธ์","ประกาศการคุ้มครองข้อมูลส่วนบุคคล"]},"faqArea":{"title":"FAQs","faqs":["หลักเกณฑ์การให้บริการ","เฟซบุ๊ก","อินสตาแกรม","Youtube"]}}}')
    },
    cd49: function (e, t, a) {
        "use strict";
        a.r(t);
        a("e260"), a("e6cf"), a("cca6"), a("a79d");
        var c = a("7a23"),
            o = a("6c02"),
            i = (a("77ed"), a("47e2")),
            n = a("5c12"),
            s = a("c6c9"),
            r = a("54f1"),
            l = a("55a5"),
            d = a("92b5"),
            b = a("bf1c"),
            p = a("bff2"),
            u = a("fc64"),
            O = a("8d86"),
            j = a("af44"),
            m = a("54ce"),
            g = a("718c"),
            y = a("fb83"),
            h = a("bedb"),
            f = a("5e52"),
            N = a("96b4"),
            V = a("636c"),
            v = a("ecdb"),
            S = a("156d"),
            k = a("f3c2"),
            P = Object(i["a"])({
                messages: {
                    en: Object.assign({
                        address: "{account}{'@'}{domain}"
                    }, n, r, d, p, O, m, y, f, v, k),
                    th: Object.assign({
                        address: "{account}{'@'}{domain}"
                    }, s, l, b, u, j, g, h, N, V, S)
                },
                fallbackLocale: localStorage.getItem("locale") || "th",
                locale: localStorage.getItem("locale") || "th"
            }),
            D = P;

        function x(e, t, a, o, i, n) {
            var s = Object(c["resolveComponent"])("router-view");
            return Object(c["openBlock"])(), Object(c["createBlock"])(s)
        }
        var A = Object(c["defineComponent"])({
                name: "App"
            }),
            w = (a("ce3b"), a("d959")),
            C = a.n(w);
        const B = C()(A, [
            ["render", x]
        ]);
        var I = B,
            T = Object(c["withScopeId"])("data-v-7e485336");
        Object(c["pushScopeId"])("data-v-7e485336");
        var _ = {
            id: "bodyWrap"
        };
        Object(c["popScopeId"])();
        var L = T((function (e, t, a, o, i, n) {
                var s = Object(c["resolveComponent"])("StartSection"),
                    r = Object(c["resolveComponent"])("MainAbout"),
                    l = Object(c["resolveComponent"])("Advantages"),
                    d = Object(c["resolveComponent"])("MainInfo"),
                    b = Object(c["resolveComponent"])("JoinSection"),
                    p = Object(c["resolveComponent"])("Footer");
                return Object(c["openBlock"])(), Object(c["createBlock"])("div", _, [Object(c["createVNode"])(s), Object(c["createVNode"])(r), Object(c["createVNode"])(l), Object(c["createVNode"])(d), Object(c["createVNode"])(b), Object(c["createVNode"])(p)])
            })),
            M = a("1b7f"),
            F = a.n(M),
            W = a("e05b"),
            R = a.n(W),
            U = a("a891"),
            K = a.n(U),
            E = a("337d"),
            H = a.n(E),
            q = a("80a3"),
            J = a.n(q),
            z = a("4ffd"),
            Q = a.n(z),
            Y = a("4490"),
            G = a.n(Y),
            X = a("0158"),
            Z = a.n(X),
            $ = a("5f15"),
            ee = a.n($),
            te = {
                class: "startSection"
            },
            ae = {
                class: "container"
            },
            ce = {
                class: "mainBanner"
            },
            oe = {
                class: "wrapper"
            },
            ie = {
                class: "left"
            },
            ne = {
                class: "bannerInfo"
            },
            se = {
                class: "slogan font-prompt",
                style: {
                    "font-size": "38px"
                }
            },
            re = {
                style: {
                    "font-size": "18px"
                }
            },
            le = {
                href: "#",
                class: "btnIconType1"
            },
            de = {
                class: "in"
            },
            be = {
                class: "text"
            },
            pe = Object(c["createVNode"])("span", {
                class: "icon-arrow"
            }, null, -1),
            ue = Object(c["createVNode"])("ul", {
                class: "partnersList"
            }, [Object(c["createVNode"])("li", null, [Object(c["createVNode"])("img", {
                src: F.a,
                alt: "partner"
            })]), Object(c["createVNode"])("li", null, [Object(c["createVNode"])("img", {
                src: R.a,
                alt: "partner"
            })]), Object(c["createVNode"])("li", null, [Object(c["createVNode"])("img", {
                src: K.a,
                alt: "partner"
            })]), Object(c["createVNode"])("li", null, [Object(c["createVNode"])("img", {
                src: H.a,
                alt: "partner"
            })])], -1),
            Oe = {
                class: "right"
            },
            je = {
                class: "createLinkAnimation animated"
            },
            me = {
                class: "animationWrapper animated"
            },
            ge = {
                class: "createLinkForm animated"
            },
            ye = {
                class: "headBlock"
            },
            he = {
                class: "title"
            },
            fe = {
                class: "subtitle"
            },
            Ne = {
                class: "formBlock"
            },
            Ve = {
                class: "fieldWrap"
            },
            ve = {
                class: "fieldItem"
            },
            Se = {
                class: "inBlockType1"
            },
            ke = {
                class: "label"
            },
            Pe = {
                class: "inWrap"
            },
            De = {
                class: "input"
            },
            xe = {
                class: "typingText product animated"
            },
            Ae = {
                class: "fieldItem"
            },
            we = {
                class: "inBlockType1"
            },
            Ce = {
                class: "label"
            },
            Be = {
                class: "inWrap"
            },
            Ie = {
                class: "input"
            },
            Te = {
                class: "typingText sum animated"
            },
            _e = {
                class: "checkWrap"
            },
            Le = {
                class: "checkBtn"
            },
            Me = Object(c["createVNode"])("input", {
                type: "checkbox",
                name: "card",
                id: "card"
            }, null, -1),
            Fe = {
                for: "card"
            },
            We = {
                class: "btnFillType2 full"
            },
            Re = {
                class: "createLinkCard animated"
            },
            Ue = Object(c["createVNode"])("div", {
                class: "img"
            }, [Object(c["createVNode"])("img", {
                src: J.a,
                alt: "product image"
            })], -1),
            Ke = {
                class: "content"
            },
            Ee = {
                class: "info"
            },
            He = {
                class: "title"
            },
            qe = {
                class: "cost"
            },
            Je = {
                class: "button"
            },
            ze = {
                class: "btnIconType7"
            },
            Qe = Object(c["createVNode"])("img", {
                src: Q.a,
                alt: "logo",
                class: "icon"
            }, null, -1),
            Ye = {
                class: "text"
            },
            Ge = {
                class: "btnIconType7 dark animated"
            },
            Xe = Object(c["createVNode"])("img", {
                src: G.a,
                alt: "logo",
                class: "icon"
            }, null, -1),
            Ze = {
                class: "text"
            },
            $e = {
                class: "createLinkPayForm animated"
            },
            et = {
                class: "paymentForm"
            },
            tt = {
                class: "headBlock"
            },
            at = {
                class: "formTitle",
                style: {
                    "font-size": "18px"
                }
            },
            ct = {
                class: "siteLogo2"
            },
            ot = Object(c["createVNode"])("img", {
                src: Q.a,
                alt: "logo"
            }, null, -1),
            it = {
                class: "data"
            },
            nt = {
                class: "subtitle"
            },
            st = {
                class: "title"
            },
            rt = {
                class: "formBlock"
            },
            lt = {
                class: "fieldsWrap"
            },
            dt = {
                class: "fieldItem"
            },
            bt = {
                class: "col"
            },
            pt = {
                class: "inBlockType1"
            },
            ut = {
                class: "label"
            },
            Ot = {
                class: "inWrap"
            },
            jt = {
                class: "input"
            },
            mt = {
                class: "fadingText animated"
            },
            gt = {
                class: "fieldItem"
            },
            yt = {
                class: "col"
            },
            ht = {
                class: "inBlockType1"
            },
            ft = {
                class: "label"
            },
            Nt = {
                class: "inWrap comb"
            },
            Vt = {
                class: "input"
            },
            vt = {
                class: "fadingText animated"
            },
            St = {
                class: "input"
            },
            kt = {
                class: "fadingText animated"
            },
            Pt = {
                class: "col"
            },
            Dt = {
                class: "inBlockType1"
            },
            xt = {
                class: "label"
            },
            At = {
                class: "inWrap"
            },
            wt = {
                class: "input"
            },
            Ct = {
                class: "fadingText animated"
            },
            Bt = {
                class: "btnFillType2 full upp"
            },
            It = Object(c["createVNode"])("div", {
                class: "createLinkPayCard animated"
            }, [Object(c["createVNode"])("img", {
                src: Z.a,
                alt: "card"
            })], -1),
            Tt = {
                class: "createLinkResult animated"
            },
            _t = Object(c["createVNode"])("div", {
                class: "icon"
            }, [Object(c["createVNode"])("img", {
                src: ee.a,
                alt: "done"
            })], -1),
            Lt = {
                class: "text"
            },
            Mt = Object(c["createVNode"])("div", {
                class: "overlay"
            }, null, -1);

        function Ft(e, t, a, o, i, n) {
            var s = Object(c["resolveComponent"])("Header");
            return Object(c["openBlock"])(), Object(c["createBlock"])("div", te, [Object(c["createVNode"])(s), Object(c["createVNode"])("div", ae, [Object(c["createVNode"])("div", ce, [Object(c["createVNode"])("div", oe, [Object(c["createVNode"])("div", ie, [Object(c["createVNode"])("div", ne, [Object(c["createVNode"])("span", se, Object(c["toDisplayString"])(e.t("slogan1")), 1), Object(c["createVNode"])("p", re, Object(c["toDisplayString"])(e.t("slogan2")), 1), Object(c["createVNode"])("a", le, [Object(c["createVNode"])("span", de, [Object(c["createVNode"])("span", be, Object(c["toDisplayString"])(e.t("startSection.signup")), 1), pe])])]), ue]), Object(c["createVNode"])("div", Oe, [Object(c["createVNode"])("div", je, [Object(c["createVNode"])("div", me, [Object(c["createVNode"])("div", ge, [Object(c["createVNode"])("div", ye, [Object(c["createVNode"])("span", he, Object(c["toDisplayString"])(e.t("startSection.createLinkForm.title")), 1), Object(c["createVNode"])("span", fe, Object(c["toDisplayString"])(e.t("startSection.createLinkForm.subtitle")), 1)]), Object(c["createVNode"])("div", Ne, [Object(c["createVNode"])("div", Ve, [Object(c["createVNode"])("div", ve, [Object(c["createVNode"])("div", Se, [Object(c["createVNode"])("span", ke, Object(c["toDisplayString"])(e.t("startSection.createLinkForm.proServiceLabel")), 1), Object(c["createVNode"])("div", Pe, [Object(c["createVNode"])("div", De, [Object(c["createVNode"])("span", xe, Object(c["toDisplayString"])(e.t("startSection.createLinkForm.proServiceValue")), 1)])])])]), Object(c["createVNode"])("div", Ae, [Object(c["createVNode"])("div", we, [Object(c["createVNode"])("span", Ce, Object(c["toDisplayString"])(e.t("startSection.createLinkForm.amountLabel")), 1), Object(c["createVNode"])("div", Be, [Object(c["createVNode"])("div", Ie, [Object(c["createVNode"])("span", Te, Object(c["toDisplayString"])(e.t("startSection.createLinkForm.amountValue")), 1)])])])])]), Object(c["createVNode"])("div", _e, [Object(c["createVNode"])("div", Le, [Me, Object(c["createVNode"])("label", Fe, Object(c["toDisplayString"])(e.t("startSection.createLinkForm.card")), 1)])]), Object(c["createVNode"])("span", We, Object(c["toDisplayString"])(e.t("startSection.createLinkForm.submit")), 1)])]), Object(c["createVNode"])("div", Re, [Ue, Object(c["createVNode"])("div", Ke, [Object(c["createVNode"])("div", Ee, [Object(c["createVNode"])("span", He, Object(c["toDisplayString"])(e.t("startSection.createLinkCard.title")), 1), Object(c["createVNode"])("span", qe, Object(c["toDisplayString"])(e.t("startSection.createLinkCard.cost")), 1)]), Object(c["createVNode"])("div", Je, [Object(c["createVNode"])("button", ze, [Qe, Object(c["createVNode"])("span", Ye, Object(c["toDisplayString"])(e.t("startSection.createLinkCard.pay")), 1)]), Object(c["createVNode"])("button", Ge, [Xe, Object(c["createVNode"])("span", Ze, Object(c["toDisplayString"])(e.t("startSection.createLinkCard.pay")), 1)])])])]), Object(c["createVNode"])("div", $e, [Object(c["createVNode"])("div", et, [Object(c["createVNode"])("div", tt, [Object(c["createVNode"])("div", at, Object(c["toDisplayString"])(e.t("startSection.createLinkPayForm.checkout")), 1), Object(c["createVNode"])("div", ct, [ot, Object(c["createVNode"])("div", it, [Object(c["createVNode"])("span", nt, Object(c["toDisplayString"])(e.t("startSection.createLinkPayForm.subTitle")), 1), Object(c["createVNode"])("span", st, Object(c["toDisplayString"])(e.t("startSection.createLinkPayForm.title")), 1)])])]), Object(c["createVNode"])("div", rt, [Object(c["createVNode"])("div", lt, [Object(c["createVNode"])("div", dt, [Object(c["createVNode"])("div", bt, [Object(c["createVNode"])("div", pt, [Object(c["createVNode"])("span", ut, Object(c["toDisplayString"])(e.t("startSection.createLinkPayForm.cardNoLabel")), 1), Object(c["createVNode"])("div", Ot, [Object(c["createVNode"])("div", jt, [Object(c["createVNode"])("span", mt, Object(c["toDisplayString"])(e.t("startSection.createLinkPayForm.cardNoValue")), 1)])])])])]), Object(c["createVNode"])("div", gt, [Object(c["createVNode"])("div", yt, [Object(c["createVNode"])("div", ht, [Object(c["createVNode"])("span", ft, Object(c["toDisplayString"])(e.t("startSection.createLinkPayForm.expDateLabel")), 1), Object(c["createVNode"])("div", Nt, [Object(c["createVNode"])("div", Vt, [Object(c["createVNode"])("span", vt, Object(c["toDisplayString"])(e.t("startSection.createLinkPayForm.expDateValue1")), 1)]), Object(c["createVNode"])("div", St, [Object(c["createVNode"])("span", kt, Object(c["toDisplayString"])(e.t("startSection.createLinkPayForm.expDateValue2")), 1)])])])]), Object(c["createVNode"])("div", Pt, [Object(c["createVNode"])("div", Dt, [Object(c["createVNode"])("span", xt, Object(c["toDisplayString"])(e.t("startSection.createLinkPayForm.cvcLabel")), 1), Object(c["createVNode"])("div", At, [Object(c["createVNode"])("div", wt, [Object(c["createVNode"])("span", Ct, Object(c["toDisplayString"])(e.t("startSection.createLinkPayForm.cvcValue")), 1)])])])])])]), Object(c["createVNode"])("button", Bt, Object(c["toDisplayString"])(e.t("startSection.createLinkPayForm.submit")), 1)])])]), Object(c["createVNode"])(c["Transition"], null, {
                default: Object(c["withCtx"])((function () {
                    return [It]
                })),
                _: 1
            }), Object(c["createVNode"])("div", Tt, [_t, Object(c["createVNode"])("span", Lt, Object(c["toDisplayString"])(e.t("startSection.createLinkPayForm.way")), 1)]), Mt])])])])])])])
        }
        var Wt = a("47a1"),
            Rt = a.n(Wt),
            Ut = a("ac9e"),
            Kt = a.n(Ut),
            Et = a("ba3f"),
            Ht = a.n(Et),
            qt = Object(c["withScopeId"])("data-v-413668b1");
        Object(c["pushScopeId"])("data-v-413668b1");
        var Jt = {
                class: "wrapper"
            },
            zt = {
                class: "left"
            },
            Qt = {
                class: "logoWrapper"
            },
            Yt = Object(c["createVNode"])("img", {
                src: Q.a,
                alt: "logo"
            }, null, -1),
            Gt = Object(c["createVNode"])("a", {
                href: "/#/"
            }, "main", -1),
            Xt = {
                class: "inner"
            },
            Zt = {
                class: "menuTitleSm"
            },
            $t = {
                href: "/#/product"
            },
            ea = {
                href: "/#/pricing"
            },
            ta = {
                href: "/#/contact-us"
            },
            aa = {
                class: "langBlock sm"
            },
            ca = {
                class: "title"
            },
            oa = {
                class: "in"
            },
            ia = {
                class: "in"
            },
            na = {
                href: "#"
            },
            sa = {
                class: "right"
            },
            ra = {
                class: "head"
            },
            la = {
                href: "#",
                class: "btnFillType1 font-sarabun"
            },
            da = Object(c["createVNode"])("a", {
                href: "#",
                class: "siteLink loginSm"
            }, "Sign Up", -1),
            ba = Object(c["createVNode"])("span", null, null, -1),
            pa = Object(c["createVNode"])("span", null, null, -1),
            ua = Object(c["createVNode"])("span", null, null, -1);
        Object(c["popScopeId"])();
        var Oa = qt((function (e, t, a, o, i, n) {
                return Object(c["openBlock"])(), Object(c["createBlock"])("header", null, [Object(c["createVNode"])("div", Jt, [Object(c["createVNode"])("div", zt, [Object(c["createVNode"])("div", Qt, [Object(c["createVNode"])("div", {
                    class: ["siteLogo", ["light" == e.theme ? ["light"] : ""]]
                }, [Yt, Object(c["createVNode"])("span", null, Object(c["toDisplayString"])(e.t("header.logo")), 1), Gt], 2)]), Object(c["createVNode"])("div", {
                    class: "menuWrapper menuSm",
                    style: {
                        display: e.computedDisplayMenu,
                        opacity: e.computedOpacityMenu
                    }
                }, [Object(c["createVNode"])("div", Xt, [Object(c["createVNode"])("span", {
                    class: "icon-close close closeMenuBtn",
                    onClick: t[1] || (t[1] = function (t) {
                        return e.openCloseMenu()
                    })
                }), Object(c["createVNode"])("span", Zt, Object(c["toDisplayString"])(e.t("header.menu")), 1), Object(c["createVNode"])("nav", null, [Object(c["createVNode"])("ul", {
                    class: ["menuList", ["light" == e.theme ? ["light"] : ""]]
                }, [Object(c["createVNode"])("li", null, [Object(c["createVNode"])("a", $t, Object(c["toDisplayString"])(e.t("header.nav.product")), 1)]), Object(c["createVNode"])("li", null, [Object(c["createVNode"])("a", ea, Object(c["toDisplayString"])(e.t("header.nav.pricing")), 1)]), Object(c["createVNode"])("li", null, [Object(c["createVNode"])("a", ta, Object(c["toDisplayString"])(e.t("header.nav.contact-us")), 1)])], 2), Object(c["createVNode"])("div", aa, [Object(c["createVNode"])("div", ca, Object(c["toDisplayString"])(e.t("header.nav.language.title")), 1), Object(c["createVNode"])("div", {
                    class: 1 == e.arrowClicked ? "head active" : "head"
                }, [Object(c["createVNode"])("div", oa, [Object(c["createVNode"])("img", {
                    onClick: t[2] || (t[2] = function (t) {
                        return e.setLocale("en")
                    }),
                    src: Rt.a,
                    alt: "eng",
                    class: "lang"
                }), Object(c["createVNode"])("span", {
                    onClick: t[3] || (t[3] = function (t) {
                        return e.setLocale("en")
                    }),
                    class: "text"
                }, Object(c["toDisplayString"])(e.t("header.nav.language.eng")), 1), Object(c["createVNode"])("img", {
                    onClick: t[4] || (t[4] = function (t) {
                        return e.showSecondLangBlock()
                    }),
                    src: Kt.a,
                    alt: "arrow",
                    class: "arr"
                })])], 2), Object(c["createVNode"])("div", {
                    class: ["list", {
                        showSecondLangBlockCSS: e.arrowClicked
                    }]
                }, [Object(c["createVNode"])("div", ia, [Object(c["createVNode"])("a", na, [Object(c["createVNode"])("img", {
                    onClick: t[5] || (t[5] = function (t) {
                        return e.setLocale("th")
                    }),
                    src: Ht.a,
                    alt: "thai",
                    class: "lang",
                    height: "23"
                }), Object(c["createVNode"])("span", {
                    onClick: t[6] || (t[6] = function (t) {
                        return e.setLocale("th")
                    }),
                    class: "text"
                }, Object(c["toDisplayString"])(e.t("header.nav.language.thai")), 1)])])], 2)])])])], 4)]), Object(c["createVNode"])("div", sa, [Object(c["createVNode"])("div", {
                    class: "langBlock",
                    onMouseleave: t[9] || (t[9] = function () {
                        return e.leavemouse && e.leavemouse.apply(e, arguments)
                    })
                }, [Object(c["createVNode"])("div", ra, [Object(c["createVNode"])("div", null, ["en" === e.currentLang ? (Object(c["openBlock"])(), Object(c["createBlock"])("img", {
                    key: 0,
                    onClick: t[7] || (t[7] = function (t) {
                        return e.setLocale("th")
                    }),
                    src: Ht.a,
                    alt: "eng",
                    class: "lang"
                })) : Object(c["createCommentVNode"])("", !0), "th" === e.currentLang ? (Object(c["openBlock"])(), Object(c["createBlock"])("img", {
                    key: 1,
                    onClick: t[8] || (t[8] = function (t) {
                        return e.setLocale("en")
                    }),
                    src: Rt.a,
                    alt: "thai",
                    class: "lang"
                })) : Object(c["createCommentVNode"])("", !0)])])], 32), Object(c["createVNode"])("a", la, Object(c["toDisplayString"])(e.t("header.signup")), 1), da, Object(c["createVNode"])("div", {
                    class: "openMenuBtn",
                    onClick: t[10] || (t[10] = function (t) {
                        return e.openCloseMenu()
                    })
                }, [ba, pa, ua])])])])
            })),
            ja = Object(c["defineComponent"])({
                name: "Header",
                props: ["theme"],
                setup: function () {
                    var e = Object(i["b"])(),
                        t = e.t,
                        a = e.locale;
                    return {
                        t: t,
                        locale: a
                    }
                },
                data: function () {
                    return {
                        screenWidth: 0,
                        arrowClicked: !1,
                        openedMenu: !1,
                        opacity: 1,
                        display: "none",
                        currentLang: localStorage.getItem("locale")
                    }
                },
                mounted: function () {
                    window.addEventListener("resize", this.handleResize), console.log(">>> header mounted")
                },
                computed: {
                    computedOpacityMenu: function () {
                        return this.opacity
                    },
                    computedDisplayMenu: function () {
                        return this.display
                    }
                },
                methods: {
                    setLocale: function (e) {
                        this.locale = e, localStorage.setItem("locale", e), this.currentLang = e
                    },
                    showSecondLangBlock: function () {
                        1 == this.isArrowClicked() ? this.arrowClicked = !1 : this.arrowClicked = !0
                    },
                    isArrowClicked: function () {
                        return this.arrowClicked
                    },
                    openCloseMenu: function () {
                        var e = this;
                        1 == this.openedMenu ? this.openedMenu = !1 : this.openedMenu = !0, 1 == this.openedMenu ? document.body.classList.add("menuIsOpened") : document.body.classList.remove("menuIsOpened"), this.opacity = 0, this.openedMenu, this.display = "block", 1 == this.openedMenu ? setTimeout((function () {
                            return e.opacity = 1
                        }), 50) : setTimeout((function () {
                            return e.opacity = 0
                        }), 50), 0 == this.openedMenu && setTimeout((function () {
                            return e.display = ""
                        }), 500)
                    },
                    handleResize: function () {
                        this.screenWidth = window.innerWidth, 1 == this.openedMenu && this.screenWidth < 768 ? document.body.classList.add("menuIsOpened") : document.body.classList.remove("menuIsOpened")
                    },
                    leavemouse: function () {
                        1 == this.arrowClicked && (this.arrowClicked = !1)
                    }
                }
            });
        a("d69f");
        const ma = C()(ja, [
            ["render", Oa],
            ["__scopeId", "data-v-413668b1"]
        ]);
        var ga = ma,
            ya = Object(c["defineComponent"])({
                name: "StartSection",
                components: {
                    Header: ga
                },
                props: {
                    msg: String
                },
                setup: function () {
                    var e = Object(i["b"])(),
                        t = e.t,
                        a = e.locale;
                    return {
                        t: t,
                        locale: a
                    }
                }
            });
        const ha = C()(ya, [
            ["render", Ft]
        ]);
        var fa = ha,
            Na = {
                class: "mainAbout"
            },
            Va = {
                class: "container"
            },
            va = {
                class: "wrapper"
            },
            Sa = {
                class: "left"
            },
            ka = {
                class: "getLinkWrapper"
            },
            Pa = {
                class: "getLinkBlock animatedBlock"
            },
            Da = {
                class: "field nameBlock"
            },
            xa = {
                class: "param"
            },
            Aa = {
                class: "data name animated"
            },
            wa = {
                class: "field priceBlock animated"
            },
            Ca = {
                class: "param"
            },
            Ba = {
                class: "data price animated"
            },
            Ia = {
                class: "btnIconType2 animated"
            },
            Ta = {
                class: "text animated"
            },
            _a = {
                class: "animated"
            },
            La = {
                class: "animated"
            },
            Ma = Object(c["createVNode"])("span", {
                class: "animated"
            }, "/", -1),
            Fa = {
                class: "animated"
            },
            Wa = Object(c["createVNode"])("span", {
                class: "icon-arrow"
            }, null, -1),
            Ra = {
                class: "right"
            },
            Ua = {
                class: "titleContainer"
            },
            Ka = {
                class: "sectionTitle lg font-prompt",
                style: {
                    "font-size": "38px"
                }
            },
            Ea = {
                class: "contentContainer"
            },
            Ha = {
                class: "textBlock"
            },
            qa = {
                style: {
                    "font-size": "18px"
                }
            };

        function Ja(e, t, a, o, i, n) {
            return Object(c["openBlock"])(), Object(c["createBlock"])("div", Na, [Object(c["createVNode"])("div", Va, [Object(c["createVNode"])("div", va, [Object(c["createVNode"])("div", Sa, [Object(c["createVNode"])("div", ka, [Object(c["createVNode"])("div", Pa, [Object(c["createVNode"])("div", Da, [Object(c["createVNode"])("span", xa, Object(c["toDisplayString"])(e.t("mainAbout.left.productNameLabel")), 1), Object(c["createVNode"])("span", Aa, Object(c["toDisplayString"])(e.t("mainAbout.left.productNameLabel")), 1)]), Object(c["createVNode"])("div", wa, [Object(c["createVNode"])("span", Ca, Object(c["toDisplayString"])(e.t("mainAbout.left.priceLabel")), 1), Object(c["createVNode"])("span", Ba, Object(c["toDisplayString"])(e.t("mainAbout.left.priceValue")), 1)]), Object(c["createVNode"])("div", Ia, [Object(c["createVNode"])("span", Ta, [Object(c["createVNode"])("span", _a, Object(c["toDisplayString"])(e.t("mainAbout.left.payLabel1")), 1), Object(c["createVNode"])("span", La, Object(c["toDisplayString"])(e.t("mainAbout.left.payLabel2")), 1), Ma, Object(c["createVNode"])("span", Fa, Object(c["toDisplayString"])(e.t("mainAbout.left.payValue")), 1)]), Wa])])])]), Object(c["createVNode"])("div", Ra, [Object(c["createVNode"])("div", Ua, [Object(c["createVNode"])("span", Ka, Object(c["toDisplayString"])(e.t("mainAbout.right.title1")), 1)]), Object(c["createVNode"])("div", Ea, [Object(c["createVNode"])("div", Ha, [Object(c["createVNode"])("p", qa, Object(c["toDisplayString"])(e.t("mainAbout.right.content")), 1)])])])])])])
        }
        var za = Object(c["defineComponent"])({
            name: "MainAbout",
            props: {
                msg: String
            },
            setup: function () {
                var e = Object(i["b"])(),
                    t = e.t,
                    a = e.locale;
                return {
                    t: t,
                    locale: a
                }
            }
        });
        const Qa = C()(za, [
            ["render", Ja]
        ]);
        var Ya = Qa,
            Ga = a("0e4e"),
            Xa = a.n(Ga),
            Za = a("6ccc"),
            $a = a.n(Za),
            ec = a("1437"),
            tc = a.n(ec),
            ac = a("7111"),
            cc = a.n(ac),
            oc = {
                class: "advantages"
            },
            ic = {
                class: "container"
            },
            nc = {
                class: "wrapper"
            },
            sc = {
                class: "advantagesList"
            },
            rc = {
                class: "item"
            },
            lc = {
                class: "advantagesItem type1"
            },
            dc = Object(c["createVNode"])("div", {
                class: "img"
            }, [Object(c["createVNode"])("img", {
                src: Xa.a,
                alt: "advantage"
            })], -1),
            bc = {
                class: "title font-prompt"
            },
            pc = {
                class: "item"
            },
            uc = {
                class: "advantagesItem type2"
            },
            Oc = Object(c["createVNode"])("div", {
                class: "img"
            }, [Object(c["createVNode"])("img", {
                src: $a.a,
                alt: "advantage"
            })], -1),
            jc = {
                class: "title font-prompt"
            },
            mc = {
                class: "item"
            },
            gc = {
                class: "advantagesItem type3"
            },
            yc = Object(c["createVNode"])("div", {
                class: "img"
            }, [Object(c["createVNode"])("img", {
                src: tc.a,
                alt: "advantage"
            })], -1),
            hc = {
                class: "title font-prompt"
            },
            fc = {
                class: "item"
            },
            Nc = {
                class: "advantagesItem type4"
            },
            Vc = Object(c["createVNode"])("div", {
                class: "img"
            }, [Object(c["createVNode"])("img", {
                src: cc.a,
                alt: "advantage"
            })], -1),
            vc = {
                class: "title font-prompt"
            };

        function Sc(e, t, a, o, i, n) {
            return Object(c["openBlock"])(), Object(c["createBlock"])("div", oc, [Object(c["createVNode"])("div", ic, [Object(c["createVNode"])("div", nc, [Object(c["createVNode"])("div", sc, [Object(c["createVNode"])("div", rc, [Object(c["createVNode"])("div", lc, [dc, Object(c["createVNode"])("span", bc, Object(c["toDisplayString"])(e.t("advantages.item1.title1")), 1), Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("advantages.item1.content")), 1)])]), Object(c["createVNode"])("div", pc, [Object(c["createVNode"])("div", uc, [Oc, Object(c["createVNode"])("span", jc, Object(c["toDisplayString"])(e.t("advantages.item2.title1")), 1), Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("advantages.item2.content")), 1)])]), Object(c["createVNode"])("div", mc, [Object(c["createVNode"])("div", gc, [yc, Object(c["createVNode"])("span", hc, Object(c["toDisplayString"])(e.t("advantages.item3.title1")), 1), Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("advantages.item3.content")), 1)])]), Object(c["createVNode"])("div", fc, [Object(c["createVNode"])("div", Nc, [Vc, Object(c["createVNode"])("span", vc, Object(c["toDisplayString"])(e.t("advantages.item4.title1")), 1), Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("advantages.item4.content")), 1)])])])])])])
        }
        var kc = Object(c["defineComponent"])({
            name: "Advantages",
            setup: function () {
                var e = Object(i["b"])(),
                    t = e.t,
                    a = e.locale;
                return {
                    t: t,
                    locale: a
                }
            }
        });
        const Pc = C()(kc, [
            ["render", Sc]
        ]);
        var Dc = Pc,
            xc = a("cfd5"),
            Ac = a.n(xc),
            wc = a("6aa8"),
            Cc = a.n(wc),
            Bc = {
                class: "mainInfo"
            },
            Ic = {
                class: "container"
            },
            Tc = {
                class: "wrapper"
            },
            _c = {
                class: "titleContainer"
            },
            Lc = {
                class: "sectionTitle md font-prompt",
                style: {
                    "font-size": "38px"
                }
            },
            Mc = {
                class: "contentContainer"
            },
            Fc = {
                class: "infoBlock"
            },
            Wc = {
                class: "item"
            },
            Rc = {
                class: "textBlock lg"
            },
            Uc = {
                style: {
                    "font-size": "18px"
                }
            },
            Kc = {
                class: "item"
            },
            Ec = {
                class: "textBlock lg"
            },
            Hc = {
                class: "title font-prompt"
            },
            qc = {
                style: {
                    "font-size": "18px"
                }
            },
            Jc = {
                class: "securityList"
            },
            zc = Object(c["createVNode"])("img", {
                src: Ac.a,
                alt: "secutity"
            }, null, -1),
            Qc = {
                href: "https://www.bot.or.th/Thai/PaymentSystems/OversightOfPaymentSystems/Documents/Payment_2014_T_Oversight.pdf",
                target: "_blank"
            },
            Yc = {
                class: "apiImg animatedBlock runningAnimation"
            },
            Gc = {
                class: "circleWrap"
            },
            Xc = {
                class: "circle animated"
            },
            Zc = {
                class: "text animated",
                style: {
                    "font-size": "30px"
                }
            },
            $c = {
                class: "circle animated"
            },
            eo = {
                class: "text animated",
                style: {
                    "font-size": "30px"
                }
            },
            to = Object(c["createVNode"])("div", {
                class: "overlay animated"
            }, null, -1),
            ao = {
                class: "text animated",
                style: {
                    "font-size": "30px"
                }
            },
            co = Object(c["createVNode"])("img", {
                src: Cc.a,
                alt: "check",
                class: "icon animated"
            }, null, -1);

        function oo(e, t, a, o, i, n) {
            return Object(c["openBlock"])(), Object(c["createBlock"])("div", Bc, [Object(c["createVNode"])("div", Ic, [Object(c["createVNode"])("div", Tc, [Object(c["createVNode"])("div", _c, [Object(c["createVNode"])("span", Lc, Object(c["toDisplayString"])(e.t("mainInfo.title")), 1)]), Object(c["createVNode"])("div", Mc, [Object(c["createVNode"])("div", Fc, [Object(c["createVNode"])("div", Wc, [Object(c["createVNode"])("div", Rc, [Object(c["createVNode"])("p", Uc, Object(c["toDisplayString"])(e.t("mainInfo.content.item1.value")), 1)])]), Object(c["createVNode"])("div", Kc, [Object(c["createVNode"])("div", Ec, [Object(c["createVNode"])("span", Hc, Object(c["toDisplayString"])(e.t("mainInfo.content.item2.label")), 1), Object(c["createVNode"])("p", qc, Object(c["toDisplayString"])(e.t("mainInfo.content.item2.value")), 1)])])]), Object(c["createVNode"])("ul", Jc, [Object(c["createVNode"])("li", null, [zc, Object(c["createVNode"])("span", null, Object(c["toDisplayString"])(e.t("mainInfo.security1")), 1)]), Object(c["createVNode"])("li", null, [Object(c["createVNode"])("a", Qc, [Object(c["createVNode"])("span", null, Object(c["toDisplayString"])(e.t("mainInfo.security2")), 1)])])])])])]), Object(c["createVNode"])("div", Yc, [Object(c["createVNode"])("div", Gc, [Object(c["createVNode"])("div", Xc, [Object(c["createVNode"])("span", Zc, Object(c["toDisplayString"])(e.t("mainInfo.animation.website")), 1)]), Object(c["createVNode"])("div", $c, [Object(c["createVNode"])("span", eo, Object(c["toDisplayString"])(e.t("mainInfo.animation.payment")), 1)])]), to, Object(c["createVNode"])("span", ao, Object(c["toDisplayString"])(e.t("mainInfo.animation.api")), 1), co])])
        }
        var io = Object(c["defineComponent"])({
            name: "MainInfo",
            setup: function () {
                var e = Object(i["b"])(),
                    t = e.t,
                    a = e.locale;
                return {
                    t: t,
                    locale: a
                }
            }
        });
        const no = C()(io, [
            ["render", oo]
        ]);
        var so = no,
            ro = a("f7f8"),
            lo = a.n(ro),
            bo = {
                class: "joinSection main"
            },
            po = {
                class: "container"
            },
            uo = {
                class: "joinBlock"
            },
            Oo = Object(c["createVNode"])("div", {
                class: "img dotsTop"
            }, [Object(c["createVNode"])("img", {
                src: lo.a,
                alt: "image"
            })], -1),
            jo = {
                class: "info"
            },
            mo = {
                class: "title lg font-prompt",
                style: {
                    "font-size": "30px",
                    "letter-spacing": "1px",
                    "line-height": "42px"
                }
            },
            go = {
                class: "content"
            },
            yo = {
                class: "textBlock"
            },
            ho = {
                href: "#",
                class: "btnIconType1 sm"
            },
            fo = {
                class: "in"
            },
            No = {
                class: "text"
            },
            Vo = Object(c["createVNode"])("span", {
                class: "icon-arrow"
            }, null, -1);

        function vo(e, t, a, o, i, n) {
            return Object(c["openBlock"])(), Object(c["createBlock"])("div", bo, [Object(c["createVNode"])("div", po, [Object(c["createVNode"])("div", uo, [Oo, Object(c["createVNode"])("div", jo, [Object(c["createVNode"])("span", mo, Object(c["toDisplayString"])(e.t("joinSection.title")), 1), Object(c["createVNode"])("div", go, [Object(c["createVNode"])("div", yo, [Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("joinSection.content")), 1)])]), Object(c["createVNode"])("a", ho, [Object(c["createVNode"])("span", fo, [Object(c["createVNode"])("span", No, Object(c["toDisplayString"])(e.t("joinSection.start")), 1), Vo])])])])])])
        }
        var So = Object(c["defineComponent"])({
            name: "JoinSection",
            setup: function () {
                var e = Object(i["b"])(),
                    t = e.t,
                    a = e.locale;
                return {
                    t: t,
                    locale: a
                }
            }
        });
        const ko = C()(So, [
            ["render", vo]
        ]);
        var Po = ko,
            Do = a("1106"),
            xo = a.n(Do),
            Ao = Object(c["withScopeId"])("data-v-e9018938");
        Object(c["pushScopeId"])("data-v-e9018938");
        var wo = {
                class: "container"
            },
            Co = {
                class: "wrapper"
            },
            Bo = {
                class: "col"
            },
            Io = {
                class: "footMenu"
            },
            To = {
                class: "title"
            },
            _o = {
                href: "#product",
                style: {
                    color: "inherit !important"
                }
            },
            Lo = {
                class: "col"
            },
            Mo = {
                class: "footMenu"
            },
            Fo = {
                class: "title"
            },
            Wo = {
                href: "#dashboard"
            },
            Ro = {
                href: "#payment-demo"
            },
            Uo = {
                class: "col"
            },
            Ko = {
                class: "footMenu"
            },
            Eo = {
                class: "title"
            },
            Ho = {
                href: "#about-us"
            },
            qo = {
                href: "#contact-us"
            },
            Jo = {
                href: "#privacy"
            },
            zo = {
                class: "col"
            },
            Qo = {
                class: "footMenu"
            },
            Yo = {
                class: "title"
            },
            Go = {
                href: "#businesses"
            },
            Xo = {
                href: "https://www.facebook.com/moneyspace.net",
                target: "_blank"
            },
            Zo = {
                class: "wrapper"
            },
            $o = {
                class: "in"
            },
            ei = {
                class: "in"
            };
        Object(c["popScopeId"])();
        var ti = Ao((function (e, t, a, o, i, n) {
                return Object(c["openBlock"])(), Object(c["createBlock"])("footer", null, [Object(c["createVNode"])("div", wo, [Object(c["createVNode"])("div", Co, [Object(c["createVNode"])("div", Bo, [Object(c["createVNode"])("div", Io, [Object(c["createVNode"])("span", To, [Object(c["createVNode"])("a", _o, Object(c["toDisplayString"])(e.t("footer.productArea.title")), 1)]), Object(c["createVNode"])("ul", null, [Object(c["createVNode"])("li", null, [Object(c["createVNode"])("a", {
                    href: "#links",
                    innerHTML: e.$t("footer.productArea.products[0]")
                }, null, 8, ["innerHTML"])]), Object(c["createVNode"])("li", null, [Object(c["createVNode"])("a", {
                    href: "#",
                    innerHTML: e.$t("footer.productArea.products[1]")
                }, null, 8, ["innerHTML"])])])])]), Object(c["createVNode"])("div", Lo, [Object(c["createVNode"])("div", Mo, [Object(c["createVNode"])("span", Fo, Object(c["toDisplayString"])(e.t("footer.featureArea.title")), 1), Object(c["createVNode"])("ul", null, [Object(c["createVNode"])("li", null, [Object(c["createVNode"])("a", Wo, Object(c["toDisplayString"])(e.t("footer.featureArea.features[0]")), 1)]), Object(c["createVNode"])("li", null, [Object(c["createVNode"])("a", Ro, Object(c["toDisplayString"])(e.t("footer.featureArea.features[4]")), 1)])])])]), Object(c["createVNode"])("div", Uo, [Object(c["createVNode"])("div", Ko, [Object(c["createVNode"])("span", Eo, Object(c["toDisplayString"])(e.t("footer.moneySpaceArea.title")), 1), Object(c["createVNode"])("ul", null, [Object(c["createVNode"])("li", null, [Object(c["createVNode"])("a", Ho, Object(c["toDisplayString"])(e.t("footer.moneySpaceArea.moneySpaces[0]")), 1)]), Object(c["createVNode"])("li", null, [Object(c["createVNode"])("a", qo, Object(c["toDisplayString"])(e.t("footer.moneySpaceArea.moneySpaces[2]")), 1)]), Object(c["createVNode"])("li", null, [Object(c["createVNode"])("a", Jo, Object(c["toDisplayString"])(e.t("footer.moneySpaceArea.moneySpaces[4]")), 1)])])])]), Object(c["createVNode"])("div", zo, [Object(c["createVNode"])("div", Qo, [Object(c["createVNode"])("span", Yo, Object(c["toDisplayString"])(e.t("footer.faqArea.title")), 1), Object(c["createVNode"])("ul", null, [Object(c["createVNode"])("li", null, [Object(c["createVNode"])("a", Go, Object(c["toDisplayString"])(e.t("footer.faqArea.faqs[0]")), 1)]), Object(c["createVNode"])("li", null, [Object(c["createVNode"])("a", Xo, Object(c["toDisplayString"])(e.t("footer.faqArea.faqs[1]")), 1)])])])])]), Object(c["createVNode"])("div", Zo, [Object(c["createVNode"])("div", {
                    class: "langBlock invert",
                    onMouseleave: t[4] || (t[4] = function () {
                        return e.leavemouse && e.leavemouse.apply(e, arguments)
                    })
                }, [Object(c["createVNode"])("div", {
                    class: 1 == e.arrowClicked ? "head active" : "head"
                }, [Object(c["createVNode"])("div", $o, [Object(c["createVNode"])("img", {
                    onClick: t[1] || (t[1] = function (t) {
                        return e.setLocale("en")
                    }),
                    src: Rt.a,
                    alt: "eng",
                    class: "lang"
                }), Object(c["createVNode"])("img", {
                    onClick: t[2] || (t[2] = function (t) {
                        return e.showSecondLangBlock()
                    }),
                    src: xo.a,
                    alt: "arrow",
                    class: "arr"
                })])], 2), Object(c["createVNode"])("div", {
                    class: ["list", {
                        showSecondLangBlockCSS: e.arrowClicked
                    }]
                }, [Object(c["createVNode"])("div", ei, [Object(c["createVNode"])("img", {
                    onClick: t[3] || (t[3] = function (t) {
                        return e.setLocale("th")
                    }),
                    src: Ht.a,
                    alt: "thai",
                    class: "lang"
                })])], 2)], 32)])])])
            })),
            ai = Object(c["defineComponent"])({
                name: "Footer",
                setup: function () {
                    var e = Object(i["b"])(),
                        t = e.t,
                        a = e.locale;
                    return {
                        t: t,
                        locale: a
                    }
                },
                data: function () {
                    return {
                        arrowClicked: !1
                    }
                },
                methods: {
                    setLocale: function (e) {
                        this.locale = e, localStorage.setItem("locale", e), this.showSecondLangBlock()
                    },
                    showSecondLangBlock: function () {
                        1 == this.isArrowClicked() ? this.arrowClicked = !1 : this.arrowClicked = !0
                    },
                    isArrowClicked: function () {
                        return this.arrowClicked
                    },
                    leavemouse: function () {
                        1 == this.arrowClicked && (this.arrowClicked = !1)
                    }
                }
            });
        a("b503");
        const ci = C()(ai, [
            ["render", ti],
            ["__scopeId", "data-v-e9018938"]
        ]);
        var oi = ci,
            ii = Object(c["defineComponent"])({
                components: {
                    StartSection: fa,
                    MainAbout: Ya,
                    Advantages: Dc,
                    MainInfo: so,
                    JoinSection: Po,
                    Footer: oi
                },
                name: "HomePage",
                props: {
                    msg: String
                }
            });
        const ni = C()(ii, [
            ["render", L],
            ["__scopeId", "data-v-7e485336"]
        ]);
        var si = ni,
            ri = {
                id: "bodyWrap"
            },
            li = {
                class: "pricigPageHeader"
            },
            di = {
                class: "container"
            },
            bi = {
                class: "pricingBanner"
            },
            pi = {
                class: "pageCaption"
            },
            ui = {
                class: "subtitle font-prompt",
                style: {
                    margin: "50px",
                    "font-size": "38px"
                }
            },
            Oi = {
                class: "title"
            },
            ji = {
                class: "pricingPageContent"
            },
            mi = {
                class: "container"
            },
            gi = {
                class: "calculator"
            },
            yi = {
                class: "calcForm"
            },
            hi = {
                class: "headBlock"
            },
            fi = {
                class: "title"
            },
            Ni = {
                class: "formBlock"
            },
            Vi = {
                class: "fieldsWrap"
            },
            vi = {
                class: "fieldItem"
            },
            Si = {
                class: "inBlockType2"
            },
            ki = {
                for: "amount1"
            },
            Pi = {
                class: "inWrap"
            },
            Di = {
                class: "fieldItem"
            },
            xi = {
                class: "inBlockType2"
            },
            Ai = {
                for: "amount2"
            },
            wi = {
                class: "inWrap"
            },
            Ci = {
                class: "calcInfo"
            },
            Bi = {
                class: "info",
                style: "font-size:45px"
            },
            Ii = Object(c["createVNode"])("br", null, null, -1),
            Ti = Object(c["createVNode"])("br", null, null, -1),
            _i = {
                class: "note",
                style: "width:240px"
            },
            Li = {
                class: "pricingInfo"
            },
            Mi = {
                class: "titleContainer"
            },
            Fi = {
                class: "subtitle"
            },
            Wi = {
                class: "title"
            },
            Ri = {
                class: "contentContainer"
            },
            Ui = {
                class: "info"
            },
            Ki = {
                class: "textBlock"
            },
            Ei = {
                class: "tariffList",
                style: {
                    "padding-bottom": "60px"
                }
            },
            Hi = {
                class: "item"
            },
            qi = {
                class: "tariffItem"
            },
            Ji = {
                class: "cost num"
            },
            zi = {
                class: "info"
            },
            Qi = {
                class: "item"
            },
            Yi = {
                class: "tariffItem"
            },
            Gi = {
                class: "cost"
            },
            Xi = {
                class: "info"
            };

        function Zi(e, t, a, o, i, n) {
            var s = Object(c["resolveComponent"])("Header"),
                r = Object(c["resolveComponent"])("Footer");
            return Object(c["openBlock"])(), Object(c["createBlock"])("div", ri, [Object(c["createVNode"])(s), Object(c["createVNode"])("div", li, [Object(c["createVNode"])("div", di, [Object(c["createVNode"])("div", bi, [Object(c["createVNode"])("div", pi, [Object(c["createVNode"])("span", ui, Object(c["toDisplayString"])(e.t("pricigPageHeader.subtitle")), 1), Object(c["createVNode"])("span", Oi, Object(c["toDisplayString"])(e.t("pricigPageHeader.title")), 1)])])])]), Object(c["createVNode"])("div", ji, [Object(c["createVNode"])("div", mi, [Object(c["createVNode"])("div", gi, [Object(c["createVNode"])("div", yi, [Object(c["createVNode"])("div", hi, [Object(c["createVNode"])("span", fi, Object(c["toDisplayString"])(e.t("pricingPageContent.calculator.title")), 1)]), Object(c["createVNode"])("div", Ni, [Object(c["createVNode"])("div", Vi, [Object(c["createVNode"])("div", vi, [Object(c["createVNode"])("div", Si, [Object(c["createVNode"])("label", ki, Object(c["toDisplayString"])(e.t("pricingPageContent.calculator.fieldItem[0].amountLabel")), 1), Object(c["createVNode"])("div", Pi, [Object(c["withDirectives"])(Object(c["createVNode"])("input", {
                type: "text",
                name: "amount1",
                id: "amount1",
                "onUpdate:modelValue": t[1] || (t[1] = function (t) {
                    return e.amount = t
                })
            }, null, 512), [
                [c["vModelText"], e.amount]
            ])])])]), Object(c["createVNode"])("div", Di, [Object(c["createVNode"])("div", xi, [Object(c["createVNode"])("label", Ai, Object(c["toDisplayString"])(e.t("pricingPageContent.calculator.fieldItem[1].amountLabel")), 1), Object(c["createVNode"])("div", wi, [Object(c["withDirectives"])(Object(c["createVNode"])("input", {
                type: "text",
                name: "amount2",
                id: "amount2",
                "onUpdate:modelValue": t[2] || (t[2] = function (t) {
                    return e.result = t
                })
            }, null, 512), [
                [c["vModelText"], e.result]
            ])])])])]), Object(c["createVNode"])("button", {
                class: "btnFillType2 full",
                onClick: t[3] || (t[3] = function () {
                    return e.feemath && e.feemath.apply(e, arguments)
                })
            }, Object(c["toDisplayString"])(e.t("pricingPageContent.calculator.calculate")), 1)])]), Object(c["createVNode"])("div", Ci, [Object(c["createVNode"])("span", Bi, [Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.t("pricingPageContent.calculator.calcInfo.info[0]")), 1), Ii, Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("pricingPageContent.calculator.calcInfo.info[1]")), 1), Ti, Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("pricingPageContent.calculator.calcInfo.info[2]")), 1)]), Object(c["createVNode"])("span", _i, Object(c["toDisplayString"])(e.t("pricingPageContent.calculator.calcInfo.note")), 1)])]), Object(c["createVNode"])("div", Li, [Object(c["createVNode"])("div", Mi, [Object(c["createVNode"])("span", Fi, Object(c["toDisplayString"])(e.t("pricingPageContent.pricingInfo.subtitle")), 1), Object(c["createVNode"])("span", Wi, Object(c["toDisplayString"])(e.t("pricingPageContent.pricingInfo.title")), 1)]), Object(c["createVNode"])("div", Ri, [Object(c["createVNode"])("div", Ui, [Object(c["createVNode"])("div", Ki, [Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("pricingPageContent.pricingInfo.textBlock")), 1)])])])]), Object(c["createVNode"])("div", Ei, [Object(c["createVNode"])("div", Hi, [Object(c["createVNode"])("div", qi, [Object(c["createVNode"])("span", Ji, [Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.t("pricingPageContent.tariffList.item[0].cost")), 1), Object(c["createVNode"])("span", null, Object(c["toDisplayString"])(e.t("pricingPageContent.tariffList.item[0].constUnit")), 1)]), Object(c["createVNode"])("div", zi, [Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("pricingPageContent.tariffList.item[0].info")), 1)])])]), Object(c["createVNode"])("div", Qi, [Object(c["createVNode"])("div", Yi, [Object(c["createVNode"])("span", Gi, Object(c["toDisplayString"])(e.t("pricingPageContent.tariffList.item[1].cost")), 1), Object(c["createVNode"])("div", Xi, [Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("pricingPageContent.tariffList.item[1].info")), 1)])])])])])]), Object(c["createVNode"])(r)])
        }
        a("a9e3"), a("b680");
        var $i = Object(c["defineComponent"])({
            components: {
                Header: ga,
                Footer: oi
            },
            name: "PricingPage",
            setup: function () {
                var e = Object(i["b"])(),
                    t = e.t,
                    a = e.locale;
                return {
                    t: t,
                    locale: a
                }
            },
            data: function () {
                return {
                    amount: 0,
                    result: 0,
                    fee: 2.77
                }
            },
            methods: {
                feemath: function () {
                    if (Number(this.amount)) {
                        var e, t = " บาท ( 2.77% )",
                            a = 0;
                        e = Number(this.amount) / Number(100) * Number(this.fee), a = parseFloat(e).toFixed(2) + t, this.result = a
                    } else this.amount = 0, this.result = 0
                }
            }
        });
        const en = C()($i, [
            ["render", Zi]
        ]);
        var tn = en,
            an = a("37a8"),
            cn = a.n(an),
            on = a("7a08"),
            nn = a.n(on),
            sn = a("e496"),
            rn = a.n(sn),
            ln = {
                id: "bodyWrap"
            },
            dn = {
                class: "container"
            },
            bn = {
                class: "contactBlock"
            },
            pn = {
                class: "wrapper"
            },
            un = {
                class: "left"
            },
            On = {
                class: "titleContainer"
            },
            jn = {
                class: "pageTitle"
            },
            mn = {
                class: "pageSubtitle"
            },
            gn = {
                class: "contentContainer"
            },
            yn = {
                class: "timingBlock"
            },
            hn = {
                class: "title"
            },
            fn = {
                class: "data"
            },
            Nn = {
                class: "contactsList"
            },
            Vn = Object(c["createVNode"])("li", null, [Object(c["createVNode"])("a", {
                href: "mailto:th@moneyspace.net"
            }, [Object(c["createVNode"])("img", {
                src: cn.a,
                alt: "mail",
                class: "icon"
            }), Object(c["createVNode"])("span", {
                class: "data"
            }, "th@moneyspace.net")])], -1),
            vn = {
                href: "tel:021070364 "
            },
            Sn = Object(c["createVNode"])("img", {
                src: nn.a,
                alt: "phone",
                class: "icon"
            }, null, -1),
            kn = {
                class: "data"
            },
            Pn = {
                class: "right"
            },
            Dn = {
                class: "mapWrapper"
            },
            xn = Object(c["createVNode"])("div", {
                class: "mapBlock"
            }, [Object(c["createVNode"])("iframe", {
                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.714127527847!2d100.56133511485494!3d13.735749701365888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29efd295efcf3%3A0x4ca047bcbe11ce24!2z4LiL4Lit4LiiIOC4quC4uOC4guC4uOC4oeC4p-C4tOC4lyAyNSDguIHguKPguLjguIfguYDguJfguJ7guKHguKvguLLguJnguITguKMgMTAxMTA!5e0!3m2!1sth!2sth!4v1622348467984!5m2!1sth!2sth",
                frameborder: "0",
                style: {
                    border: "0"
                },
                allowfullscreen: "",
                "aria-hidden": "false",
                tabindex: "0"
            })], -1),
            An = {
                class: "locationBlock"
            },
            wn = {
                class: "title"
            },
            Cn = Object(c["createVNode"])("img", {
                src: rn.a,
                alt: "location",
                class: "icon"
            }, null, -1),
            Bn = {
                class: "data"
            },
            In = {
                class: "content"
            };

        function Tn(e, t, a, o, i, n) {
            var s = Object(c["resolveComponent"])("Header"),
                r = Object(c["resolveComponent"])("Footer");
            return Object(c["openBlock"])(), Object(c["createBlock"])("div", ln, [Object(c["createVNode"])(s), Object(c["createVNode"])("div", dn, [Object(c["createVNode"])("div", bn, [Object(c["createVNode"])("div", pn, [Object(c["createVNode"])("div", un, [Object(c["createVNode"])("div", On, [Object(c["createVNode"])("span", jn, Object(c["toDisplayString"])(e.t("pageTitle")), 1), Object(c["createVNode"])("span", mn, Object(c["toDisplayString"])(e.t("pageSubtitle")), 1)]), Object(c["createVNode"])("div", gn, [Object(c["createVNode"])("div", yn, [Object(c["createVNode"])("span", hn, Object(c["toDisplayString"])(e.t("title")), 1), Object(c["createVNode"])("span", fn, Object(c["toDisplayString"])(e.t("data")), 1)]), Object(c["createVNode"])("ul", Nn, [Vn, Object(c["createVNode"])("li", null, [Object(c["createVNode"])("a", vn, [Sn, Object(c["createVNode"])("span", kn, Object(c["toDisplayString"])(e.t("contactsList[1]")), 1)])])])])]), Object(c["createVNode"])("div", Pn, [Object(c["createVNode"])("div", Dn, [xn, Object(c["createVNode"])("div", An, [Object(c["createVNode"])("div", wn, [Cn, Object(c["createVNode"])("span", Bn, Object(c["toDisplayString"])(e.t("locationBlock.title")), 1)]), Object(c["createVNode"])("div", In, [Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("locationBlock.content")), 1)])])])])])])]), Object(c["createVNode"])(r)])
        }
        var _n = Object(c["defineComponent"])({
            components: {
                Header: ga,
                Footer: oi
            },
            name: "ContactUsPage",
            setup: function () {
                var e = Object(i["b"])(),
                    t = e.t,
                    a = e.locale;
                return {
                    t: t,
                    locale: a
                }
            }
        });
        const Ln = C()(_n, [
            ["render", Tn]
        ]);
        var Mn = Ln,
            Fn = Object(c["withScopeId"])("data-v-5326e256");
        Object(c["pushScopeId"])("data-v-5326e256");
        var Wn = {
                id: "bodyWrap"
            },
            Rn = {
                class: "container"
            },
            Un = {
                class: "paymentSection"
            },
            Kn = {
                class: "wrapper"
            },
            En = {
                class: "titleContainer"
            },
            Hn = {
                class: "pageTitle"
            },
            qn = {
                class: "contentContainer"
            },
            Jn = {
                class: "info"
            },
            zn = {
                class: "textBlock"
            },
            Qn = {
                href: "#",
                class: "btnIconType3"
            },
            Yn = Object(c["createVNode"])("span", {
                class: "icon-arrow"
            }, null, -1),
            Gn = {
                class: "text"
            },
            Xn = {
                class: "apiBlock"
            },
            Zn = {
                class: "title"
            },
            $n = {
                class: "codeBlock"
            },
            es = {
                class: "headBlock"
            },
            ts = Object(c["createVNode"])("div", {
                class: "contentBlock"
            }, [Object(c["createVNode"])("button", {
                class: "btnIconType4"
            }, [Object(c["createVNode"])("span", {
                class: "text"
            }, "Run")])], -1);
        Object(c["popScopeId"])();
        var as = Fn((function (e, t, a, o, i, n) {
                var s = Object(c["resolveComponent"])("Header"),
                    r = Object(c["resolveComponent"])("Footer");
                return Object(c["openBlock"])(), Object(c["createBlock"])("div", Wn, [Object(c["createVNode"])(s), Object(c["createVNode"])("div", Rn, [Object(c["createVNode"])("div", Un, [Object(c["createVNode"])("div", Kn, [Object(c["createVNode"])("div", En, [Object(c["createVNode"])("span", Hn, [Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.t("titleContainer.pageTitle[0]")) + " ", 1), Object(c["createVNode"])("span", null, Object(c["toDisplayString"])(e.t("titleContainer.pageTitle[1]")), 1)])]), Object(c["createVNode"])("div", qn, [Object(c["createVNode"])("div", Jn, [Object(c["createVNode"])("div", zn, [Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("contentContainer.textBlock")), 1)])]), Object(c["createVNode"])("a", Qn, [Yn, Object(c["createVNode"])("span", Gn, Object(c["toDisplayString"])(e.t("contentContainer.download")), 1)]), Object(c["createVNode"])("div", Xn, [Object(c["createVNode"])("span", Zn, Object(c["toDisplayString"])(e.t("contentContainer.try")), 1), Object(c["createVNode"])("div", $n, [Object(c["createVNode"])("div", es, [Object(c["createVNode"])("span", null, Object(c["toDisplayString"])(e.t("contentContainer.title")), 1)]), ts])])])])])]), Object(c["createVNode"])(r)])
            })),
            cs = Object(c["defineComponent"])({
                components: {
                    Header: ga,
                    Footer: oi
                },
                name: "PaymentPage",
                setup: function () {
                    var e = Object(i["b"])(),
                        t = e.t,
                        a = e.locale;
                    return {
                        t: t,
                        locale: a
                    }
                }
            });
        const os = C()(cs, [
            ["render", as],
            ["__scopeId", "data-v-5326e256"]
        ]);
        var is = os,
            ns = a("3385"),
            ss = a.n(ns),
            rs = a("f2dc"),
            ls = a.n(rs),
            ds = a("8b79"),
            bs = a.n(ds),
            ps = a("948e"),
            us = a.n(ps),
            Os = a("5a15"),
            js = a.n(Os),
            ms = Object(c["withScopeId"])("data-v-058bf259");
        Object(c["pushScopeId"])("data-v-058bf259");
        var gs = {
                id: "bodyWrap"
            },
            ys = {
                class: "linksPage"
            },
            hs = {
                class: "linksPageHeader"
            },
            fs = {
                class: "container"
            },
            Ns = {
                class: "linksBanner"
            },
            Vs = {
                class: "pageCaption"
            },
            vs = {
                class: "title font-prompt",
                style: {
                    "font-size": "38px",
                    "letter-spacing": "1px",
                    "line-height": "60px"
                }
            },
            Ss = {
                class: "info"
            },
            ks = {
                class: "textBlock"
            },
            Ps = {
                style: {
                    "font-size": "18px"
                }
            },
            Ds = {
                class: "linksPageContent"
            },
            xs = {
                class: "stepsList"
            },
            As = {
                class: "item"
            },
            ws = {
                class: "stepItem type1"
            },
            Cs = {
                class: "num"
            },
            Bs = Object(c["createVNode"])("div", {
                class: "img wow animate__animated animate__fadeInUp",
                "data-wow-offset": "0"
            }, [Object(c["createVNode"])("img", {
                src: ss.a,
                alt: "step"
            })], -1),
            Is = {
                class: "content"
            },
            Ts = {
                class: "item"
            },
            _s = {
                class: "stepItem type2"
            },
            Ls = {
                class: "num"
            },
            Ms = Object(c["createVNode"])("div", {
                class: "img wow animate__animated animate__fadeInUp ",
                style: {
                    "animation-delay": "0.5s"
                },
                "data-wow-delay": "0.5s",
                "data-wow-offset": "0"
            }, [Object(c["createVNode"])("img", {
                src: ls.a,
                alt: "step"
            })], -1),
            Fs = {
                class: "content"
            },
            Ws = {
                class: "item"
            },
            Rs = {
                class: "stepItem type3"
            },
            Us = {
                class: "num"
            },
            Ks = Object(c["createVNode"])("div", {
                class: "img wow animate__animated animate__fadeInUp",
                style: {
                    "animation-delay": "1s"
                },
                "data-wow-delay": "1s",
                "data-wow-offset": "0"
            }, [Object(c["createVNode"])("img", {
                src: bs.a,
                alt: "step"
            })], -1),
            Es = {
                class: "content"
            },
            Hs = {
                class: "item"
            },
            qs = {
                class: "stepItem type4"
            },
            Js = {
                class: "num"
            },
            zs = Object(c["createVNode"])("div", {
                class: "img wow animate__animated animate__fadeInUp",
                style: {
                    "animation-delay": "1.5s"
                },
                "data-wow-delay": "1.5s",
                "data-wow-offset": "0"
            }, [Object(c["createVNode"])("img", {
                src: us.a,
                alt: "step"
            })], -1),
            Qs = {
                class: "content"
            },
            Ys = {
                class: "linkSectionBuy"
            },
            Gs = {
                class: "container"
            },
            Xs = {
                class: "wrapper"
            },
            Zs = {
                class: "left"
            },
            $s = {
                class: "linkFormBuyWrapper"
            },
            er = {
                class: "headBlock"
            },
            tr = {
                class: "title"
            },
            ar = {
                class: "subtitle"
            },
            cr = {
                class: "formBlock"
            },
            or = {
                class: "radioWrap"
            },
            ir = {
                class: "label"
            },
            nr = {
                class: "radioList"
            },
            sr = {
                class: "radioBtn"
            },
            rr = Object(c["createVNode"])("input", {
                type: "radio",
                name: "type",
                id: "seller",
                checked: ""
            }, null, -1),
            lr = {
                for: "seller"
            },
            dr = {
                class: "radioBtn"
            },
            br = Object(c["createVNode"])("input", {
                type: "radio",
                name: "type",
                id: "buyer"
            }, null, -1),
            pr = {
                for: "buyer"
            },
            ur = {
                class: "fieldsWrap"
            },
            Or = {
                class: "fieldItem"
            },
            jr = {
                class: "inBlockType3"
            },
            mr = {
                for: "buyerTerms"
            },
            gr = {
                class: "note"
            },
            yr = {
                class: "inWrap"
            },
            hr = {
                class: "fieldItem"
            },
            fr = {
                class: "inBlockType3"
            },
            Nr = {
                for: "buyerLink"
            },
            Vr = Object(c["createVNode"])("div", {
                class: "inWrap"
            }, [Object(c["createVNode"])("input", {
                type: "text",
                name: "buyerLink",
                id: "buyerLink",
                value: "https://www.moneyspace.net/merchantapi/makepaym…",
                readonly: ""
            })], -1),
            vr = {
                class: "buttons"
            },
            Sr = {
                class: "btnSimpleType1"
            },
            kr = {
                class: "btnFillType6"
            },
            Pr = {
                class: "right"
            },
            Dr = {
                class: "linkInfo"
            },
            xr = {
                class: "titleBlock"
            },
            Ar = {
                class: "subtitle invert"
            },
            wr = {
                class: "title invert",
                style: {
                    "line-height": "90px"
                }
            },
            Cr = {
                class: "contentBlock"
            },
            Br = {
                class: "textBlock invert"
            },
            Ir = {
                class: "linkDescr invert"
            },
            Tr = {
                class: "item"
            },
            _r = {
                class: "cap"
            },
            Lr = {
                class: "item"
            },
            Mr = {
                class: "cap"
            },
            Fr = {
                class: "linkSectionMerch"
            },
            Wr = {
                class: "container"
            },
            Rr = {
                class: "wrapper"
            },
            Ur = {
                class: "left"
            },
            Kr = {
                class: "linkInfo"
            },
            Er = {
                class: "titleBlock"
            },
            Hr = {
                class: "subtitle"
            },
            qr = {
                class: "title"
            },
            Jr = {
                class: "contentBlock"
            },
            zr = {
                class: "textBlock"
            },
            Qr = {
                class: "linkDescr"
            },
            Yr = {
                class: "item"
            },
            Gr = {
                class: "cap"
            },
            Xr = {
                class: "item"
            },
            Zr = {
                class: "cap"
            },
            $r = {
                class: "right"
            },
            el = {
                class: "linkMerchFormWrapper"
            },
            tl = {
                class: "headBlock"
            },
            al = {
                class: "title"
            },
            cl = {
                class: "subtitle"
            },
            ol = {
                class: "formBlock"
            },
            il = {
                class: "fieldsWrap"
            },
            nl = {
                class: "fieldItem"
            },
            sl = {
                class: "inBlockType1"
            },
            rl = {
                for: "name"
            },
            ll = {
                class: "inWrap"
            },
            dl = {
                class: "fieldItem"
            },
            bl = {
                class: "inBlockType1"
            },
            pl = {
                for: "sum"
            },
            ul = {
                class: "inWrap"
            },
            Ol = {
                class: "checkWrap"
            },
            jl = {
                class: "checkList"
            },
            ml = {
                class: "checkBtn"
            },
            gl = Object(c["createVNode"])("input", {
                type: "checkbox",
                name: "card",
                id: "card"
            }, null, -1),
            yl = {
                for: "card"
            },
            hl = {
                class: "checkBtn"
            },
            fl = Object(c["createVNode"])("input", {
                type: "checkbox",
                name: "plan",
                id: "plan"
            }, null, -1),
            Nl = {
                for: "plan"
            },
            Vl = {
                class: "radioWrap"
            },
            vl = {
                class: "label"
            },
            Sl = {
                class: "radioList"
            },
            kl = {
                class: "radioBtn invert"
            },
            Pl = Object(c["createVNode"])("input", {
                type: "radio",
                name: "typeMerch",
                id: "sellerMerch",
                checked: ""
            }, null, -1),
            Dl = {
                for: "sellerMerch"
            },
            xl = {
                class: "radioBtn invert"
            },
            Al = Object(c["createVNode"])("input", {
                type: "radio",
                name: "typeMerch",
                id: "buyerMerch"
            }, null, -1),
            wl = {
                for: "buyerMerch"
            },
            Cl = {
                class: "fieldsWrap"
            },
            Bl = {
                class: "fieldItem"
            },
            Il = {
                class: "inBlockType1"
            },
            Tl = {
                for: "buyerTerms",
                class: "lg"
            },
            _l = {
                class: "note"
            },
            Ll = {
                class: "inWrap"
            },
            Ml = {
                class: "more"
            },
            Fl = {
                href: "#",
                class: "btnSimpleType2"
            },
            Wl = Object(c["createVNode"])("span", {
                class: "line"
            }, null, -1),
            Rl = {
                class: "btnFillType2 full"
            },
            Ul = {
                class: "joinSection links"
            },
            Kl = {
                class: "container"
            },
            El = {
                class: "joinBlock lg"
            },
            Hl = Object(c["createVNode"])("div", {
                class: "img"
            }, [Object(c["createVNode"])("img", {
                src: js.a,
                alt: "image"
            })], -1),
            ql = {
                class: "info"
            },
            Jl = {
                href: "#",
                class: "btnIconType1 sm"
            },
            zl = {
                class: "in"
            },
            Ql = {
                class: "text"
            },
            Yl = Object(c["createVNode"])("span", {
                class: "icon-arrow"
            }, null, -1);
        Object(c["popScopeId"])();
        var Gl = ms((function (e, t, a, o, i, n) {
                var s = Object(c["resolveComponent"])("Header"),
                    r = Object(c["resolveComponent"])("Footer");
                return Object(c["openBlock"])(), Object(c["createBlock"])("div", gs, [Object(c["createVNode"])(s), Object(c["createVNode"])("div", ys, [Object(c["createVNode"])("div", hs, [Object(c["createVNode"])("div", fs, [Object(c["createVNode"])("div", Ns, [Object(c["createVNode"])("div", Vs, [Object(c["createVNode"])("span", vs, Object(c["toDisplayString"])(e.t("linksPage.info")), 1)]), Object(c["createVNode"])("div", Ss, [Object(c["createVNode"])("div", ks, [Object(c["createVNode"])("p", Ps, Object(c["toDisplayString"])(e.t("linksPage.title")), 1)])])])])]), Object(c["createVNode"])("div", Ds, [Object(c["createVNode"])("div", xs, [Object(c["createVNode"])("div", As, [Object(c["createVNode"])("div", ws, [Object(c["createVNode"])("span", Cs, Object(c["toDisplayString"])(e.t("linksPage.steps[0].id")), 1), Bs, Object(c["createVNode"])("div", Is, [Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("linksPage.steps[0].content")), 1)])])]), Object(c["createVNode"])("div", Ts, [Object(c["createVNode"])("div", _s, [Object(c["createVNode"])("span", Ls, Object(c["toDisplayString"])(e.t("linksPage.steps[1].id")), 1), Ms, Object(c["createVNode"])("div", Fs, [Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("linksPage.steps[1].content")), 1)])])]), Object(c["createVNode"])("div", Ws, [Object(c["createVNode"])("div", Rs, [Object(c["createVNode"])("span", Us, Object(c["toDisplayString"])(e.t("linksPage.steps[2].id")), 1), Ks, Object(c["createVNode"])("div", Es, [Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("linksPage.steps[2].content")), 1)])])]), Object(c["createVNode"])("div", Hs, [Object(c["createVNode"])("div", qs, [Object(c["createVNode"])("span", Js, Object(c["toDisplayString"])(e.t("linksPage.steps[3].id")), 1), zs, Object(c["createVNode"])("div", Qs, [Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("linksPage.steps[3].content")), 1)])])])]), Object(c["createVNode"])("div", Ys, [Object(c["createVNode"])("div", Gs, [Object(c["createVNode"])("div", Xs, [Object(c["createVNode"])("div", Zs, [Object(c["createVNode"])("div", $s, [Object(c["createVNode"])("div", {
                    class: [
                        [e.isFormBuyActive() ? ["visible", "wow", "animate__animated", "animate__bounceInLeft"] : ["visible", "wow", "animate__animated", "animate__bounceOutLeft"]], "linkFormBuy"
                    ],
                    "data-wow-delay": "0.2s"
                }, [Object(c["createVNode"])("div", er, [Object(c["createVNode"])("span", tr, Object(c["toDisplayString"])(e.t("linksPage.linkSectionBuy.left.title")), 1), Object(c["createVNode"])("span", ar, Object(c["toDisplayString"])(e.t("linksPage.linkSectionBuy.left.subtitle")), 1)]), Object(c["createVNode"])("div", cr, [Object(c["createVNode"])("div", or, [Object(c["createVNode"])("span", ir, Object(c["toDisplayString"])(e.t("linksPage.linkSectionBuy.left.radioWrap.label")), 1), Object(c["createVNode"])("ul", nr, [Object(c["createVNode"])("li", null, [Object(c["createVNode"])("div", sr, [rr, Object(c["createVNode"])("label", lr, Object(c["toDisplayString"])(e.t("linksPage.linkSectionBuy.left.radioWrap.radioList.seller")), 1)])]), Object(c["createVNode"])("li", null, [Object(c["createVNode"])("div", dr, [br, Object(c["createVNode"])("label", pr, Object(c["toDisplayString"])(e.t("linksPage.linkSectionBuy.left.radioWrap.radioList.buyer")), 1)])])])]), Object(c["createVNode"])("div", ur, [Object(c["createVNode"])("div", Or, [Object(c["createVNode"])("div", jr, [Object(c["createVNode"])("label", mr, [Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.t("linksPage.linkSectionBuy.left.fieldsWrap.label1")) + " ", 1), Object(c["createVNode"])("span", gr, Object(c["toDisplayString"])(e.t("linksPage.linkSectionBuy.left.fieldsWrap.label2")), 1)]), Object(c["createVNode"])("div", yr, [Object(c["createVNode"])("input", {
                    type: "text",
                    class: "terms",
                    name: "buyerTerms",
                    id: "buyerTerms",
                    value: e.t("linksPage.linkSectionBuy.left.fieldsWrap.placeHolder"),
                    readonly: ""
                }, null, 8, ["value"])])])]), Object(c["createVNode"])("div", hr, [Object(c["createVNode"])("div", fr, [Object(c["createVNode"])("label", Nr, Object(c["toDisplayString"])(e.t("linksPage.linkSectionBuy.left.fieldsWrap.buyerLink")), 1), Vr])])]), Object(c["createVNode"])("div", vr, [Object(c["createVNode"])("button", Sr, Object(c["toDisplayString"])(e.t("linksPage.linkSectionBuy.left.fieldsWrap.print")), 1), Object(c["createVNode"])("span", kr, Object(c["toDisplayString"])(e.t("linksPage.linkSectionBuy.left.fieldsWrap.copyLink")), 1)])])], 2)])]), Object(c["createVNode"])("div", Pr, [Object(c["createVNode"])("div", Dr, [Object(c["createVNode"])("div", xr, [Object(c["createVNode"])("span", Ar, Object(c["toDisplayString"])(e.t("linksPage.linkSectionBuy.right.subtitle")), 1), Object(c["createVNode"])("span", wr, Object(c["toDisplayString"])(e.t("linksPage.linkSectionBuy.right.title")), 1)]), Object(c["createVNode"])("div", Cr, [Object(c["createVNode"])("div", Br, [Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("linksPage.linkSectionBuy.right.textBlock")), 1)])])]), Object(c["createVNode"])("div", Ir, [Object(c["createVNode"])("div", Tr, [Object(c["createVNode"])("span", _r, Object(c["toDisplayString"])(e.t("linksPage.linkSectionBuy.right.items[0].cap")), 1), Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("linksPage.linkSectionBuy.right.items[0].content")), 1)]), Object(c["createVNode"])("div", Lr, [Object(c["createVNode"])("span", Mr, Object(c["toDisplayString"])(e.t("linksPage.linkSectionBuy.right.items[1].cap")), 1), Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("linksPage.linkSectionBuy.right.items[1].content")), 1)])])])])])]), Object(c["createVNode"])("div", Fr, [Object(c["createVNode"])("div", Wr, [Object(c["createVNode"])("div", Rr, [Object(c["createVNode"])("div", Ur, [Object(c["createVNode"])("div", Kr, [Object(c["createVNode"])("div", Er, [Object(c["createVNode"])("span", Hr, Object(c["toDisplayString"])(e.t("linksPage.linkSectionMerch.left.subtitle")), 1), Object(c["createVNode"])("span", qr, Object(c["toDisplayString"])(e.t("linksPage.linkSectionMerch.left.title")), 1)]), Object(c["createVNode"])("div", Jr, [Object(c["createVNode"])("div", zr, [Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("linksPage.linkSectionMerch.left.textBlock")), 1)])])]), Object(c["createVNode"])("div", Qr, [Object(c["createVNode"])("div", Yr, [Object(c["createVNode"])("span", Gr, Object(c["toDisplayString"])(e.t("linksPage.linkSectionMerch.left.items[0].cap")), 1), Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("linksPage.linkSectionMerch.left.items[0].content1")), 1), Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("linksPage.linkSectionMerch.left.items[0].content2")), 1)]), Object(c["createVNode"])("div", Xr, [Object(c["createVNode"])("span", Zr, Object(c["toDisplayString"])(e.t("linksPage.linkSectionMerch.left.items[1].cap")), 1), Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("linksPage.linkSectionMerch.left.items[1].content")), 1)])])]), Object(c["createVNode"])("div", $r, [Object(c["createVNode"])("div", el, [Object(c["createVNode"])("div", {
                    class: [
                        [e.isMerchFormActive() ? ["visible", "wow", "animate__animated", "animate__bounceInRight"] : ["visible", "wow", "animate__animated", "animate__bounceOutRight"]], "linkMerchForm"
                    ],
                    "data-wow-delay": "0.2s"
                }, [Object(c["createVNode"])("div", tl, [Object(c["createVNode"])("span", al, Object(c["toDisplayString"])(e.t("linksPage.linkSectionMerch.right.title")), 1), Object(c["createVNode"])("span", cl, Object(c["toDisplayString"])(e.t("linksPage.linkSectionMerch.right.subtitle")), 1)]), Object(c["createVNode"])("div", ol, [Object(c["createVNode"])("div", il, [Object(c["createVNode"])("div", nl, [Object(c["createVNode"])("div", sl, [Object(c["createVNode"])("label", rl, Object(c["toDisplayString"])(e.t("linksPage.linkSectionMerch.right.items[0].label")), 1), Object(c["createVNode"])("div", ll, [Object(c["createVNode"])("input", {
                    type: "text",
                    name: "name",
                    id: "name",
                    value: e.t("linksPage.linkSectionMerch.right.items[0].placeholder")
                }, null, 8, ["value"])])])]), Object(c["createVNode"])("div", dl, [Object(c["createVNode"])("div", bl, [Object(c["createVNode"])("label", pl, Object(c["toDisplayString"])(e.t("linksPage.linkSectionMerch.right.items[1].label")), 1), Object(c["createVNode"])("div", ul, [Object(c["createVNode"])("input", {
                    type: "text",
                    name: "sum",
                    id: "sum",
                    value: e.t("linksPage.linkSectionMerch.right.items[1].placeholder")
                }, null, 8, ["value"])])])])]), Object(c["createVNode"])("div", Ol, [Object(c["createVNode"])("ul", jl, [Object(c["createVNode"])("li", null, [Object(c["createVNode"])("div", ml, [gl, Object(c["createVNode"])("label", yl, Object(c["toDisplayString"])(e.t("linksPage.linkSectionMerch.right.checkList[0].label")), 1)])]), Object(c["createVNode"])("li", null, [Object(c["createVNode"])("div", hl, [fl, Object(c["createVNode"])("label", Nl, Object(c["toDisplayString"])(e.t("linksPage.linkSectionMerch.right.checkList[1].label")), 1)])])])]), Object(c["createVNode"])("div", Vl, [Object(c["createVNode"])("span", vl, Object(c["toDisplayString"])(e.t("linksPage.linkSectionMerch.right.radioWrap.label")), 1), Object(c["createVNode"])("ul", Sl, [Object(c["createVNode"])("li", null, [Object(c["createVNode"])("div", kl, [Pl, Object(c["createVNode"])("label", Dl, Object(c["toDisplayString"])(e.t("linksPage.linkSectionMerch.right.radioWrap.radioList[0].label")), 1)])]), Object(c["createVNode"])("li", null, [Object(c["createVNode"])("div", xl, [Al, Object(c["createVNode"])("label", wl, Object(c["toDisplayString"])(e.t("linksPage.linkSectionMerch.right.radioWrap.radioList[1].label")), 1)])])])]), Object(c["createVNode"])("div", Cl, [Object(c["createVNode"])("div", Bl, [Object(c["createVNode"])("div", Il, [Object(c["createVNode"])("label", Tl, [Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.t("linksPage.linkSectionMerch.right.fieldsWrap.label1")) + " ", 1), Object(c["createVNode"])("span", _l, Object(c["toDisplayString"])(e.t("linksPage.linkSectionMerch.right.fieldsWrap.label2")), 1)]), Object(c["createVNode"])("div", Ll, [Object(c["createVNode"])("input", {
                    type: "text",
                    class: "terms",
                    name: "buyerTerms",
                    id: "buyerTerms",
                    value: e.t("linksPage.linkSectionMerch.right.fieldsWrap.placeHolder"),
                    readonly: ""
                }, null, 8, ["value"])])])])]), Object(c["createVNode"])("div", Ml, [Object(c["createVNode"])("a", Fl, Object(c["toDisplayString"])(e.t("linksPage.linkSectionMerch.right.more.link")), 1), Wl]), Object(c["createVNode"])("button", Rl, Object(c["toDisplayString"])(e.t("linksPage.linkSectionMerch.right.more.buttonValue")), 1)])], 2)])])])])]), Object(c["createVNode"])("div", Ul, [Object(c["createVNode"])("div", Kl, [Object(c["createVNode"])("div", El, [Hl, Object(c["createVNode"])("div", ql, [Object(c["createVNode"])("span", {
                    class: "title sm mb-md-4",
                    style: {
                        "line-height": "1.4 !important"
                    },
                    innerHTML: e.$t("linksPage.joinSection.info")
                }, null, 8, ["innerHTML"]), Object(c["createVNode"])("a", Jl, [Object(c["createVNode"])("span", zl, [Object(c["createVNode"])("span", Ql, Object(c["toDisplayString"])(e.$t("linksPage.joinSection.link")), 1), Yl])])])])])])])]), Object(c["createVNode"])(r)])
            })),
            Xl = Object(c["defineComponent"])({
                components: {
                    Header: ga,
                    Footer: oi
                },
                name: "LinksPage",
                setup: function () {
                    var e = Object(i["b"])(),
                        t = e.t,
                        a = e.locale;
                    return {
                        t: t,
                        locale: a
                    }
                },
                data: function () {
                    return {
                        scrollPosition: 0,
                        screenWidth: 0
                    }
                },
                mounted: function () {
                    window.addEventListener("scroll", this.handleScroll)
                },
                unmounted: function () {
                    window.removeEventListener("scroll", this.handleScroll)
                },
                methods: {
                    handleScroll: function () {
                        var e, t;
                        this.scrollPosition = window.scrollY, this.screenWidth = null === (e = document) || void 0 === e || null === (t = e.scrollingElement) || void 0 === t ? void 0 : t.clientWidth
                    },
                    isFormBuyActive: function () {
                        switch (!0) {
                            case this.screenWidth <= 320:
                                return this.scrollPosition >= 1100 && this.scrollPosition <= 1700;
                            case this.screenWidth <= 375:
                                return this.scrollPosition >= 1e3 && this.scrollPosition <= 1600;
                            case this.screenWidth <= 425:
                                return this.scrollPosition >= 900 && this.scrollPosition <= 1500;
                            case this.screenWidth <= 768:
                                return this.scrollPosition >= 500 && this.scrollPosition <= 1200;
                            case this.screenWidth <= 1024:
                                return this.scrollPosition >= 540 && this.scrollPosition <= 1200;
                            case this.screenWidth <= 1440:
                                return this.scrollPosition >= 700 && this.scrollPosition <= 1400;
                            default:
                                return this.scrollPosition >= 700 && this.scrollPosition <= 1500
                        }
                    },
                    isMerchFormActive: function () {
                        switch (!0) {
                            case this.screenWidth <= 320:
                                return this.scrollPosition >= 2390 && this.scrollPosition <= 3100;
                            case this.screenWidth <= 375:
                                return this.scrollPosition >= 2290 && this.scrollPosition <= 3e3;
                            case this.screenWidth <= 425:
                                return this.scrollPosition >= 2100 && this.scrollPosition <= 2900;
                            case this.screenWidth <= 768:
                                return this.scrollPosition >= 1200 && this.scrollPosition <= 1970;
                            case this.screenWidth <= 1024:
                                return this.scrollPosition >= 1250 && this.scrollPosition <= 2300;
                            case this.screenWidth <= 1440:
                                return this.scrollPosition >= 1300 && this.scrollPosition <= 2800;
                            default:
                                return this.scrollPosition >= 1500 && this.scrollPosition <= 2800
                        }
                    }
                }
            });
        a("2d62");
        const Zl = C()(Xl, [
            ["render", Gl],
            ["__scopeId", "data-v-058bf259"]
        ]);
        var $l = Zl,
            ed = a("add4"),
            td = a.n(ed),
            ad = Object(c["withScopeId"])("data-v-b59ca51a");
        Object(c["pushScopeId"])("data-v-b59ca51a");
        var cd = {
                id: "bodyWrap"
            },
            od = {
                class: "aboutPageHeader"
            },
            id = {
                class: "container"
            },
            nd = {
                class: "aboutBanner"
            },
            sd = {
                class: "wrapper"
            },
            rd = {
                class: "pageTitle"
            },
            ld = {
                class: "info"
            },
            dd = {
                class: "aboutInfo"
            },
            bd = {
                class: "container"
            },
            pd = {
                class: "wrapper"
            },
            ud = {
                class: "left"
            },
            Od = {
                class: "titleBlock"
            },
            jd = {
                class: "title"
            },
            md = {
                class: "contentBlock"
            },
            gd = {
                class: "textBlock"
            },
            yd = {
                class: "right"
            },
            hd = {
                class: "joinSection about"
            },
            fd = {
                class: "container"
            },
            Nd = {
                class: "joinBlock"
            },
            Vd = Object(c["createVNode"])("div", {
                class: "img dotsBottom"
            }, [Object(c["createVNode"])("img", {
                src: td.a,
                alt: "image"
            })], -1),
            vd = {
                class: "info"
            },
            Sd = {
                class: "title md"
            },
            kd = {
                class: "content"
            },
            Pd = {
                class: "textBlock"
            },
            Dd = {
                href: "#",
                class: "btnIconType1 sm"
            },
            xd = {
                class: "in"
            },
            Ad = {
                class: "text"
            },
            wd = Object(c["createVNode"])("span", {
                class: "icon-arrow"
            }, null, -1);
        Object(c["popScopeId"])();
        var Cd = ad((function (e, t, a, o, i, n) {
                var s = Object(c["resolveComponent"])("Header"),
                    r = Object(c["resolveComponent"])("Footer");
                return Object(c["openBlock"])(), Object(c["createBlock"])("div", cd, [Object(c["createVNode"])("div", od, [Object(c["createVNode"])(s, {
                    theme: "light"
                }), Object(c["createVNode"])("div", id, [Object(c["createVNode"])("div", nd, [Object(c["createVNode"])("div", sd, [Object(c["createVNode"])("span", rd, Object(c["toDisplayString"])(e.t("aboutPage.header.pageTitle")), 1), Object(c["createVNode"])("div", ld, [Object(c["createVNode"])("p", null, [Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.t("aboutPage.header.info1")), 1), Object(c["createVNode"])("span", null, Object(c["toDisplayString"])(e.t("aboutPage.header.info2")), 1)])])])])])]), Object(c["createVNode"])("div", dd, [Object(c["createVNode"])("div", bd, [Object(c["createVNode"])("div", pd, [Object(c["createVNode"])("div", ud, [Object(c["createVNode"])("div", Od, [Object(c["createVNode"])("span", jd, Object(c["toDisplayString"])(e.t("aboutPage.aboutInfo.left.title")), 1)]), Object(c["createVNode"])("div", md, [Object(c["createVNode"])("div", gd, [Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("aboutPage.aboutInfo.left.text")), 1)])])]), Object(c["createVNode"])("div", yd, [Object(c["createVNode"])("div", {
                    class: e.quoteBlock,
                    style: e.quoteBlockStyle
                }, [Object(c["createVNode"])("p", {
                    class: e.pquoteBlock,
                    style: e.pquoteBlockStyle,
                    "data-wow-delay": "1s"
                }, Object(c["toDisplayString"])(e.t("aboutPage.aboutInfo.right.quote")), 7)], 6)])])])]), Object(c["createVNode"])("div", hd, [Object(c["createVNode"])("div", fd, [Object(c["createVNode"])("div", Nd, [Vd, Object(c["createVNode"])("div", vd, [Object(c["createVNode"])("span", Sd, Object(c["toDisplayString"])(e.t("aboutPage.joinSection.title")), 1), Object(c["createVNode"])("div", kd, [Object(c["createVNode"])("div", Pd, [Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("aboutPage.joinSection.text")), 1)])]), Object(c["createVNode"])("a", Dd, [Object(c["createVNode"])("span", xd, [Object(c["createVNode"])("span", Ad, Object(c["toDisplayString"])(e.t("aboutPage.joinSection.link")), 1), wd])])])])])]), Object(c["createVNode"])(r)])
            })),
            Bd = Object(c["defineComponent"])({
                components: {
                    Header: ga,
                    Footer: oi
                },
                name: "AboutUsPage",
                setup: function () {
                    var e = Object(i["b"])(),
                        t = e.t,
                        a = e.locale;
                    return {
                        t: t,
                        locale: a
                    }
                },
                data: function () {
                    return {
                        scrollPosition: 0,
                        screenWidth: 0,
                        quoteBlock: "",
                        quoteBlockStyle: {},
                        pquoteBlock: "",
                        pquoteBlockStyle: {}
                    }
                },
                beforeMount: function () {
                    this.quoteBlock = "quoteBlock wow animate__animated animate__fadeInUpBig", this.quoteBlockStyle = {
                        visibility: "hidden",
                        "animation-name": "none"
                    }, this.pquoteBlock = "wow animate__animated animate__fadeIn", this.pquoteBlockStyle = {
                        visibility: "hidden",
                        "animation-delay": "1s",
                        "animation-name": "none"
                    }
                },
                mounted: function () {
                    var e = this;
                    this.quoteBlock = "quoteBlock wow animate__animated animate__fadeInUpBig animate__animated", this.quoteBlockStyle = {
                        visibility: "visible",
                        "animation-name": "fadeInUpBig"
                    }, this.pquoteBlock = "wow animate__animated animate__fadeIn animate__animated", this.pquoteBlockStyle = {
                        visibility: "visible",
                        "animation-delay": "1s",
                        "animation-name": "fadeIn"
                    }, setTimeout((function () {
                        e.quoteBlock = "quoteBlock wow  animate__fadeInUpBig animate__animated", e.pquoteBlock = "wow  animate__fadeIn"
                    }), 2e3)
                }
            });
        const Id = C()(Bd, [
            ["render", Cd],
            ["__scopeId", "data-v-b59ca51a"]
        ]);
        var Td = Id,
            _d = a("9f02"),
            Ld = a.n(_d),
            Md = a("6607"),
            Fd = a.n(Md),
            Wd = Object(c["withScopeId"])("data-v-2b00dc79");
        Object(c["pushScopeId"])("data-v-2b00dc79");
        var Rd = {
                id: "bodyWrap"
            },
            Ud = {
                class: "demoPage"
            },
            Kd = {
                class: "demoSection"
            },
            Ed = {
                class: "container"
            },
            Hd = {
                class: "wrapper"
            },
            qd = {
                class: "titleBlock"
            },
            Jd = {
                class: "pageTitle"
            },
            zd = {
                class: "contentBlock"
            },
            Qd = {
                class: "demoInfo"
            },
            Yd = {
                class: "productCard"
            },
            Gd = {
                class: "name"
            },
            Xd = {
                class: "description"
            },
            Zd = {
                href: "#",
                class: "more"
            },
            $d = {
                class: "productInfo"
            },
            eb = {
                class: "item dropdownItem"
            },
            tb = {
                class: "title"
            },
            ab = {
                class: "btn"
            },
            cb = {
                class: "in"
            },
            ob = {
                class: "item dropdownItem"
            },
            ib = {
                class: "title"
            },
            nb = {
                class: "btn"
            },
            sb = {
                class: "in"
            },
            rb = {
                class: "item dropdownItem"
            },
            lb = {
                class: "title"
            },
            db = {
                class: "btn"
            },
            bb = {
                class: "in"
            },
            pb = {
                class: "item dropdownItem"
            },
            ub = {
                class: "title"
            },
            Ob = {
                class: "btn"
            },
            jb = {
                class: "in"
            },
            mb = {
                class: "buy"
            },
            gb = Object(c["createVNode"])("span", {
                class: "icon"
            }, [Object(c["createVNode"])("img", {
                src: Ld.a,
                alt: "logo"
            })], -1),
            yb = {
                class: "cost"
            },
            hb = {
                class: "demoSlider scrollSlider"
            },
            fb = Object(c["createVNode"])("div", {
                class: "main scrollBlock mCustomScrollbar _mCS_1 scroller",
                id: "test-scroll",
                style: {
                    "overflow-y": "auto"
                }
            }, [Object(c["createVNode"])("div", {
                id: "mCSB_1",
                class: "mCS-light mCSB_vertical mCSB_inside",
                style: {
                    "max-height": "none"
                },
                tabindex: "0"
            }, [Object(c["createVNode"])("div", {
                id: "mCSB_1_container",
                class: "mCSB_container",
                dir: "ltr"
            }, [Object(c["createVNode"])("div", {
                class: "inner"
            }, [Object(c["createVNode"])("div", {
                class: "item"
            }, [Object(c["createVNode"])("div", {
                class: "in"
            }, [Object(c["createVNode"])("img", {
                src: Fd.a,
                alt: "demo",
                class: "mCS_img_loaded"
            })])]), Object(c["createVNode"])("div", {
                class: "item"
            }, [Object(c["createVNode"])("div", {
                class: "in"
            }, [Object(c["createVNode"])("img", {
                src: Fd.a,
                alt: "demo",
                class: "mCS_img_loaded"
            })])]), Object(c["createVNode"])("div", {
                class: "item"
            }, [Object(c["createVNode"])("div", {
                class: "in"
            }, [Object(c["createVNode"])("img", {
                src: Fd.a,
                alt: "demo",
                class: "mCS_img_loaded"
            })])]), Object(c["createVNode"])("div", {
                class: "item"
            }, [Object(c["createVNode"])("div", {
                class: "in"
            }, [Object(c["createVNode"])("img", {
                src: Fd.a,
                alt: "demo",
                class: "mCS_img_loaded"
            })])]), Object(c["createVNode"])("div", {
                class: "item"
            }, [Object(c["createVNode"])("div", {
                class: "in"
            }, [Object(c["createVNode"])("img", {
                src: Fd.a,
                alt: "demo",
                class: "mCS_img_loaded"
            })])])])])])], -1),
            Nb = {
                class: "preview"
            };
        Object(c["popScopeId"])();
        var Vb = Wd((function (e, t, a, o, i, n) {
                var s = Object(c["resolveComponent"])("Header"),
                    r = Object(c["resolveComponent"])("san"),
                    l = Object(c["resolveComponent"])("PaymentModal"),
                    d = Object(c["resolveComponent"])("Footer");
                return Object(c["openBlock"])(), Object(c["createBlock"])("div", Rd, [Object(c["createVNode"])("div", Ud, [Object(c["createVNode"])(s), Object(c["createVNode"])("div", Kd, [Object(c["createVNode"])("div", Ed, [Object(c["createVNode"])("div", Hd, [Object(c["createVNode"])("div", qd, [Object(c["createVNode"])("span", Jd, Object(c["toDisplayString"])(e.t("demoPage.pageTitle")), 1)]), Object(c["createVNode"])("div", zd, [Object(c["createVNode"])("div", Qd, [Object(c["createVNode"])("div", Yd, [Object(c["createVNode"])("div", Gd, [Object(c["createVNode"])("span", null, Object(c["toDisplayString"])(e.t("demoPage.productCard.name")), 1)]), Object(c["createVNode"])("div", Xd, [Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("demoPage.productCard.description")), 1)]), Object(c["createVNode"])("a", Zd, Object(c["toDisplayString"])(e.t("demoPage.productCard.more")), 1), Object(c["createVNode"])("div", $d, [Object(c["createVNode"])("div", eb, [Object(c["createVNode"])("div", {
                    class: ["head", {
                        active: e.isActive(0)
                    }]
                }, [Object(c["createVNode"])("span", tb, Object(c["toDisplayString"])(e.t("demoPage.item[0].title")), 1), Object(c["createVNode"])("div", ab, [Object(c["createVNode"])("span", {
                    onClick: t[1] || (t[1] = function (t) {
                        return e.spanClicked(0)
                    })
                }), Object(c["createVNode"])("span", {
                    onClick: t[2] || (t[2] = function (t) {
                        return e.spanClicked(0)
                    })
                })])], 2), Object(c["createVNode"])("div", {
                    class: ["content", {
                        show: e.isActive(0)
                    }]
                }, [Object(c["createVNode"])("div", cb, [Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("demoPage.item[0].para[0]")), 1), Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("demoPage.item[0].para[1]")), 1), Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("demoPage.item[0].para[2]")), 1)])], 2)]), Object(c["createVNode"])("div", ob, [Object(c["createVNode"])("div", {
                    class: ["head", {
                        active: e.isActive(1)
                    }]
                }, [Object(c["createVNode"])("span", ib, Object(c["toDisplayString"])(e.t("demoPage.item[1].title")), 1), Object(c["createVNode"])("div", nb, [Object(c["createVNode"])("span", {
                    onClick: t[3] || (t[3] = function (t) {
                        return e.spanClicked(1)
                    })
                }), Object(c["createVNode"])("span", {
                    onClick: t[4] || (t[4] = function (t) {
                        return e.spanClicked(1)
                    })
                })])], 2), Object(c["createVNode"])("div", {
                    class: ["content", {
                        show: e.isActive(1)
                    }]
                }, [Object(c["createVNode"])("div", sb, [Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("demoPage.item[1].para[0]")), 1)])], 2)]), Object(c["createVNode"])("div", rb, [Object(c["createVNode"])("div", {
                    class: ["head", {
                        active: e.isActive(2)
                    }]
                }, [Object(c["createVNode"])("span", lb, Object(c["toDisplayString"])(e.t("demoPage.item[2].title")), 1), Object(c["createVNode"])("div", db, [Object(c["createVNode"])("span", {
                    onClick: t[5] || (t[5] = function (t) {
                        return e.spanClicked(2)
                    })
                }), Object(c["createVNode"])("span", {
                    onClick: t[6] || (t[6] = function (t) {
                        return e.spanClicked(2)
                    })
                })])], 2), Object(c["createVNode"])("div", {
                    class: ["content", {
                        show: e.isActive(2)
                    }]
                }, [Object(c["createVNode"])("div", bb, [Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("demoPage.item[2].para[0]")), 1)])], 2)]), Object(c["createVNode"])("div", pb, [Object(c["createVNode"])("div", {
                    class: ["head", {
                        active: e.isActive(3)
                    }]
                }, [Object(c["createVNode"])("span", ub, Object(c["toDisplayString"])(e.t("demoPage.item[3].title")), 1), Object(c["createVNode"])("div", Ob, [Object(c["createVNode"])("span", {
                    onClick: t[7] || (t[7] = function (t) {
                        return e.spanClicked(3)
                    })
                }), Object(c["createVNode"])("span", {
                    onClick: t[8] || (t[8] = function (t) {
                        return e.spanClicked(3)
                    })
                })])], 2), Object(c["createVNode"])("div", {
                    class: ["content", {
                        show: e.isActive(3)
                    }]
                }, [Object(c["createVNode"])("div", jb, [Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("demoPage.item[3].para[0]")), 1)])], 2)])]), Object(c["createVNode"])("div", mb, [Object(c["createVNode"])("button", {
                    class: "btnIconType5",
                    onClick: t[9] || (t[9] = function () {
                        return e.openmodal && e.openmodal.apply(e, arguments)
                    })
                }, [gb, Object(c["createVNode"])(r, {
                    class: "text"
                }, {
                    default: Wd((function () {
                        return [Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.t("demoPage.buy.text")), 1)]
                    })),
                    _: 1
                })]), Object(c["createVNode"])("span", yb, [Object(c["createVNode"])("span", null, Object(c["toDisplayString"])(e.t("demoPage.buy.cost1")), 1), Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.t("demoPage.buy.cost2")), 1)])])])]), Object(c["createVNode"])("div", hb, [fb, Object(c["createVNode"])("div", Nb, [Object(c["createVNode"])("div", {
                    class: [
                        [0 === e.scrollNo ? ["active"] : ""], "item"
                    ]
                }, [Object(c["createVNode"])("img", {
                    onClick: t[10] || (t[10] = function (t) {
                        return e.changeScrollBarPos(0, 0)
                    }),
                    src: Fd.a,
                    alt: "demo"
                })], 2), Object(c["createVNode"])("div", {
                    class: [
                        [1 === e.scrollNo ? ["active"] : ""], "item"
                    ]
                }, [Object(c["createVNode"])("img", {
                    onClick: t[11] || (t[11] = function (t) {
                        return e.changeScrollBarPos(348, 1)
                    }),
                    src: Fd.a,
                    alt: "demo"
                })], 2), Object(c["createVNode"])("div", {
                    class: [
                        [2 === e.scrollNo ? ["active"] : ""], "item"
                    ]
                }, [Object(c["createVNode"])("img", {
                    onClick: t[12] || (t[12] = function (t) {
                        return e.changeScrollBarPos(780, 2)
                    }),
                    src: Fd.a,
                    alt: "demo"
                })], 2), Object(c["createVNode"])("div", {
                    class: [
                        [3 === e.scrollNo ? ["active"] : ""], "item"
                    ]
                }, [Object(c["createVNode"])("img", {
                    onClick: t[13] || (t[13] = function (t) {
                        return e.changeScrollBarPos(1200, 3)
                    }),
                    src: Fd.a,
                    alt: "demo"
                })], 2), Object(c["createVNode"])("div", {
                    class: [
                        [4 === e.scrollNo ? ["active"] : ""], "item"
                    ]
                }, [Object(c["createVNode"])("img", {
                    onClick: t[14] || (t[14] = function (t) {
                        return e.changeScrollBarPos(1544, 4)
                    }),
                    src: Fd.a,
                    alt: "demo"
                })], 2)])])])])])])]), e.showModal ? (Object(c["openBlock"])(), Object(c["createBlock"])(l, {
                    key: 0,
                    onClose: t[15] || (t[15] = function (t) {
                        return e.showModal = !1
                    })
                })) : Object(c["createCommentVNode"])("", !0), Object(c["createVNode"])(d)])
            })),
            vb = Object(c["withScopeId"])("data-v-0dfb8bb8");
        Object(c["pushScopeId"])("data-v-0dfb8bb8");
        var Sb = {
                class: "modals table"
            },
            kb = {
                class: "middle tCell"
            },
            Pb = {
                class: "blockMod paymentModal paymentForm",
                id: "paymentModal",
                ref: "el"
            },
            Db = {
                class: "headBlock"
            },
            xb = {
                class: "formTitle",
                style: {
                    "font-size": "18px"
                }
            },
            Ab = Object(c["createVNode"])("div", {
                class: "siteLogo2"
            }, [Object(c["createVNode"])("img", {
                src: Q.a,
                alt: "logo"
            }), Object(c["createVNode"])("div", {
                class: "data"
            }, [Object(c["createVNode"])("span", {
                class: "subtitle"
            }, "powered by "), Object(c["createVNode"])("span", {
                class: "title"
            }, "money space")])], -1),
            wb = {
                class: "formBlock"
            },
            Cb = {
                class: "fieldsWrap"
            },
            Bb = {
                class: "fieldItem"
            },
            Ib = {
                class: "col"
            },
            Tb = {
                class: "inBlockType1"
            },
            _b = {
                for: "cardNumber"
            },
            Lb = Object(c["createVNode"])("div", {
                class: "inWrap"
            }, [Object(c["createVNode"])("input", {
                type: "text",
                class: "cardNumber",
                name: "cardNumber",
                id: "cardNumber",
                value: "1123   2000   3200   2391"
            })], -1),
            Mb = {
                class: "fieldItem"
            },
            Fb = {
                class: "col"
            },
            Wb = {
                class: "inBlockType1"
            },
            Rb = Object(c["createVNode"])("div", {
                class: "inWrap comb"
            }, [Object(c["createVNode"])("input", {
                type: "text",
                class: "cardMonth",
                name: "month",
                id: "month",
                value: "08"
            }), Object(c["createVNode"])("input", {
                type: "text",
                class: "cardYear",
                name: "year",
                id: "year",
                value: "2020"
            })], -1),
            Ub = {
                class: "col"
            },
            Kb = {
                class: "inBlockType1"
            },
            Eb = {
                for: "cvc"
            },
            Hb = Object(c["createVNode"])("div", {
                class: "inWrap"
            }, [Object(c["createVNode"])("input", {
                type: "text",
                class: "cardCvc",
                name: "cvc",
                id: "cvc",
                value: "032"
            })], -1),
            qb = {
                class: "btnFillType2 full upp"
            },
            Jb = Object(c["createVNode"])("div", {
                class: "overlayModal"
            }, null, -1);
        Object(c["popScopeId"])();
        var zb = vb((function (e, t, a, o, i, n) {
                return Object(c["openBlock"])(), Object(c["createBlock"])("div", {
                    class: e.state.Modal
                }, [Object(c["createVNode"])("div", Sb, [Object(c["createVNode"])("div", kb, [Object(c["createVNode"])("div", Pb, [Object(c["createVNode"])("div", Db, [Object(c["createVNode"])("div", xb, Object(c["toDisplayString"])(e.t("startSection.createLinkPayForm.checkout")), 1), Ab]), Object(c["createVNode"])("div", wb, [Object(c["createVNode"])("div", Cb, [Object(c["createVNode"])("div", Bb, [Object(c["createVNode"])("div", Ib, [Object(c["createVNode"])("div", Tb, [Object(c["createVNode"])("label", _b, Object(c["toDisplayString"])(e.t("startSection.createLinkPayForm.cardNoLabel")), 1), Lb])])]), Object(c["createVNode"])("div", Mb, [Object(c["createVNode"])("div", Fb, [Object(c["createVNode"])("div", Wb, [Object(c["createVNode"])("label", null, Object(c["toDisplayString"])(e.t("startSection.createLinkPayForm.expDateLabel")), 1), Rb])]), Object(c["createVNode"])("div", Ub, [Object(c["createVNode"])("div", Kb, [Object(c["createVNode"])("label", Eb, Object(c["toDisplayString"])(e.t("startSection.createLinkPayForm.cvcLabel")), 1), Hb])])])]), Object(c["createVNode"])("button", qb, Object(c["toDisplayString"])(e.t("startSection.createLinkPayForm.submit")), 1)])], 512), Jb])])], 2)
            })),
            Qb = a("5550"),
            Yb = Object(c["defineComponent"])({
                name: "PaymentModal",
                setup: function () {
                    var e = Object(i["b"])(),
                        t = e.t,
                        a = e.locale,
                        o = Object(c["ref"])(),
                        n = Object(c["reactive"])({
                            Modal: "modalsScroll open",
                            String: Object(c["computed"])((function () {
                                return "modalsScroll open"
                            }))
                        });

                    function s() {
                        n.Modal = "modalsScroll"
                    }
                    return Object(Qb["a"])(o, s), {
                        t: t,
                        locale: a,
                        el: o,
                        state: n
                    }
                },
                data: function () {
                    return {}
                }
            });
        a("58ca");
        const Gb = C()(Yb, [
            ["render", zb],
            ["__scopeId", "data-v-0dfb8bb8"]
        ]);
        var Xb = Gb,
            Zb = Object(c["defineComponent"])({
                components: {
                    Header: ga,
                    Footer: oi,
                    PaymentModal: Xb
                },
                name: "PaymentDemoPage",
                setup: function () {
                    var e = Object(i["b"])(),
                        t = e.t,
                        a = e.locale;
                    return {
                        t: t,
                        locale: a
                    }
                },
                mounted: function () {
                    document.getElementById("test-scroll").addEventListener("scroll", this.handleScroll)
                },
                data: function () {
                    return {
                        isClicked: !1,
                        key: 0,
                        scrollPosition: 0,
                        scrollNo: 0,
                        showModal: !1
                    }
                },
                methods: {
                    spanClicked: function (e) {
                        this.key = e, this.isClicked = !this.isClicked
                    },
                    isActive: function (e) {
                        return this.isClicked && this.key === e
                    },
                    handleScroll: function () {
                        this.scrollPosition = window.scrollY
                    },
                    changeScrollBarPos: function (e, t) {
                        this.scrollNo = t, document.getElementById("test-scroll").scrollTo({
                            top: e,
                            behavior: "smooth"
                        })
                    },
                    openmodal: function () {
                        var e = this;
                        this.showModal ? (this.showModal = !1, setTimeout((function () {
                            return e.showModal = !0
                        }), 10)) : this.showModal || (this.showModal = !0)
                    }
                }
            });
        a("265c");
        const $b = C()(Zb, [
            ["render", Vb],
            ["__scopeId", "data-v-2b00dc79"]
        ]);
        var ep = $b,
            tp = {
                id: "bodyWrap"
            },
            ap = {
                class: "businessSection"
            },
            cp = {
                class: "container"
            },
            op = {
                class: "businessBlock"
            },
            ip = {
                class: "wrapper"
            },
            np = {
                class: "titleBlock"
            },
            sp = {
                class: "title",
                style: {
                    "font-size": "38px"
                }
            },
            rp = {
                class: "subtitle"
            },
            lp = {
                class: "contentBlock"
            },
            dp = {
                class: "listTempl1"
            },
            bp = {
                class: "num"
            },
            pp = {
                class: "num"
            },
            up = {
                class: "num"
            },
            Op = {
                class: "num"
            };

        function jp(e, t, a, o, i, n) {
            var s = Object(c["resolveComponent"])("Header"),
                r = Object(c["resolveComponent"])("Footer");
            return Object(c["openBlock"])(), Object(c["createBlock"])("div", tp, [Object(c["createVNode"])(s), Object(c["createVNode"])("div", ap, [Object(c["createVNode"])("div", cp, [Object(c["createVNode"])("div", op, [Object(c["createVNode"])("div", ip, [Object(c["createVNode"])("div", np, [Object(c["createVNode"])("span", sp, Object(c["toDisplayString"])(e.t("businessSection.subtitle")), 1), Object(c["createVNode"])("span", rp, Object(c["toDisplayString"])(e.t("businessSection.title")), 1)]), Object(c["createVNode"])("div", lp, [Object(c["createVNode"])("ul", dp, [Object(c["createVNode"])("li", null, [Object(c["createVNode"])("span", bp, Object(c["toDisplayString"])(e.t("businessSection.contentBlock[0].id")), 1), Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("businessSection.contentBlock[0].value")), 1)]), Object(c["createVNode"])("li", null, [Object(c["createVNode"])("span", pp, Object(c["toDisplayString"])(e.t("businessSection.contentBlock[1].id")), 1), Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("businessSection.contentBlock[1].value")), 1)]), Object(c["createVNode"])("li", null, [Object(c["createVNode"])("span", up, Object(c["toDisplayString"])(e.t("businessSection.contentBlock[2].id")), 1), Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("businessSection.contentBlock[2].value")), 1)]), Object(c["createVNode"])("li", null, [Object(c["createVNode"])("span", Op, Object(c["toDisplayString"])(e.t("businessSection.contentBlock[3].id")), 1), Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("businessSection.contentBlock[3].value")), 1)])])])])])])]), Object(c["createVNode"])(r)])
        }
        var mp = Object(c["defineComponent"])({
            components: {
                Header: ga,
                Footer: oi
            },
            name: "BusinessPage",
            setup: function () {
                var e = Object(i["b"])(),
                    t = e.t,
                    a = e.locale;
                return {
                    t: t,
                    locale: a
                }
            }
        });
        const gp = C()(mp, [
            ["render", jp]
        ]);
        var yp = gp,
            hp = Object(c["withScopeId"])("data-v-3c0b2532");
        Object(c["pushScopeId"])("data-v-3c0b2532");
        var fp = {
                id: "bodyWrap"
            },
            Np = {
                class: "privacy businessSection"
            },
            Vp = {
                class: "container"
            },
            vp = {
                class: "privacy businessBlock"
            },
            Sp = {
                class: "wrapper"
            },
            kp = {
                class: "titleBlock"
            },
            Pp = {
                class: "title"
            },
            Dp = {
                class: "subtitle"
            },
            xp = {
                class: "contentBlock"
            },
            Ap = {
                class: "titleBlock"
            },
            wp = {
                class: "contentBlock"
            },
            Cp = {
                class: "subtitleBlock"
            },
            Bp = {
                class: "listTempl1"
            },
            Ip = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            Tp = Object(c["createVNode"])("br", null, null, -1),
            _p = Object(c["createVNode"])("hr", null, null, -1),
            Lp = Object(c["createVNode"])("br", null, null, -1),
            Mp = {
                class: "titleBlock"
            },
            Fp = {
                class: "contentBlock"
            },
            Wp = {
                class: "listTempl1"
            },
            Rp = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            Up = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            Kp = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            Ep = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            Hp = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            qp = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            Jp = Object(c["createVNode"])("br", null, null, -1),
            zp = Object(c["createVNode"])("hr", null, null, -1),
            Qp = Object(c["createVNode"])("br", null, null, -1),
            Yp = {
                class: "titleBlock"
            },
            Gp = {
                class: "contentBlock"
            },
            Xp = {
                class: "subtitleBlock"
            },
            Zp = Object(c["createVNode"])("br", null, null, -1),
            $p = Object(c["createVNode"])("hr", null, null, -1),
            eu = Object(c["createVNode"])("br", null, null, -1),
            tu = {
                class: "titleBlock"
            },
            au = {
                class: "contentBlock"
            },
            cu = {
                class: "subtitleBlock"
            },
            ou = {
                class: "listTempl1"
            },
            iu = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            nu = Object(c["createVNode"])("br", null, null, -1),
            su = Object(c["createVNode"])("hr", null, null, -1),
            ru = Object(c["createVNode"])("br", null, null, -1),
            lu = {
                class: "titleBlock"
            },
            du = {
                class: "contentBlock"
            },
            bu = {
                class: "subtitleBlock"
            },
            pu = {
                class: "listTempl1"
            },
            uu = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            Ou = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            ju = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            mu = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            gu = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            yu = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            hu = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            fu = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            Nu = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            Vu = Object(c["createVNode"])("br", null, null, -1),
            vu = Object(c["createVNode"])("hr", null, null, -1),
            Su = Object(c["createVNode"])("br", null, null, -1),
            ku = {
                class: "titleBlock"
            },
            Pu = {
                class: "contentBlock"
            },
            Du = {
                class: "subtitleBlock"
            },
            xu = {
                class: "listTempl1"
            },
            Au = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            wu = {
                id: "head"
            },
            Cu = {
                class: "subtitleBlock",
                id: "subhead"
            },
            Bu = Object(c["createVNode"])("br", null, null, -1),
            Iu = Object(c["createVNode"])("hr", null, null, -1),
            Tu = Object(c["createVNode"])("br", null, null, -1),
            _u = {
                class: "titleBlock"
            },
            Lu = {
                class: "contentBlock"
            },
            Mu = {
                class: "subtitleBlock"
            },
            Fu = Object(c["createVNode"])("br", null, null, -1),
            Wu = Object(c["createVNode"])("hr", null, null, -1),
            Ru = Object(c["createVNode"])("br", null, null, -1),
            Uu = {
                class: "titleBlock"
            },
            Ku = {
                class: "contentBlock"
            },
            Eu = {
                class: "subtitleBlock"
            },
            Hu = {
                class: "listTempl1"
            },
            qu = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            Ju = {
                id: "head"
            },
            zu = {
                class: "subtitleBlock",
                id: "subhead"
            },
            Qu = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            Yu = {
                id: "head"
            },
            Gu = {
                class: "subtitleBlock",
                id: "subhead"
            },
            Xu = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            Zu = {
                id: "head"
            },
            $u = {
                class: "subtitleBlock",
                id: "subhead"
            },
            eO = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            tO = {
                id: "head"
            },
            aO = {
                class: "subtitleBlock",
                id: "subhead"
            },
            cO = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            oO = {
                id: "head"
            },
            iO = {
                class: "subtitleBlock",
                id: "subhead"
            },
            nO = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            sO = {
                id: "head"
            },
            rO = {
                class: "subtitleBlock",
                id: "subhead"
            },
            lO = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            dO = {
                id: "head"
            },
            bO = {
                class: "subtitleBlock",
                id: "subhead"
            },
            pO = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            uO = {
                id: "head"
            },
            OO = {
                class: "subtitleBlock",
                id: "subhead"
            },
            jO = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            mO = Object(c["createVNode"])("br", null, null, -1),
            gO = Object(c["createVNode"])("hr", null, null, -1),
            yO = Object(c["createVNode"])("br", null, null, -1),
            hO = {
                class: "titleBlock"
            },
            fO = {
                class: "contentBlock"
            },
            NO = {
                class: "subtitleBlock"
            },
            VO = Object(c["createVNode"])("br", null, null, -1),
            vO = Object(c["createVNode"])("hr", null, null, -1),
            SO = Object(c["createVNode"])("br", null, null, -1),
            kO = {
                class: "titleBlock"
            },
            PO = {
                class: "contentBlock"
            },
            DO = {
                class: "subtitleBlock"
            },
            xO = Object(c["createVNode"])("br", null, null, -1),
            AO = Object(c["createVNode"])("hr", null, null, -1),
            wO = Object(c["createVNode"])("br", null, null, -1),
            CO = {
                class: "titleBlock"
            },
            BO = {
                class: "contentBlock"
            },
            IO = {
                class: "subtitleBlock"
            },
            TO = Object(c["createVNode"])("br", null, null, -1),
            _O = Object(c["createVNode"])("hr", null, null, -1),
            LO = Object(c["createVNode"])("br", null, null, -1),
            MO = {
                class: "titleBlock"
            },
            FO = {
                class: "contentBlock"
            },
            WO = {
                class: "subtitleBlock"
            },
            RO = Object(c["createVNode"])("br", null, null, -1),
            UO = Object(c["createVNode"])("hr", null, null, -1),
            KO = Object(c["createVNode"])("br", null, null, -1),
            EO = {
                class: "titleBlock"
            },
            HO = {
                class: "contentBlock"
            },
            qO = {
                class: "subtitleBlock"
            },
            JO = {
                class: "subtitleBlock"
            },
            zO = Object(c["createVNode"])("br", null, null, -1),
            QO = Object(c["createVNode"])("hr", null, null, -1),
            YO = Object(c["createVNode"])("br", null, null, -1),
            GO = {
                class: "titleBlock"
            },
            XO = {
                class: "contentBlock"
            },
            ZO = {
                class: "subtitleBlock"
            },
            $O = Object(c["createVNode"])("br", null, null, -1),
            ej = Object(c["createVNode"])("hr", null, null, -1),
            tj = Object(c["createVNode"])("br", null, null, -1),
            aj = {
                class: "titleBlock"
            },
            cj = {
                class: "contentBlock"
            },
            oj = {
                class: "subtitleBlock"
            },
            ij = {
                class: "listTempl1"
            },
            nj = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            sj = {
                id: "head"
            },
            rj = {
                class: "subtitleBlock",
                id: "subhead"
            },
            lj = {
                class: "subtitleBlock",
                id: "subhead"
            },
            dj = {
                class: "subtitleBlock",
                id: "subhead"
            },
            bj = {
                class: "subtitleBlock",
                id: "subhead"
            },
            pj = {
                class: "subtitleBlock",
                id: "subhead"
            },
            uj = Object(c["createVNode"])("span", {
                class: "num"
            }, null, -1),
            Oj = {
                id: "head"
            },
            jj = {
                class: "subtitleBlock",
                id: "subhead"
            },
            mj = {
                class: "subtitleBlock",
                id: "subhead"
            },
            gj = {
                class: "subtitleBlock",
                id: "subhead"
            },
            yj = {
                class: "subtitleBlock",
                id: "subhead"
            },
            hj = Object(c["createVNode"])("br", null, null, -1),
            fj = Object(c["createVNode"])("hr", null, null, -1),
            Nj = Object(c["createVNode"])("br", null, null, -1);
        Object(c["popScopeId"])();
        var Vj = hp((function (e, t, a, o, i, n) {
                var s = Object(c["resolveComponent"])("Header"),
                    r = Object(c["resolveComponent"])("Footer");
                return Object(c["openBlock"])(), Object(c["createBlock"])("div", fp, [Object(c["createVNode"])(s), Object(c["createVNode"])("div", Np, [Object(c["createVNode"])("div", Vp, [Object(c["createVNode"])("div", vp, [Object(c["createVNode"])("div", Sp, [Object(c["createVNode"])("div", kp, [Object(c["createVNode"])("span", Pp, Object(c["toDisplayString"])(e.t("privacyPolicy.title")), 1), Object(c["createVNode"])("span", Dp, Object(c["toDisplayString"])(e.t("privacyPolicy.subtitle")), 1)]), Object(c["createVNode"])("div", xp, [Object(c["createVNode"])("h2", Ap, Object(c["toDisplayString"])(e.t("privacyCollectionofPersonalData.title")), 1), Object(c["createVNode"])("div", wp, [Object(c["createVNode"])("p", Cp, Object(c["toDisplayString"])(e.t("privacyCollectionofPersonalData.subtitle")), 1), Object(c["createVNode"])("ul", Bp, [Object(c["createVNode"])("li", null, [Ip, Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("privacyCollectionofPersonalData.bulletPoint.text1")), 1)])])]), Tp, _p, Lp, Object(c["createVNode"])("h2", Mp, Object(c["toDisplayString"])(e.t("TypesofDataCollected.title")), 1), Object(c["createVNode"])("div", Fp, [Object(c["createVNode"])("ul", Wp, [Object(c["createVNode"])("li", null, [Rp, Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("TypesofDataCollected.bulletPoint.PersonalData.name")) + " " + Object(c["toDisplayString"])(e.t("TypesofDataCollected.bulletPoint.PersonalData.text")), 1)]), Object(c["createVNode"])("li", null, [Up, Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("TypesofDataCollected.bulletPoint.ContactInformation.name")) + " " + Object(c["toDisplayString"])(e.t("TypesofDataCollected.bulletPoint.ContactInformation.text")), 1)]), Object(c["createVNode"])("li", null, [Kp, Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("TypesofDataCollected.bulletPoint.AccountDetails.name")) + " " + Object(c["toDisplayString"])(e.t("TypesofDataCollected.bulletPoint.AccountDetails.text")), 1)]), Object(c["createVNode"])("li", null, [Ep, Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("TypesofDataCollected.bulletPoint.ProofOfIdentity.name")) + " " + Object(c["toDisplayString"])(e.t("TypesofDataCollected.bulletPoint.ProofOfIdentity.text")), 1)]), Object(c["createVNode"])("li", null, [Hp, Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("TypesofDataCollected.bulletPoint.TransactionAndFinancialInformation.name")) + " " + Object(c["toDisplayString"])(e.t("TypesofDataCollected.bulletPoint.TransactionAndFinancialInformation.text")), 1)]), Object(c["createVNode"])("li", null, [qp, Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("TypesofDataCollected.bulletPoint.TechnicalData.name")) + " " + Object(c["toDisplayString"])(e.t("TypesofDataCollected.bulletPoint.TechnicalData.text")), 1)])])]), Jp, zp, Qp, Object(c["createVNode"])("h2", Yp, Object(c["toDisplayString"])(e.t("Children.title")), 1), Object(c["createVNode"])("div", Gp, [Object(c["createVNode"])("p", Xp, Object(c["toDisplayString"])(e.t("Children.subtitle")), 1)]), Zp, $p, eu, Object(c["createVNode"])("h2", tu, Object(c["toDisplayString"])(e.t("StorageOfData.title")), 1), Object(c["createVNode"])("div", au, [Object(c["createVNode"])("p", cu, Object(c["toDisplayString"])(e.t("StorageOfData.subtitle")), 1), Object(c["createVNode"])("ul", ou, [Object(c["createVNode"])("li", null, [iu, Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("StorageOfData.bulletPoint.text1")), 1)])])]), nu, su, ru, Object(c["createVNode"])("h2", lu, Object(c["toDisplayString"])(e.t("UseOfData.title")), 1), Object(c["createVNode"])("div", du, [Object(c["createVNode"])("p", bu, Object(c["toDisplayString"])(e.t("UseOfData.subtitle")), 1), Object(c["createVNode"])("ul", pu, [Object(c["createVNode"])("li", null, [uu, Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("UseOfData.bulletPoint.text1")), 1)]), Object(c["createVNode"])("li", null, [Ou, Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("UseOfData.bulletPoint.text2")), 1)]), Object(c["createVNode"])("li", null, [ju, Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("UseOfData.bulletPoint.text3")), 1)]), Object(c["createVNode"])("li", null, [mu, Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("UseOfData.bulletPoint.text4")), 1)]), Object(c["createVNode"])("li", null, [gu, Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("UseOfData.bulletPoint.text5")), 1)]), Object(c["createVNode"])("li", null, [yu, Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("UseOfData.bulletPoint.text6")), 1)]), Object(c["createVNode"])("li", null, [hu, Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("UseOfData.bulletPoint.text7")), 1)]), Object(c["createVNode"])("li", null, [fu, Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("UseOfData.bulletPoint.text8")), 1)]), Object(c["createVNode"])("li", null, [Nu, Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("UseOfData.bulletPoint.text9")), 1)])])]), Vu, vu, Su, Object(c["createVNode"])("h2", ku, Object(c["toDisplayString"])(e.t("DisclosureOfPersonalData.title")), 1), Object(c["createVNode"])("div", Pu, [Object(c["createVNode"])("p", Du, Object(c["toDisplayString"])(e.t("DisclosureOfPersonalData.subtitle")), 1), Object(c["createVNode"])("ul", xu, [Object(c["createVNode"])("li", null, [Au, Object(c["createVNode"])("b", wu, Object(c["toDisplayString"])(e.t("DisclosureOfPersonalData.bulletPoint.title")), 1)]), Object(c["createVNode"])("p", Cu, Object(c["toDisplayString"])(e.t("DisclosureOfPersonalData.bulletPoint.subtitle")), 1)])]), Bu, Iu, Tu, Object(c["createVNode"])("h2", _u, Object(c["toDisplayString"])(e.t("DataRetention.title")), 1), Object(c["createVNode"])("div", Lu, [Object(c["createVNode"])("p", Mu, Object(c["toDisplayString"])(e.t("DataRetention.subtitle")), 1)]), Fu, Wu, Ru, Object(c["createVNode"])("h2", Uu, Object(c["toDisplayString"])(e.t("DataSubjectRights.title")), 1), Object(c["createVNode"])("div", Ku, [Object(c["createVNode"])("p", Eu, Object(c["toDisplayString"])(e.t("DataSubjectRights.subtitle")), 1), Object(c["createVNode"])("ul", Hu, [Object(c["createVNode"])("li", null, [qu, Object(c["createVNode"])("b", Ju, Object(c["toDisplayString"])(e.t("DataSubjectRights.bulletPoint.WithdrawalOfconsent.name")), 1)]), Object(c["createVNode"])("p", zu, Object(c["toDisplayString"])(e.t("DataSubjectRights.bulletPoint.WithdrawalOfconsent.text")), 1), Object(c["createVNode"])("li", null, [Qu, Object(c["createVNode"])("b", Yu, Object(c["toDisplayString"])(e.t("DataSubjectRights.bulletPoint.DataAccess.name")), 1)]), Object(c["createVNode"])("p", Gu, Object(c["toDisplayString"])(e.t("DataSubjectRights.bulletPoint.DataAccess.text")), 1), Object(c["createVNode"])("li", null, [Xu, Object(c["createVNode"])("b", Zu, Object(c["toDisplayString"])(e.t("DataSubjectRights.bulletPoint.DataPortability.name")), 1)]), Object(c["createVNode"])("p", $u, Object(c["toDisplayString"])(e.t("DataSubjectRights.bulletPoint.DataPortability.text")), 1), Object(c["createVNode"])("li", null, [eO, Object(c["createVNode"])("b", tO, Object(c["toDisplayString"])(e.t("DataSubjectRights.bulletPoint.Objection.name")), 1)]), Object(c["createVNode"])("p", aO, Object(c["toDisplayString"])(e.t("DataSubjectRights.bulletPoint.Objection.text")), 1), Object(c["createVNode"])("li", null, [cO, Object(c["createVNode"])("b", oO, Object(c["toDisplayString"])(e.t("DataSubjectRights.bulletPoint.DataErasureOrDestruction.name")), 1)]), Object(c["createVNode"])("p", iO, Object(c["toDisplayString"])(e.t("DataSubjectRights.bulletPoint.DataErasureOrDestruction.text")), 1), Object(c["createVNode"])("li", null, [nO, Object(c["createVNode"])("b", sO, Object(c["toDisplayString"])(e.t("DataSubjectRights.bulletPoint.Suspension.name")), 1)]), Object(c["createVNode"])("p", rO, Object(c["toDisplayString"])(e.t("DataSubjectRights.bulletPoint.Suspension.text")), 1), Object(c["createVNode"])("li", null, [lO, Object(c["createVNode"])("b", dO, Object(c["toDisplayString"])(e.t("DataSubjectRights.bulletPoint.Rectification.name")), 1)]), Object(c["createVNode"])("p", bO, Object(c["toDisplayString"])(e.t("DataSubjectRights.bulletPoint.Rectification.text")), 1), Object(c["createVNode"])("li", null, [pO, Object(c["createVNode"])("b", uO, Object(c["toDisplayString"])(e.t("DataSubjectRights.bulletPoint.ComplaintLodging.name")), 1)]), Object(c["createVNode"])("p", OO, Object(c["toDisplayString"])(e.t("DataSubjectRights.bulletPoint.ComplaintLodging.text")), 1), Object(c["createVNode"])("li", null, [jO, Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("DataSubjectRights.bulletPoint.text1")), 1)])])]), mO, gO, yO, Object(c["createVNode"])("h2", hO, Object(c["toDisplayString"])(e.t("AdvertisingAndMarketing.title")), 1), Object(c["createVNode"])("div", fO, [Object(c["createVNode"])("p", NO, Object(c["toDisplayString"])(e.t("AdvertisingAndMarketing.subtitle")), 1)]), VO, vO, SO, Object(c["createVNode"])("h2", kO, Object(c["toDisplayString"])(e.t("Cookies.title")), 1), Object(c["createVNode"])("div", PO, [Object(c["createVNode"])("p", DO, Object(c["toDisplayString"])(e.t("Cookies.subtitle")), 1)]), xO, AO, wO, Object(c["createVNode"])("h2", CO, Object(c["toDisplayString"])(e.t("DataSecurity.title")), 1), Object(c["createVNode"])("div", BO, [Object(c["createVNode"])("p", IO, Object(c["toDisplayString"])(e.t("DataSecurity.subtitle")), 1)]), TO, _O, LO, Object(c["createVNode"])("h2", MO, Object(c["toDisplayString"])(e.t("DataBreachNotification.title")), 1), Object(c["createVNode"])("div", FO, [Object(c["createVNode"])("p", WO, Object(c["toDisplayString"])(e.t("DataBreachNotification.subtitle")), 1)]), RO, UO, KO, Object(c["createVNode"])("h2", EO, Object(c["toDisplayString"])(e.t("ChangesToThisPrivacyPolicy.title")), 1), Object(c["createVNode"])("div", HO, [Object(c["createVNode"])("p", qO, Object(c["toDisplayString"])(e.t("ChangesToThisPrivacyPolicy.subtitle1")), 1), Object(c["createVNode"])("p", JO, Object(c["toDisplayString"])(e.t("ChangesToThisPrivacyPolicy.subtitle2")), 1)]), zO, QO, YO, Object(c["createVNode"])("h2", GO, Object(c["toDisplayString"])(e.t("LinksToOtherSites.title")), 1), Object(c["createVNode"])("div", XO, [Object(c["createVNode"])("p", ZO, Object(c["toDisplayString"])(e.t("LinksToOtherSites.subtitle")), 1)]), $O, ej, tj, Object(c["createVNode"])("h2", aj, Object(c["toDisplayString"])(e.t("ContactInformation.title")), 1), Object(c["createVNode"])("div", cj, [Object(c["createVNode"])("p", oj, Object(c["toDisplayString"])(e.t("ContactInformation.subtitle")), 1), Object(c["createVNode"])("ul", ij, [Object(c["createVNode"])("li", null, [nj, Object(c["createVNode"])("b", sj, Object(c["toDisplayString"])(e.t("ContactInformation.DataController.subtitle")), 1)]), Object(c["createVNode"])("p", rj, Object(c["toDisplayString"])(e.t("ContactInformation.DataController.line1")), 1), Object(c["createVNode"])("p", lj, Object(c["toDisplayString"])(e.t("ContactInformation.DataController.line2")), 1), Object(c["createVNode"])("p", dj, [Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.t("ContactInformation.email.text")) + " ", 1), Object(c["createVNode"])("b", null, Object(c["toDisplayString"])(e.t("address", {
                    account: e.t("ContactInformation.email.account"),
                    domain: e.t("ContactInformation.email.domain")
                })), 1)]), Object(c["createVNode"])("p", bj, Object(c["toDisplayString"])(e.t("ContactInformation.DataController.line4")), 1), Object(c["createVNode"])("p", pj, Object(c["toDisplayString"])(e.t("ContactInformation.DataController.line5")), 1), Object(c["createVNode"])("li", null, [uj, Object(c["createVNode"])("b", Oj, Object(c["toDisplayString"])(e.t("ContactInformation.DataProtectionOfficer.subtitle")), 1)]), Object(c["createVNode"])("p", jj, Object(c["toDisplayString"])(e.t("ContactInformation.DataProtectionOfficer.line1")), 1), Object(c["createVNode"])("p", mj, Object(c["toDisplayString"])(e.t("ContactInformation.DataProtectionOfficer.line2")), 1), Object(c["createVNode"])("p", gj, [Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.t("ContactInformation.email.text")) + " ", 1), Object(c["createVNode"])("b", null, Object(c["toDisplayString"])(e.t("address", {
                    account: e.t("ContactInformation.email.account"),
                    domain: e.t("ContactInformation.email.domain")
                })), 1)]), Object(c["createVNode"])("p", yj, Object(c["toDisplayString"])(e.t("ContactInformation.DataProtectionOfficer.line4")), 1)])]), hj, fj, Nj])])])])]), Object(c["createVNode"])(r)])
            })),
            vj = Object(c["defineComponent"])({
                components: {
                    Header: ga,
                    Footer: oi
                },
                name: "PrivacyPage",
                setup: function () {
                    var e = Object(i["b"])(),
                        t = e.t,
                        a = e.locale;
                    return {
                        t: t,
                        locale: a
                    }
                }
            });
        a("e17b");
        const Sj = C()(vj, [
            ["render", Vj],
            ["__scopeId", "data-v-3c0b2532"]
        ]);
        var kj = Sj,
            Pj = a("ff57"),
            Dj = a.n(Pj),
            xj = a("073b"),
            Aj = a.n(xj),
            wj = a("5b45"),
            Cj = a.n(wj),
            Bj = a("134d"),
            Ij = a.n(Bj),
            Tj = a("1917"),
            _j = a.n(Tj),
            Lj = a("7612"),
            Mj = a.n(Lj),
            Fj = a("6a15"),
            Wj = a.n(Fj),
            Rj = a("8911"),
            Uj = a.n(Rj),
            Kj = a("e91d"),
            Ej = a.n(Kj),
            Hj = Object(c["withScopeId"])("data-v-4b6011d6");
        Object(c["pushScopeId"])("data-v-4b6011d6");
        var qj = {
                id: "bodyWrap"
            },
            Jj = {
                class: "container h-100 w-100 d-flex align-items-center justify-content-center"
            },
            zj = {
                class: "row h-75 w-100 justify-content-between"
            },
            Qj = {
                class: "col-12 col-md-5 mt-3 d-flex flex-column justify-content-center align-items-center align-items-md-start"
            },
            Yj = {
                class: "text-primary display-4 fw-bold",
                style: {
                    "font-size": "38px"
                }
            },
            Gj = {
                class: "display-4 fw-bold"
            },
            Xj = {
                class: "pt-3 fw-normal",
                style: {
                    "font-size": "18px",
                    "line-height": "26px"
                }
            },
            Zj = {
                class: "productPageHeader__img mt-sm-5 col-12 col-md-7 col-lg-6 d-flex flex-column justify-content-start justify-content-md-center align-items-start position-relative overflow-hidden"
            },
            $j = {
                key: 0,
                class: "row h-auto w-100 d-flex justify-content-center",
                style: {
                    "animation-duration": "1s"
                }
            },
            em = Object(c["createVNode"])("div", {
                class: "productHeader__cell d-flex justify-content-center align-items-center"
            }, null, -1),
            tm = Object(c["createVNode"])("div", {
                class: "productHeader__cell d-flex justify-content-center align-items-center productHeader__cell--faded"
            }, null, -1),
            am = Object(c["createVNode"])("div", {
                class: "productHeader__cell d-flex justify-content-center align-items-center bg-white productHeader__cell--shadow homeImage-c1"
            }, [Object(c["createVNode"])("img", {
                class: "w-50",
                src: Dj.a,
                alt: ""
            })], -1),
            cm = {
                key: 1,
                class: "row h-auto w-100 d-flex justify-content-center",
                style: {
                    "animation-duration": "1.3s"
                }
            },
            om = Object(c["createVNode"])("div", {
                class: "productHeader__cell d-flex justify-content-center align-items-center productHeader__cell--faded"
            }, null, -1),
            im = Object(c["createVNode"])("div", {
                class: "productHeader__cell d-flex justify-content-center align-items-center bg-white productHeader__cell--shadow homeImage-c2",
                style: {
                    "animation-delay": "0.4s"
                }
            }, [Object(c["createVNode"])("img", {
                class: "w-50",
                src: Aj.a,
                alt: ""
            })], -1),
            nm = Object(c["createVNode"])("div", {
                class: "placeholder__cell"
            }, null, -1),
            sm = {
                key: 2,
                class: "row h-auto w-100 d-flex justify-content-center",
                style: {
                    "animation-duration": "1.5s"
                }
            },
            rm = Object(c["createVNode"])("div", {
                class: "productHeader__cell d-flex justify-content-center align-items-center bg-white productHeader__cell--shadow homeImage-c3",
                style: {
                    "animation-delay": "0.8s"
                }
            }, [Object(c["createVNode"])("img", {
                class: "w-50",
                src: Cj.a,
                alt: ""
            })], -1),
            lm = Object(c["createVNode"])("div", {
                class: "placeholder__cell"
            }, null, -1),
            dm = Object(c["createVNode"])("div", {
                class: "placeholder__cell"
            }, null, -1),
            bm = {
                class: "productPageContent"
            },
            pm = {
                class: "container pb-5"
            },
            um = {
                class: "row d-flex justify-content-between px-5"
            },
            Om = {
                class: "col-12 col-md-5"
            },
            jm = {
                class: "d-flex flex-column align-items-center text-center align-items-md-start text-md-start"
            },
            mm = Object(c["createVNode"])("div", {
                class: "product-icon d-flex justify-content-center align-items-center rounded-circle my-3"
            }, [Object(c["createVNode"])("i", {
                class: "bi bi-cash-coin display-5 text-primary"
            })], -1),
            gm = {
                class: "my-3"
            },
            ym = {
                class: "lh-base"
            },
            hm = {
                class: "col-12 col-md-5 mt-5 mt-md-0"
            },
            fm = {
                class: "d-flex flex-column align-items-center text-center align-items-md-start text-md-start"
            },
            Nm = Object(c["createVNode"])("div", {
                class: "product-icon my-3 d-flex justify-content-center align-items-center rounded-circle"
            }, [Object(c["createVNode"])("i", {
                class: "bi bi-lightning-charge-fill display-5 text-primary"
            })], -1),
            Vm = {
                class: "mt-3"
            },
            vm = Object(c["createVNode"])("br", null, null, -1),
            Sm = {
                class: "lh-base"
            },
            km = {
                class: "container mt-5 pt-0 pt-md-5 product-section"
            },
            Pm = {
                class: "row h-100 justify-content-between px-5"
            },
            Dm = {
                class: "col-12 h-100 col-md-5 mt-3 d-flex flex-column justify-content-center align-items-center text-center align-items-md-start text-md-start"
            },
            xm = {
                class: "display-4 fw-normal",
                style: {
                    "font-size": "38px"
                }
            },
            Am = Object(c["createVNode"])("br", null, null, -1),
            wm = {
                class: "my-5 fw-normal",
                style: {
                    "font-size": "18px",
                    "line-height": "28px"
                }
            },
            Cm = {
                class: "col-12 d-none d-sm-flex col-md-6 d-flex flex-column justify-content-center position-relative overflow-hidden",
                ref: "s2"
            },
            Bm = {
                key: 0,
                class: "row justify-content-end",
                style: {
                    "animation-duration": "1s"
                }
            },
            Im = Object(c["createVNode"])("div", {
                class: "productHeader__cell d-flex justify-content-center align-items-center bg-white productHeader__cell--shadow installmentImage-c1",
                style: {
                    "animation-delay": "0.2s"
                }
            }, [Object(c["createVNode"])("img", {
                class: "w-50",
                src: Ij.a,
                alt: ""
            })], -1),
            Tm = {
                key: 1,
                class: "row h-auto justify-content-center",
                style: {
                    "animation-duration": "1.3s"
                }
            },
            _m = Object(c["createVNode"])("div", {
                class: "productHeader__cell d-flex justify-content-center align-items-center bg-white productHeader__cell--shadow installmentImage-c2",
                style: {
                    "animation-delay": "0.4s"
                }
            }, [Object(c["createVNode"])("img", {
                class: "w-50",
                src: _j.a,
                alt: ""
            })], -1),
            Lm = {
                key: 2,
                class: "row h-auto justify-content-start",
                style: {
                    "animation-duration": "1.5s"
                }
            },
            Mm = Object(c["createVNode"])("div", {
                class: "productHeader__cell d-flex justify-content-center align-items-center bg-white productHeader__cell--shadow installmentImage-c3"
            }, [Object(c["createVNode"])("img", {
                class: "w-50",
                src: Mj.a,
                alt: ""
            })], -1),
            Fm = Object(c["createVNode"])("div", {
                class: "product__backgroundsquare position-absolute"
            }, null, -1),
            Wm = {
                class: "container p-4 background--darkblue mt-5 product-section"
            },
            Rm = {
                class: "container-fluid h-100 px-0 px-xl-5 d-flex flex-column justify-content-between"
            },
            Um = {
                class: "w-75 text-center mx-auto d-flex flex-column justify-content-center align-items-center"
            },
            Km = {
                class: "text-light mt-5 pt-3"
            },
            Em = {
                class: "text-secondary my-4"
            },
            Hm = {
                class: "d-none d-lg-flex productTable row h-50 text-light mb-5 position-relative"
            },
            qm = {
                class: "col-2 border-end p-0 pt-5"
            },
            Jm = {
                class: "pb-5 text-secondary"
            },
            zm = {
                class: "py-2 border-bottom",
                style: {
                    "font-size": "16px"
                }
            },
            Qm = {
                class: "py-2 border-bottom",
                style: {
                    "font-size": "16px"
                }
            },
            Ym = {
                class: "py-2 pb-5",
                style: {
                    "font-size": "16px"
                }
            },
            Gm = {
                class: "col-10 p-0 pt-5"
            },
            Xm = {
                class: "pb-5 ps-3 text-secondary"
            },
            Zm = {
                class: "py-2 ps-3 border-bottom fw-light",
                style: {
                    "font-size": "16px"
                }
            },
            $m = {
                class: "py-2 ps-3 border-bottom fw-light",
                style: {
                    "font-size": "16px"
                }
            },
            eg = {
                class: "py-2 ps-3 pb-5 fw-light",
                style: {
                    "font-size": "16px"
                }
            },
            tg = {
                class: "productTable__box position-absolute h-100 pt-5 ps-4"
            },
            ag = {
                class: "pb-4 fw-light"
            },
            cg = {
                class: "py-2",
                style: {
                    "font-size": "16px"
                }
            },
            og = {
                class: "py-2",
                style: {
                    "font-size": "16px"
                }
            },
            ig = {
                class: "py-2 pb-5",
                style: {
                    "font-size": "16px"
                }
            },
            ng = {
                class: "productTable__box position-absolute h-100 pt-5 ps-4"
            },
            sg = {
                class: "pb-4 fw-light"
            },
            rg = {
                class: "py-2 mt-1",
                style: {
                    "font-size": "16px"
                }
            },
            lg = {
                class: "py-2",
                style: {
                    "font-size": "16px"
                }
            },
            dg = {
                class: "py-2 pb-5",
                style: {
                    "font-size": "16px"
                }
            },
            bg = {
                class: "productTable__box position-absolute h-100 pt-5 ps-4"
            },
            pg = {
                class: "pb-4 fw-light"
            },
            ug = {
                class: "py-2 mt-1",
                style: {
                    "font-size": "16px"
                }
            },
            Og = {
                class: "py-2",
                style: {
                    "font-size": "16px"
                }
            },
            jg = {
                class: "py-2 pb-5",
                style: {
                    "font-size": "16px"
                }
            },
            mg = {
                class: "d-block d-lg-none position-relative"
            },
            gg = Object(c["createVNode"])("div", {
                class: "mobileTable__box"
            }, null, -1),
            yg = Object(c["createVNode"])("div", {
                class: "mobileTable__box"
            }, null, -1),
            hg = Object(c["createVNode"])("div", {
                class: "mobileTable__box"
            }, null, -1),
            fg = {
                class: "row  productTable--mobile position-relative"
            },
            Ng = {
                class: "row"
            },
            Vg = {
                class: "col-6 mobileTable__borderRight"
            },
            vg = {
                class: "row"
            },
            Sg = {
                class: "col-12 pt-5 px-0 mobileTable__header"
            },
            kg = {
                class: "text-secondary"
            },
            Pg = {
                class: "col-12 px-0"
            },
            Dg = {
                class: "text-light fw-bold py-2 mobileTable__borderBottom"
            },
            xg = {
                class: "col-12 px-0"
            },
            Ag = {
                class: "text-light fw-bold py-2 mobileTable__borderBottom"
            },
            wg = {
                class: "col-12 px-0"
            },
            Cg = {
                class: "text-light fw-bold py-2"
            },
            Bg = {
                class: "col-6"
            },
            Ig = {
                class: "row"
            },
            Tg = {
                class: "col-12 pt-5 ps-3 ps-5 mobileTable__header"
            },
            _g = {
                class: "text-secondary"
            },
            Lg = {
                class: "col-12 px-0"
            },
            Mg = {
                class: "text-light py-2 mobileTable__borderBottom ps-3"
            },
            Fg = {
                class: "col-12 px-0"
            },
            Wg = {
                class: "text-light py-2 mobileTable__borderBottom ps-3"
            },
            Rg = {
                class: "col-12 px-0"
            },
            Ug = {
                class: "text-light py-2 ps-3"
            },
            Kg = {
                class: "row"
            },
            Eg = {
                class: "col-6 mobileTable__borderRight"
            },
            Hg = {
                class: "row"
            },
            qg = {
                class: "col-12 pt-5 px-0 mobileTable__header"
            },
            Jg = {
                class: "text-secondary"
            },
            zg = {
                class: "col-12 px-0"
            },
            Qg = {
                class: "text-light fw-bold py-2 mobileTable__borderBottom"
            },
            Yg = {
                class: "col-12 px-0"
            },
            Gg = {
                class: "text-light fw-bold py-2 mobileTable__borderBottom"
            },
            Xg = {
                class: "col-12 px-0"
            },
            Zg = {
                class: "text-light fw-bold py-2"
            },
            $g = {
                class: "col-6"
            },
            ey = {
                class: "row"
            },
            ty = {
                class: "col-12 pt-5 ps-5 ps-5 mobileTable__header"
            },
            ay = {
                class: "col-12 px-0"
            },
            cy = {
                class: "text-light fw-bold py-2 mobileTable__borderBottom ps-5"
            },
            oy = {
                class: "col-12 px-0"
            },
            iy = {
                class: "text-light fw-bold py-2 mobileTable__borderBottom ps-5"
            },
            ny = {
                class: "col-12 px-0"
            },
            sy = {
                class: "text-light fw-bold py-2 ps-5"
            },
            ry = {
                class: "row"
            },
            ly = {
                class: "col-6 mobileTable__borderRight"
            },
            dy = {
                class: "row"
            },
            by = {
                class: "col-12 pt-5 px-0 mobileTable__header"
            },
            py = {
                class: "text-secondary"
            },
            uy = {
                class: "col-12 px-0"
            },
            Oy = {
                class: "text-light fw-bold py-2 mobileTable__borderBottom"
            },
            jy = {
                class: "col-12 px-0"
            },
            my = {
                class: "text-light fw-bold py-2 mobileTable__borderBottom"
            },
            gy = {
                class: "col-12 px-0"
            },
            yy = {
                class: "text-light fw-bold py-2"
            },
            hy = {
                class: "col-6"
            },
            fy = {
                class: "row"
            },
            Ny = {
                class: "col-12 py-5 ps-5 mobileTable__header"
            },
            Vy = {
                class: "col-12 px-0"
            },
            vy = {
                class: "text-light fw-bold py-2 mobileTable__borderBottom ps-5"
            },
            Sy = {
                class: "col-12 px-0"
            },
            ky = {
                class: "text-light fw-bold py-2 mobileTable__borderBottom ps-5"
            },
            Py = {
                class: "col-12 px-0"
            },
            Dy = {
                class: "text-light fw-bold py-2 ps-5"
            },
            xy = {
                class: "row mb-5"
            },
            Ay = {
                class: "col-6 mobileTable__borderRight"
            },
            wy = {
                class: "row"
            },
            Cy = {
                class: "col-12 pt-5 px-0 mobileTable__header"
            },
            By = {
                class: "text-secondary"
            },
            Iy = {
                class: "col-12 px-0"
            },
            Ty = {
                class: "text-light fw-bold py-2 mobileTable__borderBottom"
            },
            _y = {
                class: "col-12 px-0"
            },
            Ly = {
                class: "text-light fw-bold py-2 mobileTable__borderBottom"
            },
            My = {
                class: "col-12 px-0"
            },
            Fy = {
                class: "text-light fw-bold py-2"
            },
            Wy = {
                class: "col-6"
            },
            Ry = {
                class: "row"
            },
            Uy = {
                class: "col-12 pt-5 ps-5 mobileTable__header"
            },
            Ky = {
                class: "col-12 px-0"
            },
            Ey = {
                class: "text-light fw-bold py-2 mobileTable__borderBottom ps-5"
            },
            Hy = {
                class: "col-12 px-0"
            },
            qy = {
                class: "text-light fw-bold py-2 mobileTable__borderBottom ps-5"
            },
            Jy = {
                class: "col-12 px-0"
            },
            zy = {
                class: "text-light fw-bold py-2 ps-5"
            },
            Qy = {
                class: "container-fluid px-5 pt-5 product-section product-section-steps"
            },
            Yy = {
                class: "container"
            },
            Gy = {
                class: "row px-0 px-md-5 pt-5"
            },
            Xy = {
                style: {
                    "font-size": "36px",
                    "line-height": "60px"
                }
            },
            Zy = {
                class: "text-primary",
                style: {
                    "font-size": "36px"
                }
            },
            $y = Object(c["createVNode"])("div", {
                class: "product-section-steps-line"
            }, null, -1),
            eh = {
                class: "row px-0 px-md-5 justify-content-between"
            },
            th = {
                class: "col-12 col-md-4 mb-5 mb-md-0"
            },
            ah = {
                class: "col-12 h-100 p-4 pt-5 bg-white"
            },
            ch = {
                class: "row flex-column"
            },
            oh = Object(c["createVNode"])("div", {
                class: "col-12 h-50"
            }, [Object(c["createVNode"])("img", {
                class: "steps-icon",
                src: Wj.a,
                alt: ""
            })], -1),
            ih = {
                class: "col-12 h-50"
            },
            nh = {
                class: "mt-5 mb-1 text-dark"
            },
            sh = {
                class: "lh-base fw-normal text-dark"
            },
            rh = {
                class: "col-12 col-md-4 mb-5 mb-md-0"
            },
            lh = {
                class: "col-12 p-4 pt-5 bg-white"
            },
            dh = {
                class: "row flex-column"
            },
            bh = Object(c["createVNode"])("div", {
                class: "col-12 h-50"
            }, [Object(c["createVNode"])("img", {
                class: "steps-icon",
                src: Uj.a,
                alt: ""
            })], -1),
            ph = {
                class: "col-12 h-50"
            },
            uh = {
                class: "mt-5 mb-1 text-dark"
            },
            Oh = {
                class: "lh-base fw-normal text-dark"
            },
            jh = {
                class: "col-12 col-md-4 mb-5 mb-md-0"
            },
            mh = {
                class: "col-12 p-4 pt-5 bg-white"
            },
            gh = {
                class: "row flex-column"
            },
            yh = Object(c["createVNode"])("div", {
                class: "col-12 h-50"
            }, [Object(c["createVNode"])("img", {
                class: "steps-icon",
                src: Ej.a,
                alt: ""
            })], -1),
            hh = {
                class: "col-12 h-50"
            },
            fh = {
                class: "mt-5 mb-1 text-dark"
            },
            Nh = {
                class: "lh-base fw-normal text-dark"
            };
        Object(c["popScopeId"])();
        var Vh = Hj((function (e, t, a, o, i, n) {
                var s = Object(c["resolveComponent"])("Header"),
                    r = Object(c["resolveComponent"])("Footer");
                return Object(c["openBlock"])(), Object(c["createBlock"])("div", qj, [Object(c["createVNode"])(s), Object(c["createVNode"])("div", {
                    ref: e.sentinalName,
                    class: "productPageHeader text-center text-sm-start"
                }, [Object(c["createVNode"])("div", Jj, [Object(c["createVNode"])("div", zj, [Object(c["createVNode"])("div", Qj, [Object(c["createVNode"])("h1", Yj, Object(c["toDisplayString"])(e.t("ProductPage.FinancialFlexibility")), 1), Object(c["createVNode"])("h1", Gj, Object(c["toDisplayString"])(e.t("ProductPage.AtYourFingertips")), 1), Object(c["createVNode"])("h5", Xj, Object(c["toDisplayString"])(e.t("ProductPage.AllYourOnlinePayment")), 1)]), Object(c["createVNode"])("div", Zj, [Object(c["createVNode"])(c["TransitionGroup"], {
                    name: "fadeLeft",
                    tag: "div",
                    class: "d-flex flex-column"
                }, {
                    default: Hj((function () {
                        return [e.s1_mastercard ? (Object(c["openBlock"])(), Object(c["createBlock"])("div", $j, [em, tm, am])) : Object(c["createCommentVNode"])("", !0), e.s1_visa ? (Object(c["openBlock"])(), Object(c["createBlock"])("div", cm, [om, im, nm])) : Object(c["createCommentVNode"])("", !0), e.s1_jcb ? (Object(c["openBlock"])(), Object(c["createBlock"])("div", sm, [rm, lm, dm])) : Object(c["createCommentVNode"])("", !0)]
                    })),
                    _: 1
                })])])])], 512), Object(c["createVNode"])("div", bm, [Object(c["createVNode"])("div", pm, [Object(c["createVNode"])("div", um, [Object(c["createVNode"])("div", Om, [Object(c["createVNode"])("div", jm, [mm, Object(c["createVNode"])("h4", gm, Object(c["toDisplayString"])(e.t("ProductPage.AcceptForeignCurrency")), 1), Object(c["createVNode"])("h6", ym, Object(c["toDisplayString"])(e.t("ProductPage.AsWellAsAcceptingPayments")), 1)])]), Object(c["createVNode"])("div", hm, [Object(c["createVNode"])("div", fm, [Nm, Object(c["createVNode"])("h4", Vm, Object(c["toDisplayString"])(e.t("ProductPage.HighSpeedPaymentProcessing")), 1), vm, Object(c["createVNode"])("h6", Sm, Object(c["toDisplayString"])(e.t("ProductPage.OurPlatformIsArchitected")), 1)])])])]), Object(c["createVNode"])("div", km, [Object(c["createVNode"])("div", Pm, [Object(c["createVNode"])("div", Dm, [Object(c["createVNode"])("h1", xm, [Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.t("ProductPage.Installment.bold")) + " ", 1), Am, Object(c["createTextVNode"])(" " + Object(c["toDisplayString"])(e.t("ProductPage.Installment.h1")), 1)]), Object(c["createVNode"])("h5", wm, Object(c["toDisplayString"])(e.t("ProductPage.Installment.h5")), 1), Object(c["createVNode"])("h4", null, Object(c["toDisplayString"])(e.t("ProductPage.Installment.h4")), 1)]), Object(c["createVNode"])("div", Cm, [Object(c["createVNode"])(c["TransitionGroup"], {
                    name: "fadeLeft",
                    tag: "div",
                    class: "d-flex flex-column"
                }, {
                    default: Hj((function () {
                        return [e.s2_firstchoice ? (Object(c["openBlock"])(), Object(c["createBlock"])("div", Bm, [Im])) : Object(c["createCommentVNode"])("", !0), e.s2_ktc ? (Object(c["openBlock"])(), Object(c["createBlock"])("div", Tm, [_m])) : Object(c["createCommentVNode"])("", !0), e.s2_krungsri ? (Object(c["openBlock"])(), Object(c["createBlock"])("div", Lm, [Mm])) : Object(c["createCommentVNode"])("", !0)]
                    })),
                    _: 1
                }), Fm], 512)])]), Object(c["createVNode"])("div", Wm, [Object(c["createVNode"])("div", Rm, [Object(c["createVNode"])("div", Um, [Object(c["createVNode"])("h1", Km, Object(c["toDisplayString"])(e.t("ProductPage.MonthlyPaymentOptions")), 1), Object(c["createVNode"])("h6", Em, Object(c["toDisplayString"])(e.t("ProductPage.OfferFlexiblePayment")), 1)]), Object(c["createVNode"])("div", Hm, [Object(c["createVNode"])("div", qm, [Object(c["createVNode"])("h6", Jm, Object(c["toDisplayString"])(e.t("ProductPage.CardBrand")), 1), Object(c["createVNode"])("h5", zm, Object(c["toDisplayString"])(e.t("ProductPage.KTC")), 1), Object(c["createVNode"])("h5", Qm, Object(c["toDisplayString"])(e.t("ProductPage.KrungsriFirstChoice")), 1), Object(c["createVNode"])("h5", Ym, Object(c["toDisplayString"])(e.t("ProductPage.KrungsriCard")), 1)]), Object(c["createVNode"])("div", Gm, [Object(c["createVNode"])("h6", Xm, Object(c["toDisplayString"])(e.t("ProductPage.InstallmentTermLengths.text")), 1), Object(c["createVNode"])("h5", Zm, Object(c["toDisplayString"])(e.t("ProductPage.InstallmentTermLengths.KTC")), 1), Object(c["createVNode"])("h5", $m, Object(c["toDisplayString"])(e.t("ProductPage.InstallmentTermLengths.KrungsriFirstChoice")), 1), Object(c["createVNode"])("h5", eg, Object(c["toDisplayString"])(e.t("ProductPage.InstallmentTermLengths.KrungsriCard")), 1)]), Object(c["createVNode"])("div", tg, [Object(c["createVNode"])("h6", ag, Object(c["toDisplayString"])(e.t("ProductPage.MonthlyMinimum.text1")) + "    " + Object(c["toDisplayString"])(e.t("ProductPage.MonthlyMinimum.text2")), 1), Object(c["createVNode"])("h5", cg, Object(c["toDisplayString"])(e.t("ProductPage.MonthlyMinimum.KTC")), 1), Object(c["createVNode"])("h5", og, Object(c["toDisplayString"])(e.t("ProductPage.MonthlyMinimum.KrungsriFirstChoice")), 1), Object(c["createVNode"])("h5", ig, Object(c["toDisplayString"])(e.t("ProductPage.MonthlyMinimum.KrungsriCard")), 1)]), Object(c["createVNode"])("div", ng, [Object(c["createVNode"])("h6", sg, Object(c["toDisplayString"])(e.t("ProductPage.InterestAbsorbedCustomer.text")), 1), Object(c["createVNode"])("h5", rg, Object(c["toDisplayString"])(e.t("ProductPage.InterestAbsorbedCustomer.KTC")), 1), Object(c["createVNode"])("h5", lg, Object(c["toDisplayString"])(e.t("ProductPage.InterestAbsorbedCustomer.KrungsriFirstChoice")), 1), Object(c["createVNode"])("h5", dg, Object(c["toDisplayString"])(e.t("ProductPage.InterestAbsorbedCustomer.KrungsriCard")), 1)]), Object(c["createVNode"])("div", bg, [Object(c["createVNode"])("h6", pg, Object(c["toDisplayString"])(e.t("ProductPage.InterestAbsorbedMerchant.text")), 1), Object(c["createVNode"])("h4", ug, Object(c["toDisplayString"])(e.t("ProductPage.InterestAbsorbedMerchant.KTC")), 1), Object(c["createVNode"])("h4", Og, Object(c["toDisplayString"])(e.t("ProductPage.InterestAbsorbedMerchant.KrungsriFirstChoice")), 1), Object(c["createVNode"])("h4", jg, Object(c["toDisplayString"])(e.t("ProductPage.InterestAbsorbedMerchant.KrungsriCard")), 1)])]), Object(c["createVNode"])("div", mg, [gg, yg, hg, Object(c["createVNode"])("div", fg, [Object(c["createVNode"])("div", Ng, [Object(c["createVNode"])("div", Vg, [Object(c["createVNode"])("div", vg, [Object(c["createVNode"])("div", Sg, [Object(c["createVNode"])("p", kg, Object(c["toDisplayString"])(e.t("ProductPage.CardBrand")), 1)]), Object(c["createVNode"])("div", Pg, [Object(c["createVNode"])("p", Dg, Object(c["toDisplayString"])(e.t("ProductPage.KTC")), 1)]), Object(c["createVNode"])("div", xg, [Object(c["createVNode"])("p", Ag, Object(c["toDisplayString"])(e.t("ProductPage.KrungsriFirstChoice")), 1)]), Object(c["createVNode"])("div", wg, [Object(c["createVNode"])("p", Cg, Object(c["toDisplayString"])(e.t("ProductPage.KrungsriCard")), 1)])])]), Object(c["createVNode"])("div", Bg, [Object(c["createVNode"])("div", Ig, [Object(c["createVNode"])("div", Tg, [Object(c["createVNode"])("p", _g, Object(c["toDisplayString"])(e.t("ProductPage.InstallmentTermLengths.text")), 1)]), Object(c["createVNode"])("div", Lg, [Object(c["createVNode"])("p", Mg, Object(c["toDisplayString"])(e.t("ProductPage.InstallmentTermLengths.KTC")), 1)]), Object(c["createVNode"])("div", Fg, [Object(c["createVNode"])("p", Wg, Object(c["toDisplayString"])(e.t("ProductPage.InstallmentTermLengths.KrungsriFirstChoice")), 1)]), Object(c["createVNode"])("div", Rg, [Object(c["createVNode"])("p", Ug, Object(c["toDisplayString"])(e.t("ProductPage.InstallmentTermLengths.KrungsriCard")), 1)])])])]), Object(c["createVNode"])("div", Kg, [Object(c["createVNode"])("div", Eg, [Object(c["createVNode"])("div", Hg, [Object(c["createVNode"])("div", qg, [Object(c["createVNode"])("p", Jg, Object(c["toDisplayString"])(e.t("ProductPage.CardBrand")), 1)]), Object(c["createVNode"])("div", zg, [Object(c["createVNode"])("p", Qg, Object(c["toDisplayString"])(e.t("ProductPage.KTC")), 1)]), Object(c["createVNode"])("div", Yg, [Object(c["createVNode"])("p", Gg, Object(c["toDisplayString"])(e.t("ProductPage.KrungsriFirstChoice")), 1)]), Object(c["createVNode"])("div", Xg, [Object(c["createVNode"])("p", Zg, Object(c["toDisplayString"])(e.t("ProductPage.KrungsriCard")), 1)])])]), Object(c["createVNode"])("div", $g, [Object(c["createVNode"])("div", ey, [Object(c["createVNode"])("div", ty, [Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("ProductPage.MonthlyMinimum.text")), 1)]), Object(c["createVNode"])("div", ay, [Object(c["createVNode"])("p", cy, Object(c["toDisplayString"])(e.t("ProductPage.MonthlyMinimum.KTC")), 1)]), Object(c["createVNode"])("div", oy, [Object(c["createVNode"])("p", iy, Object(c["toDisplayString"])(e.t("ProductPage.MonthlyMinimum.KrungsriFirstChoice")), 1)]), Object(c["createVNode"])("div", ny, [Object(c["createVNode"])("p", sy, Object(c["toDisplayString"])(e.t("ProductPage.MonthlyMinimum.KrungsriCard")), 1)])])])]), Object(c["createVNode"])("div", ry, [Object(c["createVNode"])("div", ly, [Object(c["createVNode"])("div", dy, [Object(c["createVNode"])("div", by, [Object(c["createVNode"])("p", py, Object(c["toDisplayString"])(e.t("ProductPage.CardBrand")), 1)]), Object(c["createVNode"])("div", uy, [Object(c["createVNode"])("p", Oy, Object(c["toDisplayString"])(e.t("ProductPage.KTC")), 1)]), Object(c["createVNode"])("div", jy, [Object(c["createVNode"])("p", my, Object(c["toDisplayString"])(e.t("ProductPage.KrungsriFirstChoice")), 1)]), Object(c["createVNode"])("div", gy, [Object(c["createVNode"])("p", yy, Object(c["toDisplayString"])(e.t("ProductPage.KrungsriCard")), 1)])])]), Object(c["createVNode"])("div", hy, [Object(c["createVNode"])("div", fy, [Object(c["createVNode"])("div", Ny, [Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("ProductPage.InterestAbsorbedCustomer.text")), 1)]), Object(c["createVNode"])("div", Vy, [Object(c["createVNode"])("p", vy, Object(c["toDisplayString"])(e.t("ProductPage.InterestAbsorbedCustomer.KTC")), 1)]), Object(c["createVNode"])("div", Sy, [Object(c["createVNode"])("p", ky, Object(c["toDisplayString"])(e.t("ProductPage.InterestAbsorbedCustomer.KrungsriFirstChoice")), 1)]), Object(c["createVNode"])("div", Py, [Object(c["createVNode"])("p", Dy, Object(c["toDisplayString"])(e.t("ProductPage.InterestAbsorbedCustomer.KrungsriCard")), 1)])])])]), Object(c["createVNode"])("div", xy, [Object(c["createVNode"])("div", Ay, [Object(c["createVNode"])("div", wy, [Object(c["createVNode"])("div", Cy, [Object(c["createVNode"])("p", By, Object(c["toDisplayString"])(e.t("ProductPage.CardBrand")), 1)]), Object(c["createVNode"])("div", Iy, [Object(c["createVNode"])("p", Ty, Object(c["toDisplayString"])(e.t("ProductPage.KTC")), 1)]), Object(c["createVNode"])("div", _y, [Object(c["createVNode"])("p", Ly, Object(c["toDisplayString"])(e.t("ProductPage.KrungsriFirstChoice")), 1)]), Object(c["createVNode"])("div", My, [Object(c["createVNode"])("p", Fy, Object(c["toDisplayString"])(e.t("ProductPage.KrungsriCard")), 1)])])]), Object(c["createVNode"])("div", Wy, [Object(c["createVNode"])("div", Ry, [Object(c["createVNode"])("div", Uy, [Object(c["createVNode"])("p", null, Object(c["toDisplayString"])(e.t("ProductPage.InterestAbsorbedMerchant.text")), 1)]), Object(c["createVNode"])("div", Ky, [Object(c["createVNode"])("p", Ey, Object(c["toDisplayString"])(e.t("ProductPage.InterestAbsorbedMerchant.KTC")), 1)]), Object(c["createVNode"])("div", Hy, [Object(c["createVNode"])("p", qy, Object(c["toDisplayString"])(e.t("ProductPage.InterestAbsorbedMerchant.KrungsriFirstChoice")), 1)]), Object(c["createVNode"])("div", Jy, [Object(c["createVNode"])("p", zy, Object(c["toDisplayString"])(e.t("ProductPage.InterestAbsorbedMerchant.KrungsriCard")), 1)])])])])])])])]), Object(c["createVNode"])("div", Qy, [Object(c["createVNode"])("div", Yy, [Object(c["createVNode"])("div", Gy, [Object(c["createVNode"])("h1", Xy, Object(c["toDisplayString"])(e.t("ProductPage.GetPaidIn")), 1), Object(c["createVNode"])("h1", Zy, Object(c["toDisplayString"])(e.t("ProductPage.3simpleSteps")), 1), $y]), Object(c["createVNode"])("div", eh, [Object(c["createVNode"])("div", th, [Object(c["createVNode"])("div", ah, [Object(c["createVNode"])("div", ch, [oh, Object(c["createVNode"])("div", ih, [Object(c["createVNode"])("h5", nh, [Object(c["createVNode"])("strong", null, Object(c["toDisplayString"])(e.t("ProductPage.UserScansOrUploadsTheQR")), 1)]), Object(c["createVNode"])("h5", sh, Object(c["toDisplayString"])(e.t("ProductPage.TheUserScansOrUploads")), 1)])])])]), Object(c["createVNode"])("div", rh, [Object(c["createVNode"])("div", lh, [Object(c["createVNode"])("div", dh, [bh, Object(c["createVNode"])("div", ph, [Object(c["createVNode"])("h5", uh, [Object(c["createVNode"])("strong", null, Object(c["toDisplayString"])(e.t("ProductPage.UserConfirmsPayment")), 1)]), Object(c["createVNode"])("h5", Oh, Object(c["toDisplayString"])(e.t("ProductPage.TheUserVerifies")), 1)])])])]), Object(c["createVNode"])("div", jh, [Object(c["createVNode"])("div", mh, [Object(c["createVNode"])("div", gh, [yh, Object(c["createVNode"])("div", hh, [Object(c["createVNode"])("h5", fh, [Object(c["createVNode"])("strong", null, Object(c["toDisplayString"])(e.t("ProductPage.YouReceiveFunds")), 1)]), Object(c["createVNode"])("h5", Nh, Object(c["toDisplayString"])(e.t("ProductPage.FundsAreInstantly")), 1)])])])])])])])]), Object(c["createVNode"])(r)])
            })),
            vh = Object(c["defineComponent"])({
                components: {
                    Header: ga,
                    Footer: oi
                },
                props: {
                    sentinalName: {
                        type: String,
                        required: !0
                    }
                },
                name: "ProductPage",
                setup: function () {
                    var e = Object(i["b"])(),
                        t = e.t,
                        a = e.locale;
                    return {
                        t: t,
                        locale: a
                    }
                },
                data: function () {
                    return {
                        s1_mastercard: !1,
                        s1_visa: !1,
                        s1_jcb: !1,
                        s2_firstchoice: !1,
                        s2_ktc: !1,
                        s2_krungsri: !1,
                        s3_dashboard: !1,
                        scrollPosition: 0,
                        bottomScroll: !1
                    }
                },
                methods: {
                    s1AnimationToggle: function () {
                        this.s1_mastercard = !this.s1_mastercard, this.s1_visa = !this.s1_visa, this.s1_jcb = !this.s1_jcb
                    },
                    s2AnimationToggle: function () {
                        this.s2_firstchoice = !this.s2_firstchoice, this.s2_ktc = !this.s2_ktc, this.s2_krungsri = !this.s2_krungsri
                    },
                    updateScroll: function () {
                        this.scrollPosition = window.scrollY;
                        var e = this.$refs.s2;
                        if (null != e && void 0 != e) {
                            var t = e.getBoundingClientRect().top - this.scrollPosition;
                            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (t < -560 ? this.s1_mastercard && this.s1AnimationToggle() : this.s1_mastercard || this.s1AnimationToggle(), t < -5170 && this.s3_dashboard && (this.s3_dashboard = !1), t < -4100 && t > -4780 && (this.s3_dashboard || (this.s3_dashboard = !0)), t > -4780 && t < -4100 && (this.s3_dashboard || (this.s3_dashboard = !0)), t > -4100 && this.s3_dashboard && (this.s3_dashboard = !1)) : (t < 400 && (this.s2_firstchoice = !0), t < -150 && (this.s2_ktc = !0), t < -350 && (this.s2_krungsri = !0), t < -4100 && (this.s3_dashboard || (this.s3_dashboard = !0)), t < -20 ? this.s1AnimationToggle() : this.s1_mastercard || this.s1AnimationToggle(), t < -2400 && this.s2AnimationToggle(), t > 500 && this.s2_firstchoice && this.s2AnimationToggle(), t > -3800 && this.s3_dashboard && (this.s3_dashboard = !this.s3_dashboard), t < -6900 && (this.s3_dashboard = !this.s3_dashboard))
                        }
                    }
                },
                mounted: function () {
                    this.s1AnimationToggle(), window.addEventListener("scroll", this.updateScroll)
                },
                destroy: function () {
                    window.removeEventListener("scroll", this.updateScroll)
                }
            });
        a("dcff");
        const Sh = C()(vh, [
            ["render", Vh],
            ["__scopeId", "data-v-4b6011d6"]
        ]);
        var kh = Sh,
            Ph = a("67e5"),
            Dh = a.n(Ph),
            xh = a("e5dc"),
            Ah = a.n(xh),
            wh = Object(c["withScopeId"])("data-v-3815c756");
        Object(c["pushScopeId"])("data-v-3815c756");
        var Ch = {
                id: "bodyWrap"
            },
            Bh = {
                class: "col-12 d-none d-sm-flex col-md-6 d-flex flex-column justify-content-center position-relative overflow-hidden",
                ref: "s3"
            },
            Ih = Object(c["createVNode"])("div", {
                class: "product__backgroundsquare position-absolute"
            }, null, -1),
            Th = {
                class: "productPageContent"
            },
            _h = {
                class: "container p-4 product-section mt-5 "
            },
            Lh = {
                class: "row h-100"
            },
            Mh = {
                class: "col-12 col-md-6 flex-column d-flex justify-content-center px-5 align-items-center text-center align-items-md-start text-md-start"
            },
            Fh = {
                class: "display-4 fw-normal",
                style: {
                    "font-size": "36px"
                }
            },
            Wh = {
                class: "py-4 lh-base fw-normal",
                style: {
                    "font-size": "18px"
                }
            },
            Rh = {
                class: "mt-5 mt-md-0 col-12 col-md-6 d-flex justify-content-center align-items-center position-relative"
            },
            Uh = {
                key: 0,
                style: {
                    "animation-duration": "1.5s"
                }
            },
            Kh = Object(c["createVNode"])("img", {
                class: "w-75 shadow br-20 dashboard-image",
                src: Dh.a,
                alt: ""
            }, null, -1),
            Eh = Object(c["createVNode"])("div", {
                class: "dashboard-square position-absolute h-100 w-75 br-20"
            }, null, -1),
            Hh = Object(c["createVNode"])("div", {
                class: "section-separator"
            }, null, -1),
            qh = {
                class: "container p-4 product-section mb-5 mb-md-0"
            },
            Jh = {
                class: "mt-5 mt-md-0 row h-100"
            },
            zh = Object(c["createVNode"])("div", {
                class: "order-2 order-md-1 col-12 col-md-6 d-flex justify-content-center align-items-center"
            }, [Object(c["createVNode"])("img", {
                class: "w-75 shadow br-20",
                src: Ah.a,
                alt: ""
            })], -1),
            Qh = {
                class: "order-1 order-md-2 col-12 col-md-6 flex-column d-flex justify-content-center align-item-center text-center px-5 align-items-md-start text-md-start"
            },
            Yh = {
                class: "display-4 fw-normal",
                style: {
                    "font-size": "36px"
                }
            },
            Gh = {
                class: "py-4 lh-base fw-normal",
                style: {
                    "font-size": "18px"
                }
            };
        Object(c["popScopeId"])();
        var Xh = wh((function (e, t, a, o, i, n) {
                var s = Object(c["resolveComponent"])("Header"),
                    r = Object(c["resolveComponent"])("Footer");
                return Object(c["openBlock"])(), Object(c["createBlock"])("div", Ch, [Object(c["createVNode"])(s), Object(c["createVNode"])("div", Bh, [Ih], 512), Object(c["createVNode"])("div", Th, [Object(c["createVNode"])("div", _h, [Object(c["createVNode"])("div", Lh, [Object(c["createVNode"])("div", Mh, [Object(c["createVNode"])("h1", Fh, Object(c["toDisplayString"])(e.t("ProductPage.UnifiedReportingDashboard")), 1), Object(c["createVNode"])("h4", Wh, Object(c["toDisplayString"])(e.t("ProductPage.AllTransactionsAreConsolidated")), 1)]), Object(c["createVNode"])("div", Rh, [Object(c["createVNode"])(c["TransitionGroup"], {
                    name: "fadeRight",
                    tag: "div"
                }, {
                    default: wh((function () {
                        return [e.s3_dashboard ? (Object(c["openBlock"])(), Object(c["createBlock"])("div", Uh, [Kh, Eh])) : Object(c["createCommentVNode"])("", !0)]
                    })),
                    _: 1
                })])])]), Hh, Object(c["createVNode"])("div", qh, [Object(c["createVNode"])("div", Jh, [zh, Object(c["createVNode"])("div", Qh, [Object(c["createVNode"])("h1", Yh, Object(c["toDisplayString"])(e.t("ProductPage.EliminateFrictionAtCheckout")), 1), Object(c["createVNode"])("h4", Gh, Object(c["toDisplayString"])(e.t("ProductPage.CustomersCanMakePayments")), 1)])])])]), Object(c["createVNode"])(r)])
            })),
            Zh = Object(c["defineComponent"])({
                components: {
                    Header: ga,
                    Footer: oi
                },
                props: {
                    sentinalName: {
                        type: String,
                        required: !0
                    }
                },
                name: "DashboardPage",
                setup: function () {
                    var e = Object(i["b"])(),
                        t = e.t,
                        a = e.locale;
                    return {
                        t: t,
                        locale: a
                    }
                },
                data: function () {
                    return {
                        s1_mastercard: !1,
                        s1_visa: !1,
                        s1_jcb: !1,
                        s2_firstchoice: !1,
                        s2_ktc: !1,
                        s2_krungsri: !1,
                        s3_dashboard: !1,
                        scrollPosition: 0,
                        bottomScroll: !1
                    }
                },
                methods: {
                    s1AnimationToggle: function () {
                        this.s1_mastercard = !this.s1_mastercard, this.s1_visa = !this.s1_visa, this.s1_jcb = !this.s1_jcb
                    },
                    s2AnimationToggle: function () {
                        this.s2_firstchoice = !this.s2_firstchoice, this.s2_ktc = !this.s2_ktc, this.s2_krungsri = !this.s2_krungsri
                    },
                    updateScroll: function () {
                        var e = this.$refs.s3;
                        if (null != e && void 0 != e) {
                            var t = e.getBoundingClientRect().top - this.scrollPosition;
                            this.scrollPosition = window.scrollY, /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (t < -320 && (this.s3_dashboard || (this.s3_dashboard = !0)), t > -280 && this.s3_dashboard && (this.s3_dashboard = !this.s3_dashboard), t < -900 && (this.s3_dashboard = !this.s3_dashboard)) : (t < -1 && (this.s3_dashboard || (this.s3_dashboard = !0)), t < -1370 && this.s3_dashboard && (this.s3_dashboard = !this.s3_dashboard))
                        }
                    }
                },
                mounted: function () {
                    this.s1AnimationToggle(), window.addEventListener("scroll", this.updateScroll)
                },
                destroy: function () {
                    window.removeEventListener("scroll", this.updateScroll)
                }
            });
        a("46cc");
        const $h = C()(Zh, [
            ["render", Xh],
            ["__scopeId", "data-v-3815c756"]
        ]);
        var ef = $h,
            tf = [{
                path: "/",
                component: si
            }, {
                path: "/pricing",
                component: tn
            }, {
                path: "/contact-us",
                component: Mn
            }, {
                path: "/payment",
                component: is
            }, {
                path: "/businesses",
                component: yp
            }, {
                path: "/links",
                component: $l
            }, {
                path: "/about-us",
                component: Td
            }, {
                path: "/payment-demo",
                component: ep
            }, {
                path: "/privacy",
                component: kj
            }, {
                path: "/product",
                component: kh
            }, {
                path: "/dashboard",
                component: ef
            }, {
                path: "/*",
                component: si
            }],
            af = o["a"]({
                history: o["b"](),
                routes: tf
            });
        af.beforeEach((function () {
            window.scrollTo(0, 0)
        }));
        var cf = Object(c["createApp"])(I);
        cf.use(D), cf.use(af), cf.mount("#bodyWrap")
    },
    ce3b: function (e, t, a) {
        "use strict";
        a("854b")
    },
    cfd5: function (e, t, a) {
        e.exports = "./img/security_1.a193f348.png"
    },
    d69f: function (e, t, a) {
        "use strict";
        a("8eb3")
    },
    dcff: function (e, t, a) {
        "use strict";
        a("681f")
    },
    e05b: function (e, t, a) {
        e.exports = "./img/partner_2_2x.aaa1415a.png"
    },
    e17b: function (e, t, a) {
        "use strict";
        a("9874")
    },
    e496: function (e, t, a) {
        e.exports = "./img/location.91c0e8b7.svg"
    },
    e5dc: function (e, t, a) {
        e.exports = "./img/steps.a98fc5ea.png"
    },
    e91d: function (e, t, a) {
        e.exports = "./img/icon_3.589a2e60.png"
    },
    ecdb: function (e) {
        e.exports = JSON.parse('{"privacyPolicy":{"title":"Privacy Policy","subtitle":"Money Space Co.,Ltd. recognizes the importance of the protection of your personal data. This Privacy Policy explains our practices regarding the collection, use or disclosure of personal data including other rights of the Data Subjects in accordance with the Personal Data Protection Laws."},"privacyCollectionofPersonalData":{"title":"Collection of Personal Data","subtitle":"We will collect your personal data that receive directly from you as following","bulletPoint":{"text1":"your account registration"}},"TypesofDataCollected":{"title":"Types of Data Collected","bulletPoint":{"PersonalData":{"name":"Personal data","text":"such as name, surname, age, date of birth, nationality, identification card, passport, etc."},"ContactInformation":{"name":"Contact information","text":"such as address, telephone number, e-mail address, etc."},"AccountDetails":{"name":"Account details","text":"such as username, password, transactions history, etc."},"ProofOfIdentity":{"name":"Proof of identity","text":"such as copy of identification card, copy of passport, etc."},"TransactionAndFinancialInformation":{"name":"Transaction and Financial information","text":"such as purchase history, credit card details, bank account, etc."},"TechnicalData":{"name":"Technical data","text":"such as IP Address, Cookie ID, Activity Log, etc."}}},"Children":{"title":"Children","subtitle":"If you are under the age of 20 or having legal restrictions, we may collect use or disclose your personal data. We require your parents or guardian to be aware and provide consent to us or allowed by applicable laws. If we become aware that we have collected personal data from children without verification of parental consent, we take steps to remove that information from our servers."},"StorageOfData":{"title":"Storage of Data","subtitle":"We store your personal data as hard copy and soft copy.We store your personal data by using the following systems","bulletPoint":{"text1":"Third-party server service providers outside of Thailand"}},"UseOfData":{"title":"Use of Data","subtitle":"We use the collected data for various purposes","bulletPoint":{"text1":"To create and manage accounts","text2":"To provide products or services","text3":"To improve products, services, or user experiences","text4":"To share and manage information within organization","text5":"To provide after-sales services","text6":"To gather user’s feedback","text7":"To process payments of products or services","text8":"To comply with our Terms and Conditions","text9":"To comply with laws, rules, and regulatory authorities"}},"DisclosureOfPersonalData":{"title":"Disclosure of Personal Data","subtitle":"We may disclose your personal data to the following parties in certain circumstances","bulletPoint":{"title":"Organization","subtitle":"We may disclose your personal data within our organization to provide and develop our products or services. We may combine information internally across the different products or services covered by this Privacy Policy to help us be more relevant and useful to you and others."}},"DataRetention":{"title":"Data Retention","subtitle":"We will retain your personal data for as long as necessary during the period you are a customer or under relationship with us, or for as long as necessary in connection with the purposes set out in this Privacy Policy, unless law requires or permits a longer retention period. We will erase, destroy or anonymize your personal data when it is no longer necessary or when the period lapses."},"DataSubjectRights":{"title":"Data Subject Rights","subtitle":"Subject to the Personal Data Protection Laws thereof, you may exercise any of these rights in the following","bulletPoint":{"WithdrawalOfconsent":{"name":"Withdrawal of consent","text":"If you have given consent to us to collect, use or disclose your personal data whether before or after the effective date of the Personal Data Protection Laws, you have the right to withdraw such consent at any time throughout the period your personal data available to us, unless it is restricted by laws or you are still under beneficial contract."},"DataAccess":{"name":"Data access","text":"You have the right to access your data that is under our responsibility; to request us to make a copy of such data for you; and to request us to reveal as to how we obtain your personal data."},"DataPortability":{"name":"Data portability","text":"You have the right to obtain your personal data if the we organizes such personal data in automatic machine-readable or usable format and can be processed or disclosed by automatic means; to request us to send or transfer the personal data in such format directly to other data controllers if doable by automatic means; and to request to obtain the personal data in such format sent or transferred by us directly to other data controller unless not technically feasible."},"Objection":{"name":"Objection","text":"You have the right to object to collection, use or disclosure of your personal data at any time if such doing is conducted for legitimate interests of us, corporation or individual which is within your reasonable expectation; or for carrying out public tasks."},"DataErasureOrDestruction":{"name":"Data erasure or destruction","text":"You have the right to request us to erase, destroy or anonymize your personal data if you believe that the collection, use or disclosure of your personal data is against relevant laws; or retention of the data by us is no longer necessary in connection with related purposes under this Privacy Policy; or when you request to withdraw your consent or to object to the processing as earlier described."},"Suspension":{"name":"Suspension","text":"You have the right to request us to suspend processing your personal data during the period where we examine your rectification or objection request; or when it is no longer necessary and we must erase or destroy your personal data pursuant to relevant laws but you instead request us to suspend the processing."},"Rectification":{"name":"Rectification","text":"You have the right to rectify your personal data to be updated, complete and not misleading."},"ComplaintLodging":{"name":"Complaint lodging","text":"You have the right to complain to competent authorities pursuant to relevant laws if you believe that the collection, use or disclosure of your personal data is violating or not in compliance with relevant laws."},"text1":"You can exercise these rights as the Data Subject by contacting our Data Protection Officer as mentioned below. We will notify the result of your request within 30 days upon receipt of such request. If we deny the request, we will inform you of the reason via SMS, email address, telephone, registered mail (if applicable)."}},"AdvertisingAndMarketing":{"title":"Advertising and Marketing","subtitle":"We may send certain information or newsletter for the purpose of utilizing your preference via your email. If you no longer want to receive the communications from us, you can click the “unsubscribe” link in the email or contact us through our email."},"Cookies":{"title":"Cookies","subtitle":"To enrich and perfect your experience, we use cookies or similar technologies to display personalized content, appropriate advertising and store your preferences on your computer. We use cookies to identify and track visitors, their usage of our website and their website access preferences. If you do not wish to have cookies placed on your computer you should set their browsers to refuse cookies before using our website."},"DataSecurity":{"title":"Data Security","subtitle":"We endeavor to protect your personal data by establishing security measures in accordance with the principles of confidentiality, integrity, and availability to prevent loss, unauthorized or unlawful access, destruction, use, alteration, or disclosure including administrative safeguard, technical safeguard, physical safeguard and access controls."},"DataBreachNotification":{"title":"Data Breach Notification","subtitle":"We will notify the Office of the Personal Data Protection Committee without delay and, where feasible, within 72 hours after having become aware of it, unless such personal data breach is unlikely to result in a risk to the rights and freedoms of you. If the personal data breach is likely to result in a high risk to the rights and freedoms of you, we will also notify the personal data breach and the remedial measures to you without delay through our website, SMS, email address, telephone or registered mail (if applicable)."},"ChangesToThisPrivacyPolicy":{"title":"Changes to this Privacy Policy","subtitle1":"We may change this Privacy Policy from time to time. Any changes of this Privacy Policy, we encourage you to frequently check on our website.","subtitle2":"This Privacy Policy was last updated and effective on 8th May 2021"},"LinksToOtherSites":{"title":"Links to Other Sites","subtitle":"The purpose of this Privacy Policy is to offer products or services and use of our website. Any websites from other domains found on our site is subject to their privacy policy which is not related to us."},"ContactInformation":{"title":"Contact Information","subtitle":"If you have any questions about this Privacy Policy or would like to exercise your rights, you can contact us by using the following details","email":{"text":"Email","account":"th","domain":"moneyspace.net"},"DataController":{"subtitle":"Data Controller","line1":"Money Space Co.,Ltd.","line2":"No. 1 Glas Haus Building. Level P Unit P01, Vadhana, Bangkok, 10110","line4":"www.moneyspace.net","line5":"02-118-3082"},"DataProtectionOfficer":{"subtitle":"Data Protection Officer","line1":"Compliance department","line2":"No. 1 Glas Haus Building. Level P Unit P01, Vadhana, Bangkok, 10110","line4":"02-118-3082"}}}')
    },
    f2dc: function (e, t, a) {
        e.exports = "./img/step_2.01ccf88c.png"
    },
    f3c2: function (e) {
        e.exports = JSON.parse('{"ProductPage":{"FinancialFlexibility":"Financial Flexibility","AtYourFingertips":"Accept Credit Card & Debit Card Payment","AllYourOnlinePayment":"Support all major credit cards with international standard of security for speed, convenience, and ease of use. The perfect solution for the new generation’s shopping lifestyle.","AcceptForeignCurrency":"Support 27 Foreign Currencies","AsWellAsAcceptingPayments":"Expand your customers on a global scale with support for 27 foreign currencies and increased convenience with accounting report program that automatically converts foreign currency payments to Thai Baht.","HighSpeedPaymentProcessing":"Never Worry About System Updates","OurPlatformIsArchitected":"As a completely online solution that caters to digital businesses, shopkeepers can forget about complicated system updates and maintenance. Just sign up, create and share a payment link to receive money quickly and easily. Let us do the heavy lifting.","Installment":{"bold":"Accept Installments","h1":"Increase Sales","h5":"Increase your sales opportunities by allowing your customers to pay in full or credit card installments. Break up big payments and give your customers more freedom.","h4":"Offer the 0% installment plan"},"MonthlyPaymentOptions":"Get Paid In Full When Customers Choose Installments","OfferFlexiblePayment":"Your customers can choose between 3 and 36 monthly credit card installments at attractive rates so shoppers have more freedom while you receive your sales amount in full. It’s a win-win.","CardBrand":"Credit Card & Installment Interest Rates","KTC":"KTC","KrungsriFirstChoice":"Krungsri First Choice","KrungsriCard":"Krungsri Card","InstallmentTermLengths":{"text":"Installment Duration","KTC":"3, 4, 5, 6, 7, 8, 9, 10","KrungsriFirstChoice":"3, 4, 6, 9, 10, 12, 18, 24, 36","KrungsriCard":"3, 4, 6, 9, 10"},"MonthlyMinimum":{"text1":"Monthly","text2":"minimum","KTC":"300","KrungsriFirstChoice":"300","KrungsriCard":"500"},"InterestAbsorbedCustomer":{"text":"Minimum Transaction Value Per Month","KTC":"0.8%","KrungsriFirstChoice":"1%","KrungsriCard":"0.74%"},"InterestAbsorbedMerchant":{"text":"Interest absorbed customer","KTC":"2.10%","KrungsriFirstChoice":"2.20%","KrungsriCard":"2.20%"},"GetPaidIn":"Accept Promptpay and QR Code Payment","3simpleSteps":"Accept all mobile banking.","UserScansOrUploadsTheQR":"Mobile banking payment or scan QR Code to pay","TheUserScansOrUploads":"The user scans or uploads the QR code using their mobile banking application","UserConfirmsPayment":"Verify payment and current total value","TheUserVerifies":"The user verifies the payment amount that has already been pre-filled and confirms payment","YouReceiveFunds":"Real-time shopkeeper notification","FundsAreInstantly":"Funds are instantly transferred from the user\'s bank account into your MoneySpace account","UnifiedReportingDashboard":"Dashboard Reporting","AllTransactionsAreConsolidated":"Convenient and comprehensive with an information management system that keeps all of your transaction records in one place. Find every transaction at the touch of your finger. Access every detail with deep information storage. Download past records at any time and any place.","EliminateFrictionAtCheckout":"Intuitive User-Friendly Interface For The Thai Consumers’ Lifestyle","CustomersCanMakePayments":"Make transactions easier and more flexible with a simple payment interface and coherent button labels. With convenience for every payment methods and easy monthly-installments fee comparison for multiple credit cards."}}')
    },
    f7f8: function (e, t, a) {
        e.exports = "./img/image_1.2c92db2e.jpg"
    },
    fb83: function (e) {
        e.exports = JSON.parse('{"aboutPage":{"header":{"pageTitle":"About us.","info1":"There are always conditions and difficulties when registering and using online payment systems. From requiring collateral amount, paying service fees, having high transaction fees of 3% or more (which ends up becoming additional cost for your business), complicated existing regulations, and confusing communication of financial institutions. All of this leads to the nuisance of credit card chargeback. - ","info2":"More Options. More Payments. More Success."},"aboutInfo":{"left":{"title":"100% Independent","text":"Money Space was founded on the mission to \'optimize cash flow in online payment for shop owners\', including upfront set up costs, transaction fees on all payment channels, and any payment system-related operation costs. , so that shops of all sizes on all platforms can easily access an online payment system with advanced technology and security with no complicated conditions to find more opportunities with a business edge for global brand growth."},"right":{"quote":" Money Space have invested greatly on payment security and doubled down on product research to develop an effective, full-service payment gateway that works on all platforms to offer the best solutions and solve every difficulties for business owners because we believe that an online payment system that works well is the key to a successful business."}},"joinSection":{"title":"Money Space Truly Cares","text":"At Money Space, we stand firm on our position as “a business that do not rely on investors”. Since founding the company, we established, operated, and grew our business with our own efforts, free of interferences and free of conditions. We have never accepted money from investors or stockholders, therefore we are able to cater to your wants & needs completely without having to consider anyone else’s benefit. Efficient payment gateway processing saves cost. With efficient payment gateway processing that gives you the most value in Thailand!","link":"Start Now"}}}')
    },
    fc64: function (e) {
        e.exports = JSON.parse('{"pricigPageHeader":{"subtitle":"ค่าธรรมเนียมไม่ซับซ้อน !","title":""},"pricingPageContent":{"calculator":{"title":"คำนวณค่าธรรมเนียม","fieldItem":[{"amountLabel":"ยอดรับชำระเงินต่อครั้ง"},{"amountLabel":"ค่าธรรมเนียมหลังรวม VAT แล้ว"}],"calculate":"คำนวณ","calcInfo":{"info":["ค่าธรรมเนียมที่ถูกที่สุด"," 2.59% ต่อรายการ",""],"note":"สามารถปรับลดค่าธรรมเนียมได้หากร้านค้าของท่านมียอดขายสูง"}},"pricingInfo":{"subtitle":"","title":"ค่าธรรมเนียมในการถอนเงิน","textBlock":"เรามีบริการคืนเงิน (Void) ของบัตรเครดิต/เดบิต ให้กับลูกค้าของคุณฟรี ก่อน 22.00 น. หลังเวลา 22.00 น. คิดเฉพาะค่าธรรมเนียมรูดบัตรเท่านั้น","buttons":["เริ่ม","เรียนรู้เพิ่มเติม"]},"tariffList":{"item":[{"cost":"15","constUnit":"บาท","info":"สำหรับการถอนเงินที่น้อยกว่า 30,000 บาท"},{"cost":"ฟรี","info":"สำหรับการถอนเงินที่มากกว่า 30,000 บาท"}]},"joinSection":{"title":["ไม่มีค่าบริการรายเดือน","ไม่มีการตั้งค่า / บูรณาการ ","ไม่มีการบำรุงรักษาการขาย "],"textBlock":"เริ่มรับการชำระเงินด้วย Money Space","text":"เริ่มเลย"}}}')
    },
    ff57: function (e, t, a) {
        e.exports = "./img/mastercard.4a69f461.png"
    }
});
//# sourceMappingURL=app.e898fe26.js.map