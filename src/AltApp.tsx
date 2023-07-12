import "./styles.css";
import { Typography } from "./Typography";

export default function AltApp() {
  const styles = {
    textAlign: "left" as const,
    border: "1px solid green"
  };

  return (
    <div className="App">
      <div className="border">
        <Typography className="border-blue" type="span">
          Span
        </Typography>
        <span style={styles}>span</span>
      </div>

      <div className="border">
        <Typography className="border-blue" type="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          doloribus mollitia laboriosam maxime placeat quae nam, nemo sint odit
          in, magni ut maiores doloremque? Consequuntur illo cum optio.
          Similique, culpa.
        </Typography>
        <p style={styles}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          doloribus mollitia laboriosam maxime placeat quae nam, nemo sint odit
          in, magni ut maiores doloremque? Consequuntur illo cum optio.
          Similique, culpa.
        </p>
      </div>

      <div>
        <p className="paragraph-vanilla">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          quae laboriosam rem soluta at est. Iure accusamus consequuntur a eius
          nemo eum dolorum consequatur, libero, harum voluptatum dolor omnis
          earum.
        </p>
      </div>

      <div className="border">
        <Typography className="border-blue" type="h6">
          Heading 6
        </Typography>
        <h6 style={styles}>Heading 6</h6>
      </div>

      <div className="border">
        <Typography className="border-blue" type="h5">
          Heading 5
        </Typography>
        <h5 style={styles}>Heading 5</h5>
      </div>

      <div className="border">
        <Typography className="border-blue" type="h4">
          Heading 4
        </Typography>
        <h4 style={styles}>Heading 4</h4>
      </div>

      <div className="border">
        <Typography className="border-blue" type="h3">
          Heading 3
        </Typography>
        <h3 style={styles}>Heading 3</h3>
      </div>
      <div className="border">
        <Typography className="border-blue" type="h2">
          Heading 2
        </Typography>
        <h2 style={styles}>Heading 2</h2>
      </div>

      <div className="border">
        <header>
          <Typography sizeMultiplier={2}>heading</Typography>
        </header>
        <main>
          <Typography sizeMultiplier={1}>main content</Typography>
        </main>

        <footer>
          <Typography sizeMultiplier={2}>conclusion</Typography>
        </footer>
      </div>
    </div>
  );
}
