import type { PropsWithChildren } from 'react'

type ContainerProps = PropsWithChildren<{
  className?: string
}>

export function Container({ className = '', children }: ContainerProps) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
}
