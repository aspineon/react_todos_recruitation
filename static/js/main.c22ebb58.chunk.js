(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),i=a(2),s=a(1);function l(e,t,a){var n=e[t],r=e.filter(function(e,a){return a!==t}),o=[];for(var c in r)c==a&&o.push(n),o.push(r[c]);return o}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach(function(t){Object(s.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var m=function(e,t,a,n){return function(e,t){a.tasks;var n=e.target,r=n.value,o=n.name,c=d({},t.state.editedTask);c[o]=r,t.setState({editedTask:c})}},p=function(e,t,a,n){return function(e){var r=a.tasks,o=(prompt("do you really want to edit this task?","Y")||"").toLowerCase();return"y"===o||"yes"===o?(r[t]=d({},e.state.editedTask),n(d({},a,{tasks:r})),!0):(e.setState({editedTask:r[t]}),!1)}},f=function(e,t,a,n){return function(e,r){var o=a.tasks,c=(prompt("do you really want to remove this task?","Y")||"").toLowerCase();return("y"===c||"yes"===c)&&(E(r),n(d({},a,{tasks:o.filter(function(e,a){return a!==t})})),!0)}},b=function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"up";return function(e){var o=a.tasks;"up"===r&&t>=1?o=l(o,t,t-1):"down"===r&&t<o.length-1&&(o=l(o,t+1,t)),n(d({},a,{tasks:o}))}},g=function(e,t,a,n){arguments.length>4&&void 0!==arguments[4]&&arguments[4];return function(e,t){a.tasks;var n=e.target,r=n.value,o=n.name,c=void 0===o?"bgColor":o,i=t.state.editedTask;i[c]=r,t.setState({editedTask:i})}},v=function(e,t){return function(a){if(a.title){var n=e.tasks,r=(prompt("do you really want to add task?","Y")||"").toLowerCase();return("y"===r||"yes"===r)&&(n.push(a),t(d({},e,{tasks:n})),!0)}return alert("Task has no title"),!1}};function E(e){e.setState({isDuringEdit:!1,isOpen:!1})}var O=a(5),h=a(6),k=a(8),y=a(7),C=a(9),j=function(e){var t=e.onChange,a=e.colors;return r.a.createElement("div",{className:"range"},a.map(function(e,a){return r.a.createElement("a",{key:a,className:"range-pointer",style:{background:e},onClick:function(){t({target:{value:e}})}})}))},N=[{r:0,g:123,b:255},{r:40,g:167,b:69},{r:220,g:53,b:69},{r:255,g:193,b:7},{r:255,g:255,b:255}].map(function(e){return"rgb(".concat(e.r,",").concat(e.g,",").concat(e.b,")")}),w=function(e){var t=e.onColorChange,a=e.isDuringEdit;e.onClick;return a&&r.a.createElement("div",{className:"color-picker"},r.a.createElement(j,{colors:N,name:"r",onChange:function(e){var a=e.target.value;t({target:{value:a}})}}))},D=function(e){var t=e.onOpen,a=e.onEdit,n=e.onRemove,o=e.onColorChange,c=e.isDuringEdit,i=e.isOpen,s=e.description;return r.a.createElement("div",{className:"btn-group"},s&&r.a.createElement("button",{className:"btn btn-light",onClick:t},r.a.createElement("i",{className:["fas fa-chevron-".concat(i?"up":"down")]})),r.a.createElement("button",{className:"btn btn-".concat(c?"success":"warning"),onClick:a},r.a.createElement("i",{className:["fas fa-".concat(c?"save":"edit")]})),r.a.createElement("button",{className:"btn btn-danger",onClick:n},r.a.createElement("i",{className:"fas fa-trash"})),r.a.createElement(w,{onColorChange:o,isDuringEdit:c,onClick:a}),!c&&r.a.createElement("button",{className:"btn btn-warning",onClick:a},r.a.createElement("i",{className:"fas fa-paint-brush"})))},T=function(e){var t=e.onClick,a=e.direction,n=void 0===a?"up":a,o=e.onEdit,c=r.a.createElement("i",{className:"fas fa-chevron-".concat(n)});return r.a.createElement("div",{className:"reorder-btn"},r.a.createElement("button",{className:"btn",onClick:function(e){t(e),o()}},c))},P=function(e){var t=e.value,a=e.name,n=e.onChange,o=e.disabled,c=void 0===o||o,i=e.textarea,s=void 0!==i&&i;return r.a.createElement("div",{className:"form-group"},s?r.a.createElement("textarea",{className:"form-control",value:t,name:a,onChange:n,readOnly:c,disabled:c}):r.a.createElement("input",{className:"form-control",value:t,name:a,onChange:n,readOnly:c,disabled:c}))};function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(Object(a),!0).forEach(function(t){Object(s.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var A=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(k.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1,isDuringEdit:!1,editedTask:{title:"",description:""}},a}return Object(C.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.task,a=e.bgColor,n=e.textColor;this.setState({editedTask:x({},t,{bgColor:a,textColor:n})})}},{key:"render",value:function(){var e=this,t=this.props,a=t.task,n=t.idx,o=t.lastIdx,c=t.onAcceptChangesInTask,i=t.onEditTask,s=t.onRemove,l=t.onColorChange,u=t.onOrderChangeUp,d=t.onOrderChangeDown,m=this.state,p=m.isOpen,f=m.isDuringEdit,b=function(e,t){var a=e.isDuringEdit,n=e.editedTask;return!1===a?t:n}(this.state,a),g=b.title,v=b.description,O=b.bgColor,h=b.textColor,k=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement(P,{name:"title",value:g,onChange:function(t){i(t,e)},disabled:!f})),r.a.createElement("div",{className:"col-4"},r.a.createElement(D,Object.assign({},this.state,{description:v,onOpen:function(){!function(e){var t=e.state,a=t.isDuringEdit,n={};!1===t.isOpen?(n.isOpen=!0,n.isDuringEdit=a):(n.isOpen=!1,n.isDuringEdit=!1),e.setState(n)}(e)},onEdit:function(){f&&c(e),function(e){var t=e.state,a=t.isDuringEdit,n=(t.isOpen,{});!1===a?(n.isOpen=!0,n.isDuringEdit=!0):(n.isOpen=!1,n.isDuringEdit=!1),e.setState(n)}(e)},onRemove:function(t){s(t,e)},onColorChange:function(t){l(t,e)},onOrderChangeUp:u,onOrderChangeDown:d}))),r.a.createElement("div",{className:"col-12"},v&&p&&r.a.createElement(P,{textarea:!0,name:"description",value:v,onChange:function(t){i(t,e)},disabled:!f}))),r.a.createElement("div",{className:"row no-pm"},n!==o&&r.a.createElement(T,{direction:"down",onClick:d,onEdit:function(){E(e)}}),0!==n&&r.a.createElement(T,{direction:"up",onClick:u,onEdit:function(){E(e)}}))),y={background:O,color:h};return r.a.createElement("li",{className:"task",style:y},k)}}]),t}(r.a.Component),I=function(e){var t=e.outerState,a=e.outerSetter;return r.a.createElement("div",{className:"task-list"},r.a.createElement("ul",null,t.tasks.map(function(e,n){var o=[e,n,t,a];return r.a.createElement(A,{idx:n,lastIdx:t.tasks.length-1,key:n,task:e,editedTask:t.editedTask,onEditTask:m.apply(void 0,o),onAcceptChangesInTask:p.apply(void 0,o),onRemove:f.apply(void 0,o),onColorChange:g.apply(void 0,o),onOrderChangeUp:b.apply(void 0,o),onOrderChangeDown:b.apply(void 0,o.concat(["down"]))})})))};function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach(function(t){Object(s.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var U=function(e){var t=e.toggle,a=e.onAddTask,o=e.isOpen,c=Object(n.useState)({title:"",description:""}),s=Object(i.a)(c,2),l=s[0],u=s[1];return r.a.createElement("div",{className:["modal fade",o?"show":""].join(" "),tabIndex:"-1",role:"dialog"},r.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"New task"),r.a.createElement("button",{className:"close",onClick:function(){u({title:"",description:""}),t(!1)}},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("form",{className:"form"},r.a.createElement("div",{className:"form-group with-margin"},r.a.createElement("input",{name:"title",value:l.title,onChange:function(e){u(R({},l,{title:e.target.value}))},className:"form-control",placeholder:"Add title*"})),r.a.createElement("div",{className:"form-group with-margin"},r.a.createElement("input",{name:"description",value:l.description,className:"form-control",placeholder:"Add description",onChange:function(e){u(R({},l,{description:e.target.value}))}})))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{className:"btn btn-block btn-success",onClick:function(){a(l,u)&&(u({title:"",description:""}),t(!1))}},"Add")))))},Y=function(e){var t=e.onAddTask,a=Object(n.useState)(!1),o=Object(i.a)(a,2),c=o[0],s=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"modal-btn"},r.a.createElement("button",{className:"btn btn-block btn-success",onClick:function(){s(!0)}},r.a.createElement("i",{className:"fas fa-plus"})," TASK"," ",r.a.createElement("i",{className:"fas fa-plus"}))),r.a.createElement(U,{toggle:s,isOpen:c,onAddTask:t}))},F=(a(15),[{title:"Test1",description:""},{title:"Test2",description:"desc 2"},{title:"Test3",description:"desc 3"},{title:"Test4",description:""}]);var J=function(){var e=Object(n.useState)({tasks:F}),t=Object(i.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)(function(){},[]),r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(Y,{onAddTask:v(a,o)}),r.a.createElement(I,{outerState:a,outerSetter:o}),r.a.createElement(Y,{onAddTask:v(a,o)})))))};c.a.render(r.a.createElement(J,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.c22ebb58.chunk.js.map