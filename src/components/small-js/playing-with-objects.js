const orders = [
    {id: 1, customer: 'John', city: 'New York', amount: 100},
    {id: 2, customer: 'Jane', city: 'Los Angeles', amount: 200},
    {id: 3, customer: 'Bob', city: 'Chicago', amount: 150},
    {id: 4, customer: 'Alice', city: 'New York', amount: 250},
    {id: 5, customer: 'Mike', city: 'Los Angeles', amount: 300},
    {id: 6, customer: 'Sara', city: 'Chicago', amount: 400},
    {id: 7, customer: 'Tom', city: 'New York', amount: 350},
    {id: 8, customer: 'Emma', city: 'Los Angeles', amount: 500},
]

const groupOrdersByCity = (orders) => {
    return orders.reduce((acc, order)=>{
        if(acc[order.city]){
            acc[order.city].push(order);
        }else{
            acc[order.city] = [order];
        }
        return acc;
    },{})
}
//consolgroupOrdersByCity(orders));

const sortByAmount = (groupedOrders) => {
    return Object.fromEntries(Object.entries(groupedOrders).map(([city, orders])=>
        [city, orders.sort((a,b)=>b.amount-a.amount)]))
    
}

const getTopOrdersByCity = (groupedOrders, topN) => {
    
        return Object.entries(groupedOrders).reduce((acc, [city, orders]) =>{
            acc[city]= orders.slice(0,topN);
            return acc;
        }, {})
    
}
console.log(getTopOrdersByCity(sortByAmount(groupOrdersByCity(orders)), 2));
