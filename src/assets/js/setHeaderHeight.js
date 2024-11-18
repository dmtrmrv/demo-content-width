const setHeaderHeight = () => {
  const getHeaderHeight = () => {
    return document.querySelector(".site__header")?.offsetHeight || 0;
  };

  const setHeaderHeightProperty = () => {
    document.body.style.setProperty(
      "--height--header",
      `${getHeaderHeight()}px`
    );
  };

  window.addEventListener("DOMContentLoaded", setHeaderHeightProperty);
  window.addEventListener("load", setHeaderHeightProperty);
  window.addEventListener("resize", setHeaderHeightProperty);
};

export default setHeaderHeight;
