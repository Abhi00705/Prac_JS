//Sort the fruits by their names in alphabetical order.
const fruits = [
    { id: 1, name: "guava", price: 2.5, expiryDate: "2024-12-30" },
    { id: 2, name: "Banana", price: 1.2, expiryDate: "2024-12-25" },
    { id: 3, name: "Cherry", price: 3.0, expiryDate: "2025-01-05" },
    { id: 4, name: "Grapes", price: 4.0, expiryDate: "2025-01-10" },
    { id: 5, name: "Apple", price: 5.5, expiryDate: "2024-12-28" },
  ];
for(let i=0;i<fruits.length-1;i++){
    let min = i;
    for(let j=i+1;j<fruits.length;j++){
        if(fruits[j].name<fruits[i].name){
            min = j;
        }
    }
    if(min !== i){
        let temp = fruits[min];
        fruits[min]=fruits[i];
        fruits[i] = temp;
    }
}
console.log(fruits);