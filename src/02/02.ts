type AdressType = {
  streetTitle: string
  city: LocalCityType
}

type LocalCityType = {
  title: string
  countryTitle: string
}

type TechType = {
  id: number
  title: string
}

export type StudentType = {
  id: number
  name: string
  age: number
  isActive: boolean
  address: AdressType
  technologies: TechType[]
}

export const student: StudentType = {
  id: 1,
  name: 'Ivan',
  age: 33,
  isActive: true,
  address: {
    streetTitle: 'Glavnaya',
    city: {
      title: 'Blashiha',
      countryTitle: 'Russia'
    },
  },
  technologies: [
    {
      id: 1,
      title: 'HTML'
    },
    {
      id: 1,
      title: 'CSS'
    },
    {
      id: 3,
      title: 'JS'
    },
  ]
}

console.log(student.technologies[2].title)