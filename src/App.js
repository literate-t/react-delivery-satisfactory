import { Global, css } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import './App.css';
import Router from './Router';

// const Container = styled.div`
//   background-color: var(--primary);
// `;

function App() {
  return (
    <RecoilRoot>
      <Global
        styles={css`
          @font-face {
            font-family: 'DM Sans';
            src: url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap'),
              format('woff2');
          }
        `}
      />
      <Router />
    </RecoilRoot>
  );
}

export default App;
