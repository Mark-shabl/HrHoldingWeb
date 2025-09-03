import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Button,
  Flex,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'

const MotionBox = motion(Box)

const ServicesPage = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      position: { top: '5%', left: '10%' },
      delay: 0,
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
      position: { top: '15%', right: '5%' },
      delay: 0.1,
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
      position: { top: '40%', left: '5%' },
      delay: 0.2,
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
      position: { top: '50%', right: '10%' },
      delay: 0.3,
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
      position: { bottom: '25%', left: '15%' },
      delay: 0.4,
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
      position: { bottom: '10%', right: '5%' },
      delay: 0.5,
    },
  ]

  const process = [
    {
      step: '1',
      title: 'Консультация',
      description: 'Обсуждаем ваши потребности и цели',
      delay: 0,
    },
    {
      step: '2',
      title: 'Анализ',
      description: 'Изучаем специфику вашего бизнеса',
      delay: 0.1,
    },
    {
      step: '3',
      title: 'Планирование',
      description: 'Разрабатываем индивидуальный план',
      delay: 0.2,
    },
    {
      step: '4',
      title: 'Реализация',
      description: 'Выполняем поставленные задачи',
      delay: 0.3,
    },
    {
      step: '5',
      title: 'Контроль',
      description: 'Отслеживаем результаты и корректируем',
      delay: 0.4,
    },
  ]

  return (
    <Box pt="100px">
      {/* Hero Section */}
      <Box
        minH="80vh"
        bg="var(--beige-light)"
        position="relative"
        overflow="hidden"
      >
        {/* Анимированный фон */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
          className="parallax-element"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            opacity={0.1}
          >
            <defs>
              <pattern id="services-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--navy-deep)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-grid)" />
          </svg>
        </Box>
        
        <Container maxW="1200px" position="relative" zIndex={1} px={{ base: 4, md: 6 }}>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            align="center"
            justify="space-between"
            minH="80vh"
            gap={12}
          >
            <VStack
              align={{ base: 'center', lg: 'start' }}
              gap={8}
              maxW={{ base: '100%', lg: '60%' }}
            >
              <MotionBox
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <VStack gap={6} align={{ base: 'center', lg: 'start' }}>
                  <Text
                    className="heading-premium"
                    fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                    color="var(--navy-deep)"
                    textAlign={{ base: 'center', lg: 'left' }}
                  >
                    Наши услуги
                  </Text>
                  <Text
                    className="text-premium"
                    fontSize={{ base: 'lg', md: 'xl' }}
                    color="var(--gray-medium)"
                    textAlign={{ base: 'center', lg: 'left' }}
                    maxW="600px"
                  >
                    Полный спектр HR-услуг для развития вашего бизнеса. 
                    От подбора персонала до стратегического консалтинга.
                  </Text>
                  <Text
                    className="text-secondary"
                    fontSize={{ base: 'md', md: 'lg' }}
                    color="var(--gray-dark)"
                    textAlign={{ base: 'center', lg: 'left' }}
                    maxW="500px"
                  >
                    Профессиональные решения для вашего HR-отдела с гарантированным результатом.
                  </Text>
                </VStack>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <HStack gap={4} flexWrap="wrap" justify={{ base: 'center', lg: 'start' }}>
                  <Button className="premium-button" size="lg">
                    Выбрать услугу
                  </Button>
                  <Button className="accent-button" size="lg">
                    Получить консультацию
                  </Button>
                </HStack>
              </MotionBox>
            </VStack>
            
            {/* Асимметричные блоки услуг */}
            <Box
              position="relative"
              w={{ base: '100%', lg: '50%' }}
              h="600px"
              display={{ base: 'none', lg: 'block' }}
              px={4}
            >
              {services.slice(0, 4).map((service) => (
                <MotionBox
                  key={service.title}
                  position="absolute"
                  {...service.position}
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 15,
                    delay: service.delay + 0.5
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 2,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Box
                    className="minimal-card"
                    p={6}
                    w="200px"
                    cursor="pointer"
                  >
                    <VStack gap={3} align="start">
                      <Text fontSize="2xl">{service.icon}</Text>
                      <Text
                        className="heading-premium"
                        fontSize="md"
                        color="var(--navy-deep)"
                      >
                        {service.title}
                      </Text>
                      <Text
                        className="text-secondary"
                        fontSize="xs"
                        color="var(--gray-medium)"
                      >
                        {service.price}
                      </Text>
                    </VStack>
                  </Box>
                </MotionBox>
              ))}
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box
        py={24}
        bg="var(--beige-dusty)"
        position="relative"
      >
        <Container maxW="1200px" px={{ base: 4, md: 6 }}>
          <VStack gap={16}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              textAlign="center"
            >
              <VStack gap={6}>
                <Text
                  className="heading-premium"
                  fontSize={{ base: '3xl', md: '4xl' }}
                  color="var(--navy-deep)"
                >
                  Полный спектр услуг
                </Text>
                <Text
                  className="text-premium"
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="var(--gray-medium)"
                  maxW="600px"
                >
                  От подбора персонала до стратегического консалтинга
                </Text>
              </VStack>
            </MotionBox>

            <Flex
              direction={{ base: 'column', md: 'row' }}
              gap={8}
              justify="center"
              align="stretch"
              w="100%"
              flexWrap="wrap"
            >
              {services.map((service, index) => (
                <MotionBox
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: service.delay,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  flex="1"
                  minW="300px"
                  maxW="400px"
                >
                  <Box
                    className="minimal-card"
                    p={8}
                    h="100%"
                  >
                    <VStack gap={6} align="stretch" h="100%">
                      <VStack gap={4} align="start">
                        <HStack gap={4} align="start">
                          <Text fontSize="3xl">{service.icon}</Text>
                          <VStack gap={2} align="start" flex="1">
                            <Text
                              className="heading-premium"
                              fontSize="lg"
                              color="var(--navy-deep)"
                            >
                              {service.title}
                            </Text>
                            <Text
                              className="text-secondary"
                              fontSize="sm"
                              color="var(--terracotta)"
                              fontWeight="semibold"
                            >
                              {service.price}
                            </Text>
                          </VStack>
                        </HStack>
                        <Text
                          className="text-premium"
                          color="var(--gray-medium)"
                        >
                          {service.description}
                        </Text>
                      </VStack>

                      <VStack gap={3} align="stretch" flex="1">
                        {service.features.map((feature) => (
                          <HStack key={feature} gap={3} align="start">
                            <Text
                              color="var(--terracotta)"
                              fontSize="sm"
                              mt={1}
                            >
                              ✓
                            </Text>
                            <Text
                              className="text-secondary"
                              fontSize="sm"
                              color="var(--gray-medium)"
                            >
                              {feature}
                            </Text>
                          </HStack>
                        ))}
                      </VStack>

                      <RouterLink to="/contact">
                        <Button
                          className="accent-button"
                          size="sm"
                          width="full"
                        >
                          Заказать услугу
                        </Button>
                      </RouterLink>
                    </VStack>
                  </Box>
                </MotionBox>
              ))}
            </Flex>
          </VStack>
        </Container>
      </Box>

      {/* Process Section */}
      <Box
        py={24}
        bg="var(--beige-light)"
        position="relative"
      >
        <Container maxW="1200px" px={{ base: 4, md: 6 }}>
          <VStack gap={16}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              textAlign="center"
            >
              <VStack gap={6}>
                <Text
                  className="heading-premium"
                  fontSize={{ base: '3xl', md: '4xl' }}
                  color="var(--navy-deep)"
                >
                  Как мы работаем
                </Text>
                <Text
                  className="text-premium"
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="var(--gray-medium)"
                  maxW="600px"
                >
                  Простой и понятный процесс сотрудничества
                </Text>
              </VStack>
            </MotionBox>

            <Flex
              direction={{ base: 'column', md: 'row' }}
              gap={8}
              justify="center"
              align="center"
              w="100%"
              flexWrap="wrap"
            >
              {process.map((step) => (
                <MotionBox
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: step.delay,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  flex="1"
                  minW="150px"
                  maxW="200px"
                >
                  <VStack gap={6} textAlign="center">
                    <Box
                      className="minimal-card"
                      borderRadius="full"
                      w={16}
                      h={16}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      bg="var(--terracotta)"
                      color="var(--beige-light)"
                    >
                      <Text
                        className="heading-premium"
                        fontSize="lg"
                      >
                        {step.step}
                      </Text>
                    </Box>
                    <VStack gap={2}>
                      <Text
                        className="heading-premium"
                        fontSize="md"
                        color="var(--navy-deep)"
                      >
                        {step.title}
                      </Text>
                      <Text
                        className="text-secondary"
                        fontSize="sm"
                        color="var(--gray-medium)"
                      >
                        {step.description}
                      </Text>
                    </VStack>
                  </VStack>
                </MotionBox>
              ))}
            </Flex>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        py={24}
        bg="var(--navy-deep)"
        position="relative"
      >
        <Container maxW="1200px" px={{ base: 4, md: 6 }}>
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            textAlign="center"
          >
            <VStack gap={12}>
              <VStack gap={6}>
                <Text
                  className="heading-premium"
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  color="var(--beige-light)"
                >
                  Готовы обсудить ваш проект?
                </Text>
                <Text
                  className="text-premium"
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="var(--beige-light)"
                  maxW="600px"
                >
                  Свяжитесь с нами для получения персональной консультации
                </Text>
              </VStack>
              <HStack gap={6} flexWrap="wrap" justify="center">
                <RouterLink to="/contact">
                  <Button className="premium-button" size="lg">
                    Получить консультацию
                  </Button>
                </RouterLink>
                <Button className="accent-button" size="lg">
                  Скачать презентацию
                </Button>
              </HStack>
            </VStack>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  )
}

export default ServicesPage