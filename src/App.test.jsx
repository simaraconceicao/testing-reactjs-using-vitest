import { describe, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App  from './App'

/**
* @vitest-environment jsdom
*/

describe('App', () => {
  test('should render the correct elements', () => {
    render(<App />)

    expect(screen.getByAltText('issa rae balançando a cabeça')).toBeInTheDocument() 
    expect(screen.getByPlaceholderText('Digite seu nome!')).toBeInTheDocument() 
    expect(screen.getByText('Hello,')).toBeInTheDocument() 
  })

  test('should render the correct alt text', () => {
    render(<App />)

    expect(screen.getByRole('img')).toHaveAttribute('alt', 'issa rae balançando a cabeça')
  })

  test('should render the correct name when the user filled', () => {
    render(<App />)

    const inputElement = screen.getByPlaceholderText('Digite seu nome!')
    expect(screen.queryByText('Hello,')).toBeInTheDocument() 

    userEvent.type(inputElement, 'Simara')

    waitFor(() => expect(screen.queryByText('Hello, Simara')).toBeInTheDocument() ) 
  })
})