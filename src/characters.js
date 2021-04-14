export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

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
const addOneMana = changeState("mana")(1);
const addOneStamina = changeState("stamina")(1);
const addOneInt = changeState("intelligence")(1);
const addOneStr = changeState("strength")(1);
addOneStr(newDude)
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
  }
});

const canCast = (character) => ({
  castFirebolt: (target) => {
    target.hp -= character.intelligence;
    character.mana -= 1;
  },
  castHeal: (target) => {
    target.hp += character.intelligence;
    character.mana -= 1;
  }
});

const canUseItems = (character) => ({
  useItem: (target) => {

  }
});

const canHoldThings = (character) => ({
  inventory: () => {
    
  }
});


const createKoboldWizard = (name) => {
  let character ={
    name,
    hp: 15,
    mana: 30,
    strength: 5,
    intelligence: 20,
    xp: 0
  }

  return {...character, ...canAttack(character), ...canCast(character), ...canHoldThings(character), ...canUseItems(character)};
};

const createKoboldFighter = (name) => {
  let character ={
    name,
    hp: 30,
    stamina: 15,
    strength: 20,
    intelligence: 5,
    xp: 0
  }

  return {...character, ...canAttack(character),...canHoldThings(character), ...canUseItems(character)};
};

const newDude = createKoboldWizard("Bob")

if (newDude.lifeCheck() === false) {
  console.log("GAAAAAME OOOOOOVER MAAAAN")
}