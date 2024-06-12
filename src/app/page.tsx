'use client'

import TextField from '@/components/TextField'
import { useState } from 'react'

export default function Home() {
  const [value, setValue] = useState('')

  return <TextField value={value} setValue={setValue} />
}
