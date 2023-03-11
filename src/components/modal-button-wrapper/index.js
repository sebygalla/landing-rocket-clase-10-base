import React, { useState } from 'react';
import Button from './../button/index';
import Modal from './../modal/index';
import Title from './../title/index';
import Text from './../text/index';
import TextInput from './../text-input/index';

const ModalButtonWrapper = (props) => {
    const { buttonText, modalTitle, modalTextFontSize, modalTitleFontSize, modalText, modalTextColor, modalTextLetterSpacing,
    modalTitleColorText, modalTitleLetterSpacing, buttonModalText, inputPlaceholder } = props;

    const [visible, setVisible] = useState (false);

    const onClose = () => {
        setVisible(false);
    }

    const onButtonClick = () => {
        setVisible(true);
    }

    const onModalButtonClick = () => {
        console.log('validé el correo electrónico');
    }

    return (
        <div className="modal-button-wrapper">
            <Button buttonText={buttonText} onClick={onButtonClick} />
            <Modal visible={visible} onClose={onClose}>
                {modalTitle && <Title title={modalTitle} fontSize={modalTitleFontSize} color={modalTitleColorText} letterSpacing={modalTitleLetterSpacing} />}
                {modalText && <Text text={modalText} fontSize={modalTextFontSize} color={modalTextColor} letterSpacing={modalTextLetterSpacing} />}
                <TextInput placeholder={inputPlaceholder} />
                {buttonModalText && <Button buttonText={buttonModalText} onClick={onModalButtonClick} />}
            </Modal>
        </div>
    );
}

export default ModalButtonWrapper;
