(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),s=a.n(i),o=(a(15),a(16),a(1)),m=a(2),l=a(4),c=a(3),u=a(6),d=a(5),p=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{id:"gift-card-amount__".concat(this.props.amount),type:"radio",name:"amount",value:this.props.amount,onChange:this.props.setAmount}),r.a.createElement("label",{htmlFor:"gift-card-amount__".concat(this.props.amount)},"$",this.props.amount))}}]),t}(r.a.Component),h=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"input-group".concat(this.props.error?" has-error":"")},r.a.createElement("label",{htmlFor:"gift-card-amount__custom"},"$"),r.a.createElement("input",{id:"gift-card-amount__custom",type:"number",autoComplete:"off",placeholder:"Other",onChange:this.props.handleChange}))}}]),t}(r.a.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.message&&r.a.createElement("span",{className:"error-message"},this.props.message))}}]),t}(r.a.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"input-wrapper".concat(this.props.error?" has-error":"")},r.a.createElement("label",{htmlFor:this.props.id},this.props.label),r.a.createElement("input",{id:this.props.id,name:this.props.name,type:this.props.type,placeholder:this.props.placeholder,value:this.props.value,onChange:this.props.handleChange}),r.a.createElement(f,{message:this.props.error}))}}]),t}(r.a.Component),E="Please enter a gift card value between $5 and $500.",b="Enter the recipient's name.",g="Enter a valid email address for the recipient",O="Enter the sender's name",j="Enter a valid email address for the sender",y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={errors:{},fields:{},validate:!1},a.timer=null,a.setAmount=a.setAmount.bind(Object(u.a)(a)),a.setCustomAmount=a.setCustomAmount.bind(Object(u.a)(a)),a.submitForm=a.submitForm.bind(Object(u.a)(a)),a.updateStateFields=a.updateStateFields.bind(Object(u.a)(a)),a.validateForm=a.validateForm.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"clearCustomAmountInput",value:function(){document.getElementById("gift-card-amount__custom").value=""}},{key:"deselectRadioControls",value:function(){document.getElementsByName("amount").forEach(function(e){e.checked=!1})}},{key:"setAmount",value:function(e){var t=this.state.fields,a=this.state.errors;t.amount=e.target.value,a.amount="",this.setState({fields:t,errors:a}),this.clearCustomAmountInput()}},{key:"setCustomAmount",value:function(e){var t=this,a=e.target.value;clearTimeout(this.timer),this.timer=setTimeout(function(){return t.validateAmount(a)},500),""!==a&&this.deselectRadioControls()}},{key:"submitForm",value:function(e){var t=this,a=this.state.fields;e.preventDefault(),this.setState({validate:!0},function(){t.validateForm()&&(alert("A $".concat(a.amount," gift card for ").concat(a.recipientName," from ").concat(a.senderName," has been added to your cart.")),t.clearCustomAmountInput(),t.deselectRadioControls(),t.setState({fields:{},errors:{},validate:!1}))})}},{key:"updateStateFields",value:function(e){var t=this.state.fields;t[e.target.name]=e.target.value,this.setState({fields:t}),this.validateForm()}},{key:"validateAmount",value:function(e){var t=this.state.fields,a=this.state.errors,n=!0;return t.amount=e,e&&(e<this.props.minAmount||e>this.props.maxAmount)?(n=!1,a.amount=E):(n=!0,a.amount=""),this.setState({fields:t,errors:a}),n}},{key:"validateForm",value:function(){var e=new RegExp(/\S+@\S+/),t=this.state.fields,a={};return this.state.validate&&(t.amount&&this.validateAmount(t.amount)||(a.amount=E),t.recipientName||(a.recipientName=b),t.recipientEmail&&e.test(t.recipientEmail)||(a.recipientEmail=g),t.senderName||(a.senderName=O),t.senderEmail&&e.test(t.recipientEmail)||(a.senderEmail=j)),this.setState({errors:a}),0===Object.values(a).length}},{key:"render",value:function(){var e=this.state.fields.amount&&!this.state.errors.amount?"$".concat(this.state.fields.amount):"";return r.a.createElement("form",{id:"gift-card-form",noValidate:!0,onSubmit:this.submitForm},r.a.createElement("fieldset",{className:"gift-card-amount section-margin"},r.a.createElement("legend",null,"Select a gift card amount"),r.a.createElement("span",{className:"additional-description"},"Choose an amount between $",this.props.minAmount," and $",this.props.maxAmount),r.a.createElement("div",{className:"form-group gift-card-amount__options"},r.a.createElement(p,{amount:"25",setAmount:this.setAmount}),r.a.createElement(p,{amount:"50",setAmount:this.setAmount}),r.a.createElement(p,{amount:"100",setAmount:this.setAmount}),r.a.createElement(p,{amount:"200",setAmount:this.setAmount}),r.a.createElement(h,{error:this.state.errors.amount,handleChange:this.setCustomAmount})),r.a.createElement(f,{message:this.state.errors.amount})),r.a.createElement("fieldset",{className:"section-margin"},r.a.createElement("legend",null,"Send a ",e," gift card to:"),r.a.createElement("div",{className:"form-group flex-equal-widths"},r.a.createElement(v,{error:this.state.errors.recipientName,handleChange:this.updateStateFields,id:"recipient-name",label:"Recipient's Name",name:"recipientName",placeholder:"Name of recipient",type:"text",value:this.state.fields.recipientName||""}),r.a.createElement(v,{error:this.state.errors.recipientEmail,handleChange:this.updateStateFields,id:"recipient-email",label:"Recipient's Email",name:"recipientEmail",placeholder:"example@domain.com",type:"email",value:this.state.fields.recipientEmail||""}))),r.a.createElement("fieldset",{className:"gift-card__information section-margin"},r.a.createElement("legend",null,"From:"),r.a.createElement("div",{className:"form-group flex-equal-widths"},r.a.createElement(v,{error:this.state.errors.senderName,handleChange:this.updateStateFields,id:"sender-name",label:"Sender's Name",name:"senderName",placeholder:"Name of Sender",type:"text",value:this.state.fields.senderName||""}),r.a.createElement(v,{error:this.state.errors.senderEmail,handleChange:this.updateStateFields,id:"sender-email",label:"Sender's Email",name:"senderEmail",placeholder:"example@domain.com",type:"email",value:this.state.fields.senderEmail||""}))),r.a.createElement("input",{type:"submit",value:"Add to cart"}))}}]),t}(r.a.Component);var A=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,{minAmount:5,maxAmount:500}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.7e41f662.chunk.js.map