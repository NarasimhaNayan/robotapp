(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(6),c=t.n(o);t(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(13);var i=t(1),s=t(2),l=t(4),m=t(3),u=function(e){e.searchfield;var a=e.searchChange;return r.a.createElement("div",{className:"pa3 "},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue shadow-5",type:"text",placeholder:"robot name",onChange:a}))},h=(t(14),function(e){e.robots;throw new Error("Noooooooo!!!")}),d=[{id:1,name:"Narasimha",username:"Narasimha",email:"narasimha@gmail.com"},{id:2,name:"Nayan",username:"NNayan",email:"nayan@gmail.com"},{id:3,name:"Bhushan",username:"Bhu",email:"bhu@gmail.com"},{id:4,name:"Mr.Perfect",username:"Naga",email:"naga@gmail.com"},{id:5,name:"Mrs..Perfect",username:"Vimala",email:"vimss@gmail.com"},{id:6,name:"My support",username:"Kruuu",email:"kruthi@gmail.com"}],f=(t(15),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"}},e.children)}),b=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={hasError:!1},n}return Object(s.a)(t,[{key:"componentDidCatch",value:function(e,a){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Error encountered"):this.props.children}}]),t}(n.Component),g=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:[],searchfield:""},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){e.json()})).then((function(a){e.setState({robots:d})}))}},{key:"render",value:function(){var e=this,a=this.state.robots.filter((function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===d.length?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(u,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(b,null,r.a.createElement(h,{robots:a}))))}}]),t}(r.a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.18a690ac.chunk.js.map