// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@esm/index.mjs";function e(e,s,t,o){var a,f,n,p,u,d,h,i,l,m,j,v,b,c,g;for(a=r(e),m=s[0],l=s[1],i=s[2],u=t[0],p=t[1],n=t[2],f=[],b=0;b<m;b++){for(c=[],d=o+u*b,v=0;v<l;v++){for(g=[],h=d+p*v,j=0;j<i;j++)g.push(a(e,h)),h+=n;c.push(g)}f.push(c)}return f}export{e as default};
//# sourceMappingURL=index.mjs.map
