(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(54)},20:function(e,t,n){},22:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(3),r=n.n(i),s=(n(20),n(4)),l=n(5),c=n(7),u=n(6),p=n(8),d=(n(22),n(14)),h=n(11),f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Something went wrong with Google Maps API."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(a.Component);window.gm_authFailure=function(){alert("Invalid Google API key. Please check your Google API key")};Object({NODE_ENV:"production",PUBLIC_URL:"/2018-Grow-With-Google-Graduation-Party-Map"}).REACT_APP_googleMapsAPI;var m=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).mapReady=function(e,t){setTimeout(function(){n.addMarkers(t)},1300)},n.getEventInfo=function(){var e=[],t=new Headers,a=new Request("https://api.myjson.com/bins/i15h6",{method:"GET",headers:t});fetch(a).then(function(e){if(e.ok)return e.json();throw Error("Request rejected with status code ".concat(e.status))}).then(function(t){t.events.forEach(function(t,n){var a={};a.city=t.city,a.name=t.name,a.lat=t.lat,a.lng=t.lng,a.time=t.time,a.host=t.host,a.link=t.link,e.push(a)})}).catch(function(e){alert("Something went wrong."+e)}),n.props.getResults(e)},n.onMapClicked=function(){n.props.infoWindow&&n.props.infoWindow.close(),n.props.allMarkers.forEach(function(e){e.setAnimation(null)},n.props.onInfoWindowClose),n.props.updateQuery(n.props.query)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getEventInfo()}},{key:"addMarkers",value:function(e){var t=this,n=[],a=new this.props.google.maps.InfoWindow;if(this.props.results){var o=!0,i=!1,r=void 0;try{for(var s,l=function(){var o=s.value,i=new t.props.google.maps.Marker({position:{lat:o.lat,lng:o.lng},map:e,title:o.name,animation:2});n.push(i);var r="<h4>".concat(o.city,"</h4><p>Venue: ").concat(o.name,"</p><p>Time: ").concat(o.time,"</p><p>Host: ").concat(o.host,"</p><a href=").concat(o.link,">Event Page</a>");["click","mouseover"].forEach(function(n){i.addListener(n,function(){null!==i.getAnimation()?i.setAnimation(null):i.setAnimation(1),a.setContent(r),a.open(e,i),t.props.onMarkerClick(o,i,a),t.props.showWindow()},!1)}),a.addListener("closeclick",function(){i.setAnimation(null),t.props.onInfoWindowClose()})},c=this.props.results[Symbol.iterator]();!(o=(s=c.next()).done);o=!0)l()}catch(u){i=!0,r=u}finally{try{o||null==c.return||c.return()}finally{if(i)throw r}}}this.props.getMap(n,a,e,this.props.google)}},{key:"render",value:function(){return window.google?o.a.createElement(f,null,o.a.createElement(h.Map,{"aria-label":"map",className:"map",role:"application",google:this.props.google,initialCenter:{lat:39.011902,lng:-98.484246},onClick:this.onMapClicked,onReady:this.mapReady,zoom:4})):o.a.createElement("div",null,"Error loading Google Maps")}}]),t}(a.Component),g=Object(h.GoogleApiWrapper)({apiKey:"AIzaSyB8K2MYqSFftmrT_c8i1yG3uypVsrcutN4"})(m),w=function(e){var t=e.venues;return o.a.createElement("div",null,o.a.createElement("label",{className:"label",htmlFor:"searchBox"},"Search Box"),o.a.createElement("input",{id:"searchBox",type:"text",placeholder:"Type here to filter locations",value:e.query,onChange:function(t){return e.updateQuery(t.target.value)}}),o.a.createElement("ul",{className:"venue-list"},t&&t.map(function(t,n){return o.a.createElement("li",{className:"list-item",key:n},o.a.createElement("button",{className:"item",name:t.city,key:n,onClick:function(a){return e.onListClick(t,n)}},t.city))})))},k=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).updateQuery=function(e){n.state.showingInfoWindow&&(n.state.infoWindow.close(),n.setState({query:e,menuOpen:!0},n.filterList(e)))},n.onListClick=function(e){e=[e],n.setState({clickedPlace:e,menuOpen:!1}),setTimeout(function(){n.setMarkerVisibility([e[0]])},100)},n.filterList=function(e){var t=e.toUpperCase(),a=document.querySelectorAll(".item"),o=[];a.forEach(function(e){if(e.innerHTML.toUpperCase().indexOf(t)>-1){e.style.display="";var n=e.innerHTML.replace(/&amp;/,"&");o.push(n.trim())}else e.style.display="none"}),n.setState({placesOnList:o},n.setMarkerVisibility(o))},n.setMarkerVisibility=function(e){n.state.allMarkers.find(function(t){return e.includes(t.title.trim())?t.setVisible(!0):n.state.clickedPlace?!![e[0].name].includes(t.title.trim())&&(n.setState({activeMarker:t}),n.triggerMarkerClick()):t.setVisible(!1)})},n.triggerMarkerClick=function(){n.state.google.maps.event.trigger(n.state.activeMarker,"click")},n.onMarkerClick=function(e,t,a){n.state.allMarkers.forEach(function(e){t.title!==e.title&&e.setAnimation(null)}),n.setState({activeMarker:t,clickedPlace:e,infoWindow:a,menuOpen:!1,showingInfoWindow:!0})},n.onInfoWindowClose=function(){n.setState({activeMarker:{},clickedPlace:null,infoWindow:null,menuOpen:!1,showingInfoWindow:!1},n.showAllMarkers)},n.showAllMarkers=function(){n.state.allMarkers.forEach(function(e){e.setVisible(!0)})},n.getMap=function(e,t,a,o){n.setState({allMarkers:e,infoWindow:t,map:a,google:o})},n.getResults=function(e){n.setState({results:e})},n.showWindow=function(){n.setState({showingInfoWindow:!0})},n.state={activeMarker:{},results:null,allMarkers:[],clickedPlace:null,infoWindow:null,map:null,menuOpen:!1,placesOnList:"",query:"",showingInfoWindow:!1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("nav",{className:"App-header",role:"navigation"},o.a.createElement("header",null,o.a.createElement("p",null,o.a.createElement("span",{style:{color:"#3cba54"}},"G"),o.a.createElement("span",{style:{color:"#db3236"}},"r"),o.a.createElement("span",{style:{color:"#f4c20d"}},"o"),o.a.createElement("span",{style:{color:"#4885ed"}},"w"),o.a.createElement("span",null," With Google Graduation Events")),o.a.createElement("div",{tabIndex:"0"},o.a.createElement(d.slide,{noOverlay:!0,isOpen:this.state.menuOpen,tabIndex:0,className:"burger-menu",width:300},o.a.createElement(w,{className:"map-list",onListClick:this.onListClick,venues:this.state.results,query:this.state.query,updateQuery:this.updateQuery.bind(this)}))))),o.a.createElement("main",null,o.a.createElement(g,{ref:"map",className:"map-wrapper",results:this.state.results,infoWindow:this.state.infoWindow,allMarkers:this.state.allMarkers,query:this.state.query,getResults:this.getResults,getMap:this.getMap,onInfoWindowClose:this.onInfoWindowClose,onMapClicked:this.onMapClicked,onMarkerClick:this.onMarkerClick,setMarkerVisibility:this.setMarkerVisibility,triggerMarkerClick:this.triggerMarkerClick,updateQuery:this.updateQuery,showWindow:this.showWindow})))}}]),t}(a.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(k,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/2018-Grow-With-Google-Graduation-Party-Map",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/2018-Grow-With-Google-Graduation-Party-Map","/service-worker.js");y?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):v(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):v(t,e)})}}()}},[[15,2,1]]]);
//# sourceMappingURL=main.8264e765.chunk.js.map