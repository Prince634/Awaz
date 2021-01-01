import React, { useCallback, useEffect, useState } from "react";
import { cx } from "emotion";
import { useHistory } from "react-router-dom";
import Overlay from "@components/Overlay";
import { sticky, menu, mobileMenuBar } from "./styles.js";

const StickyHeader = ({ isSticky }) => {
  const [showFilterSticky, setFilterSticky] = useState(false);
  const [showMobileMenu, setMobileMenu] = useState(false);
  const history = useHistory();

  const scrollHandler = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 80) {
      setFilterSticky(true);
    } else {
      setFilterSticky(false);
    }
  };

  useEffect(() => {
    if (isSticky) {
      document.addEventListener("scroll", scrollHandler, false);
      return () => {
        document.removeEventListener("scroll", scrollHandler, false);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMobileMenu]);

  const toggleOverlay = useCallback(() => {
    setMobileMenu((val) => !val);
  }, []);

  const filterCont = cx({
    filterStickyHeader: true,
    filterSticky: isSticky && showFilterSticky,
    filterHide: isSticky && !showFilterSticky,
    showStaticHeader: !isSticky,
  });

  return (
    <>
      <Overlay showOverlay={showMobileMenu} clickTrigger={toggleOverlay} />
      {showMobileMenu && (
        <div className={mobileMenuBar}>
          <div className="menuContainer" onClick={() => history.push("/home")}>
            <span>Mock Interviews</span>
            <span>Pricing</span>
            <span>Login</span>
            <span>Team</span>
            <span>Contact</span>
          </div>
        </div>
      )}
      <div className={sticky}>
        <div className={filterCont}>
          <div className="topSection">
            <div className="name">
              <img
                src="https://ucarecdn.com/38857dd3-ef54-4dea-b631-81cb91c54de7/"
                alt=""
              />
              <div className="title">
                Eval
                <div className="line"> Evaluate your self</div>
              </div>
            </div>
            <div className="options" onClick={() => history.push("/home")}>
              <span>Mock Interviews</span>
              <span>Pricing</span>
              <span>Login</span>
              <span>Team</span>
              <span>Contact</span>
            </div>
            <div className={menu} onClick={toggleOverlay}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyHeader;
