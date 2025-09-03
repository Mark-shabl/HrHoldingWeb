# Дизайн-система HR-Холдинг 🎨

## Обзор

Дизайн-система HR-Холдинг основана на принципах строгого минимализма, премиального качества и академической элегантности. Система обеспечивает консистентность, масштабируемость и высокое качество пользовательского опыта.

## Философия дизайна

### Ключевые принципы
1. **Строгий минимализм** - убираем лишнее, оставляем суть
2. **Премиальность** - качество в каждой детали
3. **Академическая элегантность** - сдержанная красота
4. **Цифровой подход** - современные технологии и методы

### Вау-эффекты
- Нетривиальная анимация и микровзаимодействия
- Нестандартная компоновка блоков
- Отказ от предсказуемых секций
- Асимметричные и наложенные элементы

## Цветовая палитра

### Основные цвета
```css
/* Бежевые оттенки */
--beige-light: #E6DAC8;    /* Светлый пыльный беж */
--beige-dusty: #D5BDA8;    /* Теплый средний беж */
--beige-warm: #A38F78;     /* Темный, почти серо-бежевый */
--beige-dark: #8B7355;     /* Самый темный беж */

/* Акцентные цвета */
--navy-deep: #0A2540;      /* Глубокий темно-синий */
--charcoal: #1A1A1A;       /* Угольно-черный */
--terracotta: #C45C2A;     /* Терракотовый акцент */

/* Нейтральные цвета */
--white-pure: #FFFFFF;     /* Чистый белый */
--beige-light: #F8F5F0;    /* Слоновая кость */
--gray-light: #E5E5E5;     /* Светло-серый */
--gray-medium: #999999;    /* Средне-серый */
--gray-dark: #666666;      /* Темно-серый */
```

### Использование цветов
- **Основной фон**: `var(--beige-light)`
- **Вторичный фон**: `var(--beige-dusty)`
- **Текст**: `var(--navy-deep)`, `var(--gray-medium)`, `var(--gray-dark)`
- **Акценты**: `var(--terracotta)` для интерактивных элементов
- **Темные секции**: `var(--navy-deep)`

## Типографика

### Шрифты
```css
/* Заголовки */
font-family: 'Bebas Neue', sans-serif;

/* Основной текст */
font-family: 'Inter', sans-serif;
```

### Размеры
```css
/* Заголовки */
.heading-premium {
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1.1;
}

/* Основной текст */
.text-premium {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 1.6;
}

/* Вторичный текст */
.text-secondary {
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  line-height: 1.5;
}
```

### Адаптивные размеры
```css
/* Мобильные устройства */
font-size: 14px;

/* Планшеты */
font-size: 16px;

/* Десктоп */
font-size: 18px;
```

## Компоненты

### Карточки
```css
.minimal-card {
  background: var(--white-pure);
  border: 1px solid var(--beige-warm);
  border-radius: 8px;
  box-shadow: var(--shadow-subtle);
  padding: 24px;
  transition: all 0.3s ease;
}

.minimal-card:hover {
  box-shadow: var(--shadow-medium);
  transform: translateY(-2px);
}
```

### Кнопки
```css
/* Основная кнопка */
.premium-button {
  background: var(--navy-deep);
  color: var(--beige-light);
  border: 2px solid var(--navy-deep);
  border-radius: 4px;
  padding: 12px 24px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.premium-button:hover {
  background: var(--beige-light);
  color: var(--navy-deep);
}

/* Акцентная кнопка */
.accent-button {
  background: var(--terracotta);
  color: var(--beige-light);
  border: 2px solid var(--terracotta);
  border-radius: 4px;
  padding: 12px 24px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.accent-button:hover {
  background: var(--beige-light);
  color: var(--terracotta);
}
```

### Навигация
```css
.underline-hover {
  position: relative;
  color: var(--navy-deep);
  text-decoration: none;
  transition: color 0.3s ease;
}

.underline-hover:hover {
  color: var(--terracotta);
}

.underline-hover::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--terracotta);
  transition: width 0.3s ease;
}

.underline-hover:hover::after {
  width: 100%;
}
```

