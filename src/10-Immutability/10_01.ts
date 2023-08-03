export type UserType = {
    name: string
    hair: number
    address: { title: string }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export function makeHairstyle(u: UserType, power: number) {
    let copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = u.hair / power
    return copy
}

export const moveUser = (u: UserWithLaptopType, city: string) => {
  let copy = {
      ...u,
      address: {
          ...u.address,
          title: city
      }
  }
  return copy
}