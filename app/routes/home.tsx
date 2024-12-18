import { QRCodeSVG } from "qrcode.react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "QR Codes" },
    { name: "description", content: "QR Code Demo" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>QR Codes</h1>
      <p>Scan the QR code below</p>
      <QRCodeSVG value="https://pleasant-especially-fox.ngrok-free.app/items/abc-123" />
    </div>
  );
}
