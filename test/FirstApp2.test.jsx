/**
 * @jest-environment jsdom
 */



import { render, screen} from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";




describe('Pruebas en <FirstApp />', () => {

   const title = 'Hola, soy Goku';
   const subTitle = 'Soy un sutitulo';

   test('debe de hacer el match con el snapshot ', () => { 
       const {container } = render(<FirstApp title= { title } /> );
       expect( container).toMatchSnapshot();   
    });


    test('debe de mostrar el mensaje "Hola, Soy Goku" ', () => {

     
      render(<FirstApp title= {title} />);
      
      expect(screen.getByText(title)).toBeTruthy(); 

    });

    test('debe de mostrar el titulo en un H1 ', () => {
      
      renderrender(<FirstApp title= {title} />);
      expect(screen.getByRole('heading', {level: 1 }).innerHTML).toContain(title);

    });

    test('debe mostrar el subtitulo enviado por props ', () => {
      

      render(<FirstApp 
         title= { title }
         subTitle={ subTitle }
         />);
      
    });

    expect(screen.getAllByText(subTitle)).length).toBe(2);

    



});

