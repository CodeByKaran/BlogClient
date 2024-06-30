import Compressor from "compressorjs";

const ImageCompressor = (file, quality = 0.2) => {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality: quality,
      success(result) {
        resolve(result);
      },
      error(err) {
        reject(err);
      }
    });
  });
};

export {
   ImageCompressor
}