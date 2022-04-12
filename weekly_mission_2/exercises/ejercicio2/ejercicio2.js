const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
console.log("Resolución de problemas\n")
//1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log("1. Nombre de los explorers: ")
explorers.forEach(element => console.log(element.name));
console.log("")
//2. Imprime el stack de cada explorer, usa FOR EACH
console.log("2. Stack de cada explorer: ")
explorers.forEach(element => console.log(element.name + ": " + element.stack));
console.log("")
//3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const nueva_lista = explorers.map(Item => {
    const container = {};
    container[Item.name] = Item.stack;

    return container;
})
console.log("3. Lista nueva de Stacks: ")
console.log(nueva_lista)
console.log("")
//4. Obtén la lista de explorers que tengan en su stack "js", 
//usa FILTER (para validar un elemento en un lista se usa el método includes)
let search = (list, text) =>
list.filter(i => i.stack.includes(text.toLowerCase()));

let result = search(explorers, 'js');
console.log("4. Explorers con Stack JS")
console.log(result)
console.log("")
//5. Busca el primer explorer que sea de la CDMX, usa FIND
let buscar = explorers.find(tree => tree.city === "CDMX");
console.log("5. Explorers de la CDMX")
console.log(buscar)
console.log("")
//6. Obtén la suma de todos los exercises_completed, usa REDUCE
let suma = explorers.reduce((a,b) => ({exercises_completed: a.exercises_completed + b.exercises_completed})) ;
console.log("6. Suma de todos los ejercicios completados por los Explorers")
console.log(suma);
console.log("")
//7. Obtén la validación si al menos uno de los explorers 
//tiene la propiedad exercisesFinished en frontend como true, usa SOME
const res = explorers.some(data => data.missions.frontend.exercisesFinished===true);
console.log("7. Validación de al menos un explorer tiene true en exercisesFinished:")
console.log(res);
console.log("");
//8. Obtén la validación si todos los explorers 
//tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const res1 = explorers.every(data => data.missions.onboarding.isFinished===true);
console.log("8. Validación si todos los explorers tienen true en isFinished:")
console.log(res1);