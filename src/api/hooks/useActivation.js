import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useActivation() {
    const [isActivated, setIsActivated] = useState(null);
    const myInformation = useSelector(state => state.MyInformation);
    
    useEffect(() => {
        const myInformationData = myInformation.data || {};
        setIsActivated(myInformationData.activated);
    }, [myInformation]);

    return [isActivated];
}
export default useActivation;