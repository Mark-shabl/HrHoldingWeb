# Компоненты HR-Холдинг 🧩

## Обзор

Документация по всем компонентам проекта HR-Холдинг с описанием их функциональности, пропсов и использования.

## Структура компонентов

```
src/
├── components/
│   ├── Header.tsx          # Навигационная шапка
│   └── Footer.tsx          # Подвал сайта
├── pages/
│   ├── HomePage.tsx        # Главная страница
│   ├── AboutPage.tsx       # О компании
│   ├── ServicesPage.tsx    # Услуги
│   └── ContactPage.tsx     # Контакты
└── App.tsx                 # Главный компонент
```

## Компоненты

### Header.tsx

Минималистичная навигационная шапка с полупрозрачным фоном и анимированными ссылками.

#### Особенности
- Фиксированное позиционирование
- Полупрозрачный фон с размытием
- Анимированные подчеркивания при hover
- Адаптивное мобильное меню
- Логотип с hover эффектом

#### Используемые технологии
- Chakra UI: `Box`, `Flex`, `Text`, `Button`
- Framer Motion: `motion`, `AnimatePresence`
- CSS классы: `heading-premium`, `underline-hover`

#### Код
```typescript
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Логика скролла и мобильного меню
}
```

### Footer.tsx

Премиальный подвал с контактной информацией и социальными сетями.

#### Особенности
- Темно-синий фон
- Минималистичный дизайн
- Анимированные ссылки
- Социальные иконки с hover эффектами
- Адаптивная раскладка

#### Используемые технологии
- Chakra UI: `Box`, `Container`, `VStack`, `HStack`, `Text`
- Framer Motion: `motion`
- CSS классы: `heading-premium`, `text-secondary`, `underline-hover`

### HomePage.tsx

Главная страница с асимметричными блоками и параллакс эффектами.

#### Секции
1. **Hero Section**
   - Анимированный SVG фон
   - Кинетическая типографика
   - Асимметричные блоки услуг
   - Параллакс эффект

2. **Stats Section**
   - Анимированные счетчики
   - Hover эффекты
   - Spring анимации

3. **Testimonials Section**
   - Вертикальный слайдер
   - Плавные переходы
   - Логотипы компаний

4. **CTA Section**
   - Призыв к действию
   - Премиальные кнопки

#### Используемые технологии
- Chakra UI: `Box`, `Container`, `VStack`, `HStack`, `Text`, `Button`
- Framer Motion: `motion`, `MotionBox`
- React Hooks: `useState`, `useEffect`
- CSS классы: `heading-premium`, `text-premium`, `minimal-card`

#### Код
```typescript
const HomePage = () => {
  const [scrollY, setScrollY] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Логика параллакса и слайдера
}
```

### AboutPage.tsx

Страница о компании с анимированными ценностями и командой.

#### Секции
1. **Hero Section**
   - Анимированный фон
   - Кинетическая типографика
   - Асимметричные блоки ценностей

2. **Mission Section**
   - Двухколоночный макет
   - Анимированные достижения
   - Spring анимации

3. **Team Section**
   - Карточки команды
   - Hover эффекты
   - Адаптивная сетка

4. **CTA Section**
   - Призыв к сотрудничеству

#### Используемые технологии
- Chakra UI: `Box`, `Container`, `VStack`, `HStack`, `Text`, `Button`
- Framer Motion: `motion`, `MotionBox`
- React Hooks: `useState`, `useEffect`
- CSS классы: `heading-premium`, `text-premium`, `minimal-card`

### ServicesPage.tsx

Страница услуг с нелинейной структурой и детальными карточками.

#### Секции
1. **Hero Section**
   - Анимированный фон
   - Предварительный просмотр услуг
   - Асимметричные блоки

2. **Services Grid**
   - Детальные карточки услуг
   - Адаптивная сетка
   - Hover эффекты

3. **Process Section**
   - 5 этапов работы
   - Анимированные иконки
   - Spring анимации

4. **CTA Section**
   - Призыв к консультации

#### Используемые технологии
- Chakra UI: `Box`, `Container`, `VStack`, `HStack`, `Text`, `Button`
- Framer Motion: `motion`, `MotionBox`
- React Router: `Link`
- CSS классы: `heading-premium`, `text-premium`, `minimal-card`

### ContactPage.tsx

Страница контактов с интерактивной формой и асимметричными блоками.

#### Секции
1. **Hero Section**
   - Анимированный фон
   - Асимметричные блоки контактов
   - Параллакс эффект

2. **Contact Form**
   - Интерактивная форма
   - Кастомные стили полей
   - Валидация

3. **Additional Info**
   - Блоки преимуществ
   - Быстрая связь
   - Hover эффекты

4. **Map Section**
   - Стилизованная карта
   - Интерактивные элементы

