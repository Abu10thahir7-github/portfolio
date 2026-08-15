import Image, { StaticImageData } from "next/image";


export default function Avatar({ size = 56 ,heroPortrait }: { size?: number, heroPortrait: StaticImageData }) {
  return (
    <div
      className="relative shrink-0 rounded-full p-[2px]"
      style={{
        width: size,
        height: size,

      }}
    >
      <div
        className="flex h-full w-full items-center justify-center rounded-full bg-surface-2 font-display font-bold text-accent"
        style={{ fontSize: size * 0.36 }}
      >
        <Image src={heroPortrait}  alt="Abu Thahir" fill className="rounded-full object-cover" sizes="(min-width: 1024px) 42vw, 90vw" />
      </div>
      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-accent" />
    </div>
  );
}
