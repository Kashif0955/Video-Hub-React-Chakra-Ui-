import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'


const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',

}

function Home() {
  return (
    <Box>

      <MyCarousel />
      <Container maxWidth={'container.xl'} minH={'100vh'} p={16} >
        <Heading
          borderBottom={'2px solid'}
          textTransform={'uppercase'}
          maxW={'fit-content'}
          py={2}
          m={'auto'}

        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={4}
          alignItems={'center'}
          direction={['column', 'row']}


        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text 
          letterSpacing={'widest'}
          p={['4','16']}
          textAlign={'left'}
          lineHeight={'190%'}

          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
            tempora deleniti quod, est eos veniam autem asperiores rem, nam
            laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
            at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
            sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
            Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
            modi soluta ullam voluptatum unde repellat in molestias quod?
            Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
            velit culpa maiores. Inventore esse illum excepturi dolores est
            natus aliquid maiores sunt omnis deserunt accusantium amet enim eos
            adipisci minima hic, nam provident quo aperiam quasi vel?
            Dignissimos accusantium aliquid aut vel explicabo voluptatum
            molestias fugit harum reprehenderit incidunt. Quis cumque explicabo
            omnis officiis autem dolorum!
          </Text>

        </Stack>
      </Container>

    </Box>
  )
};


//hamny ak mycarousel name ka component bna diya is liya ka agar uper ham carousel banty to code kafi ajeeb lagta , code readability bhtr bnany ka liya hamny new component bna kar usy call kar liya.
const MyCarousel = () => (

  <Carousel
    infiniteLoop
    autoPlay
    showArrows={false}
    showStatus={false}
    showThumbs={false}
    interval={1000}

  >
    <Box w={"full"} h={"100vh"}>
      <Image src={img1} h='full' w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} objectFit={'cover'} h={'full'} w={'full'} />
      <Heading bgColor={'whiteAlpha.700'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>

    </Box>
    <Box w={"full"} h={"100vh"}>
      <Image src={img3} h='full' w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} objectFit={'cover'} h={'full'} w={'full'} />
      <Heading bgColor={'whiteAlpha.700'} color={'black'} {...headingOptions}>
        Night life is Cool
      </Heading>

    </Box>

  </Carousel>

)

export default Home