const fruits = [
    { id: 1, name: "Apple", price: 2.5, expiryDate: "2024-12-30" },
    { id: 2, name: "Banana", price: 1.2, expiryDate: "2024-12-25" },
    { id: 3, name: "Cherry", price: 3.0, expiryDate: "2025-01-05" },
    { id: 4, name: "Grapes", price: 4.0, expiryDate: "2025-01-10" },
    { id: 5, name: "Mango", price: 5.5, expiryDate: "2024-12-28" },
  ];
const check = new Promise((resolve, reject)=>{
    const newFruit = fruits.filter(item=> {
        const [year,month,day] = item.expiryDate.split("-");
        return year < 2025 ;
        
    })
    if(newFruit){
        resolve(newFruit);
    }
    else{
        reject("No fruit found")
    }
    
})
check.then((item)=>console.log(item)).catch((err)=>console.log(err))