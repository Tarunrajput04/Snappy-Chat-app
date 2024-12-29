import * as React from 'react';
import Header from './componenets/Header/Header.tsx';
import Footer from './componenets/Footer/Footer.tsx';
import Container from './componenets/Container/Container.tsx';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <Header/>
      <Container/>
      <Footer/>
    </>
  );
};

export default App;
