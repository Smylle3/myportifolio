export const handleOpen = (event, isOpen, setIsOpen, setAccordionOpen) => {
    switch (event) {
        case -1:
            if (isOpen) {
                setAccordionOpen(1)
                setIsOpen(!isOpen)
            } else {
                setAccordionOpen(0)
                setIsOpen(!isOpen)
            }
            break
        case 0:
            if (!isOpen) {
                setAccordionOpen(0)
            }
            break
        case 1:
            if (!isOpen) {
                setAccordionOpen(1)
            }
            break
        default:
            break
    }
}