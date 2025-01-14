import { Input } from "@mantine/core";
import { type FieldValues, useForm } from "react-hook-form";
import Button from "../components/Button";

const ReactHookFormPractice = () => {
    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState;

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };
    const onError = (error: FieldValues) => {
        console.log(error);
    };

    return (
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit, onError)}>
            <div>
                <label htmlFor="name">Name</label>
                <Input
                    id="name"
                    {...register("name", {
                        required: "This field is required!",
                    })}
                />
                <p>
                    {Boolean(errors?.name?.message) && (
                        <span className="text-red-500">{errors?.name?.message as string}</span>
                    )}
                </p>
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <Input
                    id="age"
                    type="number"
                    {...register("age", {
                        required: "This field is required!",
                        validate: (value) => {
                            return value > 12 || "Age should be more than 12.";
                        },
                    })}
                />
                <p>
                    {Boolean(errors?.age?.message) && (
                        <span className="text-red-500">{errors?.age?.message as string}</span>
                    )}
                </p>
            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
};

export default ReactHookFormPractice;
