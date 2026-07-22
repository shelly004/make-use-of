const users = [
  { id: 1, name: "John", department: "Engineering" },
  { id: 2, name: "Sara", department: "HR" },
  { id: 3, name: "Mike", department: "Engineering" },
];

const groupUsersByDepartment = (users) => {
   return users.reduce((acc, user) =>{
    if(acc[user.department]){
        acc[user.department].push(user);
    }
    else{
        acc[user.department] = [user];
    }
    return acc;
   }, {})
}

console.log(groupUsersByDepartment(users));