export function formatThumbs(data){
    return data.fileList ? data.fileList.map((image) => image.url) : data;
}