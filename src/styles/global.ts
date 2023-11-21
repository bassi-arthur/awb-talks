import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --white: #ffffff;

  --gray-50: #e1e1e6;
  --gray-100: #e1e1e6;
  --gray-300: #a8a8b3;
  --gray-800: #29292e;
  --gray-850: #1f2729;
  --gray-900: #121214;

  --cyan-500: #61dafb;
  --yellow-500: #eba417;
}

@media (min-width:1080px){
    html{
        font-size:93.75%;
    }
}

@media (min-width:720px){
    html{
        font-size:87.5%;
    }
}

body {
    background-color: var(--gray-900);
    color: var(--white);
}

body,
input,
textarea,
select,
button {
  font: 400 1rem "Roboto", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

body::-webkit-scrollbar {
  width: 0.250rem;
}
 
body::-webkit-scrollbar-track {
  -webkit-box-shadow: none;
}
 
body::-webkit-scrollbar-thumb {
  background-color: var(--gray-300);
  outline: none;
  border-radius: 8px;
}

`;
