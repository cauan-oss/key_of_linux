const trybeBanckCustomers = ["Oliva", "Nat", "Gus"];
const pirilampoCustomers = ["Noel", "Carol", "Angelo", "Kissila"];


function findElement(array, element) {
  if(!array.includes(element)) {
    console.log("Esse elemento nao existe")
  } else {
    for(let index = 0; index < array.length; index++) {
        if(element == array[index]){
            console.log(array[index])

        }
    }
  }
}

findElement(trybeBanckCustomers, "Cauan")