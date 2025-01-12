import { Form, useActionData } from "react-router-dom";
import Button from "../components/Button";

const ActionPractice = () => {
    return (
        <div>
            <Form method="POST">
                <label htmlFor="name">
                    Name: <input type="text" name="name" id="name" />
                </label>
                <label htmlFor="age">
                    Name: <input type="text" name="age" id="age" />
                </label>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export const action = async ({
    request,
}: {
    request: Request;
}) => {
    const formData = await request.formData().then((res) => Object.fromEntries(res));
    return formData;
};

export default ActionPractice;
