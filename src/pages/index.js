import React, { useRef, useEffect } from "react"
import GlobalStyle from '../components/GlobalStyle'
import styled from "styled-components"
import SEO from "../components/seo"
import Card from '../components/Card/Card'
import Logo from '../components/Logo/Logo'
import Typing from '../components/Typing/Typing'
// import Text from '../components/Text/Text'
import '../components/Fonts/Fonts.css'
import Animations from '../components/Animations/Animations'
import gsap from 'gsap'
import Cursors from '../components/Cursor/Cursors'
// import '../components/Cursors.scss'

const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: rgba(17, 17, 17, 0.8);
  background-image: url('https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
  background-blend-mode: overlay;
  background-size: cover;
`;

const StyledWrapper = styled.div`
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  place-items: center;
  grid-template-columns: 0.2fr 1fr 0.2fr;
  grid-template-rows: 0.4fr 2fr 0.4fr;
  gap: 1px 1px;
  grid-template-areas: ". logo ." ". card description " ". . .";
`;


const IndexPage = () => {
  let AnimWrapper = useRef(null);
  let cursors = useRef(null);
  const tl = gsap.timeline();

  useEffect(()=>{

    const cursor1 = cursors.firstElementChild;
    const cursor2 = cursors.lastElementChild;
    console.log(cursor1, cursor2);

    document.addEventListener('mousemove', (e)=>{
      cursor1.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px`);
      cursor2.setAttribute("style", `top: ${e.pageY}px; left: ${e.pageX}px`);
    });
    document.addEventListener("click", (e) => {
      cursor2.classList.add("anim");
      cursor1.classList.add("anim");
      setTimeout(() => {
        cursor2.classList.remove("anim");
        cursor1.classList.remove("anim");
      }, 300);
    });
  })

  useEffect(()=>{
    const wrapper = AnimWrapper.children[0];
    const wrapper2 = AnimWrapper.children[1];
    const line = AnimWrapper.children[2];

    gsap.set([wrapper, wrapper2, line], {autoAlpha: 1})

    tl
    .set(line, {autoAlpha: 1})
    .to(line, {duration: .8, scaleX: 1, ease: 'Power3.easeInOut'})
    .set(line, {scale: 0})
    // .set(wrapper, {autoAlpha: 1})
    .to(wrapper, {duration: .6, scaleY: 0, ease: 'Power4.easeInOut'})
    // .set(wrapper2, {autoAlpha: 1})
    .to(wrapper2, {duration: .6, scaleY: 0, ease: 'Power4.easeInOut'},'-=.6')
  });


return(
  <>
    <GlobalStyle/>
    <SEO title="Home" />
    <BackGround>
      <StyledWrapper  className="fjalla">
        <div ref={el => AnimWrapper = el}>
          <Animations />
        </div>
        <div ref={el => cursors = el}>
          <Cursors/>
        </div>
        <Logo color="white"/>
        <Typing/>
        <Card/>
        {/* <Text/> */}
      </StyledWrapper>
    </BackGround>
  </>
)}

export default IndexPage