## Анимации

### Основные анимации
```css
/* Появление снизу вверх */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Появление слева */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Появление справа */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Вращение счетчиков */
@keyframes counterSpin {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}

/* Расширение подчеркивания */
@keyframes underlineExpand {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
```

### Framer Motion анимации
```typescript
// Spring анимация
const springAnimation = {
  type: "spring",
  stiffness: 100,
  damping: 15
}

// Hover эффекты
const hoverEffect = {
  scale: 1.05,
  rotate: 2,
  transition: { duration: 0.2 }
}

// Viewport анимации
const viewportAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
}
```

## Сетка и отступы

### Контейнеры
```css
/* Основной контейнер */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Адаптивные отступы */
@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 12px;
  }
}
```

### Отступы
```css
/* Вертикальные отступы секций */
.section-padding {
  padding: 96px 0; /* 24 * 4 */
}

/* Адаптивные отступы */
@media (max-width: 768px) {
  .section-padding {
    padding: 64px 0; /* 16 * 4 */
  }
}
```

## Тени

### Уровни теней
```css
:root {
  --shadow-subtle: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-medium: 0 4px 12px rgba(0, 0, 0, 0.15);
  --shadow-strong: 0 8px 24px rgba(0, 0, 0, 0.2);
}
```

## Градиенты

### Цветовые градиенты
```css
:root {
  --gradient-beige: linear-gradient(135deg, var(--beige-light) 0%, var(--beige-dusty) 100%);
  --gradient-navy: linear-gradient(135deg, var(--navy-deep) 0%, var(--charcoal) 100%);
  --gradient-accent: linear-gradient(135deg, var(--terracotta) 0%, #B84A1A 100%);
}
```

## Адаптивность

### Breakpoints
```css
/* Мобильные устройства */
@media (max-width: 480px) { }

/* Планшеты */
@media (max-width: 768px) { }

/* Небольшие десктопы */
@media (max-width: 1024px) { }

/* Большие десктопы */
@media (max-width: 1200px) { }
```

### Адаптивная типографика
```css
/* Заголовки */
.heading-responsive {
  font-size: clamp(1.5rem, 4vw, 3rem);
}

/* Основной текст */
.text-responsive {
  font-size: clamp(1rem, 2.5vw, 1.125rem);
}
```

## Состояния

### Hover состояния
- Легкое увеличение масштаба (1.05)
- Изменение цвета на акцентный
- Появление тени
- Плавные переходы (0.3s ease)

### Focus состояния
- Контур в акцентном цвете
- Увеличение контрастности
- Доступность для клавиатуры

### Active состояния
- Уменьшение масштаба (0.95)
- Изменение цвета фона
- Тактильная обратная связь

## Доступность

### Контрастность
- Минимальный контраст 4.5:1 для обычного текста
- Минимальный контраст 3:1 для крупного текста
- Соответствие WCAG 2.1 AA

### Навигация
- Поддержка клавиатуры
- Логический порядок табуляции
- Видимые индикаторы фокуса

### Семантика
- Правильная структура заголовков
- Альтернативный текст для изображений
- ARIA метки для интерактивных элементов

## Производительность

### Оптимизация анимаций
- Использование `transform` и `opacity`
- `will-change` для анимируемых элементов
- `transform3d` для аппаратного ускорения

### Ленивая загрузка
- `viewport={{ once: true }}` для Framer Motion
- Intersection Observer для анимаций
- Оптимизация изображений

## Инструменты

### CSS
- CSS Variables для управления темой
- Flexbox и Grid для раскладки
- Custom Properties для динамических значений

### JavaScript
- Framer Motion для сложных анимаций
- React Hooks для состояния
- TypeScript для типизации

### Разработка
- ESLint для качества кода
- Prettier для форматирования
- Vite для быстрой сборки

---

*Эта дизайн-система обеспечивает консистентность, масштабируемость и высокое качество пользовательского опыта во всех компонентах HR-Холдинг.*
