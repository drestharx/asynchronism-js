//lo generators son funciones que nos ayudan a controlar un iterador
//con el cual podemos controlar cuando se pausa o prosigue la ejecucion de un codigo

function* gen() {
    //los yield, funcionan como return pero pausa la ejecucion del codigo, hasta que ordenemos que continue
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

//con la palabra next nos permitira ir iterando de acuerdo a la logica del codigo

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

//FUNCION PARA ITERAR UN ARRAY CON GENERATORS

function* iterable(array) {
    for (let value of array) {
        yield value;
    }
};

const it = iterable(['a','b','c','d','e']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);