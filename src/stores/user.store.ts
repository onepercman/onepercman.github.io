import { storageKeys } from "@/config/storage.config"
import { User } from "@/interfaces/user.interface"
import { proxyWithPersist } from "@/libs/valtio"
import { useSnapshot } from "valtio"

class UserStore {
  user?: User

  async login() {}

  logout() {
    this.user = undefined
  }
}

export const userStore = proxyWithPersist(new UserStore(), { key: storageKeys.user })

export const useUserStore = () => useSnapshot(userStore)