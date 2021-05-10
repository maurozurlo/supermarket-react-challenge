import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*{
  box-sizing: border-box;
}

:root{
  --white: #fff;
  --grey-light: #e0e0e0;
  --grey: #f5f5f5;
  --grey-mid: #939393;
  --blue-light: #1daafc;
  --blue-light-2: #168fd4;
  --blue: #1587c9;
  --overlay: rgba(234, 234, 234, 0.65);
}

body {
  margin: 0;
  font-family: 'Dosis', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Header */

header{
  text-align: center;
  margin: 0 auto;
  min-height: 130px;
  padding-top: 4em;
}

header h1{
  font-size: 30px;
  margin: 0;
}

header small{
  color: var(--grey-mid);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
}

button{
  transition: 0.15s ease-in all;
}

.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #09d3ac;
}
`
