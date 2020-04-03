// const data = [
//   {
//     principal: 2500,
//     time: 1.8
//   },
//   {
//     principal: 1000,
//     time: 5
//   },
//   {
//     principal: 3000,
//     time: 1
//   },
//   {
//     principal: 2000,
//     time: 3
//   }
// ];

// function interestCalculator(arr) {
//   // Set rate
//   arr.forEach(el => {
//     const { principal, time } = el;

//     if (principal >= 2500 && time > 1 && time < 3) {
//       el.rate = 3;
//     } else if (principal >= 2500 && time >= 3) {
//       el.rate = 4;
//     } else if (principal < 2500 || time <= 1) {
//       el.rate = 2;
//     } else {
//       el.rate = 1;
//     }
//   });

//   // Calculate interest

//   const interestData = arr.map(el => {
//     const { principal, time, rate } = el;

//     el.interest = (principal * rate * time) / 100;

//     return el;
//   });

//   console.log(interestData);

//   return interestData;
// }

// interestCalculator(data);
