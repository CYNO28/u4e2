import {
  Button,
  Input,
  Modal,
  ModalBody,
  Radio,
  RadioGroup,
  Select,
  styled,
} from "@chakra-ui/react";
import React, { useState } from "react";
// import style from "./style.module.css";

const AddProduct = ({ products, setProducts ,page,setpage}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [gender, setgender] = useState("");
  const [title, settitle] = useState("");
  const [category, setcategory] = useState("Shirt");
  const [price, setprice] = useState("");
  const onChangeHandler = (e) => {
    if (e.target.name === "title") {
      
      settitle(e.target.value);
    } else if (e.target.name === "category") {
      setcategory(e.target.value);
    }
    if (e.target.name === "price") {
      setprice(e.target.value);
    }
  };
  const submit = () => {
    
    const obj = {
      title: title,
      gender: gender,
      price: price,
      imageSrc: "https://picsum.photos/seed/picsum6/420/260",
    };
   if(gender!==''&&title!==""&&price!==""){
    fetch("http://localhost:8080/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {console.log(data)
      setIsOpen(!isOpen);
      setpage(page)
    })
  }
  }
  return (
    <div>
      <Button
        my={4}
        data-cy="add-product-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        Add New Product
      </Button>
      <Modal  isOpen={isOpen}   >
        <ModalBody pb={6}>
          <Input
            data-cy="add-product-title"
            name="title"
            onChange={onChangeHandler}
          />
          <Select
            data-cy="add-product-category"
            name="category"
            onChange={onChangeHandler}
          >
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">pant</option>
            <option data-cy="add-product-category-jeans">jeans</option>
          </Select>
          <RadioGroup
            data-cy="add-product-gender"
            onChange={(e) => setgender(e)}
            name="gender"
          >
            <Radio data-cy="add-product-gender-male" name="gender" value="male">
              male
            </Radio>
            <Radio
              data-cy="add-product-gender-female"
              name="gender"
              value="female"
            >
              female
            </Radio>
            <Radio
              data-cy="add-product-gender-unisex"
              name="gender"
              value="unisex"
            >
              unisex
            </Radio>
          </RadioGroup>
          <Input
            data-cy="add-product-price"
            onChange={onChangeHandler}
            name="price"
          />
          <Button data-cy="add-product-submit-button" onClick={() => submit()}>
            create
          </Button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddProduct;
