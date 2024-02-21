import axios from "axios";
import React, { useState } from "react";

function Upload() {
  const [base64String, setBase64String] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64 = e.target.result.split(",")[1];
        setBase64String(base64);
      };

      reader.readAsDataURL(file);
    }
  };

  function submitHandler() {
    const newProduct = {
      title,
      categoryId: 6,
      code: "string",
      imageBase64: base64String,
      description: desc,
    };

    axios
      .post("http://192.168.50.127/Product/Create", newProduct)
      .then((res) => {
        if (res.status == 200) {
          setBase64String("");
          setTitle("");
          setDesc("");
        }
      });
  }

  return (
    <div className="w-full h-[90vh] bg-slate-800 py-[20vh] ">
      <input type="file" onChange={handleFileInputChange} />
      <input
        type="text"
        value={title}
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
        cols="30"
        rows="10"
      ></textarea>

      <button className=" bg-red-600" onClick={submitHandler}>
        submit
      </button>
    </div>
  );
}

export default Upload;
