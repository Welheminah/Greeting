describe('The Greeting function', function(){

    it('should greet Moipone correctly in English', function(){

    let newGreet = theGreeting();

    assert.equal('Hello Moipone', newGreet.weGreetPeople('english', 'Moipone'))
    });


    it('should greet Moipone correctly in Setswana', function(){

        let newGreet = theGreeting();
    
        assert.equal('Dumela Moipone', newGreet.weGreetPeople('setswana', 'Moipone'))
        });

    
    it('should greet Moipone correctly in isiXhosa', function(){

        let newGreet = theGreeting();
    
        assert.equal('Molo Moipone', newGreet.weGreetPeople('isiXhosa', 'Moipone'))
        });
      
});

describe('The counter function', function(){

    it('it should return the number of the names greeted and will not count that name is already greeted', function(){

    let newGreet = theGreeting();

    newGreet.weStorenames("Hello Moipone");
    newGreet.weStorenames("Molo Mosa");
    newGreet.weStorenames("Dumela Okuhle");

    newGreet.theCounter();

    assert.equal(3, newGreet.theCounter())
    });    
    

});

describe('The namestore function', function(){

    it('it should return the names greeted', function(){

    let newGreet = theGreeting();

    newGreet.weStorenames("Moipone");
    newGreet.weStorenames("Mosa");
    newGreet.weStorenames("Okuhle");
    
    

    newGreet.getName();

    assert.deepEqual(["Moipone", "Mosa", "Okuhle"], newGreet.getName())
    });    
    
    it('it should return the names greeted', function(){

        let newGreet = theGreeting();
    
        newGreet.weStorenames("Moipone");
        newGreet.weStorenames("Mosa");
        newGreet.weStorenames("Okuhle");
        newGreet.weStorenames("Thabo");
        newGreet.weStorenames("Moipone");
        newGreet.weStorenames("mosa");
        newGreet.weStorenames("OKUhLE");
        newGreet.weStorenames("THabO");
        
        
    
        newGreet.getName();
    
        assert.deepEqual(["Moipone", "Mosa", "Okuhle", "Thabo"], newGreet.getName())
        });    
});
