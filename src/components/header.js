import { Navbar } from "./navbar";

const Header = ({ title, name, numArray }) => {
    console.log(numArray);
    return (
        <>
            <h1>
                <ul>{title}</ul>
                <div>{numArray}</div>
            </h1>
            <Navbar navbarVariable={title} />
        </>
    );
};

const add = (x, y) => {
    return x + y;
};

function Header2() {
    return (
        <>
            <div>Header2</div>
            <Navbar />
        </>
    );
}

const Header3 = () => {
    return (
        <>
            <div>Header3</div>
        </>
    );
};

export { Header, Header2, Header3 };
