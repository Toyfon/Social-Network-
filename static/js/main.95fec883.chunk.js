(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{107:function(e,t,n){e.exports={header:"Header_header__2bexz",login_block:"Header_login_block__1jcaO"}},108:function(e,t,n){e.exports={form:"LoginForm_form__35V_T",errMessage:"LoginForm_errMessage__1GLZc"}},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return h})),n.d(t,"f",(function(){return O})),n.d(t,"e",(function(){return m}));var r=n(15),a=n.n(r),s=n(20),i=n(7),c=n(8),o=n(37),u="social_network/profile/ADD-POST",l="social_network/profile/SET_USER_PROFILE",d="social_network/profile/SET_STATUS",f="social_network/profile/SAVE_PHOTO",j={posts:[],profile:null,status:""},p=function(e){return{type:u,newPostText:e}},b=function(e){return{type:d,status:e}},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getStatus(e);case 2:r=t.sent,n(b(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:f,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likesCount:0};return Object(c.a)(Object(c.a)({},e),{},{posts:[n].concat(Object(i.a)(e.posts))});case l:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case d:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case f:return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:t.photos})});default:return e}}},116:function(e,t,n){"use strict";t.a=n.p+"static/media/user.9dc92b0a.png"},148:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(7),a=n(8),s={dialogs:[{id:1,name:"Vova"},{id:2,name:"Tolya"},{id:3,name:"Petya"},{id:4,name:"Kostya"},{id:5,name:"Valya"},{id:6,name:"Sveta"},{id:7,name:"Tanya"}],messages:[{id:1,message:"HI"},{id:2,message:"Yo"},{id:3,message:"Ho.w are you"},{id:4,message:"Yo"},{id:5,message:"Yo"},{id:6,message:"Yo"},{id:7,message:"\u0417\u0434\u0430\u0440\u043e\u0432\u0430"}]},i=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:8,message:n}])});default:return e}}},151:function(e,t,n){e.exports={avatar:"users_avatar__RyyWZ",selectedStyle:"users_selectedStyle__1z71x",pagesNumber:"users_pagesNumber__3KvM2"}},181:function(e,t,n){},30:function(e,t,n){e.exports={nav:"Navbar_nav__2ev7v",item:"Navbar_item__If-GM",activeLink:"Navbar_activeLink__3dvxV",settings:"Navbar_settings__YS73a"}},309:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,358)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),s(e),i(e)}))},i=n(43),c=n.n(i),o=n(17),u=n(18),l=n(23),d=n(24),f=(n(181),n(21)),j=n(30),p=n.n(j),b=n(28),g=n(1),h=function(){return Object(g.jsxs)("nav",{className:p.a.nav,children:[Object(g.jsx)("div",{className:p.a.item,children:Object(g.jsx)(b.b,{to:"/profile",activeClassName:p.a.activeLink,children:"Profile"})}),Object(g.jsx)("div",{className:p.a.item,children:Object(g.jsx)(b.b,{to:"/dialogs",activeClassName:p.a.activeLink,children:"Messages"})}),Object(g.jsx)("div",{className:p.a.item,children:Object(g.jsx)(b.b,{to:"/news",activeClassName:p.a.activeLink,children:"News"})}),Object(g.jsx)("div",{className:p.a.item,children:Object(g.jsx)(b.b,{to:"/friends",activeClassName:p.a.activeLink,children:"Friends"})}),Object(g.jsx)("div",{className:p.a.item,children:Object(g.jsx)(b.b,{to:"/music",activeClassName:p.a.activeLink,children:"Music"})}),Object(g.jsx)("div",{className:p.a.item,children:Object(g.jsx)(b.b,{to:"/users",activeClassName:p.a.activeLink,children:"Users"})}),Object(g.jsxs)("div",{className:p.a.settings,children:[Object(g.jsx)("img",{src:"https://img.icons8.com/offices/30/000000/settings.png",alt:""}),Object(g.jsx)(b.b,{to:"/settings",activeClassName:p.a.activeLink,children:"Settings"})]})]})},O=function(){return Object(g.jsx)("div",{children:"News"})},m=function(){return Object(g.jsx)("div",{children:"Music"})},v=function(){return Object(g.jsx)("div",{children:"Settings"})},x=n(38),w=n(50),_=n(151),y=n.n(_),P=n(116),S=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,a=e.unfollow;Object(w.a)(e,["user","followingInProgress","follow","unfollow"]);return Object(g.jsxs)("div",{children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("div",{className:y.a.avatar,children:Object(g.jsx)(b.b,{to:"/profile/"+t.id,children:Object(g.jsx)("img",{src:null!==t.photos.small?t.photos.small:P.a,alt:""})})}),Object(g.jsx)("div",{children:t.followed?Object(g.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(g.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Follow"})})]}),Object(g.jsxs)("span",{children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("div",{children:t.name}),Object(g.jsx)("div",{children:t.status})]}),Object(g.jsxs)("span",{children:[Object(g.jsx)("div",{children:"u.location.country"}),Object(g.jsx)("div",{children:"u.location.city"})]})]})]},t.id)},C=n(69),I=function(e){return{}},E=a.a.memo((function(e){var t=e.onFilterChanged;Object(w.a)(e,["onFilterChanged"]);return Object(g.jsx)("div",{children:Object(g.jsx)(C.c,{initialValues:{term:"",friend:"null"},validate:I,onSubmit:function(e,n){var r=n.setSubmitting,a={term:e.term,friend:"null"===e.friend?null:"true"===e.friend};t(a),r(!1)},children:function(e){var t=e.isSubmitting;return Object(g.jsxs)(C.b,{children:[Object(g.jsx)(C.a,{type:"text",name:"term"}),Object(g.jsxs)(C.a,{name:"friend",as:"select",children:[Object(g.jsx)("option",{value:"null",children:"All"}),Object(g.jsx)("option",{value:"true",children:"Only followed"}),Object(g.jsx)("option",{value:"false",children:"Only unfollowed"})]}),Object(g.jsx)("button",{type:"submit",disabled:t,children:"Search"})]})}})})})),k=n(4),N=n(10),T=n(89),F=n.n(T),L=n(156),A=n.n(L),U=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,s=e.onPageChanged,i=e.portionSize,c=Math.ceil(t/n),o=[],u=1;u<=c;u++)o.push(u);var l=Math.ceil(c/i),d=Object(r.useState)(1),f=Object(N.a)(d,2),j=f[0],p=f[1],b=(j-1)*i+1,h=j*i;return Object(g.jsxs)("div",{className:F.a.paginator,children:[j>1&&Object(g.jsx)("button",{onClick:function(){p(j-1)},children:"PREV"}),o.filter((function(e){return e>=b&&e<=h})).map((function(e){return Object(g.jsx)("span",{className:A()(Object(k.a)({},F.a.selectedPage,a===e),F.a.pageNumber),onClick:function(){s(e)},children:e},e)})),l>j&&Object(g.jsx)("button",{onClick:function(){p(j+1)},children:"NEXT"})]})},M=function(e){var t=e.users,n=e.follow,r=e.unfollow,a=e.totalItemsCount,s=e.pageSize,i=e.currentPage,c=e.onPageChanged,o=e.followingInProgress,u=e.onFilterChanged;Object(w.a)(e,["users","follow","unfollow","totalItemsCount","pageSize","currentPage","onPageChanged","followingInProgress","onFilterChanged"]);return Object(g.jsxs)("div",{children:[Object(g.jsx)(E,{onFilterChanged:u}),Object(g.jsx)("div",{children:Object(g.jsx)(U,{pageSize:s,currentPage:i,onPageChanged:c,totalItemsCount:a,portionSize:10})}),t.map((function(e){return Object(g.jsx)(S,{user:e,followingInProgress:o,follow:n,unfollow:r},e.id)}))]})},z=n(15),G=n.n(z),R=n(20),D=n(7),H=n(8),V=n(37),B="UserPage/FOLLOW",Y="UserPage/UNFOLLOW",W="UserPage/SET_USERS",q="UserPage/SET_CURRENT_PAGE",K="UserPage/SET_TOTAL_USER_COUNT",X="UserPage/TOGGLE_IS_FETCHING",Z="UserPage/TOGGLE_IS_FOLLOWING_PROGRESS",J="UserPage/SET_FILTER",Q={users:[],pageSize:10,totalItemsCount:100,currentPage:1,isFetching:!1,followingInProgress:[],filter:{term:"",friend:null}},$=function(e){return{type:B,userId:e}},ee=function(e){return{type:Y,userId:e}},te=function(e){return{type:q,currentPage:e}},ne=function(e){return{type:X,isFetching:e}},re=function(e,t){return{type:Z,isFetching:e,userId:t}},ae=function(e){return{type:J,payload:{filter:e}}},se=function(){var e=Object(R.a)(G.a.mark((function e(t,n,r,a){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(re(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n)),t(re(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(H.a)(Object(H.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(H.a)(Object(H.a)({},e),{},{followed:!0}):e}))});case Y:return Object(H.a)(Object(H.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(H.a)(Object(H.a)({},e),{},{followed:!1}):e}))});case W:return Object(H.a)(Object(H.a)({},e),{},{users:t.users});case q:return Object(H.a)(Object(H.a)({},e),{},{currentPage:t.currentPage});case K:return Object(H.a)(Object(H.a)({},e),{},{totalItemsCount:t.count});case X:return Object(H.a)(Object(H.a)({},e),{},{isFetching:t.isFetching});case Z:return Object(H.a)(Object(H.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(D.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});case J:return Object(H.a)(Object(H.a)({},e),{},{filter:t.payload.filter});default:return e}},ce=n(52),oe=n(46),ue=function(e){return e.usersPage.users},le=function(e){return e.usersPage.pageSize},de=function(e){return e.usersPage.totalItemsCount},fe=function(e){return e.usersPage.currentPage},je=function(e){return e.usersPage.isFetching},pe=function(e){return e.usersPage.followingInProgress},be=function(e){return e.usersPage.filter},ge=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props,r=n.pageSize,a=n.filter;e.props.getUsers(t,r,a)},e.onFilterChanged=function(t){var n=e.props.pageSize;e.props.getUsers(1,n,t)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize,r=e.filter;this.props.getUsers(t,n,r)}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[this.props.isFetching?Object(g.jsx)(ce.a,{}):null,Object(g.jsx)(M,{totalItemsCount:this.props.totalItemsCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,onFilterChanged:this.onFilterChanged,follow:this.props.follow,unfollow:this.props.unfollow,users:this.props.users,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),he=Object(oe.c)(Object(x.b)((function(e){return{users:ue(e),pageSize:le(e),totalItemsCount:de(e),currentPage:fe(e),isFetching:je(e),followingInProgress:pe(e),filter:be(e)}}),{follow:function(e){return function(){var t=Object(R.a)(G.a.mark((function t(n){return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,se(n,e,V.b.follow,$);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(R.a)(G.a.mark((function t(n){return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,se(n,e,V.b.unfollow,ee);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:te,toggleFollowingProgress:re,getUsers:function(e,t,n){return function(){var r=Object(R.a)(G.a.mark((function r(a){var s;return G.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(te(e)),a(ne(!0)),a(ae(n)),r.next=5,V.d.getUsers(e,t,n.term,n.friend);case 5:s=r.sent,a(ne(!1)),a((c=s.items,{type:W,users:c})),a((i=s.totalCount,{type:K,count:i}));case 9:case"end":return r.stop()}var i,c}),r)})));return function(e){return r.apply(this,arguments)}}()}}))(ge),Oe=n(107),me=n.n(Oe),ve=function(e){var t=e.isAuth,n=e.login,r=e.logout;Object(w.a)(e,["isAuth","login","logout"]);return Object(g.jsx)("header",{className:me.a.header,children:Object(g.jsx)("div",{className:me.a.login_block,children:t?Object(g.jsxs)("div",{children:[n," - ",Object(g.jsx)("button",{onClick:r,children:"Log out"})]}):Object(g.jsx)(b.b,{to:"/login",children:"Login"})})})},xe={id:null,email:null,login:null,isAuth:!1,isFetching:!1,errorMessage:""},we=function(e,t,n,r){return{type:"SET_USER_DATA",payload:{id:e,email:t,login:n,isAuth:r}}},_e=function(e){return{type:"TOGGLE-IS-FETCHING",payload:{isFetching:e}}},ye=function(){return function(e){return e(_e(!0)),V.a.me().then((function(t){if(e(_e(!1)),0===t.data.resultCode){var n=t.data.data,r=n.id,a=n.email,s=n.login;e(we(r,a,s,!0))}}))}},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(H.a)(Object(H.a)({},e),t.payload);case"TOGGLE-IS-FETCHING":return Object(H.a)(Object(H.a)({},e),{},{isFetching:t.payload.isFetching});case"SHOW_DATA_MESSAGE":return Object(H.a)(Object(H.a)({},e),t.payload);default:return e}},Se=function(e){return e.auth.isAuth},Ce=function(e){return e.auth.login},Ie=function(e){return e.auth.isFetching},Ee=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[this.props.isFetching?Object(g.jsx)(ce.a,{}):null,Object(g.jsx)(ve,Object(H.a)(Object(H.a)({},this.props),{},{logout:this.props.logout}))]})}}]),n}(a.a.Component),ke=Object(x.b)((function(e){return{isAuth:Se(e),login:Ce(e),isFetching:Ie(e)}}),{logout:function(){return function(){var e=Object(R.a)(G.a.mark((function e(t){var n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(_e(!0)),e.next=3,V.a.logout();case 3:n=e.sent,t(_e(!1)),0===n.data.resultCode&&t(we(null,null,null,!1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ee),Ne=n(41),Te=n(344),Fe=n(347),Le=n(346),Ae=n(349),Ue=n(108),Me=n.n(Ue),ze=n(91),Ge=n(165),Re=n(343),De=ze.a({email:ze.b().required("Email is required").email("Enter a valid email"),password:ze.b().required("Password is required").min(8,"Password should be  min 8 characters length")}),He=a.a.memo((function(){var e=Object(x.d)((function(e){return e.auth.errorMessage})),t=Object(x.d)((function(e){return e.auth.isAuth})),n=Object(x.c)(),a=Object(r.useState)(""),s=Object(N.a)(a,2),i=s[0],c=s[1],o=Object(Ne.e)({defaultValues:{email:"",password:"",rememberMe:!1},resolver:Object(Ge.a)(De)}),u=o.control,l=o.handleSubmit,d=o.formState.errors;return Object(r.useEffect)((function(){c(e),setTimeout((function(){c("")}),3e3)}),[e]),t?Object(g.jsx)(f.a,{to:"/profile"}):Object(g.jsx)("div",{children:Object(g.jsxs)("form",{onSubmit:l((function(e){var t=e.email,r=e.password,a=e.rememberMe;n(function(e,t,n){return function(){var r=Object(R.a)(G.a.mark((function r(a){var s,i;return G.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(_e(!0)),r.next=3,V.a.login(e,t,n);case 3:if(s=r.sent,a(_e(!1)),0!==s.data.resultCode){r.next=10;break}return r.next=8,a(ye());case 8:r.next=12;break;case 10:i=s.data.messages.length>0?s.data.messages[0]:"Some Error",a({type:"SHOW_DATA_MESSAGE",payload:{errorMessage:i}});case 12:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(t,r,a))})),className:Me.a.form,children:[Object(g.jsx)(Ne.a,{control:u,name:"email",render:function(e){var t=e.field;return Object(g.jsx)(Te.a,Object(H.a)(Object(H.a)({},t),{},{label:"Email",sx:{width:"300px",marginBottom:"10px"},error:!!(null===d||void 0===d?void 0:d.email),helperText:(null===d||void 0===d?void 0:d.email)?d.email.message:null}))}}),Object(g.jsx)(Ne.a,{control:u,name:"password",render:function(e){var t=e.field;return Object(g.jsx)(Te.a,Object(H.a)(Object(H.a)({},t),{},{type:"password",label:"Password",sx:{width:"300px",marginBottom:"10px"},error:!!(null===d||void 0===d?void 0:d.password),helperText:(null===d||void 0===d?void 0:d.password)?d.password.message:null}))}}),Object(g.jsx)(Ne.a,{control:u,name:"rememberMe",render:function(e){var t=e.field,n=t.value,r=t.onChange;return Object(g.jsx)(Fe.a,{control:Object(g.jsx)(Le.a,{checked:n,onChange:r,sx:{color:Re.a.A400,"&.Mui-checked":{color:Re.a[800]}}}),label:"Remember me"})}}),Object(g.jsx)("div",{children:Object(g.jsx)("div",{className:Me.a.errMessage,children:i})}),Object(g.jsx)(Ae.a,{type:"submit",variant:"contained",color:"primary",children:"Submit"})]})})})),Ve={initialized:!1},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED":return Object(H.a)(Object(H.a)({},e),{},{initialized:!0});default:return e}};function Ye(e){return function(t){return Object(g.jsx)(r.Suspense,{fallback:Object(g.jsx)(ce.a,{}),children:Object(g.jsx)(e,Object(H.a)({},t))})}}var We=a.a.lazy((function(){return n.e(4).then(n.bind(null,360))})),qe=a.a.lazy((function(){return n.e(3).then(n.bind(null,359))})),Ke=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(g.jsxs)("div",{className:"app-wrapper",children:[Object(g.jsx)(ke,{}),Object(g.jsx)(h,{}),Object(g.jsxs)("div",{className:"app-wrapper-content",children:[Object(g.jsx)(f.b,{path:"/dialogs",render:Ye(We)}),Object(g.jsx)(f.b,{path:"/profile/:userId?",render:Ye(qe)}),Object(g.jsx)(f.b,{path:"/news",render:function(){return Object(g.jsx)(O,{})}}),Object(g.jsx)(f.b,{path:"/music",render:function(){return Object(g.jsx)(m,{})}}),Object(g.jsx)(f.b,{path:"/settings",render:function(){return Object(g.jsx)(v,{})}}),Object(g.jsx)(f.b,{path:"/users",render:function(){return Object(g.jsx)(he,{})}}),Object(g.jsx)(f.b,{path:"/login",render:function(){return Object(g.jsx)(He,{})}})]})]}):Object(g.jsx)(ce.a,{})}}]),n}(a.a.Component),Xe=Object(oe.c)(f.f,Object(x.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(ye()).then((function(){e({type:"SET_INITIALIZED"})}))}}}))(Ke),Ze=n(112),Je=n(148),Qe={friends:[{id:1,name:"Tolya",avatar:"https://source.unsplash.com/weekly?user"},{id:2,name:"Yura",avatar:"https://source.unsplash.com/user/erondu/daily"},{id:3,name:"Leha",avatar:"https://source.unsplash.com/weekly?man"},{id:4,name:"Ruslan",avatar:"https://source.unsplash.com/weekly?man"},{id:5,name:"Kostya",avatar:"https://source.unsplash.com/weekly?man"}]},$e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe;return e},et=n(163),tt=Object(oe.b)({profilePage:Ze.b,dialogsPage:Je.a,friendsBar:$e,usersPage:ie,auth:Pe,app:Be}),nt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||oe.c,rt=Object(oe.d)(tt,nt(Object(oe.a)(et.a)));c.a.render(Object(g.jsx)(b.a,{basename:"/Social-Network-",children:Object(g.jsx)(x.a,{store:rt,children:Object(g.jsx)(Xe,{})})}),document.getElementById("root")),s()},37:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o}));var r=n(158),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"4c618d05-4087-4c56-9fa2-e412fa4c037d"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===r?"":"&friend=".concat(r))).then((function(e){return e.data}))}},i={follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},c={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},o={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n.p+"static/media/Spin-2s-200px.8e940727.svg",a=(n(0),n(1)),s=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r,alt:"Preloader"})})}},89:function(e,t,n){e.exports={paginator:"Paginator_paginator__3pLU1",pageNumber:"Paginator_pageNumber__3atX7",selectedPage:"Paginator_selectedPage__FST6t"}}},[[309,1,2]]]);
//# sourceMappingURL=main.95fec883.chunk.js.map