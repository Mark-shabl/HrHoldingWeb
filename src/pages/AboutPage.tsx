import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Grid,
  GridItem,
  Badge,
  Flex,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const AboutPage = () => {
  const team = [
    {
      name: 'Анна Петрова',
      position: 'Генеральный директор',
      experience: '10 лет в HR',
      image: '👩‍💼',
    },
    {
      name: 'Михаил Иванов',
      position: 'Руководитель отдела подбора',
      experience: '8 лет в HR',
      image: '👨‍💼',
    },
    {
      name: 'Елена Сидорова',
      position: 'HR-консультант',
      experience: '6 лет в HR',
      image: '👩‍💻',
    },
  ]

  const values = [
    {
      title: 'Профессионализм',
      description: 'Высокий уровень экспертизы в области HR',
      icon: '🎯',
    },
    {
      title: 'Надежность',
      description: 'Выполняем обязательства в срок и с качеством',
      icon: '🤝',
    },
    {
      title: 'Инновации',
      description: 'Используем современные методы и технологии',
      icon: '💡',
    },
    {
      title: 'Партнерство',
      description: 'Строим долгосрочные отношения с клиентами',
      icon: '🚀',
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
              О нашей компании
            </Heading>
            <Text fontSize="xl" color="gray.200" maxW="800px" mx="auto">
              Мы — команда профессионалов, которая помогает компаниям находить 
              и развивать лучших специалистов для достижения бизнес-целей.
            </Text>
          </MotionBox>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box py={20}>
        <Container maxW="1200px">
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={12} alignItems="center">
            <GridItem>
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Heading size="xl" mb={6}>
                  Наша миссия
                </Heading>
                <Text fontSize="lg" color="gray.600" mb={6}>
                  Мы стремимся стать ведущим HR-партнером для компаний, 
                  помогая им создавать эффективные команды и развивать 
                  корпоративную культуру.
                </Text>
                <VStack gap={4} align="stretch">
                  <Flex align="center" gap={3}>
                    <Box bg="blue.100" p={2} borderRadius="md">
                      🎯
                    </Box>
                    <Text>Фокус на результатах клиента</Text>
                  </Flex>
                  <Flex align="center" gap={3}>
                    <Box bg="blue.100" p={2} borderRadius="md">
                      💼
                    </Box>
                    <Text>Профессиональный подход к каждому проекту</Text>
                  </Flex>
                  <Flex align="center" gap={3}>
                    <Box bg="blue.100" p={2} borderRadius="md">
                      🌟
                    </Box>
                    <Text>Постоянное развитие и инновации</Text>
                  </Flex>
                </VStack>
              </MotionBox>
            </GridItem>
            <GridItem>
              <MotionBox
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  bg="gray.50"
                  p={8}
                  borderRadius="xl"
                  boxShadow="lg"
                >
                  <VStack gap={6}>
                    <Heading size="lg" color="blue.600">
                      Наши достижения
                    </Heading>
                    <VStack gap={4} align="stretch">
                      <Flex justify="space-between" align="center">
                        <Text fontWeight="semibold">Успешных проектов</Text>
                        <Badge colorScheme="green" fontSize="md" px={3} py={1}>
                          500+
                        </Badge>
                      </Flex>
                      <Flex justify="space-between" align="center">
                        <Text fontWeight="semibold">Найденных специалистов</Text>
                        <Badge colorScheme="blue" fontSize="md" px={3} py={1}>
                          1000+
                        </Badge>
                      </Flex>
                      <Flex justify="space-between" align="center">
                        <Text fontWeight="semibold">Довольных клиентов</Text>
                        <Badge colorScheme="purple" fontSize="md" px={3} py={1}>
                          50+
                        </Badge>
                      </Flex>
                      <Flex justify="space-between" align="center">
                        <Text fontWeight="semibold">Лет на рынке</Text>
                        <Badge colorScheme="orange" fontSize="md" px={3} py={1}>
                          5
                        </Badge>
                      </Flex>
                    </VStack>
                  </VStack>
                </Box>
              </MotionBox>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
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
                Наши ценности
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="600px">
                Принципы, которыми мы руководствуемся в работе
              </Text>
            </MotionBox>

            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
              {values.map((value, index) => (
                <MotionBox
                  key={value.title}
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
                  >
                    <VStack gap={4} align="start">
                      <Box fontSize="3xl">{value.icon}</Box>
                      <Heading size="md">{value.title}</Heading>
                      <Text color="gray.600">{value.description}</Text>
                    </VStack>
                  </Box>
                </MotionBox>
              ))}
            </Grid>
          </VStack>
        </Container>
      </Box>

      {/* Team Section */}
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
                Наша команда
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="600px">
                Профессионалы с многолетним опытом в HR
              </Text>
            </MotionBox>

            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
              {team.map((member, index) => (
                <MotionBox
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Box
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="lg"
                    p={8}
                    textAlign="center"
                    _hover={{ 
                      boxShadow: 'xl',
                      transform: 'translateY(-5px)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <VStack gap={4}>
                      <Box fontSize="4xl">{member.image}</Box>
                      <Heading size="md">{member.name}</Heading>
                      <Text color="blue.600" fontWeight="semibold">
                        {member.position}
                      </Text>
                      <Text color="gray.600" fontSize="sm">
                        {member.experience}
                      </Text>
                    </VStack>
                  </Box>
                </MotionBox>
              ))}
            </Grid>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}

export default AboutPage