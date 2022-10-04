import { Flex, Text, Input, useBreakpointValue, Icon, IconButton } from '@chakra-ui/react'
// import { Profile } from './Profile'
// import { Notifications } from './Notifications'
// import { SearchBox } from './SearchBox'
// import { Logo } from './Logo'
// import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { RiSearchLine } from 'react-icons/ri'

export function Header() {
//    const { onOpen } = useSidebarDrawer()

//    const isTelaGrande = useBreakpointValue({
//       base: false,
//       lg: true
//    })

   return (
        <Flex 
        as="header" 
        w="100%" 
        maxWidth={1480} 
        h="20"
        marginX="auto"
        mt="4"
        align="center"
        px="6"
        >
            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" m="64" >
                dashgo
                <Text as="span" ml="1" color="pink.500" >.</Text>
            </Text>

            <Flex
                as="label"
                flex="1"
                py="4"
                px="8"
                ml="6"
                maxWidth={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bg="gray.800"
                borderRadius="full"
            >
                <Input 
                    color="gray.50"
                    variant="unstyled"
                    px="4"
                    mr="4"
                    placeholder="Buscar na plataforma"
                    _placeholder={{ color: "gray.400" }}
                />
                <Icon as={RiSearchLine} fontSize="20" />
            </Flex>
        
        </Flex>
    )
}