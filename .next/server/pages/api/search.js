"use strict";(()=>{var e={};e.id=395,e.ids=[395],e.modules={5600:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},1428:e=>{e.exports=import("axios")},6762:(e,t)=>{Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,a){return a in t?t[a]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,a)):"function"==typeof t&&"default"===a?t:void 0}}})},3821:(e,t,a)=>{a.a(e,async(e,n)=>{try{a.r(t),a.d(t,{config:()=>u,default:()=>d,routeModule:()=>f});var o=a(9947),s=a(2706),r=a(6762),i=a(154),c=e([i]);i=(c.then?(await c)():c)[0];let d=(0,r.M)(i,"default"),u=(0,r.M)(i,"config"),f=new o.PagesAPIRouteModule({definition:{kind:s.A.PAGES_API,page:"/api/search",pathname:"/api/search",bundlePath:"",filename:""},userland:i});n()}catch(e){n(e)}})},154:(e,t,a)=>{a.a(e,async(e,n)=>{try{a.r(t),a.d(t,{default:()=>r});var o=a(1428),s=e([o]);async function r(e,t){if("GET"===e.method){let{email:a}=e.query;try{let e=await o.default.get("https://sedsa.api-us1.com/api/3/contacts",{headers:{"Api-Token":"d2830a151e2d5ae79ee56b3bf8035c9728d27a1c75fbd2fe89eff5f11c57f078c0f93ae1"},params:{email:a}});e.data.contacts&&e.data.contacts.length>0?t.status(200).json({message:`Contacto encontrado: ${a}`}):t.status(404).json({message:"El contacto no existe. Comun\xedquese con el equipo de Marketing y Operaciones"})}catch(e){t.status(500).json({message:`Error en la solicitud: ${e.message}`})}}else t.setHeader("Allow",["GET"]),t.status(405).end(`Method ${e.method} Not Allowed`)}o=(s.then?(await s)():s)[0],n()}catch(e){n(e)}})},2706:(e,t)=>{var a;Object.defineProperty(t,"A",{enumerable:!0,get:function(){return a}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE"}(a||(a={}))},9947:(e,t,a)=>{e.exports=a(5600)}};var t=require("../../webpack-api-runtime.js");t.C(e);var a=t(t.s=3821);module.exports=a})();