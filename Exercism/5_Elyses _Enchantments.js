// 1. Retrieve a card from a stack
export function getItem(cards, position) {
  return cards[position];
}
const position = 2;
console.log(getItem([1, 2, 4, 1], position));

// 2. Exchange a card in the stack

export function setItem(cards, position, replacement) {
  position;
  replacement;
  cards.splice(position, 1, replacement);
  return cards;
}
const replacementCard = 6;
console.log(setItem([1, 2, 4, 1], position, replacementCard));

// 3.Insert a card at the top of the stack
export function insertItemAtTop(card, newCard) {
  card.push(newCard);
  return card;
}

const newCard = 8;
insertItemAtTop([5, 9, 7, 1], newCard);

// 4.Remove a card from the stack
export function removeItem(card, position) {
  card.splice(position, 1);
  card;
  return card;
}

// const position = 2;
removeItem([3, 2, 6, 4, 8], position);

// 5.Remove the top card from the stack
export function removeItemFromTop(card) {
  card.pop();
  return card;
}
removeItemFromTop([3, 2, 6, 4, 8]);

// 6.Insert a card at the bottom of the stack
export function insertItemAtBottom(card, newCard) {
  card.unshift(newCard);
  return card;
}
// const newCard = 8;
insertItemAtBottom([5, 9, 7, 1], newCard);

// 7. Remove a card from the bottom of the stack
export function removeItemAtBottom(card) {
  card.shift();
  return card;
}

removeItemAtBottom([8, 5, 9, 7, 1]);

// 8. Check the size of the stack
export function checkSizeOfStack(card, stackSize) {
  return card.length === stackSize;
}
const stackSize = 4;
checkSizeOfStack([3, 2, 6, 4, 8], stackSize);
