import {useEffect,useState} from "react";


const useOnlineStatus = ()=>{

    // doesnt need any input
    const [onlineStatus, setOnlineStatus] = useState(true) // default value online

    useEffect(()=>{
        window.addEventListener('online',()=>{
            console.log("now you are online buddy");
            setOnlineStatus(true);
        });

        window.addEventListener('offline',()=>{
            console.log("now you are offline buddy");
            setOnlineStatus(false);
        });
    },[])

    // sends status boolean
    return onlineStatus;
}
export default useOnlineStatus;
