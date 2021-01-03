import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LinkWrapper(props: {
  children: JSX.Element
  href: string
  styles: string
}) {
  const { children, href, styles } = props
  const { pathname } = useRouter()
  const isActive = pathname === href || null

  return (
    <li data-is-active={isActive} className={styles}>
      <Link href={href}>{children}</Link>
    </li>
  )
}
