import { StudentType } from '../02/02';
import { addSkill, doesStudentLiveIn, makeStudentActive } from './03';


let student: StudentType;
beforeEach(() => {
  student = {
    id: 1,
    name: 'Ivan',
    age: 33,
    isActive: true,
    address: {
      streetTitle: 'Glavnaya',
      city: {
        title: 'Balashiha',
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
})

test('new tech skill be added to student', () => {
  expect(student.technologies.length).toBe(3);

  addSkill(student, 'JS');

  expect(student.technologies.length).toBe(4);
  expect(student.technologies[3].title).toBe('JS');
  expect(student.technologies[3].title).toBeDefined();

})

test('student should be made not active', () => {
  expect(student.isActive).toBe(true);

  makeStudentActive(student);

  expect(student.isActive).toBe(false);
})

test('does student live in city&', () => {

  let result1 = doesStudentLiveIn(student, 'Moscow');
  let result2 = doesStudentLiveIn(student, 'Balashiha');

  expect(result1).toBe(false);
  expect(result2).toBe(true);
})