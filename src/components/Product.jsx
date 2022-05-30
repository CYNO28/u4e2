import { Box, Heading, Stack, Tag, TagLabel ,Image ,Text } from "@chakra-ui/react";
import React from "react";

const Product = ({item}) => {
// console.log(data)

  return (
< >
    <Stack data-cy="product" borderRadius="lg" padding="5" boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" >
      <Image htmlWidth='346px' htmlHeight='240' borderRadius="lg"  data-cy="product-image" src={item.imageSrc} />
      <Text data-cy="product-category">{item.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{item.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{item.title}</Heading>
      <Box data-cy="product-price">{item.price}</Box>
    </Stack>
</>

)


};

export default Product;
