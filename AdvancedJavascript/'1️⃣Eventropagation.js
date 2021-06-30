//1️⃣Event Propagation(Event Bubbling and Event Capturing)
//Event Bubbling and Event Capturing are the two ways event propagation in HTML DOM/ HTML DOM API.
// when an element is present inside another element and both the elements are firing some events then which 
// event will be fired first will be decided by the event propagation mode.
//the two event propagation modes are : event bubbling and event capturing.
//These are defined with the addEventListener("event",function,eventPropagation)

//Event Bubbling 
// with event bubbling the event is first captured and handled by the innermost element and then 
// propagated to the outermost customElements. This is the default case.

// addEventListener("event",function,false)
//false indicates the Event Bubbling phase.

//Event Capturing 
// with event capturing the event is first captured and handled by the outerrmost element and then 
// propagated to the innermost customElements.

// addEventListener("event",function,true)
//true indicates the Event Capturing phase.