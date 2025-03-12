// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  const mondayWork = function(task = 'go to the office') {
    return `This Monday, I will ${task}.`;
  };
  
  
  console.log(saturdayFun());  
  console.log(saturdayFun("bathe my dog"));  
  
  console.log(mondayWork());  
  console.log(mondayWork("work from home"))
  

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}
