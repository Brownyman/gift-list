(function(t){function e(e){for(var i,r,o=e[0],l=e[1],c=e[2],u=0,f=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],i=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=s[0]))}return t}var i={},n={app:0},a=[];function r(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=i,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/gift-list/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},2853:function(t,e,s){t.exports=s.p+"img/default-person.42a0148e.png"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("h1",{staticClass:"mx-auto"},[t._v("Gift Tracker")]),t.isPersonSelected?t.isPersonSelected?s("section",{staticClass:"person-details"},[s("h2",[t._v("Gift List")]),s("PopupAddGift",{attrs:{"new-id":t.maxGiftId(t.selectedPerson)},on:{"clicked-item":t.addNewGift}}),s("v-btn",{staticClass:"ma-2",attrs:{color:"error"},on:{click:function(){return t.closeGiftList()}}},[t._v("Back")]),s("ul",t._l(t.selectedPerson.Gifts,(function(e,i){return s("li",{key:e.id},[s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[s("v-img",{staticClass:"mx-auto",attrs:{src:""===e.img?t.defaultGiftImg:e.img,contain:"",height:"200",width:"200"}}),s("v-card-title",{staticClass:"mx-auto"},[t._v(" "+t._s(e.GiftName)+" ")]),s("v-card-subtitle",{staticClass:"mx-auto"},[s("div",{staticClass:"grid-container"},[s("div",{staticClass:"grid-child-cost"},[t._v("Cost £"+t._s(e.Cost))])])]),s("v-card-actions",[s("div",{staticStyle:{float:"left"}},[s("div",{staticClass:"text-center"},[s("v-btn",{staticClass:"ma-1",attrs:{color:"primary"}},[t._v("Edit")]),s("v-btn",{staticClass:"ma-1",attrs:{color:"error"},on:{click:function(e){return t.removeGift(i)}}},[t._v("Remove")])],1),s("div",{staticClass:"text-center"},[""!==e.GiftURL?s("v-btn",{staticClass:"ma-1",attrs:{block:"",color:"success"},on:{click:function(s){return t.openLink(e.GiftURL)}}},[t._v("Goto Link")]):t._e()],1)])])],1)],1)})),0)],1):t._e():s("section",{staticClass:"person-list mx-auto"},["person_list"===t.appState?s("div",[s("v-row",[s("Popup",{attrs:{"new-id":t.newId},on:{"clicked-item":t.addNewPerson}})],1),s("ul",t._l(t.Persons,(function(e,i){return s("li",{key:e.id},[s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[s("v-img",{staticClass:"mx-auto",attrs:{src:""===e.img?t.defaultPersonImg:e.img,contain:"",height:"200",width:"200"}}),s("v-card-title",{staticClass:"mx-auto"},[t._v(" "+t._s(e.Name)+" ")]),s("v-card-subtitle",{staticClass:"mx-auto"},[s("div",{staticClass:"grid-container"},[s("div",{staticClass:"grid-child-cost"},[t._v("Total Cost £"+t._s(t.getTotalCost(e.Gifts,"Cost")))]),s("div",{staticClass:"grid-child-amount"},[t._v(t._s(void 0!==e&&null!==e?e.Gifts.length:0)+" Gifts")])])]),s("v-card-actions",[s("div",{staticClass:"text-center"},[s("v-btn",{staticClass:"ma-2",attrs:{info:"",text:""},on:{click:function(s){return t.openGiftList(e)}}},[t._v("More Info")]),s("v-btn",{staticClass:"ma-2",attrs:{color:"error"},on:{click:function(e){return t.removePerson(i)}}},[t._v("Remove")])],1)])],1)],1)})),0)],1):"person_create"===t.appState?s("div",{staticClass:"mx-auto",attrs:{"max-width":"300"}},[s("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-text-field",{attrs:{rules:t.formNameRules,label:"Name",required:""},model:{value:t.newPersonName,callback:function(e){t.newPersonName=e},expression:"newPersonName"}}),s("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"success"},on:{click:t.addNewPerson}},[t._v("Add")]),s("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:function(e){t.appState="person_list"}}},[t._v("Cancel")])],1)],1):t._e()])])},a=[],r=(s("d81d"),s("13d5"),s("a434"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{"max-width":"600px",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[s("v-btn",t._g(t._b({staticClass:"ma-2 mb-2 mx-auto success",attrs:{text:""}},"v-btn",n,!1),i),[t._v("Add New Person")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card-title",[s("h2",[t._v("Add New Person")])]),s("v-card-text",[s("v-form",{staticClass:"px-3"},[s("v-text-field",{attrs:{label:"Name"},model:{value:t.newPerson.Name,callback:function(e){t.$set(t.newPerson,"Name",e)},expression:"newPerson.Name"}}),s("v-text-field",{attrs:{label:"Image Link"},model:{value:t.newPerson.img,callback:function(e){t.$set(t.newPerson,"img",e)},expression:"newPerson.img"}}),s("v-btn",{staticClass:"success mx-0 mt-3",attrs:{text:""},on:{click:t.submit}},[t._v("Add Person")]),s("v-btn",{staticClass:"error mx-0 mt-3 float-right",attrs:{text:""},on:{click:function(){return t.dialog=!1}}},[t._v("Cancel")])],1)],1)],1)],1)}),o=[],l={props:["newId"],data:function(){return{dialog:!1,newPerson:{id:this.newId,Name:"",img:"",Gifts:[]}}},methods:{submit:function(){this.dialog=!1;var t=this.newPerson;this.newPerson={id:this.newId,Name:"",img:"",Gifts:[]},this.$emit("clicked-item",t)}}},c=l,d=s("2877"),u=s("6544"),f=s.n(u),m=s("8336"),v=s("b0af"),p=s("99d9"),g=s("169a"),h=s("4bd4"),x=s("8654"),b=Object(d["a"])(c,r,o,!1,null,null,null),w=b.exports;f()(b,{VBtn:m["a"],VCard:v["a"],VCardText:p["c"],VCardTitle:p["d"],VDialog:g["a"],VForm:h["a"],VTextField:x["a"]});var C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{"max-width":"600px",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[s("v-btn",t._g(t._b({staticClass:"ma-2 mb-2 mx-auto success",attrs:{text:""}},"v-btn",n,!1),i),[t._v("Add New Gift")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card-title",[s("h2",[t._v("Add New Person")])]),s("v-card-text",[s("v-form",{staticClass:"px-3"},[s("v-text-field",{attrs:{label:"Gift Name"},model:{value:t.newGift.GiftName,callback:function(e){t.$set(t.newGift,"GiftName",e)},expression:"newGift.GiftName"}}),s("v-text-field",{attrs:{label:"Gift Cost"},model:{value:t.newGift.Cost,callback:function(e){t.$set(t.newGift,"Cost",t._n(e))},expression:"newGift.Cost"}}),s("v-text-field",{attrs:{label:"Gift Link"},model:{value:t.newGift.GiftURL,callback:function(e){t.$set(t.newGift,"GiftURL",e)},expression:"newGift.GiftURL"}}),s("v-text-field",{attrs:{label:"Image Link"},model:{value:t.newGift.img,callback:function(e){t.$set(t.newGift,"img",e)},expression:"newGift.img"}}),s("v-btn",{staticClass:"success mx-0 mt-3",attrs:{text:""},on:{click:t.submit}},[t._v("Add Gift")]),s("v-btn",{staticClass:"error mx-0 mt-3 float-right",attrs:{text:""},on:{click:function(){return t.dialog=!1}}},[t._v("Cancel")])],1)],1)],1)],1)},P=[],G={props:["newId"],data:function(){return{dialog:!1,newGift:{id:this.newId,GiftName:"",GiftURL:"",Cost:0,img:""}}},methods:{submit:function(){this.dialog=!1;var t=this.newGift;this.newGift={id:this.newId,GiftName:"",GiftURL:"",Cost:0,img:""},this.$emit("clicked-item",t)}}},_=G,k=Object(d["a"])(_,C,P,!1,null,null,null),N=k.exports;f()(k,{VBtn:m["a"],VCard:v["a"],VCardText:p["c"],VCardTitle:p["d"],VDialog:g["a"],VForm:h["a"],VTextField:x["a"]});var y="gift-list-storage",S={components:{Popup:w,PopupAddGift:N},name:"App",data:function(){return{defaultPersonImg:s("2853"),defaultGiftImg:s("81f9"),isPersonSelected:!1,appState:"person_list",valid:!1,newPersonName:"",newPerson:{id:"",Name:"",img:"",Gifts:[]},formNameRules:[function(t){return!!t||"Name is required"}],Persons:[],selectedPerson:{}}},created:function(){this.Persons=JSON.parse(localStorage.getItem(y)||"[]")},computed:{newId:function(){return void 0!==this.Persons&&null!==this.Persons&&0!==this.Persons.length?Math.max.apply(Math,this.Persons.map((function(t){return t.id})))+1:1}},methods:{getTotalCost:function(t,e){return null!==t&&void 0!==t?t.reduce((function(t,s){return t+s[e]}),0):0},addNewPerson:function(t){this.Persons.push(t),localStorage.setItem(y,JSON.stringify(this.Persons))},removePerson:function(t){this.Persons.splice(t,1),localStorage.setItem(y,JSON.stringify(this.Persons))},addNewGift:function(t){this.selectedPerson.Gifts.push(t),localStorage.setItem(y,JSON.stringify(this.Persons))},removeGift:function(t){this.selectedPerson.Gifts.splice(t,1),localStorage.setItem(y,JSON.stringify(this.Persons))},openGiftList:function(t){this.selectedPerson=t,this.isPersonSelected=!0},closeGiftList:function(){this.isPersonSelected=!1,this.selectedPerson={}},maxGiftId:function(t){return Math.max.apply(Math,t.Gifts.map((function(t){return t.id})))+1},openLink:function(t){window.open(t,"_blank")}}},V=S,I=(s("034f"),s("7496")),O=s("adda"),L=s("0fd9"),T=Object(d["a"])(V,n,a,!1,null,null,null),j=T.exports;f()(T,{VApp:I["a"],VBtn:m["a"],VCard:v["a"],VCardActions:p["a"],VCardSubtitle:p["b"],VCardTitle:p["d"],VForm:h["a"],VImg:O["a"],VRow:L["a"],VTextField:x["a"]});var A=s("f309");i["a"].use(A["a"]);var R=new A["a"]({});i["a"].config.productionTip=!1,new i["a"]({vuetify:R,render:function(t){return t(j)}}).$mount("#app")},"81f9":function(t,e,s){t.exports=s.p+"img/default-gift.9b52ce18.png"},"85ec":function(t,e,s){}});
//# sourceMappingURL=app.703c6a6e.js.map