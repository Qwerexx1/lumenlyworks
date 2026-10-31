import { Image } from '@/components/ui/image';

export default function HeroBackdrop({ imageUrl }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <Image src={imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
      <div className="absolute inset-0 scrim-b" />
      <div className="absolute inset-0 mask-radial-top grid-floor opacity-20" />
      <div className="absolute left-1/2 top-[-16rem] h-[32rem] w-[46rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[140px]" />
    </div>
  );
}