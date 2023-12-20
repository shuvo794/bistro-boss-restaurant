import { useEffect, useState } from "react";

const useMenu=()=>{
    const [menu,setMenu]=useState([]);
    const [loading,SetLoading]=useState(true)

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            setMenu(data)
            SetLoading(false)
        })
    },[])

    return [menu,loading]
}

export default useMenu;