import { Box, HStack, Heading, Stack, VStack, Input, Button,Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'

function Footer() {
    return (
        <Box minH={'40'} p='16' bgColor={'blackAlpha.900'} color={'white'}>
            <Stack direction={['column', 'row']}>

                <VStack
                    alignItems={'stretch'}
                    w={'full'}
                    px={'4'}>
                    <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']}>
                        Subscribe to get Updates
                    </Heading>
                    <HStack borderBottom={'2px solid white'} py={'2'}>
                    <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none' />
                    <Button colorScheme='purple' variant={'ghost'} p={'0'} borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend size={'20'} />
                    </Button>

                </HStack>

                </VStack>
                <VStack 
                w={'full'}
                borderLeft={'1px solid white'}
                borderRight={'1px solid white'}
                >
                    <Heading textAlign={'center'} textTransform={'uppercase'}> Video Hub</Heading>
                     <Text> All right recieved</Text>
                </VStack>

                <VStack 
                w={'full'}
                >
                    <Heading size={'md'} textTransform={'uppercase'}> Social Media </Heading>
                    <Button variant={'link'} colorScheme='white'>
<a href="https://www.youtube.com/@TechInfo-cb7yj">YouTube</a>
                    </Button>
                    <Button variant={'link'} colorScheme='white'>
<a href="https://www.instagram.com/malik_kashif_095/">Instagram</a>
                    </Button>
                    <Button variant={'link'} colorScheme='white'>
<a href="https://github.com/Kashif0955">GitHub</a>
                    </Button>
                     
                </VStack>
             


            </Stack>

        </Box>
    )
}

export default Footer