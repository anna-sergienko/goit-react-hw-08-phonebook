import { Helmet } from 'react-helmet';
import { HomeContainer, HomeGreeting } from '../pages/Home.styled';

export default function Home() {
  return (
    <HomeContainer>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomeGreeting>Wellcome to our service!</HomeGreeting>
    </HomeContainer>
  );
}
