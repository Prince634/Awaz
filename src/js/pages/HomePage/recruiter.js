import React, { useState, useCallback } from 'react';
import AmazonIcon from '@assets/amazon.png';
import GoogleIcon from '@assets/google.png';
import NetflixIcon from '@assets/netflix.png';
import OracleIcon from '@assets/oracle.png';
import WalmartIcon from '@assets/walmart.jpeg';
import { topCompanies } from './styles.js';

import { mobileMemberCarouselCard, mobileSwiperContainer, toggleBar, iconCont } from './styles.js';

const MemberCarouselData = [
  {
    img: AmazonIcon,
    heading: 'Amazon',
    content: 'Top Recruiters helps you to guide you through the journey',
  },
  {
    img: GoogleIcon,
    heading: 'Google',
    content: 'Top Recruiters helps you to guide you through the journey',
  },
  {
    img: NetflixIcon,
    heading: 'Netflix',
    content: 'Top Recruiters helps you to guide you through the journey',
  },
  {
    img: OracleIcon,
    heading: 'Oracle',
    content: 'Top Recruiters helps you to guide you through the journey',
  },
  {
    img: WalmartIcon,
    heading: 'Walmart',
    content: 'Top Recruiters helps you to guide you through the journey',
  },
];

const DesktopCarousel =[];
let scrollPositionX = 0;

const Recruiter = ()=>{

    const [memberCarouselIndex, setMemberCarouselIndex] = useState(0);

    const touchStart = useCallback(e => {
        const touchobj = e.changedTouches[0];
        scrollPositionX = touchobj.pageX;
    }, []);

    const touchEnd = useCallback(
        e => {
        const touchobj = e.changedTouches[0];
        const swiperContainer = document.getElementById('swiperContainer');
        const scrollThreshold = Math.abs(scrollPositionX - touchobj.pageX);
        if (scrollThreshold > 50) {
            let newIndex = memberCarouselIndex;
            if (scrollPositionX < touchobj.pageX && swiperContainer.scrollLeft === 0 && memberCarouselIndex) {
            newIndex -= 1;
            } else if (memberCarouselIndex < 3) {
            newIndex += 1;
            }
            setTimeout(() => {
            setMemberCarouselIndex(newIndex);
            }, 100);
        }
        },
        [memberCarouselIndex],
    );

    return(
        <div className={topCompanies}>
            <h2>Mentors From Top Companies</h2>
            <div
                id="swiperContainer"
                className={`${mobileMemberCarouselCard}`}
                onTouchStart={touchStart}
                onTouchEnd={touchEnd}
            >
            {MemberCarouselData.map((member, key) => {
                return (
                <div className={mobileSwiperContainer({ index: memberCarouselIndex })} key={key}>
                    <div className="mobileCarouselItem">
                        <div className={`${iconCont} icon ${memberCarouselIndex === key ? 'active' : ''}`}>
                            <img src={member.img} />
                        </div>
                        <div className="text">
                            <div className="heading">{member.heading}</div>
                            <div className="subHeading">{member.content}</div>
                        </div>
                    </div>
                </div>
                );
            })}
            </div>
            <div className={toggleBar}>
            <span onClick={() => setMemberCarouselIndex(0)} className={memberCarouselIndex === 0 ? 'active' : ''}></span>
            <span onClick={() => setMemberCarouselIndex(1)} className={memberCarouselIndex === 1 ? 'active' : ''}></span>
            <span onClick={() => setMemberCarouselIndex(2)} className={memberCarouselIndex === 2 ? 'active' : ''}></span>
            <span onClick={() => setMemberCarouselIndex(3)} className={memberCarouselIndex === 3 ? 'active' : ''}></span>
            </div>
      </div>
    )
}

export default Recruiter;