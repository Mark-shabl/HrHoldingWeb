import {
  Box,
  Container,
  Text,
  Button,
  VStack,
  HStack,
  Flex,

} from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { useState, useEffect } from 'react'

const MotionBox = motion(Box)

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      title: 'Executive Search',
      description: 'Поиск топ-менеджеров и руководителей высшего звена',
      position: { top: '10%', left: '5%' },
      size: 'large'
    },
    {
      title: 'Рекрутинг',
      description: 'Подбор специалистов среднего и младшего звена',
      position: { top: '20%', right: '10%' },
      size: 'medium'
    },
    {
      title: 'Аутсорсинг HR',
      description: 'Полное ведение кадрового делопроизводства',
      position: { bottom: '15%', left: '15%' },
      size: 'small'
    },
    {
      title: 'Обучение',
      description: 'Развитие профессиональных навыков сотрудников',
      position: { top: '40%', right: '5%' },
      size: 'medium'
    },
    {
      title: 'Оценка персонала',
      description: 'Комплексная оценка компетенций и потенциала',
      position: { bottom: '25%', right: '20%' },
      size: 'large'
    }
  ]

  const stats = [
    { number: 500, label: 'Успешных проектов' },
    { number: 1000, label: 'Найденных специалистов' },
    { number: 50, label: 'Клиентов' },
    { number: 5, label: 'Лет опыта' },
  ]

  return (
    <Box pt="100px">
      {/* Hero Section */}
      <Box
        position="relative"
        minH="100vh"
        display="flex"
        alignItems="center"
        overflow="hidden"
        bg="var(--beige-light)"
      >
        {/* Анимированный фон с абстрактными линиями */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          opacity={0.1}
          style={{
            background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A2540' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-18c9.941 0 18 8.059 18 18s-8.059 18-18 18S-8 39.941-8 30s8.059-18 18-18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
          className="parallax-element"
        />
        
        <Container maxW="1200px" position="relative" zIndex={1}>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            align="center"
            justify="space-between"
            minH="80vh"
            gap={16}
          >
            {/* Основной контент */}
            <VStack
              align={{ base: 'center', lg: 'start' }}
              gap={8}
              maxW={{ base: '100%', lg: '50%' }}
              textAlign={{ base: 'center', lg: 'left' }}
            >
              <MotionBox
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Text
                  className="heading-premium"
                  fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                  lineHeight="0.9"
                  mb={6}
                >
                  ПЕРЕОСМЫСЛИВАЕМ
                  <br />
                  <Text color="var(--terracotta)">ВАШУ РАБОЧУЮ</Text>
                  <br />
                  СИЛУ
                </Text>
              </MotionBox>
              
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Text
                  className="text-premium"
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="var(--gray-dark)"
                  lineHeight="1.6"
                  maxW="500px"
                >
                  Профессиональные HR-решения для компаний, которые стремятся к совершенству в управлении человеческими ресурсами.
                </Text>
              </MotionBox>
              
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <HStack gap={4} flexWrap="wrap" justify={{ base: 'center', lg: 'start' }}>
                  <Button
                    className="premium-button"
                    size="lg"
                    px={8}
                    py={6}
                    fontSize="sm"
                    letterSpacing="1px"
                  >
                    Начать сотрудничество
                  </Button>
                  
                  <Button
                    className="accent-button"
                    size="lg"
                    px={8}
                    py={6}
                    fontSize="sm"
                    letterSpacing="1px"
                    variant="outline"
                    borderColor="var(--terracotta)"
                    color="var(--terracotta)"
                    bg="transparent"
                    _hover={{
                      bg: 'var(--terracotta)',
                      color: 'var(--white-pure)',
                    }}
                  >
                    Узнать больше
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
            >
              {services.map((service, index) => (
                <MotionBox
                  key={service.title}
                  position="absolute"
                  {...service.position}
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 100
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
                    w={service.size === 'large' ? '280px' : service.size === 'medium' ? '220px' : '180px'}
                    bg="var(--white-pure)"
                    border="1px solid var(--beige-dusty)"
                    cursor="pointer"
                    _hover={{
                      boxShadow: 'var(--shadow-medium)',
                      borderColor: 'var(--terracotta)',
                    }}
                    transition="all 0.3s ease"
                  >
                    <VStack align="start" gap={3}>
                      <Text
                        className="heading-premium"
                        fontSize={service.size === 'large' ? 'lg' : 'md'}
                        color="var(--navy-deep)"
                      >
                        {service.title}
                      </Text>
                      <Text
                        className="text-secondary"
                        fontSize="sm"
                        lineHeight="1.5"
                      >
                        {service.description}
                      </Text>
                    </VStack>
                  </Box>
                </MotionBox>
              ))}
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box
        py={24}
        bg="var(--beige-dusty)"
        position="relative"
      >
        <Container maxW="1200px">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
            gap={12}
          >
            {stats.map((stat, index) => (
              <MotionBox
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                <VStack gap={4} textAlign="center">
                  <Text
                    className="heading-premium"
                    fontSize={{ base: '4xl', md: '5xl' }}
                    color="var(--navy-deep)"

                  >
                    {stat.number}+
                  </Text>
                  <Text
                    className="text-secondary"
                    fontSize="sm"
                    letterSpacing="1px"
                    textTransform="uppercase"
                    fontWeight="500"
                  >
                    {stat.label}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </Flex>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box
        py={24}
        bg="var(--navy-deep)"
        position="relative"
        overflow="hidden"
      >
        <Container maxW="1200px">
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            align="center"
            gap={16}
            minH="500px"
          >
            {/* Отзыв */}
            <VStack
              align={{ base: 'center', lg: 'start' }}
              gap={8}
              maxW={{ base: '100%', lg: '60%' }}
              textAlign={{ base: 'center', lg: 'left' }}
            >
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Text
                  className="text-premium"
                  fontSize={{ base: 'xl', md: '2xl' }}
                  color="var(--beige-light)"
                  lineHeight="1.6"
                  fontStyle="italic"
                >
                  "HR-Холдинг помог нам найти идеального CEO для нашей компании. 
                  Их подход к поиску и оценке кандидатов превзошел все наши ожидания."
                </Text>
              </MotionBox>
              
              <MotionBox
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <VStack align={{ base: 'center', lg: 'start' }} gap={2}>
                  <Text
                    className="heading-premium"
                    fontSize="lg"
                    color="var(--white-pure)"
                  >
                    АННА ПЕТРОВА
                  </Text>
                  <Text
                    className="text-secondary"
                    fontSize="sm"
                    color="var(--beige-dusty)"
                    letterSpacing="1px"
                    textTransform="uppercase"
                  >
                    Председатель совета директоров, ТехноКорп
                  </Text>
                </VStack>
              </MotionBox>
            </VStack>
            
            {/* Логотип компании */}
            <MotionBox
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              flex="1"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                className="minimal-card"
                p={12}
                bg="var(--white-pure)"
                border="1px solid var(--beige-dusty)"
                textAlign="center"
              >
                <Text
                  className="heading-premium"
                  fontSize="2xl"
                  color="var(--navy-deep)"
                  letterSpacing="3px"
                >
                  ТЕХНОКОРП
                </Text>
                <Text
                  className="text-secondary"
                  fontSize="sm"
                  color="var(--gray-dark)"
                  mt={2}
                  letterSpacing="1px"
                  textTransform="uppercase"
                >
                  Технологическая компания
                </Text>
              </Box>
            </MotionBox>
          </Flex>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        py={24}
        bg="var(--beige-light)"
        position="relative"
      >
        <Container maxW="1200px">
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
                  color="var(--navy-deep)"
                  lineHeight="1.1"
                >
                  ГОТОВЫ НАЧАТЬ
                  <br />
                  <Text color="var(--terracotta)">СОТРУДНИЧЕСТВО?</Text>
                </Text>
                
                <Text
                  className="text-premium"
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="var(--gray-dark)"
                  maxW="600px"
                  lineHeight="1.6"
                >
                  Свяжитесь с нами для обсуждения ваших потребностей и получения персональной консультации
                </Text>
              </VStack>
              
              <HStack gap={6} flexWrap="wrap" justify="center">
                <Button
                  className="premium-button"
                  size="lg"
                  px={12}
                  py={6}
                  fontSize="sm"
                  letterSpacing="1px"
                >
                  Получить консультацию
                </Button>
                
                <Button
                  className="accent-button"
                  size="lg"
                  px={12}
                  py={6}
                  fontSize="sm"
                  letterSpacing="1px"
                  variant="outline"
                  borderColor="var(--terracotta)"
                  color="var(--terracotta)"
                  bg="transparent"
                  _hover={{
                    bg: 'var(--terracotta)',
                    color: 'var(--white-pure)',
                  }}
                >
                  Наши услуги
                </Button>
              </HStack>
            </VStack>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  )
}

export default HomePage