webpackJsonp([0],[,,function(t,e,n){"use strict";var o=n(1),r=n(28),s=n(18),a=n.n(s),i=n(17),u=n.n(i),c=n(20),l=n.n(c),m=n(21),p=n.n(m),d=n(19),v=n.n(d);o.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"login",component:p.a},{path:"/home",name:"home",component:v.a,children:[{path:"",component:a.a},{path:"goods",name:"goods",component:a.a},{path:"comment",name:"comment",component:u.a},{path:"seller",name:"seller",component:l.a}]}]})},function(t,e,n){function o(t){n(14)}var r=n(0)(n(5),n(25),o,null,null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),s=n.n(r),a=n(2);o.a.config.productionTip=!1,new o.a({el:"#app",router:a.a,template:"<App/>",components:{App:s.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"comment",data:function(){return{msg:"Welcome to the two page comment!"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"goods",data:function(){return{msg:"Welcome to the first page goods"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"seller",data:function(){return{msg:"Welcome to the third page seller"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"login",data:function(){return{inputtext:{name:"",mypassword:""}}},methods:{onSubmit:function(){return""===this.inputtext.name?void alert("用户名不能为空"):""===this.inputtext.mypassword?void alert("密码不能为空"):(console.log("click on submit : name="+this.inputtext.name+"  pass="+this.inputtext.mypassword),void this.$router.push({name:"home"}))}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){function o(t){n(15)}var r=n(0)(n(6),n(26),o,"data-v-737f7219",null);t.exports=r.exports},function(t,e,n){function o(t){n(11)}var r=n(0)(n(7),n(22),o,"data-v-060f8810",null);t.exports=r.exports},function(t,e,n){function o(t){n(12)}var r=n(0)(n(8),n(23),o,null,null);t.exports=r.exports},function(t,e,n){function o(t){n(16)}var r=n(0)(n(9),n(27),o,"data-v-80231496",null);t.exports=r.exports},function(t,e,n){function o(t){n(13)}var r=n(0)(n(10),n(24),o,null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods"},[n("h1",[t._v(t._s(t.msg))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"homediv"}},[t._m(0),t._v(" "),n("div",{attrs:{id:"nav"}},[n("div",[n("router-link",{attrs:{to:"/home/goods"}},[t._v("个人")])],1),t._v(" "),n("div",[n("router-link",{attrs:{to:"/home/comment"}},[t._v("控制台")])],1),t._v(" "),n("div",[n("router-link",{attrs:{to:"/home/seller"}},[t._v("three")])],1)]),t._v(" "),n("div",{attrs:{id:"section"}},[n("router-view")],1),t._v(" "),n("div",{attrs:{id:"footer"}},[t._v("\n\t\t  Footer in demo  \n\t  ")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("h1",[t._v("Manage")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[t._m(0),t._v(" "),n("div",{staticClass:"form"},[n("center",[n("form",{on:{submit:function(e){e.preventDefault(),t.onSubmit(e)}}},[t._v("\n      \t  姓名： "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputtext.name,expression:"inputtext.name"}],attrs:{type:"text",name:"username"},domProps:{value:t.inputtext.name},on:{input:function(e){e.target.composing||(t.inputtext.name=e.target.value)}}}),t._v(" "),n("br"),t._v("\n      \t  密码： "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputtext.mypassword,expression:"inputtext.mypassword"}],attrs:{type:"password",name:"mypwd"},domProps:{value:t.inputtext.mypassword},on:{input:function(e){e.target.composing||(t.inputtext.mypassword=e.target.value)}}}),t._v(" "),n("br"),t._v(" "),n("input",{attrs:{type:"submit",value:"登录"}})]),t._v(" "),n("div",{staticClass:"tips"},[t._v("账号密码随便填")])])],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"title"},[t._v("系统登录")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment"},[n("h1",[t._v(t._s(t.msg))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"seller"},[n("h1",[t._v(t._s(t.msg))])])},staticRenderFns:[]}}],[4]);
//# sourceMappingURL=app.9ed228df5a2794b8ed97.js.map