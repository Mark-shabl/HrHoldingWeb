import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Footer = () => {
  return (
    <Box bg="gray.900" color="white" py={12}>
      <Container maxW="1200px">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          gap={8}
        >
          <VStack align="start" gap={4}>
            <Heading size="lg" color="blue.400">
              HR-Холдинг
            </Heading>
            <Text color="gray.300" maxW="300px">
              Ваш надежный партнер в области управления человеческими ресурсами.
              Мы помогаем компаниям находить и развивать таланты.
            </Text>
          </VStack>

          <VStack align="start" gap={4}>
            <Heading size="md">Навигация</Heading>
            <VStack align="start" gap={2}>
              <RouterLink to="/" style={{ color: 'white', textDecoration: 'none' }}>
                Главная
              </RouterLink>
              <RouterLink to="/about" style={{ color: 'white', textDecoration: 'none' }}>
                О нас
              </RouterLink>
              <RouterLink to="/services" style={{ color: 'white', textDecoration: 'none' }}>
                Услуги
              </RouterLink>
              <RouterLink to="/contact" style={{ color: 'white', textDecoration: 'none' }}>
                Контакты
              </RouterLink>
            </VStack>
          </VStack>

          <VStack align="start" gap={4}>
            <Heading size="md">Контакты</Heading>
            <VStack align="start" gap={2} color="gray.300">
              <Text>+7 (495) 123-45-67</Text>
              <Text>info@hr-holding.ru</Text>
              <Text>Москва, ул. Примерная, д. 1</Text>
            </VStack>
          </VStack>
        </Flex>

        <Box my={8} borderTop="1px solid" borderColor="gray.700" />

        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          color="gray.400"
        >
          <Text>&copy; 2024 HR-Холдинг. Все права защищены.</Text>
          <HStack gap={4}>
            <Link href="#" _hover={{ color: 'blue.400' }}>
              Политика конфиденциальности
            </Link>
            <Link href="#" _hover={{ color: 'blue.400' }}>
              Условия использования
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer