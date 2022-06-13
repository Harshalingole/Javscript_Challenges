/*
New RPG Game 
Attacck Decision-----
1) Fast Attack -- kinght (sleeping) [true]
2) Spy --  mighty sleep [ OR] curnig sleep
3)Signal prisoner  -- bird sound  --> prisoner awake && archer sleping
4) Free prisoner --- Onlye Two Ways -->
                     a) if(pet-dog-with-her) {
                       pet will rescue the prisoner
                       if(archer sleeping)
                     }
                     b)if(pet-dog-not-with-her){
                       analying can rescue prisioner
                       if(prisioner awake && (knight slepp && archer sleep))
                     }
*/

// 1. Check if the 'Fast Attack' action is possible
export let knightIsAwake = true;
export const canExecuteFastAttack = (knightIsAwake) =>
  !knightIsAwake ? true : false;
canExecuteFastAttack(knightIsAwake);
console.log(canExecuteFastAttack(knightIsAwake));

// 2. Check if the 'Spy' action is possible
knightIsAwake = false;
export let archerIsAwake = true;
export let prisonerIsAwake = false;
export const canSpy = function (knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake ? true : false;
};
canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake);
console.log(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake));

//3. Check if the 'Signal Prisoner' action is possible
archerIsAwake = false;
prisonerIsAwake = true;
export const canSignalPrisoner = (archerIsAwake, prisonerIsAwake) =>
  prisonerIsAwake && !archerIsAwake ? true : false;
canSignalPrisoner(archerIsAwake, prisonerIsAwake);
console.log(canSignalPrisoner(archerIsAwake, prisonerIsAwake));

// 4. Check if the 'Free Prisoner' action is possible
knightIsAwake = false;
archerIsAwake = true;
prisonerIsAwake = false;
export const petDogIsPresent = false;
export const canFreePrisoner = function (
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  let action;
  if (petDogIsPresent) {
    action = !archerIsAwake ? true : false;
  } else {
    action = prisonerIsAwake && !archerIsAwake && !knightIsAwake ? true : false;
  }
  return action;
};
canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent);
console.log(
  canFreePrisoner(
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent
  )
);
