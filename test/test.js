'use strict';

require('chai').should();

const capitalizeWords = require('../index.js');

describe('capitalizeWords', function() {
  it("'A sentence is the largest independent unit of grammar: it begins with a capital letter and ends with a period.' should return 'A Sentence Is The Largest Independent Unit Of Grammar: It Begins With A Capital Letter And Ends With A Period.' ", function() {
    'A sentence is the largest independent unit of grammar: it begins with a capital letter and ends with a period.'
      .capitalizeWords()
      .should.equal(
        'A Sentence Is The Largest Independent Unit Of Grammar: It Begins With A Capital Letter And Ends With A Period.'
      );
  });

  it("'a sentence with no capitals' should return 'A Sentence With No Capitals' ", function() {
    'a sentence with no capitals'
      .capitalizeWords()
      .should.equal('A Sentence With No Capitals');
  });

  it("'this iS a seNtence to test the method is working' should return 'This Is A Sentence To Test The Method Is Working' ", function() {
    'this iS a seNtence to test the method is working'
      .capitalizeWords()
      .should.equal('This Is A Sentence To Test The Method Is Working');
  });

  it("'a difference set of words' should return 'A Different Set Of Words' ", function() {
    'a different set of words'
      .capitalizeWords()
      .should.equal('A Different Set Of Words');
  });

  it("'Una oración para propósitos de prueba' should return 'Una Oración Para Propósitos De Prueba' ", function() {
    'Una oración para propósitos de prueba'
      .capitalizeWords()
      .should.equal('Una Oración Para Propósitos De Prueba');
  });
});
