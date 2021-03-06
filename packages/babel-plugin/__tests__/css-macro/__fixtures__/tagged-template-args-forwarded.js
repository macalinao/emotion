import { css } from '@emotion/react/macro'

function media(...args) {
  return css`
    @media (min-width: 100px) {
      ${css(...args)};
    }
  `
}

const test = css`
  ${media`color: red;`};
`
