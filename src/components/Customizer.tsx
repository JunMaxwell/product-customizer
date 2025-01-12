import { AiFillCamera, AiOutlineArrowLeft } from 'react-icons/ai'
import { state } from '../store'
import { useSnapshot } from 'valtio';
import { useEffect, useState } from 'react';
import viteSvg from '/vite.svg';

interface DynamicImageProps {
    imgName: string;
}

const DynamicImage = ({ imgName }: DynamicImageProps) => {
    const [imgSrc, setImgSrc] = useState<string | undefined>();

    useEffect(() => {
        const loadImage = async () => {
            try {
                const imgModule = await import(`../assets/${imgName}.png`);
                setImgSrc(imgModule.default);
            } catch (error) {
                console.error(error);
                setImgSrc(viteSvg);
            }
        };

        loadImage();
    }, [imgName]);

    return <img src={imgSrc} alt={`brand-img`} />;
}

export const Customizer = () => {
    const colors = ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934'];
    const decals = ['react', 'three2', 'pmndrs'];
    const snap = useSnapshot(state);

    return (
        <section key="custom">
            <div className='customizer'>
                <div className='color-options'>
                    {colors.map((color) => (
                        <div key={color}
                            className='circle'
                            style={{ background: color }}
                            onClick={() => { state.selectedColor = color }}
                        >
                        </div>
                    ))}
                </div>
                <div className='decals'>
                    <div className='decals--container'>
                        {decals.map((decal) => (
                            <div key={decal}
                                className='decal'
                                onClick={() => { state.selectedDecal = decal }}>
                                <DynamicImage imgName={decal} />
                            </div>
                        ))}
                    </div>
                </div>
                <button className='share-btn'
                    style={{ background: snap.selectedColor }}
                    onClick={() => {
                        const link = document.createElement('a');
                        link.setAttribute('download', 'canvas.png');
                        link.setAttribute('href', document.querySelector('canvas')!.toDataURL().replace('image/png', 'image/octet-stream'));
                        link.click();
                    }}>
                    DOWNLOAD
                    <AiFillCamera size='1.3em' />
                </button>
                <button className='exit-btn'
                    style={{ background: snap.selectedColor }}
                    onClick={() => { state.intro = true }}
                >
                    GO BACK
                    <AiOutlineArrowLeft size='1.3em' />
                </button>
            </div>
        </section>
    )
}
