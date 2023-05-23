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
  
  function displaySavedData() {
    var savedData = localStorage.getItem("myData");
    var savedDataList = document.getElementById("saved-data-list");
    savedDataList.innerHTML = "";
  
    if (savedData) {
      savedData = JSON.parse(savedData);
  
      savedData.forEach(function(data) {
        var listItem = document.createElement("li");
        listItem.textContent = data;
        savedDataList.appendChild(listItem);
      });
    }
  }
  
  displaySavedData();
  