(function(e){function t(t){for(var n,o,u=t[0],p=t[1],a=t[2],s=0,l=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&l.push(i[o][0]),i[o]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(e[n]=p[n]);d&&d(t);while(l.length)l.shift()();return c.push.apply(c,a||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,u=1;u<r.length;u++){var p=r[u];0!==i[p]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},i={app:0},c=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var d=p;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"2d90":function(e,t,r){},"446a":function(e,t,r){},"44d9":function(e,t,r){"use strict";r("2d90")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n,i=r("7a23"),c=r("6c02"),o={id:"nav"},u={id:"contents"};function p(e,t,r,n,c,p){var a=Object(i["u"])("router-link"),d=Object(i["u"])("router-view");return Object(i["p"])(),Object(i["d"])(i["a"],null,[Object(i["g"])("div",o,[(Object(i["p"])(!0),Object(i["d"])(i["a"],null,Object(i["t"])(c.links,(function(e){return Object(i["p"])(),Object(i["d"])(a,{key:e,to:c.paths[e]},{default:Object(i["A"])((function(){return[Object(i["f"])(Object(i["w"])(e),1)]})),_:2},1032,["to"])})),128))]),Object(i["g"])("div",u,[Object(i["g"])(d,{recipes:c.recipes,favorites:c.favorites,onUpdateRecipes:p.loadRecipes,onAddFavorite:p.addFavorite},null,8,["recipes","favorites","onUpdateRecipes","onAddFavorite"])])],64)}var a=r("bc3a").create({baseURL:null!==(n="http://e28api.sean-bollin.com")&&void 0!==n?n:"http://e28api.e28.loc/",responseType:"json"}),d={name:"App",data:function(){return{favorites:[],recipes:[],links:["Home","Recipes","Add a Recipe","Mouth-Watering Favorites"],paths:{Home:"/",Recipes:"/recipes","Add a Recipe":"/recipe/new","Mouth-Watering Favorites":"/favorites"}}},mounted:function(){this.loadRecipes()},methods:{addFavorite:function(e){this.favorites.push(e)},loadRecipes:function(){var e=this;a.get("recipe").then((function(t){e.recipes=t.data.recipe}))}}};r("a57b");d.render=p;var s=d,l=Object(i["g"])("h1",null,"Jimbo's Southern-Style Recipe Book",-1),b=Object(i["g"])("p",null,"Welcome to Jimbo's Southern-Style Recipe Book. Here you'll find our list of curated recipes to keep you feeling at home in the deep south. Enjoy your stay!",-1);function j(e,t,r,n,c,o){return Object(i["p"])(),Object(i["d"])("div",null,[l,b])}var O={name:"HomePage"};O.render=j;var f=O,v=Object(i["g"])("h1",null,"Jimbo's Recipes",-1),h={id:"recipes"},g=Object(i["f"])("More Details");function m(e,t,r,n,c,o){var u=Object(i["u"])("show-recipe"),p=Object(i["u"])("router-link");return Object(i["p"])(),Object(i["d"])(i["a"],null,[v,Object(i["g"])("div",h,[(Object(i["p"])(!0),Object(i["d"])(i["a"],null,Object(i["t"])(r.recipes,(function(e){return Object(i["p"])(),Object(i["d"])("div",{key:e.id},[Object(i["g"])(u,{recipe:e,detailed:!1},null,8,["recipe"]),Object(i["g"])(p,{to:"/recipe/"+e.id},{default:Object(i["A"])((function(){return[g]})),_:2},1032,["to"]),Object(i["g"])("button",{onClick:function(t){return o.addFavorite(e)}},"Add to Favorites",8,["onClick"])])})),128))])],64)}r("b0c0"),r("a4d3"),r("e01a");var y={class:"show-recipe"},w={class:"name"},k={class:"description"},R={class:"ingredients"};function A(e,t,r,n,c,o){return Object(i["p"])(),Object(i["d"])("div",y,[Object(i["g"])("div",w,[Object(i["g"])("strong",null,Object(i["w"])(r.recipe.name),1)]),Object(i["g"])("div",k,[Object(i["g"])("em",null,Object(i["w"])(r.recipe.description),1)]),Object(i["g"])("div",R,"Ingredients: "+Object(i["w"])(r.recipe.ingredients),1)])}var F={props:{detailed:{type:Boolean,default:!0},recipe:{type:Object}}};F.render=A;var S=F,x={inheritAttrs:!1,components:{"show-recipe":S},props:{recipes:{type:Array,default:null}},data:function(){return{}},methods:{addFavorite:function(e){this.$emit("add-favorite",e)}}};x.render=m;var M=x,_=Object(i["g"])("h1",null,"Think You Can Make Somethin' Good?",-1),P={id:"inputs"},B=Object(i["g"])("label",{for:"name"},"Name",-1),U=Object(i["g"])("br",null,null,-1),J=Object(i["g"])("label",{for:"description"},"Description",-1),C=Object(i["g"])("br",null,null,-1),H=Object(i["g"])("label",{for:"ingredients"},"Ingredients",-1),T={key:0},W={class:"errors"};function N(e,t,r,n,c,o){return Object(i["p"])(),Object(i["d"])("div",null,[_,Object(i["g"])("div",P,[B,Object(i["B"])(Object(i["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.recipe.name=e}),id:"name"},null,512),[[i["y"],c.recipe.name]]),U,J,Object(i["B"])(Object(i["g"])("textarea",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.recipe.description=e}),id:"description"},null,512),[[i["y"],c.recipe.description]]),C,H,Object(i["B"])(Object(i["g"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.recipe.ingredients=e}),id:"ingredients"},null,512),[[i["y"],c.recipe.ingredients]])]),Object(i["g"])("button",{onClick:t[4]||(t[4]=function(){return o.addRecipe&&o.addRecipe.apply(o,arguments)})},"Add Recipe"),c.success?(Object(i["p"])(),Object(i["d"])("div",T,"Your recipe was added")):Object(i["e"])("",!0),Object(i["g"])("div",W,Object(i["w"])(c.errors),1)])}var V={data:function(){return{success:!1,errors:null,recipe:{name:"Recipe name",description:"Recipe description",ingredients:"list,of,ingredients"}}},methods:{addRecipe:function(){var e=this;a.post("/recipe",this.recipe).then((function(t){t.data.errors?(e.errors=t.data.errors,e.success=!1):(e.$emit("update-recipes"),e.success=!0)}))}}};r("44d9");V.render=N;var D=V,G={key:0},I=Object(i["f"])("Go to all recipes"),Y={key:1};function $(e,t,r,n,c,o){var u=Object(i["u"])("router-link"),p=Object(i["u"])("show-recipe");return o.recipeNotFound?(Object(i["p"])(),Object(i["d"])("div",G,[Object(i["g"])("p",null,"Recipe "+Object(i["w"])(r.id)+" not found.",1),Object(i["g"])(u,{to:"/recipes"},{default:Object(i["A"])((function(){return[I]})),_:1})])):o.recipe?(Object(i["p"])(),Object(i["d"])("div",Y,[Object(i["g"])(p,{recipe:o.recipe},null,8,["recipe"])])):Object(i["e"])("",!0)}r("4de4");var E={components:{"show-recipe":S},props:{id:{type:String},recipes:{type:Array,default:null}},data:function(){return{}},computed:{recipe:function(){var e=this;return this.recipes.filter((function(t){return t.id===e.id}),this.id)[0]},recipeNotFound:function(){return null==this.recipe}}};E.render=$;var L=E,q=Object(i["g"])("h1",null,"Mouth-Watering Favorites",-1),z={id:"recipes"};function K(e,t,r,n,c,o){var u=Object(i["u"])("show-recipe");return Object(i["p"])(),Object(i["d"])(i["a"],null,[q,Object(i["g"])("div",z,[(Object(i["p"])(!0),Object(i["d"])(i["a"],null,Object(i["t"])(r.favorites,(function(e){return Object(i["p"])(),Object(i["d"])("div",{key:e.id},[Object(i["g"])(u,{recipe:e,detailed:!1},null,8,["recipe"])])})),128))])],64)}var Q={inheritAttrs:!1,components:{"show-recipe":S},props:{favorites:{type:Array,default:null}},data:function(){return{}}};Q.render=K;var X=Q,Z=Object(c["a"])({history:Object(c["b"])(),routes:[{path:"/",component:f},{path:"/recipes",component:M},{path:"/recipe/new",component:D},{path:"/recipe/:id",component:L,props:!0},{path:"/favorites",component:X}]});Object(i["c"])(s).use(Z).mount("#app")},a57b:function(e,t,r){"use strict";r("446a")}});
//# sourceMappingURL=app.225dc72f.js.map