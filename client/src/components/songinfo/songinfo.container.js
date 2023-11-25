import SonginfoUI from "./songinfo.presenter";
import axios from "axios";
import { useState, useEffect } from "react";


export default function SonginfoPage() {
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const title = localStorage.getItem('songtitle')
            const artist = localStorage.getItem('songartist')

            const response = await axios.get(`http://api.cloudmml.com:8000/music/song_info/?title=${title}&artist=${artist}`,{
            })

            if(response.status === 200){
                setData(response.data)
            }

        }catch(error){
            console.log(error)
        }
        
    }

    useEffect(() => {
        fetchData()
    },[])

    return(<SonginfoUI
        data = {data}
    />);
}
