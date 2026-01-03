import React, { memo } from "react"; 

type ModalProps = {
  isVisible: boolean;
  onCancel: () => void; 
  onSubmit?: () => void;
  isDeleteButtonDisabled?: boolean; 
  disabled?: boolean;
  loading?: boolean;
  modalHeading: string;
  subheading?: string;
  titleIcon?: boolean;
  iconClassName?: string;
  modalType: "edit" | "delete";
  modalWidth?: string;
  defaultDeleteItemName?: string;
  DeletePlaceholder?: string;
  inputDisabled?: boolean;
  customScrollableHeight?: string;
  customBodyClass?: string;
  children?: React.ReactNode;
  deleteTitleName?: string;
  onDeleteInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

};

function Modal({
  isVisible,
  onCancel,
  onSubmit,
  isDeleteButtonDisabled,
  onDeleteInputChange,
  disabled,
  loading,
  ...props
}: ModalProps ) {
  return (
    isVisible && (
      <div className="modal-wrapper sliding-modal sliding-modal-transition">
        <div
          className={`modal-dialog ${props.modalType === "delete" ? "modal-sm" : props.modalWidth
            } modal-dialog-scrollable`}
        >
          {loading ?  <p>loading ...</p> : <div className="modal-content">
            <div
              className={`modal-header ${props.modalType === "delete" ? "modal-header-delete" : ""
                }`}
            >
              <div className="display-flex align-items-center">
                {props.titleIcon && (
                  <span className="modal-icon">
                    <i className={`${props.iconClassName}`}></i>
                  </span>
                )}
                <div>
                  <h5>{props.modalHeading}</h5>
                  <p>{props.subheading}</p>
                </div>
              </div>
              <button className="btn btn-danger-text" onClick={() => onCancel()}><i className="fas fa-times"/></button>
            </div>

            {props.modalType === "delete" ? (
              <div className="delete-modal">
                <div className="delete-modal-content">
                  <div className="delete-content-header">
                    <h5 className="delete-title">
                      Are you sure you want to permanently{" "}
                      {props?.deleteTitleName ?? "delete"} this{" "}
                      <strong>{props.defaultDeleteItemName}</strong>?
                    </h5>
                    <p>This action can not be undone !</p>
                  </div>
                  {props.children}
                  <div className="confirm-box">
                    <p>
                      To confirm deletion, type <strong>DELETE</strong> in the
                      box below:
                    </p>
                    <input
                      type="text"
                      disabled={props?.inputDisabled}
                      placeholder={
                        props?.DeletePlaceholder ??
                        "Please type Delete to confirm"
                      }
                      onChange={(event) => onDeleteInputChange && onDeleteInputChange(event)}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={`modal-scrollable ${props.customScrollableHeight
                    ? props.customScrollableHeight
                    : ""
                  }`}
              >
                <div
                  className={`modal-body ${props?.customBodyClass ? props?.customBodyClass : ""
                    }`}
                >
                  {props.children}
                </div>
              </div>
            )}
            <div className="modal-footer">
              <button className="btn btn-secondary-text mr-2" onClick={() => onCancel()}>
                Close
              </button>
              {props.modalType === "delete" ? (
                <button
                  className="btn btn-danger"
                  disabled={disabled || isDeleteButtonDisabled}
                  onClick={onSubmit}
                >
                  Delete
                </button>
              ) : (
                // <button className="btn btn-primary">Save</button>
                null
              )}
            </div>
          </div>}
        </div>
      </div>
    )
  );
}

export default memo(Modal);
