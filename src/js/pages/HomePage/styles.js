import { css } from 'emotion';

export const container = css`{
    overflow-x: hidden;
    background: rgb(249, 250, 251);
    font-family: open-sans;
    box-sizing: border-box;
}`;

export const sticky = css`{
    color: #FFF;
    .filterStickyHeader {
        padding: 8px 12px;
        display: flex;
        position: fixed;
        justify-content: space-between;
        align-items: center;
        margin: 28px 0px 16px 0px;
        transition: top 0.6s ease !important;
        z-index: 8;
        width: 100%;
        background: #5f8cb3;
        border-radius: 0px;
        box-sizing: border-box;
    }
    .highLightStickyFilter {
        z-index: 99;
    }
    .filterSticky {
        top: -28px;
        left: 0px;
        right: 0px;
        width: 100%;
    }
    .filterHide {
        top: -100px;
    }
    box-sizing: border-box;
    .topSection{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .name{
        display: flex;
        align-items: center;
        .title{
            font-weight: 800;
            color: #FFF;
            font-size: 24px;
            cursor: pointer;
        }
        img{
            height: 44px;
        }
        .line{
            font-weight: 500;
            color: #FFF;
            font-size: 12px;
        }
    }
    .options{
        display: flex;
        flex-wrap: wrap;
        span{
            margin-right: 20px;
            color: #FFF;
            font-size: 16px;
            padding: 12px 16px;
            border-radius: 4px;
            cursor: pointer;
            transition: all ease-out 0.4s;
            transform: scale(1);
            &:last-child{
                margin-right: 0px;
            }
            &:hover{
                background: #334452;
                transform: scale(1.1);
            }
        }
    }
    .showStaticHeader{
        margin: 0px;
        position: relative;
    }
    @media(max-width: 600px){
        .options{
            display: none;
        }
    }
}`;

export const menu = css`{
    display: none;
    @media(max-width: 600px){
        display: flex;
        flex-direction: column;
        span{
            display: inline-block;
            width: 26px;
            height: 4px;
            margin-bottom: 4px;
            background: #FFF;
            &:last{
                margin-bottom: 0px;
            }
        }
    }
}`;

export const header = css`{
    width: 100%;
    background: #5f8cb3;
    padding: 44px 120px;
    box-sizing: border-box;
    .intro{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #FFF;
        h1{
            font-weight: 800;
        }
        .subtext{
            margin-top: 20px;
            line-height: 20px;
            font-family: Nunito;
        }
        .tagLine{
            max-width: 500px;
        }
        .cta{
            display: flex;
            margin-top: 40px;
            position: relative;
        }
        .review{
            cursor: pointer;
            padding: 12px 20px;
            background: #FFF;
            border-radius: 4px;
            color: #000;
            font-size: 14px;
            position: relative;
            top: 0px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Nunito;
        }
        .join{
            cursor: pointer;
            padding: 12px 20px;
            margin-left: 40px;
            background: #334452;
            border-radius: 4px;
            border: 2px solid #FFF;
            font-size: 14px;
            position: relative;
            top: 0px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Nunito;
        }
    }
    .mainImg{
        height: 440px;
    }
    @media(max-width: 600px){
        padding: 40px 20px;
        .topSection{
            justify-content: center;
        }
        .options{
            display: none;
        }
        .title{
            font-size: 18px !important;
        }
        .name img{
            height: 70px;
        }
        .intro{
            flex-direction: column;
            text-align: center;
        }
        .mainImg{
            margin-top: 28px;
            height: 240px;
        }
        .cta{
            justify-content: space-between;
        }
    }
    @media(min-width: 600px) and (max-width: 992px){
        padding: 40px;
        .mainImg{
            height: 360px;
        }
    }
}`;

export const work = css`{
    padding: 24px 120px;
    h2{
        font-size: 40px;
        color: #635f5f;
        margin: 0px;
        margin-bottom: 20px;
        text-align: center;
    }
    .steps{
        display: flex;
        justify-content: space-between;
    }
    .arrow{
        margin: 0px 20px;
        display: flex;
        align-items: center;
    }
    .step{
        box-shadow: rgb(202, 211, 225) 0px 1px 4px 0px;
        background: #FFF;
        width: 280px;
        min-height: 230px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 40px;
        text-align: center;
        .text{
            margin-top: 24px;
            font-size: 20px;
        }
    }
    .cta{
        margin-top: 20px;
        padding: 12px 20px;
        background: #334452;
        color: #FFF;
        font-weight: 700;
        border-radius: 4px;
        cursor: pointer;
        font-family: Nunito;
    }

    @media(max-width: 600px){
        padding: 40px 20px;
        .steps{
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
        }
        .step{
            min-height: 160px;
            width: 200px;
            margin-bottom: 24px;
        }
        .arrow{
            transform: rotate(90deg);
            margin-bottom: 20px;
            height: 84px;
        }
    }
    @media(min-width: 600px) and (max-width: 992px){
        padding: 40px;
        .step{
            min-height: 200px;
            height: unset;
        }
    }

}`;

