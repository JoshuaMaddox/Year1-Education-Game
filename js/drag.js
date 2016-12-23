function allowDrop(ev) {
  ev.preventDefault();
  console.log('Allow Drop Was Fired')
}

function drag(e) {
  e.currentTarget.style.backgroundColor = "purple";
  e.dataTransfer.setData("text", e.target.id);
}

function drop(ev) {
  ev.preventDefault();
  let correctAnswer = ev.target.id[3];
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  if(correctAnswer === data) {
    alert('Correct Answer')
  } else {
    alert('Wrong Answer')
  }
}