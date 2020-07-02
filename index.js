const fs = require('fs');
const faker = require('faker');

const customers = [];
const bars = [];
const stamps = [];
let rewards = [];
const ratings = [];

const customers_rewards = [];
const customers_stamps = [];

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

for (let i = 0; i < 20; i++) {
  customers[i] = {
    id: i + 1,
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    password: faker.internet.password(),
    avatar: faker.internet.avatar(),
    birthDate: faker.date.past(),
    level: getRandomNumber(1, 20),
  };

  bars[i] = {
    id: i,
    name: faker.company.companyName(),
    phone: faker.phone.phoneNumber(),
    address: `${faker.address.streetName()}, ${faker.random.number()} - ${faker.address.streetName()}. ${faker.address.city()} / ${faker.address.stateAbbr()}`,
    latitude: faker.address.latitude(),
    longitute: faker.address.longitude(),
    cnpj: faker.random.number(),
    logo: null,
  };

  stamps[i] = {
    id: i,
    barId: i,
    name: faker.company.bsAdjective(),
    description: faker.company.catchPhrase(),
    picture: null,
  };
}

for (let i = 0; i < 1000; i++) {
  ratings[i] = {
    id: i + 1,
    customerId: getRandomNumber(1, 20),
    barId: getRandomNumber(1, 20),
    service: getRandomNumber(2, 5),
    atmosphere: getRandomNumber(2, 5),
    quality: getRandomNumber(2, 5),
    price: getRandomNumber(2, 5),
    review: faker.lorem.sentence(),
  };
}

rewards = [
  {
    id: 1,
    name: 'Open Bar de mesa',
  },
  {
    id: 2,
    name: '1 Brahma Lata',
  },
  {
    id: 3,
    name: '1 Antarctica Lata',
  },
  {
    id: 4,
    name: '1 Long Neck Stella Artois',
  },
  {
    id: 5,
    name: 'Desconto de 2%',
  },
  {
    id: 6,
    name: 'Desconto de 3%',
  },
  {
    id: 7,
    name: 'Desconto de 4%',
  },
  {
    id: 8,
    name: 'Desconto de 5%',
  },
];

for (let i = 0; i < 200; i++) {
  customers_rewards[i] = {
    id: i + 1,
    customerId: getRandomNumber(1, 20),
    rewardId: getRandomNumber(1, 8),
  };

  customers_stamps[i] = {
    id: i,
    level: getRandomNumber(1, 20),
    customerId: getRandomNumber(1, 20),
    stampId: getRandomNumber(1, 20),
  };
}

const data = JSON.stringify({
  customers,
  bars,
  stamps,
  rewards,
  ratings,
  customers_rewards,
  customers_stamps,
});

fs.writeFileSync('db.json', data);