export const form = css`{
    padding: 24px 120px;
    @media(max-width: 600px){
        padding: 40px 20px;
        
    }
    @media(min-width: 600px) and (max-width: 992px){
        padding: 40px;
        
    }
}`;

export const mobileMenuBar = css`{
    position: fixed;
    z-index: 99;
    display: flex;
    color: #FFF;
    top: 49px;
    justify-content: center;
    align-items: center;
    width: 100%;
    .menuContainer{
        height: 100px;
        width: 100px;
        position: relative;
        top: 15px;
        width: 100%;
        span{
            padding: 16px;
            display: block;
            font-size: 18px;
            text-align: center;
            border-bottom: 2px solid #FFF;
        }
    }
}`;

export const mobileSwiperContainer = props => css`
   {
    width: 100%;
    min-width: 100%;
    transition: transform 0.5s ease-out;
    transform: translate(calc(${props.index}* (-100%)));
    .mobileMembershipCarousel{
        height: 200px;
    }
    @media (min-width: 1000px) {
      display: flex;
      flex-shrink: 0;
      flex-grow: 0;
      justify-content: center;
    }
  }
`;

export const mobileMemberCarouselCard = css`
   {
    display: flex;
    align-items: center;
    text-align: center;
    flex-shrink: 0;
    flex-grow: 0;
    overflow-x: hidden;
    .mobileCarouselItem {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .heading{
            font-size: 18px;
            font-weight: 800;
        }
    }
    .icon {
        margin-bottom: 12px;
    }
    .text{
        color: #635f5f;
        margin-top: 4px;
    }
    .no {
        border-radius: 50%;
        height: 16px;
        width: 16px;
        color: #fff;
        background: rgba(171, 176, 183, 0.96);
        box-shadow: 2px 5px 8px rgba(106, 205, 112, 0.3);
        position: absolute;
        top: -6px;
        left: -4px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 8px;
    }
    @media(min-width: 768px){
        .mobileCarouselItem{
            flex-direction: row;
            display: flex;
            align-items: flex-start;
        }
        .text{
            text-align: start;
            margin-left: 32px;
            margin-top: 12px;
        }
    }
  }
`;

export const iconCont = css`{
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 13px 31px rgba(29, 65, 98, 0.05);
    border-radius: 16px;
    margin-right: 16px;
    background: #FFFFFF;
    border: 0.4px solid #EBEBEB;
    height: 48px;
    width: 48px;
    img{
        height: 100%;
        width: 100%;
        border-radius: 16px;
    }
    @media(min-width: 1000px){{
      margin: 0px;
      height: 100px;
      width: 100px;
      border: 0.6px solid #EBEBEB;
      border-radius: 32px;
    }
    .round{
      border-radius: 50%;
      height: 30px;
      width: 30px;
      color: #fff;
      font-size: 16px;
      background: rgba(171, 176, 183, 0.96);
      box-shadow: 2px 5px 8px rgba(106, 205, 112, 0.3);
      position: absolute;
      top: -8px;
      left: -8px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }`;
  
  export const icon = css`
     {
      height: 17px;
      width: 24px;
      @media (min-width: 1000px) {
        height: 48px;
        width: 70px;
      }
    }
  `;

  export const toggleBar = css`
  {
   margin: 20px 0px;
   display: flex;
   justify-content: center;
   span {
     cursor: pointer;
     width: 24px;
     height: 4px;
     border-radius: 1px;
     background: #07062e;
     opacity: 0.1;
     margin-right: 8px;
   }
   .active {
     opacity: 1;
     background: linear-gradient(174.29deg, #14a01d 0%, #6dcf73 100%);
   }
 }
`;

export const topCompanies = css`{
    h2{
        font-size: 40px;
        color: #635f5f;
        margin: 0px;
        margin-top: 20px;
        text-align: center;
    }
}`;