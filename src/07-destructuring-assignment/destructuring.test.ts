import {ManType} from "./Destructuring";

let props: ManType;

beforeEach(() => {
    props = {
        name: 'Ivan',
        age: 33,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Boss street'
            }
        }
    }
})

test('', () => {

    // const age = props.age;
    // const lessons = props.lessons;
    const {age, lessons} = props;
    const {title} = props.address.street;

    expect(age).toBe(33);
    expect(lessons.length).toBe(2);
    expect(title).toBe('Boss street');
})