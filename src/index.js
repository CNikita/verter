import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import MainSection from "./components/Sections/MainSection.jsx";
import ServicesSection from "./components/Sections/ServicesSection.jsx";
import AboutSection from "./components/Sections/AboutSection.jsx";
// import ReviewsSection from "./components/Sections/ReviewsSection.jsx";
import ContactsSection from "./components/Sections/ContactsSection.jsx";
import "./styles/index.scss";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 1,
      fullpages: [
        {
          text: "Section 1",
          className: "Main-page",
          customComponent: <MainSection />,
        },
        {
          text: "Section 2",
          className: "services-page",
          customComponent: <ServicesSection />,
        },
        {
          text: "Section 3",
          className: "about-page",
          customComponent: <AboutSection />,
        },
        // {
        //   text: "Section 4",
        //   className: "reviews-page",
        //   customComponent: <ReviewsSection />,
        // },
        {
          text: "Section 5",
          className: "contacts-page",
          customComponent: <ContactsSection />,
        },
      ],
    };
  }

  onLeave = (origin, destination, direction) => {
    this.setState({ currentSection: destination.index });
  };

  moveTo(section) {
    window.fullpage_api.moveTo(section);
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    const Menu = () => (
        <div className="menu">
          <h1>Verter</h1>
          <ul className="actions">
            <li>
              <button
                className={`menu-section${this.state.currentSection === 0 ? "_active" : ""}`}
                onClick={() => this.moveTo(1)}
              >
                Главная
              </button>
              <button
                className={`menu-section${this.state.currentSection === 1 ? "_active" : ""}`}
                onClick={() => this.moveTo(2)}
              >
                Услуги
              </button>
              <button
                className={`menu-section${this.state.currentSection === 2 ? "_active" : ""}`}
                onClick={() => this.moveTo(3)}
              >
                О нас
              </button>
              {/* <button
                className={`menu-section${this.state.currentSection === 3 ? "_active" : ""}`}
                onClick={() => this.moveTo(4)}
              >
                Отзывы
              </button> */}
              <button
                className={`menu-section${this.state.currentSection === 3 ? "_active" : ""}`}
                onClick={() => this.moveTo(4)}
              >
                Контакты
              </button>
            </li>
          </ul>
        </div>
    );

    return (
      <div className="App">
        <Menu />
        <ReactFullpage
          navigation
          anchors={["Main", "Services", "About", "Reviews", "Contacts"]}
          sectionSelector=".custom-section"
          onLeave={this.onLeave}
          render={(comp) => (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ text, className, customComponent }) => (
                <div key={text} className={`custom-section ${className}`}>
                  {customComponent}
                </div>
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
