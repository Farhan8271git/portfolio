import Button from "./components/common/Button";
import Container from "./components/common/Container";
import SectionHeading from "./components/common/SectionHeading";
import Badge from "./components/common/Badge";
import Card from "./components/common/Card";

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-20">
      <Container>
        <SectionHeading
          title="Design System"
          subtitle="Building reusable components for the portfolio."
        />

        <Card className="space-y-6">
          <Badge>React</Badge>

          <p>
            If this looks good, our foundation is ready.
          </p>

          <Button>
            Primary Button
          </Button>
        </Card>
      </Container>
    </main>
  );
}

export default App;