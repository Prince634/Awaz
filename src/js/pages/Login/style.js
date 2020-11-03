import { css } from 'emotion';
import { inputTypeNumber } from '@styles'

export const container = css`{
    overflow-x: hidden;
    height: 100vh;
    font-family: sans-serif;
}`

export const head = css`{
    display: flex;
    justify-content: center;
	p{
        position: relative;
        top: 40px;
        font-weight: 800;
        font-size: 28px;
        color: #FFF;
    }
}`

export const bgImg = css`{
    position: absolute;
    width: 100%;
    height: 200px;
    top: 0;
}`;

export const cardCont = css`{
    position: relative;
    display: flex;
    justify-content: center;
    top: 100px;
    .cont{
        display: flex;
        align-items: center;
    }
}`

export const inputForm = css`{
    display: flex;
    flex-direction: column;
    align-items: center;
    .row{
        position: relative;
        padding: 20px;
        margin-bottom: 32px;
        display: flex;
        flex-direction: column;
    }
    ${inputTypeNumber};
    input{
        margin-top: 16px;
        border: 0px;
        width: 200px;
        border-bottom: 1px solid #eee;
        transition: all 1s ease-out;
    }
    label{
        color: #59a6c3;
    }
    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
        border-color: #59a6c3;
    }
    .submit{
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
    .disabled{
        background: #e0e0e0;
        color: rgba(0,0,0,0.12);
    }
    .resend{
        position: absolute;
        left: 175px;
        margin: 8px 0px;
        cursor: pointer;
        font-size: 14px;
        color: red;
    }
}`