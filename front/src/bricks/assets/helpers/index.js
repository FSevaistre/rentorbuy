import React from 'react'
import { Tag } from '../../index'

const TAG = {
  easy: { label: 'facile', variant: 'success' },
  medium: { label: 'assez facile', variant: 'success' },
  hard: { label: 'difficile', variant: 'warning' }
}
export const scoreToTag = value => {
  let score = 'easy'
  if (value < 80) score = 'medium'
  if (value < 50) score = 'hard'

  return (
    <Tag size="small" variant={TAG[score].variant}>
      {TAG[score].label}
    </Tag>
  )
}
