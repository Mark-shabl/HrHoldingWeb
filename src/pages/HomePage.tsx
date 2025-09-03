import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Grid,
  GridItem,
  Badge,
  Flex,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'

const MotionBox = motion(Box)

const HomePage = () => {
  const services = [
    {
      title: 'Подбор персонала',
      description: 'Находим лучших специалистов для вашей компании',
      icon: '👥',
    },
    {
      title: 'HR-консалтинг',
      description: 'Консультации по управлению персоналом',
      icon: '💼',
    },
    {
      title: 'Обучение сотрудников',
      description: 'Развитие профессиональных навыков',
      icon: '🎓',
    },
    {
      title: 'Аутсорсинг HR',
      description: 'Полное ведение кадрового делопроизводства',
      icon: '📋',
    },
  ]

  const stats = [
    { number: '500+', label: 'Успешных проектов' },
    { number: '1000+', label: 'Найденных специалистов' },
    { number: '50+', label: 'Клиентов' },
    { number: '5', label: 'Лет опыта' },
  ]

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgGradient="linear(to-r, blue.600, blue.800)"
        color="white"
        py={20}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage="url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')"
          opacity={0.1}
        />
        <Container maxW="1200px" position="relative" zIndex={1}>
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={12} alignItems="center">
            <GridItem>
              <MotionBox
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge colorScheme="blue" variant="solid" mb={4} px={3} py={1} borderRadius="full">
                  Лидер в HR-услугах
                </Badge>
                <Heading size="2xl" mb={6} lineHeight="1.2">
                  Находим и развиваем
                  <Text as="span" color="blue.200"> таланты</Text>
                </Heading>
                <Text fontSize="xl" mb={8} color="gray.200">
                  Профессиональные HR-услуги для роста вашего бизнеса.
                  От подбора персонала до стратегического консалтинга.
                </Text>
                <HStack gap={4}>
                  <RouterLink to="/services">
                    <Button
                      size="lg"
                      colorScheme="white"
                      variant="solid"
                      bg="white"
                      color="blue.600"
                      _hover={{ bg: 'gray.100' }}
                    >
                      Наши услуги
                    </Button>
                  </RouterLink>
                  <RouterLink to="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      borderColor="white"
                      color="white"
                      _hover={{ bg: 'white', color: 'blue.600' }}
                    >
                      Связаться с нами
                    </Button>
                  </RouterLink>
                </HStack>
              </MotionBox>
            </GridItem>
            <GridItem>
              <MotionBox
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  bg="white"
                  borderRadius="xl"
                  p={8}
                  boxShadow="2xl"
                  color="gray.800"
                >
                  <VStack gap={6}>
                    <Heading size="lg" color="blue.600">
                      Почему выбирают нас?
                    </Heading>
                    <VStack gap={4} align="stretch">
                      <Flex align="center" gap={3}>
                        <Box bg="green.100" p={2} borderRadius="md">
                          ✓
                        </Box>
                        <Text>Быстрый подбор квалифицированных специалистов</Text>
                      </Flex>
                      <Flex align="center" gap={3}>
                        <Box bg="green.100" p={2} borderRadius="md">
                          ✓
                        </Box>
                        <Text>Индивидуальный подход к каждому клиенту</Text>
                      </Flex>
                      <Flex align="center" gap={3}>
                        <Box bg="green.100" p={2} borderRadius="md">
                          ✓
                        </Box>
                        <Text>Гарантия качества предоставляемых услуг</Text>
                      </Flex>
                    </VStack>
                  </VStack>
                </Box>
              </MotionBox>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box py={16} bg="gray.50">
        <Container maxW="1200px">
          <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={8}>
            {stats.map((stat, index) => (
              <MotionBox
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <VStack gap={2}>
                  <Heading size="2xl" color="blue.600">
                    {stat.number}
                  </Heading>
                  <Text color="gray.600" textAlign="center">
                    {stat.label}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={20}>
        <Container maxW="1200px">
          <VStack gap={12}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              textAlign="center"
            >
              <Heading size="xl" mb={4}>
                Наши услуги
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="600px">
                Полный спектр HR-услуг для развития вашего бизнеса
              </Text>
            </MotionBox>

            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
              {services.map((service, index) => (
                <MotionBox
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Box
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="lg"
                    p={8}
                    _hover={{ 
                      boxShadow: 'xl',
                      transform: 'translateY(-5px)',
                      transition: 'all 0.3s ease'
                    }}
                    cursor="pointer"
                  >
                    <VStack gap={4} align="start">
                      <Box fontSize="3xl">{service.icon}</Box>
                      <Heading size="md">{service.title}</Heading>
                      <Text color="gray.600">{service.description}</Text>
                      <RouterLink to="/services">
                        <Button
                          variant="outline"
                          colorScheme="blue"
                          size="sm"
                          p={0}
                        >
                          Подробнее →
                        </Button>
                      </RouterLink>
                    </VStack>
                  </Box>
                </MotionBox>
              ))}
            </Grid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        bgGradient="linear(to-r, blue.600, blue.800)"
        color="white"
        py={16}
      >
        <Container maxW="1200px">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            textAlign="center"
          >
            <Heading size="xl" mb={4}>
              Готовы начать сотрудничество?
            </Heading>
            <Text fontSize="lg" mb={8} color="gray.200">
              Свяжитесь с нами для обсуждения ваших потребностей
            </Text>
            <RouterLink to="/contact">
              <Button
                size="lg"
                colorScheme="white"
                variant="solid"
                bg="white"
                color="blue.600"
                _hover={{ bg: 'gray.100' }}
              >
                Получить консультацию
              </Button>
            </RouterLink>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  )
}

export default HomePage