(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var a=wp.blocks.registerBlockType,l=wp.blockEditor,c=l.RichText,m=l.InspectorControls,u=l.MediaUpload,s=l.MediaUploadCheck,p=wp.components,f=(p.ColorPicker,p.PanelBody),b=(p.TextControl,p.Button),y=p.__experimentalNumberControl;a("planty/testimonial",{title:(0,wp.i18n.__)("Testimonial","planty"),icon:"testimonial",category:"theme",edit:function(e){var t=e.className,n=e.attributes,o=e.setAttributes,a=n.nb,l=n.testimonials,p=NaN!==parseInt(a)&&parseInt(a)>0?parseInt(a):1,v=r(Array(p)).map((function(e,t){return wp.element.createElement("div",{className:"testimonial",key:t},wp.element.createElement(s,null,wp.element.createElement(u,{type:"image",onSelect:function(e){var n=e.sizes.full.url.replace("http://","//")||e.sizes.full.url;l[t]||(l[t]={});var a=i({},l[t]);a.imageID=e.id,a.imageSrc=n;var c=r(l);c[t]=a,o({testimonials:c})},render:function(e){var n=e.open;l[t]||(l[t]={});var r=l[t].imageSrc||"",o=l[t].title||"photo du commentaire";return wp.element.createElement(b,{onClick:n,className:r?"image-button":"image-button button"},r?wp.element.createElement("img",{src:r,alt:o}):"Choisir une image")}})),wp.element.createElement("div",{className:"testimonial-content"},wp.element.createElement(c,{tagName:"h2",placeholder:"Nom",value:void 0!==l[t]?l[t].title:"",onChange:function(e){l[t]||(l[t]={});var n=i({},l[t]);n.title=e;var a=r(l);a[t]=n,o({testimonials:a})}}),wp.element.createElement(c,{tagName:"p",placeholder:"Commentaire",value:void 0!==l[t]?l[t].content:"",onChange:function(e){l[t]||(l[t]={});var n=i({},l[t]);n.content=e;var a=r(l);a[t]=n,o({testimonials:a})}})))}));return wp.element.createElement("div",{className:t},wp.element.createElement(m,null,wp.element.createElement(f,{title:"Témoignages",initialOpen:!1},wp.element.createElement(y,{label:"Nombre de témoignages:",min:1,max:12,value:n.nb,onChange:function(e){o({nb:parseInt(e)||1})}}))),v)},save:function(){return null}})})();