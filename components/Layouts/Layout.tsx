import * as React from "react";
import Navbar from "../Navbar";
import Meta from "../Meta";

type Props = {
    children: React.ReactNode
}

export default function Layout(props: Props) {
    const { children } = props;
    return (
        <>
            <Meta />
            <Navbar />
            <>{children}</>
        </>
    );
}