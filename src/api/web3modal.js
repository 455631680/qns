import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'

import { getNetwork, getNetworkId, isReadOnly } from '../ui'
import { setup as setupENS } from '../apollo/mutations/ens'
import {
  isReadOnlyReactive,
  networkIdReactive,
  networkReactive,
  web3ProviderReactive,
} from '../apollo/reactiveVars'

const INFURA_ID =
  window.location.host === 'app.ens.domains'
    ? '90f210707d3c450f847659dc9a3436ea'
    : '58a380d3ecd545b2b5b3dad5d2b18bf0'

const PORTIS_ID = '57e5d6ca-e408-4925-99c4-e7da3bdb8bf5'

let provider
const option = {
  cacheProvider: true, // optional
  network: 'binance',
  theme: {
    background: '#D7ECE3',
    main: '#379070',
    secondary: 'rgb(136, 136, 136)',
    border: '#47C799',
    hover: '#47C799',
  },
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          56: 'https://bsc-dataseed.binance.org/',
        },
        network: 'binance',
      },
    },
    walletlink: {
      package: () => import('walletlink'),
      packageFactory: true,
      options: {
        appName: 'Ethereum name service',
        jsonRpcUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
      },
    },
    mewconnect: {
      package: () => import('@myetherwallet/mewconnect-web-client'),
      packageFactory: true,
      options: {
        infuraId: INFURA_ID,
        description: ' ',
      },
    },
    portis: {
      package: () => import('@portis/web3'),
      packageFactory: true,
      options: {
        id: PORTIS_ID,
      },
    },
    torus: {
      package: () => import('@toruslabs/torus-embed'),
      packageFactory: true,
    },
  },
}

let web3Modal
export const connect = async () => {
  try {
    let web3Modal = new Web3Modal(option)
    provider = await web3Modal.connect()
    await setupENS({
      customProvider: provider,
      reloadOnAccountsChange: false,
      enforceReload: true,
    })
    return provider
  } catch (e) {
    if (e !== 'Modal closed by user') {
      throw e
    }
  }
}

export const disconnect = async function () {
  if (web3Modal) {
    await web3Modal.clearCachedProvider()
  }

  // Disconnect wallet connect provider
  if (provider && provider.disconnect) {
    provider.disconnect()
  }
  await setupENS({
    reloadOnAccountsChange: false,
    enforceReadOnly: true,
    enforceReload: false,
  })

  isReadOnlyReactive(isReadOnly())
  web3ProviderReactive(null)
  networkIdReactive(await getNetworkId())
  networkReactive(await getNetwork())
}

export const setWeb3Modal = (x) => {
  web3Modal = x
}