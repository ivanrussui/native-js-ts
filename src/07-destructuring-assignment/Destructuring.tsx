import React, {useState} from "react";

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string; name?: string }>
    address: { street: { title: string } }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: { model: string }
}

function useIvanState(m: string) {
    return [m, function (){}]
}

function useIvanState2(m: string) {
    return {
        message: m,
        setMessage: function () {}
    }
}

export const ManComponent: React.FC<PropsType> = ({title, man,  ...props}) => {
    // const {title} = props;
    // const {name} = props.man;
    // const {title, man: {name}} = props;
    // const {title, man} = props;
    // const {title, man,  ...restProps} = props;

    const [message, setMessage] = useState('Hi')

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>{props.car.model}</div>
        <div>{man.name}</div>
    </div>
}