export const imageToBase64 = (file: File) => {
  const reader = new FileReader();

  reader.onload = () => {
    const result = reader.result;
    console.log("result", result);
  };

  reader.readAsDataURL(file);
};
