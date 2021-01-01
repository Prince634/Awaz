import { css } from "emotion";

export const container = css`{
    width:30%;
    background:#fff;
    padding: 0 30px 30px 30px;
    box-shadow: 0 0 10px #444;
    font-family: sans-serif;
}`;

export const modalHeader = css`{
    text-align:center;
    color:#46535e;
    font-size: 25px
}`;

export const modalContent = css`{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;
    width: fit-content;
    height: fit-content;
    position: relative;
    margin: auto;
}`;

export const closeIcon = css`{
    position: absolute;
    top: -15px;
    right: -15px;
    color:#9ca3a8;
    cursor:pointer;
}`;

export const modalOverlay = css`{
    width:100%;
    height:100%;
    background:#000;
    opacity: 1;
    position: fixed;
    z-index:9999;
    display: flex;
}`;

export const errMsg = css`{
    color: #b11616;
    font-size: 12px;
    margin: 5px 0 0 0;
}`;

export const modalBody = css`{
    display: block;
    margin-top: 0em;
}`;

export const inputField = css`{
    width: 100%;
    border-radius: 3px;
    line-height: 40px;
    font-size: 0.9rem;
    border: 1px solid #bbb;
    box-sizing: border-box;
    color: #252c33;
    margin: 10px 0;
    padding: 7px 8px;
    font-family: sans-serif;
}`;