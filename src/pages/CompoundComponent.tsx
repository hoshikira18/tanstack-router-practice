import Counter from "../components/Counter";

const CompoundComponent = () => {
    return (
        <div>
            <Counter>
                <Counter.Decrease>-</Counter.Decrease>
                <Counter.Count />
                <Counter.Increase>+</Counter.Increase>
                <Counter.Label>My super flexible counter.</Counter.Label>
            </Counter>
        </div>
    );
};

export default CompoundComponent;
