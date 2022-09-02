import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import KeyRedux from '../components/Keys'



test('loads calculator key', async () => {
  // ARRANGE
  render(<KeyRedux val="test" color=""  type="string"/>)

  

  const button = screen.getByRole('button')


  // clickevent의 경우, 실제 onclick listener가 상위에 존재하기 때문에 event 자체가 undefined로 기록되었다.
  // const event = await userEvent.click(button)
  
  // console.log(event)
  // ASSERT
  expect(button).toBeTruthy()
  expect(button.value).toBe('test')



})

//   expect(button).toMatchInlineSnapshot(`
// <button
//   class="span-two"
//   id="string"
//   style="background-color: rgb(235, 235, 235);"
//   value="test"
// >
//   test
// </button>
// `);