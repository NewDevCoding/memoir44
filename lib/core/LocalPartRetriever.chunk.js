/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[7],{571:function(xa,ta,h){h.r(ta);var pa=h(0),qa=h(3),na=h(194);xa=h(121);var ja=h(325);h=h(492);var ka=window;xa=function(ha){function x(aa,r,n){r=ha.call(this,aa,r,n)||this;if(aa.name&&"xod"!==aa.name.toLowerCase().split(".").pop())throw Error("Not an XOD file");if(!ka.FileReader||!ka.File||!ka.Blob)throw Error("File API is not supported in this browser");r.file=aa;r.SI=[];r.rR=0;return r}Object(pa.c)(x,ha);x.prototype.nV=function(aa,
r,n){var f=this,a=new FileReader;a.onloadend=function(b){if(0<f.SI.length){var e=f.SI.shift();e.hEa.readAsBinaryString(e.file)}else f.rR--;if(a.error){b=a.error;if(b.code===b.ABORT_ERR){Object(qa.j)("Request for chunk ".concat(r.start,"-").concat(r.stop," was aborted"));return}return n(b)}if(b=a.content||b.target.result)return n(!1,b);Object(qa.j)("No data was returned from FileReader.")};r&&(aa=(aa.slice||aa.webkitSlice||aa.mozSlice||aa.xOa).call(aa,r.start,r.stop));0===f.SI.length&&50>f.rR?(a.readAsBinaryString(aa),
f.rR++):f.SI.push({hEa:a,file:aa});return function(){a.abort()}};x.prototype.Ty=function(aa){var r=this;r.NI=!0;var n=na.a;r.nV(r.file,{start:-n,stop:r.file.size},function(f,a){if(f)return Object(qa.j)("Error loading end header: %s ".concat(f)),aa(f);if(a.length!==n)throw Error("Zip end header data is wrong size!");r.Pe=new ja.a(a);var b=r.Pe.C6();r.nV(r.file,b,function(e,w){if(e)return Object(qa.j)("Error loading central directory: %s ".concat(e)),aa(e);if(w.length!==b.stop-b.start)throw Error("Zip central directory data is wrong size!");
r.Pe.aba(w);r.VQ=!0;r.NI=!1;return aa(!1)})})};x.prototype.MW=function(aa,r){var n=this,f=n.yj[aa];if(n.Pe.Z3(aa)){var a=n.Pe.UC(aa),b=n.nV(n.file,a,function(e,w){delete n.yj[aa];if(e)return Object(qa.j)('Error loading part "%s": %s, '.concat(aa,", ").concat(e)),r(e);if(w.length!==a.stop-a.start)throw Error("Part data is wrong size!");r(!1,aa,w,n.Pe.D8(aa))});f.$da=!0;f.cancel=b}else r(Error('File not found: "'.concat(aa,'"')),aa)};return x}(xa.a);Object(h.a)(xa);Object(h.b)(xa);ta["default"]=xa}}]);}).call(this || window)