(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[72],{"727c":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"shadow-11",style:{height:t.height}},[a("q-card-section",[a("div",{staticClass:"text-h6 text-grey-8 text-weight-bolder"},[t._v("\r\n      Bar Chart\r\n      "),a("q-select",{staticClass:"bg-white float-right q-mb-sm ",staticStyle:{width:"300px"},attrs:{outlined:"",options:t.product_options,label:"Select Product"},model:{value:t.selected_product,callback:function(e){t.selected_product=e},expression:"selected_product"}})],1)]),a("q-card-section",{staticClass:"q-pa-none"},[a("IEcharts",{staticStyle:{height:"600px",width:"100%"},attrs:{option:t.getBarChartOptions,resizable:!0}})],1)],1)},s=[],i=a("ce44"),r={name:"charts",data(){return{height:"",selected_product:this.$t("dashboards.total_sales"),data:[{product:this.$t("dashboards.total_sales"),2015:43.3,2016:85.8,2017:93.7,2018:100,2019:100,2020:100,2021:100,2022:100,2023:100,2024:100,2025:100},{product:this.$t("dashboards.category_sales_ranking"),2015:83.1,2016:73.4,2017:55.1},{product:this.$t("dashboards.sales_volume_ranking"),2015:86.4,2016:65.2,2017:82.5},{product:this.$t("dashboards.sales_volumes_ranking"),2015:72.4,2016:53.9,2017:39.1}],product_options:[this.$t("dashboards.total_sales"),this.$t("dashboards.category_sales_ranking"),this.$t("dashboards.sales_volume_ranking"),this.$t("dashboards.sales_volumes_ranking")]}},methods:{getBarChartOptions(){}},computed:{getBarChartOptions(){console.log(1);let t,e=this,a=e.data.filter((function(t){return t["product"]===e.selected_product}));return console.log(a),{grid:{bottom:"1%"},xAxis:{type:"category",axisLabel:{},nameLocation:"middle",nameGap:78},tooltip:{},dataset:{dimensions:["product","2015","2016","2017"],source:a},buisness:t,yAxis:{type:"value",splitLine:{show:!0,lineStyle:{type:[30,20]}}},series:[{type:"bar",barWidth:80,barGap:"70%",barCategoryGap:"10%",itemStyle:{normal:{label:{show:!0,position:"top"}}}},{type:"bar",barWidth:80,itemStyle:{normal:{label:{show:!0,position:"top"}}}},{type:"bar",barWidth:80,itemStyle:{normal:{label:{show:!0,position:"top"}}}},{type:"bar",barWidth:80,itemStyle:{normal:{label:{show:!0,position:"top"}}}},{type:"bar",barWidth:80,itemStyle:{normal:{label:{show:!0,position:"top"}}}},{type:"bar",barWidth:80,itemStyle:{normal:{label:{show:!0,position:"top"}}}},{type:"bar",barWidth:80,itemStyle:{normal:{label:{show:!0,position:"top"}}}},{type:"bar",barWidth:80,itemStyle:{normal:{label:{show:!0,position:"top"}}}},{type:"bar",barWidth:80,itemStyle:{normal:{label:{show:!0,position:"top"}}}},{type:"bar",barWidth:80,itemStyle:{normal:{label:{show:!0,position:"top"}}}}]}}},mounted(){var t=this;t.$q.platform.is.electron?t.height=String(t.$q.screen.height-200)+"px":t.height=t.$q.screen.height-200+"px"},components:{IEcharts:i["a"]}},l=r,n=a("42e1"),d=a("f09f"),h=a("a370"),p=a("ddd8"),c=a("eebe"),b=a.n(c),m=Object(n["a"])(l,o,s,!1,null,null,null);e["default"]=m.exports;b()(m,"components",{QCard:d["a"],QCardSection:h["a"],QSelect:p["a"]})}}]);