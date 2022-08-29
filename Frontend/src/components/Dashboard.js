import React, { useState,useEffect } from 'react'
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS, CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const Dashboard = () => {

    const [chartData,setChartData] = useState({labels:[] ,
        datasets: [
          {
            label: "Price in USD",
            data:[] ,
            backgroundColor: [
              "#ffbb11",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ]
          }
        ]})

    useEffect(() => {
        const fetchPrices = async () => {
          const res = await fetch("/list")
          const data = await res.json()

          let dataInfo = []
          dataInfo = data.map((crypto) => crypto.priceUsd)
          let labelinfo = []
          labelinfo = data.map((crypto) => crypto.name)

          setChartData({
            labels:labelinfo ,
            datasets: [
              {
                label: "Price in USD",
                data:dataInfo ,
                backgroundColor: [
                  "rgba(251, 0, 145, 1)",
                  "rgba(251, 0, 92, 1)",
                  "rgba(148, 0, 251, 1)",
                  "rgba(106, 0, 251, 1)",
                  "rgba(34, 189, 0, 1)",
                  "rgba(23, 0, 251, 1)"
                ]
              }
            ]
          });
        };
        fetchPrices()
      }, []);

  return (
    <div><Bar
    data={chartData}
    options={{
      plugins: {
        title: {
          display: true,
          text: "Cryptocurrency prices"
        },
        legend: {
          display: true,
          position: "bottom"
       }
      }
    }}
  />

    </div>
  )
}

export default Dashboard;