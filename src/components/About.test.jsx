import '@testing-library/jest-dom/extend-except'
import React from 'react'
import {render,screen} from './@testing-library/react'
import {About} from './About'

Test('should render title',()=>{
    render(<About />)
    const h1Element=screen.getByText('Upload into')
    expect(h1Element).toBeInTheDocument()
    
})