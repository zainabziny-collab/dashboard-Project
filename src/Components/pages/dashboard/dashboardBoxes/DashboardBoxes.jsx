///Context////////////////////////////////////////////////////////////////////////////
import { ShowContext } from "../../../../Context/Context";
import { useContext } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { color } from "chart.js/helpers";
ChartJS.register(CategoryScale, LinearScale, BarElement);

function DashboardBoxes() {
  ///Context////////////////////////////////////////////////////////////////////////////
  const { productQuantity, outOfStock, active, products,dark} =
    useContext(ShowContext);

  const data = {
    labels: [
      "Product Quantity",
      "Total Products",
      "Active Product",
      "Out of Stock",
    ],
    datasets: [
      {
        label: "products",
        data: [
          productQuantity,
          products.length,
          active.length,
          outOfStock.length,
        ],
        backgroundColor: ["#3B82F6", "#F59E0B", "#089f00", "#e3c100"],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          color: dark ? "#4e4e4e" : "#b7b7b7",
        },
      },
      y: {
        grid: {
          color: dark ? "#4e4e4e" : "#b7b7b7",
        },
      },
    },
  };

  return (
    <>
      <h2 className="text-2xl font-bold dark:text-white ">Products Analytics</h2>
      <Bar
        data={data}
        options={options}
        className={`effect dark-dashboardBox-effect py-12 px-18 rounded-xl`}
      />
    </>
  );
}

export default DashboardBoxes;
