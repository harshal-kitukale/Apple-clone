import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  Link,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import CartItem from "./CartItem";

const db = [
  {
    title: "Starlight Aluminum Case with Braided Solo Loop",
    price: "From 449 or $18.70/mo. for 24 mo.*",
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
    price: "From 399 or $16.62/mo. for 24 mo.*",
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
    price: "From 699 or $29.12/mo. for 24 mo.*",
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
    price: "From 499 or $20.79/mo. for 24 mo.*",
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
    price: "From 699 or $29.12/mo. for 24 mo.*",
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
    price: "From 749 or $31.20/mo. for 24 mo.*",
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
    price: "From 1249 or $52.04/mo. for 24 mo.*",
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
    title: "Silver Stainless Steel Case with Single Tour Deployment Buckle.",
    price: "From 1,499.00 or $62.45/mo. for 24 mo.*",
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
    price: "From 1,499.00 or $62.45/mo. for 24 mo.*",
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

const CheckoutPage = () => {
  const [toggleForm, setToggleForm] = React.useState(false);
  const [addressDetails, setAddressDetails] = React.useState({
    fName: "",
    lName: "",
    street: "",
    zip: "",
    state: "",
    country: "",
  });
  const [contactDetails, setContactDetails] = React.useState({
    email: "",
    mobile: "",
  });

  const handleAddress = (e) => {
    const newAddess = {
      ...addressDetails,
      [e.target.name]: e.target.value
    };
    console.log(newAddess, "new")
    setAddressDetails(newAddess)
  }

  const handleContact = (e) => {
    const newContact = {
      ...contactDetails,
      [e.target.name]: e.target.value
    }
    console.log(newContact)
    setContactDetails(newContact)
  }

  console.log(addressDetails, contactDetails)

  return (
    <Box w={"80%"} m={"auto"}>
      <VStack alignItems={"flex-start"} border={"1px solid black"} mb={"80px"}>
        <Heading fontFamily={"helvetica"}>Review your bag.</Heading>
        <Text fontSize={"md"}>Free delivery and free returns.</Text>
      </VStack>
      <HStack
        alignItems={"flex-start"}
        w={{ base: "95%", md: "80%" }}
        m={"auto"}
      >
        <Image
          pt={1}
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/applecard-logo-201910?wid=164&hei=164&fmt=jpeg&qlt=90&.v=1572631318807"
          w={"20px"}
        />
        <Text textAlign={"left"} fontSize={"xs"}>
          Items not purchased with a one time payment may be eligible for
          $124.79/mo. at 0%* when you check out with Apple Card Monthly
          Installments. Learn more{" "}
        </Text>
      </HStack>
      {db.map((el) => (
        <CartItem key={el.price + el.title} {...el} />
      ))}

      <Link href="#address">
        <Button
          my={"25px"}
          colorScheme="blue"
          width={"50%"}
          onClick={() => setToggleForm(!toggleForm)}
        >
          Continue to Shipping Address
        </Button>
      </Link>

      <VStack
        id="address"
        display={toggleForm ? "block" : "none"}
        alignItems={"flex-start"}
        border={"1px solid black"}
        my={"80px"}
      >
        <Heading fontFamily={"helvetica"} mb={"60px"}>
          Where should we send your order?
        </Heading>
        <Heading fontFamily={"helvetica"} fontSize={"25px"}>
          Enter your name and address.
        </Heading>
        <FormControl isRequired width={"50%"}>
          <FormLabel>First name</FormLabel>
          <Input onChange={(e)=> handleAddress(e)} name="fname" placeholder="First name" />
          <FormLabel>Last name</FormLabel>
          <Input onChange={(e)=> handleAddress(e)} name="lname" placeholder="Last name" />
          <FormLabel>Street Address</FormLabel>
          <Input onChange={(e)=> handleAddress(e)} name="street" placeholder="Street Address" />
          <FormLabel>Apt, Suite, Building</FormLabel>
          <Input onChange={(e)=> handleAddress(e)} name="" placeholder="Apt, Suite, Building (Optional)" />
          <HStack>
            <VStack alignItems={"flex-start"}>
              <FormLabel>Zip Code</FormLabel>
              <Input onChange={(e)=> handleAddress(e)} name="zip" placeholder="Zip Code" />
            </VStack>
            <VStack alignItems={"flex-start"}>
              <FormLabel>City, State</FormLabel>
              <Input onChange={(e)=> handleAddress(e)} name="state" placeholder="City, State" />
            </VStack>
          </HStack>
          <FormLabel>Select Country</FormLabel>
          <Select name="country" placeholder="Select Country" my={"15px"}>
            <option value={"Alabama"}>Alabama</option>
            <option value={"Alaska"}>Alaska</option>
            <option value={"Arizona"}>Arizona</option>
            <option value={"California"}>California</option>
            <option value={"Colorado"}>Colorado</option>
            <option value={"Connecticut"}>Connecticut</option>
            <option value={"Florida"}>Florida</option>
            <option value={"Georgia"}>Georgia</option>
            <option value={"Illinois"}>Illinois</option>
            <option value={"Kentucky"}>Kentucky</option>
            <option value={"Minnesota"}>Minnesota</option>
            <option value={"New Jersey"}>New Jersey</option>
            <option value={"New Mexico"}>New Mexico</option>
            <option value={"New York"}>New York</option>
            <option value={"Ohio"}>Ohio</option>
            <option value={"South Carolina"}>South Carolina</option>
            <option value={"Tennessee"}>Tennessee</option>
            <option value={"Texas"}>Texas</option>
            <option value={"Virginia"}>Virginia</option>
          </Select>
        </FormControl>
        <Heading fontFamily={"helvetica"} fontSize={"25px"}>
          What’s your contact information?
        </Heading>
        <FormControl isRequired>
          <HStack>
            <Box w="50%">
              <FormLabel>Email Address</FormLabel>
              <Input onChange={(e)=> handleContact(e)} name="email" placeholder="Enter Email" />
            </Box>
            <Box w="40%">
              <Text fontSize={"14px"}>
                We’ll email you a receipt and send order updates to your mobile
                phone via SMS or iMessage.
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Box w="50%">
              <FormLabel>Phone Number</FormLabel>
              <Input onChange={(e)=> handleContact(e)} name="moblie" placeholder="Enter Number" />
            </Box>
            <Box w="40%">
              <Text fontSize={"14px"}>
                The phone number you enter can’t be changed after you place your
                order, so please make sure it’s correct.
              </Text>
            </Box>
          </HStack>
        </FormControl>
        <Link href="">
          <Button
            my={"55px"}
            colorScheme="blue"
            width={"50%"}
            onClick={() => setToggleForm(!toggleForm)}
          >
            Continue to Payment
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default CheckoutPage;
