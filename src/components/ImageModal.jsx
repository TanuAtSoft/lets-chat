import { Fragment } from "react";
import CrossIcon from "./CrossIcon";

const ImageModal = ({ imgPreview, setImgPreview, files, setFiles }) => {
  const handleDeleteImages = (id) => {
    console.log("delete clicked", id);
    setImgPreview([...imgPreview.slice(0, id), ...imgPreview.slice(id + 1)]);
    setFiles([...files.slice(0, id), ...files.slice(id + 1)]);
    // setFiles(tempFiles)
  };
  return (
    <Fragment>
      {imgPreview.length > 0 &&
        imgPreview.map((item, id) => {
          return (
            <div className="each-img-div" key={id}>
              <img
                key="id"
                src={item}
                alt="img"
                style={{ height: "50px", width: "50px", position: "relative" }}
              />
              <button
                className="cross"
                onClick={() => {
                  handleDeleteImages(id);
                }}
              >
                <CrossIcon />
              </button>
            </div>
          );
        })}
    </Fragment>
  );
};
export default ImageModal;
