import { Container } from '@mui/material'
import Banner from './Banner/Banner'
import BestPrices from './BestPrices/BestPrices'
import Offerts from './Offerts/Offerts'
import ProductsCategories from './ProductsCategories/ProductsCategories'
import Newsletter from './Newsletter/Newsletter'
import Delivery from './Delivery/Delivery'

const Home = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <Banner/>
      <BestPrices/>
      <Offerts/>
      <ProductsCategories/>
      <div id="delivery-section">
        <Delivery/>
      </div>
      <Newsletter/>
    </Container>
  )
}

export default Home