export type UsersType = {
  [key: string]: { id: number, name: string }
}

const users: UsersType = {
  '101': { id: 101, name: 'Ivan' },
  '3244': { id: 3244, name: 'Anna' },
  '1': { id: 1, name: 'Melissa' }
}

let user = { id: 1000, name: 'Sasha' }

users[user.id] = user
// console.log(users)
delete users[user.id]
// users[user.id].name = 'Alexandra'
// console.log(users)

export const usersArray = [
  { id: 101, name: 'Ivan' },
  { id: 3244, name: 'Anna' },
  { id: 1, name: 'Melissa' }
]

let usersCopy = [ user, ...usersArray ]

let usersArrayNew = usersArray.filter(u => u.id !== user.id)
// console.log(usersArrayNew)
// console.log(usersArray)
// console.log(usersCopy)
