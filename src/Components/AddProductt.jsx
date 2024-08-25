import React, { useState } from "react";

function AddProductt() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [images, setImages] = useState([]);
  const [glbfile, setGlbfile] = useState([]);
  const [subscribe, setSubscribe] = useState("Yes");
  const [referrable, setReferrable] = useState("Yes");
  const [sizes, setSizes] = useState([{ size: "", price: "" }]);

  const handleAddSize = () => {
    setSizes([...sizes, { size: "", price: "" }]);
  };

  const handleSizeChange = (index, field, value) => {
    const newSizes = [...sizes];
    newSizes[index][field] = value;
    setSizes(newSizes);
  };

  const handleDeleteSize = (index) => {
    if (index > 0) {
      const newSizes = sizes.filter((_, i) => i !== index);
      setSizes(newSizes);
    }
  };

  const handleAddProduct = () => {
    const productData = {
      productName,
      productDescription,
      images,
      glbfile,
      subscribe,
      referrable,
      sizes,
    };
    console.log("Product Data:", productData);
    setGlbfile([]);
    setProductName("");
    setProductDescription("");
    setImages([]);
    setSubscribe("Yes");
    setReferrable("Yes");
    setSizes([{ size: "", price: "" }]);
  };

  return (
    <div className="w-full h-full">
      <div className="bg-blue-200 shadow-md w-full h-full my-4 p-4 rounded-md">
        <div className="flex flex-col gap-5">
          <input
            type="text"
            className="w-full p-2 h-fit rounded"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <textarea
            type="text"
            className="w-full p-2 h-fit rounded"
            placeholder="Product Description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
          <div className="w-full h-fit flex gap-5 p-2 border border-white rounded">
            <div className="flex flex-col w-full">
              <p className="px-1">Images</p>
              <input
                type="file"
                multiple
                className="w-full p-2 px-5 h-fit rounded  "
                onChange={(e) => setImages([...e.target.files])}
              />
            </div>
            <div className="flex flex-col w-full">
              <p className="px-1">Glb File</p>
              <input
                type="file"
                className="w-full p-2 px-5 h-fit rounded  "
                onChange={(e) => setGlbfile([...e.target.files])}
              />
            </div>
          </div>
          <div className="w-full h-fit flex gap-5">
            <div className="w-full h-full">
              <p>Subscribe</p>
              <select
                className="w-full rounded"
                value={subscribe}
                onChange={(e) => setSubscribe(e.target.value)}
              >
                <option>Yes</option>
                <option>No</option>
                <option>Unknown</option>
              </select>
            </div>
            <div className="w-full h-full">
              <p>Referrable</p>
              <select
                className="w-full rounded"
                value={referrable}
                onChange={(e) => setReferrable(e.target.value)}
              >
                <option>Yes</option>
                <option>No</option>
                <option>Unknown</option>
              </select>
            </div>
          </div>
          <div className=" w-full h-fit border border-white rounded">
            {sizes.map((sizeObj, index) => (
              <div
                key={index}
                className="w-full h-full p-2 rounded  flex gap-5"
              >
                <input
                  type="text"
                  className="w-full p-2 h-fit rounded"
                  placeholder="Size"
                  value={sizeObj.size}
                  onChange={(e) =>
                    handleSizeChange(index, "size", e.target.value)
                  }
                />
                <input
                  type="text"
                  className="w-full p-2 h-fit rounded"
                  placeholder="Price"
                  value={sizeObj.price}
                  onChange={(e) =>
                    handleSizeChange(index, "price", e.target.value)
                  }
                />
                <button
                  className="bg-red-500 px-2 text-white rounded"
                  onClick={() => handleDeleteSize(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-5 w-full h-full">
            <button
              className="bg-transparent px-2 text-blue-500 rounded py-2 w-fit"
              onClick={handleAddSize}
            >
              + Add Size
            </button>
          </div>
        </div>
      </div>

      <div className="w-full justify-end flex h-fit">
        <button
          className="bg-blue-500 px-2 text-white rounded py-2 w-fit self-end"
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>
    </div>
  );
}

export default AddProductt;
