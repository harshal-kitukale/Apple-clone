import {
    Box,
    Button,
    HStack,
    Heading,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Select,
    Text,
    VStack,
    background,
  } from "@chakra-ui/react";
  import { ChevronDownIcon } from "@chakra-ui/icons";
  import React from "react";
  
  const db = [
    {
      title: "Starlight Aluminum Case with Braided Solo Loop",
      price: "From $449 or $18.70/mo. per monthfor 24 mo.*",
      description:
        "The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy. The Braided Solo Loop is made from recycled yarn and silicone threads for an ultracomfortable, stretchable design with no clasps or buckles.",
      images: [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQXN3ref_VW_34FR+watch-41-alum-starlight-nc-8s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1676420295567%2C1661978672727",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQXN3ref_VW_PF+watch-41-alum-starlight-nc-8s_VW_PF_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1676420295399%2C1661979031453",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQXN3ref?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1676354386050",
      ],
      color: "olive, bright orange, purple fog, midnight, black unity, red",
    },
    {
      title: "Midnight Aluminum Case with Sport Loop",
      price: "From $399 or $16.62/mo. per monthfor 24 mo.*",
      description:
        "The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy.The Sport Loop is made from a soft and breathable double-layer nylon weave, with a hook-and-loop fastener for quick and easy adjustment.",
      images: [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQTH3_VW_34FR+watch-41-alum-midnight-nc-8s_VW_34FR_WF_CO+watch-face-41-bhm-sport-loop_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1672773910529%2C1661971867144%2C1674108542685",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQTH3_VW_PF+watch-41-alum-midnight-nc-8s_VW_PF_WF_CO+watch-face-41-bhm-sport-loop_VW_PF_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1672775866374%2C1661972065343%2C1674108542700",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQTH3?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1673374526099",
      ],
      color: "black unity, midnight, starnight, storm blue, red",
    },
    {
      title: "Silver Stainless Steel Case with Sport Band",
      price: "From $699 or $29.12/mo. per monthfor 24 mo.*",
      description:
        "The stainless steel case is durable and polished to a shiny, mirror-like finish. The Sport Band is made from a durable yet surprisingly soft high-performance fluoroelastomer with an innovative pin-and-tuck closure.",
      images: [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MP6Y3ref_VW_34FR+watch-41-stainless-silver-cell-8s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660779463765%2C1661890809922",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MP6Y3ref_VW_PF+watch-41-stainless-silver-cell-8s_VW_PF_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660779463098%2C1660710603398",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MP6Y3ref?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660695345997",
      ],
      color: "olive, midnight, starnight, bright, red",
    },
    {
      title: "Silver Aluminum Case with Solo Loop",
      price: "From $499 or $20.79/mo. per monthfor 24 mo.*",
      description:
        "The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy. The Solo Loop is made from soft, stretchable silicone and designed for ultracomfort with no clasps or buckles.",
      images: [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKVJ3ref_VW_34FR+watch-41-alum-silver-cell-8s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660779461770%2C1661976510477",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKVJ3ref_VW_PF+watch-41-alum-silver-cell-8s_VW_PF_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660779462232%2C1661976577535",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKVJ3ref?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660711205915",
      ],
      color: "olive, midnight, starlight, storm blue, purple fog",
    },
    {
      title: "Gold Stainless Steel Case with Sport Band",
      price: "From $699 or $29.12/mo. per monthfor 24 mo.*",
      description:
        "The stainless steel case is durable and polished to a shiny, mirror-like finish. The Sport Band is made from a durable yet surprisingly soft high-performance fluoroelastomer with an innovative pin-and-tuck closure.",
      images: [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPLQ3ref_VW_34FR+watch-41-stainless-gold-cell-8s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660799953944%2C1661890049340",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPLQ3ref_VW_PF+watch-41-stainless-gold-cell-8s_VW_PF_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660779703850%2C1661890115584",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPLQ3ref?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660695336711",
      ],
      color: "olive, midnight, starlight, bright orange, purple fog",
    },
    {
      title: "Graphite Stainless Steel Case with Leather Link",
      price: "From $749 or $31.20/mo. per monthfor 24 mo.*",
      description:
        "The stainless steel case is durable and polished to a shiny, mirror-like finish. The Leather Link is made from handcrafted Roux Granada leather with no clasps or buckles and has embedded magnets for a secure and adjustable fit.",
      images: [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ML7R3_VW_34FR+watch-41-stainless-graphite-cell-8s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1629920396000%2C1661890187595",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ML7R3_VW_PF+watch-41-stainless-graphite-cell-8s_VW_PF_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1629920407000%2C1661890262630",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ML7R3?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1630015194000",
      ],
      color: "ink, midnight, umber",
    },
    {
      title: "Silver Stainless Steel Case with Single Tour",
      price: "From $1249 or $52.04/mo. per monthfor 24 mo.*",
      description:
        "The stainless steel case is durable and polished to a shiny, mirror-like finish. The Single Tour is made from handcrafted leather, with a stainless steel buckle that recalls the straps of a saddle, a nod to the equestrian heritage of Hermès.",
      images: [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKG53_VW_34FR+watch-45-stainless-silver-cell-hermes8s_VW_34FR_WF_CO+watch-face-45-hermes8s-luckyhorse-capucine_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1631657423000%2C1663623165249%2C1660715047388",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKG53_VW_PF+watch-45-stainless-silver-cell-hermes8s_VW_PF_WF_CO+watch-face-45-hermes8s-luckyhorse-capucine_VW_PF_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1631657429000%2C1663623165465%2C1660714277337",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKG53?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1645745908563",
      ],
      color: "gold, blanc, orange, navy, noir",
    },
    {
      title: "Silver Stainless Steel Case with Single Tour Deployment Buckle",
      price: "From $1,499.00 or $62.45/mo.per month for 24 mo.*",
      description:
        "The stainless steel case is durable and polished to a shiny, mirror-like finish. The Single Tour Deployment Buckle is made from handcrafted leather, and has a hidden buckle for a sleek twist on an Hermès classic.",
      images: [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKGG3_VW_34FR+watch-45-stainless-silver-cell-hermes8s_VW_34FR_WF_CO+watch-face-45-hermes8s-complex-orange_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1631657527000%2C1663623165249%2C1663367411449",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKGG3_VW_PF+watch-45-stainless-silver-cell-hermes8s_VW_PF_WF_CO+watch-face-45-hermes8s-complex-orange_VW_PF_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1631657528000%2C1663623165465%2C1663367460698",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKGG3?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1631656431000",
      ],
      color: "ink, midnight, umber",
    },
    {
      title: "Silver Stainless Steel Case with Single Tour Deployment Buckle",
      price: "From $1,499.00 or $62.45/mo.per month for 24 mo.*",
      description:
        "The stainless steel case is durable and polished to a shiny, mirror-like finish. The Single Tour Deployment Buckle is made from handcrafted leather, and has a hidden buckle for a sleek twist on an Hermès classic.",
      images: [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKGG3_VW_34FR+watch-45-stainless-silver-cell-hermes8s_VW_34FR_WF_CO+watch-face-45-hermes8s-complex-orange_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1631657527000%2C1663623165249%2C1663367411449",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKGG3_VW_PF+watch-45-stainless-silver-cell-hermes8s_VW_PF_WF_CO+watch-face-45-hermes8s-complex-orange_VW_PF_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1631657528000%2C1663623165465%2C1663367460698",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKGG3?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1631656431000",
      ],
      color: "noir, fauve, Ébène",
    },
  ];
  
  const CartItem = () => {
    const [toggleQuant, setToggleQuant] = React.useState(false);
    const [quantity, setQuantity] = React.useState(1);
  
    console.log(toggleQuant);
  
    return (
      <HStack>
        {db.images.map((el) => (
          <Image
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/49-cell-titanium-alpine-green-ultra?wid=800&hei=800&fmt=jpeg&qlt=90&fit=constrain&.v=1660787518131"
            w={"200px"}
          />
        ))}
        <VStack alignItems={"flex-start"} w={"300px"}>
          <Heading size={"md"} textAlign={"left"}>
            Apple Watch Ultra GPS + Cellular, 49mm Titanium Case with Green Alpine
            Loop - Medium
          </Heading>
          <Text textAlign={"left"} fontSize={"xs"}>
            Pay 0% APR for 24 months.{" "}
          </Text>
        </VStack>
        {/* <Box w={"50px"} >
          <Button position={"relative"} onClick={()=>(setToggleQuant(!toggleQuant))} rightIcon={<ChevronDownIcon/>}>1</Button>
          <Box display={toggleQuant? "visible" : "hidden"}>
            <Box display={toggleQuant? "visible" : "none"} _hover={{background : "blue.300", color: "white"}}>2</Box>
            <Box display={toggleQuant? "visible" : "none"} _hover={{background : "blue.300", color: "white"}}>3</Box>
            <Box display={toggleQuant? "visible" : "none"} _hover={{background : "blue.300", color: "white"}}>4</Box>
            <Box display={toggleQuant? "visible" : "none"} _hover={{background : "blue.300", color: "white"}}>5</Box>
          </Box>
        </Box> */}
        <select placeholder="1" padding="15px">
          <option padding="15px" value={1}>
            1
          </option>
          <option padding="15px" value={2}>
            2
          </option>
          <option padding="15px" value={3}>
            3
          </option>
          <option padding="15px" value={4}>
            4
          </option>
          <option padding="15px" value={5}>
            5
          </option>
        </select>
      </HStack>
    );
  };
  
  export default CartItem;
  