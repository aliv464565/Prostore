import loader from '@/assets/loader.gif';
import Image from 'next/image';
const Loading = () => {
    return (
        <div className="flex justify-center h-[100vh] w-[100vw] items-center">
            <Image src={loader} alt="loading..." height={150} width={150} />
        </div>
    );
};

export default Loading;
