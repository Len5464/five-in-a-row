import{u as k,o as n,c as d,r as f,a as y,b as x,_ as R,d as T,e,F as m,f as h,w as _,v as z,t as g,g as V,h as q,i as S,j as w,k as p,l as $,m as v,n as G,p as U,q as B}from"./index-2a2fa7c6.js";import{R as I,a as C}from"./RuleGuidePente-709abd73.js";const M={__name:"GoBack",setup(l){const r=k();return(c,s)=>(n(),d("a",{onClick:s[0]||(s[0]=a=>x(r).go(-1))},[f(c.$slots,"default",{},()=>[y("返回上一頁")])]))}};const D={class:"head"},F=["id","value"],j=["for"],A={__name:"NavTabs",props:{tabNames:{type:Array,default:["tab1","tab2","tab3"]}},setup(l){const r=T(1);return(c,s)=>(n(),d(m,null,[e("div",D,[f(c.$slots,"default",{},void 0,!0),(n(!0),d(m,null,h(l.tabNames.length,a=>(n(),d(m,{key:a},[_(e("input",{type:"radio",name:"tabs",id:`tab${a}`,value:a,"onUpdate:modelValue":s[0]||(s[0]=i=>r.value=i)},null,8,F),[[z,r.value]]),e("label",{for:`tab${a}`},g(l.tabNames[a-1]),9,j)],64))),128))]),(n(!0),d(m,null,h(l.tabNames.length,a=>_((n(),d("div",{key:a,class:"tab"},[f(c.$slots,`tab${a}`,{},()=>[y("請將內容添加到插槽#tab"+g(a),1)],!0)],512)),[[V,r.value===a]])),128))],64))}},E=R(A,[["__scopeId","data-v-e905ce32"]]);const u=l=>(U("data-v-79ef4b15"),l=l(),B(),l),L={class:"view"},P={class:"window | container"},H={class:"container"},J={class:"row align-items-center g-3 mt-5"},K={class:"d-flex col-lg-6"},O=u(()=>e("label",{class:"me-auto",for:"size"},"棋盤大小:",-1)),Q=["min","max"],W={class:"d-flex col-lg-6"},X=u(()=>e("label",{class:"me-auto",for:"sec"},"回合時間:",-1)),Y=["min","max"],Z={class:"d-flex col-lg-6"},ee=u(()=>e("label",{class:"me-auto",for:"player1"},"先手玩家:",-1)),se={class:"d-flex col-lg-6"},ae=u(()=>e("label",{class:"me-auto",for:"player2"},"後手玩家:",-1)),te={class:"d-flex col-lg-6"},le=u(()=>e("label",{class:"me-auto",for:"round"},"選擇回合數",-1)),oe=u(()=>e("option",{value:"only-one"},"單回合決勝負",-1)),ne=u(()=>e("option",{value:"two-out-of-three"},"三戰兩勝",-1)),ue=u(()=>e("option",{value:"three-out-of-five"},"五戰三勝",-1)),re=[oe,ne,ue],ce={__name:"GameRule",setup(l){var b;const r=k(),c=q(),s=T({size:15,sec:120,players:["玩家一","玩家二"],roundType:"only-one",gameType:((b=c.query)==null?void 0:b.gameType)||"classic"}),a=[5,30],i=[60,600];function N(){s.value.size>a[1]||s.value.size<a[0]?window.alert(`棋盤大小必須介於${a}之間`):s.value.sec>i[1]||s.value.sec<i[0]?window.alert(`遊戲時間必須介於${i}秒之間`):r.push({name:"game",query:s.value})}return S(()=>{console.log()}),(ie,t)=>(n(),d("div",L,[e("nav",P,[w(E,{"tab-names":["遊戲規則","遊戲設定"]},{tab1:p(()=>[x(c).query.gameType==="pente"?(n(),$(I,{key:0})):(n(),$(C,{key:1}))]),tab2:p(()=>[e("form",H,[e("ul",J,[e("li",K,[O,_(e("input",{class:"col-6 me-4",type:"number",id:"size",name:"size",required:"",min:a[0],max:a[1],"onUpdate:modelValue":t[0]||(t[0]=o=>s.value.size=o)},null,8,Q),[[v,s.value.size]])]),e("li",W,[X,_(e("input",{class:"col-6 me-4",type:"number",id:"sec",name:"sec",required:"",min:i[0],max:i[1],"onUpdate:modelValue":t[1]||(t[1]=o=>s.value.sec=o),placeholder:"秒"},null,8,Y),[[v,s.value.sec]])]),e("li",Z,[ee,_(e("input",{class:"col-6 me-4",id:"player1",name:"player1",required:"",maxlength:"10","onUpdate:modelValue":t[2]||(t[2]=o=>s.value.players[0]=o),placeholder:"請輸入名稱"},null,512),[[v,s.value.players[0]]])]),e("li",se,[ae,_(e("input",{class:"col-6 me-4",id:"player2",name:"player2",required:"",maxlength:"10","onUpdate:modelValue":t[3]||(t[3]=o=>s.value.players[1]=o),placeholder:"請輸入名稱"},null,512),[[v,s.value.players[1]]])]),e("li",te,[le,_(e("select",{class:"me-4",name:"round",id:"round","onUpdate:modelValue":t[4]||(t[4]=o=>s.value.roundType=o)},re,512),[[G,s.value.roundType]])])]),e("div",{class:"row mt-5"},[e("a",{class:"btn btn-primary | col-6 col-lg-4 mx-auto",onClick:N},"開始遊戲")])])]),default:p(()=>[w(M,{class:"btn-back | me-auto"},{default:p(()=>[y("←")]),_:1})]),_:1})])]))}},me=R(ce,[["__scopeId","data-v-79ef4b15"]]);export{me as default};
