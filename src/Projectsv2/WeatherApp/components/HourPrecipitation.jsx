/**
 * ChartJS Bar components for displaying precipitation data.
 */
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function HourPrecipitation() {
  return (
    <div className="flex flex-col bg-stone-200/20 outline">
      <span className="w-full bg-stone-200/20">Next hour precipitation</span>
      <span>Expected to rain until 7:15pm</span>
      <div className="h-28 w-full">
        <Bar
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                ticks: {
                  color: "rgba(255, 255, 255, 0.60)",
                  callback: function (value, index, values) {
                    // Display only every 10th label
                    return index % 10 === 0 ? value + "m" : "";
                  },
                },
              },
              y: {
                ticks: {
                  color: "rgba(255, 255, 255, 0.60)",
                },
              },
            },
          }}
          data={{
            labels: Array.from({ length: 61 }, (_, i) => i + "m"),
            datasets: [
              {
                label: "rainfall in milimeters",
                data: [
                  8, 10, 12, 14, 8, 4, 2, 2, 3, 5, 8, 10, 12, 14, 8, 4, 2, 2, 3,
                  5, 8, 10, 12, 14, 8, 4, 2, 2, 3, 5, 8, 10, 12, 14, 8, 4, 2, 2,
                  3, 5, 8, 10, 12, 14, 8, 4, 2, 2, 3, 5, 8, 10, 12, 14, 8, 4, 2,
                  2, 3, 5,
                ],
                backgroundColor: "rgba(0, 171, 255, 0.75)",
                borderRadius: 100,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
