import {
  Box,
  Container,
  Flex,
  Text,
  VStack,
  HStack,
  Link,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

const Footer = () => {
  const socialLinks = [
    { icon: '📧', label: 'Email', href: 'mailto:info@hr-holding.ru' },
    { icon: '📱', label: 'Telegram', href: 'https://t.me/hr_holding' },
    { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/company/hr-holding' },
  ]

  const navItems = [
    { label: 'Главная', path: '/' },
    { label: 'О нас', path: '/about' },
    { label: 'Услуги', path: '/services' },
    { label: 'Контакты', path: '/contact' },
  ]

  return (
    <Box
      bg="var(--navy-deep)"
      color="var(--beige-light)"
      py={16}
    >
      <Container maxW="1200px" px={{ base: 4, md: 6 }}>
        <MotionFlex
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
          align={{ base: 'center', lg: 'start' }}
          gap={12}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Логотип */}
          <VStack align={{ base: 'center', lg: 'start' }} gap={4}>
            <Text
              className="heading-premium"
              fontSize="2xl"
              color="var(--beige-light)"
              letterSpacing="2px"
            >
              HR-ХОЛДИНГ
            </Text>
            <Text
              className="text-secondary"
              fontSize="sm"
              color="var(--beige-dusty)"
              textAlign={{ base: 'center', lg: 'left' }}
              maxW="300px"
            >
              Ваш надежный партнер в области управления человеческими ресурсами
            </Text>
          </VStack>

          {/* Навигация */}
          <VStack align={{ base: 'center', lg: 'start' }} gap={4}>
            <Text
              className="heading-premium"
              fontSize="sm"
              color="var(--beige-light)"
              letterSpacing="1px"
              textTransform="uppercase"
            >
              Навигация
            </Text>
            <VStack align={{ base: 'center', lg: 'start' }} gap={2}>
              {navItems.map((item, index) => (
                <MotionBox
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <RouterLink to={item.path}>
                    <Text
                      className="underline-hover"
                      color="var(--beige-dusty)"
                      fontSize="sm"
                      _hover={{ color: 'var(--terracotta)' }}
                      transition="color 0.3s ease"
                    >
                      {item.label}
                    </Text>
                  </RouterLink>
                </MotionBox>
              ))}
            </VStack>
          </VStack>

          {/* Контакты */}
          <VStack align={{ base: 'center', lg: 'start' }} gap={4}>
            <Text
              className="heading-premium"
              fontSize="sm"
              color="var(--beige-light)"
              letterSpacing="1px"
              textTransform="uppercase"
            >
              Контакты
            </Text>
            <VStack align={{ base: 'center', lg: 'start' }} gap={3}>
              {[
                { text: '+7 (495) 123-45-67', href: 'tel:+74951234567' },
                { text: 'info@hr-holding.ru', href: 'mailto:info@hr-holding.ru' },
                { text: 'Москва, ул. Примерная, д. 1', href: '#' },
              ].map((contact, index) => (
                <MotionBox
                  key={contact.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={contact.href}
                    color="var(--beige-dusty)"
                    fontSize="sm"
                    _hover={{ color: 'var(--terracotta)' }}
                    transition="color 0.3s ease"
                  >
                    {contact.text}
                  </Link>
                </MotionBox>
              ))}
            </VStack>
          </VStack>

          {/* Социальные сети */}
          <VStack align={{ base: 'center', lg: 'start' }} gap={4}>
            <Text
              className="heading-premium"
              fontSize="sm"
              color="var(--beige-light)"
              letterSpacing="1px"
              textTransform="uppercase"
            >
              Следите за нами
            </Text>
            <HStack gap={4}>
              {socialLinks.map((social, index) => (
                <MotionBox
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    color="var(--beige-dusty)"
                    fontSize="lg"
                    _hover={{ color: 'var(--terracotta)' }}
                    transition="color 0.3s ease"
                  >
                    {social.icon}
                  </Link>
                </MotionBox>
              ))}
            </HStack>
          </VStack>
        </MotionFlex>

        {/* Разделитель */}
        <Box
          borderTop="1px solid"
          borderColor="var(--beige-dusty)"
          my={12}
          opacity={0.3}
        />

        {/* Нижняя часть */}
        <MotionFlex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={6}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Text
            className="text-secondary"
            fontSize="sm"
            color="var(--beige-dusty)"
          >
            &copy; 2024 HR-Холдинг. Все права защищены.
          </Text>
          
          <HStack gap={8}>
            {[
              { label: 'Политика конфиденциальности', href: '#' },
              { label: 'Условия использования', href: '#' },
            ].map((link, index) => (
              <MotionBox
                key={link.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-secondary"
                  fontSize="sm"
                  color="var(--beige-dusty)"
                  _hover={{ color: 'var(--terracotta)' }}
                  transition="color 0.3s ease"
                >
                  {link.label}
                </Link>
              </MotionBox>
            ))}
          </HStack>
        </MotionFlex>
      </Container>
    </Box>
  )
}

export default Footer