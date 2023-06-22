import Market1 from '../../images/nasdaq.png'
import Market2 from '../../images/nyse.png'
import Market3 from '../../images/dow.png'
import Market4 from '../../images/snp500.png'

export default function Markets(){
    const data = [
        {id: 4, source: Market1.src},
        {id: 5, source: Market2.src},
        {id: 6, source: Market3.src},
        {id: 7, source: Market4.src}
    ]
    return <div className="flex flex-col h-[200px] my-12 w-full mx-auto items-center text-center">
        <h1 className='text-3xl font-bold mb-12'>Markets</h1>
        <div className="flex flex-col md:flex-row items-center justify-center mx-auto">
            {data.map((element, index) => (
                <div className='mx-12'>
                    <img src = {element.source} className='w-max h-[50px] lg:h-[100px]'/>
                </div>
            ))}
        </div>

    </div>
}