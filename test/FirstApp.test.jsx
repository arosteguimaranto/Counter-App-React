/**
 * @jest-environment jsdom
 */


import { FirstApp } from '../src/FirstApp';
import {getAllByText, render } from '@testing-library/react';

describe(" Pruebas en <FirstApp/> ", () => { 
  /* 
    test("debe de hacer match con el snapshot", () => {
  
      const title ='Hola soy Goku';
      const {container } = render(<FirstApp title={title}/>)
  
      expect (container).toMatchSnapshot();
      
    }); */

  test('debe de mostrar el titulo en un h1', () => {

    const title = 'Hola Soy Goku';
    const { container, getByText, getByTestId } = render(<FirstApp title={title} />)

    expect(getByText(title)).toBeTruthy();

    /*  const h1 = container.querySelector('h1'); 

     expect(h1.innerHTML).toContain( title ) */

    expect(getByTestId('test-title').innerHTML).toContain(title)
  });
  

  test('debe de mostrar el subtitulo enviado por props', () => {

    const title = 'Hola soy Goku';
    const subTitle = 'Soy un subtitulo';
    const { getAllByAltText } = render(
      <FirstApp 
      title={ title }
      subTitle={ subTitle }
     
      />
      );

      expect( getAllByAltText(subTitle)).toContain();
      



  })
});
