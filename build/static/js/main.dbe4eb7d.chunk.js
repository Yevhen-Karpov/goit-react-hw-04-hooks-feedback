(this["webpackJsonpgoit-react-hw-04-feedback"]=this["webpackJsonpgoit-react-hw-04-feedback"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(6),o=n.n(s),i=n(3),r=n(0);function b(e){var t=e.message;return Object(r.jsx)("p",{children:t})}var u=n(2),d=n.n(u),l=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,s=e.positivePercentage;return Object(r.jsx)(r.Fragment,{children:c?Object(r.jsxs)("ul",{className:d.a.box,children:[Object(r.jsxs)("li",{className:d.a.options,children:[" Good:",t," "]}),Object(r.jsxs)("li",{className:d.a.options,children:[" Neutral:",n," "]}),Object(r.jsxs)("li",{className:d.a.options,children:[" Bad:",a," "]}),Object(r.jsxs)("li",{className:d.a.options,children:[" Total:",c," "]}),Object(r.jsxs)("li",{className:d.a.options,children:["Positive feedback: ",s,"%"]})]}):Object(r.jsx)(b,{message:"No feedback given"})})},j=n(5),O=n.n(j),h=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(r.jsx)("div",{className:O.a.buttonContainer,children:t.map((function(e){return Object(r.jsx)("button",{className:O.a.buttonContainerItem,type:"button","data-feedback":e,onClick:n,children:e},e)}))})},x=function(e){var t=e.title,n=e.children;return Object(r.jsxs)("section",{children:[Object(r.jsx)("h2",{children:t}),n]})},f=["good","neutral","bad"];function p(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),o=Object(i.a)(s,2),b=o[0],u=o[1],d=Object(a.useState)(0),j=Object(i.a)(d,2),O=j[0],p=j[1],m=function(){return n+b+O};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x,{title:"Please leave feedback",children:Object(r.jsx)(h,{options:f,onLeaveFeedback:function(e){switch(e.target.dataset.feedback){case"good":c((function(e){return e+1}));break;case"neutral":u((function(e){return e+1}));break;case"bad":p((function(e){return e+1}));break;default:return}}})}),Object(r.jsx)(x,{title:"Statistics",children:Object(r.jsx)(l,{good:n,neutral:b,bad:O,total:m(),positivePercentage:function(){var e=m(),t=100*n/e;return e?Math.round(t):0}()})})]})}n(12);o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={box:"Statistics_box__1sasP",options:"Statistics_options__1t-4Q"}},5:function(e,t,n){e.exports={buttonContainer:"FeedbackOptions_buttonContainer__3soyM",buttonContainerItem:"FeedbackOptions_buttonContainerItem__2Q7yu"}}},[[13,1,2]]]);
//# sourceMappingURL=main.dbe4eb7d.chunk.js.map