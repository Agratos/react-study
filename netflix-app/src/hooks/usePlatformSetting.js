import { useEffect } from "react";

import platformStore from "../store/platformStore";

const usePlatformSetting = () => {
    const setPlatform = platformStore((state) => state.setPlatform)
    // 플랫폼 확인
    useEffect(() => {
        const handleResize = () => {
            const platformType = window.innerWidth <= 464 ? 'mobile' : 'pc'
            setPlatform(platformType);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
}

export default usePlatformSetting;