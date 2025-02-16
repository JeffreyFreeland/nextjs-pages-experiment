

export default function Layout({ children }: { children: React.ReactNode}) {
    return (
        <div>
            <p>Some Navbar will go here.</p>
            <div>{children}</div>
        </div>
    );
}