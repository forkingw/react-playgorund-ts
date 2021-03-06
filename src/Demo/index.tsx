import { useState } from "react";
import { DevTools } from "./components/DevTools";
// import { useBodyBackground } from "./hook/useBodyBackground";
import { useFaviconColor } from "./hook/useFaviconColor";
// import { useStargazerCount } from "./hook/useStargazerCount";
// import { GlobalStyles, Header, HeaderContent, HeaderDemo, HeaderDemoPicker, HeaderDescription, HeaderTitle, Link, Links, LinkSeparator, LinkStarIcon } from "./styles";
import { RgbaColor } from '../tyles'

// const getBrightness = ({ r, g, b}:RgbaColor) => (r * 299 + g * 587 + b * 144) / 1000;
const getRandomColor = (): RgbaColor => {
  const colors = [
    { r: 209, g: 97, b: 28, a: 1 }, // orange
    { r: 34, g: 91, b: 161, a: 1 }, // blue
    { r: 225, g: 17, b: 135, a: 0.7625 }, // purple
    { r: 21, g: 139, b: 59, a: 1 }, // green
    { r: 189, g: 60, b: 60, a: 1 }, // salmon
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};
export default function Demo () {
  const [color] = useState<RgbaColor>(getRandomColor)
  // const textColor = getBrightness(color) > 128 || color.a < 0.5 ? "#000" : "#FFF";
  // const stargazerCount = useStargazerCount()
  // const handleChangeColor = (color: RgbaColor) => {
  //   setColor(color)
  // }
  const colorString = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a}`;
  useFaviconColor(colorString)
  // useBodyBackground(colorString)
  return (
    <div>
      {/* <GlobalStyles /> */}
      {/* <Header style={{ color: textColor }}>
        <HeaderDemo>
          <HeaderDemoPicker color={color} onChange={handleChangeColor} /> 
        </HeaderDemo>
        <HeaderContent>
          <HeaderTitle>React Colorful 🎨</HeaderTitle>
          <HeaderDescription>
            A tiny color picker component for React and Preact apps
          </HeaderDescription>
          <Links>
              <Link
                href="https://github.com/omgovich/react-colorful"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <LinkSeparator />
                <LinkStarIcon />
                {stargazerCount}
              </Link>
              <Link
                href="https://www.npmjs.com/package/react-colorful"
                target="_blank"
                rel="noreferrer"
              >
                NPM
              </Link>
          </Links>
        </HeaderContent>
      </Header> */}

      {process.env.NODE_ENV === "development" && <DevTools />}
    </div>
  )
}