import {html, render} from './node_modules/lit-html/lit-html.js';


const root = document.querySelector("#root");
// Define a template
const myTemplate = (name) => html`<p>Hello ${name}</p>`;

// Render the template to the document
render(myTemplate('World'), root);