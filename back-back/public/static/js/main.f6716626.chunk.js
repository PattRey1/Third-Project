(this["webpackJsonpfront-front"]=this["webpackJsonpfront-front"]||[]).push([[0],{28:function(A,e,a){A.exports=a.p+"static/media/logo_org.c625b2c2.svg"},30:function(A,e,a){A.exports=a(63)},35:function(A,e,a){},61:function(A,e,a){},63:function(A,e,a){"use strict";a.r(e);var t=a(0),l=a.n(t),n=a(25),r=a.n(n),c=(a(35),a(1)),s=a(6),i=function(A){var e=A.submit,a=A.action,t=A.email,n=void 0===t?"":t,r=A.usernameOrEmail,c=void 0===r?"":r,s=A.password,i=void 0===s?"":s,u=A.confirmPass,m=void 0===u?"":u,o=A.username,d=void 0===o?"":o,k=A.handleChange;return l.a.createElement("form",{className:"uk-form-stacked",onSubmit:e},l.a.createElement("div",{className:"uk-margin"},l.a.createElement("label",{className:"uk-form-label"},"signup"===a?"Email":"Email o Username"),l.a.createElement("div",{className:"uk-inline"},l.a.createElement("span",{className:"uk-form-icon"}),l.a.createElement("span",{className:"uk-form-icon","uk-icon":"icon: mail"}),l.a.createElement("input",{onChange:k,name:"signup"===a?"email":"usernameOrEmail",value:"signup"===a?n:c,className:"uk-input",type:"signup"===a?"email":"text"}))),"signup"===a?l.a.createElement("div",{className:"uk-margin"},l.a.createElement("label",{className:"uk-form-label"},"Username"),l.a.createElement("div",{className:"uk-inline"},l.a.createElement("span",{className:"uk-form-icon","uk-icon":"icon: user"}),l.a.createElement("input",{onChange:k,name:"username",value:d,className:"uk-input",type:"text"}))):null,l.a.createElement("div",{className:"uk-margin"},l.a.createElement("label",{className:"uk-form-label"},"Password"),l.a.createElement("div",{className:"uk-inline"},l.a.createElement("span",{className:"uk-form-icon","uk-icon":"icon: lock"}),l.a.createElement("input",{onChange:k,name:"password",value:i,className:"uk-input",type:"password"}))),"signup"===a?l.a.createElement("div",{className:"uk-margin"},l.a.createElement("label",{className:"uk-form-label"},"Confirm Password"),l.a.createElement("div",{className:"uk-inline"},l.a.createElement("span",{className:"uk-form-icon","uk-icon":"icon: lock"}),l.a.createElement("input",{onChange:k,name:"confirmPass",value:m,className:"uk-input",type:"password",autoComplete:"on"}))):null,l.a.createElement("div",{className:"uk-container uk-flex uk-flex-center"},l.a.createElement("button",{className:"uk-button uk-button-primary",type:"submit"},a)))},u=a(7),m=a(9);function o(A,e){var a=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),a.push.apply(a,t)}return a}function d(A){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(a,!0).forEach((function(e){Object(u.a)(A,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(a)):o(a).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(a,e))}))}return A}var k=function(){var A=Object(t.useState)({}),e=Object(m.a)(A,2),a=e[0],l=e[1];return{form:a,handleInput:function(A){var e=A.target,a=e.name,t=e.value;l((function(A){return d({},A,Object(u.a)({},a,t))}))},handleFileInput:function(A){var e=A.target,a=e.name,t=e.files;l((function(A){return d({},A,Object(u.a)({},a,t))}))}}},E=a(12),p=a.n(E),g=Object(t.createContext)(),h=function(A){var e=A.children,a=JSON.parse(localStorage.getItem("user"))||{},n=Object(t.useState)(a),r=Object(m.a)(n,2),c=r[0],s=r[1],i=Object(t.useState)([]),o=Object(m.a)(i,2),d=o[0],k=o[1],E=function(){s({})};return l.a.createElement(g.Provider,Object(u.a)({value:{user:c,setUser:s,resetContext:E,properties:d,setProperties:k}},"value",{user:c,setUser:s,resetContext:E}),e)},v=a(5),f=a.n(v),b=function(){var A=k(),e=A.form,a=A.handleInput,n=Object(t.useContext)(g).setUser,r=Object(s.f)().push;return l.a.createElement("div",{className:"uk-section"},l.a.createElement("div",{className:"uk-container uk-flex uk-flex-center"},l.a.createElement(i,Object.assign({submit:function(A){var a;A.preventDefault(),(a=e,p.a.post("".concat("heroku.com","/login"),a)).then((function(A){var e=A.data,a=e.user,t=e.token;localStorage.setItem("user",JSON.stringify(a)),localStorage.setItem("token",t),n(a),r("/home")})).catch((function(A){var e=A.response.data.errormsg;f.a.notification({message:"".concat(e),pos:"top-center",status:"danger"})}))},action:"login",handleChange:a},e))))},N=function(){var A=k(),e=A.form,a=A.handleInput,n=Object(t.useContext)(g).setUser,r=Object(s.f)().push;return l.a.createElement("div",{className:"uk-section"},l.a.createElement("div",{className:"uk-container uk-flex uk-flex-center"},l.a.createElement(i,Object.assign({submit:function(A){var a;A.preventDefault(),(a=e,p.a.post("".concat("heroku.com","/signup"),a)).then((function(A){var e=A.data,a=e.user,t=e.token;localStorage.setItem("user",JSON.stringify(a)),localStorage.setItem("token",t),n(a),r("/home"),f.a.notification({message:"<span uk-icon='check'></span> cuenta creada con \xe9xito",pos:"top-right",status:"success"})})).catch((function(A){var e=A.response.data.errormsg;console.log(A.response.data),f.a.notification({message:"".concat(e),pos:"top-center",status:"danger"})}))},action:"signup",handleChange:a},e))))},w=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"uk-container"}),l.a.createElement("section",{className:"uk-section uk-section-small"},l.a.createElement("div",{className:"uk-container"},l.a.createElement("div",{className:"uk-height-large uk-cover-container uk-border-rounded"},l.a.createElement("img",{src:"https://www.talktabu.com/wp-content/uploads/2018/04/checkup.png",alt:"Alt img","data-uk-cover":!0}),l.a.createElement("div",{className:"uk-overlay uk-overlay-primary uk-position-cover uk-flex uk-flex-center uk-flex-middle uk-light uk-text-center"},l.a.createElement("div",{"data-uk-scrollspy":"cls: uk-animation-slide-bottom-small"},l.a.createElement("span",null,"Art\xedculo Principal"),l.a.createElement("h1",{className:"uk-margin-top uk-margin-small-bottom uk-margin-remove-adjacent"},"\xbfCada cu\xe1ndo debo ir al doctor?"),l.a.createElement("a",{href:"#",className:"uk-button uk-button-default uk-margin-top"},"Ver art\xedculo completo")))))),l.a.createElement("div",{className:"uk-section uk-section-default"},l.a.createElement("div",{className:"uk-container"},l.a.createElement("div",{className:"uk-grid uk-child-width-expand@s uk-grid-match margin js-filter uk-child-width-1-2@s uk-child-width-1-3@m card-art","data-uk-grid":"masonry: true","data-ukgrid":!0},l.a.createElement("div",{className:"uk-width-1"},l.a.createElement("h4",{className:"uk-heading-line uk-text-bold"},l.a.createElement("span",null,"Latest News")),l.a.createElement("article",{class:" uk-width-1-3 uk-margin-medium-right uk-card uk-card-default\tuk-padding-small custom-art-card"},l.a.createElement("header",null,l.a.createElement("h2",{class:"uk-margin-remove-adjacent uk-text-bold uk-margin-small-bottom"},l.a.createElement("a",{title:"Fusce facilisis tempus magna ac dignissim.",class:"uk-link-reset",href:"#"},"Fusce facilisis tempus magna ac dignissim.")),l.a.createElement("p",{class:"uk-article-meta"},"Written on March 23, 2019. Posted in ",l.a.createElement("a",{href:"#"},"Blog")," |"," ",l.a.createElement("span",{"data-uk-icon":"icon: future"})," Takes 7 min reading.")),l.a.createElement("figure",null,l.a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAYAAAA7Ldc6AAADuUlEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA3p/4AAaxRls8AAAAASUVORK5CYII=","data-src":"https://picsum.photos/800/300/?random=1",width:"800",height:"300",alt:"Alt text",className:"lazy","data-uk-img":!0})),l.a.createElement("p",null,"UPDATE 24th October 15.10 BST\u200a\u2014\u200aVivamus sed consequat urna. Fusce vitae urna sed ante placerat iaculis. Suspendisse potenti. Pellentesque quis fringilla libero. In hac habitasse platea dictumst."),l.a.createElement("p",null,"Ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."),l.a.createElement("a",{href:"#",title:"Read More",className:"uk-button uk-button-default uk-button-small"},"READ MORE")),l.a.createElement("article",{class:"uk-width-1-3 uk-margin-medium-right uk-card uk-card-default uk-padding-small custom-art-card\t"},l.a.createElement("header",null,l.a.createElement("h2",{class:"uk-margin-remove-adjacent uk-text-bold uk-margin-small-bottom"},l.a.createElement("a",{title:"Fusce facilisis tempus magna ac dignissim.",class:"uk-link-reset",href:"#"},"Fusce facilisis tempus magna ac dignissim.")),l.a.createElement("p",{class:"uk-article-meta"},"Written on March 23, 2019. Posted in ",l.a.createElement("a",{href:"#"},"Blog")," |"," ",l.a.createElement("span",{"data-uk-icon":"icon: future"})," Takes 7 min reading.")),l.a.createElement("figure",null,l.a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAYAAAA7Ldc6AAADuUlEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA3p/4AAaxRls8AAAAASUVORK5CYII=","data-src":"https://picsum.photos/800/300/?random=1",width:"800",height:"300",alt:"Alt text",className:"lazy","data-uk-img":!0})),l.a.createElement("p",null,"UPDATE 24th October 15.10 BST\u200a\u2014\u200aVivamus sed consequat urna. Fusce vitae urna sed ante placerat iaculis. Suspendisse potenti. Pellentesque quis fringilla libero. In hac habitasse platea dictumst."),l.a.createElement("p",null,"Ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."),l.a.createElement("a",{href:"#",title:"Read More",className:"uk-button uk-button-default uk-button-small"},"READ MORE")),l.a.createElement("article",{class:"uk-width-1-3 uk-card uk-card-default uk-padding-small\tcustom-art-card"},l.a.createElement("header",null,l.a.createElement("h2",{class:"uk-margin-remove-adjacent uk-text-bold uk-margin-small-bottom"},l.a.createElement("a",{title:"Fusce facilisis tempus magna ac dignissim.",class:"uk-link-reset",href:"#"},"Fusce facilisis tempus magna ac dignissim.")),l.a.createElement("p",{class:"uk-article-meta"},"Written on March 23, 2019. Posted in ",l.a.createElement("a",{href:"#"},"Blog")," |"," ",l.a.createElement("span",{"data-uk-icon":"icon: future"})," Takes 7 min reading.")),l.a.createElement("figure",null,l.a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAYAAAA7Ldc6AAADuUlEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA3p/4AAaxRls8AAAAASUVORK5CYII=","data-src":"https://picsum.photos/800/300/?random=1",width:"800",height:"300",alt:"Alt text",className:"lazy","data-uk-img":!0})),l.a.createElement("p",null,"UPDATE 24th October 15.10 BST\u200a\u2014\u200aVivamus sed consequat urna. Fusce vitae urna sed ante placerat iaculis. Suspendisse potenti. Pellentesque quis fringilla libero. In hac habitasse platea dictumst."),l.a.createElement("p",null,"Ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."),l.a.createElement("a",{href:"#",title:"Read More",className:"uk-button uk-button-default uk-button-small"},"READ MORE")))))))};var x=function(){return l.a.createElement("div",null,"Eroteca")};var y=function(){return l.a.createElement("div",null,"Event")},O=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"uk-position-relative uk-light "},l.a.createElement("div",{className:"uk-cover-container uk-light uk-flex uk-flex-middle top-wrap-height"},l.a.createElement("div",{className:"uk-container uk-flex-auto top-container uk-position-relative uk-margin-medium-top","data-uk-parallax":"y: 0,50; easing:0; opacity:0.2"},l.a.createElement("div",{className:"uk-width-1-2@s main-info","data-uk-scrollspy":"cls: uk-animation-slide-right-medium; target: > *; delay: 150"},l.a.createElement("h1",{className:"uk-margin-remove-top"},"La Educaci\xf3n Sexual (REAL) que Mereces"),l.a.createElement("p",{className:"subtitle-text uk-visible@s"},"Nosotros proveemos para ti un espacio seguro donde puedes, preguntar, leer, comprar, reaccionar y tomar el control no solo de tu salud si no de tu placer."),l.a.createElement("a",{href:"#",title:"Learn More",className:"uk-button main-btn uk-button-primary uk-border-pill","data-uk-scrollspy-className":"uk-animation-fade"},"\xa1Entrar!"))),l.a.createElement("img",{src:"","data-srcset":"https://www.talktabu.com/wp-content/uploads/2019/11/home_bedroom.png","data-sizes":"100vw",alt:"","data-uk-cover":!0,"data-uk-img":!0,"data-uk-parallax":"opacity: 1,0.1; easing:0"}))),l.a.createElement("div",{className:"uk-section uk-section-default"},l.a.createElement("div",{className:"uk-container"},l.a.createElement("h2",{className:"uk-heading-line uk-text-center\t"},"Pr\xf3ximos Eventos"),l.a.createElement("div",{className:"uk-section uk-section-small uk-padding-remove-top pills-home"},l.a.createElement("ul",{className:"uk-subnav uk-subnav-pill uk-flex uk-flex-center uk-text-center\t","data-uk-switcher":"connect: .uk-switcher; animation: uk-animation-fade"},l.a.createElement("li",null,l.a.createElement("a",{className:"uk-border-pill",href:"#"},"Taller de ",l.a.createElement("br",null)," Masturbaci\xf3n")),l.a.createElement("li",null,l.a.createElement("a",{className:"uk-border-pill",href:"#"},"Autonom\xeda ",l.a.createElement("br",null)," Sexual")),l.a.createElement("li",null,l.a.createElement("a",{className:"uk-border-pill",href:"#"},"Mi primera vez... ",l.a.createElement("br",null)," Con Copa Menstrual")))),l.a.createElement("ul",{className:"uk-switcher uk-margin"},l.a.createElement("li",null,l.a.createElement("div",{className:"uk-grid uk-child-width-1-2@l uk-flex-middle","data-uk-grid":!0,"data-uk-scrollspy":"target: > div; cls: uk-animation-slide-left-medium"},l.a.createElement("div",null,l.a.createElement("img",{src:"","data-srcSet":"https://www.talktabu.com/wp-content/uploads/2018/02/malehealth.png",alt:"","data-uk-img":!0})),l.a.createElement("div",{"data-uk-scrollspy-className":"uk-animation-slide-right-medium"},l.a.createElement("h6",{className:"principal-text"},"Placer"),l.a.createElement("h2",{className:"uk-margin-small-top"},"Aprende \xbfqu\xe9, d\xf3nde, c\xf3mo?"),l.a.createElement("p",{className:"subtitle-text"},"Aprenderas, t\xe9cnicas principales y anatom\xeda. Estrategias para construir tu propio orgasmo."),l.a.createElement("div",{className:"uk-grid uk-child-width-1-2@s","data-uk-grid":!0},l.a.createElement("div",null,l.a.createElement("h4",null,l.a.createElement("span",{"data-uk-icon":"icon: happy"})," Expositora"),l.a.createElement("p",null,"Alicia Delicia")),l.a.createElement("div",null,l.a.createElement("h4",null,l.a.createElement("span",{"data-uk-icon":"icon: calendar"})," Fecha"),l.a.createElement("p",null,"02/01/2020")),l.a.createElement("div",null,l.a.createElement("a",{className:"uk-button custom-btn",href:""},"Reservar lugar")))))),l.a.createElement("li",null,l.a.createElement("div",{className:"uk-grid uk-child-width-1-2@l uk-flex-middle","data-uk-grid":!0,"data-uk-scrollspy":"target: > div; cls: uk-animation-slide-left-medium"},l.a.createElement("div",null,l.a.createElement("img",{"data-srcSet":"https://www.talktabu.com/wp-content/uploads/2019/12/community.png",alt:"","data-uk-img":!0})),l.a.createElement("div",{"data-uk-scrollspy-className":"uk-animation-slide-right-medium"},l.a.createElement("h6",{className:"principal-text"},"Ed\xfacate"),l.a.createElement("h2",{className:"uk-margin-small-top"},"Autonom\xeda sexual"),l.a.createElement("p",{className:"subtitle-text"},"Conoce tu cuerpo y todos los derechos que le envuelven."),l.a.createElement("div",{className:"uk-grid uk-child-width-1-2@s","data-uk-grid":!0},l.a.createElement("div",null,l.a.createElement("h4",null,l.a.createElement("span",{"data-uk-icon":"icon: happy"})," Expositora"),l.a.createElement("p",null,"Dra. Fabiola Trejo")),l.a.createElement("div",null,l.a.createElement("h4",null,l.a.createElement("span",{"data-uk-icon":"icon: calendar"})," Fecha"),l.a.createElement("p",null,"05/02/2020")),l.a.createElement("div",null,l.a.createElement("a",{className:"uk-button custom-btn",href:""},"Reservar lugar")))))),l.a.createElement("li",null,l.a.createElement("div",{className:"uk-grid uk-child-width-1-2@l uk-flex-middle","data-uk-grid":!0,"data-uk-scrollspy":"target: > div; cls: uk-animation-slide-left-medium"},l.a.createElement("div",null,l.a.createElement("img",{"data-srcSet":"https://www.talktabu.com/wp-content/uploads/2018/01/menstrualcups.png",alt:"","data-uk-img":!0})),l.a.createElement("div",{"data-uk-scrollspy-":!0,className:"uk-animation-slide-right-medium"},l.a.createElement("h6",{className:"principal-text"},"Ed\xfacate"),l.a.createElement("h2",{className:"uk-margin-small-top"},"La copita que nadie me dijo antes que exist\xeda."),l.a.createElement("p",{className:"subtitle-text"},"Todo lo que tienes que saber sobre la copa mestrual, es un buen momento de resolver cualquier tipo de duda."),l.a.createElement("div",{className:"uk-grid uk-child-width-1-2@s","data-uk-grid":!0},l.a.createElement("div",null,l.a.createElement("h4",null,l.a.createElement("span",{"data-uk-icon":"icon: happy"})," Expositora"),l.a.createElement("p",null,"Dra. Claudette Rivero")),l.a.createElement("div",null,l.a.createElement("h4",null,l.a.createElement("span",{"data-uk-icon":"icon: calendar"})," Fecha"),l.a.createElement("p",null,"13/01/2020")),l.a.createElement("div",null,l.a.createElement("a",{className:"uk-button custom-btn",href:""},"Reservar lugar"))))))))),l.a.createElement("section",{class:"uk-section uk-section-default"},l.a.createElement("div",{class:"uk-container uk-container-xsmall uk-text-center uk-section uk-padding-remove-top"},l.a.createElement("h5",{class:"principal-text"},"Blog"),l.a.createElement("h2",{class:"uk-margin-remove uk-h1"},"Dime algo que no sepa...")),l.a.createElement("div",{class:"uk-container"},l.a.createElement("div",{class:"uk-grid uk-grid-large uk-child-width-1-3@m","data-uk-grid":!0,"data-uk-scrollspy":"target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"},l.a.createElement("div",{class:"uk-text-center"},l.a.createElement("img",{src:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==","data-src":"img/marketing-3.svg","data-uk-img":!0,alt:"Image"}),l.a.createElement("h4",{class:"uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent"},"Lorem ipsum dolor sit amet"),l.a.createElement("p",null,"24/7 support. We\u2019re always here for you no matter what time of day.")),l.a.createElement("div",{class:"uk-text-center"},l.a.createElement("img",{src:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==","data-src":"img/marketing-4.svg","data-uk-img":!0,alt:"Image"}),l.a.createElement("h4",{class:"uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent"},"Lorem ipsum dolor sit amet"),l.a.createElement("p",null,"24/7 support. We\u2019re always here for you no matter what time of day.")),l.a.createElement("div",{class:"uk-text-center"},l.a.createElement("img",{src:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==","data-src":"img/marketing-5.svg","data-uk-img":!0,alt:"Image"}),l.a.createElement("h4",{class:"uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent"},"Lorem ipsum dolor sit amet"),l.a.createElement("p",null,"24/7 support. We\u2019re always here for you no matter what time of day."))))))},j=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"uk-container"},l.a.createElement("section",{className:"uk-section uk-section-small"},l.a.createElement("div",{className:"uk-container"},l.a.createElement("h1",{className:"uk-heading-divider"},"\xbfCu\xe1ndo debo ir al doctor?"),l.a.createElement("div",{className:"uk-flex uk-margin-bottom "},l.a.createElement("span",{class:"uk-label"},"Default"),l.a.createElement("span",{class:"uk-label uk-label-success"},"Success"),l.a.createElement("span",{class:"uk-label uk-label-warning"},"Warning"),l.a.createElement("span",{class:"uk-label uk-label-danger"},"Danger")),l.a.createElement("div",null,l.a.createElement("img",{className:"img-art","data-srcSet":"https://www.talktabu.com/wp-content/uploads/2018/04/checkup.png",alt:"","data-uk-img":!0}))))))},S=function(){return l.a.createElement(c.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/"},l.a.createElement(O,null)),l.a.createElement(s.a,{exact:!0,path:"/login"},l.a.createElement(b,null)),l.a.createElement(s.a,{exact:!0,path:"/signup"},l.a.createElement(N,null)),l.a.createElement(s.a,{exact:!0,path:"/blog"},l.a.createElement(w,null)),l.a.createElement(s.a,{exact:!0,path:"/articulo"},l.a.createElement(j,null)),l.a.createElement(s.a,{exact:!0,path:"/eroteca"},l.a.createElement(x,null)),l.a.createElement(s.a,{exact:!0,path:"/event"},l.a.createElement(y,null))))},C=(a(61),a(28)),D={logo:a.n(C).a},P=function(){var A=Object(t.useContext)(g),e=A.user,a=A.resetContext,n=Object(s.f)().push;return l.a.createElement("nav",{className:"uk-navbar-container custom-nav","uk-navbar":"true"},l.a.createElement("img",{src:D.logo}),e._id?l.a.createElement("div",{className:"uk-navbar-left"},l.a.createElement("ul",{className:"uk-navbar-nav"},l.a.createElement("li",{className:""},l.a.createElement(c.b,{exact:!0,to:"/"},"Home")))):null,l.a.createElement("div",{className:"uk-navbar-right"},e._id?l.a.createElement("ul",{className:"uk-navbar-nav"},l.a.createElement("li",null,l.a.createElement(c.b,{to:"#"},e.username?e.username:e.email),l.a.createElement("div",{className:"uk-navbar-dropdown"},l.a.createElement("ul",{className:"uk-nav uk-navbar-dropdown-nav"},l.a.createElement("li",{className:"uk-active"},l.a.createElement(c.b,{to:"/profile"},"Perfil")),l.a.createElement("li",{className:"uk-active"},l.a.createElement(c.b,{to:"/create"},"Subir propiedas")),l.a.createElement("li",{className:"uk-active uk-flex uk-flex-center"},l.a.createElement("button",{className:"uk-button uk-button-danger uk-button-small",onClick:function(){localStorage.clear(),n("/login"),a()}},"Logout")))))):l.a.createElement("ul",{className:"uk-navbar-nav"},l.a.createElement("li",{className:""},l.a.createElement(c.b,{to:"/login"},"Login")),l.a.createElement("li",{className:""},l.a.createElement(c.b,{to:"/signup"},"Signup")))))},R=function(){return l.a.createElement("div",null,l.a.createElement("footer",{class:"uk-section footer uk-padding-remove-bottom"},l.a.createElement("div",{class:"uk-container"},l.a.createElement("div",{class:"uk-grid uk-grid-large","data-uk-grid":!0},l.a.createElement("div",{class:"uk-width-1-2@m"},l.a.createElement("h5",null,"\xa1Oh rgasmo!"),l.a.createElement("p",null,"App de educaci\xf3n sexual que te orienta, te educa y te ense\xf1a TODO lo que tienes que saber sobre sexo y sexualidad en general.")),l.a.createElement("div",{class:"uk-width-1-6@m"},l.a.createElement("div",null,l.a.createElement("a",{href:"",class:"uk-icon-button","data-uk-icon":"twitter"}),l.a.createElement("a",{href:"",class:"uk-icon-button","data-uk-icon":"facebook"}),l.a.createElement("a",{href:"",class:"uk-icon-button","data-uk-icon":"instagram"}))))),l.a.createElement("div",{class:"uk-text-center uk-padding uk-padding-remove-horizontal"},l.a.createElement("span",{class:"uk-text-small uk-text-muted"},"\xa9 2019 Patricia Rey"))),";")};var I=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(P,null),l.a.createElement(S,null),l.a.createElement(R,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=a(29),B=a.n(q);a(62);f.a.use(B.a);r.a.render(l.a.createElement((function(){return l.a.createElement(h,null,l.a.createElement(c.a,null,l.a.createElement(I,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(A){A.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.f6716626.chunk.js.map