export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type UserWithSkillsType = UserType & {
    skills: Array<string>
}

export type WithCompaniesType = {
    companies: Array<{ id: number, title: string }>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = u.hair / power
    return copy
}

export const moveUser = (u: UserWithLaptopType, city: string) => {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
    // copy.address = {
    //     ...u.address,
    //     city: city
    // }
}

export const moveUserToOtherHouse = (u: UserWithLaptopType & UserWithBooksType, house: number) => {
    return {
        ...u,
        address: {
            ...u.address,
            house
        }
    }
}

export const updateLaptop = (u: UserWithLaptopType, laptop: string) => {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export const addBook = (u: UserWithLaptopType & UserWithBooksType, newBook: string) => {
    return {
        ...u,
        books: [...u.books, newBook]
    }

    // const copy = {
    //     ...u,
    //     books: [...u.books]
    // }
    //
    // copy.books.push(newBook)
    //
    // return copy
}

//  todo удали или напишги
// export const addBooks = (u: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) => {
//     return {
//         ...u,
//         books: [u.books.map(b => b, newBooks)]
//     }
// }

export const updateBook = (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => ({
    ...u,
    books: u.books.map(b => b === oldBook ? newBook : b)
})

export const updateSkill = (u: UserWithLaptopType & UserWithSkillsType, oldSkill: string, newSkill: string) => ({
    ...u,
    skills: u.skills.map(s => s === oldSkill ? newSkill : s)
})

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, removeBook: string) => ({
    ...u,
    books: u.books.filter(b => b !== removeBook)
})


export const addCompany = (u: UserWithLaptopType & WithCompaniesType, newCompany: { id: number, title: string }) => {
    return {
        ...u,
        companies: [...u.companies, newCompany]
    }
}





























