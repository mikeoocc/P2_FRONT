import { Country } from "@/types/country";
import Link from "next/link";
import "./CountryCard.css"

type Props = {
    country: Country
}

export const CountryCard = ({ country }: Props) => {

    const safeCountry = encodeURIComponent(country.name.common);

    return (
        <Link href={`/country/${safeCountry}`} className="card">
            <div className="flag">{country.flag}</div>
            <h3 className="name">{country.name.common}</h3>
        </Link>
    )
}