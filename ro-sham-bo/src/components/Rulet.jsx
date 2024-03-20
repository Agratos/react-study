import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Rulet = ({bet ,handleMoney, setIsOpen, setIsStart}) => {
    const canvasRef = useRef(null);
    const product = [
        {name: '1배', value: 1, color: '#dc0936'},
        {name: '2배', value: 2, color: '#e6471d'},
        {name: '3배', value: 3, color: '#f7a416'},
        {name: '0배', value: 0, color: '#efe61f'},
        {name: '1배', value: 1, color: '#dc0936'},
        {name: '2배', value: 2, color: '#e6471d'},
        {name: '3배', value: 3, color: '#f7a416'},
        {name: '25배', value: 25, color: '#e7167b'},
    ];
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const makeRulet = () => {
            const [cw, ch] = [canvas.width / 2, canvas.height / 2];
            const arc = Math.PI / (product.length / 2);
      
            for (let i = 0; i < product.length; i++) {
                ctx.beginPath();
                ctx.fillStyle = product[i].color;
                ctx.moveTo(cw, ch);
                ctx.arc(cw, ch, cw, arc * (i - 1), arc * i);
                ctx.fill();
                ctx.closePath();
            }
      
            ctx.fillStyle = "#fff";
            ctx.font = "18px Pretendard";
            ctx.textAlign = "center";
      
            for (let i = 0; i < product.length; i++) {
                const angle = (arc * i) + (arc / 2);
        
                ctx.save();
        
                ctx.translate(
                    cw + Math.cos(angle) * (cw - 50),
                    ch + Math.sin(angle) * (ch - 50),
                );
        
                ctx.rotate(angle + Math.PI / 2);
        
                product[i].name.split(" ").forEach((text, j) => {
                    ctx.fillText(text, 0, 30 * j);
                });
        
                ctx.restore();
            }
        }

        const rotate = () => {
            canvas.style.transform = `initial`;
            canvas.style.transition = `initial`;
      
            setTimeout(() => {
                const ran = Math.floor(Math.random() * product.length);
        
                const arc = 360 / product.length;
                const rotate = (ran * arc) + 3600 + (arc * 3) - (arc / 4);
        
                canvas.style.transform = `rotate(-${rotate}deg)`;
                canvas.style.transition = `2s`;
        
                setTimeout(() => {
                    switch(product[ran].value){
                        case 0: 
                            alert(`꽝! 다음번에`)
                            handleMoney(-bet)
                            break;
                        case 1:
                            alert(`축하합니다 1배 당첨 되었습니다!`) ;
                            handleMoney(bet)
                            break;
                        case 2:
                            alert(`축하합니다 2배 당첨 되었습니다!`);
                            handleMoney(bet * 2)
                            break;
                        case 3:
                            alert(`축하합니다 3배 당첨 되었습니다!`);
                            handleMoney(bet * 3)
                            break;
                        case 25:
                            alert(`잭! 팟! 25배 당첨 !`);
                            handleMoney(bet * 25)
                            break;
                    }  
                    setIsOpen(false);
                    setIsStart(true);
                }, 2000);
            }, 1);

        };

        makeRulet();
        rotate();
    }, [])

    return (
        <Wrapper>
            <CanvasWrapper>
                <Triangle />
                <Canvas ref={canvasRef} width={500} height={500} />
                {/* <Button onClick={() => setIsOpen(false)}>
                    확인
                </Button> */}
            </CanvasWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: white;
`;
const CanvasWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 500px;
    height: 500px;
`;
const Triangle = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    border-left: 15px solid transparent; 
    border-right: 15px solid transparent;
    border-bottom: 30px solid black;
    top: calc(50% - 270px);
    rotate: 180deg;
    z-index: 10;
`;
const Canvas = styled.canvas``;
const Button = styled.button`
    background-color: #46e046;
    width: 200px;
    padding: 16px 4px;
    margin-top: 24px;
    font-size: 20px;
    font-weight: bolder;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`;

export default Rulet;