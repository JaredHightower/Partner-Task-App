// fetch("http://localhost:3000/task").then((response) => {
//   console.log(response);
//   return response.text().then(function (text) {
//     console.log(text);
//   });
// });

let viewOfTask = new XMLHttpRequest();
viewOfTask.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    for (let i = 0; i < myObj.length; i++) {
      addTask(myObj[i].name, myObj[i].date);
    }
  }
};
viewOfTask.open("GET", "http://localhost:3000/task", true);
viewOfTask.send();

function addTask(taskName, date) {
  let node = document.createElement("td");
  let textNodeForTask = document.createTextNode(taskName);
  let textNodeForDate = document.createTextNode(date);
  node.appendChild(textNodeForTask);
  node.appendChild(textNodeForDate);
  document.getElementById("listOfTask").appendChild(node);
}

// let taskList = new XMLHttpRequest();
// taskList.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     let myObj2 = JSON.parse(this.responseText);
//     document.getElementById("myBtn").addEventListener("click", function () {
//       let newData = (documnet.document.getElementById("newTask").innerHTML =
//         myObj2.name);
//       document.getElementById("newTask").innerHTML = myObj2.date;
//     });
//   }
// };
// taskList.open("GET", "taskList.json", true);
// taskList.send();
