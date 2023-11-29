"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[708],{36121:(e,i,t)=>{t.d(i,{n:()=>A});var s=t(59496),r=t(84875),n=t.n(r),a=t(97601),l=t(51697),c=t(88559),d=t(21054),o=t(30099),u=t(85830),m=t(82760),x=t(93786);var h=t(40981),j=t(74433),p=t(30477);const g="main-topBar-contentArea",v="queue-tabBar-headerIsCentered",y="queue-tabBar-headerItem",f="queue-tabBar-moreButton",k="queue-tabBar-moreButtonActive",b="yxf_6IsQEmHjijEBUMTP",w="queue-tabBar-active",C="queue-tabBar-headerItemLink",N="queue-tabBar-header",E="queue-tabBar-chevron";var I=t(4637);const R=({items:e,activeItemId:i})=>(0,I.jsx)(j.v,{children:e.map((e=>e.disabled?(0,I.jsx)(p.s,{disabled:!0,role:"menuitemradio",className:b,onClick:e.handleClick,children:e.title},e.uri):(0,I.jsx)(p.s,{role:"menuitemradio",to:e.to,end:!0,"aria-checked":e.itemId===i,className:({isActive:e})=>n()(b,{[w]:e}),onClick:e.handleClick,children:e.title},e.uri)))});var U=t(46603);const A=(0,s.memo)((function({isCentered:e,links:i,landmarkLabel:t,className:r}){const j=(0,s.useRef)(null),[p,b]=(0,s.useState)([]),[A,T]=(0,s.useState)(0),[D,O]=(0,s.useState)([]),S=function(){const[e,i]=(0,s.useState)(window.innerWidth),{scrollNodeChildRef:t}=(0,s.useContext)(m.VX),r=(0,u.y1)((e=>{e?.width&&i(e.width)}),250);return(0,x.y)({refOrElement:t,observeOnly:"width",onResize:r}),e}()??1/0,{pathname:B}=(0,a.TH)(),P=i.find((e=>e.to===B));return(0,s.useEffect)((()=>{j.current&&T(j.current.clientWidth)}),[S]),(0,s.useEffect)((()=>{if(!j.current)return;const e=Array.from(j.current.children).map((e=>e.clientWidth));b(e)}),[i]),(0,s.useEffect)((()=>{if(!j.current)return;if(p.slice(0,-1).reduce(((e,i)=>e+i),0)<=A)return void O([]);const e=p.reduce(((e,i)=>e>i?e:i),0),i=[];let t=e;p.forEach(((e,s)=>{A>=t+e?t+=e:i.push(s)})),O(i)}),[A,p]),(0,I.jsx)("nav",{className:n()(r,g),"aria-label":t,children:(0,I.jsxs)("ul",{className:e?v:N,ref:j,children:[i.filter(((e,i)=>!D.includes(i))).map((e=>{const i=e?.render??(e=>e);return(0,I.jsx)(s.Fragment,{children:i((0,I.jsx)("li",{className:y,children:e.disabled?(0,I.jsx)("div",{className:C,children:(0,I.jsx)(l.D,{variant:"mestoBold",children:e.title})}):(0,I.jsx)(U.O,{end:!0,className:({isActive:e})=>n()(C,{[w]:e}),to:e.to,onClick:e.handleClick,children:(0,I.jsx)(l.D,{variant:"mestoBold",children:e.title})})}))},e.to)})),D.length||0===p.length?(0,I.jsx)("li",{className:y,children:(0,I.jsx)(h.x,{renderInline:!0,menu:(0,I.jsx)(R,{items:i.filter(((e,i)=>D.includes(i))),activeItemId:P?.itemId}),children:(e,i,t)=>(0,I.jsxs)("button",{className:n()(f,{[k]:P}),type:"button",onClick:i,ref:t,children:[(0,I.jsx)(l.D,{variant:"mestoBold",children:P?P.title:o.ag.get("more")}),e?(0,I.jsx)(c.U,{iconSize:16,className:E,"aria-hidden":"true"}):(0,I.jsx)(d.i,{iconSize:16,className:E,"aria-hidden":"true"})]})})}):null]})})}))},71415:(e,i,t)=>{t.d(i,{I:()=>x});var s=t(13837),r=t(59496),n=t(30099),a=t(36121),l=t(40245),c=t(13825),d=t(36516);const o="queue-tabBar-nav";var u=t(4637);const m=()=>{const e=(0,d.Y)(),i=(0,r.useCallback)((e=>(0,u.jsx)(c.v,{placement:"bottomEnd",arrow:"topStart",title:n.ag.get("pick-and-shuffle.upsell.title.queue"),children:e})),[]),t=(0,r.useMemo)((()=>[{title:n.ag.get("playback-control.queue"),itemId:"queue",to:"/queue",uri:"spotify:app:queue",render:i,disabled:e},{title:n.ag.get("view.recently-played"),itemId:"history",to:"/history",uri:"spotify:app:history"}]),[e,i]);return(0,u.jsx)(l.w,{children:(0,u.jsx)(a.n,{className:o,links:t})})},x=({children:e})=>{const i=(0,s.nF)();return(0,u.jsxs)("section",{className:"contentSpacing",children:[e,i&&(0,u.jsx)(m,{})]})}},51241:(e,i,t)=>{t.r(i),t.d(i,{default:()=>F});var s=t(13837),r=t(51697),n=t(30099),a=t(32999),l=t(47642),c=t(4637);const d=()=>(0,c.jsxs)("div",{className:l.Z.emptyContainer,children:[(0,c.jsx)(a.Y,{iconSize:64,"aria-hidden":"true"}),(0,c.jsx)(r.D,{as:"h1",variant:"alto",semanticColor:"textBase",className:l.Z.emptyContainerTitle,children:n.ag.get("history.empty-title")}),(0,c.jsx)("p",{children:n.ag.get("history.empty-description")})]});var o=t(59496),u=t(36342),m=t(97428),x=t(15644),h=t(65791),j=t(95195),p=t(87564),g=t(34997),v=t(14887),y=t(41946),f=t(17887),k=t(51431),b=t(90216),w=t(42808),C=t(19341),N=t(70231),E=t(46447),I=t(4085),R=t(29553),U=t(54110),A=t(13138),T=t(57161),D=t(42228),O=t(17106);const S=o.memo((function({uri:e,name:i,duration_ms:t,index:s,imgUrl:r,artists:a,album:l,isExplicit:d,isMOGEFRestricted:o,contextItem:u,type:m}){const{isActive:h,isPlaying:p,triggerPlay:g,togglePlay:S}=(0,A.n)({uri:e,pages:[{items:[{...u}]}]},{featureIdentifier:"history"}),B=m===j.p.TRACK,P=m===j.p.EPISODE,M=m===j.p.CHAPTER,_=(0,U._)(e),G=(0,O.k)(e),{badges:L,hasBadges:F}=(0,T.r)({downloadAvailability:_,isExplicit:d,isMOGEFRestricted:o}),Z=a?.map((e=>e.name)).join(n.ag.getSeparator())||"";let q;return P?q=(0,c.jsx)(y.k,{uri:e,contextUri:e,showUri:l.uri}):M?q=(0,c.jsx)(D.r,{uri:e}):B&&(0,v.dB)(e)?q=(0,c.jsx)(f.N,{uri:e,contextUri:e}):B&&(q=(0,c.jsx)(k.$,{uri:e,contextUri:e,albumUri:l.uri,artists:a})),(0,c.jsx)(x.ZP,{value:"row",index:s,children:(0,c.jsx)(N._,{menu:q,children:(0,c.jsxs)(C.c,{uri:e,contextUri:e,index:s,ariaRowIndex:s,onTriggerPlay:()=>{g()},isActive:h,isPlayable:G,ageRestricted:o,dragMetadata:{name:i,createdBy:Z},children:[(0,c.jsxs)(b.vZ,{ariaColIndex:0,children:[(0,c.jsx)(b.VG,{uri:e,src:r,isPlaying:p,isActive:h,isLocked:!1,onClick:()=>{S()},isEpisode:(0,v.hn)(e),playAriaLabel:n.ag.get("tracklist.a11y.play",i,Z)}),(0,c.jsxs)(b.vm,{children:[(0,c.jsx)(b.Wh,{titleText:i,children:i}),F&&(0,c.jsxs)(b.g3,{children:[L.download&&(0,c.jsx)(E.G,{size:16}),L.explicit&&(0,c.jsx)(I.N,{}),L.nineteen&&(0,c.jsx)(R.X,{className:w.Z.nineteen,size:16})]}),(0,c.jsx)(b.K9,{children:(0,v.wj)(e)?(0,c.jsx)(b.T6,{artists:a}):a[0]?.name??""})]})]}),(0,c.jsx)(b.UA,{ariaColIndex:2,children:(0,c.jsx)(b.BM,{nonInteractive:(0,v.dB)(e),uri:l.uri,name:l.name,creatorUri:a?.[0]?.uri,children:l.name})}),(0,c.jsxs)(b.mU,{ariaColIndex:1,children:[!(0,v.dB)(e)&&!M&&(0,c.jsx)(b.qS,{uri:e,type:m}),(0,c.jsx)(b.A$,{duration:t}),(0,c.jsx)(b.Zv,{menu:q,label:n.ag.get("more.label.track",i,Z)})]})]})})})}),((e,i)=>e.uri===i.uri)),B=o.memo((function({items:e}){const i=(0,o.useCallback)(((e,i)=>{const t=(0,g.X)(e.images??[],{desiredSize:40});return(0,h.G_)(e)?(0,c.jsx)(S,{index:i,uri:e.isLocal?e.uri:(0,m.$)(e),name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.album,artists:e.artists,isExplicit:e.isExplicit??!1,isMOGEFRestricted:e.is19PlusOnly??!1,contextItem:e,type:j.p.TRACK},i+e.uri):(0,h.iw)(e)?(0,c.jsx)(S,{index:i,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.show,artists:[],isExplicit:!1,isMOGEFRestricted:!1,contextItem:e,type:j.p.EPISODE},i+e.uri):(0,h.G7)(e)?(0,c.jsx)(S,{index:i,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.book,artists:[],isExplicit:!1,isMOGEFRestricted:!1,contextItem:e,type:j.p.CHAPTER},i+e.uri):((0,h.k6)(e)||(0,h.RB)(e)||(0,p._)(e),(0,c.jsx)(u.hU,{height:`${u.dN}px`}))}),[]),t=(0,o.useMemo)((()=>[u.QD.TITLE,u.QD.ALBUM_OR_PODCAST,u.QD.DURATION]),[]),s=(0,o.useCallback)((e=>e.uri),[]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(x.ZP,{value:"play-history-tracklist",children:(0,c.jsx)(u.Pv,{ariaLabel:"play-history",hasHeaderRow:!0,columns:t,renderRow:i,resolveUri:s,tracks:e,nrTracks:e.length,rowPlaceholder:u.hU,limit:50})})})})),P="dt3fysZYdQ6hhWfpmjAu",M="n6LsTkKvpO88xeRyRTdw",_=()=>{const{isLoading:e,data:i}=(0,s.U5)();return e?null:i?.items.length?(0,c.jsxs)("div",{className:P,children:[(0,c.jsx)(r.D,{as:"h1",variant:"canon",semanticColor:"textBase",className:M,children:n.ag.get("view.recently-played")}),(0,c.jsx)(B,{items:i.items})]}):(0,c.jsx)(d,{})};var G=t(71415),L=t(43699);const F=()=>(0,s.nF)()?(0,c.jsx)(G.I,{children:(0,c.jsx)(_,{})}):(0,c.jsx)(L.InstrumentedRedirect,{to:"/"})},97428:(e,i,t)=>{t.d(i,{$:()=>s});const s=e=>e?.linked_from?.uri||e.uri}}]);
//# sourceMappingURL=xpui-routes-play-history-page.js.map