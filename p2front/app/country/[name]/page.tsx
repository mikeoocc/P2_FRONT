"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getCountryByName } from "@/lib/api/countries";
import type { Country } from "@/types/country";
import "./page.css"

export default function CountryPage() {
  const params = useParams<{ name: string }>();
  const nameParam = params.name;

  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getCountryByName(nameParam);
        setCountry(data);
      } catch (e) {
        setError("Error al cargar el pais");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [nameParam]);

  const capital = country?.capital?.[0] ?? "No disponible";
  const region = country?.region ?? "No disponible";
  const population = country?.population ?? "No disponible";
  const languages = country?.languages ? Object.values(country.languages).join(", ") : "No disponible";

  return (
    <div className="container">
      <Link className="back" href="/">
        -Volver
      </Link>

      {loading && <p>Cargando pais...</p>}
      {error && <p className="error">Error: {error}</p>}

      {!loading && !error && country && (
        <div className="card">
          <div className="flag">{country.flag}</div>

          <h1 className="title">{country.name.official}</h1>

          <ul className="list">
            <li>
              <strong>Capital:</strong> {capital}
            </li>
            <li>
              <strong>Region:</strong> {region}
            </li>
            <li>
              <strong>Poblacion:</strong> {population}
            </li>
            <li>
              <strong>Idiomas:</strong> {languages}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}