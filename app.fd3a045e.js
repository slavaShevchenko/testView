(function(){"use strict";var t={4097:function(t,e,s){var l=s(6369),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t._m(0),t.resetFlag?e("div",{staticClass:"spl__layout"},[e("div",{staticClass:"spl__layout-left"},[e("div",{staticClass:"spl__layout-row"},[e("SplInput",{attrs:{label:"Bill","pre-icon":"dollar"},on:{returnValue:t.valueFromBill}})],1),e("div",{staticClass:"spl__layout-row"},[e("SplSelectTips",{attrs:{items:t.itemsForTips},on:{returnValue:t.valueFromTips}})],1),e("div",{staticClass:"spl__layout-row"},[e("SplInput",{attrs:{label:"Number of People","pre-icon":"person"},on:{returnValue:t.valueFromPerson}})],1)]),e("div",{staticClass:"spl__layout-right"},[e("div",{staticClass:"spl__layout-right-top"},[e("div",{staticClass:"spl__layout-row"},[e("SplViewResult",{attrs:{label:"Tip Amount",value:t.valueTipAmount}})],1),e("div",{staticClass:"spl__layout-row"},[e("SplViewResult",{attrs:{label:"Total",value:t.valueTotal}})],1)]),e("div",{staticClass:"spl__layout-right-bottom"},[e("SplButton",{attrs:{text:"reset"},on:{buttonClick:t.resetForm}})],1)])]):t._e()])},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"spl__header"},[t._v("spli"),e("br"),t._v("tter")])}],u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"spl__input",class:{spl__error:!t.isError,spl__focus:!t.isFocus}},[e("div",{staticClass:"spl__input-header"},[e("div",{staticClass:"spl__input-label"},[t._v(t._s(t.label))]),e("div",{staticClass:"spl__input-err"},[t._v("Can't be zero or empty")])]),e("div",{staticClass:"spl__input-content"},[e("SplPreIcon",{attrs:{type:t.preIcon}}),e("div",{staticClass:"spl__input-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"},{name:"onlyNumbers",rawName:"v-onlyNumbers",value:t.isInteger,expression:"isInteger"}],attrs:{type:"text"},domProps:{value:t.inputValue},on:{focus:function(e){t.isFocus=!1},blur:function(e){t.isFocus=!0},input:function(e){e.target.composing||(t.inputValue=e.target.value)}}})])],1)])},a=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"spl__pre-icon"},["dollar"===t.type?e("img",{attrs:{src:s(6859)}}):"person"===t.type?e("img",{attrs:{src:s(6873)}}):t._e()])},o=[],p={name:"SplPreIcon",props:{type:{default:"",type:String}}},c=p,v=s(1001),d=(0,v.Z)(c,r,o,!1,null,"ecbe4cc4",null),_=d.exports,m={name:"SplInput",components:{SplPreIcon:_},props:{label:{default:null,type:String},preIcon:{default:null,type:String}},data(){return{inputValue:null,isError:!0,isFocus:!0,isInteger:"dollar"===this.preIcon}},watch:{inputValue(){this.validateZero()}},methods:{returnValueToParent(t){this.$emit("returnValue",t)},validateZero(){const t=+parseFloat(this.inputValue).toFixed(2);this.returnValueToParent(t),this.isError=Boolean(t)}}},f=m,h=(0,v.Z)(f,u,a,!1,null,"1e2f358a",null),C=h.exports,b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"spl__select-tips"},[e("div",{staticClass:"spl__select-tips-header"},[t._v("Select Tip %")]),e("div",{staticClass:"spl__select-tips-content"},[t._l(t.items,(function(s,l){return e("div",{key:l,staticClass:"spl__select-tips-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],ref:"radioButton",refInFor:!0,attrs:{name:"tips",type:"radio",id:"radio"+l},domProps:{value:s,checked:t._q(t.inputValue,s)},on:{change:function(e){t.inputValue=s}}}),e("label",{attrs:{for:"radio"+l}},[t._v(t._s(`${s}%`))])])})),e("div",{staticClass:"spl__select-tips-item-custom",class:{spl__active:!t.isCustom}},[e("div",{staticClass:"spl__select-tips-item-custom-text",on:{click:t.customValueOpen}},[t._v("Custom")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.customInputValue,expression:"customInputValue"},{name:"onlyNumbers",rawName:"v-onlyNumbers",value:!0,expression:"true"}],ref:"customInput",staticClass:"spl__select-tips-item-custom-input",attrs:{type:"text"},domProps:{value:t.customInputValue},on:{blur:t.customValueClose,input:function(e){e.target.composing||(t.customInputValue=e.target.value)}}})])],2)])},y=[],g={name:"SplSelectTips",props:{items:{default:null,type:Array}},data(){return{inputValue:null,isCustom:!0,customInputValue:null}},watch:{inputValue(t){t&&(this.isCustom=!0,this.$emit("returnValue",t))},customInputValue(t){this.$emit("returnValue",t)}},methods:{customValueOpen(){this.uncheckRadioButtons(),this.isCustom=!1,this.$refs.customInput.focus(),this.$emit("returnValue",this.customInputValue)},customValueClose(){this.isCustom=!this.customInputValue},uncheckRadioButtons(){this.inputValue=null;const t=this.$refs.radioButton;t.forEach((t=>t.checked=!1))}}},V=g,w=(0,v.Z)(V,b,y,!1,null,"19eb463a",null),S=w.exports,x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"spl__view-result"},[e("div",{staticClass:"spl__view-result-left"},[e("span",[t._v(t._s(t.label))]),t._v(" / person")]),e("div",{staticClass:"spl__view-result-right"},[t._v(t._s(t.value))])])},T=[],F={name:"SplViewResult",props:{label:{default:null,type:String},value:{default:null,type:String}}},I=F,P=(0,v.Z)(I,x,T,!1,null,"51c6e0bf",null),B=P.exports,k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"spl__button",on:{click:function(e){return t.$emit("buttonClick")}}},[t._v(t._s(t.text))])},O=[],$={name:"SplButton",props:{text:{default:"",type:String}}},N=$,Z=(0,v.Z)(N,k,O,!1,null,"7961ab70",null),j=Z.exports,E={name:"App",components:{SplInput:C,SplSelectTips:S,SplViewResult:B,SplButton:j},data(){return{resetFlag:!0,valueBill:null,valuePerson:null,valueTips:null,itemsForTips:[5,10,15,25,50]}},computed:{valueTipAmount(){return this.valueBill&&this.valuePerson&&this.valueTips?(this.valueBill/100*this.valueTips/this.valuePerson).toFixed(2):"0.00"},valueTotal(){return this.valueBill&&this.valuePerson&&this.valueTips?((this.valueBill/100*this.valueTips+this.valueBill)/this.valuePerson).toFixed(2):"0.00"}},methods:{valueFromBill(t){this.valueBill=t},valueFromPerson(t){this.valuePerson=t},valueFromTips(t){this.valueTips=t},resetForm(){this.resetFlag=!1,this.$nextTick((()=>{this.resetFlag=!0,Object.assign(this.$data,this.$options.data())}))}}},R=E,A=(0,v.Z)(R,i,n,!1,null,null,null),D=A.exports;l.ZP.config.productionTip=!1,l.ZP.directive("onlyNumbers",{inserted:function(t,e){t.addEventListener("keypress",(function(s){s=s||window.event;let l="number"==typeof s.charCode?s.charCode:s.keyCode,i=/\d/;46==l&&e.value?t.value.includes(".")&&s.preventDefault():!i.test(String.fromCharCode(l))&&l>9&&!s.ctrlKey&&(s.preventDefault?s.preventDefault():s.returnValue=!1)}))}}),new l.ZP({render:t=>t(D)}).$mount("#app")},6859:function(t,e,s){t.exports=s.p+"testView/img/icon-dollar.80fb46a7.svg"},6873:function(t,e,s){t.exports=s.p+"testView/img/icon-person.8e3db55e.svg"}},e={};function s(l){var i=e[l];if(void 0!==i)return i.exports;var n=e[l]={exports:{}};return t[l](n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,l,i,n){if(!l){var u=1/0;for(p=0;p<t.length;p++){l=t[p][0],i=t[p][1],n=t[p][2];for(var a=!0,r=0;r<l.length;r++)(!1&n||u>=n)&&Object.keys(s.O).every((function(t){return s.O[t](l[r])}))?l.splice(r--,1):(a=!1,n<u&&(u=n));if(a){t.splice(p--,1);var o=i();void 0!==o&&(e=o)}}return e}n=n||0;for(var p=t.length;p>0&&t[p-1][2]>n;p--)t[p]=t[p-1];t[p]=[l,i,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var l in e)s.o(e,l)&&!s.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:e[l]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p="/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,l){var i,n,u=l[0],a=l[1],r=l[2],o=0;if(u.some((function(e){return 0!==t[e]}))){for(i in a)s.o(a,i)&&(s.m[i]=a[i]);if(r)var p=r(s)}for(e&&e(l);o<u.length;o++)n=u[o],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(p)},l=self["webpackChunktip_calculator"]=self["webpackChunktip_calculator"]||[];l.forEach(e.bind(null,0)),l.push=e.bind(null,l.push.bind(l))}();var l=s.O(void 0,[998],(function(){return s(4097)}));l=s.O(l)})();
//# sourceMappingURL=app.fd3a045e.js.map