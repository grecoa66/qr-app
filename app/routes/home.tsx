import { QRCodeSVG } from "qrcode.react";
import type { Route } from "./+types/home";
import { items } from "../data";

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
      <div className="flex flex-col gap-24">
        {items.map((item) => (
          <QRCodeSVG
            key={item.id}
            size={516}
            value={`https://pleasant-especially-fox.ngrok-free.app/items/${item.id}`}
          />
        ))}
      </div>
    </div>
  );
}
