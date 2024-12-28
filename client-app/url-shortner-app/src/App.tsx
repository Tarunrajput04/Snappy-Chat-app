import * as React from 'react';
import Header from './componenets/Header/header';
import Footer from './componenets/Footer/footer';
import Container from './componenets/Container/Container';

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
