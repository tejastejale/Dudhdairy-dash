import React, { useState } from 'react'
import Card from '../Components/Card'
import { IoPeopleSharp } from 'react-icons/io5'
import { FaTruckRampBox } from 'react-icons/fa6'
import axios from 'axios'
const customerData = [
    {
        name: 'Ritesh',
        phone: '1234567890',
        email: 'asdn@kmnsdf.com',
        role: 'Janitor',
        orders: 90,
        status: 'Active'
    },
    // Add more customer objects here...
    {
        name: 'John Doe',
        phone: '0987654321',
        email: 'john@example.com',
        role: 'Manager',
        orders: 45,
        status: 'Inactive'
    },
    {
        name: 'Jane Doe',
        phone: '1231231234',
        email: 'jane@example.com',
        role: 'Clerk',
        orders: 30,
        status: 'Active'
    },
    {
        name: 'Alex Smith',
        phone: '9879879870',
        email: 'alex@example.com',
        role: 'Cashier',
        orders: 75,
        status: 'Inactive'
    },
    {
        name: 'Maria Garcia',
        phone: '4564564561',
        email: 'maria@example.com',
        role: 'Supervisor',
        orders: 60,
        status: 'Active'
    },
    {
        name: 'Carlos Rodriguez',
        phone: '7897897892',
        email: 'carlos@example.com',
        role: 'Assistant',
        orders: 20,
        status: 'Active'
    }
    // Add as many customers as needed
]

const Vendor = () => {
    const [boy, setBoy] = React.useState([])
    const [show, setShow] = React.useState(false)
    const [data, setData] = React.useState({
        name: '',
        mobile_number: '',
        password: ''
    })
    async function getBoy() {
        const token = await localStorage.getItem('token')
        await axios
            .get('https://api-dudhdairy.vercel.app/vendors/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((res) => {
                setBoy(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    async function addBoy() {
        const token = await localStorage.getItem('token')
        await axios
            .post('https://api-dudhdairy.vercel.app/create-vendor/', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((res) => {
                setShow(false)
                getBoy()
            })
            .catch((err) => {
                console.error(err)
            })
    }
    const [currentPage, setCurrentPage] = useState(1)
    const [currentItem, setCurrentItem] = useState(null)
    const rowsPerPage = 5

    const indexOfLastRow = currentPage * rowsPerPage
    const indexOfFirstRow = indexOfLastRow - rowsPerPage
    const currentRows = boy.slice(indexOfFirstRow, indexOfLastRow)

    const totalPages = Math.ceil(boy.length / rowsPerPage)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    React.useEffect(() => {
        getBoy()
    }, [])

    return (
        <div className="w-full h-full p-4 flex font-Poppins flex-col gap-5">
            {show ? (
                <div class="fixed font-Poppins inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto ">
                    <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                        <div class="flex items-center pb-3 border-b border-gray-300">
                            <h3 class="text-gray-800 text-xl font-bold flex-1">
                                Delivery Boy Details
                            </h3>
                            <svg
                                onClick={() => {
                                    setShow(false)
                                    setCurrentItem(null)
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                                viewBox="0 0 320.591 320.591"
                            >
                                <path
                                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                    data-original="#000000"
                                ></path>
                                <path
                                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                    data-original="#000000"
                                ></path>
                            </svg>
                        </div>

                        <div class="my-6">
                            <div>
                                <div className=" space-y-5 mt-5">
                                    <input
                                        placeholder="Name"
                                        value={
                                            currentItem === null
                                                ? null
                                                : boy[currentItem]?.name
                                        }
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                name: e.target.value
                                            })
                                        }}
                                        className=" w-[100%] border-2 h-[45px] 
                                          px-2"
                                    />
                                    <input
                                        placeholder="Mobile Number"
                                        value={
                                            currentItem === null
                                                ? null
                                                : boy[currentItem]
                                                      ?.mobile_number
                                        }
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                mobile_number: e.target.value
                                            })
                                        }}
                                        className=" w-[100%] border-2 h-[45px] px-2"
                                    />
                                    {currentItem === null ? (
                                        <input
                                            placeholder="Password"
                                            onChange={(e) => {
                                                setData({
                                                    ...data,
                                                    password: e.target.value
                                                })
                                            }}
                                            className=" w-[100%] border-2 h-[45px] px-2"
                                        />
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        <div class="border-t border-gray-300 pt-6 flex justify-end gap-4">
                            <button
                                onClick={() => {
                                    setShow(false)
                                    setCurrentItem(null)
                                }}
                                type="button"
                                class="px-4 py-2 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => {
                                    addBoy()
                                }}
                                type="button"
                                class="px-4 py-2 rounded-lg text-white font-semibold text-sm border-none outline-none tracking-wide bg-blue-500 "
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
            <div className="flex flex-row justify-between w-full pb-2">
                <h1 className="text-3xl font-bold">Delivery Boy</h1>
                <button
                    onClick={() => {
                        setShow(!show)
                    }}
                    className="bg-blue-500 px-6 py-2 rounded-lg text-white font-semibold shadow-lg"
                >
                    Add Delivery Boy
                </button>
            </div>
            <div>
                <div className="relative flex flex-col overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm sticky text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs w-full justify-evenly sticky top-0 table-fixed z-10 uppercase bg-blue-500 text-white dark:bg-gray-700 dark:text-gray-400">
                            <tr className="sticky z-10 top-0 table-fixed text-center">
                                <th scope="col" className="px-6 py-3">
                                    name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Phone
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    View
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {currentRows.map((customer, index) => (
                                <tr
                                    key={index}
                                    className="bg-white border-b text-center text-md font-semibold dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                    <td className="px-6 py-4">
                                        {customer.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {customer.mobile_number}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => {
                                                setShow(!show)
                                                setCurrentItem(index)
                                            }}
                                            className="bg-blue-500 py-2 px-3 rounded-md text-white"
                                        >
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
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-white text-blue-500 border border-blue-500'
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
    )
}

export default Vendor
