import { Button, ButtonGroup, Select } from "@chakra-ui/react";
import React,{useRef} from "react";

const Pagination = ({setpage ,setlimit,page,limit,length}) => {
  const handlePageChange = (e) =>{
   
    if(e.target.innerText==="Next"){
      if(page<length/limit){
  setpage(page+1)
}
      // page.current++
    }
    else{
      if(page>0){
      setpage(page-1)
    }
  }
  }
  const onChangeHandler = (e) =>{
    setlimit(e.target.value)
   
   
  }
  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" onClick={()=>setpage(1)}>First</Button>
      <Button data-cy="pagination-previous-button" onClick={handlePageChange}>Previous</Button>
      <Select data-cy="pagination-limit-select" onChange={onChangeHandler}>
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" onClick={handlePageChange}>Next</Button>
      <Button data-cy="pagination-last-button" onClick={()=>{setpage(Math.ceil(length/limit))}}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
