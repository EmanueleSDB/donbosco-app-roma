import { useState } from "react";
import { MapPin, Trophy, UserGroup } from "lucide-react";

export default function DonBoscoApp() {
  const [teamName, setTeamName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (teamName.trim()) setIsLoggedIn(true);
  };

  const locations = [
    { name: "Piazza Venezia", points: 10 },
    { name: "Colosseo", points: 10 },
    { name: "San Giovanni in Laterano", points: 10 },
    { name: "Santa Maria Maggiore", points: 10 },
    { name: "San Pietro in Vaticano", points: 10 },
  ];

  return (
    <div className="p-6 space-y-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center">Don Bosco a Roma</h1>

      {!isLoggedIn ? (
        <div className="bg-white p-4 rounded shadow space-y-4">
          <p className="text-lg font-semibold">Entra con il nome della tua squadra</p>
          <input
            className="w-full border rounded p-2"
            placeholder="Nome squadra"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleLogin}>
            Inizia partita
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-green-100 p-4 rounded">
            <p className="text-xl font-semibold">Benvenuti, squadra {teamName}!</p>
            <p>Visitate i luoghi e guadagnate punti!</p>
          </div>

          <div className="grid gap-4">
            {locations.map((loc, index) => (
              <div key={index} className="border-l-4 border-blue-500 bg-white p-4 rounded shadow">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <p className="font-bold text-lg">{loc.name}</p>
                </div>
                <p className="text-sm">Punti base: {loc.points}</p>
                <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
                  Segna come visitato
                </button>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <button className="bg-gray-100 p-2 rounded flex items-center justify-center gap-2">
              <UserGroup className="w-5 h-5" /> Classifica
            </button>
            <button className="bg-gray-100 p-2 rounded flex items-center justify-center gap-2">
              <Trophy className="w-5 h-5" /> Sfide extra
            </button>
          </div>
        </div>
      )}
    </div>
  );
}