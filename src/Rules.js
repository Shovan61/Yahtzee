class Rules {
constructor(parameters){
    Object.assign(this, parameters);
}

sum(dice){
    return dice.reduce((accum, cur) => accum + cur);
}    
 

frequency(dice){
let map = new Map();
dice.forEach(element => {
    if(!map.has(element)){
        map.set(element, 1);
    } else {
        map.set(element, map.get(element) + 1);
    }
});

let result = [];
  map.forEach(val => {
  result.push(val)
  });

  return result;

}


count(dice, val){
    const counting = dice.filter(element => element === val).length;
    return counting;
  }



};


//  single number sum
class SumSameNumber extends Rules{
evalRoll = dice => {
return this.count(dice, this.val) * this.val;
};
};



// 3 of Kind & 4 of Kind
class SumDistro extends Rules {
evalRoll = dice => {
return this.frequency(dice).some(cur => cur >= this.val) ? this.count(dice, this.val) * this.val : 0; 
};

};


// Full House
class FullHouse extends Rules{
evalRoll = dice => {
return (this.frequency(dice).includes(3) && this.frequency.includes(2)) ? this.score : 0
};

};

// Small Straight
//  1234 2345 3456
class SmallStraight extends Rules{
evalRoll = dice => {
let set = new Set(dice);

if(set.has(2) && set.has(3) & set.has(4) && (set.has(1) || set.has(5))){
    return this.score;
};

if(set.has(3) && set.has(4) & set.has(5) && (set.has(2) || set.has(6))){
    return this.score;
};

return 0;

};
};

// Large Straight
class LargeStraight extends Rules{
evalRoll = dice => {
let set = new Set(dice);

return (set.size === 5 && (!set.has(1) || !set.has(6))) ? this.score : 0;

};
};


// Yahtzee
class Yahtzee extends Rules{
evalRoll = dice => {
return this.frequency(dice)[0] === 5 ? this.score : 0;
};
};

// Chance
class Chance extends Rules{
evalRoll = dice => {
return this.sum(dice);
};
};



//  single number sum
const ones = new SumSameNumber({val: 1});
const twos = new SumSameNumber({val: 2});
const threes = new SumSameNumber({val: 3});
const fours = new SumSameNumber({val: 4});
const fives = new SumSameNumber({val: 5});
const sixes = new SumSameNumber({val: 6});

// 3 of Kind & 4 of Kind
const threeOfKind = new SumDistro({val: 3});
const fourOfKind = new SumDistro({val: 4});



// Full House
const fullHouse = new FullHouse({score: 25})

// Small Straight
const smallStraight = new SmallStraight({score: 30});

// Large Straight
const largeStraight = new LargeStraight({score: 40})

// Yahtzee
const yahtzee = new Yahtzee({score: 50});

// Chance
 const chance = new Chance();

export {
    ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance
};