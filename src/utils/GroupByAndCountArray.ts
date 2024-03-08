export const groupByAndCountArray = (elements, property) => {
  const dictionary = {};

  const states = elements.map(ap => ap[property])

  states.forEach(state => {
    if (!dictionary.hasOwnProperty(state)) {
      dictionary[state] = 1;
    } else {
      dictionary[state]++;
    }
  })

  const result = []
  
  Object.keys(dictionary).forEach((key) => {
    result.push({
      name : key,
      count : dictionary[key]
    })
  })
  
  return result;
}