import  React from 'react';
export const themes = {
    light: {
        background: '#eeeeee',
    },
    dark: {
        background: '#222222',
    },
};
// export const TodosDispatch = React.createContext({'a':'a'} );
export const ThemeContext = React.createContext(
    'red' // 默认值
);
export const LocalContext = React.createContext(
    'LoaclIMG' // 默认值
);