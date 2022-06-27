import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DatePickerCalendar from './DatePickerCalendar';


describe('Component: DatePickerCalendar', () => {
  test('with default value, it should be render', () => {
    render(<DatePickerCalendar />)
    
    const component = screen.getByTestId('datepicker-calendar')
  
    expect(component).toBeInTheDocument()
  })

  test('with custom value, it should be render', () => { 
    render (
      <DatePickerCalendar 
        year={2020}
        month={0}
        day={10}
      />      
    )

    const year = screen.getAllByText('2020')
    const month = screen.getAllByText('Janvier')
    const tableHTML = screen.getByTestId('datepicker-calendar-table').innerHTML

    expect(year[0]).toBeInTheDocument()
    expect(month[0]).toBeInTheDocument()

    expect(tableHTML.includes('<div class="day day-current" data-testid="day"><span>10</span></div')).toBeTruthy()
    expect(tableHTML.includes('<div data-testid="month" class="month" data-id="0">Janvier</div>')).toBeTruthy()
    expect(tableHTML.includes('<div data-testid="year" class="year">2020</div>')).toBeTruthy()
  })

  test('i can click on header controllers', () => { 
    render (
      <DatePickerCalendar 
        year={2020}
        month={0}
        day={10}
        className={'test'}
        elevation={true}
      />      
    )

    const handleClickHome = jest.fn()
    const handleClickPreviousMonth = jest.fn()
    const handleClickNextMonth = jest.fn()
    const handleClickYear = jest.fn()
    const handleClickMonth = jest.fn()

    const homeBtn = screen.getByTestId('home-controller')
    const previousBtn = screen.getByTestId('previous-controller')
    const nextBtn = screen.getByTestId('next-controller')
    const year = screen.getAllByText('2020')
    const month = screen.getAllByText('Janvier')

    homeBtn.addEventListener('click', handleClickHome)
    previousBtn.addEventListener('click', handleClickPreviousMonth)
    nextBtn.addEventListener('click', handleClickNextMonth)
    year[0].addEventListener('click', handleClickYear)
    month[0].addEventListener('click', handleClickMonth)

    fireEvent.click(homeBtn)
    fireEvent.click(previousBtn)
    fireEvent.click(nextBtn)
    fireEvent.click(year[0])
    fireEvent.click(month[0])

    expect(handleClickHome).toBeCalled()
    expect(handleClickPreviousMonth).toBeCalled()
    expect(handleClickNextMonth).toBeCalled()
    expect(handleClickYear).toBeCalled()
    expect(handleClickMonth).toBeCalled()
  })

  test('i can select date', () => { 
    const handleOnSelect = jest.fn()

    render (
      <DatePickerCalendar 
        year={2020}
        month={0}
        day={10}
        className={'test'}
        elevation={true}
        onSelect={handleOnSelect}
      />      
    )

    const handleClickDayTable = jest.fn()
    const handleClickMonthTable = jest.fn()
    const handleClickYearTable = jest.fn()

    const day = screen.getAllByTestId('day')
    const month = screen.getAllByTestId('month')
    const year = screen.getAllByTestId('year')

    day[10].addEventListener('click', handleClickDayTable)
    month[0].addEventListener('click', handleClickMonthTable)
    year[0].addEventListener('click', handleClickYearTable)

    fireEvent.click(day[10])
    fireEvent.click(month[0])
    fireEvent.click(year[0])
    
    expect(handleClickDayTable).toHaveBeenCalled()
    expect(handleClickMonthTable).toHaveBeenCalled()
    expect(handleClickYearTable).toHaveBeenCalled()
    expect(handleOnSelect).toHaveBeenCalled()
  })

  test('i can close datepicker calendar', () => { 
    const handleOnClose = jest.fn()

    render (
      <DatePickerCalendar 
        year={2020}
        month={0}
        day={10}
        onClose={handleOnClose}
      />      
    )

    const handleClickCloseBtn = jest.fn()

    const closeBtn = screen.getByTestId('close-controller')

    closeBtn.addEventListener('click', handleClickCloseBtn)

    fireEvent.click(closeBtn)
    
    expect(handleClickCloseBtn).toHaveBeenCalled()
    expect(handleOnClose).toHaveBeenCalled()
  })
})