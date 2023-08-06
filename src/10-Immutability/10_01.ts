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

export const updateLaptop = (u: UserWithLaptopType, laptop: string) => {
  return {
      ...u,
      laptop: {
          ...u.laptop,
          title: laptop
      }
  }
}

























