(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,function(e,t,n){e.exports={Section:"Section_Section__LqS2d",title:"Section_title__2S6oE"}},,,,,function(e,t,n){e.exports={btn:"Feedback-options_btn__11VRX"}},function(e,t,n){e.exports={message:"Notification-message_message__1Hauw"}},function(e,t,n){e.exports={list:"Statistics_list__3oKT7"}},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),o=n.n(a),s=n(4),i=n.n(s),r=(n(18),n(5)),l=n(6),u=n(7),b=n(12),d=n(11),j=(n(19),n(8)),h=n.n(j),f=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(c.jsx)("button",{className:h.a.btn,type:"button",onClick:function(){return n({option:e})},children:e},e)}))},p=n(9),v=n.n(p),O=function(e){var t=e.message;return Object(c.jsx)("b",{className:v.a.message,children:t})},x=n(3),g=n.n(x),k=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{className:g.a.Section,children:[Object(c.jsx)("h2",{className:g.a.title,children:t}),n]})},m=n(10),_=n.n(m),F=function(e){var t=e.good,n=e.neutral,a=e.bad,o=e.total,s=e.positivePercentage;return Object(c.jsxs)("ul",{className:_.a.list,children:[Object(c.jsxs)("li",{children:["Good: ",t]}),Object(c.jsxs)("li",{children:["Neutral: ",n]}),Object(c.jsxs)("li",{children:["Bad: ",a]}),Object(c.jsxs)("li",{children:["Total: ",o]}),Object(c.jsxs)("li",{children:["Positive feedback: ",o>0?s+"%":null]})]})},N=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.optionsNames=Object.keys(e.state),e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){return Math.round(100*e.state.good/e.countTotalFeedback())},e.onLeaveFeedback=function(t){var n=t.option;e.setState((function(e){return Object(r.a)({},n,e[n]+1)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(k,{title:"Please leave feedback",children:Object(c.jsx)(f,{options:this.optionsNames,onLeaveFeedback:this.onLeaveFeedback})}),this.countTotalFeedback()>0?Object(c.jsx)(k,{title:"Statistics",children:Object(c.jsx)(F,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})}):Object(c.jsx)(O,{message:"No feedback given"})]})}}]),n}(a.Component);i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.7dc97810.chunk.js.map