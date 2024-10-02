'use client'
import { Slack } from 'lucide-react'

import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import './amplify.css'

import outputs from '../../amplify_outputs.json'

Amplify.configure(outputs)

export default function LoginPage() {
  return (
    <div className="h-screen grid grid-cols-2">
      <div className="bg-primary">
        <div className="text-zinc-50 flex flex-col h-full justify-between p-8">
          <div className="flex items-center gap-2">
            <Slack size={24} />
            <span className="text-xl">ChatX</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm">
              &quot;In ChatX, every message is a new opportunity for connection;
              chat, share, and turn your interactions into memorable
              experiences!&quot;
            </span>
            <span className="text-xs pt-4">Victor Mota</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col gap-1 items-center">
            <span className="text-xl font-bold ">Login to your account</span>
            <span className="text-sm text-zinc-500">
              Enter your email below to login to your account
            </span>
          </div>
          <Authenticator></Authenticator>
        </div>
      </div>
    </div>
  )
}
