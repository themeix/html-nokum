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
        '3xl': '2rem',
        '4xl': '2.5rem',
        '6xl': '4rem',
       },
      boxShadow: {
        base:' 0px 1px 3px 0px #0000001A',
        none: 'none',

      },
      maxWidth: {      
      
        '1800': '1800px',
        '143.75': '575px',    
        '307.5': '1590px',       
        '20': '80px',
      },
      maxHeight: {
        '80': '320px',
        '50.75': '203px',
        '143.75': '575px',
      },
      minWidth: {
        '82': '595px',
        
      },
      width: {
        '12.5': '3.125em',      
        '51.25': '205px',
      
        '113': '452px',
       
      },
      height: {
        '12.5': '3.125em',
        '15': '3.75em',
        '50.5': '12.625em',     
        '79': '19.75em',
        '142': '35.5em'
     
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
        '67.5': '270px',
        '23.5': '94px',
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
