import Image from 'next/image';
import * as React from 'react'
import { useForm } from "react-hook-form";
import Check from '../Check';

type Inputs = {
    email: string
}

export default function NewsLatterForm() {
    const [loading, setLoading] = React.useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const [isValid, setIsValid] = React.useState(false);

    const onSubmit = async (data: { email: string }) => {
        try {
            setLoading(true);
            fetch('/api/mailing', {
                method: 'POST',
                body: JSON.stringify({ email: data.email })
            }).then(response => response.json()).then((data) => {
                setIsValid(true);
            }).catch((error) => {
                console.log(error);
                setLoading(false);
            })
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    return (
        <>
            {isValid && <Check />}
            {!isValid && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="input mb-3" placeholder="Enter email" {...register("email", { required: true, pattern: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/ })} />
                    {errors.email && <small className='is-error'>Email is not valid</small>}
                    <button className="button is-fullwidth">{loading ? 'Submitting ...' : 'Submit'}</button>
                </form>
            )}
        </>
    )
}
