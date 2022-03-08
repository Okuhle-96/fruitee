const fruitListFactory = () =>{

const fruitNames = ["Grapes", "Melon", "Watermelon", "Tangerine", "Lemon", "Banana", "Pineapple", "Mango", "Red Apple"];
const fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];

let allFruits = fruitNames || [];
let allEmojis = fruits || [];

const addNewFruit = (fruit) => {
    let newFruitList = [];
    if(fruit){
      newFruitList.push(fruit) 
    }
    return newFruitList.sort();
}

const addNewEmoji = (emoji) => {
    let newEmojiList = [];
    if(emoji){
      newEmojiList.push(emoji) 
    }
    return newEmojiList();
}

const setFruitsLocalStorage = (addFruit, addEmoji) => {
    if(addFruit && addEmoji){
          addFruit = addFruit.charAt(0).toUpperCase() + addFruit.slice(1);
              allFruits.push(addFruit);
              allEmojis.push(addEmoji);
      }
      return;
  }
  
  const getFruitsLocalStorage = () => {
      let fruitList = []
      for (let i = 0; i < allEmojis.length; i++) {
        const newFruit = allFruits[i];
        const emoji = allEmojis[i];
          
          let fruitsAndEmojis = `${newFruit}  ${emoji}`;
          fruitList.push(fruitsAndEmojis);
      }
      return fruitList;
  }

  return{
    addNewFruit,
    addNewEmoji,
    setFruitsLocalStorage,
    getFruitsLocalStorage
     
  }
}