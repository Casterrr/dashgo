import { DrawerCloseButton, DrawerOverlay, Icon } from '@chakra-ui/react'
import { DrawerHeader, DrawerContent, DrawerBody } from '@chakra-ui/react'
import { Box, Stack, Text, Drawer, Link, useBreakpointValue } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'
import { SidebarNav } from './SidebarNav'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

export function Sidebar() {
   const { isOpen, onClose } = useSidebarDrawer()

   const isDrawerSidebar  = useBreakpointValue({
      base: true,
      lg: false
   })
   
   if (isDrawerSidebar) {
      return (
         <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay>
               <DrawerContent bg="gray.800" p={4}>
                  <DrawerCloseButton mt="6" />
                     <DrawerHeader>Navegação</DrawerHeader>
                     <DrawerBody>
                        <SidebarNav />
                     </DrawerBody>
               </DrawerContent>
            </DrawerOverlay>
         </Drawer>
      )
   }

   return (
      <Box as="aside" w="64" mr="8">
         <SidebarNav />
      </Box>
   )
}