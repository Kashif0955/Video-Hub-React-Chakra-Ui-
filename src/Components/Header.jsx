import React from 'react'
import { Drawer, DrawerBody, DrawerHeader, DrawerContent, DrawerOverlay, DrawerCloseButton, Button, useDisclosure, VStack, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi'

function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();   //is hook ko ham kisi bh chakra ui ma jab ham modal,drawer etc bnaty hain to use karty hian, ismy isOpen ka matlab haka boolean, onOpen matlab abhi kholo, onClose matlab abhi close karo simple

    return (
        <>
            <Button colorScheme='purple' pos={'fixed'} zIndex={'overlay'} top={'4'} left={'4'} p={'0'} h={'10'} w={'10'} borderRadius={'full'} onClick={onOpen} >
                <BiMenuAltLeft size={'20'} />
            </Button>

            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        Video Hub
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack  alignItems={'flex-start'}>


                            <Button  onClick={onClose}  colorScheme='purple' variant={'ghost'}>
                                <Link to={'/'}>Home</Link>
                            </Button>
                            <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                                <Link to={'/videos'}>Videos</Link>
                            </Button>
                            <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                                <Link to={'/video?category=free'}>Free Video</Link>
                            </Button>
                            <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                                <Link to={'/upload'}>Upload Video</Link>
                            </Button>
                        </VStack>

                        <HStack pos={'absolute'} bottom={'10'}  justifyContent={'space-evenly'} w={'full'}>
                            <Button onClick={onClose} colorScheme='purple'>
                                <Link to={"/login"}>Log in</Link>
                            </Button>
                            <Button onClick={onClose} colorScheme='purple' variant={'outline'}>
                                <Link to={"/signup"}>Sign Up</Link>
                            </Button>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>

            </Drawer>

        </>
    )
}

export default Header