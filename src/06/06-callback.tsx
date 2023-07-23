// const callback = (): number => {
//     alert('hi')
//     return 12;
// }
// window.setTimeout(callback, 1000)


import {ChangeEvent, MouseEvent} from "react";

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        // debugger
        alert(event.currentTarget)
        // alert('User deleted')
    }

    const saveUser = () => {
        alert('User saved')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed: ' + event.currentTarget.value)
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }

    return <div>
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLostHandler} defaultValue={'Ivan'}/>
        </div>
        <div>
            <input onChange={onAgeChanged} type="number"/>
        </div>
        <div>
            <button name={'delete'} onClick={deleteUser}>X</button>
            <button name={'save'} onClick={deleteUser}>X</button>
        </div>
    </div>
}