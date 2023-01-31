import Header from "../../components/Header/page";
import "./globals.css";
import TopHeader from "../../components/TopHeader/page";
import Footer from "../../components/Footer/page";
import { Providers } from "./Providers";
async function getEverestTrek() {
  const res = await fetch("http://localhost:3000/api/trekking/everest");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getAnnapurnaTrek() {
  const res = await fetch("http://localhost:3000/api/trekking/annapurna");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getManasluTrek() {
  const res = await fetch("http://localhost:3000/api/trekking/manaslu");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getLangtangTrek() {
  const res = await fetch("http://localhost:3000/api/trekking/langtang");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getOffBeaten() {
  const res = await fetch("http://localhost:3000/api/trekking/offbeaten");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getPeakClimbing() {
  const res = await fetch("http://localhost:3000/api/peakclimbing");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getExpedition() {
  const res = await fetch("http://localhost:3000/api/expedition");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getDayExcursion() {
  const res = await fetch("http://localhost:3000/api/dayexcursion");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function vehicleTour() {
  const res = await fetch("http://localhost:3000/api/vehicletour");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getHiking() {
  const res = await fetch("http://localhost:3000/api/hiking");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function RootLayout({ children }) {
  const everestTrek = await getEverestTrek();
  const annapurnaTrek = await getAnnapurnaTrek();
  const manasluTrek = await getManasluTrek();
  const langtangTrek = await getLangtangTrek();
  const offbeatenTrek = await getOffBeaten();
  const peakClimbing = await getPeakClimbing();
  const expedition = await getExpedition();
  const dayexcursion = await getDayExcursion();
  const vehicletour = await vehicleTour();
  const hiking = await getHiking();
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <TopHeader />
          <Header
            everestTrek={everestTrek}
            annapurnaTrek={annapurnaTrek}
            manasluTrek={manasluTrek}
            langtangTrek={langtangTrek}
            offbeatenTrek={offbeatenTrek}
            peakClimbing={peakClimbing}
            expedition={expedition}
            dayexcursion={dayexcursion}
            vehicletour={vehicletour}
            hiking={hiking}
          />
          <div style={{marginTop:"9rem"}}>{children}</div>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
