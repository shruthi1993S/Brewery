document.addEventListener("DOMContentLoaded", function () {
  fetchUrl();
});



// asyn function to fetch data from an API using async & await

async function fetchUrl() {

// fetching API
  const response = await fetch(
    "https://api.openbrewerydb.org/v1/breweries"
  );
  fetchData = await response.json();
 
  renderfetchData();
}

// Appending the data in table
try{
function renderfetchData() {
  const userList = document.getElementById("BreweriesList");
  userList.innerHTML = "";
  
  fetchData.forEach((info, index) => {
   
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${index + 1}</td>
    <td>${info.name}</td>
    <td>${info.brewery_type}</td>
    <td>${info.city}</td>
    <td>${info.state}</td>
    <td>${info.street}</td>`
   
    userList.appendChild(row);
  });
}
}
catch(error)
{console.log("Error")}