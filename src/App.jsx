import Header from "./components/Header";
import Countdown from "./components/Countdown";
import Stars from "./assets/bg-stars.svg";
import Footer from "./components/Footer";
function App() {
  return (
    <html>
      <body
        className="flex h-screen w-full flex-col bg-cover bg-center"
        style={{
          backgroundImage: `url(${Stars})`,
        }}
      >
        <Header />
        <Countdown />
        <Footer />
      </body>
    </html>
  );
}

export default App;
