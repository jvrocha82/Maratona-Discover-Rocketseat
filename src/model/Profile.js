
   let data = {
      name: "João Vitor",
      avatar: "https://media-exp1.licdn.com/dms/image/C4D35AQFsQUgYk2NS9A/profile-framedphoto-shrink_200_200/0/1617670754521?e=1619539200&v=beta&t=bSLtGM0EvQtkTpvRbBkNx5WzgH36h3wdMcw3wf4rtTY",
      "monthly-budget": 3000,
      "days-per-week": 5,
      "hours-per-day": 7,
      "vacation-per-year": 4,
      "value-hour": 75,
    };
    module.exports = {
       get(){
         return data;
       },
       update(newData){
         data = newData;
       }
      };
