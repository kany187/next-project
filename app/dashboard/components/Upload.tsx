"use client";

import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { Button } from "@chakra-ui/react";

interface CloudinaryResult {
  public_id: string;
  url: string;
}

interface Props {
  src: (url: string) => void;
}

const Upload = ({ src }: Props) => {
  const [publicId, setPublicId] = useState("");
  const [url, setUrl] = useState("");

  src(url);

  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="image" />
      )}
      <CldUploadWidget
        uploadPreset="ruy95q6g"
        options={{
          sources: ["local", "url", "camera", "dropbox"],
        }}
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          const url = result.info as CloudinaryResult;
          setPublicId(info.public_id);
          setUrl(url.url);
        }}
      >
        {({ open }) => <Button onClick={() => open()}>Upload</Button>}
      </CldUploadWidget>
    </>
  );
};

export default Upload;
