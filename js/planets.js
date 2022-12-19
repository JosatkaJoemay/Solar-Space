//Создание Земли
const planetEarth = {
   name: 'Earth',
   population: 7000000,
   race: 'human',
   faith: false
}

// Дубликат Земли
const planetEarthDublicate = planetEarth;
planetEarthDublicate.population = 6000000;

//Создание Марса
const planetMars = { ...planetEarth };
planetMars.race = 'aliens';
planetMars.population = 164000;
planetMars.name = 'Mars';

//СОздание функции копирования планеты
function copyPlanet(planet, name = planet.name, population = planet.population, race = planet.race, faith = planet.faith) {
   const newPlanet = { ...planet };
   newPlanet.name = name;
   newPlanet.population = population;
   newPlanet.race = race;
   newPlanet.faith = faith;
   return newPlanet;
}

//Создание Урана
const planetUranus = copyPlanet(planetEarth, 'Uranus');

//Проверка изменений данных в планетах
planetMars.population = 7;
planetUranus.population = 1237;



//Вывод в консоль данных о созданных планетах
console.log(planetEarth);
console.log(planetMars);
console.log(planetUranus);

