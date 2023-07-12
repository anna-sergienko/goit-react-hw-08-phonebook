"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[200],{6200:function(n,e,r){r.r(e),r.d(e,{default:function(){return O}});var t,o,a,i,s=r(2791),c=r(9434),d=r(4270),l=r(3634),u=r(6916),b=function(n){return n.contacts.contacts},p=function(n){return n.contacts.error},x=(0,u.P1)([b,function(n){return n.filter.value}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),f=r(168),h=r(7686),m=h.Z.ul(t||(t=(0,f.Z)(["\nlist-style: none;\npadding: 0;\n"]))),g=h.Z.li(o||(o=(0,f.Z)(["\nmargin: 0 0 15px 15px;\n\n"]))),Z=h.Z.p(a||(a=(0,f.Z)(["\nfont-weight: 500;\nfont-size: 18px;\nfont-family: sans-serif;\n"]))),v=h.Z.button(i||(i=(0,f.Z)(["\n  width: 90px;\nheight: 30px;\nborder: none;\nborder-radius: 5px;\nbackground-color: #5F9EA0;\n&:hover{\nbackground-color: #008B8B;\ntransition: all 200ms cubic-bezier(0.4, 0, 0.3, 1);\n}\n"]))),j=r(184);var k,w,y,C,z,A,F=function(){var n=(0,c.I0)(),e=(0,c.v9)(x),r=(0,c.v9)(b),t=(0,c.v9)(p);return(0,j.jsxs)(j.Fragment,{children:[t&&(0,j.jsx)("span",{children:t.message}),(0,j.jsx)(m,{children:r&&e.map((function(e){var r=e.id,t=e.name,o=e.number;return(0,j.jsxs)(g,{children:[(0,j.jsxs)(Z,{children:[t,": ",o]}),(0,j.jsx)(v,{type:"button",onClick:function(){return n((0,l.GK)(r))},children:"Delete"})]},r)}))})]})},_=r(8174),B=(r(5462),h.Z.form(k||(k=(0,f.Z)(["\nwidth: 600px;\ndisplay: flex;\nflex-direction: column;\n\n"])))),I=h.Z.label(w||(w=(0,f.Z)(["\nfont-family: sans-serif;\nfont-size: 25px;\n\n"]))),L=h.Z.input(y||(y=(0,f.Z)(["\ndisplay: block;\nwidth: 300px;\nheight: 30px;\nmargin-bottom: 20px;\nmargin-top: 20px;\nborder: 1px solid #bdbdbd;\nborder-radius: 5px;\nbackground-color: #ccc;\ntransition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n&:focus{\n  color: #212529;\n  background-color: #fff;\n  border-color: #bdbdbd;\n  outline: 0;\n}\n"]))),q=h.Z.button(C||(C=(0,f.Z)(["\nwidth: 90px;\nheight: 30px;\nborder: none;\nborder-radius: 5px;\nbackground-color: #5F9EA0;\n&:hover{\nbackground-color: #008B8B;\ntransition: all 200ms cubic-bezier(0.4, 0, 0.3, 1);\n}\n"]))),E=function(){var n=(0,c.I0)(),e=(0,c.v9)(b);return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(B,{onSubmit:function(r){r.preventDefault();var t=r.target,o={name:t.elements.name.value,number:t.elements.number.value};if(r.target.reset(),e.find((function(n){return n.name.toLowerCase()===o.name.toLowerCase()})))return _.Am.error("".concat(o.name," is already in contacts."),{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"});n((0,l.uK)(o))},children:[(0,j.jsxs)(I,{children:["Name",(0,j.jsx)(L,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,j.jsxs)(I,{children:["Number",(0,j.jsx)(L,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,j.jsx)(q,{type:"submit",children:"Add contact"})]})})},N=r(4808),P=h.Z.label(z||(z=(0,f.Z)(["\n\nfont-family: sans-serif;\nfont-size: 25px;\n"]))),D=h.Z.input(A||(A=(0,f.Z)(["\ndisplay: block;\nwidth: 300px;\nheight: 30px;\nmargin-bottom: 20px;\nmargin-top: 20px;\nborder: 1px solid #bdbdbd;\nborder-radius: 5px;\nbackground-color: #ccc;\ntransition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n&:focus{\n  color: #212529;\n  background-color: #fff;\n  border-color: #bdbdbd;\n  outline: 0;\n}\n"])));var K=function(){var n=(0,c.I0)();return(0,j.jsxs)(P,{children:["Find contacts by name",(0,j.jsx)(D,{type:"text",name:"filter",onChange:function(e){n((0,N.x)(e.target.value))}})]})};function O(){var n=(0,c.I0)();return(0,s.useEffect)((function(){n((0,l.yF)())}),[n]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(d.q,{children:(0,j.jsx)("title",{children:"Your contacts"})}),(0,j.jsx)(E,{}),(0,j.jsx)(K,{}),(0,j.jsx)(F,{})]})}}}]);
//# sourceMappingURL=200.ee17617a.chunk.js.map