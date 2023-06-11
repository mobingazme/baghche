import { Icon } from '@iconify/react';
const Modal = ({ children, open, setOpen }) => {
    const modalOpenHandler = (e) => {
        // control the current click in modal outside of children
        e.target == e.currentTarget &&
            setOpen(false)
    }
    return (
        <>

            {
                open && (
                    <div className="w-full h-screen fixed backdrop-blur-sm bg-[#0000006] overflow-hidden 
                z-50" style={{ maxWidth: 'inherit' }} onClick={modalOpenHandler}>
                        <div className="flex justify-center  backdrop-blur-sm animate__animated animate__bounceInDown">
                            {children}
                        </div>
                    </div>
                )
            }
        </>

    )
}

export default Modal;