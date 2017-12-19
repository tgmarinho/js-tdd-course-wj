// import metodo from 'biblioteca'
// * carrega tudo da lib
// as = alias para o meotodo (novo nome)

import { union as juntaTudo, uniq as soOsMesmos } from '../../node_modules/ramda';


const arr1 = [1, 2, 3, 4, 5,6, 7, 78, 5, 4, 2, 23, 3, 56, 6, 23, 3,
  423342, 5, 3, 3, 21, 2, 5, 6, 7, 78, 8, 9, 0, 5, 3, 2, 1, 2, 3, 54];

const arr2 = [3, 2, 1, 3, 1, 2, 5, 3, 5, 234, 6, 43673, 4412, 341,
  2, 5, 2, 3, 6, 4, 2, 3, 6, 45, 32, 34];

const arr3 = juntaTudo(arr1, arr2 );

console.log(arr3);

const arr4 = soOsMesmos(arr1);

console.log(arr4);
