import React from "react";
import Header from "./components/Header/Header";
import MainSlider from './components/Carousel/MainSlider'
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyles/GlobalStyles";
import Information from "./components/Information/Information";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AppBarBgColor: '#2f2f2f'
    }
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 30 ? this.state.AppBarBgColor : "transparent";
      this.setState({ AppBarBgColor: backgroundcolor });
    });
  }

  render() {
    const { AppBarBgColor } = this.state
    return (<AppContainer >
      <GlobalStyle/>
      <Header AppBarBgColor={AppBarBgColor} />
      <MainSlider />
      <Information/>
    </AppContainer>)
  }

}


const AppContainer = styled.div`
/* background-color:red; */
height:1500px  ;
`



export default App;