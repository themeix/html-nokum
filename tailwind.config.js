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
            maxWidth: '610px',
          },
          '@screen md': {
            maxWidth: '750px',
          },
          '@screen lg': {
            maxWidth: '1000px',
          },
          '@screen xl': {
            maxWidth: '1230px',
          },
          '@screen 2xl': {
            maxWidth: '1700px', 
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
        primary:{
          100: '#363062',
        },
        gray:{
          100: '#5C5C5C',
          200: '#ededf2',
        },
        green:{
          100: '#4D4C7D',
          200: '#E9D5CA',
          300: '#827397',
        },
        black:{
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
        "coolGray-600":"#4B5563",
      },
      borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),
        'yellow-400': '#FACC15',
        'yellow-300': '#FDE047',
       
       }),
       borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
       '3': '3px',
        '4': '4px',
       '5': '5px',
       '6': '6px',
       '8': '8px',
       '12': '12px',
       '30': '30px',
      },
     
      borderRadius: {
        'none': '0',
        DEFAULT: '0',
        'sm': '0.375rem',
        'md': '8px',
        '4': '16px',

      },
      
      
      fontFamily: {
        Inter: [
          '"Inter",sans-serif',
        ],
        Manrope: [
          '"Manrope",sans-serif',
          
        ],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
         'base': '1rem',
         '4xl': '32px',
         '5xl': '40px',
         '6xl': '48px',
         '7xl': '64px',
       },
      boxShadow: {
        base:' 0px 1px 3px 0px #0000001A',
        none: 'none',

       

      },
      maxWidth: {
        '62.2': '200px',
        '1230': '1230px',
        '75': '300px',
        '1800': '1800px',
        '143.75': '575px',
      },
      maxHeight: {
        '80': '320px',
        '50.75': '203px',
      },
      minWidth: {
        '82': '595px',
      },
      width: {
        '113': '452px',
        '12.5': '50px',
        '75': '300px',
        '15%': '15%',
        
      },
      height: {
        '15': '3.75rem',
        '12.5': '50px',
        '50.75': '203px',
        '143.75': '575px',
        
        
       },
       scale: {
       '25': '.25',
      },
      zIndex: {
        '0': 0,
        '1': 1,
        '2': 2,
        'auto': 'auto',
      },
      inset: {
        '45': "180px",
       

      },
      spacing: {
        '5.5': '22px',
        '10.5': '42px',
        '27.5': '110px',
        '30': '110px',
        '15': '60px',
        '50': '200px',
        '75': '300px',
        '32.5': '130px',
        '38': '152px',
        '16%': '16%',
        '21%': '21%',
        '5%': '5%',
      },
      opacity: {
        '10': '10%',
       },
       
       borderOpacity: {
              '50': '.5',
                
                },
       lineHeight: {
        '160': '160%',
        '13': '13px',
        


        
 
       }
    },
  },
  // Other stuff
};
