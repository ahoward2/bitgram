import Image from 'next/image';


type Props = {
    img: string;
    imgWidth: number;
    imgHeight: number;
}


const HeroGraphic = ({ img, imgWidth, imgHeight }: Props) => {
    return (
        <>
        <Image
            src={img}
            alt="Hero Graphic"
            width={imgWidth}
            height={imgHeight}
        />
        </>
    )
}

export default HeroGraphic;