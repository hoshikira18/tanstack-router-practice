import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPractice = () => {
    return (
        <div className="">
            <Modal>
                <Modal.Trigger>
                    <Button>Open Modal</Button>
                </Modal.Trigger>
                <Modal.Content>
                    <div className="h-[800px] bg-black">Hello</div>
                </Modal.Content>
            </Modal>
        </div>
    );
};

export default ModalPractice;
