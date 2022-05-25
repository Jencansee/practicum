import { ScreenContainer } from '../components/ScreenContainer'
import Article from '../components/Article'


export default function Page404 () {
	return(
	  <ScreenContainer>
	    <Article style={{ textAlign: 'center'}}>
	      <h1>404</h1>
	      <p>
	        We couldn’t find what you were looking for.
	      </p>
	    </Article>
	  </ScreenContainer>
	)
}