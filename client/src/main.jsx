import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import {BlockchainProvider} from './context/Blockchaincontext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BlockchainProvider>
  <ChakraProvider>
      <App />
    </ChakraProvider>
    </BlockchainProvider>
)
