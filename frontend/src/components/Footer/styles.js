import styled from "styled-components"

export const Footer = styled.footer `
display: flex;
flex-direction: row;
flex-wrap: wrap;
height: auto;

.FooterText {
    display: flex;
    width: 300px;
    margin-top: 83px;
}

.FooterPayment {
    margin: 0px 0px 13px 125px;
}

`
export const Container = styled.div `
display: flex;
flex-direction: column;
width: 688px;
height: 88px;

.FooterLogo {
    margin: 83px 241px 20px 85px;
}

`

export const Socials = styled.div `
display: flex;
align-items: center;
justify-content: start;
gap: 10px;
font-size: 24px;
margin-left: 85px;
`

export const Categories = styled.div `
display: flex;
flex-direction: column;
width: 117px;
height: 188px;
margin: 83px 85px 60px 0px;
`
export const Institutional = styled.div `
display: flex;
flex-direction: column;
width: 141px;
height: 120px;
margin: 83px 85px 60px 0px;
`
export const Service = styled.div `
display: flex;
flex-direction: column;
width: 169px;
height: 94px;
margin: 83px 85px 60px 0px;
`

export const H1 = styled.h1`
color: var(--color-text-gray-dark);
font-size: 24px;
`

export const P = styled.p`
font-size: 16px;
color: var(--color-text-gray-dark);

`
export const OtherP = styled(P)`
font-size: 15px;
margin: 5px;
cursor: pointer;

&:hover {
color: var(--color-purple);
}
`

export const Rights = styled.p`
margin: 10px 209px 0px 83px;
font-size: 14px;
color: var(--color-text-gray-dark);
text-align: center;
height: 24px;
`