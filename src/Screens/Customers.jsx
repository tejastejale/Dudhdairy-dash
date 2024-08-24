import React, { useState } from "react";
import Card from "../Components/Card";
import { IoPeopleSharp } from "react-icons/io5";
import { FaTruckRampBox } from "react-icons/fa6";

const customerData = [
  {
    name: "Ritesh",
    phone: "1234567890",
    email: "asdn@kmnsdf.com",
    role: "Janitor",
    orders: 90,
    status: "Active",
  },
  // Add more customer objects here...
  {
    name: "John Doe",
    phone: "0987654321",
    email: "john@example.com",
    role: "Manager",
    orders: 45,
    status: "Inactive",
  },
  {
    name: "Jane Doe",
    phone: "1231231234",
    email: "jane@example.com",
    role: "Clerk",
    orders: 30,
    status: "Active",
  },
  {
    name: "Alex Smith",
    phone: "9879879870",
    email: "alex@example.com",
    role: "Cashier",
    orders: 75,
    status: "Inactive",
  },
  {
    name: "Maria Garcia",
    phone: "4564564561",
    email: "maria@example.com",
    role: "Supervisor",
    orders: 60,
    status: "Active",
  },
  {
    name: "Carlos Rodriguez",
    phone: "7897897892",
    email: "carlos@example.com",
    role: "Assistant",
    orders: 20,
    status: "Active",
  },
  // Add as many customers as needed
];

const Customers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = customerData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(customerData.length / rowsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full h-full p-4 flex flex-col gap-5">
      <div className="flex flex-row justify-evenly">
        <Card
          name={"Customers"}
          num={customerData.length}
          Icon={IoPeopleSharp}
        />
        <Card
          name={"Total Orders"}
          num={customerData.reduce((acc, customer) => acc + customer.orders, 0)}
          Icon={FaTruckRampBox}
        />
        <Card
          name={"Anonymous"}
          num={
            customerData.filter((customer) => customer.name === "Anonymous")
              .length
          }
          Icon={IoPeopleSharp}
        />
      </div>
      <div>
        <div className="relative flex flex-col overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm sticky text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs w-full justify-evenly sticky top-0 table-fixed z-10 uppercase bg-blue-500 text-white dark:bg-gray-700 dark:text-gray-400">
              <tr className="sticky z-10 top-0 table-fixed text-center">
                <th scope="col" className="px-6 py-3">
                  Customer Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Customer name
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Orders
                </th>
                <th scope="col" className="px-6 py-3">
                  Active Status
                </th>
              </tr>
            </thead>

            <tbody>
              {currentRows.map((customer, index) => (
                <tr
                  key={index}
                  className="bg-white border-b text-center text-md font-semibold dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-0 py-4 font-medium flex items-center justify-center text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="bg-blue-500 h-20 w-20 rounded-full"
                      alt="Person"
                    />
                  </th>
                  <td className="px-6 py-4">{customer.name}</td>
                  <td className="px-6 py-4">{customer.phone}</td>
                  <td className="px-6 py-4">{customer.email}</td>
                  <td className="px-6 py-4">{customer.role}</td>
                  <td className="px-6 py-4">{customer.orders}</td>
                  <td className="px-6 py-4">
                    <p
                      className={`py-2 px-3 rounded-full text-white ${
                        customer.status === "Active"
                          ? "bg-green-400"
                          : "bg-red-400"
                      }`}
                    >
                      {customer.status}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="mx-1 px-3 py-1 rounded bg-white text-blue-500 border border-blue-500 disabled:opacity-50"
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500 border border-blue-500"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="mx-1 px-3 py-1 rounded bg-white text-blue-500 border border-blue-500 disabled:opacity-50"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customers;
