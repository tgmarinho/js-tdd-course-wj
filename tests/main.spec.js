
// describe serve para separar classes e metodos
// context serve para separar os casos de testes
// it serve para executar o teste em si, ondo codificamos o comportamento do teste.

describe('Main', function() {
  describe('Method A', function() {
    context('Case 1', function() {
      it('should happen blabla', function() {
        // espera que aconteça
        // Entra de dados / método sum(2,2)
        // Espera retornar (4) => true | (3) => false => broken test
      });
    });

    context('Case 2', function() {
      it('should happen blabla', function() {
        // espera que aconteça
        // Entra de dados / método sum(2,2)
        // Espera retornar (4) => true | (3) => false => broken test
      });

      it('should happen mimimi', function() {
        // espera que aconteça
        // Entra de dados / método sum(2,2)
        // Espera retornar (4) => true | (3) => false => broken test
      });
    });
  });

  describe('Method B', function() {

  });
});
