import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #E5E5E5;
    }

    .clean-list {
        list-style: none;
    }

    .clean-link {
        text-decoration: none;
        color: inherit;
    }
`;
