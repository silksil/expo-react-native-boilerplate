const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
}

const PRIMARY = {
  50: '#f5f3ff',
  100: '#ede9fe',
  200: '#ddd6fe',
  300: '#c4b5fd',
  400: '#a78bfa',
  500: '#8b5cf6',
  600: '#7c3aed',
  700: '#6d28d9',
  800: '#5b21b6',
  900: '#4c1d95',
}

const SECONDARY = {
  50: '#eef2ff',
  100: '#e0e7ff',
  200: '#c7d2fe',
  300: '#a5b4fc',
  400: '#818cf8',
  500: '#6366f1',
  600: '#4f46e5',
  700: '#4338ca',
  800: '#3730a3',
  900: '#312e81',
}

const INFO = {
  50: '#f0f9ff',
  100: '#e0f2fe',
  200: '#bae6fd',
  300: '#7dd3fc',
  400: '#38bdf8',
  500: '#0ea5e9',
  600: '#0284c7',
  700: '#0369a1',
  800: '#075985',
  900: '#0c4a6e',
}

const SUCCESS = {
  50: '#f0fdf4',
  100: '#dcfce7',
  200: '#bbf7d0',
  300: '#86efac',
  400: '#4ade80',
  500: '#22c55e',
  600: '#16a34a',
  700: '#15803d',
  800: '#166534',
  900: '#14532d',
}

const WARNING = {
  50: '#fff7ed',
  100: '#ffedd5',
  200: '#fed7aa',
  300: '#fdba74',
  400: '#fb923c',
  500: '#f97316',
  600: '#ea580c',
  700: '#c2410c',
  800: '#9a3412',
  900: '#7c2d12',
}

const ERROR = {
  50: '#fff1f2',
  100: '#ffe4e6',
  200: '#fecdd3',
  300: '#fda4af',
  400: '#fb7185',
  500: '#f43f5e',
  600: '#e11d48',
  700: '#be123c',
  800: '#9f1239',
  900: '#881337',
}

const COMMON = {
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
}

const colors = (colorScheme: 'light' | 'dark') => {
  const light = {
    ...COMMON,
    background: PRIMARY,
    gray: GREY,
  } as const

  const dark = {
    background: PRIMARY,
    ...COMMON,
    gray: GREY,
  } as const

  return colorScheme === 'light' ? light : dark
}

export default colors

/**
 * Define theme for react navigation
 * https://reactnavigation.org/docs/themes/
 */
export const navigationLightTheme = {
  dark: false,
  colors: {
    primary: PRIMARY['500'],
    background: GREY['100'],
    card: GREY['100'],
    text: PRIMARY['500'],
    border: GREY['300'],
    notification: WARNING['500'],
  },
}

export const navigationDarkTheme = {
  dark: true,
  colors: {
    primary: PRIMARY['500'],
    background: GREY['900'],
    card: GREY['900'],
    text: PRIMARY['500'],
    border: GREY['700'],
    notification: WARNING['500'],
  },
}
