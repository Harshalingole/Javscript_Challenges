/*
Instructions
Your friend Li Mei runs a juice bar where she sells delicious mixed fruit juices. You are a frequent customer in her shop and realized you could make your friend's life easier. You decide to use your coding skills to help Li Mei with her job.

1. Determine how long it takes to mix a juice
Li Mei likes to tell her customers in advance how long they have to wait for a juice from the menu that they ordered. She has a hard time remembering the exact numbers because the time it takes to mix the juices varies. 'Pure Strawberry Joy' takes 0.5 minutes, 'Energizer' and 'Green Garden' take 1.5 minutes each, 'Tropical Island' takes 3 minutes and 'All or Nothing' takes 5 minutes. For all other drinks (e.g., special offers) you can assume a preparation time of 2.5 minutes.

To help your friend, write a function timeToMixJuice that takes a juice from the menu as an argument and returns the number of minutes it takes to mix that drink.

timeToMixJuice('Tropical Island');
// => 3

timeToMixJuice('Berries & Lime');
// => 2.5
2. Replenish the lime wedge supply
A lot of Li Mei's creations include lime wedges, either as an ingredient or as part of the decoration. So when she starts her shift in the morning she needs to make sure the bin of lime wedges is full for the day ahead.

Implement the function limesToCut which takes the number of lime wedges Li Mei needs to cut and an array representing the supply of whole limes she has at hand. She can get 6 wedges from a 'small' lime, 8 wedges from a 'medium' lime and 10 from a 'large' lime. She always cuts the limes in the order in which they appear in the list, starting with the first item. She keeps going until she reached the number of wedges that she needs or until she runs out of limes.

Li Mei would like to know in advance how many limes she needs to cut. The limesToCut function should return the number of limes to cut.

limesToCut(25, ['small', 'small', 'large', 'medium', 'small']);
// => 4
3. Finish up the shift
Li Mei always works until 3pm. Then her employee Dmitry takes over. There are often drinks that have been ordered but are not prepared yet when Li Mei's shift ends. Dmitry will then prepare the remaining juices.

To make the hand-over easier, implement a function remainingOrders which takes the number of minutes left in Li Mei's shift and an array of juices that have been ordered but not prepared yet. The function should return the orders that Li Mei cannot start preparing before the end of her workday.

The time left in the shift will always be greater than 0. Furthermore, the orders are prepared in the order in which they appear in the array. If Li Mei starts to mix a certain juice, she will always finish it even if she has to work a bit longer. If there are no remaining orders left that Dmitry needs to take care of, an empty array should be returned.

remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']);
// => ['Green Garden']
*/

// Task 1 Determine how long it takes to mix a juice
function timeToMixJuice(name) {
  let time;
  switch (name) {
    case "Pure Strawberry Joy":
      time = 0.5;
      break;
    case "Energizer":
      time = 1.5;
      break;
    case "Green Garden":
      time = 1.5;
      break;
    case "Tropical Island":
      time = 3;
      break;
    case "All or Nothing":
      time = 5;
      break;
    default:
      time = 2.5;
      break;
  }
  return time;
}
// console.log(timeToMixJuice("Tropical Island"));
// => 3
// console.log(timeToMixJuice("Berries & Lime"));
// => 2.5

// Task 2 Replenish the lime wedge supply
function limesToCut(wedgesNeeded, limes) {
  // small = 6 ! medium  8 ! large = 10
  // lime = []
  // limeCount = lime.length
  // if(small) ->wedgeNo = 6
  // funGetWedgeNo(limes[ind])
  // do (lime.push((funGetWedgeNo(limes[ind])))) while(limeCunt = wedgesNeedd)

  let limeArray = [];
  function getLimeWedgeNo(limesSize) {
    let limeSlice;
    switch (limesSize) {
      case "small":
        limeSlice = 6;
        break;
      case "medium":
        limeSlice = 8;
        break;
      case "large":
        limeSlice = 10;
        break;
      default:
        limeSlice = 0;
        break;
    }
    return limeSlice;
  }
  let i = -1;
  while (i < limes.length - 1) {
    i++;
    let limeCount = 0;
    if (limeArray.length > 0) {
      limeCount = limeArray.reduce((a, b) => a + b);
    }
    limeCount;
    if (limeCount <= wedgesNeeded) {
      limeArray.push(getLimeWedgeNo(limes[i]));
    }
  }

  return wedgesNeeded > 0 ? limeArray.length : 0;
}

// console.log(limesToCut(25, ["small", "small", "large", "medium", "small"]));
// => 4
// console.log(limesToCut(0, ["small", "large", "medium"]));

// Task 3 Finish up the shift
// funt(number of minLeft,[juce order but not prepared]) => return order that can't prepared befroe handover
// number of min left always >  0
// if she started mixing then she will finish even she need to work bit longer
function remainingOrders(timeLeft, orders) {
  // 1.5 , 5 , 1.5
  // let handOverOrder = []
  // timededuct = 0
  // let CurTimeLeft = timeleft - timededuct)
  // if(curTimeLeft > 0) =>{
  // let i =0  while { tiemdeduc += timetoMixjus(orders[i])}
  // }
  // return handOverOrder.push(order[i])
  // let employeeOrder = [];
  // let curTimeLeft = timeLeft;

  // When You Need To Reapet Execution Of some Code WHile having Condition Which is dependent on Interal Code
  do {
    if (timeLeft > 0) {
      timeLeft -= timeToMixJuice(orders[0]);
      orders.shift();
    }
  } while (timeLeft > 0);
  return orders;
}
console.log(
  remainingOrders(5, ["Energizer", "All or Nothing", "Green Garden"])
);
// => ['Green Garden']
