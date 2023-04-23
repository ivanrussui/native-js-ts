import { CityType } from './02_02';

let city: CityType;

beforeEach(() => {
  city = {
    title: 'New York',
    houses: [
      {
        id: 1,
        buildedAt: 2012,
        repaired: true,
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

test('test city should contains 3 houses', () => {
  expect(city.houses.length).toBe(3);

  expect(city.houses[0].id).toBe(1);
  expect(city.houses[0].buildedAt).toBe(2012);
  expect(city.houses[0].repaired).toBe(true);
  expect(city.houses[0].address.number).toBe(101);
  expect(city.houses[0].address.street.title).toBe('White street');

  expect(city.houses[1].id).toBe(2);
  expect(city.houses[1].buildedAt).toBe(2018);
  expect(city.houses[1].repaired).toBe(false);
  expect(city.houses[1].address.number).toBe(202);
  expect(city.houses[1].address.street.title).toBe('Black street');

  expect(city.houses[2].id).toBe(3);
  expect(city.houses[2].buildedAt).toBe(2022);
  expect(city.houses[2].repaired).toBe(false);
  expect(city.houses[2].address.number).toBe(303);
  expect(city.houses[2].address.street.title).toBe('Violet street');
})

test('test city should contains hospital and fire station', () => {
  expect(city.governmentBuildings.length).toBe(2);

  expect(city.governmentBuildings[0].type).toBe('HOSPITAL');
  expect(city.governmentBuildings[0].budget).toBe(200000);
  expect(city.governmentBuildings[0].staffCount).toBe(200);
  expect(city.governmentBuildings[0].address.street.title).toBe('Central Street');

  expect(city.governmentBuildings[1].type).toBe('FIRE-STATION');
  expect(city.governmentBuildings[1].budget).toBe(500000);
  expect(city.governmentBuildings[1].staffCount).toBe(1000);
  expect(city.governmentBuildings[1].address.street.title).toBe('South Street');

})
