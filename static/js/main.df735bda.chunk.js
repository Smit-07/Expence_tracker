(this.webpackJsonpExpence_tracker=this.webpackJsonpExpence_tracker||[]).push([[0],{221:function(e,t,a){},222:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(11),r=a.n(o),i=a(21),s=a(24),u=function(e,t){var a;switch(t.type){case"DELETE_TRANSACTION":return a=e.filter((function(e){return e.id!==t.payload})),localStorage.setItem("transactions",JSON.stringify(a)),a;case"ADD_TRANSACTION":return a=[t.payload].concat(Object(s.a)(e)),localStorage.setItem("transactions",JSON.stringify(a)),a;default:return e}},l=a(4),d=JSON.parse(localStorage.getItem("transactions"))||[{amount:500,category:"Salary",type:"Income",date:"2020-11-16",id:"44c68123-5b86-4cc8-b915-bb9e16cebe6a"},{amount:225,category:"Investments",type:"Income",date:"2020-11-16",id:"33b295b8-a8cb-49f0-8f0d-bb268686de1a"},{amount:50,category:"Salary",type:"Income",date:"2020-11-13",id:"270304a8-b11d-4e16-9341-33df641ede64"},{amount:123,category:"Car",type:"Expense",date:"2020-11-16",id:"0f72e66e-e144-4a72-bbc1-c3c92018635e"},{amount:50,category:"Pets",type:"Expense",date:"2020-11-13",id:"c5647dde-d857-463d-8b4e-1c866cc5f83e"},{amount:500,category:"Travel",type:"Expense",date:"2020-11-13",id:"365a4ebd-9892-4471-ad55-36077e4121a9"},{amount:50,category:"Investments",type:"Income",date:"2020-11-23",id:"80cf7e33-fc3e-4f9f-a2aa-ecf140711460"},{amount:500,category:"Savings",type:"Income",date:"2020-11-23",id:"ef090181-21d1-4568-85c4-5646232085b2"},{amount:5,category:"Savings",type:"Income",date:"2020-11-23",id:"037a35a3-40ec-4212-abe0-cc485a98aeee"}],j=Object(n.createContext)(d),b=function(e){var t=e.children,a=Object(n.useReducer)(u,d),c=Object(i.a)(a,2),o=c[0],r=c[1],s=o.reduce((function(e,t){return"Expense"===t.type?e-t.amount:e+t.amount}),0);return Object(l.jsx)(j.Provider,{value:{transactions:o,balance:s,deleteTransaction:function(e){r({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){r({type:"ADD_TRANSACTION",payload:e})}},children:t})},m=a(269),p=a(75),O=a(263),x=a(265),f=a(266),y=a(36),h=a(102),g=a(260),v=Object(g.a)((function(){return{income:{borderBottom:"10px solid rgba(0, 255, 0, 0.5)"},expense:{borderBottom:"10px solid rgba(255, 0, 0, 0.5)"}}})),C=["#123123","#154731","#165f40","#16784f","#14915f","#10ac6e","#0bc77e","#04e38d","#00ff9d"],I=["#b50d12","#bf2f1f","#c9452c","#d3583a","#dc6a48","#e57c58","#ee8d68","#f79d79","#ffae8a","#cc474b","#f55b5f"],N=[{type:"Business",amount:0,color:C[0]},{type:"Investments",amount:0,color:C[1]},{type:"Extra income",amount:0,color:C[2]},{type:"Deposits",amount:0,color:C[3]},{type:"Lottery",amount:0,color:C[4]},{type:"Gifts",amount:0,color:C[5]},{type:"Salary",amount:0,color:C[6]},{type:"Savings",amount:0,color:C[7]},{type:"Rental income",amount:0,color:C[8]}],E=[{type:"Bills",amount:0,color:I[0]},{type:"Car",amount:0,color:I[1]},{type:"Clothes",amount:0,color:I[2]},{type:"Travel",amount:0,color:I[3]},{type:"Food",amount:0,color:I[4]},{type:"Shopping",amount:0,color:I[5]},{type:"House",amount:0,color:I[6]},{type:"Entertainment",amount:0,color:I[7]},{type:"Phone",amount:0,color:I[8]},{type:"Pets",amount:0,color:I[9]},{type:"Other",amount:0,color:I[10]}],T=function(e){N.forEach((function(e){return e.amount=0})),E.forEach((function(e){return e.amount=0}));var t=Object(n.useContext)(j).transactions.filter((function(t){return t.type===e})),a=t.reduce((function(e,t){return e+t.amount}),0),c="Income"===e?N:E;t.forEach((function(e){var t=c.find((function(t){return t.type===e.category}));t&&(t.amount+=e.amount)}));var o=c.filter((function(e){return e.amount>0})),r={datasets:[{data:o.map((function(e){return e.amount})),backgroundColor:o.map((function(e){return e.color}))}],labels:o.map((function(e){return e.type}))};return{filteredCategories:o,total:a,chartData:r}},S=function(e){var t=e.title,a=e.subheader,n=T(t),c=n.total,o=n.chartData,r=v();return Object(l.jsxs)(O.a,{className:"Income"===t?r.income:r.expense,children:[Object(l.jsx)(x.a,{title:t,subheader:a}),Object(l.jsxs)(f.a,{children:[Object(l.jsxs)(y.a,{variant:"h5",children:["$",c]}),Object(l.jsx)(h.Doughnut,{data:o})]})]})},k=a(282),D=Object(g.a)((function(e){return{media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},cartContent:{paddingTop:0},divider:{margin:"20px 0"}}})),w=a(17),A=a(270),B=a(287),R=a(283),_=a(274),J=a(289),W=a(275),L=a(285),P=a(286),H=a(284),M=Object(g.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),$=function(e){var t=e.open,a=e.setOpen,n=M(),c=function(e,t){"clickaway"!==t&&a(!1)};return Object(l.jsx)("div",{className:n.root,children:Object(l.jsx)(P.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:t,autoHideDuration:6e3,onClose:c,children:Object(l.jsx)(H.a,{onClose:c,severity:"success",elevation:6,variant:"filled",children:"Transaction successfully created."})})})},F=function(e){var t=new Date(e),a="".concat(t.getMonth()+1),n="".concat(t.getDate()),c=t.getFullYear();return a.length<2&&(a="0".concat(a)),n.length<2&&(n="0".concat(n)),[c,a,n].join("-")},G=Object(g.a)((function(){return{radioGroup:{display:"flex",justifyContent:"center",marginBottom:"-10px"},button:{marginTop:"20px"}}})),z={amount:"",category:"",type:"Income",date:F(new Date)},V=function(){var e=G(),t=Object(n.useContext)(j).addTransaction,a=Object(n.useState)(z),o=Object(i.a)(a,2),r=o[0],s=o[1],u=c.a.useState(!1),d=Object(i.a)(u,2),b=d[0],p=d[1],O="Income"===r.type?N:E;return Object(l.jsxs)(m.a,{container:!0,spacing:2,children:[Object(l.jsx)($,{open:b,setOpen:p}),Object(l.jsx)(m.a,{item:!0,xs:12,children:Object(l.jsx)(y.a,{align:"center",variant:"subtitle2",gutterBottom:!0})}),Object(l.jsx)(m.a,{item:!0,xs:6,children:Object(l.jsxs)(A.a,{fullWidth:!0,children:[Object(l.jsx)(B.a,{children:"Type"}),Object(l.jsxs)(R.a,{value:r.type,onChange:function(e){return s(Object(w.a)(Object(w.a)({},r),{},{type:e.target.value}))},children:[Object(l.jsx)(_.a,{value:"Income",children:"Income"}),Object(l.jsx)(_.a,{value:"Expense",children:"Expense"})]})]})}),Object(l.jsx)(m.a,{item:!0,xs:6,children:Object(l.jsxs)(A.a,{fullWidth:!0,children:[Object(l.jsx)(B.a,{children:"Category"}),Object(l.jsx)(R.a,{value:r.category,onChange:function(e){return s(Object(w.a)(Object(w.a)({},r),{},{category:e.target.value}))},children:O.map((function(e){return Object(l.jsx)(_.a,{value:e.type,children:e.type},e.type)}))})]})}),Object(l.jsx)(m.a,{item:!0,xs:6,children:Object(l.jsx)(J.a,{type:"number",label:"Amount",value:r.amount,onChange:function(e){return s(Object(w.a)(Object(w.a)({},r),{},{amount:e.target.value}))},fullWidth:!0})}),Object(l.jsx)(m.a,{item:!0,xs:6,children:Object(l.jsx)(J.a,{fullWidth:!0,label:"Date",type:"date",value:r.date,onChange:function(e){return s(Object(w.a)(Object(w.a)({},r),{},{date:F(e.target.value)}))}})}),Object(l.jsx)(W.a,{className:e.button,variant:"outlined",color:"primary",fullWidth:!0,onClick:function(){!Number.isNaN(Number(r.amount))&&r.date.includes("-")&&(N.map((function(e){return e.type})).includes(r.category)?s(Object(w.a)(Object(w.a)({},r),{},{type:"Income"})):E.map((function(e){return e.type})).includes(r.category)&&s(Object(w.a)(Object(w.a)({},r),{},{type:"Expense"})),p(!0),t(Object(w.a)(Object(w.a)({},r),{},{amount:Number(r.amount),id:Object(L.a)()})),s(z))},children:"Create"})]})},Y=a(273),q=a(276),K=a(224),Q=a(277),U=a(290),X=a(279),Z=a(280),ee=a(268),te=a(278),ae=a(281),ne=a(61),ce=a(60),oe=Object(g.a)((function(e){return{avatarIncome:{color:"#fff",backgroundColor:ne.a[500]},avatarExpense:{color:e.palette.getContrastText(ce.a[500]),backgroundColor:ce.a[500]},list:{maxHeight:"150px",overflow:"auto"}}})),re=function(){var e=oe(),t=Object(n.useContext)(j),a=t.transactions,c=t.deleteTransaction;return Object(l.jsx)(Y.a,{dense:!1,className:e.list,children:a.map((function(t){return Object(l.jsx)(q.a,{direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:Object(l.jsxs)(K.a,{children:[Object(l.jsx)(Q.a,{children:Object(l.jsx)(U.a,{className:"Income"===t.type?e.avatarIncome:e.avatarExpense,children:Object(l.jsx)(te.a,{})})}),Object(l.jsx)(X.a,{primary:t.category,secondary:"$".concat(t.amount," - ").concat(t.date)}),Object(l.jsx)(Z.a,{children:Object(l.jsx)(ee.a,{edge:"end","aria-label":"delete",onClick:function(){return c(t.id)},children:Object(l.jsx)(ae.a,{})})})]})},t.id)}))})},ie=function(){var e=D(),t=Object(n.useContext)(j).balance;return Object(l.jsxs)(O.a,{className:e.root,children:[Object(l.jsx)(x.a,{title:"Expense Tracker"}),Object(l.jsxs)(f.a,{children:[Object(l.jsxs)(y.a,{align:"center",variant:"h5",children:["Total Balance $",t]}),Object(l.jsx)(k.a,{className:e.divider}),Object(l.jsx)(V,{})]}),Object(l.jsx)(f.a,{className:e.cartContent,children:Object(l.jsx)(m.a,{container:!0,spacing:2,children:Object(l.jsx)(m.a,{item:!0,xs:12,children:Object(l.jsx)(re,{})})})})]})},se=(Math.round(Math.random()),a(12)),ue=Object(g.a)((function(e){return{desktop:Object(se.a)({},e.breakpoints.up("sm"),{display:"none"}),mobile:Object(se.a)({},e.breakpoints.down("sm"),{display:"none"}),main:Object(se.a)({},e.breakpoints.up("sm"),{paddingBottom:"5%"}),last:Object(se.a)({},e.breakpoints.down("sm"),{marginBottom:e.spacing(3),paddingBottom:"200px"}),grid:{"& > *":{margin:e.spacing(2)}}}})),le=function(){var e=ue(),t=Object(p.useSpeechContext)().speechState,a=Object(n.useRef)(null);return Object(n.useEffect)((function(){t===p.SpeechState.Recording&&a.current.scrollIntoView()}),[t]),Object(l.jsx)("div",{children:Object(l.jsxs)(m.a,{className:e.grid,container:!0,spacing:0,alignItems:"center",justify:"center",style:{height:"100vh"},children:[Object(l.jsx)(m.a,{item:!0,xs:12,sm:4,className:e.mobile,children:Object(l.jsx)(S,{title:"Income"})}),Object(l.jsx)(m.a,{ref:a,item:!0,xs:12,sm:3,className:e.main,children:Object(l.jsx)(ie,{})}),Object(l.jsx)(m.a,{item:!0,xs:12,sm:4,className:e.desktop,children:Object(l.jsx)(S,{title:"Income"})}),Object(l.jsx)(m.a,{item:!0,xs:12,sm:4,className:e.last,children:Object(l.jsx)(S,{title:"Expense"})})]})})};a(221);r.a.render(Object(l.jsx)(b,{children:Object(l.jsx)(le,{})}),document.getElementById("root"))}},[[222,1,2]]]);
//# sourceMappingURL=main.df735bda.chunk.js.map