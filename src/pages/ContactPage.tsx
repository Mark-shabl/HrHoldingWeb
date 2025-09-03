import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const MotionBox = motion(Box)

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev: any) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: '📞',
      title: 'Телефон',
      details: ['+7 (495) 123-45-67', '+7 (495) 123-45-68'],
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['info@hr-holding.ru', 'recruitment@hr-holding.ru'],
    },
    {
      icon: '📍',
      title: 'Адрес',
      details: ['Москва, ул. Примерная, д. 1', 'БЦ "Примерный", офис 100'],
    },
    {
      icon: '🕒',
      title: 'Время работы',
      details: ['Пн-Пт: 9:00 - 18:00', 'Сб-Вс: по договоренности'],
    },
  ]

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgGradient="linear(to-r, gray.600, gray.800)"
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
              Свяжитесь с нами
            </Heading>
            <Text fontSize="xl" color="gray.200" maxW="800px" mx="auto">
              Готовы обсудить ваш проект? Мы всегда рады новым клиентам 
              и готовы предложить индивидуальное решение.
            </Text>
          </MotionBox>
        </Container>
      </Box>

      {/* Contact Form and Info */}
      <Box py={20}>
        <Container maxW="1200px">
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={12}>
            {/* Contact Form */}
            <GridItem>
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="lg"
                  p={8}
                  boxShadow="lg"
                >
                  <VStack gap={6} align="stretch">
                    <Heading size="lg" color="blue.600">
                      Отправить сообщение
                    </Heading>
                    <Text color="gray.600">
                      Заполните форму, и мы свяжемся с вами в течение 24 часов
                    </Text>

                    <form onSubmit={handleSubmit}>
                      <VStack gap={4} align="stretch">
                        <VStack align="stretch" gap={2}>
                          <Text fontWeight="semibold">Имя *</Text>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Ваше имя"
                            required
                          />
                        </VStack>

                        <VStack align="stretch" gap={2}>
                          <Text fontWeight="semibold">Email *</Text>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            required
                          />
                        </VStack>

                        <VStack align="stretch" gap={2}>
                          <Text fontWeight="semibold">Телефон</Text>
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+7 (___) ___-__-__"
                          />
                        </VStack>

                        <VStack align="stretch" gap={2}>
                          <Text fontWeight="semibold">Компания</Text>
                          <Input
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Название компании"
                          />
                        </VStack>

                        <VStack align="stretch" gap={2}>
                          <Text fontWeight="semibold">Сообщение *</Text>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Расскажите о ваших потребностях..."
                            rows={4}
                            required
                          />
                        </VStack>

                        <Button
                          type="submit"
                          colorScheme="blue"
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
            </GridItem>

            {/* Contact Information */}
            <GridItem>
              <MotionBox
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <VStack gap={8} align="stretch">
                  <Box>
                    <Heading size="lg" mb={6} color="blue.600">
                      Контактная информация
                    </Heading>
                    <Text color="gray.600" mb={8}>
                      Мы всегда готовы ответить на ваши вопросы и обсудить 
                      возможности сотрудничества.
                    </Text>
                  </Box>

                  <VStack gap={6} align="stretch">
                    {contactInfo.map((info, index) => (
                      <MotionBox
                        key={info.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Box
                          border="1px solid"
                          borderColor="gray.200"
                          borderRadius="lg"
                          p={6}
                          _hover={{ 
                            boxShadow: 'md',
                            transform: 'translateY(-2px)',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <HStack gap={4} align="start">
                            <Box fontSize="2xl">{info.icon}</Box>
                            <VStack gap={2} align="start">
                              <Heading size="sm" color="blue.600">
                                {info.title}
                              </Heading>
                              {info.details.map((detail, detailIndex) => (
                                <Text key={detailIndex} color="gray.600" fontSize="sm">
                                  {detail}
                                </Text>
                              ))}
                            </VStack>
                          </HStack>
                        </Box>
                      </MotionBox>
                    ))}
                  </VStack>

                  <Box borderTop="1px solid" borderColor="gray.200" />

                  <Box
                    bg="blue.50"
                    p={6}
                    borderRadius="lg"
                    border="1px solid"
                    borderColor="blue.200"
                  >
                    <VStack gap={4} align="start">
                      <Heading size="md" color="blue.600">
                        Быстрая связь
                      </Heading>
                      <Text color="gray.600" fontSize="sm">
                        Нужна срочная консультация? Звоните нам прямо сейчас!
                      </Text>
                      <Button
                        colorScheme="blue"
                        variant="solid"
                        size="md"
                      >
                        📞 Позвонить сейчас
                      </Button>
                    </VStack>
                  </Box>
                </VStack>
              </MotionBox>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Map Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="1200px">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            textAlign="center"
          >
            <Heading size="xl" mb={8}>
              Как нас найти
            </Heading>
            <Box
              bg="gray.200"
              height="400px"
              borderRadius="lg"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="gray.500"
            >
              <VStack gap={4}>
                <Box fontSize="4xl">🗺️</Box>
                <Text fontSize="lg">Интерактивная карта</Text>
                <Text fontSize="sm">
                  Москва, ул. Примерная, д. 1, БЦ "Примерный", офис 100
                </Text>
              </VStack>
            </Box>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  )
}

export default ContactPage