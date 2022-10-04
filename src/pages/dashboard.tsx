import { Flex, Box, Text, SimpleGrid, theme } from '@chakra-ui/react'
import { Header } from '../components/Header'

export default function Dashboard() {
   return (
      <Flex direction="column" h="100vh">
         <Header />

         {/* <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar />

            <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
               <Box
                  p={["4", "8"]}
                  bg="gray.800"
                  pb="4"
                  borderRadius={8}
               >
                  <Text fontSize="lg" mb="4">Inscritos na semana</Text>
                  <Chart options={options} series={series1} type="area" height={160} />
               </Box>
               <Box
                  p={["4", "8"]}
                  bg="gray.800"
                  pb="4"
                  borderRadius={8}
               >
                  <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                  <Chart options={options} series={series2} type="area" height={160} />
               </Box>
            </SimpleGrid>
         </Flex> */}
      </Flex>
   )
}