#### Используемые технологии
- Chakra UI: `Box`, `Container`, `VStack`, `HStack`, `Text`, `Button`, `Input`, `Textarea`
- Framer Motion: `motion`, `MotionBox`
- React Hooks: `useState`, `useEffect`
- CSS классы: `heading-premium`, `text-premium`, `minimal-card`

#### Код
```typescript
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', message: ''
  })

  const handleInputChange = (e: any) => {
    // Логика обновления формы
  }

  const handleSubmit = (e: any) => {
    // Логика отправки формы
  }
}
```

## Общие паттерны

### Анимации
Все компоненты используют единые паттерны анимаций:

```typescript
// Spring анимация
const springAnimation = {
  type: "spring",
  stiffness: 100,
  damping: 15
}

// Viewport анимация
const viewportAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
}

// Hover эффект
const hoverEffect = {
  scale: 1.05,
  rotate: 2,
  transition: { duration: 0.2 }
}
```

### CSS Классы
Все компоненты используют единые CSS классы:

```css
/* Типографика */
.heading-premium    /* Заголовки */
.text-premium      /* Основной текст */
.text-secondary    /* Вторичный текст */

/* Компоненты */
.minimal-card      /* Карточки */
.premium-button    /* Основные кнопки */
.accent-button     /* Акцентные кнопки */
.underline-hover   /* Анимированные ссылки */

/* Эффекты */
.parallax-element  /* Параллакс */
.counter-spin      /* Вращение счетчиков */
```

### Адаптивность
Все компоненты адаптивны:

```typescript
// Адаптивные размеры
fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}

// Адаптивные отступы
px={{ base: 4, md: 6 }}

// Адаптивные направления
direction={{ base: 'column', lg: 'row' }}

// Адаптивные выравнивания
align={{ base: 'center', lg: 'start' }}
```

## Переиспользуемые элементы

### Анимированные блоки
```typescript
const AnimatedBlock = ({ children, delay = 0, position = {} }) => (
  <MotionBox
    position="absolute"
    {...position}
    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ 
      type: "spring", 
      stiffness: 100, 
      damping: 15,
      delay: delay + 0.5
    }}
    whileHover={{ 
      scale: 1.05, 
      rotate: 2,
      transition: { duration: 0.2 }
    }}
  >
    {children}
  </MotionBox>
)
```

### Секция с заголовком
```typescript
const SectionWithTitle = ({ title, subtitle, children }) => (
  <VStack gap={16}>
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      textAlign="center"
    >
      <VStack gap={6}>
        <Text className="heading-premium" fontSize={{ base: '3xl', md: '4xl' }}>
          {title}
        </Text>
        <Text className="text-premium" fontSize={{ base: 'lg', md: 'xl' }}>
          {subtitle}
        </Text>
      </VStack>
    </MotionBox>
    {children}
  </VStack>
)
```

### CTA секция
```typescript
const CTASection = ({ title, subtitle, buttons }) => (
  <Box py={24} bg="var(--navy-deep)">
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
            <Text className="heading-premium" fontSize={{ base: '3xl', md: '4xl' }}>
              {title}
            </Text>
            <Text className="text-premium" fontSize={{ base: 'lg', md: 'xl' }}>
              {subtitle}
            </Text>
          </VStack>
          <HStack gap={6} flexWrap="wrap" justify="center">
            {buttons}
          </HStack>
        </VStack>
      </MotionBox>
    </Container>
  </Box>
)
```

## Производительность

### Оптимизация анимаций
- Использование `viewport={{ once: true }}` для предотвращения повторных анимаций
- `transform3d` для аппаратного ускорения
- `will-change` для анимируемых элементов

### Ленивая загрузка
- Компоненты загружаются по требованию
- Анимации запускаются только при попадании в viewport
- Оптимизация изображений

### Мемоизация
- `useMemo` для тяжелых вычислений
- `useCallback` для функций
- `React.memo` для компонентов

## Тестирование

### Unit тесты
```typescript
import { render, screen } from '@testing-library/react'
import { Header } from './Header'

test('renders header with logo', () => {
  render(<Header />)
  expect(screen.getByText('HR-ХОЛДИНГ')).toBeInTheDocument()
})
```

### Интеграционные тесты
```typescript
test('navigation works correctly', () => {
  render(<App />)
  fireEvent.click(screen.getByText('О компании'))
  expect(screen.getByText('О нашей компании')).toBeInTheDocument()
})
```

## Доступность

### ARIA метки
```typescript
<Button
  aria-label="Открыть мобильное меню"
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
>
  ☰
</Button>
```

### Клавиатурная навигация
```typescript
<Box
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick()
    }
  }}
>
  Интерактивный элемент
</Box>
```

### Семантическая разметка
```typescript
<main>
  <section aria-labelledby="hero-title">
    <h1 id="hero-title">Переосмысливаем вашу рабочую силу</h1>
  </section>
</main>
```

---

*Эта документация обеспечивает понимание структуры и использования всех компонентов проекта HR-Холдинг.*
