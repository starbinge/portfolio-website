function NavBar() {
    return (
        <nav className="nav-bar">
            <section>
                <button className="link-hint" id="coding-page-button">Programming</button>
                <button className="link-hint" id="design-page-button">Design</button>
            </section>
            <button className="primary-button">
                Contact Me
            </button>
        </nav>
    );
}
export default NavBar;