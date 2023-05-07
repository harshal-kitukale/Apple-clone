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
  useToast,
} from "@chakra-ui/react";
import React from "react";
import CartItem from "./CartItem";
import Summary from "./Summary";
import Payment from "./Payment";



const CheckoutPage = () => {

  const toast = useToast();
  const [toggleForm, setToggleForm] = React.useState(false);
  const [addressDetails, setAddressDetails] = React.useState({
    fName: "",
    lName: "",
    street: "",
    apt: "",
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
      [e.target.name]: e.target.value,
    };

    setAddressDetails(newAddess);
  };

  const handleContact = (e) => {
    const newContact = {
      ...contactDetails,
      [e.target.name]: e.target.value,
    };
    console.log(newContact);
    setContactDetails(newContact);
  };

  const handleAddressSubmit = () => {
    if (
      addressDetails.fName === "" ||
      addressDetails.lName === "" ||
      addressDetails.street === "" ||
      addressDetails.zip === "" ||
      addressDetails.state === "" ||
      addressDetails.country === "" ||
      contactDetails.email === "" ||
      contactDetails.mobile === ""
    ) {
      toast({
        title: "Warning! Form Incomplete",
        description: "Please fill all the details",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });

      // navigate(Payment)
      return;
    }
  };

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
      <HStack gap="20px">
        <Box w={"70%"}>
          {db.map((el) => (
            <CartItem key={el.price + el.title} {...el} />
          ))}
        </Box>
        <Box w={"30%"} position={"sticky"} top={"10"} alignSelf={"flex-start"}>
          <Summary />
        </Box>
      </HStack>

      <Box textAlign={"left"}>
        <Link href="#address">
          <Button
            my={"25px"}
            mb={"80px"}
            colorScheme="blue"
            width={"50%"}
            onClick={() => setToggleForm(!toggleForm)}
          >
            Continue to Shipping Address
          </Button>
        </Link>
      </Box>

      <HStack pt={"20px"}>
        <VStack
          id="address"
          display={toggleForm ? "block" : "none"}
          w={"70%"}
          border={"1px solid black"}
        >
          <Heading fontFamily={"helvetica"} mb={"60px"} textAlign={"left"}>
            Where should we send your order?
          </Heading>
          <Heading
            fontFamily={"helvetica"}
            textAlign={"left"}
            fontSize={"25px"}
            pb={"20px"}
          >
            Enter your name and address.
          </Heading>

          <FormControl isRequired width={"50%"}>
            <FormLabel>First name</FormLabel>
            <Input
              onChange={(e) => handleAddress(e)}
              name="fName"
              placeholder="First name"
            />
            <FormLabel>Last name</FormLabel>
            <Input
              onChange={(e) => handleAddress(e)}
              name="lName"
              placeholder="Last name"
            />
            <FormLabel>Street Address</FormLabel>
            <Input
              onChange={(e) => handleAddress(e)}
              name="street"
              placeholder="Street Address"
            />
            <FormLabel>Apt, Suite, Building</FormLabel>
            <Input
              onChange={(e) => handleAddress(e)}
              name="apt"
              placeholder="Apt, Suite, Building (Optional)"
            />
            <HStack>
              <VStack alignItems={"flex-start"}>
                <FormLabel>Zip Code</FormLabel>
                <Input
                  onChange={(e) => handleAddress(e)}
                  name="zip"
                  placeholder="Zip Code"
                />
              </VStack>
              <VStack alignItems={"flex-start"}>
                <FormLabel>City, State</FormLabel>
                <Input
                  onChange={(e) => handleAddress(e)}
                  name="state"
                  placeholder="City, State"
                />
              </VStack>
            </HStack>
            <FormLabel>Select Country</FormLabel>
            <Select
              name="country"
              onChange={(e) => handleAddress(e)}
              placeholder="Select Country"
              my={"15px"}
            >
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

          <Heading
            fontFamily={"helvetica"}
            fontSize={"25px"}
            textAlign={"left"}
            py={"30px"}
          >
            What’s your contact information?
          </Heading>
          <FormControl isRequired>
            <HStack>
              <Box w="50%">
                <FormLabel>Email Address</FormLabel>
                <Input
                  onChange={(e) => handleContact(e)}
                  name="email"
                  placeholder="Enter Email"
                />
              </Box>
              <Box w="40%">
                <Text fontSize={"12px"}>
                  We’ll email you a receipt and send order updates to your
                  mobile phone via SMS or iMessage.
                </Text>
              </Box>
            </HStack>
            <HStack>
              <Box w="50%">
                <FormLabel>Phone Number</FormLabel>
                <Input
                  onChange={(e) => handleContact(e)}
                  name="moblie"
                  placeholder="Enter Number"
                />
              </Box>
              <Box w="40%">
                <Text fontSize={"12px"}>
                  The phone number you enter can’t be changed after you place
                  your order, so please make sure it’s correct.
                </Text>
              </Box>
            </HStack>
          </FormControl>
          <Link>
            <Button
              my={"55px"}
              colorScheme="blue"
              width={"50%"}
              onClick={handleAddressSubmit}
            >
              Continue to Payment
            </Button>
          </Link>
        </VStack>
        <Box
          display={toggleForm ? "block" : "none"}
          w={"30%"}
          position={"sticky"}
          top={"10"}
          alignSelf={"flex-start"}
        >
          <Summary />
        </Box>
      </HStack>
    </Box>
  );
};

export default CheckoutPage;
