import { expect } from 'chai';

import { sum, sub, mult, div } from '../src/main';

describe('Calc', () => {

  //smoke test = teste mais simples, verifica funcionamento basico de um sistema, api, etc..

  // CALC

  // smoke test para verificar se temos os métodos da calculadora +,-,/,*

  describe('Smoke tests', () => {

     it('should exist the method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist the method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });

    it('should exist the method `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('should exist the method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

  });



});