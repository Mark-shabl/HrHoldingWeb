import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Flex,
  Button,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const MotionBox = motion(Box)

const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const team = [
    {
      name: 'Анна Петрова',
      position: 'Генеральный директор',
      experience: '10 лет в HR',
      image: '👩‍💼',
      delay: 0,
    },
    {
      name: 'Михаил Иванов',
      position: 'Руководитель отдела подбора',
      experience: '8 лет в HR',
      image: '👨‍💼',
      delay: 0.1,
    },
    {
      name: 'Елена Сидорова',
      position: 'HR-консультант',
      experience: '6 лет в HR',
      image: '👩‍💻',
      delay: 0.2,
    },
  ]

  const values = [
    {
      title: 'Профессионализм',
      description: 'Высокий уровень экспертизы в области HR',
      icon: '🎯',
      position: { top: '10%', left: '5%' },
    },
    {
      title: 'Надежность',
      description: 'Выполняем обязательства в срок и с качеством',
      icon: '🤝',
      position: { top: '20%', right: '10%' },
    },
    {
      title: 'Инновации',
      description: 'Используем современные методы и технологии',
      icon: '💡',
      position: { bottom: '30%', left: '15%' },
    },
    {
      title: 'Партнерство',
      description: 'Строим долгосрочные отношения с клиентами',
      icon: '🚀',
      position: { bottom: '15%', right: '5%' },
    },
  ]

  const achievements = [
    { number: '500+', label: 'Успешных проектов' },
    { number: '1000+', label: 'Найденных специалистов' },
    { number: '50+', label: 'Довольных клиентов' },
    { number: '5', label: 'Лет на рынке' },
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
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="var(--navy-deep)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
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
                    О нашей компании
                  </Text>
                  <Text
                    className="text-premium"
                    fontSize={{ base: 'lg', md: 'xl' }}
                    color="var(--gray-medium)"
                    textAlign={{ base: 'center', lg: 'left' }}
                    maxW="600px"
                  >
                    Мы — команда профессионалов, которая помогает компаниям находить 
                    и развивать лучших специалистов для достижения бизнес-целей.
                  </Text>
                  <Text
                    className="text-secondary"
                    fontSize={{ base: 'md', md: 'lg' }}
                    color="var(--gray-dark)"
                    textAlign={{ base: 'center', lg: 'left' }}
                    maxW="500px"
                  >
                    Строгий минимализм, премиальный подход и академическая элегантность 
                    в каждом решении.
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
                    Наша миссия
                  </Button>
                  <Button className="accent-button" size="lg">
                    Связаться с нами
                  </Button>
                </HStack>
              </MotionBox>
            </VStack>
            
            {/* Асимметричные блоки ценностей */}
            <Box
              position="relative"
              w={{ base: '100%', lg: '50%' }}
              h="600px"
              display={{ base: 'none', lg: 'block' }}
              px={4}
            >
              {values.map((value, index) => (
                <MotionBox
                  key={value.title}
                  position="absolute"
                  {...value.position}
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
                    w="200px"
                    cursor="pointer"
                  >
                    <VStack gap={3} align="start">
                      <Text fontSize="2xl">{value.icon}</Text>
                      <Text
                        className="heading-premium"
                        fontSize="lg"
                        color="var(--navy-deep)"
                      >
                        {value.title}
                      </Text>
                      <Text
                        className="text-secondary"
                        fontSize="sm"
                        color="var(--gray-medium)"
                      >
                        {value.description}
                      </Text>
                    </VStack>
                  </Box>
                </MotionBox>
              ))}
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box
        py={24}
        bg="var(--beige-dusty)"
        position="relative"
      >
        <Container maxW="1200px" px={{ base: 4, md: 6 }}>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            align="center"
            gap={16}
            minH="500px"
          >
            <VStack
              align={{ base: 'center', lg: 'start' }}
              gap={8}
              maxW={{ base: '100%', lg: '60%' }}
            >
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <VStack gap={6} align={{ base: 'center', lg: 'start' }}>
                  <Text
                    className="heading-premium"
                    fontSize={{ base: '3xl', md: '4xl' }}
                    color="var(--terracotta)"
                    textAlign={{ base: 'center', lg: 'left' }}
                  >
                    Наша миссия
                  </Text>
                  <Text
                    className="text-premium"
                    fontSize={{ base: 'lg', md: 'xl' }}
                    color="var(--navy-deep)"
                    textAlign={{ base: 'center', lg: 'left' }}
                    maxW="600px"
                  >
                    Мы стремимся стать ведущим HR-партнером для компаний, 
                    помогая им создавать эффективные команды и развивать 
                    корпоративную культуру.
                  </Text>
                </VStack>
              </MotionBox>

              <VStack gap={4} align={{ base: 'center', lg: 'start' }}>
                {[
                  { icon: '🎯', text: 'Фокус на результатах клиента' },
                  { icon: '💼', text: 'Профессиональный подход к каждому проекту' },
                  { icon: '🌟', text: 'Постоянное развитие и инновации' }
                ].map((item, index) => (
                  <MotionBox
                    key={item.text}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Flex align="center" gap={4}>
                      <Box
                        className="minimal-card"
                        p={3}
                        borderRadius="full"
                      >
                        <Text fontSize="lg">{item.icon}</Text>
                      </Box>
                      <Text
                        className="text-premium"
                        color="var(--navy-deep)"
                      >
                        {item.text}
                      </Text>
                    </Flex>
                  </MotionBox>
                ))}
              </VStack>
            </VStack>

            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                className="minimal-card"
                p={8}
                w={{ base: '100%', lg: '400px' }}
              >
                <VStack gap={6} align="start">
                  <Text
                    className="heading-premium"
                    fontSize="xl"
                    color="var(--terracotta)"
                  >
                    Наши достижения
                  </Text>
                  <VStack gap={4} align="stretch" w="100%">
                    {achievements.map((achievement, index) => (
                      <MotionBox
                        key={achievement.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Flex justify="space-between" align="center">
                          <Text
                            className="text-premium"
                            color="var(--navy-deep)"
                          >
                            {achievement.label}
                          </Text>
                          <Text
                            className="heading-premium counter-spin"
                            fontSize="lg"
                            color="var(--terracotta)"
                          >
                            {achievement.number}
                          </Text>
                        </Flex>
                      </MotionBox>
                    ))}
                  </VStack>
                </VStack>
              </Box>
            </MotionBox>
          </Flex>
        </Container>
      </Box>

      {/* Team Section */}
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
                  Наша команда
                </Text>
                <Text
                  className="text-premium"
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="var(--gray-medium)"
                  maxW="600px"
                >
                  Профессионалы с многолетним опытом в HR
                </Text>
              </VStack>
            </MotionBox>

            <Flex
              direction={{ base: 'column', md: 'row' }}
              gap={8}
              justify="center"
              align="stretch"
              w="100%"
            >
              {team.map((member, index) => (
                <MotionBox
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: member.delay,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  flex="1"
                  maxW="300px"
                >
                  <Box
                    className="minimal-card"
                    p={8}
                    textAlign="center"
                    h="100%"
                  >
                    <VStack gap={6}>
                      <Box fontSize="4xl">{member.image}</Box>
                      <VStack gap={2}>
                        <Text
                          className="heading-premium"
                          fontSize="xl"
                          color="var(--navy-deep)"
                        >
                          {member.name}
                        </Text>
                        <Text
                          className="text-premium"
                          color="var(--terracotta)"
                          fontWeight="semibold"
                        >
                          {member.position}
                        </Text>
                        <Text
                          className="text-secondary"
                          fontSize="sm"
                          color="var(--gray-medium)"
                        >
                          {member.experience}
                        </Text>
                      </VStack>
                    </VStack>
                  </Box>
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
                  Готовы работать с нами?
                </Text>
                <Text
                  className="text-premium"
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="var(--beige-light)"
                  maxW="600px"
                >
                  Свяжитесь с нами для обсуждения вашего проекта
                </Text>
              </VStack>
              <HStack gap={6} flexWrap="wrap" justify="center">
                <Button className="premium-button" size="lg">
                  Получить консультацию
                </Button>
                <Button className="accent-button" size="lg">
                  Связаться с нами
                </Button>
              </HStack>
            </VStack>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  )
}

export default AboutPage