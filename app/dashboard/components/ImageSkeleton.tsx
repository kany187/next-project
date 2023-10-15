import Image, { ImageProps } from "next/image";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

interface ImageWithStateProps extends ImageProps {
  fallback?: string;
  debug?: string;
}
const ImageSkeleton = ({
  fallback,
  debug,
  src,
  ...props
}: ImageWithStateProps) => {
  const [loading, setLoading] = useState(false);
  const [onError, setOnErrorSrc] = useState<string | undefined>(undefined);

  return (
    <div>
      {" "}
      {loading === true && (
        <Skeleton width={props.width} height={props.height} />
      )}
      <Image
        {...props}
        src={onError || src}
        onLoadingComplete={() => setLoading(true)}
        onError={() => setLoading(true)}
      />
    </div>
  );
};

export default ImageSkeleton;
