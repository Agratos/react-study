import { create } from "zustand";

const initState = {
    platform: 'pc'
}

const platformStore = create((set) => ({
    ...initState,

    setPlatform: (platform) => set(() => ({ platform })),
}))

export default platformStore