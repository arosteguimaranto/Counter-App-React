import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/base-pruebas/08-imp-exp";


describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroById debe de retornar un heroe por id', () => { 
        
        const id = 1;
        const hero = getHeroeById( id);
        
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

     });

     test('getHeroById debe de retornar undefined si no existe el id', () => { 
        
        const id = 100;
        const hero = getHeroeById( id);
        expect ( hero ).toBeFalsy();
       // expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

     });


     // Tarea:
     // Debe retornar un arreglo con los heroes de DC
     // Length === 3
     //toEqual al arreglo filtrado

     test('getHeroByOwner debe de retornar heroes de DC', () => { 
        
        const owner = 'DC';
        const hero = getHeroesByOwner( owner);

        expect(hero.length).toBe(3);
        expect ( owner ).toEqual(owner);
        console.log(hero);
       

     });

     //debe retirbar yb arreglo con los heroes de Marvel
     //lenght === 2

     test('getHeroByOwner debe de retornar heroes de Marvel', () => { 
        
        const ownerM = 'Marvel';
        const hero = getHeroesByOwner( ownerM);
        expect ( ownerM ).toEqual(ownerM);
        console.log(hero);
       

     });

 });