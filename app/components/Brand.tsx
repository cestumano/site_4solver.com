import Image from 'next/image';
import Link from 'next/link';

type BrandProps = {
  className?: string;
  priority?: boolean;
  subtitle?: string;
};

export default function Brand({ className = '', priority = false, subtitle = 'Soluções inteligentes' }: BrandProps) {
  return (
    <Link className={`brand ${className}`.trim()} href="/" aria-label="4Solver início">
      <Image src="/assets/logo-4solver.jpeg" alt="Logo 4Solver" width={52} height={52} priority={priority} />
      <span>
        <strong>4Solver</strong>
        <small>{subtitle}</small>
      </span>
    </Link>
  );
}
