const fs = require("fs");
const faker = require("faker");
faker.locale = "pt_BR";

const CUSTOMER_COUNT = 20;
const BAR_COUNT = 40;
const REVIEW_COUNT = 1200;

const customers = [];
const bars = [];
const stamps = [];
const ratings = [];
let rewards = [];

const customers_rewards = [];
const customers_stamps = [];

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomIntNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

for (let i = 0; i < CUSTOMER_COUNT; i++) {
  customers[i] = {
    id: i + 1,
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    password: faker.internet.password(),
    avatar: faker.internet.avatar(),
    birthDate: faker.date.between(
      new Date(331443048000),
      new Date(1025667048000),
    ),
    level: getRandomIntNumber(1, 20),
  };
}

for (let i = 0; i < BAR_COUNT; i++) {
  bars[i] = {
    id: i + 1,
    name: `Bar ${faker.company.companyName()}`,
    phone: faker.phone.phoneNumber(),
    address:
      `${faker.address.streetName()}, ${faker.random.number()} - ${faker.address.streetName()}. ${faker.address.city()} / ${faker.address.stateAbbr()}`,
    latitude: -getRandomNumber(2, 20),
    longitute: -getRandomNumber(39, 57),
    cnpj: faker.random.number(),
    logo: faker.image.nightlife(),
  };

  stamps[i] = {
    id: i + 1,
    barId: i + 1,
    name: faker.company.bsAdjective(),
    description: faker.company.catchPhrase(),
    picture: null,
  };
}

for (let i = 0; i < REVIEW_COUNT; i++) {
  ratings[i] = {
    id: i + 1,
    customerId: getRandomIntNumber(1, CUSTOMER_COUNT),
    barId: getRandomIntNumber(1, BAR_COUNT),
    service: getRandomIntNumber(2, 5),
    atmosphere: getRandomIntNumber(2, 5),
    quality: getRandomIntNumber(2, 5),
    price: getRandomIntNumber(2, 5),
    review: faker.lorem.sentence(),
  };
}

rewards = [
  {
    id: 1,
    name: "Open Bar de mesa",
  },
  {
    id: 2,
    name: "1 Brahma Lata",
  },
  {
    id: 3,
    name: "1 Antarctica Lata",
  },
  {
    id: 4,
    name: "1 Long Neck Stella Artois",
  },
  {
    id: 5,
    name: "Desconto de 2%",
  },
  {
    id: 6,
    name: "Desconto de 3%",
  },
  {
    id: 7,
    name: "Desconto de 4%",
  },
  {
    id: 8,
    name: "Desconto de 5%",
  },
];

for (let i = 0; i < 200; i++) {
  customers_rewards[i] = {
    id: i + 1,
    customerId: getRandomIntNumber(1, CUSTOMER_COUNT),
    rewardId: getRandomIntNumber(1, 8),
  };

  customers_stamps[i] = {
    id: i + 1,
    level: getRandomIntNumber(1, 20),
    customerId: getRandomIntNumber(1, CUSTOMER_COUNT),
    stampId: getRandomIntNumber(1, BAR_COUNT),
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

fs.writeFileSync("db.json", data);
