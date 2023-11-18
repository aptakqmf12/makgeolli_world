import { createGlobalStyle } from "styled-components";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const GlobalStyle = createGlobalStyle`
:root {
	--font: "#000";
    --background: #fff;
    --onBackground: #fff;
    --surface: #999;
    --onSurface: #fff;
    --primary: #6200ee;
    --primaryValient: #3700b3;
    --onPrimary: #fff;
    --secondary: #03dac6;
    --secondaryValient: #018786;
    --onSecondary: #fff;
    --error: #b00020;
    --onError: #fff;
}

[data-theme='dark'] {
	--font: #fff;
    --background: #434343;
    --onBackground: #fff;
    --surface: #b0b0b0;
    --onSurface: #fff;
    --primary: #bb86fc;
    --primaryValient: #3700b3;
    --onPrimary: #000;
    --secondary: #03dac6;
    --secondaryValient: #03dac6;
    --onSecondary: #000;
    --error: #cf6679;
    --onError: #000;
}


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	color: var(--font);
  box-sizing: border-box;
	
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
	text-decoration: none;
	color: var(--primary)
}


`;
