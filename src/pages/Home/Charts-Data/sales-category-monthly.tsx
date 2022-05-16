const labels = ['Men', 'Women', 'Kids', 'Warebles', 'Foot-Ware', 'Ornaments'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Last Month',
      data: [100,200,35,45,55,60],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'This Month',
      data: [65, 59, 80, 81, 56],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: true,
      text: 'Sales Compared to Previous Month',
    },
  },
};
