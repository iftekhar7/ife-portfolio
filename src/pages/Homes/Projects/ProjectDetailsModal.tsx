import Modal from "../../../components/Modal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NoFound from "../../../components/NoFound";

function ProjectDetailsModal(props: any) {
  const { isOpenModal, cancelModalHandler } = props;
  return (
    <Modal
      modalHeading="Project Demo Screens"
      subheading="A few representative screens highlighting core functionality."
      modalType={"edit"}
      customBodyClass={"p-0"}
      modalWidth={"modal-lg"}
      isVisible={isOpenModal?.isOpen}
      onCancel={cancelModalHandler}
    >
      {isOpenModal?.details?.length ? (
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          swipeable
          emulateTouch
        >
          {isOpenModal?.details?.map((item: any) => {
            return (
              <div>
                <img src={item?.url} />
              </div>
            );
          })}
        </Carousel>
      ) : (
        <NoFound />
      )}
    </Modal>
  );
}
export default ProjectDetailsModal;
