import {makeHairstyle, moveUser, updateLaptop, UserType, UserWithLaptopType} from "./10_01";

test('reference type test', () => {
    let user: UserType = {
        name: 'Ivan',
        hair: 34,
        address: {
            city: 'Moscow'
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
            city: 'Moscow',
            house: 5
        },
        laptop: {
            title: 'MacBook'
        }
    }

    const movedUser = moveUser(user, 'New York')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('New York')
    expect(user.address.city).toBe('Moscow')
})

test('update laptop to MacBook Pro test', () => {
    let user: UserWithLaptopType = {
        name: 'Ivan',
        hair: 34,
        address: {
            city: 'Moscow',
            house: 5
        },
        laptop: {
            title: 'MacBook'
        }
    }

    const updatedLaptop = updateLaptop(user, 'MacBook Pro')

    expect(user).not.toBe(updatedLaptop)
    expect(user.address).toBe(updatedLaptop.address)
    expect(user.laptop).not.toBe(updatedLaptop.laptop)
    expect(updatedLaptop.laptop.title).toBe('MacBook Pro')
    expect(user.laptop.title).toBe('MacBook')
})