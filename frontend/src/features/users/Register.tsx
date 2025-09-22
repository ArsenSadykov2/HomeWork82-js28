import {type ChangeEvent, type FormEvent, useState} from "react";
import type {RegisterMutation} from "../../types";

const Register = () => {
    const [state, setState] = useState<RegisterMutation>({
        username: '',
        password: '',
    });

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        const [name, value] = e.target.value;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const onSubmitForm = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <div>
            Register
        </div>
    );
};

export default Register;