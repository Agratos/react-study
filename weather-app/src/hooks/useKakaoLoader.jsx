import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk';

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: '2efe462d6bb5389ecb4a778551f6a0d2',
    libraries: ['clusterer', 'drawing', 'services'],
  })
}