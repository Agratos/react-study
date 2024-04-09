import { create } from "zustand";

const initState = {
    platform: ''
}

const platformStore = create((set) => ({
    ...initState,

    setPlatform: (platform) => set(() => ({ platform })),
}))

export default platformStore