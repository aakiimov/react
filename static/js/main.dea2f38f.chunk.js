(this["webpackJsonpfinbox-mini-app"]=this["webpackJsonpfinbox-mini-app"]||[]).push([[0],{289:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);var c=n(6),a=n(1),r=n.n(a),s=n(42),o=n.n(s),i=n(29),l=n(107),u={apiKey:"AIzaSyCumX0HBTrTWuiyCOkwfSmI_ro5pGEGCzM",authDomain:"finbox-mini-app.firebaseapp.com",databaseURL:"https://finbox-mini-app-default-rtdb.firebaseio.com",projectId:"finbox-mini-app",storageBucket:"finbox-mini-app.appspot.com",messagingSenderId:"261332152446",appId:"1:261332152446:web:1b0638cbb10e860a86a82f"},d=n(44),j=n(38),b=n(31),p=n(108),h=n(100),O=n.n(h),f=n(101),x="SET_USER",v="FETCH_ACCESS_TOKEN",m={access_token:""};var y="SET_FRIENDS",g=[];var w=function(e){return e.friends},k=Object(b.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.payload.user;default:return e}},friends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return t.payload.friends;default:return e}}}),C=n(27),S=n.n(C),_=n(33),A=n(43),I=n.n(A),E=S.a.mark(T);function T(){var e,t,n,c;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e=window.location.search,t=new URLSearchParams(e),n=t.get("vk_app_id"),a.next=5,I.a.send("VKWebAppGetAuthToken",{app_id:Number(n),scope:"friends"}).catch((function(){alert("\u041f\u0440\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e \u043a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435.")}));case 5:return c=a.sent,a.next=8,Object(_.b)({type:x,payload:{user:{access_token:c.access_token}}});case 8:case"end":return a.stop()}}),E)}var z=S.a.mark(M);function M(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.c)(v,T);case 2:case"end":return e.stop()}}),z)}var P=S.a.mark(R);function R(){var e;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.send("VKWebAppCallAPIMethod",{method:"friends.get",params:{order:"hints",fields:"nickname,photo_100",v:"5.21",access_token:K.getState().user.access_token}}).catch((function(){alert("\u041f\u0440\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e \u043a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435.")}));case 2:return e=t.sent,t.next=5,Object(_.b)({type:y,payload:{friends:e.response.items}});case 5:case"end":return t.stop()}}),P)}var U=S.a.mark(B);function B(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.c)(x,R);case 2:case"end":return e.stop()}}),U)}var N=S.a.mark(D);function D(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.a)([M(),B()]);case 2:case"end":return e.stop()}}),N)}var L=n(102),V=Object(p.a)(),K=Object(b.createStore)(k,Object(f.composeWithDevTools)(Object(b.applyMiddleware)(O.a,V)));Object(L.a)();V.run(D);var W=n(51),G=n(10),q=n(295),F=n(296);function H(){return{type:v}}var J=n(109),X=n(105);function Q(e){return Object(c.jsx)(G.q,{id:e.id,children:Object(c.jsx)(G.r,{children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"})})}var Y=n(106),Z=(n(289),Object(Y.block)("dashboard-card"));function $(e){return Object(c.jsx)(G.c,{children:Object(c.jsxs)("div",{className:Z(),children:[Object(c.jsx)("span",{className:Z("subtitle"),children:e.subtitle}),Object(c.jsx)("strong",{className:Z("title"),children:e.title})]})})}function ee(){var e=window.location.search,t=new URLSearchParams(e).get("vk_user_id");return Object(c.jsx)(G.k,{header:Object(c.jsx)(G.l,{mode:"primary",children:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0434\u043e\u043b\u0433\u0438"}),mode:"plain",children:Object(c.jsxs)(G.d,{size:"m",children:[Object(c.jsx)(d.b,{path:"".concat(t,"/lent"),children:function(e){var t;return console.log(e),t=e.value,Array(t).forEach((function(e){console.log(e)})),e.isLoading?Object(c.jsx)(G.w,{}):Object(c.jsx)("span",{children:"hello"})}}),Object(c.jsx)($,{subtitle:"\u0414\u0430\u043b \u0432 \u0434\u043e\u043b\u0433",title:"125 000 \u20bd"})]})})}var te=Object(j.b)((function(e){return{friends:w(e)}}))((function(e){return Object(c.jsx)(G.k,{header:Object(c.jsx)(G.l,{mode:"primary",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),mode:"plain",children:e.friends.length>0?(t=e.friends,t.map((function(e){return Object(c.jsxs)(G.v,{before:Object(c.jsx)(G.b,{src:e.photo_100,size:48}),children:[e.first_name," ",e.last_name]})}))):Object(c.jsx)(G.w,{size:"medium"})});var t})),ne=n(292),ce=n(293);function ae(e){return Object(c.jsxs)(G.k,{header:Object(c.jsx)(G.l,{mode:"secondary",children:"\u041d\u0435\u0442 \u043f\u0440\u043e\u0441\u0440\u043e\u0447\u0435\u043d\u043d\u044b\u0445 \u0434\u043e\u043b\u0433\u043e\u0432"}),children:[Object(c.jsx)(G.e,{before:Object(c.jsx)(ne.a,{}),disabled:!0,children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443"}),Object(c.jsx)(G.e,{before:Object(c.jsx)(ce.a,{}),onClick:function(){return e.onModalShow&&e.onModalShow("add-debt")},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u043b\u0433"})]})}function re(e){return Object(c.jsxs)(G.q,{id:e.id,children:[Object(c.jsx)(G.r,{children:"\u0414\u043e\u043b\u0433\u0438"}),Object(c.jsx)(ae,{onModalShow:e.onShowModal}),Object(c.jsx)(ee,{}),Object(c.jsx)(te,{})]})}var se=n(294);var oe,ie=Object(j.b)((function(e){return{friends:w(e)}}))((function(e){var t=r.a.useState(null),n=Object(W.a)(t,2),a=n[0],s=n[1],o=r.a.useState({type:"lent",summary:null,currency:"RUB",contactId:null}),l=Object(W.a)(o,2),u=l[0],j=l[1],b=window.location.search,p=new URLSearchParams(b).get("vk_user_id");function h(){return s(null)}console.log(u);var O=Object(c.jsx)(G.p,{activeModal:a,onClose:h,children:Object(c.jsx)(G.n,{id:"add-debt",header:Object(c.jsx)(G.o,{left:Object(c.jsx)(G.s,{onClick:function(){return s(null)},children:Object(c.jsx)(se.a,{})}),right:null!==u.type&&null!==u.summary&&null!==u.currency&&null!==u.contactId&&Object(c.jsx)(d.a,{path:"".concat(p,"/").concat(u.type),type:"push",children:function(e){var t=e.runMutation;return Object(c.jsx)(G.s,{onClick:Object(X.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({summary:u.summary,currency:u.currency,contactId:u.contactId});case 2:h();case 3:case"end":return e.stop()}}),e)}))),children:Object(c.jsx)(ce.a,{})})}}),children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u043b\u0433"}),children:Object(c.jsxs)(G.k,{children:[Object(c.jsx)(G.i,{children:Object(c.jsxs)(G.j,{mode:"horizontal",children:[Object(c.jsx)(G.h,{children:Object(c.jsx)(G.t,{name:"type",value:"lent",defaultChecked:"lent"===u.type||void 0,onChange:function(e){j(Object(i.a)(Object(i.a)({},u),{},{type:e.target.value}))},children:"\u0414\u0430\u043b \u0432 \u0434\u043e\u043b\u0433"})}),Object(c.jsx)(G.h,{children:Object(c.jsx)(G.t,{name:"type",value:"borrowed",defaultChecked:"borrowed"===u.type||void 0,onChange:function(e){j(Object(i.a)(Object(i.a)({},u),{},{type:e.target.value}))},children:"\u0414\u0430\u043b \u0432 \u0434\u043e\u043b\u0433"})})]})}),Object(c.jsx)(G.i,{children:Object(c.jsxs)(G.j,{mode:"horizontal",children:[Object(c.jsx)(G.h,{top:"\u0421\u0443\u043c\u043c\u0430",children:Object(c.jsx)(G.m,{defaultValue:null!==u.summary?u.summary:void 0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443",onBlur:function(e){j(Object(i.a)(Object(i.a)({},u),{},{summary:e.target.value}))}})}),Object(c.jsx)(G.h,{top:"\u0412\u0430\u043b\u044e\u0442\u0430",children:Object(c.jsx)(G.u,{placeholder:"\u0412\u0430\u043b\u044e\u0442\u0430",defaultValue:null!==u.currency?u.currency:void 0,options:[{value:"RUB",label:"RUB"},{value:"USD",label:"USD"}],onChange:function(e){j(Object(i.a)(Object(i.a)({},u),{},{currency:e.target.value}))}})})]})}),Object(c.jsx)(G.h,{top:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442",children:Object(c.jsx)(G.u,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442",options:function(e){var t=[];return e.forEach((function(e){t.push({value:e.id,label:"".concat(e.first_name," ").concat(e.last_name),avatar:e.photo_100})})),t}(e.friends),defaultValue:null!==u.contactId?u.contactId:void 0,onChange:function(e){j(Object(i.a)(Object(i.a)({},u),{},{contactId:e.target.value}))},renderOption:function(e){var t=e.option,n=Object(J.a)(e,["option"]);return Object(c.jsx)(G.f,Object(i.a)(Object(i.a)({},n),{},{before:Object(c.jsx)(G.b,{size:24,src:t.avatar})}))}})})]})})});return Object(c.jsx)(G.z,{id:e.id,modal:O,activePanel:e.activePanel,children:Object(c.jsx)(re,{id:e.id,onShowModal:function(e){return s(e)}})})}));function le(e){return Object(c.jsx)(G.z,{id:e.id,activePanel:e.activePanel,children:Object(c.jsx)(Q,{id:e.id})})}!function(e){e.Catalog="catalog",e.App="app"}(oe||(oe={}));var ue=oe;var de=Object(j.b)(null,(function(e){return{fetchAccessToken:Object(b.bindActionCreators)(H,e)}}))((function(e){var t=r.a.useState(ue.App),n=Object(W.a)(t,2),a=n[0],s=n[1];function o(e){return s(e.currentTarget.dataset.story)}return r.a.useEffect((function(){e.fetchAccessToken()}),[e]),Object(c.jsx)(G.a,{children:Object(c.jsxs)(G.g,{activeStory:a,tabbar:Object(c.jsxs)(G.x,{children:[Object(c.jsx)(G.y,{onClick:o,selected:a===ue.Catalog,"data-story":ue.Catalog,children:Object(c.jsx)(q.a,{})}),Object(c.jsx)(G.y,{onClick:o,selected:a===ue.App,"data-story":ue.App,children:Object(c.jsx)(F.a,{})})]}),children:[Object(c.jsx)(le,{id:ue.Catalog,activePanel:ue.Catalog}),Object(c.jsx)(ie,{id:ue.App,activePanel:ue.App})]})})}));function je(){return Object(c.jsx)(d.c,Object(i.a)(Object(i.a)({firebase:l.a},u),{},{children:Object(c.jsx)(j.a,{store:K,children:Object(c.jsx)(de,{})})}))}n(290);o.a.render(Object(c.jsx)(je,{}),document.getElementById("root"))}},[[291,1,2]]]);
//# sourceMappingURL=main.dea2f38f.chunk.js.map