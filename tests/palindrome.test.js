const { palindrome } = require('../utils/for_testing.js')


describe('Palindromos', () => {


    test('palindrome of lilian', () => {
        const result = palindrome('lilian')

        expect(result).toBe('nailil')
    })

    test('palindrome vacio', () => {
        const result = palindrome('')

        expect(result).toBe('')
    })

    test('palindrome indefinido', () => {
        const result = palindrome()

        expect(result).toBe('')
    })

})