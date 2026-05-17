import noImage from "../assets/no-image-placeholder.webp";
const getCroppedImageUrl = (url: string, size: number) => {
  if (!url) return noImage;

  const target = "/media/";
  const index = url.indexOf(target);

  if (index === -1) return url;

  return url.slice(0, index + target.length) + `crop/${size}/400/${url.slice(index + target.length)}`;
};

export default getCroppedImageUrl;
