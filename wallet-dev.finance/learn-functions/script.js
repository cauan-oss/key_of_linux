const trybeBanckCustomers = ["Oliva", "Nat", "Gus"];
const pirilampoCustomers = ["Noel", "Carol", "Angelo", "Kissila"];


function findElement(array, element) {
   const verify = array.includes(element)
   console.log(verify)
   if(!verify) {
    console.log("Esse elemento nao existe")
   }
}

findElement(trybeBanckCustomers, "Cauan")