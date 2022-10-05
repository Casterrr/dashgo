import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

type ProfileProps = {
    showProfileData?: boolean
}

// Só mostra o nome e e-mail se showName = true

export function Profile({ showProfileData = true }: ProfileProps) {
   return (
      <Flex align="center">
         
         { showProfileData && ( 
            <Box mr="4" textAlign="right">
               <Text>Lucas Matheus</Text>
               <Text color="gray.300" fontSize="small">
                  lucmvl2003@gmail.com
               </Text>
            </Box>
         )}

        <Avatar size="md" name="Lucas Matheus" src="https://github.com/Casterrr.png" /> 
      </Flex>
   )
}