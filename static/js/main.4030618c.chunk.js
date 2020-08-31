(this["webpackJsonpimc-comfenalco"]=this["webpackJsonpimc-comfenalco"]||[]).push([[0],{18:function(e,a,t){},21:function(e,a,t){e.exports=t.p+"static/media/bascula-dibujo.b201ac5c.png"},24:function(e,a,t){e.exports=t(35)},35:function(e,a,t){"use strict";t.r(a);var l=t(0),c=t.n(l),n=t(20),r=t.n(n),o=(t(18),t(3)),i=t(4),s=t(6),u=t(5),m=t(13),p=t(1),d=(t(29),function(e){e.nombre_clase;var a=e.titulo;return c.a.createElement("div",{className:"panel-heading"},c.a.createElement("p",null,a))}),b=t(21),E=t.n(b);var h=function(){return c.a.createElement("div",{className:"column"},c.a.createElement("img",{src:E.a,alt:"Imagen de bascula",id:"img_bascula"}))},v=t(12),f=t(22),O=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){var l;return Object(o.a)(this,t),(l=a.call(this,e)).calcularIMC=l.calcularIMC.bind(Object(v.a)(l)),l}return Object(i.a)(t,[{key:"calcularIMC",value:function(e){try{var a=parseFloat(document.querySelector("#peso").value),t=parseFloat(document.querySelector("#altura").value),l=this.props.C_IMC.calcularIMC({peso:a,altura:t});if(isNaN(l))throw new Error("Valor de IMC invalido");this.props.C_IMC.setState({peso:a,altura:t}),this.props.App.setState({imc:l})}catch(c){Object(f.toast)({message:"Se presento un error durante el calculo. ".concat(c.message),type:"is-danger",position:"top-right",closeOnClick:!0,pauseOnHover:!0})}}},{key:"render",value:function(){return c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"field"},c.a.createElement("label",{htmlFor:"peso",className:"label"},"Peso (kilos)"),c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"input caja_texto",type:"number",name:"peso",id:"peso",placeholder:"Peso"}))),c.a.createElement("div",{className:"field"},c.a.createElement("label",{htmlFor:"altura",className:"label"},"Altura (cm)"),c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"input caja_texto",type:"number",name:"altura",id:"altura",placeholder:"Altura"}))),c.a.createElement("div",{className:"field is-grouped"},c.a.createElement("div",{className:"control"},c.a.createElement("button",{className:"button is-link",onClick:this.calcularIMC},"Calcular"))))}}]),t}(c.a.Component);var C=function(e){var a=e.C_IMC.calcularIMC({peso:e.peso,altura:e.altura}).toFixed(2);return c.a.createElement("div",{className:"column"},c.a.createElement("h3",null,"IMC"),c.a.createElement("h3",null,a))},j=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){var l;return Object(o.a)(this,t),(l=a.call(this,e)).state={peso:0,altura:1},l}return Object(i.a)(t,[{key:"calcularIMC",value:function(e){var a=e.peso,t=e.altura;return a/Math.pow(t,2)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,{C_IMC:this,App:this.props.App}),c.a.createElement(C,{C_IMC:this,altura:this.state.altura,peso:this.state.peso}))}}]),t}(l.Component),N=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"panel-block"},c.a.createElement("article",{className:"columns is-mobile"},c.a.createElement(j,{App:this.props.App}),c.a.createElement(h,null)))}}]),t}(c.a.Component),I=function(e){return c.a.createElement("section",{className:"panel"},c.a.createElement(d,{titulo:"Calculadora",nombre_clase:"cabecera_calculo"}),c.a.createElement(N,{App:e.App}))};function y(){return c.a.createElement("div",{className:"panel-heading"},"C\xe1lculo Indeice de Masa Corporal (IMC)")}var k=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.props.datosTabla,t=a.cabecera,l=a.data;return c.a.createElement("div",{className:"table-container"},c.a.createElement("table",{className:"table is-bordered is-striped is-narrow is-hoverable is-fullwidth"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,t.cabecera1),c.a.createElement("th",null,t.cabecera2),c.a.createElement("th",null,t.cabecera3))),c.a.createElement("tbody",null,l.map((function(a,t){return c.a.createElement("tr",{key:t,style:{background:e.props.imc>=a.li&&e.props.imc<=a.ls?"blue":"",color:e.props.imc>=a.li&&e.props.imc<=a.ls?"white":"black"}},c.a.createElement("td",null,a.imc),c.a.createElement("td",null,a.situacion),c.a.createElement("td",null,e.props.imc>=a.li&&e.props.imc<=a.ls?"X":""))})))))}}]),t}(l.Component),M=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"columns is-mobile panel-block"},c.a.createElement("div",{className:"column is-half is-offset-one-quarter"},c.a.createElement(k,{imc:this.props.App.state.imc,datosTabla:{cabecera:{cabecera1:"IMC",cabecera2:"Situaci\xf3n",cabecera3:"Valoraci\xf3n"},data:[{li:0,ls:18.5,imc:"Menor de 18.5",situacion:"Bajo peso"},{li:18.5,ls:24.9,imc:"18.5 - 24.9",situacion:"Normopeso"},{li:25,ls:26.9,imc:"25 - 26.9",situacion:"Sobrepeso grado I"},{li:27,ls:29.9,imc:"27 - 29.9",situacion:"Sobrepeso grado II"},{li:30,ls:34.9,imc:"30 - 34.9",situacion:"Obesidad de tipo I"},{li:35,ls:39.9,imc:"35 - 39.9",situacion:"Obesidad de tipo II"},{li:40,ls:49.9,imc:"40 - 49.9",situacion:"Obesidad de tipo III (m\xf3rbida)"},{li:50,ls:Number.MAX_VALUE,imc:"Mayor a 50",situacion:"Obesidad de tipo IV (extrema)"}]}})))}}]),t}(l.Component),g=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){var l;return Object(o.a)(this,t),console.log(e),(l=a.call(this,e)).state={},l}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"panel"},c.a.createElement(y,null),c.a.createElement(M,{App:this.props.App}))}}]),t}(l.Component),A=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"componentWillMount",value:function(){this.setState({imc:0})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement(m.a,null,c.a.createElement("div",{className:"tabs"},c.a.createElement("ul",null,c.a.createElement("li",{className:"is-active"},c.a.createElement(m.b,{to:"/calculo-imc"},"Calculo")),c.a.createElement("li",null,c.a.createElement(m.b,{to:"/detalle-imc"},"Detalle")))),c.a.createElement(p.c,null,c.a.createElement(p.a,{path:"/calculo-imc",exact:!0,component:function(){return c.a.createElement(I,{App:e})}}),c.a.createElement(p.a,{path:"/detalle-imc",exact:!0,component:function(){return c.a.createElement(g,{App:e})}}))))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.4030618c.chunk.js.map