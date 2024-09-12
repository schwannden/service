'use client'

import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useUser } from '@auth0/nextjs-auth0/client'
import { Button } from '@/components/ui/button'
import Loading from './loading'

/** 目前首頁捨棄，將直接轉址至服事表 */
export default function Page() {
  // if auth0 is authenticated, redirect to /service
  const { user, isLoading } = useUser()
  if (isLoading) return <Loading />
  if (user) {
    redirect('/service')
  }

  return (
    <div className="bg-whitesmoke flex h-screen w-screen flex-col justify-center">
      <div className="mb-3">
        <div className="flex flex-col items-center">
          <div className="text-3xl">萬隆基督的教會</div>
          <div className="text-xl">服事表</div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center space-y-3 p-3">
          <div className="flex items-center">
            <Button asChild>
              <Link href={'/api/auth/login'}>登入</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
