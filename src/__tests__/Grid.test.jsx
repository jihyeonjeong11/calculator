import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Grid from '../components/Grid'

import {calKeys} from '../data/symbols'



test('loads calculator gridwrapper', async () => {
  // ARRANGE
  render(<Grid child={calKeys[0]} index="0"/>)

  const button = screen.getAllByRole('button')

  // ASSERT

   expect(button.length).toBe(3)
   expect(button[0].value).toBe('ac')


})
