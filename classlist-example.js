if (typeof window !== "undefined") {
  // Our starting state <>
  const div = document.createElement("div");
  const div2 = document.createElenet;

  // This is to give a classname to the div
  div.className = "foo";

  // Our starting state: <div class="foo"></div>
  console.log(div.outerHTML);
  div.classList.remove("foo");
  div.classList.add("anotherclass");
  // <div class="anotherclass"></div>
  console.log(div.outerHTML);
}
