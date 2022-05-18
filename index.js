// code your solution here
const saturdayFun = (activity = 'roller-skate') => {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (activity = 'go to the office') => {
  return `This Monday, I will ${activity}.`
}

const wrapAdjective = (initializer = '') => {
    const innerFunction = function (adjective) {
        return `You are ${initializer}${adjective}${initializer}!`;
    };
    return innerFunction;
  }
  