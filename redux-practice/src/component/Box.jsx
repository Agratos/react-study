import { useSelector } from 'react-redux';

const Box = () => {
    const count = useSelector(state => state.count);

    return (
        <div>
            This is box: {count}
        </div>
    )
}

export default Box;