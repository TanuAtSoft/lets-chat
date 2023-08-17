import { Fragment } from "react";
import CrossIcon from "./CrossIcon";

const ImageModal = ({imgPreview})=>{
    return(
        <Fragment>
        {imgPreview.length > 0 &&
            imgPreview.map((item, id) => {
              return (
                <div className="each-img-div"
                  key={id}
                >
                  <img
                    key="id"
                    src={item}
                    alt="img"
                    style={{ height: "50px", width: "50px",position:"relative" }}
                  />
                  <CrossIcon
                    style={{
                      position: "absolute"
                    }}
                    // onClick={() => {
                    //   handleDeleteImages(id);
                    // }}
                  />
                </div>
              );
            })}
            </Fragment>
    )
}
export default ImageModal;