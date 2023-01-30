import { NativeBaseProvider, extendTheme } from 'native-base'
import colorModeManager from './colorModeManager'
import typography from './typography'
import colors from './colors'
import radii from './radii'
import components from './overrides'
import useColorScheme from 'src/hooks/useColorScheme'

type Props = {
  children: React.ReactNode
}

export default function ThemeProvider({ children }: Props) {
  const scheme = useColorScheme()
  const customTheme = extendTheme({
    components: components,
    radii,
    colors: colors(scheme),
    ...typography,
    config: {
      useSystemColorMode: true,
    },
  })

  return (
    <NativeBaseProvider theme={customTheme} colorModeManager={colorModeManager}>
      {children}
    </NativeBaseProvider>
  )
}
