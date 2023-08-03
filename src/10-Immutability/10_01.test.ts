import {makeHairstyle, moveUser, UserType, UserWithLaptopType} from "./10_01";

test('reference type test', () => {
    let user: UserType = {
        name: 'Ivan',
        hair: 34,
        address: {
            title: 'Moscow'
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(34)
    expect(awesomeUser.hair).toBe(17)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address test', () => {
    let user: UserWithLaptopType = {
        name: 'Ivan',
        hair: 34,
        address: {
            title: 'Moscow'
        },
        laptop: {
            title: 'MacBook'
        }
    }

    const movedUser = moveUser(user, 'New York')


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.title).toBe('New York')
    expect(user.address.title).toBe('Moscow')
})