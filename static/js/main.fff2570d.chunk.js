(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Pikachu",image:"https://static.pokemonpets.com/images/monsters-images-300-300/2025-Shiny-Pikachu.png"},{id:2,name:"Batman",image:"https://vignette.wikia.nocookie.net/p__/images/0/01/AK_Batman_Promotioqnl_.JPG/revision/latest/scale-to-width-down/699?cb=20171006210659&path-prefix=protagonist"},{id:3,name:"Squidward",image:"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626"},{id:4,name:"Master Chief",image:"https://vignette.wikia.nocookie.net/halo/images/a/a9/H5G_Render_John117-Profile.png/revision/latest?cb=20170605101747"},{id:5,name:"Princess Peach",image:"https://vignette.wikia.nocookie.net/mariofanon/images/1/11/294px-PrincessPeach.png/revision/latest?cb=20180404160348"},{id:6,name:"Kirby",image:"https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Kirby.png/220px-Kirby.png"},{id:7,name:"Spider-Man",image:"https://vignette.wikia.nocookie.net/p__/images/1/11/Spider-Man_from_MSM_render.png/revision/latest/scale-to-width-down/700?cb=20181020141818&path-prefix=protagonist"},{id:8,name:"Lara Croft",image:"https://vignette.wikia.nocookie.net/p__/images/b/b6/Wallpaper_tomb_raider_definitive_edition_01.jpg/revision/latest?cb=20151211113544&path-prefix=protagonist"},{id:9,name:"Arthur Morgan",image:"https://vignette.wikia.nocookie.net/reddeadredemption/images/8/85/Arthur_morgan.png/revision/latest?cb=20181222200913"},{id:10,name:"Link",image:"https://vignette.wikia.nocookie.net/p__/images/8/84/Link_SSBU.png/revision/latest/scale-to-width-down/700?cb=20180613150445&path-prefix=protagonist"},{id:11,name:"Ezio Auditore",image:"https://cosplaysumisura.it/wp-content/uploads/2016/10/QVFjY0B.jpg"}]},,,function(e,t,a){e.exports=a(18)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(2),o=a.n(r),c=a(3),s=a(4),l=a(7),m=a(5),d=a(8);a(15);var p=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{onClick:e.setClick,className:"clickImg",src:e.image,key:e.id,alt:e.name})),n.a.createElement("div",{className:"content"},n.a.createElement("ul",null)))};a(16);var g=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)},u=a(6),h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={score:0,friends:u,clicked:[]},a.setClick=function(e){var t=e.target.alt;a.state.clicked.indexOf(t)>-1?(a.setState({friends:a.state.friends.sort(function(e,t){return.5-Math.random()}),clicked:[],score:0}),alert("Sorry u lost!!!!")):a.setState({friends:a.state.friends.sort(function(e,t){return.5-Math.random()}),clicked:a.state.clicked.concat(t),score:a.state.score+1},function(){9===a.state.score&&(alert("You win"),a.setState({friends:a.state.friends.sort(function(e,t){return.5-Math.random()}),clicked:[],score:0}))})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(g,null,n.a.createElement("h3",{className:"scoring card"},"Clicky Game!",n.a.createElement("br",null),n.a.createElement("br",null),"Click on a character, but dont click twice or you lose!",n.a.createElement("br",null),n.a.createElement("br",null),"Score: ",this.state.score),this.state.friends.map(function(t){return n.a.createElement(p,{setClick:e.setClick,id:t.id,key:t.id,name:t.name,image:t.image})}))}}]),t}(i.Component);a(17);o.a.render(n.a.createElement(h,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.fff2570d.chunk.js.map