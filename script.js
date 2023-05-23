function saveData() {
  var inputElement = document.getElementById("input-data");
  var inputData = inputElement.value;

  if (inputData) {
    var savedData = localStorage.getItem("myData");
    if (savedData) {
      savedData = JSON.parse(savedData);
      savedData.push(inputData);
    } else {
      savedData = [inputData];
    }

    localStorage.setItem("myData", JSON.stringify(savedData));
    inputElement.value = "";

    displaySavedData();
  }
}

function deleteData(index) {
  var savedData = localStorage.getItem("myData");
  if (savedData) {
    savedData = JSON.parse(savedData);

    if (index >= 0 && index < savedData.length) {
      savedData.splice(index, 1);
      localStorage.setItem("myData", JSON.stringify(savedData));
      displaySavedData();
    }
  }
}

function displaySavedData() {
  var savedData = localStorage.getItem("myData");
  var savedDataList = document.getElementById("saved-data-list");
  savedDataList.innerHTML = "";

  if (savedData) {
    savedData = JSON.parse(savedData);

    savedData.forEach(function(data, index) {
      var listItem = document.createElement("li");
      listItem.textContent = data;

      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete-button";
      deleteButton.onclick = function() {
        deleteData(index);
      };

      listItem.appendChild(deleteButton);
      savedDataList.appendChild(listItem);
    });
  }
}

displaySavedData();
