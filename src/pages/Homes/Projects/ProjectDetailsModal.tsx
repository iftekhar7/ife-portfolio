import Modal from "../../../components/Modal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import NoFound from "../../../components/NoFound";
import { projectDescription } from "./data";

// Define proper types
interface ProjectDetail {
  id: number;
  name: string;
  url: string;
}

interface ProjectInfo {
  name: string;
  subTitle?: string;
  description?: string[];
}

interface ModalProps {
  isOpenModal: {
    isOpen: boolean;
    name: string;
    details: ProjectDetail[];
  };
  cancelModalHandler: () => void;
}

function ProjectDetailsModal(props: ModalProps) {
  const { isOpenModal, cancelModalHandler } = props;
  
  // Filter returns array, get first item or use empty object as fallback
  const infoData: ProjectInfo = projectDescription?.find(
    (item: ProjectInfo) => item?.name === isOpenModal.name
  ) ?? {} as ProjectInfo;

  return (
    <Modal
      modalHeading={isOpenModal?.name}
      subheading={`${infoData?.subTitle ?? 'A few representative screens highlighting core functionality.'}`}
      modalType={"edit"}
      customBodyClass={"p-0"}
      modalWidth={"modal-lg"}
      isVisible={isOpenModal?.isOpen}
      onCancel={cancelModalHandler}
    >
      {isOpenModal?.details?.length ? (
        <div className="asset-details">
          <div className="assets-wrapper">
            <div className="flex-60">
              <div className="asset-card">
                <div className="card-header">
                  <h6>Some Project Screenshots</h6>
                </div>
                <div className="card-body">
                  <Carousel
                    autoPlay
                    infiniteLoop
                    swipeable
                    emulateTouch
                  >
                    {isOpenModal?.details?.map((item: ProjectDetail) => {
                      return (
                        <div key={item.id}>
                          <img src={item?.url} alt={item?.name}loading="lazy" />
                        </div>
                      );
                    })}
                  </Carousel>
                </div>
              </div>
            </div>

            <div className="flex-40">
              <div className="asset-card">
                <div className="card-header">
                  <h6>My Work on This Project</h6>
                </div>
                <div className="card-body pl-8">
                  {infoData?.description?.map(
                    (item: string, index: number) => (
                      <ul key={index} className="info-row">
                        <li><p>{item}</p></li>
                      </ul>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NoFound />
      )}
    </Modal>
  );
}

export default ProjectDetailsModal;