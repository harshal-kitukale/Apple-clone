import { Box, HStack, Text, VStack, useRadio, useRadioGroup } from "@chakra-ui/react"

// 1. Create a component that consumes the `useRadio` hook
const RadioCard=(props)=> {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box  as='label' w="100%">
        <input {...input} />
        <Box
          {...checkbox}
          minW="80%"
          minH={"70px"}
          
          // height={"50px"}
          fontSize="md"
          fontWeight={"bold"}
          cursor='pointer'
          borderWidth='1px'
          borderColor={"grey.600"}
          borderRadius='20px'
          boxShadow='md'
          _checked={{
            // bg: 'rgb(236, 61, 37)',
            // color: 'black',
            border:"2px",
            borderColor: 'rgb(40,126,212)',
          }}
          _hover={{
            borderColor: 'gray.500',
          }}
          _focus={{
            boxShadow: 'inline',
            borderColor: 'rgb(40,126,212)'
          }}
        //   px={6}
          py={1}
        >
          {props.children}
        </Box>
      </Box>
    )
  }
  
  // Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export const StandardSizes=({options})=> {
    // const options = ['S', 'M', 'L', 'XL', 'XXL']
  // console.log(options);
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: 'framework',
      defaultValue: 'react',
      onChange: console.log,
    })
  
    const group = getRootProps()
  
    return (
      <VStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              <Text paddingTop={"20px"} paddingBottom={"20px"} ml={"20px"}>{value}</Text>
            </RadioCard>
          )
        })}
      </VStack>
    )
  }
  
 