(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3768],{13768:function(e,n,t){"use strict";t.d(n,{Z:function(){return F}});var o=t(2949),r=t(22122),i=t(67294),c=t(73935),a=t(159),l=t(93869),u=t(30626),d=t(76234),s=t(82568),f=t(17294),p=t(55192),v=t(92781);var h=t(5991),m=t(85061),b=t(75840),y=t(80713);function E(e,n){n?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function g(e){return parseInt(window.getComputedStyle(e)["padding-right"],10)||0}function k(e,n,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,i=[n,t].concat((0,m.Z)(o)),c=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(e.children,(function(e){1===e.nodeType&&-1===i.indexOf(e)&&-1===c.indexOf(e.tagName)&&E(e,r)}))}function R(e,n){var t=-1;return e.some((function(e,o){return!!n(e)&&(t=o,!0)})),t}function Z(e,n){var t,o=[],r=[],i=e.container;if(!n.disableScrollLock){if(function(e){var n=(0,u.Z)(e);return n.body===e?(0,y.Z)(n).innerWidth>n.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(i)){var c=(0,b.Z)();o.push({value:i.style.paddingRight,key:"padding-right",el:i}),i.style["padding-right"]="".concat(g(i)+c,"px"),t=(0,u.Z)(i).querySelectorAll(".mui-fixed"),[].forEach.call(t,(function(e){r.push(e.style.paddingRight),e.style.paddingRight="".concat(g(e)+c,"px")}))}var a=i.parentElement,l="HTML"===a.nodeName&&"scroll"===window.getComputedStyle(a)["overflow-y"]?a:i;o.push({value:l.style.overflow,key:"overflow",el:l}),l.style.overflow="hidden"}return function(){t&&[].forEach.call(t,(function(e,n){r[n]?e.style.paddingRight=r[n]:e.style.removeProperty("padding-right")})),o.forEach((function(e){var n=e.value,t=e.el,o=e.key;n?t.style.setProperty(o,n):t.style.removeProperty(o)}))}}var w=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.modals=[],this.containers=[]}return(0,h.Z)(e,[{key:"add",value:function(e,n){var t=this.modals.indexOf(e);if(-1!==t)return t;t=this.modals.length,this.modals.push(e),e.modalRef&&E(e.modalRef,!1);var o=function(e){var n=[];return[].forEach.call(e.children,(function(e){e.getAttribute&&"true"===e.getAttribute("aria-hidden")&&n.push(e)})),n}(n);k(n,e.mountNode,e.modalRef,o,!0);var r=R(this.containers,(function(e){return e.container===n}));return-1!==r?(this.containers[r].modals.push(e),t):(this.containers.push({modals:[e],container:n,restore:null,hiddenSiblingNodes:o}),t)}},{key:"mount",value:function(e,n){var t=R(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),o=this.containers[t];o.restore||(o.restore=Z(o,n))}},{key:"remove",value:function(e){var n=this.modals.indexOf(e);if(-1===n)return n;var t=R(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),o=this.containers[t];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(n,1),0===o.modals.length)o.restore&&o.restore(),e.modalRef&&E(e.modalRef,!0),k(o.container,e.mountNode,e.modalRef,o.hiddenSiblingNodes,!1),this.containers.splice(t,1);else{var r=o.modals[o.modals.length-1];r.modalRef&&E(r.modalRef,!1)}return n}},{key:"isTopModal",value:function(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}]),e}();var x=function(e){var n=e.children,t=e.disableAutoFocus,o=void 0!==t&&t,r=e.disableEnforceFocus,a=void 0!==r&&r,l=e.disableRestoreFocus,d=void 0!==l&&l,s=e.getDoc,p=e.isEnabled,v=e.open,h=i.useRef(),m=i.useRef(null),b=i.useRef(null),y=i.useRef(),E=i.useRef(null),g=i.useCallback((function(e){E.current=c.findDOMNode(e)}),[]),k=(0,f.Z)(n.ref,g),R=i.useRef();return i.useEffect((function(){R.current=v}),[v]),!R.current&&v&&"undefined"!==typeof window&&(y.current=s().activeElement),i.useEffect((function(){if(v){var e=(0,u.Z)(E.current);o||!E.current||E.current.contains(e.activeElement)||(E.current.hasAttribute("tabIndex")||E.current.setAttribute("tabIndex",-1),E.current.focus());var n=function(){null!==E.current&&(e.hasFocus()&&!a&&p()&&!h.current?E.current&&!E.current.contains(e.activeElement)&&E.current.focus():h.current=!1)},t=function(n){!a&&p()&&9===n.keyCode&&e.activeElement===E.current&&(h.current=!0,n.shiftKey?b.current.focus():m.current.focus())};e.addEventListener("focus",n,!0),e.addEventListener("keydown",t,!0);var r=setInterval((function(){n()}),50);return function(){clearInterval(r),e.removeEventListener("focus",n,!0),e.removeEventListener("keydown",t,!0),d||(y.current&&y.current.focus&&y.current.focus(),y.current=null)}}}),[o,a,d,p,v]),i.createElement(i.Fragment,null,i.createElement("div",{tabIndex:0,ref:m,"data-test":"sentinelStart"}),i.cloneElement(n,{ref:k}),i.createElement("div",{tabIndex:0,ref:b,"data-test":"sentinelEnd"}))},C={root:{zIndex:-1,position:"fixed",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},I=i.forwardRef((function(e,n){var t=e.invisible,c=void 0!==t&&t,a=e.open,l=(0,o.Z)(e,["invisible","open"]);return a?i.createElement("div",(0,r.Z)({"aria-hidden":!0,ref:n},l,{style:(0,r.Z)({},C.root,c?C.invisible:{},l.style)})):null}));var A=new w,F=i.forwardRef((function(e,n){var t=(0,a.Z)(),h=(0,l.Z)({name:"MuiModal",props:(0,r.Z)({},e),theme:t}),m=h.BackdropComponent,b=void 0===m?I:m,y=h.BackdropProps,g=h.children,k=h.closeAfterTransition,R=void 0!==k&&k,Z=h.container,w=h.disableAutoFocus,C=void 0!==w&&w,F=h.disableBackdropClick,P=void 0!==F&&F,S=h.disableEnforceFocus,T=void 0!==S&&S,L=h.disableEscapeKeyDown,N=void 0!==L&&L,D=h.disablePortal,M=void 0!==D&&D,O=h.disableRestoreFocus,B=void 0!==O&&O,K=h.disableScrollLock,W=void 0!==K&&K,z=h.hideBackdrop,H=void 0!==z&&z,_=h.keepMounted,V=void 0!==_&&_,q=h.manager,Y=void 0===q?A:q,j=h.onBackdropClick,G=h.onClose,J=h.onEscapeKeyDown,Q=h.onRendered,U=h.open,X=(0,o.Z)(h,["BackdropComponent","BackdropProps","children","closeAfterTransition","container","disableAutoFocus","disableBackdropClick","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onEscapeKeyDown","onRendered","open"]),$=i.useState(!0),ee=$[0],ne=$[1],te=i.useRef({}),oe=i.useRef(null),re=i.useRef(null),ie=(0,f.Z)(re,n),ce=function(e){return!!e.children&&e.children.props.hasOwnProperty("in")}(h),ae=function(){return(0,u.Z)(oe.current)},le=function(){return te.current.modalRef=re.current,te.current.mountNode=oe.current,te.current},ue=function(){Y.mount(le(),{disableScrollLock:W}),re.current.scrollTop=0},de=(0,p.Z)((function(){var e=function(e){return e="function"===typeof e?e():e,c.findDOMNode(e)}(Z)||ae().body;Y.add(le(),e),re.current&&ue()})),se=i.useCallback((function(){return Y.isTopModal(le())}),[Y]),fe=(0,p.Z)((function(e){oe.current=e,e&&(Q&&Q(),U&&se()?ue():E(re.current,!0))})),pe=i.useCallback((function(){Y.remove(le())}),[Y]);if(i.useEffect((function(){return function(){pe()}}),[pe]),i.useEffect((function(){U?de():ce&&R||pe()}),[U,pe,ce,R,de]),!V&&!U&&(!ce||ee))return null;var ve=function(e){return{root:{position:"fixed",zIndex:e.zIndex.modal,right:0,bottom:0,top:0,left:0},hidden:{visibility:"hidden"}}}(t||{zIndex:v.Z}),he={};return void 0===g.props.tabIndex&&(he.tabIndex=g.props.tabIndex||"-1"),ce&&(he.onEnter=(0,s.Z)((function(){ne(!1)}),g.props.onEnter),he.onExited=(0,s.Z)((function(){ne(!0),R&&pe()}),g.props.onExited)),i.createElement(d.Z,{ref:fe,container:Z,disablePortal:M},i.createElement("div",(0,r.Z)({ref:ie,onKeyDown:function(e){"Escape"===e.key&&se()&&(J&&J(e),N||(e.stopPropagation(),G&&G(e,"escapeKeyDown")))},role:"presentation"},X,{style:(0,r.Z)({},ve.root,!U&&ee?ve.hidden:{},X.style)}),H?null:i.createElement(b,(0,r.Z)({open:U,onClick:function(e){e.target===e.currentTarget&&(j&&j(e),!P&&G&&G(e,"backdropClick"))}},y)),i.createElement(x,{disableEnforceFocus:T,disableAutoFocus:C,disableRestoreFocus:B,getDoc:ae,isEnabled:se,open:U},i.cloneElement(g,he))))}))},76234:function(e,n,t){"use strict";var o=t(67294),r=t(73935),i=t(34236),c=t(17294);var a="undefined"!==typeof window?o.useLayoutEffect:o.useEffect,l=o.forwardRef((function(e,n){var t=e.children,l=e.container,u=e.disablePortal,d=void 0!==u&&u,s=e.onRendered,f=o.useState(null),p=f[0],v=f[1],h=(0,c.Z)(o.isValidElement(t)?t.ref:null,n);return a((function(){d||v(function(e){return e="function"===typeof e?e():e,r.findDOMNode(e)}(l)||document.body)}),[l,d]),a((function(){if(p&&!d)return(0,i.Z)(n,p),function(){(0,i.Z)(n,null)}}),[n,p,d]),a((function(){s&&(p||d)&&s()}),[s,p,d]),d?o.isValidElement(t)?o.cloneElement(t,{ref:h}):t:p?r.createPortal(t,p):p}));n.Z=l},75840:function(e,n,t){"use strict";function o(){var e=document.createElement("div");e.style.width="99px",e.style.height="99px",e.style.position="absolute",e.style.top="-9999px",e.style.overflow="scroll",document.body.appendChild(e);var n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),n}t.d(n,{Z:function(){return o}})}}]);
//# sourceMappingURL=3768.0627289e23990174988d.js.map