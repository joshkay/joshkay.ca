(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{RNiq:function(t,e,a){"use strict";a.r(e);var n=a("ln6h"),r=a.n(n),i=a("O40h"),c=a("0iUn"),u=a("sLSF"),s=a("MI3g"),l=a("a7VT"),o=a("Tit0"),f=a("AT/M"),d=a("q1tI"),h=a.n(d),p=a("X+Rt"),m=a("vDqi"),v=a.n(m),w=(a("u0UJ"),{title:"Index title",description:"Index description"}),b=function(t){function e(t){var a;return Object(c.default)(this,e),(a=Object(s.default)(this,Object(l.default)(e).call(this,t))).state={loading:!0,cat:{}},a.fetchCats=a.fetchCats.bind(Object(f.default)(Object(f.default)(a))),a}return Object(o.default)(e,t),Object(u.default)(e,[{key:"componentDidMount",value:function(){var t=Object(i.default)(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetchCats();case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"fetchCats",value:function(){var t=Object(i.default)(r.a.mark(function t(){var e,a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({loading:!0}),t.next=3,v.a.get("https://api.thecatapi.com/v1/images/search?limit=1");case 3:e=t.sent,a=e.data,this.setState({cat:a[0],loading:!1});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return h.a.createElement(p.a,{meta:w},h.a.createElement("div",null,h.a.createElement("h1",{className:"example"},"Josh is hard at work..."),h.a.createElement("h3",null,"Kitty!"),h.a.createElement("img",{src:this.state.cat.url,alt:"Cat"})))}}]),e}(h.a.Component);e.default=b},vlRD:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var t=a("RNiq");return{page:t.default||t}}])}},[["vlRD",1,0,13]]]);