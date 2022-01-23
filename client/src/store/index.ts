import { createContext } from 'react';

type themeContextTypes = {
	theme: string;
	setTheme: (name: string) => void;
};

const themeContext = createContext<themeContextTypes>({
	theme: 'dark',
	setTheme: () => {},
});

export default themeContext;
