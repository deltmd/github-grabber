(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,a,t){e.exports=t(58)},27:function(e,a,t){},29:function(e,a,t){},31:function(e,a,t){},33:function(e,a,t){},35:function(e,a,t){},37:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),s=t.n(l),c=t(8),o=t.n(c),i=t(9),m=t(2),u=t(3),p=t(5),d=t(4),f=t(6),g=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={userName:""},t.onInputChange=function(){var e=Object(i.a)(o.a.mark(function e(a){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setState({userName:a.target.value});case 2:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),t.onFormSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.userName)},t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-bar ui segment"},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},r.a.createElement("div",{className:"field ui grid"},r.a.createElement("div",{className:"ui row"},r.a.createElement("label",{className:"two wide column"},r.a.createElement("i",{className:"huge github icon"})),r.a.createElement("div",{className:"twelve wide column"},r.a.createElement("div",{className:"ui icon huge input"},r.a.createElement("input",{type:"text",placeholder:"Search",value:this.state.userName,onChange:this.onInputChange}),r.a.createElement("i",{className:"circular search link icon"})))))))}}]),a}(r.a.Component),E=(t(27),function(){return r.a.createElement("div",{className:"display-welcome ui segment col-sm-12"},r.a.createElement("h1",null,"Welcome to GitHub Grabber"))}),h=(t(29),function(){return r.a.createElement("div",{className:"display-loding ui segment"},r.a.createElement("i",{className:"github loading icon massive"}),r.a.createElement("h2",null,"Loading..."))}),v=function(e){var a=e.error;return r.a.createElement("div",{className:"display-welcome ui segment"},r.a.createElement("h1",null,a),r.a.createElement("i",{className:"frown outline huge icon"}))},b=(t(31),function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).displayCard=function(){if(t.props.userInfo){var e=t.props.userInfo,a=e.avatar_url,n=e.name,l=e.login,s=e.bio,c=e.public_repos,o=t.props.onInfoSelect;return r.a.createElement("div",null,r.a.createElement("div",{className:"row user-card gutters-0"},r.a.createElement("div",{className:"col-s-3 col-md-3 col-lg-3 profile-pic-container"},r.a.createElement("img",{className:"profile-pic rounded",src:a,alt:"profile"}),r.a.createElement("div",{className:"name ml-2"},r.a.createElement("h2",null,n),r.a.createElement("span",null,"@",l))),r.a.createElement("div",{className:"col-s-9 col-md-9 col-lg-9 info-summary-container gutters-0"},r.a.createElement("div",{className:"info-summary"},r.a.createElement("div",{className:"row bio-info"},r.a.createElement("p",null,s)),r.a.createElement("div",{className:"row bottom-link"},r.a.createElement("span",{className:"col-sm-3 col-md-3 col-lg-3",onClick:function(){return o("repos")}},"Public Repositories",r.a.createElement("span",{className:"badge badge-orange"},c)),r.a.createElement("span",{className:"col-sm-3 col-md-3 col-lg-3",onClick:function(){return o("orgs")}},"Public Organizations",r.a.createElement("span",{className:"badge badge-orange"},t.props.orgs)))))))}return r.a.createElement("div",null,"Could not load the user info")},t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return this.displayCard()}}]),a}(r.a.Component)),w=(t(33),function(e){var a=e.repository,t=a.name,n=a.description,l=a.html_url,s=a.updated_at,c=a.language,o=a.watchers,i=a.forks,m=a.stargazers_count;return r.a.createElement("div",{className:"col-sm-12 repo-wraper gutters-0",onClick:function(){window.open(l,"_blank")}},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"basic info"},r.a.createElement("h3",null,t),r.a.createElement("p",null,n)),r.a.createElement("br",null),r.a.createElement("div",{className:"more-info"},r.a.createElement("div",null,r.a.createElement("span",{className:"badge language-indicator"}," "),r.a.createElement("span",{className:"language"},c),r.a.createElement("span",{className:"date"},"Updated: ","".concat(new Date(s).getMonth(),"/").concat(new Date(s).getDate(),"/").concat(new Date(s).getFullYear()))))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"badge-info pull-right"},r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"badge badge-pill badge-primary"},r.a.createElement("i",{className:"eye icon"}),"watchers"),r.a.createElement("span",{className:"badge badge-pill badge-primary pull-right"},o)),r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"badge badge-pill badge-primary"},r.a.createElement("i",{className:"star icon"}),"Stars"),r.a.createElement("span",{className:"badge badge-pill badge-primary pull-right"},m)),r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"badge badge-pill badge-primary"},r.a.createElement("i",{className:"linkify icon"}),"Forks"),r.a.createElement("span",{className:"badge badge-pill badge-primary pull-right"},i)))))}),N=function(e){var a=e.org,t=a.avatar_url,n=a.description;return r.a.createElement("div",{className:"org-wrapper"},r.a.createElement("img",{src:t,className:"col-lg-1 col-md-1",alt:"organization"}),r.a.createElement("p",{className:"col-md-11 col-lg-11"},n))},y=(t(35),function(e){var a=e.follower,t=a.avatar_url,n=a.login;return r.a.createElement("div",{className:"chip"},r.a.createElement("img",{src:t,alt:"Person",width:"96",height:"96"}),n)}),O=(t(37),function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).state={selectedInfo:"repos"},t.onInfoSelect=function(e){t.setState({selectedInfo:e})},t.displayDetail=function(){return"repos"===t.state.selectedInfo?r.a.createElement("div",{class:"col-sm-12"},r.a.createElement("h3",null,"Repositories"),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("div",{class:"repos-list-wrapper"},t.returnListOfRepos())):"orgs"===t.state.selectedInfo?r.a.createElement("div",{class:"col-sm-12"},r.a.createElement("h3",null,"Organizations"),r.a.createElement("hr",null),r.a.createElement("br",null),t.returnListOfOrgs()):"followers"===t.state.selectedInfo?r.a.createElement("div",{class:"col-sm-12"},r.a.createElement("h3",null,"Followers"),r.a.createElement("hr",null),r.a.createElement("br",null),t.returnListOfFollowers(t.props.followers)):"followings"===t.state.selectedInfo?r.a.createElement("div",null,r.a.createElement("h3",null,"Followings"),r.a.createElement("hr",null),r.a.createElement("br",null),t.returnListOfFollowers(t.props.followings)):r.a.createElement("div",null,"No selection")},t.returnListOfRepos=function(){var e=t.props.repos;return e?e.map(function(e){return r.a.createElement("div",{className:"col-sm-6",key:e.id},r.a.createElement(w,{repository:e}))}):r.a.createElement("h2",{className:"col-sm-12"},"No Repository to show")},t.returnListOfOrgs=function(){var e=t.props.orgs;return e.length>0?e.map(function(e){return r.a.createElement("div",{className:"col-sm-12 org-item",key:e.id},r.a.createElement(N,{org:e}))}):r.a.createElement("h3",{className:"col-sm-12"},"No Organizations to show")},t.returnListOfFollowers=function(e){return e.length>0?e.map(function(e){return r.a.createElement("div",{className:"col-sm-6 col-md-3 col-lg-3 follow-wrapper",key:e.id},r.a.createElement(y,{follower:e}))}):r.a.createElement("h3",{className:"col-sm-12"},"No Followers to show")},t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props,a=e.userInfo,t=e.orgs;return r.a.createElement("div",{className:"user-wrapper ui"},r.a.createElement("div",{className:"user-card-wrapper row"},r.a.createElement(b,{className:"row",userInfo:a,orgs:t.length,onInfoSelect:this.onInfoSelect})),r.a.createElement("div",{className:"user-detected-detail row"},this.displayDetail()))}}]),a}(r.a.Component)),j=t(18),I=t(7),S=t.n(I),k="https://api.github.com";function C(e){var a="".concat(k,"/users/").concat(e,"/repos?per_page=250");return S.a.get(a).then(function(e){return e.data})}function x(e){var a="".concat(k,"/users/").concat(e,"/followers");return S.a.get(a).then(function(e){return e.data})}function F(e){var a="".concat(k,"/users/").concat(e,"/following");return S.a.get(a).then(function(e){return e.data})}var _=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).state={userInfo:null,orgs:[],repos:[],error:null,loading:!1,followers:[],followings:[]},t.onSubmitUser=function(){var e=Object(i.a)(o.a.mark(function e(a){var n,r,l,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.resetState(),e.prev=1,t.setState({loading:!0}),e.next=5,c=a,S.a.all([S.a.get("".concat(k,"/users/").concat(c)),S.a.get("".concat(k,"/users/").concat(c,"/orgs"))]).then(function(e){var a=Object(j.a)(e,2),t=a[0],n=a[1];return{user:t.data,orgs:n.data}});case 5:return n=e.sent,e.next=8,C(a);case 8:return r=e.sent,e.next=11,x(a);case 11:return l=e.sent,e.next=14,F(a);case 14:s=e.sent,t.setState({userInfo:n.user,orgs:n.orgs,repos:r,followers:l,followings:s,loading:!1}),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),""===a?t.resetState():t.setState({error:"User not found! ",loading:!1});case 21:case"end":return e.stop()}var c},e,this,[[1,18]])}));return function(a){return e.apply(this,arguments)}}(),t.displayBody=function(){return t.state.error?r.a.createElement(v,{error:t.state.error}):t.state.loading?r.a.createElement(h,null):t.state.userInfo?r.a.createElement(O,{userInfo:t.state.userInfo,orgs:t.state.orgs,repos:t.state.repos,followers:t.state.followers,followings:t.state.followings}):t.state.userInfo?void 0:r.a.createElement(E,null)},t.resetState=function(){t.setState({userInfo:null,orgs:[],repos:[],error:null,loading:!1,followers:[],followings:[]})},t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(g,{onSubmit:this.onSubmitUser}),this.displayBody())}}]),a}(r.a.Component);s.a.render(r.a.createElement(_,null),document.querySelector("#root"))}},[[19,2,1]]]);
//# sourceMappingURL=main.36884fe8.chunk.js.map