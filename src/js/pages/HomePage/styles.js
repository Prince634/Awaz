import { css } from 'emotion';

export const container = css`{
    overflow-x: hidden;
    background: rgb(249, 250, 251);
    font-family: open-sans;
    box-sizing: border-box;
}`;

export const header = css`{
    width: 100%;
    background: #5f8cb3;
    padding: 24px 120px;
    box-sizing: border-box;
    .topSection{
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
            height: 84px;
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
            &:hover{
                top: -8px;
                transition: top ease-out 0.5s;
            }
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
            &:hover{
                top: -8px;
                transition: top ease-out 0.5s;
            }
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