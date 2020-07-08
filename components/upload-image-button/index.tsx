import React, { useRef, FormEvent } from "react";
import { Box, Button } from "@chakra-ui/core";

const UploadImageButton = ({ image, setImage }) => {
  const hiddenFileInput = useRef(null);

  const handleImageUpload = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        const dataURL = reader.result;

        setImage(dataURL);
      };
    }
  };

  return (
    <Box bg="gray.100" d="flex" justifyContent="center" alignItems="center">
      <Button
        onClick={() => hiddenFileInput.current.click()}
        variantColor="cyan"
        size="lg"
        leftIcon="attachment"
      >
        Upload an image
      </Button>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        multiple={false}
        ref={hiddenFileInput}
        style={{
          display: "none",
        }}
      />
    </Box>
  );
};

export default UploadImageButton;
