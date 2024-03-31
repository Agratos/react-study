import { useSelector } from 'react-redux';

const GrandSonBox = () => {
    const count = useSelector(state => state.count);

    return (
        <div>
            This is GrandSonBox: {count}
        </div>
    )
}

export default GrandSonBox;