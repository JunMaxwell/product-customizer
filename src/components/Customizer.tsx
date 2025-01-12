import { AiFillCamera, AiOutlineArrowLeft } from 'react-icons/ai'
import { state } from '../store'
import { useSnapshot } from 'valtio';

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
                                className='decal'>
                                <img src={decal + '_thump.png'} alt={`brand-${decal}`} />
                            </div>
                        ))}
                    </div>
                </div>
                <button className='share-btn' style={{ background: snap.selectedColor }}>
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
