
import capitalize from "./capitalize"

test('capitalize one word', () => {

    expect(capitalize('hola')).toEqual('Hola');
})

test('capitalize with more than one word', () => {

    expect(capitalize('hola mundo')).toEqual('Hola mundo');
})