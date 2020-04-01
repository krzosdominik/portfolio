const overflowBlock = isActive => {
    if (isActive) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
}

export default overflowBlock;