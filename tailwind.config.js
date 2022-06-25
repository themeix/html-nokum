module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  darkMode: false,
  corePlugins: {
    container: true
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({

        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
          '@screen 2xl': {
            maxWidth: '1600px',
          },


        }

      })
    }
  ],
  theme: {

    extend: {
      container: {
        center: true,
        padding: '1rem',
      },

      colors: {
        blue: {
          800: '#4D4C7D',
          900: '#363062',
          100: 'rgba(77, 76, 125, 0.1)',
        },

        purple: {
          300: '#827397',

        },
        orange: {
          300: '#E9D5CA',

        },
        stone: {
          900: '#2C2828',
          800: '#5C5C5C',

        },


        gray: {
          100: '#5C5C5C',
          200: '#ededf2',
          300: '#ADADAD',
        },
        black: {
          100: '#2C2828',
        },

        
      },

      backgroundImage: {
        "curved-blue-gradient": "url(/imagenes/precios/curved-blue-gradient-bg.svg)",
        "blue-cyan-gradient": "linear-gradient(90deg, #C84E89 0%, #F15F79 100%);",
        "border-gradient": "linear-gradient(90deg, #C84E89 0%, #F15F79 100%);",

      },

      placeholderColor: theme => theme('colors'),
      placeholderColor: {
        "coolGray-600": "#4B5563",
      },
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),

      }),
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',

      },

      borderRadius: {
        'none': '0',
        DEFAULT: '0',
        'sm': '0.375rem',
        'md': '8px',
        '4': '16px',

      },

      fontFamily: {
        Worksans: [
          '"Work Sans",sans-serif',
        ],
        Crimson: [
          '"Crimson Text",serif',

        ],
      },

      fontSize: {
        '3xl': '2rem',
        '4xl': '2.5rem',
        '6xl': '4rem',
      },
      boxShadow: {
        base: ' 0px 1px 3px 0px #0000001A',
        sm: ' rgb(17 17 26 / 10%) 0px 4px 16px, rgb(17 17 26 / 5%) 0px -11px 32px',
        none: 'none',




      },
      maxWidth: {
        'screen-2xl': '1600px',
        'screen-3xl': '1800px',
        '20': '80px',
        '45': '180px',
        '387.5': '1550px',
      },
      maxHeight: {
        '80': '320px',
        '50.75': '203px',
        '143.75': '575px',
        '159.5': '638px',
      },
      minWidth: {


      },
      width: {
        '12.5': '3.125em',
        '51.25': '205px',
        '45': '180px',
        '113': '452px',
        '110': '110%',

      },
      height: {
        '12.5': '3.125em',
        '15': '3.75em',
        '50.5': '12.625em',
        '79': '19.75em',
        '142': '35.5em',
        '97.5': '390px'

      },
      scale: {
        '25': '.25',
      },
      zIndex: {
        '0': 0,
        '1': 1,
        '2': 2,
        '100': 100,
        'auto': 'auto',
        '999': 999,
        'auto': 'auto',
      },

      spacing: {
        '5.5': '22px',
        '10.5': '42px',
        '15': '60px',
        '27.5': '110px',
        '32.5': '130px',
        '38': '152px',
        '50': '200px',
        '67.5': '270px',
        '68.75': '275px',
        '72': '288px',
        '75': '300px',


      },
      opacity: {
        '10': '10%',
      },

      borderOpacity: {
        '50': '.5',

      },
      lineHeight: {
        '160': '160%',


      }
    },
  },
  // Other stuff
};