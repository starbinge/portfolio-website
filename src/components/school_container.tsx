
interface School {
    logo: string
    major: string
    schoolName: string
    startYear: number
    finishYear: number | "now"
}

function SchoolContainer({ logo, major, schoolName, startYear, finishYear }: School) {
    return (
        <article className="school-card">
            <img src={logo} alt={`${schoolName} logo`} className="school-logo" />
            <div className="school-info">
                <h3 className="school-major">{major}</h3>
                <p className="school-name">{schoolName}</p>
                <p className="school-years">{startYear} – {finishYear}</p>
            </div>
        </article>
    )
}

export default SchoolContainer