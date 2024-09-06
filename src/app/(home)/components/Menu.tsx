import Link from 'next/link';

const links = [
    {
        label: "Dashboard",
        href: "/dashboard"
    },
    {
        label: "Items",
        href: "/items"
    }
];

export default function Menu() {
    return (
        <>
            {links.map((link) => {
                return (
                    <Link key={link.label} href={link.href}>
                        <p>{link.label}</p>
                    </Link>
                );
            })}
        </>
    )
  }