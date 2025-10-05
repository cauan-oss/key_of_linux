const trybeBanckCustomers = ["Oliva", "Nat", "Gus"];
const pirilampoCustomers = ["Noel", "Carol", "Angelo", "Kissila"];


function findElement(array, element) {
    for(let index = 0; index < array.length; index += 1){
        if(element == array[index]) {
            console.log("o nome", array[index])
        } 
    }
}

findElement(trybeBanckCustomers, "Nat")