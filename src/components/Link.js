const Link = ({ className, children, href }) => {
  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      // allows command/ctrl click
      return;
    }

    e.preventDefault();

    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    // The popstate event of the Window interface is fired when
    // the active history entry changes while the user navigates the session history
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={(e) => onClick(e)} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
