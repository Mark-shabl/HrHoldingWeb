import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  Flex,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const MotionBox = motion(Box)

const ContactPage = () => {
  const [scrollY, setScrollY] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev: any) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: '📞',
      title: 'Телефон',
      details: ['+7 (495) 123-45-67', '+7 (495) 123-45-68'],
      position: { top: '10%', left: '5%' },
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['info@hr-holding.ru', 'recruitment@hr-holding.ru'],
      position: { top: '25%', right: '10%' },
    },
    {
      icon: '📍',
      title: 'Адрес',
      details: ['Москва, ул. Примерная, д. 1', 'БЦ "Примерный", офис 100'],
      position: { bottom: '30%', left: '15%' },
    },
    {
      icon: '🕒',
      title: 'Время работы',
      details: ['Пн-Пт: 9:00 - 18:00', 'Сб-Вс: по договоренности'],
      position: { bottom: '15%', right: '5%' },
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
              <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--navy-deep)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
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
                    Свяжитесь с нами
                  </Text>
                  <Text
                    className="text-premium"
                    fontSize={{ base: 'lg', md: 'xl' }}
                    color="var(--gray-medium)"
                    textAlign={{ base: 'center', lg: 'left' }}
                    maxW="600px"
                  >
                    Готовы обсудить ваш проект? Мы всегда рады новым клиентам 
                    и готовы предложить индивидуальное решение.
                  </Text>
                  <Text
                    className="text-secondary"
                    fontSize={{ base: 'md', md: 'lg' }}
                    color="var(--gray-dark)"
                    textAlign={{ base: 'center', lg: 'left' }}
                    maxW="500px"
                  >
                    Профессиональный подход к каждому клиенту и гарантированный результат.
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
                    Заполнить форму
                  </Button>
                  <Button className="accent-button" size="lg">
                    Позвонить сейчас
                  </Button>
                </HStack>
              </MotionBox>
            </VStack>
            
            {/* Асимметричные блоки контактов */}
            <Box
              position="relative"
              w={{ base: '100%', lg: '50%' }}
              h="600px"
              display={{ base: 'none', lg: 'block' }}
              px={4}
            >
              {contactInfo.map((info, index) => (
                <MotionBox
                  key={info.title}
                  position="absolute"
                  {...info.position}
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 15,
                    delay: index * 0.2 + 0.5
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
                    w="220px"
                    cursor="pointer"
                  >
                    <VStack gap={3} align="start">
                      <Text fontSize="2xl">{info.icon}</Text>
                      <Text
                        className="heading-premium"
                        fontSize="lg"
                        color="var(--navy-deep)"
                      >
                        {info.title}
                      </Text>
                      {info.details.map((detail, detailIndex) => (
                        <Text
                          key={detailIndex}
                          className="text-secondary"
                          fontSize="sm"
                          color="var(--gray-medium)"
                        >
                          {detail}
                        </Text>
                      ))}
                    </VStack>
                  </Box>
                </MotionBox>
              ))}
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box
        py={24}
        bg="var(--beige-dusty)"
        position="relative"
      >
        <Container maxW="1200px" px={{ base: 4, md: 6 }}>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            align="start"
            gap={16}
            minH="600px"
          >
            {/* Contact Form */}
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              flex="1"
            >
              <Box
                className="minimal-card"
                p={8}
                w="100%"
              >
                <VStack gap={8} align="stretch">
                  <VStack gap={4} align="start">
                    <Text
                      className="heading-premium"
                      fontSize="2xl"
                      color="var(--terracotta)"
                    >
                      Отправить сообщение
                    </Text>
                    <Text
                      className="text-premium"
                      color="var(--navy-deep)"
                    >
                      Заполните форму, и мы свяжемся с вами в течение 24 часов
                    </Text>
                  </VStack>

                  <form onSubmit={handleSubmit}>
                    <VStack gap={6} align="stretch">
                      <VStack align="stretch" gap={2}>
                        <Text
                          className="text-premium"
                          color="var(--navy-deep)"
                          fontWeight="semibold"
                        >
                          Имя *
                        </Text>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Ваше имя"
                          required
                          bg="var(--beige-light)"
                          border="1px solid"
                          borderColor="var(--beige-warm)"
                          _focus={{
                            borderColor: 'var(--terracotta)',
                            boxShadow: '0 0 0 1px var(--terracotta)'
                          }}
                        />
                      </VStack>

                      <VStack align="stretch" gap={2}>
                        <Text
                          className="text-premium"
                          color="var(--navy-deep)"
                          fontWeight="semibold"
                        >
                          Email *
                        </Text>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          bg="var(--beige-light)"
                          border="1px solid"
                          borderColor="var(--beige-warm)"
                          _focus={{
                            borderColor: 'var(--terracotta)',
                            boxShadow: '0 0 0 1px var(--terracotta)'
                          }}
                        />
                      </VStack>

                      <VStack align="stretch" gap={2}>
                        <Text
                          className="text-premium"
                          color="var(--navy-deep)"
                          fontWeight="semibold"
                        >
                          Телефон
                        </Text>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+7 (___) ___-__-__"
                          bg="var(--beige-light)"
                          border="1px solid"
                          borderColor="var(--beige-warm)"
                          _focus={{
                            borderColor: 'var(--terracotta)',
                            boxShadow: '0 0 0 1px var(--terracotta)'
                          }}
                        />
                      </VStack>

                      <VStack align="stretch" gap={2}>
                        <Text
                          className="text-premium"
                          color="var(--navy-deep)"
                          fontWeight="semibold"
                        >
                          Компания
                        </Text>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Название компании"
                          bg="var(--beige-light)"
                          border="1px solid"
                          borderColor="var(--beige-warm)"
                          _focus={{
                            borderColor: 'var(--terracotta)',
                            boxShadow: '0 0 0 1px var(--terracotta)'
                          }}
                        />
                      </VStack>

                      <VStack align="stretch" gap={2}>
                        <Text
                          className="text-premium"
                          color="var(--navy-deep)"
                          fontWeight="semibold"
                        >
                          Сообщение *
                        </Text>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Расскажите о ваших потребностях..."
                          rows={4}
                          required
                          bg="var(--beige-light)"
                          border="1px solid"
                          borderColor="var(--beige-warm)"
                          _focus={{
                            borderColor: 'var(--terracotta)',
                            boxShadow: '0 0 0 1px var(--terracotta)'
                          }}
                        />
                      </VStack>

                      <Button
                        type="submit"
                        className="accent-button"
                        size="lg"
                        width="full"
                      >
                        Отправить сообщение
                      </Button>
                    </VStack>
                  </form>
                </VStack>
              </Box>
            </MotionBox>

            {/* Additional Info */}
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              flex="1"
            >
              <VStack gap={8} align="stretch">
                <Box>
                  <Text
                    className="heading-premium"
                    fontSize="2xl"
                    color="var(--terracotta)"
                    mb={6}
                  >
                    Почему выбирают нас
                  </Text>
                  <Text
                    className="text-premium"
                    color="var(--navy-deep)"
                    mb={8}
                  >
                    Мы всегда готовы ответить на ваши вопросы и обсудить 
                    возможности сотрудничества.
                  </Text>
                </Box>

                <VStack gap={6} align="stretch">
                  {[
                    { icon: '⚡', title: 'Быстрый ответ', desc: 'Отвечаем в течение 24 часов' },
                    { icon: '🎯', title: 'Индивидуальный подход', desc: 'Каждый проект уникален' },
                    { icon: '🛡️', title: 'Конфиденциальность', desc: 'Полная защита данных' },
                    { icon: '📈', title: 'Проверенные результаты', desc: '500+ успешных проектов' }
                  ].map((item, index) => (
                    <MotionBox
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Box
                        className="minimal-card"
                        p={6}
                        _hover={{ 
                          transform: 'translateY(-2px)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <HStack gap={4} align="start">
                          <Box
                            className="minimal-card"
                            p={3}
                            borderRadius="full"
                          >
                            <Text fontSize="lg">{item.icon}</Text>
                          </Box>
                          <VStack gap={2} align="start">
                            <Text
                              className="heading-premium"
                              fontSize="md"
                              color="var(--navy-deep)"
                            >
                              {item.title}
                            </Text>
                            <Text
                              className="text-secondary"
                              fontSize="sm"
                              color="var(--gray-medium)"
                            >
                              {item.desc}
                            </Text>
                          </VStack>
                        </HStack>
                      </Box>
                    </MotionBox>
                  ))}
                </VStack>

                <Box
                  className="minimal-card"
                  p={6}
                  bg="var(--beige-light)"
                  border="2px solid"
                  borderColor="var(--terracotta)"
                >
                  <VStack gap={4} align="start">
                    <Text
                      className="heading-premium"
                      fontSize="lg"
                      color="var(--terracotta)"
                    >
                      Быстрая связь
                    </Text>
                    <Text
                      className="text-premium"
                      color="var(--navy-deep)"
                      fontSize="sm"
                    >
                      Нужна срочная консультация? Звоните нам прямо сейчас!
                    </Text>
                    <Button
                      className="accent-button"
                      size="md"
                    >
                      📞 Позвонить сейчас
                    </Button>
                  </VStack>
                </Box>
              </VStack>
            </MotionBox>
          </Flex>
        </Container>
      </Box>

      {/* Map Section */}
      <Box
        py={24}
        bg="var(--beige-light)"
        position="relative"
      >
        <Container maxW="1200px" px={{ base: 4, md: 6 }}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            textAlign="center"
          >
            <VStack gap={12}>
              <VStack gap={6}>
                <Text
                  className="heading-premium"
                  fontSize={{ base: '3xl', md: '4xl' }}
                  color="var(--navy-deep)"
                >
                  Как нас найти
                </Text>
                <Text
                  className="text-premium"
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="var(--gray-medium)"
                  maxW="600px"
                >
                  Мы находимся в центре Москвы, в удобном бизнес-центре
                </Text>
              </VStack>
              
              <Box
                className="minimal-card"
                height="400px"
                w="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="var(--beige-dusty)"
              >
                <VStack gap={6}>
                  <Box fontSize="4xl">🗺️</Box>
                  <VStack gap={2}>
                    <Text
                      className="heading-premium"
                      fontSize="lg"
                      color="var(--navy-deep)"
                    >
                      Интерактивная карта
                    </Text>
                    <Text
                      className="text-secondary"
                      fontSize="sm"
                      color="var(--gray-medium)"
                    >
                      Москва, ул. Примерная, д. 1, БЦ "Примерный", офис 100
                    </Text>
                  </VStack>
                </VStack>
              </Box>
            </VStack>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  )
}

export default ContactPage