export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Ivan Russu', age: 33},
    {name: 'Vladimir Pulin', age: 31},
    {name: 'Andrew Ivanov', age: 18},
]

const dimychTransformator = (man: ManType) => ({
    stack: ['css html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
})

const devs = [
    {
        stack: ['css html', 'js', 'tdd', 'react'],
        firstName: 'Ivan',
        lastName: 'Russu'
    },
    {
        stack: ['css html', 'js', 'tdd', 'react'],
        firstName: 'Vladimir',
        lastName: 'Pulin'
    },
    {
        stack: ['css html', 'js', 'tdd', 'react'],
        firstName: 'Andrew',
        lastName: 'Ivanov'
    }
]

const dev2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),
]

const dev3 = people.map(dimychTransformator)

const dev4 = people.map(man => ({
    stack: ['css html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}))

const messages = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator`)

export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator`)
}