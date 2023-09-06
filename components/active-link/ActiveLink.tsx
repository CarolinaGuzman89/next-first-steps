"use client";

import Link from "next/link";
import {usePathname} from "next/navigation"

import style from "./ActtiveLink.module.css";

interface Props {
    path: string,
    name: string
}

export default function ActiveLink({ path, name }: Props) {

    const pathName = usePathname();

    return (
        <Link 
            className={`${style.link} ${(pathName === path) && style["active-link"]}`}
            href={path}>
                {name}
        </Link>
    )
}
