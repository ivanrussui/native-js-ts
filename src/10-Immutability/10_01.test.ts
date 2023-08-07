import {
    addBook, addBooks, addCompany,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    updateLaptop, updateSkill,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, UserWithSkillsType, WithCompaniesType
} from "./10_01";

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

test('change address house test', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ivan',
        hair: 34,
        address: {
            city: 'Moscow',
            house: 5
        },
        laptop: {
            title: 'MacBook'
        },
        books: ['html', 'css', 'js', 'react']
    }

    const userCopy = moveUserToOtherHouse(user, 100)

    expect(user).not.toBe(userCopy)
    expect(user.address).not.toBe(userCopy.address)
    expect(user.books).toBe(userCopy.books)
    expect(userCopy.address.house).toBe(100)
    expect(user.address.house).toBe(5)
})

test('add new book to user test', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ivan',
        hair: 34,
        address: {
            city: 'Moscow',
            house: 5
        },
        laptop: {
            title: 'MacBook'
        },
        books: ['html', 'css', 'js', 'react']
    }

    const userCopy = addBook(user, 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books.length).toBe(5)
    expect(user.books.length).toBe(4)
})

test('add new books to user test', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ivan',
        hair: 34,
        address: {
            city: 'Moscow',
            house: 5
        },
        laptop: {
            title: 'MacBook'
        },
        books: ['html', 'css', 'js', 'react']
    }

    const userCopy = addBooks(user, ['ts', 'rest api'])

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('rest api')
    expect(userCopy.books.length).toBe(6)
    expect(user.books.length).toBe(4)
})

test('update book js to ts test', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ivan',
        hair: 34,
        address: {
            city: 'Moscow',
            house: 5
        },
        laptop: {
            title: 'MacBook'
        },
        books: ['html', 'css', 'js', 'react']
    }

    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
    expect(user.books.length).toBe(4)
})

test('update skills test', () => {
    let user: UserWithLaptopType & UserWithSkillsType = {
        name: 'Ivan',
        hair: 34,
        address: {
            city: 'Moscow',
            house: 5
        },
        laptop: {
            title: 'MacBook'
        },
        skills: ['80', '90', '70', '60']
    }

    const userCopy = updateSkill(user, '60', '99')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.skills).not.toBe(userCopy.skills)
    expect(userCopy.skills[3]).toBe('99')
    expect(user.skills.length).toBe(4)
})

test('remove js book test', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ivan',
        hair: 34,
        address: {
            city: 'Moscow',
            house: 5
        },
        laptop: {
            title: 'MacBook'
        },
        books: ['html', 'css', 'js', 'react']
    }

    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
    expect(userCopy.books.length).toBe(3)
    expect(user.books.length).toBe(4)
})

test('add company test', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Ivan',
        hair: 34,
        address: {
            city: 'Moscow',
            house: 5
        },
        laptop: {
            title: 'MacBook'
        },
        companies: [{id: 1, title: 'Apple'}, {id: 2, title: 'Google'}]
    }

    const userCopy = addCompany(user, {id: 3, title: 'Microsoft'})

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[2].title).toBe('Microsoft')
    expect(userCopy.companies.length).toBe(3)
})

test('update company title test', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Ivan',
        hair: 34,
        address: {
            city: 'Moscow',
            house: 5
        },
        laptop: {
            title: 'MacBook'
        },
        companies: [{id: 1, title: 'Apple'}, {id: 2, title: 'Google'}]
    }

    const userCopy = updateCompanyTitle(user, 1, 'Microsoft') as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('Microsoft')
})

test('update company title2 test', () => {
    let companies = {
        'Ivan': [{id: 1, title: 'Apple'}, {id: 2, title: 'Google'}],
        'Anna': [{id: 1, title: 'Consilium'}]
    }

    const userCopy = updateCompanyTitle2(companies, 'Ivan',1, 'Microsoft')

    expect(userCopy['Ivan']).not.toBe(companies['Ivan'])
    expect(userCopy['Anna']).toBe(companies['Anna'])
    expect(userCopy['Ivan'][0].title).toBe('Microsoft')
})