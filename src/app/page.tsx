'use client'

import TextField from '@/components/TextField/TextField'

export default function Home() {
  const handleSearchPlayer = ({ value }: { value: string }) => {
    console.log({ value })
  }

  return <TextField handleConfirm={handleSearchPlayer} />
}
