import {useEffect, useRef} from "react";

export function useThrottle({callback}){

    let timerHandler = null;
    const inputRef = useRef(null);

    const onChangeThrottle = (e, timeout = 300) => {
        clearTimeout(timerHandler);
        const cachedValue = e.target.value;
        timerHandler = setTimeout(() => {
            callback(cachedValue);
        }, timeout);
    };
    const onBlurThrottle = (e, value) => {
        clearTimeout(timerHandler);
        if(inputRef && inputRef.current && value !== inputRef.current.value){
            callback(e.target.value);
        }
    };
    const updateValueThrottle = (value) => {
        if(inputRef && inputRef.current && value !== inputRef.current.value){
            inputRef.current.value = value;
        }
        return inputRef;
    };

    useEffect(() => {
        return () => {
            clearTimeout(timerHandler);
        }
    },[]);

    return {onChangeThrottle, onBlurThrottle, updateValueThrottle};
}