(function(){"use strict";var t={9607:function(t,e,i){var r=i(5130),n=i(6768);const o={class:"container"};function c(t,e,i,r,c,a){const s=(0,n.g2)("items-block");return(0,n.uX)(),(0,n.CE)("div",o,[(0,n.bF)(s)])}function a(t,e,i,r,o,c){const a=(0,n.g2)("item-component");return(0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(o.itemsList,(t=>((0,n.uX)(),(0,n.Wv)(a,{key:t.id,"item-data":t},null,8,["item-data"])))),128)}const s=[{id:1,title:'Малина "Вилламетте"',img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSbYBErRKr5_fUT2ViM4mOF_xt2YliMFHZIh-5915rh1vDSgzVeUpX1Qp53eLI_2p1_G-bQDs77VKIogms5zYm_ZBqZrpqE2A&usqp=CAE",url:"https://www.google.com/url?url=https://yablochko.com.ua/products/malina-villamette%3Fsrsltid%3DAfmBOore-Nl9xrPGzWG6mcQ9kGn7Zz8NEVqyLNgTj31fNzzIFPR9_mT6qH0&rct=j&q=&esrc=s&opi=95576897&sa=U&ved=0ahUKEwiQlenE4KKLAxX6HBAIHUuRGfoQgOUECPII&usg=AOvVaw1_30Od2pUt9yNnbB0QRboE",priceOld:"30",priceNew:"30",action:!1,urlTitle:"Яблочко",delivery:!1,deliveryPrice:"0"},{id:2,title:'Малина Эрика(ИМЛ- 73) "',img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRnhgE287vNJ6TrA-HTbWTZ_J1rgIjx3OLcvhzFjCGRCmosfk45MVcTPqa8LK5R2Cgv7fzkMwxnWRIqk2gN-ZY4dpNboxZG&usqp=CAE",url:"https://www.google.com/shopping/product/1?q=%D0%BC%D0%B0%D0%BB%D0%B8%D0%BD%D0%B0&prds=epd:17498730469417031562,eto:17498730469417031562_0,pid:17498730469417031562&sa=X&ved=0ahUKEwjljLzK5KKLAxUSQ_EDHTzlD3wQ9pwGCAo",priceOld:"100",priceNew:"100",action:!1,urlTitle:"Київський розсадник садових рослин",delivery:!0,deliveryPrice:"80"},{id:3,title:"\tМалина Глен Ампл(ранньо- середня) ",img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcShIMLrunIMqC8bOjnBKreupvWmA1Rz7BMa8HRZbMGCsJPN3IdfCAazJDvWilmV8Imq6YKTAOe79CQuD2P4FvbibswWBcNehmsSqk8nyOzF942cibR83ftCDQ&usqp=CAE",url:"https://www.google.com/shopping/product/1?q=%D0%BC%D0%B0%D0%BB%D0%B8%D0%BD%D0%B0&prds=epd:4916815980765271765,eto:4916815980765271765_0,pid:4916815980765271765&sa=X&ved=0ahUKEwiv4L3F5aKLAxWuZ_EDHcj2DrUQ9pwGCAU",priceOld:"49",priceNew:"49",action:!1,urlTitle:"СадОк",delivery:!0,deliveryPrice:"90"},{id:4,title:"Малина Нантахала эконом",img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRBVrn-61CGXZYCM-6pUgzVjh-sLDW884UzjRGzv0vZ4GLyyKu2BjGd_0lEpIepI1iqOgyY0HpuEt6UxZRhHpA4pldkA_29&usqp=CAE",url:"https://www.google.com/shopping/product/1?q=%D0%BC%D0%B0%D0%BB%D0%B8%D0%BD%D0%B0&prds=epd:4916815980765271765,eto:4916815980765271765_0,pid:4916815980765271765&sa=X&ved=0ahUKEwiv4L3F5aKLAxWuZ_EDHcj2DrUQ9pwGCAU",priceOld:"40",priceNew:"38",action:!0,urlTitle:"Яскрава",delivery:!0,deliveryPrice:"90"}];var p=i(4232);const l={class:"item"},u={class:"item__photo"},d=["src"],m={class:"item__info"},v={class:"item__title"},f={key:0,class:"item__price-old"},g={class:"item__price-new"},h=["href"],D={key:1,class:"item__delivery-info"};function _(t,e,i,r,o,c){return(0,n.uX)(),(0,n.CE)("div",l,[(0,n.Lk)("div",u,[(0,n.Lk)("img",{src:i.itemData.img,alt:"image"},null,8,d)]),(0,n.Lk)("div",m,[(0,n.Lk)("div",v,(0,p.v_)(i.itemData.title),1),i.itemData.action?((0,n.uX)(),(0,n.CE)("div",f,(0,p.v_)(i.itemData.priceOld)+" грн. ",1)):(0,n.Q3)("",!0),(0,n.Lk)("div",g,(0,p.v_)(i.itemData.priceNew)+" грн.",1),(0,n.Lk)("a",{class:"item__link",href:i.itemData.url},(0,p.v_)(i.itemData.urlTitle),9,h),i.itemData.delivery?((0,n.uX)(),(0,n.CE)("div",D," Вартість доставки: "+(0,p.v_)(i.itemData.deliveryPrice)+" грн. ",1)):(0,n.Q3)("",!0)])])}var w={name:"ItemComponent",props:{itemData:{type:Object,default:()=>({})}}},b=i(1241);const y=(0,b.A)(w,[["render",_],["__scopeId","data-v-11e89024"]]);var B=y,C={name:"ItemsBlock",components:{ItemComponent:B},data(){return{itemsList:s}}};const A=(0,b.A)(C,[["render",a]]);var k=A,E={name:"App",components:{ItemsBlock:k}};const O=(0,b.A)(E,[["render",c]]);var q=O;(0,r.Ef)(q).mount("#app")}},e={};function i(r){var n=e[r];if(void 0!==n)return n.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(e,r,n,o){if(!r){var c=1/0;for(l=0;l<t.length;l++){r=t[l][0],n=t[l][1],o=t[l][2];for(var a=!0,s=0;s<r.length;s++)(!1&o||c>=o)&&Object.keys(i.O).every((function(t){return i.O[t](r[s])}))?r.splice(s--,1):(a=!1,o<c&&(c=o));if(a){t.splice(l--,1);var p=n();void 0!==p&&(e=p)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[r,n,o]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};i.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,o,c=r[0],a=r[1],s=r[2],p=0;if(c.some((function(e){return 0!==t[e]}))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(s)var l=s(i)}for(e&&e(r);p<c.length;p++)o=c[p],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(l)},r=self["webpackChunktask_01"]=self["webpackChunktask_01"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=i.O(void 0,[504],(function(){return i(9607)}));r=i.O(r)})();
//# sourceMappingURL=app.765288fc.js.map