//πππππππππππππππππππ DOM ππππππππππππππππππππππππππππ//
 //Topics Covered
// 1.window vs Document
// 2.DOM vs BOM 
// 3.DOM Navigation 
// 4.Searching and getting elements reference

//section:1οΈβ£Window                                      vs                         Document
// 1.window is the browser window .                  1.document is only the page created by us. 
// It is the global object which contains              It contans all the html elements. 
// several other objects , one of them is
// document.
// π The DOM is the Document Object Model, which deals with the document, 
// the HTML elements themselves, e.g. document and all traversal you 
// would do in it, events, etc.

// For Ex: π¨βπ«
// change the background color to red
// document.body.style.background = "red";


// π The BOM is the Browser Object Model, which deals with browser components 
// aside from the document, like history, location, navigator and screen 
// (as well as some others that vary by browser). OR 
// In simple meaning all the Window operations which comes under BOM are performed 
// usign BOM 




// Let's see more practical on History object 

// Functions alert/confirm/prompt are also a part of BOM: 
// they are directly not related to the document, 
// but represent pure browser methods of communicating with the user.

// alert(location.href); // shows current URL
// if (confirm("Want to Visit ThapaTechnical?")) {
//   location.href = "https://www.youtube.com/thapatechnical"; // redirect the browser to another URL
// }



// Section 3οΈβ£: Navigate through the DOM 

// 1: document.documentElement
// returns the Element that is the root element of the document. 
// 2: document.head
// 3: document.body
// 4: document.body.childNodes (include tab,enter and whiteSpace)
// list of the direct children only 
// 5: document.children (without text nodes, only regular Elements)
// 6: document.childNodes.length

// π Practice Time 
// How to check whether an element has child nodes or not?
// we will use hasChildNodes()

// π Practice Time 
// How to find the child in DOM tree 
// firstChild vs firstElementChild
// lastChild vs lastElementChild 
// const data = document.body.firstElementChild;
// undefined
// data
// data.firstElementChild
// data.firstElementChild.firstElementChild
// data.firstElementChild.firstElementChild.style.color = "red"
// vs 
// document.querySelector(".child-two").style.color = "yellow";

// π How to find the Parent Nodes 
// document.body.parentNode
// document.body.parentElement

// π How to find or access the siblings
// document.body.nextSibling
// document.body.nextElementSibling
// document.body.previousSibling
// document.body.previousElementSibling



//SECTION 4οΈβ£:  How to search the Elements and the References 
// We will see the new file 
