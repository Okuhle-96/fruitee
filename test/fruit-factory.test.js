
describe('FRUIT LIST FACTORY FUNCTION', function(){
    describe('addNewFruit function', function(){
   
        it('should be able to add a fruit to an already existing l8ist', function(){
            let fruitTest = fruitListFactory();
            fruitTest.addNewFruit('Grapes');
        });
    });
    
    describe('addNewEmoji function', function(){
        it('should be able to add a fruit emoji', function(){
            let fruitTest = fruitListFactory();
            fruitTest.addNewFruit('🍇');
        });
    });
    
    describe('setFruitsLocalStorage function', function(){
        it('should be able to store a new fruit on the local storage', function(){
            let fruitTest = fruitListFactory();
            fruitTest.setFruitsLocalStorage('Grapes🍇');
        });
    });
    
    describe('getFruitsLocalStorage function', function(){
        it('should be able to display a fruit and its emoji from the local storage', function(){
            let fruitTest = fruitListFactory();
            fruitTest.getFruitsLocalStorage('Grapes🍇');
        });
    });
      
});