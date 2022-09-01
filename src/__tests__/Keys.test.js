import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import KeyRedux from '../components/Keys'



test('loads and displays greeting', async () => {
  // ARRANGE
  render(<KeyRedux val="test" color=""  type="string"/>)

  const button = screen.getByRole('button')
  // ASSERT
  expect(button).toBeTruthy()
  expect(button).toMatchInlineSnapshot();

})