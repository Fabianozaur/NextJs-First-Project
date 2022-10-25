import { useEffect, useState } from "react"

export const useDailyCovidCases= () => {
    const [data,setData]= useState<any>(null)
    useEffect( () => {
        fetch('https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation&areaName=england&structure={"name":"areaName","daily":"newCasesBySpecimenDate","date":"date"}')
        .then( (res) => res.json())
        .then( (data) => setData(data))
    }, [])
    return {data}
}