import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        DogWalkRight: {
            '0%': {
                transform: 'translateX(0px)',
            },
            '100%': {
                transform: 'translateX(500px)',
            }
        },
        DogWalkLeft: {
            '0%': {
                transform: 'translateX(0px)',
            },
            '100%': {
                transform: 'translateX(-500px)',
            }
        }
      },
      animation: {
        DogWalkRight: 'DogWalkRight 5s ease-in-out',
        DogWalkLeft: 'DogWalkLeft 5s ease-in-out',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}
export default config
