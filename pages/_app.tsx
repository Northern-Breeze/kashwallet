import '../styles/globals.scss'
import Layout from '../components/Layouts/Layout';
import AlertTemplate from 'react-alert-template-basic'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

function MyApp({ Component, pageProps }: any) {
  return (
    <Layout>
      <AlertProvider template={AlertTemplate} {...options}>
        <Component {...pageProps} />
      </AlertProvider>
    </Layout>
  )
}

export default MyApp
