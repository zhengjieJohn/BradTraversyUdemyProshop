(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{34:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(15),c=a.n(i),r=(a(34),a(16)),o=a(6),l=a(50),j=a(47),d=a(51),h=a(2),m=function(){return Object(h.jsx)("header",{children:Object(h.jsxs)(l.a,{bg:"dark",variant:"dark",expand:"lg",collapseOnSelect:!0,children:[Object(h.jsxs)(j.a,{children:[Object(h.jsx)(l.a.Brand,{href:"/",children:"Proshop"}),Object(h.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(h.jsxs)(d.a,{className:"ml-right",children:[Object(h.jsxs)(d.a.Link,{href:"/cart",children:[Object(h.jsx)("i",{className:"fas fa-shopping-cart"}),"Cart"]}),Object(h.jsxs)(d.a.Link,{href:"/login",children:[Object(h.jsx)("i",{className:"fas fa-user"}),"Sign in"]})]})})]}),";"]})})},p=a(48),b=a(49),u=function(){return Object(h.jsx)("footer",{children:Object(h.jsx)(j.a,{children:Object(h.jsx)(p.a,{children:Object(h.jsx)(b.a,{className:"text-center py-3",children:"Copyright \xa9 Proshop"})})})})},g=a(52),f=function(e){var t=e.value,a=e.text;return Object(h.jsxs)("div",{className:"rating",children:[Object(h.jsx)("span",{children:Object(h.jsx)("i",{className:t>=1?"fas fa-star":t>=.5?"fas fa-star-half-alt":"far fa-star"})}),Object(h.jsx)("span",{children:Object(h.jsx)("i",{className:t>=2?"fas fa-star":t>=1.5?"fas fa-star-half-alt":"far fa-star"})}),Object(h.jsx)("span",{children:Object(h.jsx)("i",{className:t>=3?"fas fa-star":t>=2.5?"fas fa-star-half-alt":"far fa-star"})}),Object(h.jsx)("span",{children:Object(h.jsx)("i",{className:t>=4?"fas fa-star":t>=3.5?"fas fa-star-half-alt":"far fa-star"})}),Object(h.jsx)("span",{children:Object(h.jsx)("i",{className:t>=5?"fas fa-star":t>=4.5?"fas fa-star-half-alt":"far fa-star"})}),Object(h.jsx)("span",{children:a&&a})]})},x=function(e){var t=e.product;return Object(h.jsxs)(g.a,{className:"my-3 p-3 rounded",children:[Object(h.jsx)(r.b,{to:"/product/".concat(t._id),children:Object(h.jsx)(g.a.Img,{src:t.image,variant:"top"})}),Object(h.jsxs)(g.a.Body,{children:[Object(h.jsx)(r.b,{to:"/product/".concat(t._id),children:Object(h.jsx)(g.a.Title,{as:"div",children:Object(h.jsx)("strong",{children:t.name})})}),Object(h.jsx)(g.a.Text,{as:"div",children:Object(h.jsx)(f,{value:t.rating,text:"".concat(t.numReviews," reviews")})}),Object(h.jsxs)(g.a.Text,{as:"h3",children:["$",t.price]})]})]})},O=[{_id:"1",name:"Airpods Wireless Bluetooth Headphones",image:"/images/airpods.jpg",description:"Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",brand:"Apple",category:"Electronics",price:89.99,countInStock:10,rating:4.5,numReviews:12},{_id:"2",name:"iPhone 11 Pro 256GB Memory",image:"/images/phone.jpg",description:"Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",brand:"Apple",category:"Electronics",price:599.99,countInStock:7,rating:4,numReviews:8},{_id:"3",name:"Cannon EOS 80D DSLR Camera",image:"/images/camera.jpg",description:"Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",brand:"Cannon",category:"Electronics",price:929.99,countInStock:5,rating:3,numReviews:12},{_id:"4",name:"Sony Playstation 4 Pro White Version",image:"/images/playstation.jpg",description:"The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",brand:"Sony",category:"Electronics",price:399.99,countInStock:11,rating:5,numReviews:12},{_id:"5",name:"Logitech G-Series Gaming Mouse",image:"/images/mouse.jpg",description:"Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",brand:"Logitech",category:"Electronics",price:49.99,countInStock:7,rating:3.5,numReviews:10},{_id:"6",name:"Amazon Echo Dot 3rd Generation",image:"/images/alexa.jpg",description:"Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",brand:"Amazon",category:"Electronics",price:29.99,countInStock:0,rating:4,numReviews:12}],y=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Latest Products"}),Object(h.jsx)(p.a,{children:O.map((function(e){return Object(h.jsx)(b.a,{sm:12,md:6,lg:4,xl:3,children:Object(h.jsx)(x,{product:e})})}))})]})},v=function(){return Object(h.jsx)("div",{children:"Product"})},w=(a(44),function(){return Object(h.jsxs)(r.a,{children:[Object(h.jsx)(m,{}),Object(h.jsx)("main",{children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(o.a,{path:"/",component:y,exact:!0}),Object(h.jsx)(o.a,{path:"/product/:id",component:v,exact:!0})]})}),Object(h.jsx)(u,{})]})}),S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,53)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))};c.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),S()}},[[45,1,2]]]);
//# sourceMappingURL=main.5eb80f8d.chunk.js.map