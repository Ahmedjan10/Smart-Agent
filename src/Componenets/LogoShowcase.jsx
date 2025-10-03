import { logoIconsList } from "./Constants/Index";

const LogoIcon = ({ icon }) => {
    return (
        <div className="flex items-center justify-center flex-none marquee-item">
            <img
                src={icon.imgPath}
                alt={icon.name}
                className="h-20 sm:h-30 md:h-36 lg:h-42 w-auto object-contain"
            />
        </div>
    );
};

const LogoShowCase = () => (
    <div className="relative bg-white py-10 w-full rounded-t-[60px] md:rounded-t-[80px]">
        <div className="gradient-edge" />
        <div className="gradient-edge" />

        <div className="marquee h-14 flex items-center justify-center bg-white mt-10">
            <div className="marquee-box md:gap-20 gap-5 flex items-center justify-center">
                {logoIconsList.map((icon, index) => (
                    <LogoIcon key={index} icon={icon} />
                ))}

                {logoIconsList.map((icon, index) => (
                    <LogoIcon key={index} icon={icon} />
                ))}
            </div>
        </div>
    </div>
);

export default LogoShowCase;
