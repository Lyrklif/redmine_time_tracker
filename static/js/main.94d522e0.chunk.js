(this.webpackJsonpredmine_time_tracker=this.webpackJsonpredmine_time_tracker||[]).push([[0],{132:function(t,e,a){t.exports=a(167)},137:function(t,e,a){},138:function(t,e,a){},167:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(13),r=a.n(i),c=(a(137),a(14)),s=a(12),l=a(15),u=a(16),p=a(17),m=(a(138),a(20)),h=a(249),d=a(223),f=a(77),v=a(225),b=a(168),g=a(109),y=a.n(g),E=a(246),j=a(220);function O(t){return{type:"UPD_MOBILE_MENU",value:t}}var w=a(39);function k(t){var e=t.children,a=t.window,n=Object(j.a)({disableHysteresis:!0,threshold:0,target:a?a():void 0});return o.a.cloneElement(e,{elevation:n?4:0})}var S=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).showMobileMenu=function(){a.props.dispatchMobileMenu(!0)},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement(k,null,o.a.createElement(E.a,{className:"page-header",component:"header",position:"fixed",bgcolor:"primary.dark",color:"text.primary"},o.a.createElement(d.a,null,o.a.createElement(h.a,{mdUp:!0},o.a.createElement(b.a,{onClick:this.showMobileMenu,edge:"start","aria-label":"menu",color:"inherit"},o.a.createElement(y.a,null))),o.a.createElement(h.a,{smDown:!0},o.a.createElement(w.b,{to:"/tasks",className:"clear-link-style"},o.a.createElement(v.a,{color:"inherit"},"\u0417\u0430\u0434\u0430\u0447\u0438")),o.a.createElement(w.b,{to:"/statistics",className:"clear-link-style"},o.a.createElement(v.a,{color:"inherit"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"))),o.a.createElement(f.a,{variant:"body2",color:"inherit",className:"header__login"},this.props.name))))}}]),e}(o.a.Component),_=Object(m.b)((function(t){return{authorized:!!+t.authorized,name:t.user.userLogin}}),(function(t){return{dispatchMobileMenu:function(e){return t(O(e))}}}))(S),D=a(35),x=a.n(D);var A=function(t,e,a,n){var o,i=e||localStorage.getItem("url"),r=a||localStorage.getItem("api"),c={};switch(t){case"api":o="".concat(i,"/users/current.json?key=").concat(r);break;case"login":o="".concat(i,"/users/current.json"),c={auth:{username:r,password:n}}}return x.a.get(o,c).then((function(t){return t})).catch((function(t){console.log("authorization => error \n",t)}))},I=a(254);function C(t){return{type:"UPD_AUTHORIZED",authorized:t}}var L=a(232),M=a(48),T=a(250),U=a(231),F=function(t){function e(t){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).call(this,t))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=M[this.props.icon];return o.a.createElement(T.a,{label:this.props.label,title:this.props.label,type:this.props.type?this.props.type:"text",color:"secondary",placeholder:this.props.placeholder,variant:"outlined",onInput:this.props.onInput,InputProps:{startAdornment:o.a.createElement(U.a,{position:"start"},o.a.createElement(t,null))}})}}]),e}(o.a.Component),N=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).switchLogInByApi=function(){a.setState({logInByApi:!a.state.logInByApi}),a.setState({api:"",login:"",password:""})},a.setAuthorization=function(t){t.then((function(t){if(t){var e=t.data.user.login,n=t.data.user.api_key;localStorage.setItem("url",a.state.url),localStorage.setItem("api",n),localStorage.setItem("login",e),a.props.dispatchAuthorization(!0),a.props.dispatchUserInfo(e,n,a.state.url)}else alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435")}))},a.updComponent=function(){var t;t=a.state.logInByApi?A("api",a.state.url,a.state.api):A("login",a.state.url,a.state.login,a.state.password),a.setAuthorization(t)},a.handleSubmit=function(t){t.preventDefault(),a.updComponent(a.state.url,a.state.api)},a.setUrl=function(t){var e=t.target.value.trim();e.endsWith("/")&&(e=e.substring(0,e.length-1)),a.setState({url:e})},a.setApi=function(t){a.setState({api:t.target.value.trim()})},a.setLogin=function(t){a.setState({login:t.target.value.trim()})},a.setPass=function(t){a.setState({password:t.target.value.trim()})},a.state={logInByApi:!1,url:"",api:"",login:"",password:""},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=o.a.createElement(o.a.Fragment,null,o.a.createElement(F,{label:"\u041b\u043e\u0433\u0438\u043d",placeholder:"\u041b\u043e\u0433\u0438\u043d",onInput:this.setLogin,icon:"LockOpen"}),o.a.createElement(F,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",placeholder:"****",type:"password",onInput:this.setPass,icon:"VpnKey"})),e=o.a.createElement(F,{label:"Redmine Api",placeholder:"api_key",onInput:this.setApi,icon:"VpnKey"});return o.a.createElement(E.a,{component:"form",onSubmit:this.handleSubmit,className:"login-form",mx:"auto",display:"flex",flexDirection:"column"},o.a.createElement(E.a,{className:"login-form__switch"},o.a.createElement(L.a,{title:"\u0412\u0445\u043e\u0434 \u043f\u043e api",label:o.a.createElement(f.a,{color:this.state.logInByApi?"secondary":"textPrimary"},"\u0412\u0445\u043e\u0434 \u043f\u043e api"),control:o.a.createElement(I.a,{checked:this.state.logInByApi,onChange:this.switchLogInByApi,value:"logInByApi",color:"secondary"})})),o.a.createElement(F,{label:"Redmine Url",placeholder:"http://redmine.url.ru",onInput:this.setUrl,icon:"Language"}),this.state.logInByApi?e:t,o.a.createElement(v.a,{color:"secondary",size:"large",variant:"outlined",title:"\u0412\u043e\u0439\u0442\u0438",type:"submit",disabled:!this.state.url||(this.state.logInByApi?!this.state.api:!this.state.login||!this.state.password)},"\u0412\u043e\u0439\u0442\u0438"))}}]),e}(o.a.Component),P=Object(m.b)((function(t){return{authorized:t.authorized}}),(function(t){return{dispatchAuthorization:function(e){return t(C(e))},dispatchUserInfo:function(e,a,n){return t(function(t,e,a){return{type:"UPD_USER_DATA",login:t,key:e,url:a}}(e,a,n))}}}))(N);var z=function(){var t=localStorage.getItem("url"),e=localStorage.getItem("api");return x.a.get("".concat(t,"/issues.json?key=").concat(e,"&assigned_to_id=me")).then((function(t){return t})).catch((function(t){console.log("getTasks => error \n",t)}))},B=function(){var t=localStorage.getItem("url"),e=localStorage.getItem("api");return!(!t||!e)&&x.a.get("".concat(t,"/enumerations/time_entry_activities.json?key=").concat(e)).then((function(t){return t})).catch((function(t){console.log("getTypeActivity => error \n",t)}))},W=a(104),R=a(106),V=a(105),H=a(256),K=a(235),G=a(111),J=Object(G.a)({palette:{primary:{main:"#3D454C",dark:"#29333A",light:"#596069",contrastText:"#F6F6FF"},secondary:{main:"#59D366",dark:"#169B4E",contrastText:"#FFFFFF"},text:{primary:"#FFFFFF",secondary:"#F6F6FF"},type:"dark",overrides:{MuiButton:{root:{minWidth:"40px"}}},stop:{primary:{main:"#F9574B",dark:"#C2110",contrastText:"#FFFFFF"}}}}),Z=a(236),Y=a(233),$=a(228),q=a(247),Q=a(6),X=a(252),tt=a(234),et=a(237),at=a(63),nt=a.n(at),ot=function(t,e,a,n){var o=localStorage.getItem("url"),i=localStorage.getItem("api");if(!o||!i||!e||!t)return null;var r={time_entry:{issue_id:t,hours:e,activity_id:a||9,comments:n||""}};return x.a.post("".concat(o,"/time_entries.json?key=").concat(i),r).then((function(t){return t})).catch((function(t){console.log("timeEntries => error \n",t)}))},it=a(248),rt=a(251);function ct(t,e,a){return{type:"UPD_NOTICE",notice:{show:t,type:e,text:a}}}var st=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).close=function(){a.props.dispatchNotice(!1)},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement(rt.a,{open:this.props.show,autoHideDuration:6e3,onClose:this.close},o.a.createElement(it.a,{variant:"filled",severity:this.props.type,onClose:this.close},this.props.text))}}]),e}(o.a.Component),lt=Object(m.b)((function(t){return{show:t.application.notice.show,type:t.application.notice.type,text:t.application.notice.text}}),(function(t){return{dispatchNotice:function(e){return t(ct(e))}}}))(st);var ut=Object(G.a)(J.palette.stop),pt=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).changeActivity=function(t){a.setState({activity:t.target.value})},a.changeComment=function(t){a.setState({comment:t.target.value})},a.switchPlay=function(t){a.setState({play:t||!a.state.play})},a.startTimer=function(){a.switchPlay(!0),a.props.dispatchNotSavedData(!0)},a.stopTimer=function(t){var e=(t/36e5).toFixed(2);a.switchPlay(!1);var n=ot(a.props.id,e,a.state.activity,a.state.comment);a.feedback(n),a.props.dispatchNotSavedData(!1)},a.feedback=function(t){t.then((function(t){t?a.props.dispatchNotice(!0,"success","\u0412\u0440\u0435\u043c\u044f \u0443\u0447\u0442\u0435\u043d\u043e"):a.props.dispatchNotice(!0,"error","\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445")}))},a.state={play:!1,seconds:0,minutes:0,hours:0,timer:0,activity:Object.keys(a.props.activities)[0],comment:""},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentWillUnmount",value:function(){this.props.dispatchNotSavedData(!1)}},{key:"render",value:function(){var t=this,e=this.props.classes,a=Object.keys(this.props.activities),n=Object.values(this.props.activities),i=a.map((function(t,e){return o.a.createElement(Y.a,{key:e,value:t},n[e])}));return o.a.createElement(X.a,{className:e.root},o.a.createElement(tt.a,{expandIcon:o.a.createElement(W.a,null)},o.a.createElement(K.a,{container:!0,spacing:2},o.a.createElement(K.a,{item:!0,xs:12,sm:8,md:9},o.a.createElement(f.a,{color:"textSecondary",variant:"caption"},this.props.id," ",this.props.project),o.a.createElement(f.a,{variant:"body2",gutterBottom:!0,component:"h3",color:"inherit"},this.props.subject)),o.a.createElement(K.a,{container:!0,item:!0,xs:12,sm:4,md:3,className:"timer-wp",alignItems:"center",justify:"space-between"},o.a.createElement(nt.a,{startImmediately:!1,formatValue:function(t){return"".concat(t<10?"0".concat(t):t)},onStart:function(){return t.startTimer()}},(function(e){var a=e.start,n=(e.resume,e.pause,e.stop),i=e.reset,r=(e.getTimerState,e.getTime);return o.a.createElement(o.a.Fragment,null,o.a.createElement(Z.a,{theme:t.state.play?ut:J},o.a.createElement(v.a,{disabled:!(!t.props.notSavedData||t.state.play)||null,className:"extends-panel__btn",theme:t.state.play?ut:J,variant:"outlined",size:"small",color:"secondary",onClick:t.state.play?function(e){e.stopPropagation(),n(),t.stopTimer(r()),i()}:function(t){t.stopPropagation(),a()}},t.state.play?o.a.createElement(R.a,{color:"secondary"}):o.a.createElement(V.a,{color:t.props.notSavedData&&!t.state.play?"primary":"secondary"})),o.a.createElement(E.a,{m:1}),o.a.createElement(nt.a.Hours,null),":",o.a.createElement(nt.a.Minutes,null),":",o.a.createElement(nt.a.Seconds,null)))}))))),o.a.createElement(et.a,null,o.a.createElement(K.a,{container:!0,spacing:2},o.a.createElement(K.a,{item:!0,xs:12,sm:6,md:8},o.a.createElement(T.a,{variant:"outlined",multiline:!0,className:"textarea",fullWidth:!0,value:this.state.comment,onChange:this.changeComment,inputProps:{maxLength:255}})),o.a.createElement(K.a,{item:!0,xs:12,sm:6,md:4},o.a.createElement(E.a,{mb:1},o.a.createElement($.a,{className:e.activity},o.a.createElement(q.a,{value:this.state.activity,onChange:this.changeActivity},i))),this.props.priority&&o.a.createElement(H.a,{variant:"outlined",size:"small",label:"".concat(this.props.priority)}),this.props.estimated_hours&&o.a.createElement(H.a,{variant:"outlined",size:"small",label:"\u041f\u043b\u0430\u043d: ".concat(this.props.estimated_hours,"\u0447")}),this.props.spent_hours>0&&o.a.createElement(H.a,{variant:"outlined",size:"small",label:"\u0423\u0447\u0442\u0435\u043d\u043e: ".concat(this.props.spent_hours.toFixed(2),"\u0447")}),this.props.start_date&&this.props.due_date&&o.a.createElement(H.a,{variant:"outlined",size:"small",label:"c ".concat(this.props.start_date," \u0434\u043e ").concat(this.props.due_date)})))))}}]),e}(o.a.Component),mt=Object(m.b)((function(t){return{show:t.application.notice.show,type:t.application.notice.type,text:t.application.notice.text,notSavedData:t.application.notSavedData}}),(function(t){return{dispatchNotice:function(e,a,n){return t(ct(e,a,n))},dispatchNotSavedData:function(e){return t(function(t){return{type:"UPD_NOT_SAVED_DATA",value:t}}(e))}}}))(Object(Q.a)((function(t){return{root:{background:J.palette.primary.light},activity:{width:"100%"}}}))(pt));var ht=a(238),dt=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).showCurrentComponent=function(){var t=z();a.setTasks(t);var e=B();a.setActivities(e)},a.setTasks=function(t){t.then((function(t){if(t){var e=t.data.issues;a.props.dispatchTasks(e),a.setLoaded()}else console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 setTasks. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443")}))},a.setActivities=function(t){t.then((function(t){if(t){var e=t.data.time_entry_activities,n={};e.forEach((function(t){return n[t.id]=t.name})),a.props.dispatchActivities(n)}}))},a.setLoaded=function(){a.setState({isLoading:!1})},a.state={isLoading:!0},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.showCurrentComponent()}},{key:"render",value:function(){var t=this,e=Object.values(this.props.tasks).map((function(e,a){return o.a.createElement("li",{key:a,className:"task"},o.a.createElement(mt,{id:e.id,subject:e.subject,priority:e.priority.name,project:e.project.name,status:e.status.name,start_date:e.start_date,due_date:e.due_date,estimated_hours:e.estimated_hours,spent_hours:e.spent_hours,activities:t.props.activities}))})),a=o.a.createElement(E.a,{component:"li",my:3},o.a.createElement(ht.a,{height:40}),o.a.createElement(ht.a,{height:40}),o.a.createElement(ht.a,{height:40}));return o.a.createElement("ul",{className:"clear-list tasks-list"},this.state.isLoading?o.a.createElement(o.a.Fragment,null,a,a,a):e)}}]),e}(o.a.Component),ft=Object(m.b)((function(t){return{tasks:t.tasks,activities:t.activities}}),(function(t){return{dispatchTasks:function(e){return t(function(t){return{type:"UPD_TASKS",value:t}}(e))},dispatchActivities:function(e){return t(function(t){return{type:"UPD_ACTIVITIES",value:t}}(e))}}}))(dt),vt=a(8),bt=a(84),gt=(a(166),a(239)),yt=function(t){function e(t){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).call(this,t))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement(E.a,{className:"pie-chart"},o.a.createElement(bt.a,{value:this.props.percent,styles:Object(bt.b)({textColor:"#F6F6FF",pathColor:"#59D366",trailColor:"#29333A"})},o.a.createElement(f.a,{color:"textPrimary",variant:"caption"},this.props.text),o.a.createElement(f.a,{variant:"h4",color:"textSecondary"},this.props.isLoading?o.a.createElement(gt.a,{color:"secondary",size:20}):this.props.hours)),o.a.createElement(E.a,{m:3},o.a.createElement(f.a,{variant:"h6",color:"textPrimary"},this.props.percent,"%")))}}]),e}(o.a.Component);var Et=function(t){var e=localStorage.getItem("url"),a=localStorage.getItem("api");return x.a.get("".concat(e,"/time_entries.json?key=").concat(a,"&").concat(t,"&user_id=me&=hours&limit=100")).then((function(t){return t})).catch((function(t){console.log("getStatistics => error \n",t)}))},jt=new Date,Ot=jt.getFullYear(),wt=jt.getMonth()+1>=10?jt.getMonth()+1:"0".concat(jt.getMonth()+1),kt=jt.getDate()>=0?jt.getDate():"0".concat(jt.getDate()),St=0===jt.getDay()?6:jt.getDay()-1,_t=+kt-+St>=10?+kt-+St:"0".concat(+kt-+St),Dt="".concat(Ot,"-").concat(wt,"-").concat(kt),xt="".concat(Ot,"-").concat(wt,"-").concat(_t),At="from=".concat(Dt,"&to=").concat(Dt),It="from=".concat(xt,"&to=").concat(Dt),Ct=function(){var t="01",e=[];if(kt>7){var a="0".concat(7),n="from=".concat(Ot,"-").concat(wt,"-").concat(t,"&to=").concat(Ot,"-").concat(wt,"-").concat(a);t="0".concat(8),e.push(n)}if(kt>14){var o="from=".concat(Ot,"-").concat(wt,"-").concat(t,"&to=").concat(Ot,"-").concat(wt,"-").concat(14);t=15,e.push(o)}if(kt>21){var i="from=".concat(Ot,"-").concat(wt,"-").concat(t,"&to=").concat(Ot,"-").concat(wt,"-").concat(21);t=22,e.push(i)}var r="from=".concat(Ot,"-").concat(wt,"-").concat(t,"&to=").concat(Ot,"-").concat(wt,"-").concat(kt);return e.push(r),e}();var Lt=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).showCurrentComponent=function(t,e,n){var o=Et(t);a.setStatistics(e,o,n)},a.setStatistics=function(t,e,n){e.then((function(e){if(e){var o=e.data.time_entries,i=0;o.forEach((function(t){return i+=t.hours})),i=+i.toFixed(2),"month"===t?a.props.dispatchStatistics(t,+(i+a.props.month).toFixed(2)):a.props.dispatchStatistics(t,i),n&&a.setLoaded(n)}else alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 setStatistics. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443")}))},a.setLoaded=function(t){a.setState(Object(vt.a)({},t,!1))},a.state={isLoadingDay:!0,isLoadingWeek:!0,isLoadingMonth:!0},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.props.dispatchStatistics("month",0),this.showCurrentComponent(At,"day","isLoadingDay"),this.showCurrentComponent(It,"week","isLoadingWeek"),Ct.forEach((function(e,a){a===Ct.length-1?t.showCurrentComponent(e,"month","isLoadingMonth"):t.showCurrentComponent(e,"month")}))}},{key:"render",value:function(){var t=(100*this.props.day/8).toFixed(2),e=(100*this.props.week/40).toFixed(2),a=(100*this.props.month/160).toFixed(2);return o.a.createElement(K.a,{container:!0,justify:"center",alignItems:"center"},o.a.createElement(K.a,{item:!0,xs:12,sm:6,md:4},o.a.createElement(yt,{percent:t,text:"\u0417\u0430 \u0434\u0435\u043d\u044c",hours:this.props.day,isLoading:this.state.isLoadingDay})),o.a.createElement(K.a,{item:!0,xs:12,sm:6,md:4},o.a.createElement(yt,{percent:e,text:"\u0417\u0430 \u043d\u0435\u0434\u0435\u043b\u044e",hours:this.props.week,isLoading:this.state.isLoadingWeek})),o.a.createElement(K.a,{item:!0,xs:12,sm:6,md:4},o.a.createElement(yt,{percent:a,text:"\u0417\u0430 \u043c\u0435\u0441\u044f\u0446",hours:this.props.month,isLoading:this.state.isLoadingMonth})))}}]),e}(o.a.Component),Mt=Object(m.b)((function(t){return{day:t.statistics.day,week:t.statistics.week,month:t.statistics.month}}),(function(t){return{dispatchStatistics:function(e,a){return t(function(t,e){return{type:"UPD_STATISTICS",name:t,value:e}}(e,a))}}}))(Lt),Tt=a(46);function Ut(t,e,a){return{type:"UPD_MODAL",modal:{show:t,title:e,text:a}}}var Ft=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement(E.a,{bgcolor:"primary.dark",className:"preloader"},o.a.createElement(gt.a,{color:"secondary",size:100}))}}]),e}(o.a.Component),Nt=a(240),Pt=a(244),zt=a(242),Bt=a(243),Wt=a(241),Rt=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).close=function(){a.props.dispatchModal(!1)},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement(Nt.a,{open:this.props.show,onClose:this.close,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},this.props.title&&o.a.createElement(Wt.a,null,this.props.title),this.props.text&&o.a.createElement(zt.a,null,o.a.createElement(Bt.a,null,this.props.text)),o.a.createElement(Pt.a,null,o.a.createElement(v.a,{onClick:this.close,color:"secondary",autoFocus:!0},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c")))}}]),e}(o.a.Component),Vt=Object(m.b)((function(t){return{show:t.application.modal.show,title:t.application.modal.title,text:t.application.modal.text}}),(function(t){return{dispatchModal:function(e,a,n){return t(Ut(e,a,n))}}}))(Rt),Ht=a(253),Kt=a(230),Gt=a(170),Jt=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).closeDrawer=function(){a.props.dispatchMobileMenu(!1)},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement(Ht.a,{anchor:"left",open:this.props.showMobileMenu,onClose:this.closeDrawer},o.a.createElement(Kt.a,null,o.a.createElement(Gt.a,null,o.a.createElement(w.b,{to:"/tasks",className:"clear-link-style fullwidth"},o.a.createElement(v.a,{color:"inherit",fullWidth:!0,onClick:this.closeDrawer},"\u0417\u0430\u0434\u0430\u0447\u0438"))),o.a.createElement(Gt.a,null,o.a.createElement(w.b,{to:"/statistics",className:"clear-link-style fullwidth"},o.a.createElement(v.a,{color:"inherit",fullWidth:!0,onClick:this.closeDrawer},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430")))))}}]),e}(o.a.Component),Zt=Object(m.b)((function(t){return{showMobileMenu:t.application.showMobileMenu}}),(function(t){return{dispatchMobileMenu:function(e){return t(O(e))}}}))(Jt),Yt=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).handleWindowBeforeUnload=function(t){a.props.notSavedData&&(t.preventDefault(),t.returnValue=!0)},a.setAuthorization=function(t){t.then((function(t){if(t){a.props.dispatchAuthorization(!0);var e=localStorage.getItem("login");a.props.dispatchLogin(e),a.setState({isLoading:!1})}else alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438")}))},a.toggleDrawer=function(t,e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&a.setState({showDrawer:e})}},a.state={isLoading:!0,showDrawer:!1},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("url"),e=localStorage.getItem("api");if(t&&e){var a=A("api",t,e);this.setAuthorization(a)}else this.setState({isLoading:!1});window.addEventListener("beforeunload",this.handleWindowBeforeUnload)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.handleWindowBeforeUnload)}},{key:"render",value:function(){var t=this.props.authorized;return o.a.createElement(Z.a,{theme:J},o.a.createElement(E.a,{className:"App",bgcolor:"primary.main"},this.state.isLoading&&o.a.createElement(Ft,null),t&&o.a.createElement(_,null),o.a.createElement(E.a,{component:"main",className:"main-content"},t?o.a.createElement(Tt.d,null,o.a.createElement(Tt.b,{exact:!0,path:"/"},o.a.createElement(ft,null)),o.a.createElement(Tt.b,{exact:!0,path:"/tasks"},o.a.createElement(ft,null)),o.a.createElement(Tt.b,{exact:!0,path:"/statistics"},o.a.createElement(Mt,null)),o.a.createElement(Tt.b,{exact:!0,path:"/login"},o.a.createElement(P,null))):o.a.createElement(P,null))),o.a.createElement(lt,null),o.a.createElement(Vt,null),o.a.createElement(Zt,null),o.a.createElement(Tt.a,{when:this.props.notSavedData,message:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b. \u041d\u0443\u0436\u043d\u043e \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0442\u0430\u0439\u043c\u0435\u0440, \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 Redmine."}))}}]),e}(o.a.Component),$t=Object(m.b)((function(t){return{authorized:t.authorized,notSavedData:t.application.notSavedData}}),(function(t){return{dispatchAuthorization:function(e){return t(C(e))},dispatchLogin:function(e){return t({type:"UPD_LOGIN",login:e})},dispatchModal:function(e,a,n){return t(Ut(e,a,n))}}}))(Yt),qt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Qt(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var a=t.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var Xt={authorized:!1,user:{userLogin:"",api_key:"",redmineUrl:""},tasks:{},activities:{},statistics:{day:0,week:0,month:0},application:{notSavedData:!1,showMobileMenu:!1,modal:{show:!1,title:"",text:""},notice:{show:!1,type:"",text:""}}},te=a(67),ee=a(24),ae=Object(te.b)((function(t,e){switch(e.type){case"UPD_APPLICATION_STATUS":return Object.assign({},t,{application:Object(ee.a)({},t.application,{states:Object(ee.a)({},t.application.states,Object(vt.a)({},e.name,void 0!==e.value?e.value:!t.application.states[e.name]))})});case"UPD_TASKS":return Object.assign({},t,Object(ee.a)({},t,{tasks:e.value}));case"UPD_NOTICE":return Object.assign({},t,Object(ee.a)({},t,{application:Object(ee.a)({},t.application,{notice:{show:void 0!==e.notice.show&&e.notice.show,type:void 0!==e.notice.type?e.notice.type:t.application.notice.type,text:void 0!==e.notice.text?e.notice.text:t.application.notice.text}})}));case"UPD_MODAL":return Object.assign({},t,Object(ee.a)({},t,{application:Object(ee.a)({},t.application,{modal:{show:void 0!==e.modal.show&&e.modal.show,title:void 0!==e.modal.title?e.modal.title:t.application.modal.title,text:void 0!==e.modal.text?e.modal.text:t.application.modal.text}})}));case"UPD_NOT_SAVED_DATA":return Object.assign({},t,Object(ee.a)({},t,{application:Object(ee.a)({},t.application,{notSavedData:void 0!==e.value?e.value:!t.application.value})}));case"UPD_MOBILE_MENU":return Object.assign({},t,Object(ee.a)({},t,{application:Object(ee.a)({},t.application,{showMobileMenu:void 0!==e.value?e.value:!t.application.showMobileMenu})}));case"UPD_LOGIN":return Object.assign({},t,Object(ee.a)({},t,{user:Object(ee.a)({},t.user,{userLogin:e.login})}));case"UPD_STATISTICS":return Object.assign({},t,Object(ee.a)({},t,{statistics:Object(ee.a)({},t.statistics,Object(vt.a)({},e.name,void 0!==e.value?e.value:0))}));case"UPD_AUTHORIZED":return Object.assign({},t,{authorized:void 0!==e.authorized?e.authorized:!t.authorized});case"UPD_ACTIVITIES":return Object.assign({},t,{activities:e.value});case"UPD_USER_DATA":return Object.assign({},t,Object(ee.a)({},t,{user:{userLogin:e.login?e.login:"",api_key:e.key?e.key:"",redmineUrl:e.url?e.url:""}}));default:return t}}),Xt),ne=Xt;r.a.render(o.a.createElement(m.a,{store:ae},o.a.createElement(w.a,null,o.a.createElement($t,{data:ne}))),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/redmine_time_tracker/build",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/redmine_time_tracker/build","/service-worker.js");qt?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):Qt(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Qt(e,t)}))}}()}},[[132,1,2]]]);
//# sourceMappingURL=main.94d522e0.chunk.js.map