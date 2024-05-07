export default function AppHeader({ title, description, children }) {
    return (
        <header>
            <div className="container">
                <h1>{title}</h1>
                <p>{description}</p>
                {children}
            </div>
        </header>
    );
}