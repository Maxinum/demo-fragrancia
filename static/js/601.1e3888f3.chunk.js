"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[601],{4650:function(e,t,n){n.d(t,{Af:function(){return c},gT:function(){return u}});var a=n(4165),r=n(5861),s=n(568),u=(n(456),function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.DN.get("client/cities");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),c=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.y_.get("lead/all");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},4130:function(e,t,n){n.r(t);var a=n(9439),r=n(2791),s=n(3904),u=n(2558),c=n(837),i=n(32),l=n(4650),f=n(184),o=(0,i.Pi)((function(){var e=r.useContext(c._),t=e.kanban,n=e.lead,i=e.client,o=e.user,d=r.useState(t.hunterData),h=(0,a.Z)(d,2),p=h[0],m=h[1],v=r.useState({city:{name:"",values:[]},manager:{name:"",values:[]},channel:{name:"",values:[]}}),x=(0,a.Z)(v,2),g=x[0],Z=x[1];return r.useEffect((function(){(0,l.Af)().then((function(e){m(e),t.sethunterData(e.leads),t.setMaxId(e.maxId),n.setLogs(e.logs);var a=e;delete a.leads,delete a.maxId,delete a.logs,Z(a)}))}),[]),r.useEffect((function(){}),[p]),r.useEffect((function(){n.setWarmth(g.warmth),n.setNeeds(g.needs),n.setFields(g.fields),n.setChannel(g.channel),n.setObjection(g.objection),o.setManagers(g.manager),i.setCities(g.city)}),[g]),(0,f.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,f.jsx)(s.Z,{button:"Add",select:g}),(0,f.jsx)(u.Z,{data:t.hunterData,format:t.format})]})}));t.default=o}}]);
//# sourceMappingURL=601.1e3888f3.chunk.js.map