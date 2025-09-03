import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Grid,
  Badge,
  Button,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
// import { CheckIcon } from '@chakra-ui/icons'

const MotionBox = motion(Box)

const ServicesPage = () => {
  const services = [
    {
      title: 'Подбор персонала',
      description: 'Находим лучших специалистов для вашей компании',
      icon: '👥',
      features: [
        'Поиск по базам данных и социальным сетям',
        'Проведение интервью и тестирований',
        'Проверка рекомендаций',
        'Гарантия на подобранного сотрудника',
      ],
      price: 'от 15% от годовой зарплаты',
      color: 'blue',
    },
    {
      title: 'HR-консалтинг',
      description: 'Консультации по управлению персоналом',
      icon: '💼',
      features: [
        'Аудит HR-процессов',
        'Разработка HR-стратегии',
        'Оптимизация организационной структуры',
        'Внедрение KPI и системы мотивации',
      ],
      price: 'от 50 000 ₽/месяц',
      color: 'green',
    },
    {
      title: 'Обучение сотрудников',
      description: 'Развитие профессиональных навыков',
      icon: '🎓',
      features: [
        'Корпоративные тренинги',
        'Онлайн-обучение',
        'Менторство и коучинг',
        'Сертификация сотрудников',
      ],
      price: 'от 25 000 ₽/день',
      color: 'purple',
    },
    {
      title: 'Аутсорсинг HR',
      description: 'Полное ведение кадрового делопроизводства',
      icon: '📋',
      features: [
        'Ведение кадрового учета',
        'Расчет заработной платы',
        'Оформление документов',
        'Соблюдение трудового законодательства',
      ],
      price: 'от 30 000 ₽/месяц',
      color: 'orange',
    },
    {
      title: 'Оценка персонала',
      description: 'Комплексная оценка компетенций сотрудников',
      icon: '📊',
      features: [
        '360-градусная оценка',
        'Ассессмент-центр',
        'Психологическое тестирование',
        'Разработка планов развития',
      ],
      price: 'от 20 000 ₽/сотрудник',
      color: 'teal',
    },
    {
      title: 'Адаптация персонала',
      description: 'Помощь новым сотрудникам в интеграции',
      icon: '🤝',
      features: [
        'Программа адаптации',
        'Наставничество',
        'Мониторинг процесса',
        'Обратная связь и корректировка',
      ],
      price: 'от 15 000 ₽/сотрудник',
      color: 'pink',
    },
  ]

  const process = [
    {
      step: '1',
      title: 'Консультация',
      description: 'Обсуждаем ваши потребности и цели',
    },
    {
      step: '2',
      title: 'Анализ',
      description: 'Изучаем специфику вашего бизнеса',
    },
    {
      step: '3',
      title: 'Планирование',
      description: 'Разрабатываем индивидуальный план',
    },
    {
      step: '4',
      title: 'Реализация',
      description: 'Выполняем поставленные задачи',
    },
    {
      step: '5',
      title: 'Контроль',
      description: 'Отслеживаем результаты и корректируем',
    },
  ]

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgGradient="linear(to-r, blue.600, blue.800)"
        color="white"
        py={20}
      >
        <Container maxW="1200px">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            textAlign="center"
          >
            <Heading size="2xl" mb={6}>
              Наши услуги
            </Heading>
            <Text fontSize="xl" color="gray.200" maxW="800px" mx="auto">
              Полный спектр HR-услуг для развития вашего бизнеса. 
              От подбора персонала до стратегического консалтинга.
            </Text>
          </MotionBox>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box py={20}>
        <Container maxW="1200px">
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={8}>
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
                  height="100%"
                >
                  <VStack gap={6} align="stretch" height="100%">
                    <VStack gap={4} align="start">
                      <HStack gap={4}>
                        <Box fontSize="3xl">{service.icon}</Box>
                        <Badge colorScheme={service.color} variant="solid" px={3} py={1}>
                          {service.price}
                        </Badge>
                      </HStack>
                      <Heading size="md">{service.title}</Heading>
                      <Text color="gray.600">{service.description}</Text>
                    </VStack>

                    <VStack gap={2} align="stretch" flex="1">
                      {service.features.map((feature, featureIndex) => (
                        <HStack key={featureIndex} gap={2}>
                          <Text color={`${service.color}.500`}>✓</Text>
                          <Text fontSize="sm">{feature}</Text>
                        </HStack>
                      ))}
                    </VStack>

                    <RouterLink to="/contact">
                      <Button
                        colorScheme={service.color}
                        variant="outline"
                        size="sm"
                      >
                        Заказать услугу
                      </Button>
                    </RouterLink>
                  </VStack>
                </Box>
              </MotionBox>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Process Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="1200px">
          <VStack gap={12}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              textAlign="center"
            >
              <Heading size="xl" mb={4}>
                Как мы работаем
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="600px">
                Простой и понятный процесс сотрудничества
              </Text>
            </MotionBox>

            <Grid templateColumns={{ base: '1fr', md: 'repeat(5, 1fr)' }} gap={8}>
              {process.map((step, index) => (
                <MotionBox
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <VStack gap={4} textAlign="center">
                    <Box
                      bg="blue.600"
                      color="white"
                      borderRadius="full"
                      w={12}
                      h={12}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontWeight="bold"
                      fontSize="lg"
                    >
                      {step.step}
                    </Box>
                    <Heading size="sm">{step.title}</Heading>
                    <Text color="gray.600" fontSize="sm">
                      {step.description}
                    </Text>
                  </VStack>
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
              Готовы обсудить ваш проект?
            </Heading>
            <Text fontSize="lg" mb={8} color="gray.200">
              Свяжитесь с нами для получения персональной консультации
            </Text>
            <HStack gap={4} justify="center">
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
              <Button
                size="lg"
                variant="outline"
                borderColor="white"
                color="white"
                _hover={{ bg: 'white', color: 'blue.600' }}
              >
                Скачать презентацию
              </Button>
            </HStack>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  )
}

export default ServicesPage