(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{22:function(e,t,a){e.exports=a(36)},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),s=a(3),o=a(4),i=a(6),m=a(5),u=(a(27),a(28),a(29),a(30),a(10)),p=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top",id:"mainNav"},r.a.createElement("div",{className:"container"},r.a.createElement(u.b,{className:"navbar-brand",to:"/"},"Start"),r.a.createElement("button",{className:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},"Menu",r.a.createElement("i",{className:"fas fa-bars"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{className:"nav-link",to:"/about"},"About"))))))}}]),a}(r.a.Component),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.post,a=e.isLast;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"post-preview"},r.a.createElement(u.b,{to:"/"+t.slug},r.a.createElement("h2",{className:"post-title"},t.title.rendered),r.a.createElement("h3",{className:"post-subtitle",dangerouslySetInnerHTML:{__html:t.excerpt.rendered.split(" <a href")[0]+"</p>"}})),r.a.createElement("p",{className:"post-meta"},"Posted by ",t._embedded.author[0].name," on ",new Date(t.date).toDateString())),!a&&r.a.createElement("hr",null))}}]),a}(r.a.Component),d=a(21),v=a.n(d),h=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.subtitle,n=e.image;return r.a.createElement("header",{className:"masthead",style:{backgroundImage:"url(".concat(n||v.a,")")}},r.a.createElement("div",{className:"overlay"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8 col-md-10 mx-auto"},r.a.createElement("div",{className:"site-heading"},r.a.createElement("h1",null,t||"MARTA BLOG"),r.a.createElement("span",{className:"subheading"},a||"Projekt"))))))}}]),a}(r.a.Component),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={posts:null},e.abortController=new AbortController,e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://public-api.wordpress.com/wp/v2/sites/reactjscourse.wordpress.com/posts?_embed",{signal:this.abortController.signal}).then((function(e){return e.json()})).then((function(t){e.setState({posts:t})})).catch((function(e){console.error(e)}))}},{key:"componentWillUnmount",value:function(){this.abortController.abort()}},{key:"render",value:function(){var e=this.state.posts;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8 col-md-10 mx-auto"},e&&e.map((function(t,a){return r.a.createElement(b,{key:t.id,post:t,isLast:a===e.length-1})}))))),r.a.createElement("hr",null))}}]),a}(r.a.Component),g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={singlePost:null},e.abortController=new AbortController,e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://public-api.wordpress.com/wp/v2/sites/reactjscourse.wordpress.com/posts?slug="+this.props.match.params.slug,{signal:this.abortController.signal}).then((function(e){return e.json()})).then((function(t){e.setState({singlePost:t})})).catch((function(e){console.error(e)})),window.scrollTo({top:0,left:0,behavior:"smooth"})}},{key:"componentWillUnmount",value:function(){this.abortController.abort()}},{key:"render",value:function(){var e=this.state.singlePost;if(e&&e.length){var t=e[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{title:t.title.rendered,subtitle:new Date(t.date).toDateString(),image:t.jetpack_featured_media_url}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8 col-md-10 mx-auto",dangerouslySetInnerHTML:{__html:t.content.rendered}}))))}return e&&0===e.length?r.a.createElement(h,{title:"Page not found",subtitle:" "}):r.a.createElement(h,{title:"Loading...",subtitle:" "})}}]),a}(r.a.Component),E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8 col-md-10 mx-auto"},r.a.createElement("ul",{className:"list-inline text-center"},r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"http://www.facebook.pl",target:"blink_"},r.a.createElement("span",{className:"fa-stack fa-lg"},r.a.createElement("i",{className:"fas fa-circle fa-stack-2x"}),r.a.createElement("i",{className:"fab fa-facebook-f fa-stack-1x fa-inverse"})))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"http://www.github.com",target:"blink_"},r.a.createElement("span",{className:"fa-stack fa-lg"},r.a.createElement("i",{className:"fas fa-circle fa-stack-2x"}),r.a.createElement("i",{className:"fab fa-github fa-stack-1x fa-inverse"}))))),r.a.createElement("p",{className:"copyright text-muted"},"Wszystkie prawa zastrze\u017cone. \xa9 2020")))))}}]),a}(r.a.Component),N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={singlePage:null},e.abortController=new AbortController,e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://public-api.wordpress.com/wp/v2/sites/reactjscourse.wordpress.com/pages?slug=about&_embed",{signal:this.abortController.signal}).then((function(e){return e.json()})).then((function(t){e.setState({singlePage:t})})).catch((function(e){console.error(e)}))}},{key:"componentWillUnmount",value:function(){this.abortController.abort()}},{key:"render",value:function(){var e=this.state.singlePage;if(e&&e.length){var t=e[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{title:t.title.rendered,subtitle:" ",image:t._embedded["wp:featuredmedia"][0].source_url}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8 col-md-10 mx-auto",dangerouslySetInnerHTML:{__html:t.content.rendered}}))))}return r.a.createElement(h,{title:"Wczytywanie...",subtitle:" "})}}]),a}(r.a.Component),j=a(1),y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:"/",component:f}),r.a.createElement(j.a,{path:"/about",component:N}),r.a.createElement(j.a,{path:"/:slug",component:g})))),r.a.createElement(E,null))}}]),a}(r.a.Component);c.a.render(r.a.createElement(y,null),document.querySelector("#app"))}},[[22,1,2]]]);
//# sourceMappingURL=main.1b0e038c.chunk.js.map