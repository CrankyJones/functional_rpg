// const storeState = () => {
//   let currentState = {};
//   return (stateChangeFunction = state => state) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   }
// }

// const charStateControl = storeState();



// LEVEL UP?
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}
   // lil ol function factory
const addOneMana = changeState("maxMana")(1);
const addOneStamina = changeState("maxStamina")(1);
const addOneInt = changeState("intelligence")(1);
const addFiveInt = changeState("intelligence")(5);
const addFiveStr = changeState("strength")(5);
const addOneHp = changeState("maxHp")(1);
// const usePotion = changeState("hp")(10);
// addOneStr(newDude)
// 


const isAlive = (character) => ({
  lifeCheck: () => {
    if (character.hp <= 0) {
      console.log("You ded");
      return false;
    } else {
      return true;
    }
  }
})


const canAttack = (character) => ({
  attack: (target) => {
    if (character.stamina >= 1) {
      target.hp -= character.strength;
      character.stamina -= 1;
    } else {
      console.log("Dude is tired and can't attack")
    }
    if (isAlive(target)) {}
    else {
      character.xp += target.xp;
    }
    if (character.xp >= 100) {
      character.xp -= 100;
      if (character.role == 'wizard') {
        addFiveInt(character);
        addOneMana(character);
        addOneHp(character);
        character.rest();
      } else if (character.role == 'fighter') {
        addFiveStr(character);
        addOneStamina(character);
        addOneHp(character);
        character.rest();
      }
      character.level += 1;
    }
  }
});

const canCast = (character) => ({
  castFirebolt: (target) => {
    if (character.mana >= 1) {
      target.hp -= character.intelligence;
      character.mana -= 1;
    } else {
      console.log("NO MORE MANA YA DINGUS")
    }
  },
  castHeal: (target) => {
    if (character.mana >= 1) {
      target.hp += character.intelligence;
      character.mana -= 1;
    } else {
      console.log("NO MORE MANA YA DINGUS")
    }
    if (isAlive(target)) {}
    else {
      character.xp += target.xp;
    }
    if (character.xp >= 100) {
      character.xp -= 100;
      if (character.role == 'wizard') {
        addFiveInt(character);
        addOneMana(character);
        addOneHp(character);
      } else if (character.role == 'fighter') {
        addFiveStr(character);
        addOneStamina(character);
        addOneHp(character);
      }
      character.rest();
      character.level += 1;
    }
  }
});

const canUseItems = (character) => ({
  useItem: (item, target) => {

  }
});

const canHoldThings = (character) => ({
  pickup: (item) => {
    character.inventory.push(item)
    if (character.inventory.length > 10) {
      console.log("Your bags are too full.")
    }
  },
  drop: (item) => {
    character.inventory.delete(item)
  }

  
});

const canRest = (character) => ({
  rest: () => {
    character.hp = character.maxHp;
    if (character.mana) {
      character.mana = character.maxMana;
    }
    if (character.stamina) {
      character.stamina = character.maxStamina;
    }
  }
});

const canFlee = (character) => ({
  flee: () => {
    const runAway = Math.floor(Math.random() *10);
    if (runAway > 4) {
      // Leave Combat
      return true;
    } else {
      return "You weren't able to run away!";
    }
  }
})

const createKoboldWizard = (name) => {
  let character ={
    name,
    role: 'wizard',
    maxHp: 15,
    hp: 15,
    maxMana: 30,
    mana: 30,
    strength: 2,
    intelligence: 20,
    xp: 0,
    inventory: [],
    level: 1
  }

  return {...character, ...canAttack(character), ...canRest(character), ...canCast(character), ...canHoldThings(character), ...canUseItems(character), ...canFlee(character), ...isAlive(character)};
};

const createKoboldFighter = (name) => {
  let character ={
    name,
    role: 'fighter',
    maxHp: 30,
    hp: 30,
    maxStamina: 15,
    stamina: 15,
    strength: 20,
    intelligence: 5,
    xp: 0,
    inventory: [],
    level: 1
  }

  return {...character, ...canAttack(character), ...canRest(character), ...canHoldThings(character), ...canUseItems(character), ...canFlee(character), ...isAlive(character)};
};

const newDude = createKoboldWizard("Bob")
charStateControl(newDude)
if (newDude.lifeCheck() === false) {
  console.log("GAAAAAME OOOOOOVER MAAAAN")
}