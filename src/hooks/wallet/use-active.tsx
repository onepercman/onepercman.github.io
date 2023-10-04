import { ConnectorIds, Wallet, connectors } from "@/libs/wagmi"
import { useClient, useDialogManager, useUser } from "@/models/root"
import { isDesktop } from "react-device-detect"
import toast from "react-hot-toast"
import { UserRejectedRequestError } from "viem"
import { useAccount, useConnect, useDisconnect } from "wagmi"

export function useActive() {
  const { isConnecting } = useAccount()
  const { chain, walletClient } = useClient()
  const { logout } = useUser()
  const { connectAsync } = useConnect()
  const { disconnectAsync } = useDisconnect()
  const dialogManager = useDialogManager()

  async function connect2ConnectorId(connectorId: ConnectorIds) {
    try {
      const connector = connectors[connectorId]
      await connectAsync({
        connector,
        chainId: chain.id,
      })
    } catch (err) {
      if (err instanceof UserRejectedRequestError) {
        toast.error("You have rejected the connect request")
      }
    }
  }

  function connect(wallet: Wallet) {
    dialogManager.setConnect(false)
    if (wallet.injected) {
      connect2ConnectorId(wallet.connectorId)
    } else if (wallet.connectorId === ConnectorIds.WalletConnect) {
      connect2ConnectorId(wallet.connectorId)
    } else if (isDesktop) {
      // In Desktop
      if (typeof window.ethereum !== "undefined" && window.ethereum[wallet.etherId]) {
        connect2ConnectorId(wallet.connectorId)
      } else if (wallet.mobileOnly) {
        connect2ConnectorId(ConnectorIds.WalletConnect)
      } else {
        window.open(wallet.downloadUrl, "_blank", "noopener noreferrer")
      }
    } else {
      // In Mobile
      if (typeof window.ethereum !== "undefined") {
        connect2ConnectorId(wallet.connectorId)
      } else if (wallet.deepLink) {
        window.open(wallet.deepLink, "_blank", "noopener noreferrer")
      } else {
        connect2ConnectorId(ConnectorIds.WalletConnect)
      }
    }
  }

  async function disconnect() {
    disconnectAsync()
    logout()
  }

  function openConnectDialog() {
    dialogManager.setConnect(true)
  }

  return {
    account: walletClient?.account.address,
    isConnecting,
    connect,
    openConnectDialog,
    disconnect,
  }
}