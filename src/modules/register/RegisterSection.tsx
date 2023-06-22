import axios from "axios";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function RegisterSection(){
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: {errors}
    }  = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })
    const FormSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        
        axios.post("/api/register", data).then(() => {
            console.log("Success")
        }).catch((err: any) => console.log(err))
        .finally(() => {
            setIsLoading(false)
            console.log("Registed")
        })
    }
    return <form>
        <div className="flex flex-col text-left text-black bg-[#253740] p-12">

            <label>Name</label>
            <input {...register("name")} className="my-2" placeholder="Name" id = "name"></input>

            <label>EmaiL Address</label>
            <input {...register("email")} className="my-2" placeholder="Email Address" id = "email"></input>
            
            <label>Password</label>
            <input {...register("password")} className="my-2" placeholder="Password" id = "password"></input>
            <button onClick = {handleSubmit(FormSubmit)}>Continue</button>

        </div>
    </form>
}