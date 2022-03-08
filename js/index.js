var fruitName = document.querySelector(".fruitName");
var fruitImage = document.querySelector(".fruitImage");
var addFruitBtn = document.querySelector(".addFruit");

var errorMsg = document.querySelector(".errorMsg");
var displayFruitNames = document.querySelector(".displayFruitNames");
var displayFruit = document.querySelector(".displayFruit");

var searchItem = document.querySelector(".search");
var searchBtn = document.querySelector(".searchBtn")
var displaySearch = document.querySelector(".displaySearch")
var searchErr = document.querySelector(".err")

const fruitNames = ["Grapes", "Melon", "Watermelon", "Tangerine", "Lemon", "Banana", "Pineapple", "Mango", "Red Apple"];
const fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];


// SORTING FRUIT USING MAP FUNTION
var sortFruit = fruitNames.map((fruit, i) => {
   1
  return fruit + ' ' + fruits[i]
});

var fruitNamesList = sortFruit;
var storageList = [];

// GETTING FRUITS  FROM THE LOCAL STORAGE
if (localStorage["fruitNames"]) {
  storageList = JSON.parse(localStorage.getItem("fruitNames"));
  }

displayFruitNames.innerHTML = storageList.sort();

// ADD NEW FRUITS TO THE LIST
const addFruitToList = () => {

    var fruitValue = fruitName.value;
    var imageValue = fruitImage.value;

     if (fruitValue !== undefined && imageValue !==undefined) {
           
      fruitNamesList.push(fruitValue + '' + imageValue)
        
        }
        displayFruitNames.innerHTML = fruitNamesList;

        localStorage.setItem("fruitNames", JSON.stringify(fruitNamesList));;
    
}
addFruitBtn.addEventListener("click", addFruitToList)

// SEARCH FOR A SPECIFIC
const searchFruit = () => {

  let fruitValue = searchItem.value;

      if (storageList.includes(fruitValue)) {

        displaySearch.innerHTML = fruitValue;
        setTimeout(function(){
          displaySearch.innerHTML = "";
       }, 4000);

      } else {

        searchErr.innerHTML = "This fruit does not exist!";
        setTimeout(function(){
          searchErr.innerHTML = "";
       }, 2000);
      }
} 
searchBtn.addEventListener("click", searchFruit)
 