import Modal from 'react-modal';
import CrossIcon from './CrossIcon';
import { useMediaQuery } from 'react-responsive'

const mobileCustomStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: "fit-content",
      width: "80%",
    },
  };
  const DesktopCustomStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: "70vh",
      width: "fit-content",
    },
  };

const ViewImageModal = ({ imgUrl,open,closeModal }) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 856px)' })
  return (
    <Modal
    isOpen={open}
    ariaHideApp={false}
    // onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
    style={isTabletOrMobile? mobileCustomStyles: DesktopCustomStyles}
    contentLabel="Example Modal"
  >
    <div  onClick={closeModal}>
    <CrossIcon/>
    </div>
    <img src={imgUrl} alt="img" style={{width:"100%"}}/>
  </Modal>
  );
};
export default ViewImageModal;
