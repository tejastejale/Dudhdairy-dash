import React, { useState } from "react";
import Card from "../Components/Card";
import { IoPeopleSharp } from "react-icons/io5";
import { FaTruckRampBox } from "react-icons/fa6";
import axios from "axios";

const Orders = () => {

    const [order, setOrder] = React.useState([])
    const [show,setShow] = React.useState(false)
    async function getOrder() {
        const token = await localStorage.getItem('token')
        await axios.get('https://api-dudhdairy.vercel.app/order/all/', {
            headers: {
                'Authorization': `Bearer ${token}`
                }
        })
            .then((res) => {
                setOrder(res.data)
            })
            .catch((err) => {
            console.error(err)
        })
    }
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItem, setCurrentItem] = useState(0);

  const rowsPerPage = 7;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = order.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(order.length / rowsPerPage);

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
    React.useEffect(() => {
      getOrder()
  },[])
  return (
      <div className="w-full h-full p-4 flex flex-col gap-5">
          {
              show ?
              <div
              class="fixed font-Poppins inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto ">
              <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                  <div class="flex items-center pb-3 border-b border-gray-300">
                      <h3 class="text-gray-800 text-xl font-bold flex-1">Order Details</h3>
                              <svg
                                  onClick={() => {
                                      setShow(false);
                      }}
                                  xmlns="http://www.w3.org/2000/svg" class="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                          viewBox="0 0 320.591 320.591">
                          <path
                              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                              data-original="#000000"></path>
                          <path
                              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                              data-original="#000000"></path>
                      </svg>
                  </div>
  
                  <div class="my-6">
                              <div>
                                  <h1 className=" font-bold">
                                      Customer Details:
                                  </h1>

                              </div>
                              <div>
                                  <h1 className=" font-bold">
                                      Address Details:
                                  </h1>
                                  <p
                                      className=" text-sm font-medium">
                                      {order[currentItem]?.address?.address_line_1}, {order[currentItem]?.address?.address_line_2}, {order[currentItem]?.address?.state}, {order[currentItem]?.address?.city} : {order[currentItem]?.address?.zip_code}
                                  </p>

                              </div>
                              <div>
                                  <h1 className=" font-bold">
                                      Order Details:
                                  </h1>

                                  {
                                      order[currentItem]?.items?.map((item, index) => (
                                          <div className="flex space-x-2 text-sm" key={index}>
                                              <h1 className=" font-bold">
                                                  { index + 1}. {item?.product?.name}
                                              </h1>
                                              <p>
                                                  |
                                              </p>
                                              <p className=" font-semibold">
                                              {item?.quantity} qty
                                              </p>
                                              <p>
                                                  |
                                              </p>
                                              <p className=" font-semibold">
                                              {item?.size?.size} 
                                              </p>
                                              <p>
                                                  |
                                              </p>
                                              <p className=" font-semibold">
                                              ₹ {item?.total} 
                                              </p>
                                              </div>
                                      ))
                                  }
                              </div>
                              
                  </div>
  
                  <div class="border-t border-gray-300 pt-6 flex justify-end gap-4">
                              <button
                                  onClick={() => {
                                      setShow(false)
                                  }}
                                  type="button"
                          class="px-4 py-2 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200">Close</button>

                  </div>
              </div>
                  </div>
                  :
                  null
          }
          <h1 className="text-3xl font-bold">Orders</h1>
      <div className="flex flex-row  justify-start space-x-3">
        <Card
          name={"Today's Orders"}
          num={order.length}
          Icon={IoPeopleSharp}
        />
        <Card
          name={"Total Orders"}
          num={order.length}
          Icon={FaTruckRampBox}
        />
      </div>
      <div>
        <div className="relative flex flex-col overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm sticky text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs w-full justify-evenly sticky top-0 table-fixed z-10 uppercase bg-blue-500 text-white dark:bg-gray-700 dark:text-gray-400">
              <tr className="sticky z-10 top-0 table-fixed text-center">
                <th scope="col" className="px-6 py-3">
                Transaction Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Payment Status
                </th>
                <th scope="col" className="px-6 py-3">
                   Orders Value
                </th>
                <th scope="col" className="px-6 py-3">
                  Order Details
                </th>
              </tr>
            </thead>

            <tbody>
              {currentRows.map((customer, index) => (
                <tr
                  key={index}
                  className="bg-white border-b text-center text-md font-semibold dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4">{customer?.transaction_id}</td>
                  <td className="px-6 py-4">₹{customer?.total_amount}</td>
                      <td className="px-6 py-4">
                      <button className={`${customer?.status === "pending" ? " bg-yellow-300" : "bg-green-500"} px-3 py-1 rounded-md text-white`}>
                              {customer?.status === "pending"? "Pending" : "Done"}
                              </button>
                  </td>
                  {/* <td className="px-6 py-4">{customer.role}</td> */}
                      <td className="px-6 py-4">
                          <button className={`${customer?.is_delivered ? " bg-green-500" : "bg-red-500"} px-3 py-1 rounded-md text-white`}>
                              {customer?.is_delivered ? "Delivered" : "Not Delivered"}
                              </button>
                  </td>
                  <td className="px-6 py-4">
                          <button
                              onClick={() => {
                                  setShow(!show)
                                  setCurrentItem(index)
                              }}
                              className="px-3 py-2 bg-blue-500 rounded-lg text-white">
                              View
                     </button>
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

export default Orders;
