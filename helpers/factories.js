export function formDataFactory(image) {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "up6wxnuh");
  return formData;
}
