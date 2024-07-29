import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

import LottieAnimation from '../components/LottieAnimation';
import HexagonLottie from '../components/HexagonLottie';
import Link from 'next/link';

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  firstImage: ImageProps;
  secondImage: ImageProps;
  thirdImage: ImageProps;
};

export type Header127Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header127 = (props: Header127Props) => {
  const { heading, description, buttons, firstImage, secondImage, thirdImage } = {
    ...Header127Defaults,
    ...props,
  } as Props;
  
  return (
    <header className="relative bg-semiwhite px-[5%] py-16 md:py-24 min-h-screen">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="text-black mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
            <p className="text-black md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap gap-x-4 md:mt-8 ">
            <a href="mailto:info@devdiaz.com" target="_blank" className="mt-2 flex items-center p-2 bg-white border-2 border-white/50 rounded-[10px_0px] shadow-custom text-black"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" /></svg><span>info@devdiaz.com</span></a>
            
            <a href="https://www.behance.net/alejandrodiaz25" target="_blank" className="mt-2 flex items-center p-2 bg-white border-2 border-white/50 rounded-[10px_0px] shadow-custom text-black"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" /></svg><span>Portafolio</span></a>

            <a href="https://www.instagram.com/ux.diaz?igsh=MWgyeGN2NWp5cDZudQ%3D%3D&utm_source=qr" target="_blank" className="mt-2 flex items-center p-2 bg-white border-2 border-white/50 rounded-[10px_0px] shadow-custom text-black"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" /></svg><span>Instagram</span></a>

            <a href="https://www.tiktok.com/@ux.diaz?_t=8oMo1UkfZYc&_r=1" target="_blank" className="mt-2 flex items-center p-2 bg-white border-2 border-white/50 rounded-[10px_0px] shadow-custom text-black"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" /></svg><span>Tiktok</span></a>

            </div>
          </div>
          <div className="relative flex w-full">
            <div className="absolute bottom-[10%] left-0 right-auto top-auto w-[45%]">
            <HexagonLottie animationUrl="/hexagonos.json" />
              <img
                src={firstImage.src}
                className="hidden aspect-[3/2] size-full object-cover"
                alt={firstImage.alt}
              />
            </div>
            <div className="mx-[15%] w-full">
              <img
                src={secondImage.src}
                className="aspect-[2/3] size-full object-cover"
                alt={secondImage.alt}
              />
            </div>
            <div className="absolute bottom-auto left-auto right-0 top-[10%] w-[40%]">
              <img
                src={thirdImage.src}
                className="aspect-[1] size-full object-cover"
                alt={thirdImage.alt}
              />
            </div>
            {/* Lottie Animation */}
            
          </div>
        </div>
        
      </div>
      <LottieAnimation animationUrl="/Purple-grandient.json" />
    </header>
  );
};

export const Header127Defaults: Header127Props = {
  heading: "Hola, soy Díaz",
  description:
    "Soy diseñador web apasionado por crear experiencias digitales únicas y desarrollador con la habilidad de transformar ideas en sitios web funcionales y atractivos.",
  buttons: [{ title: "Buttonnn" }, { title: "Button", variant: "secondary" }],
  firstImage: {
    src: "",
    alt: "Placeholder image 1",
  },
  secondImage: {
    src: "../diaz.jpg",
    alt: "Placeholder image 2",
  },
  thirdImage: {
    src: "../Tecnologias.png",
    alt: "Placeholder image 3",
  },
};

Header127.displayName = "Header127";