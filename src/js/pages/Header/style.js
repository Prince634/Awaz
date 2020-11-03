import { css } from 'emotion';

export const container = css`{
    overflow-x: hidden;
    height: 100vh;
    font-family: sans-serif;
}`

export const head = css`{
    display: flex;
    background: #59a6c3;
    width: 100vw;
    justify-content: space-between;
    padding: 12px 20px;
    box-sizing: border-box;
    .heading{
        font-size: 20px;
        font-weight: 800;
        color: #fff;
        cursor: pointer;
    }
    img{
        cursor: pointer;
    }
}`;