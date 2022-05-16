import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title } from 'chart.js';
import * as SalesCategory from "./Charts-Data/sales-category-pie"
import * as SalesMonthly from "./Charts-Data/sales-category-monthly"

import "./home.css"

ChartJS.register(ArcElement, Tooltip, Legend,   CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const Home = () => {
  return (
    <div className='home-page-container'>
      <h2>Data is the Key!!!</h2>
      <div className='home-page-charts-container'>
        <div className='home-page-chart-container'>
          <Pie data={SalesCategory.data} options={SalesCategory.options}/>
        </div>
        <div className='home-page-chart-container'>
          <Bar data={SalesMonthly.data} options={SalesMonthly.options} />
        </div>
      </div>
    </div>
  )
}

export default Home