import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { Input } from "../../components/Form/input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
    return(
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6" >
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input 
                                name="name" 
                                label="Nome completo" 
                                // error={ errors.name }
                                // {...register('name')}
                            />
                            <Input 
                                name="email" 
                                type="email"
                                label="E-mail" 
                                // error={ errors.email }
                                // {...register('email')}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input 
                                name="password" 
                                type="password" 
                                label="Senha" 
                                // error={ errors.password }
                                // {...register('password')}
                            />
                            <Input 
                                name="password_confirmation" 
                                type="password" 
                                label="Confirmação da senha" 
                                // error={ errors.password_confirmation }
                                // {...register('password_confirmation')}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Button as="a" 
                                colorScheme="whiteAlpha"
                                href="/users"
                            >
                                Cancelar
                            </Button>
                            <Button 
                                type="submit" 
                                // isLoading={formState.isSubmitting}
                                colorScheme="pink"
                            >
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}