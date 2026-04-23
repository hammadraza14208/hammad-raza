import Image from "next/image";

export function ImageCard({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="glass-panel relative overflow-hidden rounded-[2rem] shadow-luxe">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={900}
        priority={priority}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
