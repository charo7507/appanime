(function(){"use strict";var n={7441:function(n,e,r){var t=r(9242),a=r(3396);const i={class:"app"};function o(n,e){const r=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(r)])}var s=r(89);const c={},u=(0,s.Z)(c,[["render",o]]);var l=u,m=r(2483),p=r(7139);const f={class:"card"},d=["src"],v={class:"anime__title"};var _={__name:"AllAnime",props:{anime:Object},setup(n){return(e,r)=>{const t=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",f,[(0,a.Wm)(t,{to:{name:"AnimeDescrip",params:{id:n.anime.images.jpg.image_url,name:n.anime.title,op:n.anime.mal_id}},class:"card__link"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:n.anime.images.jpg.image_url,class:"cards__img",alt:""},null,8,d),(0,a._)("h3",v,(0,p.zw)(n.anime.title),1)])),_:1},8,["to"])])}}};const h=_;var g=h,w=r(4870);const b={class:"homme"},y=(0,a._)("h1",{class:"title"},"ANIME SHAPERS",-1),j=["onSubmit"],O={class:"cards"};var k={__name:"HomeApp",setup(n){const e=(0,w.iH)(""),r=(0,w.iH)([]),i=async()=>{r.value=await fetch(`https://api.jikan.moe/v4/anime?q=${e.value}`).then((n=>n.json())).then((n=>n.data)),console.log(r.value)};return(n,o)=>((0,a.wg)(),(0,a.iD)("div",b,[(0,a._)("header",null,[y,(0,a._)("form",{action:"",class:"search__form",onSubmit:(0,t.iM)(i,["prevent"])},[(0,a.wy)((0,a._)("input",{type:"search",class:"form__input",placeholder:"Search anime...",required:"","onUpdate:modelValue":o[0]||(o[0]=n=>e.value=n)},null,512),[[t.nr,e.value]])],40,j)]),(0,a._)("main",null,[(0,a._)("div",O,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.value,((n,e)=>((0,a.wg)(),(0,a.j4)(g,{key:e,anime:n},null,8,["anime"])))),128))])])]))}};const A=k;var D=A;const H={class:"anime__description"},$=["src"],S={class:"desc__title"},x={class:"desc__descrition"};function P(n,e,r,t,i,o){return(0,a.wg)(),(0,a.iD)("div",H,[(0,a._)("header",{class:"desc__header",style:(0,p.j5)(`background-image: url(${this.$route.params.id});`)},[(0,a._)("img",{src:this.$route.params.id,class:"desc__img",alt:""},null,8,$),(0,a._)("div",null,[(0,a._)("h1",S,(0,p.zw)(this.$route.params.name),1),(0,a._)("p",x,(0,p.zw)(this.$route.params.op),1)])],4)])}var z={};const E=(0,s.Z)(z,[["render",P]]);var M=E;const q=[{path:"/",name:"HomeApp",component:D},{path:"/AnimeDescrip/:id/:name/:op",name:"AnimeDescrip",component:M}],C=(0,m.p7)({history:(0,m.PO)(),routes:q});var T=C;const W=(0,t.ri)(l);W.use(T),W.mount("#app")}},e={};function r(t){var a=e[t];if(void 0!==a)return a.exports;var i=e[t]={exports:{}};return n[t](i,i.exports,r),i.exports}r.m=n,function(){var n=[];r.O=function(e,t,a,i){if(!t){var o=1/0;for(l=0;l<n.length;l++){t=n[l][0],a=n[l][1],i=n[l][2];for(var s=!0,c=0;c<t.length;c++)(!1&i||o>=i)&&Object.keys(r.O).every((function(n){return r.O[n](t[c])}))?t.splice(c--,1):(s=!1,i<o&&(o=i));if(s){n.splice(l--,1);var u=a();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[t,a,i]}}(),function(){r.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(e,{a:e}),e}}(),function(){r.d=function(n,e){for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};r.O.j=function(e){return 0===n[e]};var e=function(e,t){var a,i,o=t[0],s=t[1],c=t[2],u=0;if(o.some((function(e){return 0!==n[e]}))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(c)var l=c(r)}for(e&&e(t);u<o.length;u++)i=o[u],r.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return r.O(l)},t=self["webpackChunkappanime"]=self["webpackChunkappanime"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(7441)}));t=r.O(t)})();
//# sourceMappingURL=app.eee94a55.js.map