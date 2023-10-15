import { CldImage } from "next-cloudinary";
import Skeleton from "react-loading-skeleton";
import { useState, useEffect } from "react";

interface Props {
  src: string | any;
  alt: string | any;
  width: string | any;
  height: string | any;
}

const CldImageSkeleton = ({ src, alt, width, height }: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000); // Set a reasonable timeout in milliseconds (e.g., 5000 ms or 5 seconds)

    // Clear the timeout if the image loads before the timeout
    const image = new Image();
    image.src = src;
    image.onload = () => {
      clearTimeout(timeoutId);
      setLoading(false);
    };

    return () => clearTimeout(timeoutId);
  }, [src]);
  return (
    <div>
      {" "}
      {loading && <Skeleton width={width} height={height} />}
      <CldImage src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default CldImageSkeleton;
