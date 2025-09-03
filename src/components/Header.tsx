import {
  Box,
  Flex,
  Text,
  HStack,
  useBreakpointValue,
  IconButton,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MotionBox = motion(Box)

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isMobile = useBreakpointValue({ base: true, md: false })

  const navItems = [
    { label: 'Главная', path: '/' },
    { label: 'О нас', path: '/about' },
    { label: 'Услуги', path: '/services' },
    { label: 'Контакты', path: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <MotionBox
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Box
        bg={isScrolled ? 'rgba(248, 245, 240, 0.95)' : 'rgba(248, 245, 240, 0.8)'}
        backdropFilter="blur(10px)"
        borderBottom={isScrolled ? '1px solid' : 'none'}
        borderColor="var(--beige-dusty)"
        py={4}
        px={{ base: 6, md: 12 }}
        transition="all 0.3s ease"
      >
        <Flex justify="space-between" align="center" maxW="1200px" mx="auto" px={{ base: 4, md: 6 }}>
          {/* Логотип */}
          <MotionBox
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <RouterLink to="/">
              <Text
                className="heading-premium"
                fontSize={{ base: '2xl', md: '3xl' }}
                color="var(--navy-deep)"
                letterSpacing="2px"
              >
                HR-ХОЛДИНГ
              </Text>
            </RouterLink>
          </MotionBox>

          {/* Навигация */}
          {isMobile ? (
            <IconButton
              aria-label="Открыть меню"
              variant="ghost"
              color="var(--navy-deep)"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              size="md"
              _hover={{ bg: 'var(--beige-dusty)' }}
            >
              <Box
                as="span"
                fontSize="lg"
                transform={isMenuOpen ? 'rotate(45deg)' : 'rotate(0deg)'}
                transition="transform 0.3s ease"
              >
                ☰
              </Box>
            </IconButton>
          ) : (
            <HStack gap={8}>
              {navItems.map((item, index) => (
                <MotionBox
                  key={item.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <RouterLink to={item.path}>
                    <Text
                      className="underline-hover"
                      color="var(--navy-deep)"
                      fontWeight="400"
                      fontSize="sm"
                      letterSpacing="1px"
                      textTransform="uppercase"
                      _hover={{ color: 'var(--terracotta)' }}
                      transition="color 0.3s ease"
                    >
                      {item.label}
                    </Text>
                  </RouterLink>
                </MotionBox>
              ))}
            </HStack>
          )}
        </Flex>

        {/* Мобильное меню */}
        <AnimatePresence>
          {isMobile && isMenuOpen && (
            <MotionBox
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              mt={6}
              overflow="hidden"
            >
              <Box
                className="minimal-card"
                p={6}
                bg="var(--white-pure)"
                border="1px solid var(--beige-dusty)"
              >
                <Flex direction="column" gap={4}>
                  {navItems.map((item, index) => (
                    <MotionBox
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <RouterLink
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Text
                          color="var(--navy-deep)"
                          fontWeight="400"
                          fontSize="md"
                          letterSpacing="1px"
                          textTransform="uppercase"
                          py={2}
                          _hover={{ color: 'var(--terracotta)' }}
                          transition="color 0.3s ease"
                        >
                          {item.label}
                        </Text>
                      </RouterLink>
                    </MotionBox>
                  ))}
                </Flex>
              </Box>
            </MotionBox>
          )}
        </AnimatePresence>
      </Box>
    </MotionBox>
  )
}

export default Header