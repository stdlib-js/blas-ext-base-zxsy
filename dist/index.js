"use strict";var c=function(v,t){return function(){try{return t||v((t={exports:{}}).exports,t),t.exports}catch(n){throw (t=0, n)}};};var p=c(function(I,d){
var j=require('@stdlib/strided-base-reinterpret-complex128/dist'),o=5;function g(v,t,n,q,s,z,b){var i,e,a,r,x,y,f,u;if(v<=0)return s;if(i=j(t,0),e=j(s,0),a=q*2,r=b*2,x=n*2,y=z*2,n===1&&z===1){if(f=v%o,f>0)for(u=0;u<f;u++)e[r]=i[a]-e[r],e[r+1]=i[a+1]-e[r+1],a+=x,r+=y;if(v<o)return s;for(u=f;u<v;u+=o)e[r]=i[a]-e[r],e[r+1]=i[a+1]-e[r+1],e[r+2]=i[a+2]-e[r+2],e[r+3]=i[a+3]-e[r+3],e[r+4]=i[a+4]-e[r+4],e[r+5]=i[a+5]-e[r+5],e[r+6]=i[a+6]-e[r+6],e[r+7]=i[a+7]-e[r+7],e[r+8]=i[a+8]-e[r+8],e[r+9]=i[a+9]-e[r+9],a+=o*2,r+=o*2;return s}for(u=0;u<v;u++)e[r]=i[a]-e[r],e[r+1]=i[a+1]-e[r+1],a+=x,r+=y;return s}d.exports=g
});var R=c(function(J,w){
var l=require('@stdlib/strided-base-stride2offset/dist'),h=p();function k(v,t,n,q,s){return h(v,t,n,l(v,n),q,s,l(v,s))}w.exports=k
});var M=c(function(K,E){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=R(),B=p();A(_,"ndarray",B);E.exports=_
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=M(),m,O=D(C(__dirname,"./native.js"));F(O)?m=G:m=O;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
