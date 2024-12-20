
import { useState, useEffect } from 'react';
import { ToastContainer, toast, Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toastify from './Toastify';

const Toast = ({ attributes }) => {
    const [toastId, setToastId] = useState(null);
    const [toastIndex, setToastIndex] = useState(0);
    const { reviews: allReviews, settings } = attributes;


    useEffect(() => {
        // console.log(allReviews)
        if (allReviews?.length > 0) {
            if (toastId) {
                toast.dismiss(toastId);
            }

            const reviews = allReviews[toastIndex >= allReviews?.length ? 0 : toastIndex];
            const data = reviews;

            const id = toast.success(<Toastify review={data} attributes={attributes} />, {
                position: settings?.toastPosition,
                autoClose: settings?.autoClose * 1000,
                icon: false,
                className: 'notification',
                hideProgressBar: false,
                transition: Slide,
                onClose: () => {
                    setToastIndex((prev) => allReviews.length - 1 <= toastIndex ? 0 : prev + 1);
                }
            });
            setToastId(id);
        }

    }, [toastIndex, settings]);

    return <ToastContainer />
}
export default Toast;