import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import ComponentImg from "./assets/components.png";
import UiImg from "./assets/jsx-ui.png";
import ConfigImg from "./assets/config.png";
import StateImg from "./assets/state-mgmt.png";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The core UI Building Block."
              img={ComponentImg}
            />
            <CoreConcept
              title="Config"
              description="The core UI Building Block."
              img={ConfigImg}
            />
            <CoreConcept
              title="JSX UI"
              description="The core UI Building Block."
              img={UiImg}
            />
            <CoreConcept
              title="State Management"
              description="The core UI Building Block."
              img={StateImg}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
