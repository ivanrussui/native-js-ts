import { CityType } from '../02/02_02';
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04_02";

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
            title: 'Happy street'
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
            title: 'Happy street'
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

// 01. Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be destroyed', () => {
  demolishHousesOnTheStreet(city, 'Happy street');

  expect(city.houses.length).toBe(1);
  expect(city.houses[0].id).toBe(1);

})

// 03. Массив строений, где работают больше 500 людей
test('buildings with correct staff count', () => {
  let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)

  expect(buildings.length).toBe(1);
  expect(buildings[0].type).toBe('FIRE-STATION')
})