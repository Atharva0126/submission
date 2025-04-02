import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const AttendanceChart: React.FC<{ students: any[] }> = ({ students }) => {
  const data = {
    labels: students.map(student => student.name),
    datasets: [
      {
        label: 'Attendance',
        data: students.map(student => student.attendance),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={data} />;
};

export default AttendanceChart;