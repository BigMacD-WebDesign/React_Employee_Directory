(this.webpackJsonpreact_employee_directory=this.webpackJsonpreact_employee_directory||[]).push([[0],{48:function(e,t,a){e.exports=a(97)},53:function(e,t,a){},54:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(7),o=a.n(l),s=(a(53),a(54),a(37)),c=a(38),i=a(47),m=a(46),u=a(39),d=a.n(u),p=a(45),h=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={employeeRecords:[]},e.componentDidMount=function(){d.a.get("https://randomuser.me/api/?results=200&nat=us").then((function(t){for(var a=[],n=0;n<t.data.results.length;n++){var l={picture:r.a.createElement("img",{alt:"".concat(t.data.results[n].name.first," ").concat(t.data.results[n].name.last),src:"".concat(t.data.results[n].picture.medium)}),firstName:t.data.results[n].name.first,lastName:t.data.results[n].name.last,email:t.data.results[n].email,phoneNum:t.data.results[n].cell};a.push(l),console.log(a)}e.setState({employeeRecords:a})}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e={columns:[{label:"Image",field:"picture"},{label:"First Name",field:"firstName",sort:"asc",width:150},{label:"Last Name",field:"lastName",sort:"asc",width:150},{label:"E-Mail",field:"email",sort:"asc",width:150},{label:"Phone Number",field:"phoneNum",sort:"asc",width:150}],rows:this.state.employeeRecords};return r.a.createElement("div",null,r.a.createElement(p.c,{bordered:!0,responsive:!0,striped:!0,data:e}))}}]),a}(n.Component);a(94),a(95),a(96);var f=function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-primary"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-2 col-lg-12 col-sm-12 text-white"},"BigMac Web Design, Inc")))};var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement("br",null),r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.fc924322.chunk.js.map