import { UsersType } from './08_01';

export let users: UsersType

beforeEach(() => {
  users = {
    '101': { id: 101, name: 'Ivan' },
    '3244': { id: 3244, name: 'Anna' },
    '1': { id: 1, name: 'Melissa' }
  }
})

test('should update corresponding user', () => {
  users['3244'].name = 'Anechka'
  users['1'].name = 'Melissik'

  expect(users['3244'].name).toBe('Anechka')
  expect(users['1']).toEqual({ id: 1, name: 'Melissik' })
})

test('should delete corresponding user', () => {
  delete users['1']

  expect(users['1']).toBeUndefined()
})