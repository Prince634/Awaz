import { css } from 'emotion';

export const container = css`{
    overflow-x: hidden;
    height: 100vh;
    font-family: sans-serif;
    margin: 20px 4px;
    .title{
        display: flex;
        justify-content: center;
        padding: 0;
        margin: 8px 0px;
        font-weight: 700;
    }
    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }
    .nextBtn{
        display: flex;
        justify-content: center;
        button{
            border: 0px;
            color: #fff;
            padding: 12px 24px;
            background: #0099cc;
            border-radius: 4px;
            transition: all 1s ease-out;
            box-shadow: 0px 0px 8px grey;
            font-weight: 800;
            cursor: pointer;
        }
    }
    .disabled{
        background: #e0e0e0 !important;
        color: rgba(0,0,0,0.12) !important;
        cursor: unset;
    }
}`;

export const cardList = css`{
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0px;
    .card{
        background: #fff;
        padding: 8px;
        border-radius: 8px;
        box-shadow: 0px 0px 8px grey;
        margin: 8px 12px;
    }
    .active{
        background: #aadcef;
    }
}`;