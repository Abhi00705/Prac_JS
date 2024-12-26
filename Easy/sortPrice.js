const fruits = [
    { id: 1, name: "Apple", price: 2.5, expiryDate: "2024-12-30" },
    { id: 2, name: "Banana", price: 1.2, expiryDate: "2024-12-25" },
    { id: 3, name: "Cherry", price: 3.0, expiryDate: "2025-01-05" },
    { id: 4, name: "Grapes", price: 4.0, expiryDate: "2025-01-10" },
    { id: 5, name: "Mango", price: 5.5, expiryDate: "2024-12-28" },
  ];

  for(let i = fruits.length-1;i>=0;i--){
    for(let j=0; j<i; j++){
        if((fruits[j].price) > (fruits[j+1].price)){
            let temp = fruits[j];
            fruits[j] = fruits[j+1];
            fruits[j+1] = temp;
        }
    }
  }
  console.log(fruits);