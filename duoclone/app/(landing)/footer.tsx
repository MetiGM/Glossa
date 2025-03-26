import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2 h-full">
                {[
                    { src: "/hr.svg", alt: "Croatian", label: "Croatian" },
                    { src: "/es.svg", alt: "Spanish", label: "Spanish" },
                    { src: "/fr.svg", alt: "French", label: "French" },
                    { src: "/it.svg", alt: "Italian", label: "Italian" },
                    { src: "/jp.svg", alt: "Japanese", label: "Japanese" },
                ].map(({ src, alt, label }) => (
                    <Button
                        key={alt}
                        size="lg"
                        variant="ghost"
                        className="w-[calc(20%-1rem)] min-w-[120px] flex items-center justify-center"
                    >
                        <Image src={src} alt={alt} width={40} height={32} className="mr-4 rounded-md" />
                        {label}
                    </Button>
                ))}
            </div>
        </footer>
    );
};
