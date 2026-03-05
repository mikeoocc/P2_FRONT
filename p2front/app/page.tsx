"use client"

import { CountryCard } from "@/components/CountryCard";
import { getAllCountries } from "@/lib/api/countries";
import { Country } from "@/types/country";
import { useEffect, useState } from "react";

export default function Home() {

  const [countries, setCountries] = useState<Country[]>([])
  const [search, setSearch] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string|null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        setError(null)

        const data = await getAllCountries()
        setCountries(data)
      } catch(e) {
        setError("Error al cargar paises")
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const filterCountries = () => {
    return countries.filter((c) =>
      c.name.official.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <div className="container">
      <h1 className="title">Explorador de Paises</h1>

      <input
        className="search"
        type="text"
        placeholder="Buscar pais por nombre"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Cargando paises...</p>}
      {error && <p className="error">Error: {error}</p>}

      {!loading && !error && (
        <div className="grid">
          {filterCountries().map((country) => (
            <CountryCard
              key={country.name.official}
              country={country}
            />
          ))}
        </div>
      )}
    </div>
  );
}
