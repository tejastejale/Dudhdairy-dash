import React, { useState } from "react";

function Table() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [isDropdownVisible1, setDropdownVisible1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState("Main Category");

  const options1 = ["Cloth set", "Sales details", "Marketing"];

  const toggleDropdown1 = () => {
    setDropdownVisible1(!isDropdownVisible1);
  };

  const handleOptionClick1 = (option) => {
    setSelectedOption1(option);
    setDropdownVisible1(false);
  };

  const [isDropdownVisible2, setDropdownVisible2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState("Category");

  const options2 = ["Option 1", "Option 2", "Option 3"];

  const toggleDropdown2 = () => {
    setDropdownVisible2(!isDropdownVisible2);
  };

  const handleOptionClick2 = (option) => {
    setSelectedOption2(option);
    setDropdownVisible2(false);
  };

  const [isDropdownVisible3, setDropdownVisible3] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState("Sub-Category");

  const options3 = ["Sub-Option 1", "Sub-Option 2", "Sub-Option 3"];

  const toggleDropdown3 = () => {
    setDropdownVisible3(!isDropdownVisible3);
  };

  const handleOptionClick3 = (option) => {
    setSelectedOption3(option);
    setDropdownVisible3(false);
  };
  const [isDropdownVisible4, setDropdownVisible4] = useState(false);
  const [selectedOption4, setSelectedOption4] = useState("Sub-Category");

  const options4 = ["Active", "Deactive"];

  const toggleDropdown4 = () => {
    setDropdownVisible4(!isDropdownVisible3);
  };

  const handleOptionClick4 = (option) => {
    setSelectedOption4(option);
    setDropdownVisible4(false);
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-row justify-end w-full pb-2">
        <a href="/add-product">
          <button className="bg-blue-500 px-6 py-2 rounded-lg text-white font-semibold shadow-lg">
            Add Product
          </button>
        </a>
      </div>
      <div className="relative flex flex-col overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm sticky text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs w-full justify-evenly sticky top-0 table-fixed z-10 uppercase bg-blue-500 text-white dark:bg-gray-700 dark:text-gray-400">
            <tr className="sticky z-10 top-0 table-fixed text-center">
              <th scope="col" className="px-6 py-3">
                Product Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Main Category
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Sub-Category
              </th>
              <th scope="col" className="px-6 py-3">
                Stock
              </th>
              <th scope="col" className="px-6 py-3">
                Active Status
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-white border-b text-center text-md font-semibold dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-0 py-4 font-medium flex items-center justify-center text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="bg-blue-500 h-20 w-20 rounded-lg"
                  alt="Product"
                />
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">asjknfm</td>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">
                <p className="bg-green-400 py-2 px-3 rounded-full text-white">
                  90
                </p>
              </td>
              <td className="px-6 py-4">
                <p className="bg-green-400 py-2 px-3 rounded-full text-white">
                  Active
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
