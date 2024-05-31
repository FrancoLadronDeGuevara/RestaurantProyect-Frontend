import { Container } from '@mui/material'
import Banner from './Banner/Banner'
import BestPrices from './BestPrices/BestPrices'
import Offerts from './Offerts/Offerts'

const Home = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <Banner/>
      <BestPrices/>
      <Offerts/>
    </Container>
  )
}

export default Home