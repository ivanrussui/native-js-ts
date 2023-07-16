import {createGreetingMessage, ManType} from "./05";

let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: 'Ivan Russu', age: 33},
        {name: 'Vladimir Pulin', age: 31},
        {name: 'Andrew Ivanov', age: 18},
    ]
})

test('should get array of greeting messages', () => {

    // const messages = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator`)
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello Ivan. Welcome to IT-Incubator')
    expect(messages[1]).toBe('Hello Vladimir. Welcome to IT-Incubator')
    expect(messages[2]).toBe('Hello Andrew. Welcome to IT-Incubator')
})
