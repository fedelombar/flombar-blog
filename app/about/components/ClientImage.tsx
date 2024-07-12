// components/ClientImage.tsx
import dynamic from 'next/dynamic';
import { ImageProps } from 'next/image';

// Dinámicamente importar el componente Image de next/image
const Image = dynamic(() => import('next/image'), {
  ssr: false,
});

const ClientImage: React.FC<ImageProps> = (props) => {
  return <Image {...props} />;
};

export default ClientImage;
