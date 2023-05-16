import "../styles/globals.scss";
import Layout from "../components/Layouts/Layout";
import AlertTemplate from "react-alert-template-basic";
import { transitions, positions, Provider as AlertProvider } from "react-alert";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};

/**
 * Renders a component wrapped in a layout and a provider for displaying alerts.
 *
 * @param {Object} props - The props object containing Component and pageProps.
 * @param {Object} props.Component - The component to render.
 * @param {Object} props.pageProps - The props to pass to the component.
 * @return {JSX.Element} A JSX element containing the rendered component.
 */
function MyApp({ Component, pageProps }: any): JSX.Element {
  return (
    <Layout>
      <AlertProvider template={AlertTemplate} {...options}>
        <Component {...pageProps} />
      </AlertProvider>
    </Layout>
  );
}

export default MyApp;
