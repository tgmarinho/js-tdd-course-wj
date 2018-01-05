import { expect } from 'chai';

import calc from '../src/main';

describe('Calc', () => {

  //smoke test = teste mais simples, verifica funcionamento basico de um sistema, api, etc..

  // CALC

  // smoke test para verificar se temos os métodos da calculadora +,-,/,*

  describe('Smoke tests', () => {

    it('should exist the calc lib', () => {
      expect(calc).to.exist;

    });

    it('should exist the method `sum`', () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });

    it('should exist the method `div`', () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });

    it('should exist the method `mult`', () => {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    });

    it('should exist the method `sub`', () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });

  });



});