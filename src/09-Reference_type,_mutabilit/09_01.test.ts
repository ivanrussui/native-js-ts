import {UserType} from "./09_01";
import {users} from "../08/08_01.test";

function increaseAge(user: UserType) {
    user.age++;
}

test('obj reference test', () => {
    const user: UserType = {
        name: 'Ivan',
        age: 33
    }

    increaseAge(user);

    expect(user.age).toBe(34);

    const superman = user;
    superman.age = 1000;

    expect(user.age).toBe(1000);
})

test('array reference test', () => {
    const users = [
        {
            name: 'Ivan',
            age: 33
        },
        {
            name: 'Ivan',
            age: 33
        },
    ]

    const admins = users;
    admins.push({name: 'Meli', age: 2})
    expect(users[2]).toEqual({name: 'Meli', age: 2})

})

test('value type test', () => {
    const usersCount = 100;
    let adminsCount = 100;

    adminsCount++;

    expect(usersCount).toBe(100);
    expect(adminsCount).toBe(101);
})

test('reference type test', () => {
    const address = {
        title: 'Moscow'
    }

    let user: UserType = {
        name: 'Ivan',
        age: 33,
        address: address
    }

    let user2: UserType = {
        name: 'Anna',
        age: 34,
        address: address
    }

    user2.address!.title = 'Canary'

    expect(user.address).toBe(user2.address)
    expect(user.address?.title).toBe('Canary')
    expect(user2.address?.title).toBe('Canary')
})

test('reference type array test', () => {
    const address = {
        title: 'Moscow'
    }

    let user: UserType = {
        name: 'Ivan',
        age: 33,
        address
    }

    let user2: UserType = {
        name: 'Anna',
        age: 34,
        address
    }

    const users = [user, user2, {name: 'Melissa', age: 2, address}];
    const admins = [user, user2];
    admins[0].age = 34;

    expect(users[0].age).toBe(34);
    expect(user.age).toBe(34);
})

test('sort array test', () => {
    const letters = ['z', 's', 'a', 'b', 'f'];
    passport(letters);

    // expect(letters).toEqual(['a', 'b', 'f', 's', 'z']);
    expect(letters).toEqual(['z', 's', 'a', 'b', 'f']);
})

function passport(letters: string[]) {
    // letters.sort();
    [...letters].sort();
}