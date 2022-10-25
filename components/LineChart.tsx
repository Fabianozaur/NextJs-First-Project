import { Chart } from "@antv/g2";
import { useEffect, useRef, useState } from "react"
import { useDailyCovidCases } from "../hooks/useDailyCovidCases";



export const LineChartComponent = () => {
  const {data}=useDailyCovidCases()
  const containerEl=useRef<HTMLDivElement>(null)
  const [chart,setChart]=useState<any>(null)
  useEffect(()=> {
    if(!containerEl.current){
      return
    }
    const chart = new Chart({
      container: containerEl.current,
      autoFit: true,
      height: 400,
    });
    setChart(chart)
    return ()=> {
      chart.destroy();
    }
  }, [ containerEl])

  useEffect( () => {
    if(!data || !chart){
      return
    }
    const entries=data.data.slice(0,50)
    const chartData=entries.map((e: any)=>({
      date:e.date,
      cases:e.daily
    }))
    chart.data(chartData)

    chart.line().position('date*cases');
    chart.point().position('date*cases');
    chart.theme({ "styleSheet": { "brandColor": "#369d8f", "paletteQualitative10": ["#014c63", "#168575", "#0bc286", "#96dcb0", "#F2EAEA", "#FFA884", "#FF6836", "#D13808", "#7A270E"], "paletteQualitative20": ["#014c63", "#10686c", "#168575", "#16a37e", "#0bc286", "#65cf9b", "#96dcb0", "#c1e8c5", "#F2EAEA", "#FFC5AC", "#FFA884", "#FF895D", "#FF6836", "#F3470D", "#D13808", "#A4300C", "#7A270E"] } });

    chart.render()
  }, [data,chart])
  return <div ref={containerEl}></div>
}