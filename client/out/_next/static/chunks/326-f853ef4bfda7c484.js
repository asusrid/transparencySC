"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[326],{706:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(5893),a=r(2370),s=r(1401),i=r(9582),l=r(3680),o=r(7074),c=r(4855),d=r(7294);function h(e){let[t,r]=(0,d.useState)(!1),[h,u]=(0,d.useState)(null),x=(0,o.ZP)(s.Z)(e=>{let{theme:t}=e;return{display:"flex",marginBottom:"8%",flexDirection:"column",textAlign:"center",paddingTop:t.spacing(1),paddingBottom:t.spacing(1),paddingLeft:t.spacing(3),...t.typography.body2,color:t.palette.text.secondary,backgroundColor:"dark"===t.palette.mode?"#fff":"#0d3b66"}}),g=(0,o.ZP)("div")(e=>{let{theme:t}=e;return{...t.typography.button,...t.typography.h6,color:"#fff",fontWeight:550,padding:t.spacing(1),textAlign:"center"}}),p=e=>{var t=new Date(parseInt(e));return t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()},j=e=>{switch(e){case 0:return"Mint";case 1:return"Delivered";case 2:return"Accepted";case 3:return"Rejected";case 4:return"Used";case 5:return"On Sale";case 6:return"Bought"}},m=e=>{switch(e){case 0:return"Farmer";case 1:return"Baker";case 2:return"Customer"}},y=()=>{r(!0),setTimeout(()=>{r(!1)},1500)},w=()=>{let r=e.data;return(0,n.jsxs)(x,{children:[(0,n.jsx)(g,{children:j(r.operation)}),(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)(i.Z,{variant:"subtitle1",color:"white",noWrap:!0,children:(0,n.jsx)("strong",{children:"Time:"})}),(0,n.jsxs)(i.Z,{variant:"subtitle1",color:"white",noWrap:!0,children:["\xa0",p(r.blockTimestamp)]})]}),0==r.operation?(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)(i.Z,{variant:"subtitle1",color:"white",noWrap:!0,children:(0,n.jsx)("strong",{children:"Product:"})}),(0,n.jsxs)(i.Z,{variant:"subtitle1",color:"white",noWrap:!0,children:["\xa0",r.attrs.quantity," ",r.attrs.unit," of ",r.attrs.product]})]}),(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)(i.Z,{variant:"subtitle1",color:"white",noWrap:!0,children:(0,n.jsx)("strong",{children:"Origin:"})}),(0,n.jsxs)(i.Z,{variant:"subtitle1",color:"white",noWrap:!0,children:["\xa0",Number(r.attrs.origin)]})]}),(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)(i.Z,{variant:"subtitle1",color:"white",noWrap:!0,children:(0,n.jsx)("strong",{children:"State:"})}),(0,n.jsxs)(i.Z,{variant:"subtitle1",color:"white",noWrap:!0,children:["\xa0",j(r.attrs.currentState)]})]}),(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)(i.Z,{variant:"subtitle1",color:"white",noWrap:!0,children:(0,n.jsx)("strong",{children:"Manufacturer:"})}),(0,n.jsxs)(i.Z,{variant:"subtitle1",color:"white",noWrap:!0,children:["\xa0",r.user.name,", ",m(r.user.role)]})]}),(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)(i.Z,{variant:"subtitle1",color:"white",noWrap:!0,children:(0,n.jsx)("strong",{children:"Made in:"})}),(0,n.jsxs)(i.Z,{variant:"subtitle1",color:"white",noWrap:!0,children:["\xa0",r.user.country]})]})]}):(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)(i.Z,{variant:"subtitle1",color:"white",noWrap:!0,children:(0,n.jsx)("strong",{children:"Responsible:"})}),(0,n.jsxs)(i.Z,{variant:"subtitle1",color:"white",noWrap:!0,children:["\xa0",r.user.name,", ",m(r.user.role)]})]}),(0,n.jsxs)(a.ZP,{children:[(0,n.jsx)(i.Z,{variant:"h6",color:"white",component:"p",children:"Tx Data"}),(0,n.jsxs)(i.Z,{variant:"body2",color:"white",component:"p",children:["Block Number: ",r.blockNumber]}),(0,n.jsx)(c.CopyToClipboard,{text:r.txHash,onCopy:y,children:(0,n.jsx)(l.Z,{style:{marginTop:"2%",marginBottom:"2%"},variant:"primary",children:(0,n.jsx)(i.Z,{variant:"body2",color:"text.secondary.contrastText",component:"p",children:t?"Copied!":"Copy Hash"})})})]})]})};return(0,d.useEffect)(()=>{let e=w();u(e)},[e]),h}},9326:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(5893),a=r(6076),s=r(5553),i=r(9485),l=r(7294),o=r(8392),c=r(5447),d=r(3680),h=r(5147),u=r(1953),x=r(2370),g=r(7160),p=r.n(g);r(1535);var j=r(706);function m(e){let[t,r]=(0,l.useState)(!1),[g,m]=(0,l.useState)(!1),[y,w]=(0,l.useState)([]),[b,f]=(0,l.useState)([]),[v,k]=(0,l.useState)(null),[N,Z]=(0,l.useState)(""),[_,T]=(0,l.useState)(null),[I,C]=(0,l.useState)([]),[S,A]=(0,l.useState)([]),[W,P]=(0,l.useState)(!1);var H=!1;let B=async function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(t){let r=e.provider.getSigner();return new a.CH(o.I,o.d,r)}return new a.CH(o.I,o.d,e.provider)},D=async function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=await B(),n=await t.connect(o.I).getTokenIds(),a=await q([],t,n,!1);if(w(a),r(!1),e){let s=await B(!0),i=await s.getTokenIds(),l=await q([],s,i,e);f(l),m(!1)}},q=async(e,t,r,n)=>{for(var a=0;a<r.length;a++){var i=r[a].toNumber();if(0!=i){let l=await t.getTokenAttrs(r[a]);if(n)e.push({tokenId:i,product:l[3],quantity:l[2],unit:l[4],state:l[5]});else{let o=s.dF(Number(await E(i)));e.push({tokenId:i,product:l[3],quantity:l[2],unit:l[4],state:l[5],price:o})}}}return e},E=async e=>{try{let t=await B();return await t.getPrice(e)}catch(r){console.log(r),window.alert("There was an error getting the price of the token")}},M=async e=>{try{let t=await B(!0),n=await t.getPrice(e),a=await t.buy(e,{value:n});r(!0),m(!0),await a.wait()}catch(s){console.log(s),window.alert("There was an error when buying a token")}},F=async(e,t,r,a)=>{try{let s=await B(),i=t[r];console.log(i);let l=await s.getUserData(i.args._from),o={operation:i.args._state,tokenId:i.args._tokenId,blockTimestamp:1e3*(await i.getBlock(i.blockNumber)).timestamp,blockNumber:i.blockNumber,txHash:i.transactionHash};if(0==i.args._state){let c=await s.getTokenAttrs(Number(i.args._tokenId));if(0!=c[1]){let d=s.filters.Transaction(null,Number(c[1]),null),h=await s.queryFilter(d,0,"latest");await F(e,h,0,a+h.length),N==i.args._tokenId&&(H=!0)}o.attrs={origin:c[1],quantity:c[2],product:c[3],unit:c[4],currentState:c[5]},o.user={name:l[0],location:l[1],registeredDate:l[2],role:l[3]}}else o.user={name:l[0],location:l[1],registeredDate:l[2],role:l[3]};if(r==t.length-1)return S.push(Number(i.args._tokenId)),e.push((0,n.jsx)(j.default,{group:i.args._tokenId,data:o},a)),H&&C(e),e;e.push((0,n.jsx)(j.default,{group:i.args._tokenId,data:o},a)),await F(e,t,r+1,a+1)}catch(u){console.log(u),window.alert("There was an error getting the history")}},L=()=>{let e=S.reverse();for(var t=[],r=0;r<e.length;r++)t.push((0,n.jsxs)(u.Z,{className:p().boxCustomer,children:[(0,n.jsxs)("h4",{style:{textAlign:"center"},children:["Token ",e[r]]}),(0,n.jsx)("hr",{style:{marginBottom:"5%",marginTop:"0%"}}),(0,n.jsx)(x.ZP,{container:!0,direction:"column",children:I.sort((e,t)=>e.key>t.key?1:-1).map((t,a)=>t.props.group==e[r]?(0,n.jsx)(x.ZP,{item:!0,width:"100%",children:t},a):null)})]},r));return A([]),t},U=(e,t)=>{v==t?(k(null),Z(""),T(null)):(k(t),Z(e))};return(0,l.useEffect)(()=>{var t;let n=new a.CH(o.I,o.d,e.provider);return e.provider.send("eth_requestAccounts",[]).then(function(e){t=i.Kn(e[0])}),async function(){r(!0),m(!0),await D(!0)}(),n.on(n.filters.Transaction(null,null,[5]),async(e,t,n)=>{r(!0),await D()}),n.on(n.filters.Transaction(t,null,[6]),async(e,t,n)=>{r(!0),m(!0),await D(!0)}),()=>{e.provider.removeAllListeners()}},[e]),(0,l.useEffect)(()=>{(async function(){if(""!=N){let e=await B(),t=e.filters.Transaction(null,Number(N),null),r=await e.queryFilter(t,0,"latest");C([]),P(!0),F([],r,0,0)}})()},[N]),(0,l.useEffect)(()=>{if(0!=I.length){let e=L();P(!1),T(e)}},[I]),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:p().main,children:[(0,n.jsxs)("div",{className:p().title,children:[(0,n.jsx)("img",{width:100,height:100,src:"./customerColor.png",alt:"customer icon"}),(0,n.jsx)("h2",{children:"Customer User Account"})]}),(0,n.jsx)("h3",{className:p().subtitle,children:"Products Available"}),(0,n.jsx)("hr",{className:p().hrCustomer}),(0,n.jsxs)(h.Z,{striped:!0,bordered:!0,hover:!0,className:p().table,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"View History"}),(0,n.jsx)("th",{children:"Token ID"}),(0,n.jsx)("th",{children:"Product Name"}),(0,n.jsx)("th",{children:"Quantity"}),(0,n.jsx)("th",{children:"Unit"}),(0,n.jsx)("th",{children:"Price"}),(0,n.jsx)("th",{children:"Action"})]})}),(0,n.jsx)("tbody",{children:t?(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{style:{"--bs-table-accent-bg":"white",textAlign:"center"},colSpan:"7",children:[(0,n.jsx)("img",{src:"./loading.gif",alt:"loading.."}),(0,n.jsx)("p",{className:p().p_no_margin,children:"Loading, wait some seconds..."})]})}):y.map((e,t)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(c.Z.Check,{type:"radio",id:e.tokenId,value:e.tokenId,name:"selectedToken",checked:v=="available_"+t,readOnly:!0,onClick:e=>U(e.target.value,"available_"+t)})}),(0,n.jsx)("td",{children:e.tokenId}),(0,n.jsx)("td",{children:e.product}),(0,n.jsx)("td",{children:e.quantity}),(0,n.jsx)("td",{children:e.unit}),(0,n.jsx)("td",{children:e.price}),(0,n.jsx)("td",{children:(0,n.jsx)(d.Z,{value:e.tokenId,variant:"primary",onClick:e=>M(e.target.value),children:"Buy"})})]},"available_"+t))})]}),(0,n.jsx)("h3",{children:"My Bought Products"}),(0,n.jsx)("hr",{className:p().hrCustomer}),(0,n.jsxs)(h.Z,{striped:!0,bordered:!0,hover:!0,className:p().table,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"View History"}),(0,n.jsx)("th",{children:"Token ID"}),(0,n.jsx)("th",{children:"Product Name"}),(0,n.jsx)("th",{children:"Quantity"}),(0,n.jsx)("th",{children:"Unit"})]})}),(0,n.jsx)("tbody",{children:g?(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{style:{"--bs-table-accent-bg":"white",textAlign:"center"},colSpan:"6",children:[(0,n.jsx)("img",{src:"./loading.gif",alt:"loading..."}),(0,n.jsx)("p",{className:p().p_no_margin,children:"Loading, wait some seconds..."})]})}):b.map((e,t)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(c.Z.Check,{type:"radio",id:e.tokenId,value:e.tokenId,name:"selectedToken",checked:v=="bought_"+t,readOnly:!0,onClick:e=>U(e.target.value,"bought_"+t)})}),(0,n.jsx)("td",{children:e.tokenId}),(0,n.jsx)("td",{children:e.product}),(0,n.jsx)("td",{children:e.quantity}),(0,n.jsx)("td",{children:e.unit})]},"bought_"+t))})]}),(0,n.jsx)("h3",{style:{textAlign:"center",paddingTop:"2%"},children:"History"}),""!=N?(0,n.jsx)("div",{className:p().flexContainerHistory,children:W?(0,n.jsxs)("div",{style:{textAlign:"center"},children:[(0,n.jsx)("img",{src:"./loading.gif",alt:"loading..."}),(0,n.jsx)("p",{className:p().p_no_margin,children:"Loading, wait some seconds..."})]}):_}):(0,n.jsx)("p",{className:p().p_no_history,children:"No product selected"})]})})}}}]);