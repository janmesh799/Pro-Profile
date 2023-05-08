import React from 'react'
import { useSelector } from 'react-redux'

const SkillsComponent = () => {
  const { skills } = useSelector(state => state.profile)
  return (
    <div>SkillsComponent</div>
  )
}

export default SkillsComponent