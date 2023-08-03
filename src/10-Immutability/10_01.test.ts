import {UserType} from "./10_01";

function makeHairstyle(u: UserType, power: number) {
    let copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = u.hair / power

    return copy
}

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