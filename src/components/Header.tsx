import {
  Box,
  Flex,
  Heading,
  HStack,
  Button,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'
// import { HamburgerIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useBreakpointValue({ base: true, md: false })

  const navItems = [
    { label: 'Главная', path: '/' },
    { label: 'О нас', path: '/about' },
    { label: 'Услуги', path: '/services' },
    { label: 'Контакты', path: '/contact' },
  ]

  return (
    <Box
      as="header"
      bg="gray.900"
      color="white"
      py={4}
      px={{ base: 4, md: 8 }}
      position="sticky"
      top={0}
      zIndex={1000}
      boxShadow="lg"
    >
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Heading size="lg" color="blue.400">
          HR-Холдинг
        </Heading>

        {isMobile ? (
                      <Button
              aria-label="Открыть меню"
              variant="ghost"
              color="white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </Button>
        ) : (
          <HStack gap={8}>
            {navItems.map((item) => (
              <RouterLink
                key={item.path}
                to={item.path}
                style={{ color: 'white', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#60a5fa'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}
              >
                {item.label}
              </RouterLink>
            ))}
            <Button colorScheme="blue" size="sm">
              Связаться с нами
            </Button>
          </HStack>
        )}
      </Flex>

      {isMobile && isMenuOpen && (
        <Box mt={4} p={4} bg="gray.800" borderRadius="md">
          <VStack gap={4} align="stretch">
            {navItems.map((item) => (
              <RouterLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                style={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  padding: '8px 0',
                  display: 'block'
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#60a5fa'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}
              >
                {item.label}
              </RouterLink>
            ))}
            <Button colorScheme="blue" mt={4}>
              Связаться с нами
            </Button>
          </VStack>
        </Box>
      )}
    </Box>
  )
}

export default Header