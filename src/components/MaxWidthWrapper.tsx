import { mc } from 'merge-class'
import React from 'react'

type Props = {
  className?: string
  children: React.ReactNode
}

const MaxWidthWrapper = ({className,children}: Props) => {
  return (
    <div className={mc("mx-auto w-full max-w-screen-xl px-2.5 md:px-20",className)}>{children}</div>
  )
}

export default MaxWidthWrapper