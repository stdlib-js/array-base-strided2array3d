"use strict";var y=function(v,r){return function(){try{return r||v((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var l=y(function(w,h){
var G=require('@stdlib/array-base-resolve-getter/dist');function b(v,r,a,m){var d,i,f,n,c,p,u,S,q,g,o,t,e,x,s;for(d=G(v),g=r[0],q=r[1],S=r[2],c=a[0],n=a[1],f=a[2],i=[],e=0;e<g;e++){for(x=[],p=m+c*e,t=0;t<q;t++){for(s=[],u=p+n*t,o=0;o<S;o++)s.push(d(v,u)),u+=f;x.push(s)}i.push(x)}return i}h.exports=b
});var j=l();module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
