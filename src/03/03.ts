import { StudentType } from '../02/02';
import { CityType, GovernmentBuildingType, HouseType } from '../02/02_02';

export const addSkill = (st: StudentType, skill: string) => {
  st.technologies.push({
    id: new Date().getTime(),
    title: skill
  })
}

export const makeStudentActive = (st: StudentType) => {
  st.isActive = false;
}

export const doesStudentLiveIn = (st: StudentType, cityName: string) => {
  return st.address.city.title == cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
  building.budget += budget;
}

export const repairHouse = (houseType: HouseType) => {
  houseType.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingType, staff: number) => {
  building.staffCount -= staff
}

export const toHireStaff = (building: GovernmentBuildingType, staff: number) => {
  building.staffCount += staff
}

export const createMessage = (city: CityType) => {
  return `Hello ${city.title} citizens. I want you be Happy. All ${city.citizensNumber} men`
}