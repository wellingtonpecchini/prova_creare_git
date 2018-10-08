import {html, render} from './node_modules/lit-html/lit-html.js';


const root = document.querySelector("#root");




// Define a template
const myTemplate = (data) => html`<p>Hello ${data.name.first} ${data.name.last}</p>`;


// Render the template to the document
// render(myTemplate('World'), root);



fetch("https://randomuser.me/api/")
.then(r => r.json())
// .then(r => console.log(JSON.stringify(r)));
.then(r => r.results[0])
.then(r => render(myTemplate(r), root));
 // prendo il (myTeplate) per prendere la mia struttura, mentre il root è dove vado buttarlo dentro
