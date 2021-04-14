
const isAlive = (character) => ({
  lifeCheck: () => {
    if (character.hp <= 0) {
      return false;
    } else {
      return true;
    }
  }
})

const canAttack = (character) => ({
  attack: (target) => {
    target.hp -= character.strength;

  }
});

const canCast = (character) => ({
  castFirebolt: (target) => {
    target.hp -= character.intelligence;
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


const createGenericDude = (name) => {
  let character ={
    name,
    hp: 15,
    mana: 10,
    strength: 5,
    intelligence: 5,
    xp: 10
  }

  return {...character, ...canAttack(character), ...canCast(character), ...canHoldThings(character), ...canUseItems(character)};
};


const createGenericChild = (name) => {
  let character ={
    name,
    hp: 5,
    mana: 0,
    strength: 1,
    intelligence: 1,
    xp: 2
  }

  return {...character, ...canAttack(character), ...canCast(character), ...canHoldThings(character), ...canUseItems(character)};
};

const createBossDude = (name) => {
  let character ={
    name,
    hp: 50,
    mana: 25,
    strength: 20,
    intelligence: 20,
    xp: 100
  }

  return {...character, ...canAttack(character), ...canCast(character), ...canHoldThings(character), ...canUseItems(character)};
};