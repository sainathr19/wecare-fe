import { Pencil2Icon } from "@radix-ui/react-icons";
import React from "react";
const ReportTemplate = () => {
  const Dummy = {
    date: "Jan 9, 2023",
    dueDate: "Feb 9, 2023",
    customer: {
      zip: "20002",
      city: "Anytown",
      name: "Sainath Reddy",
      state: "AP",
      address: "Plot no 631, Road no 6",
      country: "India",
    },
    lineItems: [
      {
        item: "Blood Pressure",
        price: "Normal",
        quantity: "65.4",
      },
      {
        item: "Temperature",
        price: "Normal",
        quantity: "95",
      },
      {
        item: "Blood Pressure",
        price: "Normal",
        quantity: "65.4",
      },
      {
        item: "Temperature",
        price: "Normal",
        quantity: "95",
      },
    ],
    invoiceTotal: "$1,219.00",
    invoiceNumber: "0003578",
  };
  return (
    <div className="container border-t-4 border-slate-500 p-5 w-1/2 m-h-screen my-3 border-2">
      <div className="flex flex-row justify-between my-6">
        <div className="flex w-1/2">
          <Pencil2Icon className="h-full w-[10vh]" />
          <div className="ml-4">
            <p className="text-3xl mb-2">Patient Report</p>
            <p className="text-xl">#PT1001</p>
          </div>
        </div>
        <div className="text-right text-gray-700">
          <p className="text-lg font-bold text-gray-800">WeCare Hospitals</p>
          <p>Road no 6 , Nandyal Road</p>
          <p>Kurnool, 518001</p>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-between my-4">
        <div>
          <p className="uppercase text-xs text-gray-600">Doctor</p>
          <p>Dr.Sainath Reddy</p>
          <p className="uppercase text-xs text-gray-600 mt-5">
            Patient Details
          </p>
          <p>Nandakishore Talari</p>
          <p>19 Male</p>
        </div>
        <div className="text-right">
          <div className="mb-2">
            <p className="uppercase text-xs text-gray-600">Checkup Date</p>
            <p>19 May 2023</p>
          </div>
          <div className="mb-2">
            <p className="uppercase text-xs text-gray-600">Checkup Time</p>
            <p>9:54 am</p>
          </div>
        </div>
      </div>
      <hr />
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
              Biometric
            </th>
            <th className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
              Measurement
            </th>
            <th className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
              Average
            </th>
            <th className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 text-right">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {Dummy.lineItems.map((lineItem) => (
            <tr>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                {lineItem.item}
              </td>
              <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                {lineItem.quantity}
              </td>
              <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                {lineItem.quantity}
              </td>
              <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500 text-right">
                {lineItem.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-row justify-between mt-20">
        <div>
          <p className="uppercase text-xs text-gray-600">Additonal Note</p>
          <p>-</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600 mb-2">Overall Condition</p>
          <p className="text-4xl font-bold text-gray-800">Normal</p>
        </div>
      </div>
    </div>
  );
};

export default ReportTemplate;
