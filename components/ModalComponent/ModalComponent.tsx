import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import {
  ImageModal,
  StyledModalTitle,
  StyledDescription,
  StyledModalHeader,
  StyledModalOverlay,
  StyledTagline,
  StyledModal,
  AddCartButton,
} from './ModalComponent.styles'

const Modal = ({
  show,
  onClose,
  title,
  image_url,
  tagline,
  description,
  addBeer,
}: any) => {
  const [isBrowser, setIsBrowser] = useState(false)
  const ModalRoot: any = document.getElementById('modal-root')
  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const handleCloseClick = (e: any) => {
    e.preventDefault()
    onClose()
  }
  const handleCloseAndAddToCartClick = (e: any) => {
    e.preventDefault()
    addBeer()
    onClose()
  }
  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </StyledModalHeader>
        <StyledModalTitle>{title}</StyledModalTitle>
        <StyledTagline>{tagline}</StyledTagline>
        <ImageModal src={image_url} alt={title} />
        <StyledDescription>{description}</StyledDescription>
        <AddCartButton onClick={handleCloseAndAddToCartClick}>
          Add to cart
        </AddCartButton>
      </StyledModal>
    </StyledModalOverlay>
  ) : null

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, ModalRoot)
  } else {
    return null
  }
}

export default Modal
