(this["webpackJsonpsupermarket-list"]=this["webpackJsonpsupermarket-list"]||[]).push([[0],{10:function(n,e,t){n.exports=t.p+"static/media/delete-icon.9b217cd2.svg"},15:function(n,e,t){n.exports=t(28)},20:function(n,e,t){},22:function(n,e,t){},28:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(9),i=t.n(o),c=(t(20),t(3)),l=t.n(c),u=t(4),s=t(1),d=(t(22),t(2)),m=t(10),p=t.n(m);function g(){var n=Object(s.a)(["\n  margin: 0.750em 0;\n  width: 100%;\n  background: var(--white);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 20px;\n  font-weight: 600;\n  border-radius: .3em;\n  box-shadow: 0px 1px 5px 0px var(--grey-light);\n  & p{\n    margin: 0;\n  }\n  & button{\n    border: none;\n    background: transparent;\n    & img{\n      width: 20px;\n      :hover{\n        cursor: pointer;\n        filter: brightness(0.5);\n      }\n  }\n}\n"]);return g=function(){return n},n}var b=d.a.li(g()),f=function(n){return a.a.createElement(b,null,a.a.createElement("p",null,n.itemName)," ",a.a.createElement("button",{onClick:function(){return n.deleteItem(n.id)}},a.a.createElement("img",{src:p.a,alt:"delete"})))};function v(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  & button {\n    font-weight: 600;\n    border-radius: .3em;\n    font-size: 16px;\n    min-width: 90px;\n    padding: 10px 0;\n  }\n\n  & button.outline{\n    border: 1px solid var(--grey-mid);\n    background-color: transparent;\n    :hover{\n      cursor: pointer;\n      background: var(--grey);\n    }\n  }\n  & button.primary{\n    background-color: var(--blue-light);\n    border: none;\n    color: white;\n    & :hover{\n      background-color: var(--blue-light-2);\n      cursor: pointer;\n      color: var(--grey);\n    }\n  }\n\n  & button:disabled,\n  button[disabled]{\n    border: 1px solid var(--grey-mid);\n    background-color: var(--grey);\n    color: var(--grey-mid);\n  }\n"]);return v=function(){return n},n}function h(){var n=Object(s.a)(["\n  z-index: 9999;\n  background: var(--white);\n  margin-top: 20vh;\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  height: 200px;\n  padding: 0 24px;\n  border-radius: 10px;\n  box-shadow: 0px 1px 5px 0px var(--grey-light);\n\n  & h2{\n    text-align: center;\n  }\n\n  & input{\n      border: 1px solid var(--grey-light);\n      min-height: 40px;\n      border-radius: 5px;\n      margin-bottom: 24px;\n      padding-left: 10px;\n      font-size: 14px;\n    }\n"]);return h=function(){return n},n}function x(){var n=Object(s.a)(["\n  z-index: 999;\n  position: absolute;\n  min-width: 100%;\n  min-height:100%;\n  background: var(--overlay);\n  display: flex;\n  justify-content: center;"]);return x=function(){return n},n}var w=d.a.div(x()),k=d.a.div(h()),y=d.a.div(v()),E=function(n){var e=Object(r.useState)(!0),t=Object(u.a)(e,2),o=t[0],i=t[1],c=Object(r.useState)(""),l=Object(u.a)(c,2),s=l[0],d=l[1];return a.a.createElement(w,null,a.a.createElement(k,null,a.a.createElement("h2",null,"Add Item"),a.a.createElement("input",{type:"text",value:s,onChange:function(n){d(n.target.value),""!==n.target.value?i(!1):i(!0)},autoFocus:!0}),a.a.createElement(y,null,a.a.createElement("button",{className:"outline",onClick:n.close},"Cancel"),a.a.createElement("button",{className:"primary",disabled:o,onClick:function(){return n.addItemToList(s)}},"Add"))))};if(!localStorage.getItem("supermarketList")){localStorage.setItem("supermarketList",JSON.stringify(["Beer","Coffee","More Beer"]))}var O=function(){return new Promise((function(n,e){localStorage.getItem("supermarketList")?n(JSON.parse(localStorage.getItem("supermarketList"))):e(new Error("No items found"))}))},j=function(n){return new Promise((function(e,t){var r=JSON.parse(localStorage.getItem("supermarketList"));""!==n?(r.push(n),localStorage.setItem("supermarketList",JSON.stringify(r)),e()):t(new Error("Can't add null item"))}))},S=function(n){return new Promise((function(e,t){var r=JSON.parse(localStorage.getItem("supermarketList"));n>=0&&n<=r.length?(r.splice(n,1),localStorage.setItem("supermarketList",JSON.stringify(r)),e()):t(new Error("Can't delete item"))}))};function I(){var n=Object(s.a)(["\nlist-style: none;\n  margin: 0;\n  padding: 0;\n"]);return I=function(){return n},n}function L(){var n=Object(s.a)(["\n  width: 90%;\n  max-width: 650px;\n  margin: 0 auto;\n  margin-top: 2.8em;\n\n& > button{\n  width: 100%;\n  background-color: var(--blue-light);\n  color: white;\n  font-weight: 600;\n  border-radius: .3em;\n  font-size: 16px;\n  padding: 20px 20px;\n  border: 1px solid var(--blue);\n  margin-bottom: 2em;\n    :hover{\n    background-color: var(--blue-light-2);\n    cursor: pointer;\n    color: var(--grey);\n    }\n}\n"]);return L=function(){return n},n}function N(){var n=Object(s.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--grey);\n"]);return N=function(){return n},n}var C=d.a.div(N()),J=d.a.div(L()),z=d.a.ul(I()),B=function(){var n=Object(r.useState)(!1),e=Object(u.a)(n,2),t=e[0],o=e[1],i=function(){return o(!1)},c=Object(r.useState)([]),s=Object(u.a)(c,2),d=s[0],m=s[1];function p(){var n;return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.awrap(O());case 3:n=e.sent,m(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),null,null,[[0,7]])}function g(n){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.awrap(S(n).then(p()));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),null,null,[[0,5]])}return Object(r.useEffect)((function(){p()}),[]),a.a.createElement(r.Fragment,null,t?a.a.createElement(E,{close:i,addItemToList:function(n){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.prev=1,e.next=4,l.a.awrap(j(n).then(p()));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),null,null,[[1,6]])}}):null,a.a.createElement(C,null,a.a.createElement("header",null,a.a.createElement("h1",null,"Supermarket List"),a.a.createElement("small",null,d.length," items")),a.a.createElement(J,null,a.a.createElement(z,null,d.map((function(n,e){return a.a.createElement(f,{itemName:n,key:e,id:e,deleteItem:g})}))),a.a.createElement("button",{onClick:function(){return o(!0)}},"Add item"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.d715b02f.chunk.js.map