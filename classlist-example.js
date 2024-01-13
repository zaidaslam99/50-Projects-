if (typeof window !== "undefined") {
  // Our starting state <> Creating the empty container using createElement
  const div = document.createElement("div");

  // This is to give a classname to the div
  // using className to add classes to the container
  div.className = "foo";
  div.className = "bar";
  div.className = "another class";

  // Our starting state: <div class="foo"></div>
  // We can use classList and methods such as remove and add
  // which is going to target the class specified.
  console.log(div.outerHTML);
  div.classList.remove("foo");
  div.classList.add("anotherclass");

  // <div class="anotherclass"></div>
  console.log(div.outerHTML);

  // Toggle means to turn on and off meaning adding a class list or removing it.
  // if visible is set remove it otherwise add it
  div.classList.toggle("visible");
}

/* 
  Summary: Best way to think of Element.classList is we are messing with the class of the 
  container and document.createElement is used to create empty containers.
*/
