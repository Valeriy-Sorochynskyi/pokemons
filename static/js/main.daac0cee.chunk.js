(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),o=(a(15),a(6)),s=a(1),i=a(2),m=a(4),u=a(3),d=a(5),p=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},f=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.openDetailes,a=e.pokemon,n=p(a.name);return r.a.createElement("div",{onClick:t(a),className:"col-lg-4 col-md-4 col-sm-6 col-8 mb-3"},r.a.createElement("div",{className:"card card-color"},a.imgUrl?r.a.createElement("img",{src:a.imgUrl,className:"card-img-top",alt:a.name}):"Loding...",r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("h5",{className:"card-title"},n)),r.a.createElement("div",{className:"row justify-content-center"},a.types.map(function(e){return r.a.createElement("span",{key:e,className:"badge"},e)})))))}}]),t}(n.Component),E=function(e){var t=e.details,a=p(t.name);return r.a.createElement("div",{className:"row justify-content-center sticky-top"},r.a.createElement("div",{className:"col-10"},r.a.createElement("div",{className:"card card-color"},r.a.createElement("img",{src:t.imgUrl,className:"card-img-top",alt:t.name}),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("h5",{className:"card-title"},a)),r.a.createElement("div",null,r.a.createElement("table",{className:"table table-sm"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Type"),r.a.createElement("td",null,t.types.join(" "))),t.stats.map(function(e){return r.a.createElement("tr",{key:e.statName},r.a.createElement("td",null,p(e.statName)),r.a.createElement("td",null,e.stat))}),r.a.createElement("tr",null,r.a.createElement("td",null,"Weight"),r.a.createElement("td",null,t.weight)),r.a.createElement("tr",null,r.a.createElement("td",null,"Total moves"),r.a.createElement("td",null,t.totalMoves))))))))},h={getAll:function(){var e=this;return fetch("https://pokeapi.co/api/v2/pokemon?limit=12").then(function(e){return e.json()}).then(function(t){return Promise.all(t.results.map(function(t){return e.getOne(t.url)}))})},getOne:function(e){return fetch(e).then(function(e){return e.json()}).then(function(e){return{id:e.id,name:e.name,imgUrl:e.sprites.front_default,types:e.types.map(function(e){return e.type.name}),stats:e.stats.map(function(e){return{stat:e.base_stat,statName:e.stat.name}}),weight:e.weight,totalMoves:e.moves.length}})}},v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={pokemons:[],loadMoreUrl:"https://pokeapi.co/api/v2/pokemon?offset=12&limit=12",selectedCard:!1,details:{},isLoadMoreActive:!0},a.handleLoadMore=function(){a.setState({isLoadMoreActive:!1}),fetch(a.state.loadMoreUrl).then(function(e){return e.json()}).then(function(e){return a.setState({selectedCard:!1,loadMoreUrl:e.next}),Promise.all(e.results.map(function(e){return h.getOne(e.url)}))}).then(function(e){a.setState(function(t){return{pokemons:[].concat(Object(o.a)(t.pokemons),Object(o.a)(e)),isLoadMoreActive:!0}})})},a.handleOpenDetailes=function(e){return function(){a.setState({selectedCard:!0,details:{imgUrl:e.imgUrl,name:e.name,stats:e.stats,weight:e.weight,types:e.types,totalMoves:e.totalMoves}})}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.getAll().then(function(t){e.setState({pokemons:t})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.pokemons,n=t.selectedCard,l=t.isLoadMoreActive;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("h1",null,"Pokedex")),r.a.createElement("div",{className:"row row justify-content-center"},r.a.createElement("div",{className:"col-6 col-lg-6"},r.a.createElement("div",{className:"row justify-content-center"},a.map(function(t){return r.a.createElement(f,{key:t.name,pokemon:t,openDetailes:e.handleOpenDetailes})})),r.a.createElement("div",{className:"row justify-content-center"},l?r.a.createElement("button",{onClick:this.handleLoadMore,type:"button",className:"btn btn-primary col-8"},"Load More"):"Loading...")),r.a.createElement("div",{className:"col-6 col-lg-4"},n&&r.a.createElement(E,{details:this.state.details}))))}}]),t}(n.Component);var g=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(v,null))},y=document.getElementById("root");c.a.render(r.a.createElement(g,null),y)},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.daac0cee.chunk.js.map