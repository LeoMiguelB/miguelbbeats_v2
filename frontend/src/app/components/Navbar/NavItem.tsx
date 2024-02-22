import Link from "next/link";

const Item = ({page, nav}: {page: string, nav: string}) => {
  return (
    <li>
      <Link href={nav} className="block py-2 px-3 text-white" aria-current="page">{page}</Link>
    </li>
  )
}

export default Item;