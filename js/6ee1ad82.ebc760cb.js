(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["6ee1ad82"],{"13e0":function(t,a,l){"use strict";l.r(a);var s=function(){var t=this,a=t.$createElement,l=t._self._c||a;return l("q-page",[l("q-parallax",{attrs:{src:t.localData.image,height:400}},[l("p",[t._v(t._s(t.localData.title))])]),l("div",{staticClass:"row place-main"},[l("div",{staticClass:"col-8 q-pa-sm"},[l("q-breadcrumbs",{attrs:{separator:">",color:"light"}},[l("q-breadcrumbs-el",{attrs:{label:t.localData.country,to:"/"}}),l("q-breadcrumbs-el",{attrs:{label:t.localData.locate,to:"/"}}),l("q-breadcrumbs-el",{attrs:{label:t.localData.title,to:"/"}})],1),l("br"),l("span",{staticClass:"title"},[t._v(t._s(t.localData.title))]),l("div",{staticClass:"row q-mt-lg"},[l("div",{staticClass:"col-8"},[l("l-icon",{staticClass:"q-mt-sm",attrs:{icon:"fas fa-tag",color:"grey",text:"景点编号："+t.localData.id}}),l("br"),l("l-icon",{staticClass:"q-mt-sm",attrs:{icon:"fas fa-clock",color:"grey",text:"建议停留："+t.localData.stay_time+"小时"}}),l("br"),l("l-icon",{staticClass:"q-mt-sm",attrs:{icon:"fas fa-stopwatch",color:"grey",text:"开放时间："+t.localData.open_time}}),l("br"),l("l-icon",{staticClass:"q-mt-sm",attrs:{icon:"fas fa-map-marker-alt",color:"grey",text:"地理位置："+t.localData.locate}})],1),l("div",{staticClass:"col-4 info-right"},[l("q-rating",{attrs:{max:5,color:"amber",size:"16px",disable:""},model:{value:t.localData.rate,callback:function(a){t.$set(t.localData,"rate",a)},expression:"localData.rate"}}),l("span",{staticClass:"q-ml-sm"},[t._v(t._s(t.localData.comment)+"个评价")])],1)])],1),l("div",{staticClass:"col-4"})])],1)},c=[];s._withStripped=!0;var e=l("9aec"),o={name:"Index",data:function(){return{localData:{title:"宛若仙境 美轮美奂的杭州西湖",image:"statics/images/local.jpg",country:"中国",locate:"浙江省",address:"杭州市西湖区龙井路1号",id:"12442",stay_time:"3.0",open_time:"24H",rate:5,comment:"8920"}}},components:{LIcon:e["a"]}},i=o,r=(l("9bf2"),l("2877")),n=Object(r["a"])(i,s,c,!1,null,"350c010c",null);n.options.__file="index.vue";a["default"]=n.exports},7668:function(t,a,l){"use strict";var s=l("87ae"),c=l.n(s);c.a},"87ae":function(t,a,l){},"9aec":function(t,a,l){"use strict";var s=function(){var t=this,a=t.$createElement,l=t._self._c||a;return l("div",{staticClass:"layout",style:{color:t.color}},[l("q-icon",{class:t.icon}),t._v("\n  "+t._s(t.text)+"\n")],1)},c=[];s._withStripped=!0;var e={name:"LIcon",props:{text:String,icon:String,color:String}},o=e,i=(l("7668"),l("2877")),r=Object(i["a"])(o,s,c,!1,null,"4c25e754",null);r.options.__file="LIcon.vue";a["a"]=r.exports},"9bf2":function(t,a,l){"use strict";var s=l("d7bf"),c=l.n(s);c.a},d7bf:function(t,a,l){}}]);