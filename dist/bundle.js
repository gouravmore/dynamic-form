!function(e){var n={};function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(o,a,function(n){return e[n]}.bind(null,a));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){t(1),t(2),t(3)},function(e,n){(function(){$.fn.SBdynamicForm=function(e){var n,t,o,a,c,i,r,f,d;return o={id:"dynamicFormDiv",config:o,data:metadata,addHtml:function(e){return!1}},$.extend(o,e),t=function(){var n=e.config.templateLayout;"row"==Object.keys(n)[0]?i(n[row],"dynamicFormDiv","row"):i(n.col,"dynamicFormDiv","col")},a=function(e,n,t){c();var o=$("#"+e),a=t.name?"cont_"+t.name:n;if(console.log("eleId",a),t.code)var i='<div id="'+n+'" name="'+t.code+'">'+t.name+"</div>";else i='<div id="'+n+'">'+t.name+"</div>";o.append(i);var r=$("#"+n),f={width:t.style&&t.style.width?'"'+t.style.width+'%"':"100%","flex-grow":t.style&&t.style.width?t.style.width:"10"};r.css(f),t&&t.class&&r.addClass(t.class)},c=function(){n&&clearTimeout(n),n=setTimeout((function(){f()}),200)},i=function(e,n,t){e instanceof Array?e.forEach((function(e){r(e,n,t)})):r(e,n,t)},r=function(e,t,o){clearInterval(n),e.class=o+"-container";var c,r=o+Math.random().toString(36).substring(2,15);a(t,r,e),e.row?(c=e.row,i(c,r,"row")):e.col&&(c=e.col,i(c,r,"col"))},f=function(){dynamicFields.forEach((function(e){dfElements.createElement(e),"select"!=e.inputType&&"multiselect"!=e.inputType||formData.forEach((function(n){e.code===n.code&&dfElements.setOptions(e,n.terms)}))})),d((function(){dependency.mapObject(dynamicFields,formData,(function(e){dependency.init(e)}))}))},d=function(e){$.each(metadata,(function(e,n){dfElements.setMetadata(e,n)})),e()},t()}}).call(this),setTimeout((function(){jQuery("#dynamicFormDiv").SBdynamicForm({id:"dynamicFormDiv",config:formConfig,data:metadata})}),0)},function(e,n){var t={fields:void 0,init:function(e){this.fields=e},getTargetField:function(e){var n=[];return this.fields.forEach((function(t){t.code===e.getAttribute("code")&&(n=t)})),n},updateForm:function(e){e&&e.range&&t.getAssociations($("#df_"+e.code).val(),e.range,(function(n){var o=t.getFormValues();t.getParentAssociations(e,n,o,(function(n){t.applyDependencyRules(e,n,!0)}))}))},getFormValues:function(){var e=[];return this.fields.forEach((function(n){e[n.code]=$("#df_"+n.code).val()})),e},getParentAssociations:function(e,n,o,a){e.parent&&e.parent.length&&e.parent.forEach((function(e){t.fields.forEach((function(a){a.code===e&&a.range.forEach((function(a){Array.isArray(o[e])&&o[e].length>0?o[e].forEach((function(e){a.name===e&&(n=t.getCommonAssociations(a.associations,n))})):a.name===o[e]&&(n=t.getCommonAssociations(a.associations,n))}))}))})),a(n)},getCommonAssociations:function(e,n){var t=[];return e&&e.length&&e.forEach((function(e){n.forEach((function(n){e.code===n.code&&t.push(n)}))})),t},getAssociations:function(e,n,t){var o=[],a=[],c=[];"string"==typeof e?o.push(e):o=[],n.forEach((function(e){o.forEach((function(n,t){e.name===n&&c.push(e)}))})),c.forEach((function(e,n){e.associations&&e.associations.forEach((function(e,n){a.push(e)}))})),t&&t(a)},applyDependencyRules:function(e,n){var o;e.depends&&e.depends.length&&e.depends.forEach((function(e){var a;o=[],n.forEach((function(n){e==n.category&&o.push(n)})),t.fields.forEach((function(n){e!=n.code||(a=n)})),o.length&&dfElements.setOptions(a,o)}))},mapObject:function(e,n,t){this.mapParents(e,(function(n){e=n})),e.forEach((function(e){n.forEach((function(n){e.code===n.code&&(e.range=n.terms)}))})),t(e)},mapParents:function(e,n){return e.forEach((function(n,t){e[t].parent=[]})),e.forEach((function(n,t){n.depends&&n.depends.forEach((function(t){e.forEach((function(o,a){t===o.code&&e[a].parent.push(n.code)}))}))})),n(e)}};window.dependency=t},function(e,n){var t={create:function(){},createElement:function(e){switch(e.inputType){case"text":t.addElement(e,"input");break;case"textarea":t.addElement(e,"textarea");break;case"checkbox":t.addElement(e,"input","checkbox");break;case"select":case"multiselect":t.addElement(e,"select");break;case"label":t.addElement(e,"label");break;default:console.log("no element added")}},addElement:function(e,n,t){var o=$('[name ="'+e.code+'"]');if(o){var a=o[0],c="<span>"+e.name+"</span><"+n+' id="df_'+e.code+'" onChange="dfElements.updateForm(this)" code="'+e.code+'" data="'+e.name+'"></'+n+">";$(a).html(c),t&&$("#df_"+e.code).attr("type",t)}},updateForm:function(e){var n=dependency.getTargetField(e);dependency.updateForm(n)},getSortedOptions:function(e){return e=e.sort((function(e,n){var t=e.name.toUpperCase(),o=n.name.toUpperCase();return t<o?-1:t>o?1:0}))},getUniqOptions:function(e){let n=[],t={};for(let o of e)t[o.name]||(n.push(o),t[o.name]=!0);return n},setOptions:function(e,n){if(n=this.getUniqOptions(n),n=this.getSortedOptions(n),"select"==e.inputType||"multiselect"==e.inputType){var t=$("#df_"+e.code);if(t.empty(),t.length){if(t.prop)var o=t.prop("options");else o=t.attr("options");o[0]=new Option(e.placeholder,""),$.each(n,(function(e,n){o[e+1]=new Option(n.name,n.name)}))}}},setSelect:function(e,n){$("#df_"+e+" option:selected").removeAttr("selected"),$("#df_"+e+" option[value="+n+"]").attr("selected",!0)},setMetadata:function(e,n){$("#df_"+e).length&&Array.isArray(n)?t.setSelect(e,n[0]):$("#df_"+e).val(n)}};window.dfElements=t}]);