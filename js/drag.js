function allowDrop(ev) {
  ev.preventDefault();
  console.log('Allow Drop Was Fired')
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log('drag has started')
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  console.log("i am data: ", data)
  ev.target.appendChild(document.getElementById(data));
  console.log('drop has been fired')
}