import { CityType } from '../02/02_02';
import { addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff } from './03';

let city: CityType;

beforeEach(() => {
  city = {
    title: 'New York',
    houses: [
      {
        id: 1,
        buildedAt: 2012,
        repaired: false,
        address: {
          number: 101,
          street: {
            title: 'White street'
          }
        }
      },
      {
        id: 2,
        buildedAt: 2018,
        repaired: false,
        address: {
          number: 202,
          street: {
            title: 'Black street'
          }
        }
      },
      {
        id: 3,
        buildedAt: 2022,
        repaired: false,
        address: {
          number: 303,
          street: {
            title: 'Violet street'
          }
        }
      },
    ],
    governmentBuildings: [
      {
        type: 'HOSPITAL',
        budget: 200000,
        staffCount: 200,
        address: {
          street: {
            title: 'Central Street'
          }
        }
      },
      {
        type: 'FIRE-STATION',
        budget: 500000,
        staffCount: 1000,
        address: {
          street: {
            title: 'South Street'
          }
        }
      }
    ],
    citizensNumber: 1000000,
  }
})

test('Budget should be changed for HOSPITAL', () => {
  addMoneyToBudget(city.governmentBuildings[0], 100000);

  expect(city.governmentBuildings[0].budget).toBe(300000);
})

test('Budget should be changed for FIRE-STATION', () => {
  addMoneyToBudget(city.governmentBuildings[1], -100000);

  expect(city.governmentBuildings[1].budget).toBe(400000);
})

test('Budget should be changed for FIRE-STATION', () => {
  repairHouse(city.houses[1]);

  expect(city.houses[1].repaired).toBeTruthy();
})

test('Staff should be increased', () => {
  toFireStaff(city.governmentBuildings[1], 10)

  expect(city.governmentBuildings[1].staffCount).toBe(990);
})

test('House should be increased', () => {
  toHireStaff(city.governmentBuildings[0], 50)
  toHireStaff(city.governmentBuildings[1], 5)

  expect(city.governmentBuildings[0].staffCount).toBe(250);
  expect(city.governmentBuildings[1].staffCount).toBe(1005);
})

test('Greeting message should be correct for city', () => {
  const message = createMessage(city)

  expect(message).toBe(`Hello ${city.title} citizens. I want you be Happy. All ${city.citizensNumber} men`);
})