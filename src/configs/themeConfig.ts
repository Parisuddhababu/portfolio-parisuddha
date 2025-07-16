const themeConfig = {
  app: {
    name: 'Yolo'
  },
  // layout
  layout: {
    isRTL: false,
    darkMode: false,
    semiDarkMode: false,
    skin: 'default',
    contentWidth: 'full',
    type: 'vertical',
    navBarType: 'sticky',
    footerType: 'static',
    isMonochrome: false,
    menu: {
      isCollapsed: false,
      isHidden: false
    },
    mobileMenu: false,
    customizer: false
  },
  breakpoints: {
    sm: '640',
    md: '768',
    lg: '1024',
    xl: '1280'
  }
};

export default themeConfig;
