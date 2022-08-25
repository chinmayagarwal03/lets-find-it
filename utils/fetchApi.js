import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async(url) =>{
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '6d8157012emsh7fe1440637f4187p1c9f72jsn97cf4156eafc',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data;
}

