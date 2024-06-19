import { Send } from 'lucide-react'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'

interface PostProps {
  title: string
  tag: string
  imgURL?: string
  href?: string
  createdAt: Date
}

interface Props {
  post: PostProps
}

export default function Post({ post }: Props) {
  const date = moment(post.createdAt).format('LL')
  return (
    <Link
      href=""
      className="relative min-h-[14.0625rem] w-full max-w-[25rem] rounded"
    >
      <Image
        src="../google.svg"
        alt="teste"
        height={200}
        width={400}
        className="absolute h-full rounded object-contain"
      />
      <div className="absolute flex h-full w-full flex-col justify-between rounded bg-[linear-gradient(rgb(0,0,0,.1),55%,rgb(0,0,0))] p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold capitalize text-[white]">
              {post.tag}
            </span>
            <span className="text-sm font-light text-light-300">
              {String(date)}
            </span>
          </div>
          <Send size={14} className="text-[white]" />
        </div>
        <h2 className="text-xl font-semibold text-[white]">{post.title}</h2>
      </div>
    </Link>
  )
}
