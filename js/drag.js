let elemInfoObj = {}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(e) {
  //Get Element ID
  let id = e.target.id;
  //Get the elem being dragged & store in the elemInfoObj
  elemInfoObj.elem = document.getElementById(id);
  //Get Position Information of Element being dragged & store in the elemInfoObj
  let pos = elemInfoObj.elem.getBoundingClientRect();
  //Get x position information of Element being dragged & store in the elemInfoObj
  elemInfoObj.x = pos.left;
  //Get y position information of Element being dragged & store in the elemInfoObj
  elemInfoObj.y = pos.top;
  //Change the color of the element being dragged
  elemInfoObj.elem.style.backgroundColor = "purple";
  e.dataTransfer.setData("text", id);
}

function drop(ev) {
  ev.preventDefault();
  let correctAnswer = ev.target.id[3];
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  if(correctAnswer === data) {
    console.log('Correct Answer');
  } else {
    let id = elemInfoObj.elem.id
    //Get the element previous to the dragged element's parent element and all Child nodes
    let appendToThisElement = document.getElementById(id - 1).parentNode.children;
    //Iterate over each child node and check id to see where to append child so that it 
    //is in correct numerical order after being appended...write function below

  }
}