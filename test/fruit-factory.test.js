
describe('FRUIT LIST FACTORY FUNCTION', function(){
    describe('addNewFruit function', function(){
   
        it('should be able to add a fruit to an already existing l8ist', function(){
            let fruitTest = fruitListFactory();

            assert.equal(fruitTest.addNewFruit('Grapes'), 'Grapes');
        });
    });
    
    describe('addNewEmoji function', function(){
        it('should be able to add a fruit emoji', function(){
            let fruitTest = fruitListFactory();
        
            assert.equal(fruitTest.addNewFruit('π'), 'π');
        });
    });
    
    describe('setFruitsLocalStorage function', function(){
        it('should be able to store a new fruit on the local storage', function(){
            let fruitTest = fruitListFactory();
          
            assert.equal(fruitTest.setFruitsLocalStorage('Grapesπ'), 'Grapesπ')
        });
    });
    
    describe('getFruitsLocalStorage function', function(){
        it('should be able to display a fruit and its emoji from the local storage', function(){
            let fruitTest = fruitListFactory();
            assert.deepEqual(fruitTest.displayFruitFromLocal(["Banana π", "Grapes π", "Melon π", "Watermelon π", "Tangerine π", "Lemon π", "Pineapple π", "Mango π₯­", "Red Apple π"]),
            ["Banana π", "Grapes π", "Melon π", "Watermelon π", "Tangerine π", "Lemon π", "Pineapple π", "Mango π₯­", "Red Apple π"]);
        });
    });
      
});
