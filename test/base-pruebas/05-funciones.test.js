import { getUser, getUsuarioActivo } from "../../src/base-pruebas/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
    
    test('getUser debe de retornar un objeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        
        const user = getUser();

        expect( testUser).toStrictEqual(user);
        
     });

     test('getUsuarioActivo debe retornar un objeto',()  => {
        
        const nombre = 'Dylan';
        const usuarioActivo = getUsuarioActivo(nombre);

        const testUsuarioActivo ={
            uid: 'ABC567',
            username: nombre
        };

        

        expect(usuarioActivo).toStrictEqual(testUsuarioActivo);


     });
 });