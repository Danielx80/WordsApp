import { RouterApp } from './routes/RouterApp';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { ContextProvider } from './context/ContextProvider';
import { QueryClientProvider, QueryClient } from 'react-query'
import { Styles } from './interface';
import { useEffect, useState } from 'react';
import configStyles from './json/configStyles.json'
import { TableContextProvider } from './context/TableContextProvider';

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;


export const App = () => {

  const [styleConfig, setStyleConfig] = useState({})

  const setStyles = (data: Styles) => {

    let { colors, fontSizes, fonts, spaces } = Object.assign(data)
    setStyleConfig({ ...colors, ...fontSizes, ...fonts, ...spaces })

  }

  useEffect(() => {
    setStyles(configStyles)
  }, [])

  return (
    <QueryClientProvider client={new QueryClient()}>
      <Auth0Provider
        clientId={clientId}
        domain={domain}
        redirectUri={window.location.origin}
        useRefreshTokens={true}
      // TODO: recordar quitar el comentario 
      // audience="https://dev-znfmr804n76vwx88.us.auth0.com/api/v2/"
      >
        <ContextProvider>
          <BrowserRouter>
            <RouterApp />
          </BrowserRouter>
        </ContextProvider>
      </Auth0Provider>
    </QueryClientProvider>
  )
}
