console.log('ciao');

let list = [
    { firstName: 'Marco', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Simone', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Matteo', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Ettore', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];
  function countEuropeanJavascriptDevelopers(list) {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].continent === 'Europe' && list[i].language === 'JavaScript') {
        count++;
      }
    }
    return count;
  }
  let result = countEuropeanJavascriptDevelopers(list);
  console.log(result);
  