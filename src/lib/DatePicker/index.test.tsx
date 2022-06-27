import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DatePicker from '../DatePicker'


describe('Component: DatePicker', () => {
  test('it should be render', () => {
    render(<DatePicker label='datepicker' name='datepicker' />)
    
    const component = screen.getByTestId('datepicker')
    const label = screen.getByText('datepicker')
  
    expect(component).toBeInTheDocument()
    expect(label).toBeInTheDocument()
  })

  test('it can show calendar', () => {
    const handleClick = jest.fn()
    const handleBlur = jest.fn()

    render(
      <DatePicker 
        label='' 
        name=''
      />
    )
    

    const component = screen.getByTestId('datepicker')

    component.addEventListener('click', handleClick)
    document.addEventListener('mousedown', handleBlur)

    fireEvent.click(component)
    fireEvent.click(component) // test input is already focus
    fireEvent.mouseDown(document)    

    expect(handleClick).toHaveBeenCalled()
    expect(handleBlur).toHaveBeenCalled()  
  })

  test('it can select date on date picker calendar', () => {
    const handleSelect = jest.fn()

    render(
      <DatePicker 
        label='' 
        name=''
        onSelect={handleSelect}
      />
    )
    
    const component = screen.getByTestId('datepicker')
    fireEvent.click(component)  
    
    const day = screen.getAllByTestId('day')
    const month = screen.getAllByTestId('month')
    const year = screen.getAllByTestId('year')

    fireEvent.click(day[0])
    fireEvent.click(month[0])
    fireEvent.click(year[0])

    expect(component.className.includes('input-date--focus')).toBeTruthy()
    expect(handleSelect).toHaveBeenCalled() 
  })

  test('it can close datepicker calendar', () => {
    render(
      <DatePicker 
        label='' 
        name=''
      />
    )
    
    const component = screen.getByTestId('datepicker')
    fireEvent.click(component)  

    const closeBtn = screen.getByTestId('close-controller')
    fireEvent.click(closeBtn)

    expect(component.className.includes('input-date--focus')).toBeFalsy()
  })

  test('it can show error', () => {
    render(
      <DatePicker 
        label=''
        name=''
        errorMessage='test message error'
        error={true}
      />
    )

    const component = screen.getByTestId('datepicker')
    const errorMessage = screen.getByText('test message error')
    
    expect(component.className.includes('input-date--erro')).toBeTruthy()
    expect(errorMessage).toBeInTheDocument()
  })
})