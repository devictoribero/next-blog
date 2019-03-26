import Link from 'next/link'

export default function Index() {
  return (
  <div>
    <Link href={`/blog`}>
      <a>
        go to blog
      </a>
    </Link>
    <div>index</div>
  </div>
  )
}